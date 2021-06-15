import { setNativeExceptionHandler, setJSExceptionHandler } from "react-native-exception-handler";
import VersionNumber from 'react-native-version-number';
import { Platform } from 'react-native';
import Navigation from './navigation';

const params = `?version_code=${VersionNumber.appVersion}&version_os=${Platform.OS}_${Platform.Version}&error=`;
const appTypeUri = `/api/lib/rn-log-error${params}`;

export function JSExceptionHandler(url, appType) {
    try {
        setJSExceptionHandler((error) => {
            fetch(`${url}${appTypeUri}${error}&app=${appType}`);
        }, true);
    } catch (error) {
        console.log('JSExceptionHandler', error);
    }
}

export function NativeExceptionHandler(url, appType) {
    try {
        //NOTE: alert or showing any UI change via JS
        //WILL NOT WORK in case of NATIVE ERRORS.
        setNativeExceptionHandler((exceptionString) => {
            fetch(`${url}${appTypeUri}${exceptionString}&app=${appType}`);
        });
    } catch (NativeExceptionHandler) {
        console.log('JSExceptionHandler', error);
    }
}