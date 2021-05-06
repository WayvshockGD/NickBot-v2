import Logger from "./util/Logger";
import Utility from "./util/Utility";

class Helper {
    get logger() {
        return Logger;
    }

    get utils() {
        return new Utility();
    }
}

export default Helper;