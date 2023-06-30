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
    var emergencyNumbers = {
        AD: {
            fire: 118,
            police: 110,
            ambulance: 118,
        },
        AE: {
            fire: 997,
            police: 999,
            ambulance: 998,
        },
        AF: {
            fire: 119,
            police: 119,
            ambulance: 119,
        },
        AG: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        AL: {
            fire: 128,
            police: 129,
            ambulance: 127,
        },
        AM: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        AO: {
            fire: 115,
            police: 113,
            ambulance: 112,
        },
        AR: {
            fire: 100,
            police: 911,
            ambulance: 107,
        },
        AT: {
            fire: 122,
            police: 133,
            ambulance: 144,
        },
        AU: {
            fire: 0,
            police: 0,
            ambulance: 0,
        },
        AZ: {
            fire: 112,
            police: 102,
            ambulance: 103,
        },
        BA: {
            fire: 123,
            police: 122,
            ambulance: 124,
        },
        BB: {
            fire: 311,
            police: 211,
            ambulance: 511,
        },
        BD: {
            fire: 199,
            police: 999,
            ambulance: 199,
        },
        BE: {
            fire: 112,
            police: 101,
            ambulance: 100,
        },
        BF: {
            fire: 18,
            police: 17,
            ambulance: 112,
        },
        BG: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        BH: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        BI: {
            fire: 118,
            police: 117,
            ambulance: 112,
        },
        BJ: {
            fire: 118,
            police: 117,
            ambulance: 112,
        },
        BN: {
            fire: 995,
            police: 993,
            ambulance: 991,
        },
        BO: {
            fire: 119,
            police: 110,
            ambulance: 118,
        },
        BR: {
            fire: 193,
            police: 190,
            ambulance: 192,
        },
        BS: {
            fire: 919,
            police: 919,
            ambulance: 919,
        },
        BT: {
            fire: 110,
            police: 113,
            ambulance: 112,
        },
        BW: {
            fire: 999,
            police: 999,
            ambulance: 997,
        },
        BY: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        BZ: {
            fire: 90,
            police: 911,
            ambulance: 90,
        },
        CA: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        CD: {
            fire: 118,
            police: 117,
            ambulance: 112,
        },
        CF: {
            fire: 118,
            police: 117,
            ambulance: 1220,
        },
        CG: {
            fire: 118,
            police: 117,
            ambulance: 112,
        },
        CH: {
            fire: 118,
            police: 117,
            ambulance: 144,
        },
        CI: {
            fire: 180,
            police: 111,
            ambulance: 185,
        },
        CL: {
            fire: 132,
            police: 133,
            ambulance: 131,
        },
        CM: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        CN: {
            fire: 119,
            police: 110,
            ambulance: 120,
        },
        CO: {
            fire: 119,
            police: 112,
            ambulance: 123,
        },
        CR: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        CU: {
            fire: 105,
            police: 106,
            ambulance: 104,
        },
        CV: {
            fire: 132,
            police: 132,
            ambulance: 132,
        },
        CY: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        CZ: {
            fire: 150,
            police: 158,
            ambulance: 155,
        },
        DE: {
            fire: 112,
            police: 110,
            ambulance: 112,
        },
        DJ: {
            fire: 3510,
            police: 17,
            ambulance: 3510,
        },
        DK: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        DM: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        DO: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        DZ: {
            fire: 14,
            police: 17,
            ambulance: 14,
        },
        EC: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        EE: {
            fire: 112,
            police: 110,
            ambulance: 112,
        },
        EG: {
            fire: 180,
            police: 122,
            ambulance: 123,
        },
        ER: {
            fire: 119,
            police: 119,
            ambulance: 119,
        },
        ES: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        ET: {
            fire: 939,
            police: 911,
            ambulance: 907,
        },
        FI: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        FJ: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        FM: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        FR: {
            fire: 112,
            police: 17,
            ambulance: 15,
        },
        GA: {
            fire: 18,
            police: 1730,
            ambulance: 1300,
        },
        GB: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        GD: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        GE: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        GH: {
            fire: 192,
            police: 191,
            ambulance: 193,
        },
        GM: {
            fire: 118,
            police: 117,
            ambulance: 116,
        },
        GN: {
            fire: 18,
            police: 117,
            ambulance: 2245050,
        },
        GQ: {
            fire: 118,
            police: 114,
            ambulance: 112,
        },
        GR: {
            fire: 112,
            police: 100,
            ambulance: 166,
        },
        GT: {
            fire: 123,
            police: 110,
            ambulance: 128,
        },
        GW: {
            fire: 118,
            police: 117,
            ambulance: 119,
        },
        GY: {
            fire: 912,
            police: 911,
            ambulance: 913,
        },
        HN: {
            fire: 198,
            police: 199,
            ambulance: 195,
        },
        HR: {
            fire: 193,
            police: 192,
            ambulance: 194,
        },
        HT: {
            fire: 118,
            police: 114,
            ambulance: 116,
        },
        HU: {
            fire: 112,
            police: 107,
            ambulance: 104,
        },
        ID: {
            fire: 113,
            police: 110,
            ambulance: 118,
        },
        IE: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        IL: {
            fire: 102,
            police: 100,
            ambulance: 101,
        },
        IN: {
            fire: 101,
            police: 100,
            ambulance: 102,
        },
        IQ: {
            fire: 115,
            police: 104,
            ambulance: 122,
        },
        IR: {
            fire: 125,
            police: 110,
            ambulance: 115,
        },
        IS: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        IT: {
            fire: 115,
            police: 113,
            ambulance: 118,
        },
        JM: {
            fire: 110,
            police: 119,
            ambulance: 110,
        },
        JO: {
            fire: 199,
            police: 191,
            ambulance: 193,
        },
        JP: {
            fire: 119,
            police: 110,
            ambulance: 119,
        },
        KE: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        KG: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        KH: {
            fire: 118,
            police: 117,
            ambulance: 119,
        },
        KI: {
            fire: 192,
            police: 194,
            ambulance: 193,
        },
        KM: {
            fire: 18,
            police: 17,
            ambulance: 19,
        },
        KN: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        KR: {
            fire: 119,
            police: 112,
            ambulance: 119,
        },
        KW: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        KZ: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        LA: {
            fire: 190,
            police: 191,
            ambulance: 195,
        },
        LB: {
            fire: 175,
            police: 112,
            ambulance: 140,
        },
        LC: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        LI: {
            fire: 118,
            police: 117,
            ambulance: 144,
        },
        LK: {
            fire: 110,
            police: 119,
            ambulance: 110,
        },
        LR: {
            fire: 113,
            police: 102,
            ambulance: 4455,
        },
        LS: {
            fire: 121,
            police: 122,
            ambulance: 123,
        },
        LT: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        LU: {
            fire: 112,
            police: 113,
            ambulance: 112,
        },
        LV: {
            fire: 112,
            police: 110,
            ambulance: 113,
        },
        LY: {
            fire: 1515,
            police: 1515,
            ambulance: 1515,
        },
        MA: {
            fire: 150,
            police: 190,
            ambulance: 150,
        },
        MC: {
            fire: 112,
            police: 17,
            ambulance: 15,
        },
        MD: {
            fire: 901,
            police: 902,
            ambulance: 903,
        },
        ME: {
            fire: 123,
            police: 122,
            ambulance: 124,
        },
        MG: {
            fire: 117,
            police: 117,
            ambulance: 117,
        },
        MH: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        MK: {
            fire: 193,
            police: 192,
            ambulance: 194,
        },
        ML: {
            fire: 118,
            police: 17,
            ambulance: 15,
        },
        MM: {
            fire: 191,
            police: 199,
            ambulance: 192,
        },
        MN: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        MR: {
            fire: 118,
            police: 117,
            ambulance: 116,
        },
        MT: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        MU: {
            fire: 115,
            police: 112,
            ambulance: 114,
        },
        MV: {
            fire: 118,
            police: 119,
            ambulance: 102,
        },
        MW: {
            fire: 998,
            police: 997,
            ambulance: 999,
        },
        MX: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        MY: {
            fire: 994,
            police: 999,
            ambulance: 999,
        },
        MZ: {
            fire: 198,
            police: 119,
            ambulance: 117,
        },
        NA: {
            fire: 112,
            police: 10111,
            ambulance: 112,
        },
        NE: {
            fire: 18,
            police: 17,
            ambulance: 15,
        },
        NG: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        NI: {
            fire: 118,
            police: 118,
            ambulance: 128,
        },
        NL: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        NO: {
            fire: 110,
            police: 112,
            ambulance: 113,
        },
        NP: {
            fire: 101,
            police: 100,
            ambulance: 102,
        },
        NR: {
            fire: 110,
            police: 110,
            ambulance: 110,
        },
        NZ: {
            fire: 111,
            police: 111,
            ambulance: 111,
        },
        OM: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        PA: {
            fire: 103,
            police: 104,
            ambulance: 911,
        },
        PE: {
            fire: 116,
            police: 105,
            ambulance: 117,
        },
        PG: {
            fire: 0,
            police: 112,
            ambulance: 0,
        },
        PH: {
            fire: 117,
            police: 117,
            ambulance: 117,
        },
        PK: {
            fire: 16,
            police: 15,
            ambulance: 115,
        },
        PL: {
            fire: 998,
            police: 997,
            ambulance: 999,
        },
        PT: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        PW: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        PY: {
            fire: 132,
            police: 911,
            ambulance: 141,
        },
        QA: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        RO: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        RS: {
            fire: 193,
            police: 192,
            ambulance: 194,
        },
        RU: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        RW: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        SA: {
            fire: 998,
            police: 999,
            ambulance: 997,
        },
        SB: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        SC: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        SD: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        SE: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        SG: {
            fire: 995,
            police: 999,
            ambulance: 995,
        },
        SI: {
            fire: 112,
            police: 113,
            ambulance: 112,
        },
        SK: {
            fire: 112,
            police: 158,
            ambulance: 155,
        },
        SL: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        SM: {
            fire: 115,
            police: 113,
            ambulance: 118,
        },
        SN: {
            fire: 18,
            police: 17,
            ambulance: 15,
        },
        SO: {
            fire: 555,
            police: 555,
            ambulance: 555,
        },
        SR: {
            fire: 110,
            police: 115,
            ambulance: 113,
        },
        SS: {
            fire: 999,
            police: 999,
            ambulance: 999,
        },
        ST: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        SV: {
            fire: 913,
            police: 911,
            ambulance: 132,
        },
        SY: {
            fire: 113,
            police: 112,
            ambulance: 110,
        },
        SZ: {
            fire: 999,
            police: 999,
            ambulance: 977,
        },
        TD: {
            fire: 2251,
            police: 17,
            ambulance: 2251,
        },
        TG: {
            fire: 118,
            police: 117,
            ambulance: 111,
        },
        TH: {
            fire: 199,
            police: 191,
            ambulance: 1669,
        },
        TJ: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        TL: {
            fire: 115,
            police: 112,
            ambulance: 114,
        },
        TM: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        TN: {
            fire: 198,
            police: 197,
            ambulance: 190,
        },
        TO: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        TR: {
            fire: 110,
            police: 155,
            ambulance: 112,
        },
        TT: {
            fire: 990,
            police: 999,
            ambulance: 990,
        },
        TW: {
            fire: 119,
            police: 110,
            ambulance: 119,
        },
        TZ: {
            fire: 114,
            police: 112,
            ambulance: 115,
        },
        UA: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        UG: {
            fire: 112,
            police: 999,
            ambulance: 112,
        },
        US: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        UY: {
            fire: 104,
            police: 911,
            ambulance: 105,
        },
        UZ: {
            fire: 101,
            police: 102,
            ambulance: 103,
        },
        VC: {
            fire: 911,
            police: 911,
            ambulance: 911,
        },
        VE: {
            fire: 171,
            police: 911,
            ambulance: 161,
        },
        VN: {
            fire: 114,
            police: 113,
            ambulance: 115,
        },
        VU: {
            fire: 112,
            police: 112,
            ambulance: 112,
        },
        WS: {
            fire: 994,
            police: 995,
            ambulance: 996,
        },
        YE: {
            fire: 191,
            police: 194,
            ambulance: 191,
        },
        ZA: {
            fire: 10177,
            police: 10111,
            ambulance: 10177,
        },
        ZM: {
            fire: 993,
            police: 991,
            ambulance: 992,
        },
        ZW: {
            fire: 993,
            police: 995,
            ambulance: 994,
        },
    };
    exports.default = emergencyNumbers;
});
//# sourceMappingURL=metadata.js.map