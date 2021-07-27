import { setNativeExceptionHandler, setJSExceptionHandler } from "./errorLog";
import VersionNumber from "react-native-version-number";
import { Platform } from "react-native";

const params = `?version_code=${VersionNumber.appVersion}&version_os=${Platform.OS}_${Platform.Version}&error=`;
const appTypeUri = `/api/lib/rn-log-error${params}`;
let url = "";
let appType = "";

export function JSExceptionHandler(url, appType) {
  try {
    if (typeof url !== "string" || appType !== "string") {
      return;
    }
    url = url;
    appType = appType;
    setJSExceptionHandler(errorHandler, true);
  } catch (error) {
    console.log("JSExceptionHandler", error);
  }
}

export function NativeExceptionHandler(url, appType) {
  try {
    //NOTE: alert or showing any UI change via JS
    //WILL NOT WORK in case of NATIVE ERRORS.
    if (typeof url !== "string" || appType !== "string") {
      return;
    }
    url = url;
    appType = appType;
    setNativeExceptionHandler(errorHandler);
  } catch (NativeExceptionHandler) {
    console.log("JSExceptionHandler", error);
  }
}

const errorHandler = (e, isFatal = true) => {
  fetch(`${url}${appTypeUri}${e.name}${e.message}&app=${appType}`);
};
