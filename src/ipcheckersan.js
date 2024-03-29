"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch = require("isomorphic-fetch");
/**
 * @class
 */
var IpCheckerSan = /** @class */ (function () {
    /**
     * @constructor
     */
    function IpCheckerSan() {
        var _this = this;
        this.fetchCompleted = false;
        fetch('https://ipinfo.io?callback')
            .then(function (res) { return res.json(); })
            .then(function (json) {
            var _a;
            var ipInfo = json;
            _this.ipAddress = ipInfo.ip;
            _this.hostName = ipInfo.hostname;
            _this.cityName = ipInfo.city;
            _this.regionName = ipInfo.region;
            _this.countryName = ipInfo.country;
            _this.coordinate = ipInfo.loc;
            _this.organizationName = ipInfo.org;
            _this.postalCode = ipInfo.postal;
            _this.timeZone = ipInfo.timezone;
            _this.ipInfo = ipInfo;
            _a = ipInfo.loc.split(","), _this.coordinateLatitude = _a[0], _this.coordinateLongitude = _a[1];
            _this.fetchCompleted = true;
        });
    }
    /**
     * IPアドレスを取得
     *
     * @method
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.ip = function () {
        if (!this.completed()) {
            return null;
        }
        return this.ipAddress;
    };
    /**
     * ホストネームを取得
     *
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.hostname = function () {
        if (!this.completed()) {
            return null;
        }
        return this.hostName;
    };
    /**
     * 市区町村を取得
     *
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.city = function () {
        if (!this.completed()) {
            return null;
        }
        return this.cityName;
    };
    /**
     * 地域を取得
     *
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.region = function () {
        if (!this.completed()) {
            return null;
        }
        return this.regionName;
    };
    /**
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.country = function () {
        if (!this.completed()) {
            return null;
        }
        return this.countryName;
    };
    /**
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.location = function () {
        if (!this.completed()) {
            return null;
        }
        return this.coordinate;
    };
    /**
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.latitude = function () {
        if (!this.completed()) {
            return null;
        }
        return this.coordinateLatitude;
    };
    /**
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.longitude = function () {
        if (!this.completed()) {
            return null;
        }
        return this.coordinateLongitude;
    };
    /**
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.organization = function () {
        if (!this.completed()) {
            return null;
        }
        return this.organizationName;
    };
    /**
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.postcode = function () {
        if (!this.completed()) {
            return null;
        }
        return this.postalCode;
    };
    /**
     * @method
     * @public
     *
     * @returns {string | null}
     */
    IpCheckerSan.prototype.timezone = function () {
        if (!this.completed()) {
            return null;
        }
        return this.timeZone;
    };
    /**
     * @method
     * @public
     *
    * @returns {IpInfo}
     */
    IpCheckerSan.prototype.all = function () {
        if (!this.completed()) {
            return null;
        }
        return this.ipInfo;
    };
    /**
     * @method
     * @private
     *
     * @return {Promise<boolean>}
     */
    IpCheckerSan.prototype.completed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var counter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        counter = 1;
                        _a.label = 1;
                    case 1:
                        if (!!this.fetchCompleted) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                setTimeout(resolve, 100);
                            })];
                    case 2:
                        _a.sent();
                        counter++;
                        if (counter === 10) {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    return IpCheckerSan;
}());
module.exports = IpCheckerSan;
