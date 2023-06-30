(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NumberType = void 0;
    var NumberType;
    (function (NumberType) {
        NumberType["FIRE"] = "fire";
        NumberType["POLICE"] = "police";
        NumberType["AMBULANCE"] = "ambulance";
    })(NumberType || (exports.NumberType = NumberType = {}));
    ;
});
//# sourceMappingURL=constants.js.map