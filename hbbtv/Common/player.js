var $Player = function() {
    function h(b, e) {
        this._listener = b || {
            _width: 1280,
            _height: 720
        };
        this._listener._width || (this._listener._width = 1280);
        this._listener._height || (this._listener._height = 720);
        this.startTime = e;
        this.control = this.type = this.url = null;
        this.ready = !1;
        this._data = this.drm = null
    }
    function k(b) {
        var e = document.createElement("div");
        e.innerHTML = b;
        return e.firstChild
    }
    function l(b, e, c) {
        function a(b) {
            var e = 2 !== (b.status / 100 | 0);
            return {
                errorFlag: e,
                statusText: b.statusText,
                status: b.status,
                response: e ? b.statusText : b.response,
                responseURL: b.responseURL
            }
        }
        if (!b || null === b.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g))
            return e({
                errorFlag: !0,
                statusText: "invalid url:" + b,
                status: 0,
                response: "",
                responseURL: b
            });
        b = b.replace(/^http:\/\//i, "https://");
        var d = new XMLHttpRequest;
        d.open("GET", b);
        d.timeout = c || 8E3;
        d.send(null);
        d.onload = function() {
            e(a(this))
        }
        ;
        d.onerror = function() {
            e(a(this))
        }
        ;
        d.ontimeout = function() {
            e(a(this))
        }
    }
    function f(b, e, c) {
        var a = document.createElement("script");
        a.src = b;
        a.onload = function() {
            e(b)
        }
        ;
        a.onerror = function() {
            e(null, {
                error: "error",
                url: b
            })
        }
        ;
        c.appendChild(a)
    }
    var g = {
        drm: {
            "urn:dvb:casystemid:19188": {
                name: "MARLIN",
                caSystemId: "urn:dvb:casystemid:19188"
            },
            "urn:dvb:casystemid:19219": {
                name: "PLAYREADY",
                caSystemId: "urn:dvb:casystemid:19219"
            },
            "urn:dvb:casystemid:19156": {
                name: "WIDEVINE",
                caSystemId: "urn:dvb:casystemid:19156"
            }
        },
        clearLicence: function(b) {
            var e = setTimeout(function() {
                b(0)
            }, 600);
            g.sendLicenceRequest({
                msgType: "application/vnd.ms-playready.initiator+xml",
                xmlLicenceAcquisition: '<?xml version="1.0" encoding="utf-8"?><PlayReadyInitiator xmlns="http://schemas.microsoft.com/DRM/2007/03/protocols/"></PlayReadyInitiator>',
                DRMSysID: "urn:dvb:casystemid:19219"
            }, function(a) {
                e && clearTimeout(e);
                b(a)
            })
        },
        sendLicenceRequest: function(b, e) {
            console.log("sendLicenceRequest");
            console.log(b);
            var a = document.querySelector("#appdrm");
            a || (document.body.appendChild(k('<object id="appdrm" type="application/oipfDrmAgent" style="position: absolute; left: 0; top: 0; width: 0; height: 0;"></object>')),
            a = document.querySelector("#appdrm"));
            a.onDRMMessageResult = function(b, a, c) {
                switch (c) {
                case 1:
                    var d = "DRM: Unspecified error";
                    break;
                case 2:
                    d = "DRM: Cannot process request";
                    break;
                case 3:
                    d = "DRM: Wrong format";
                    break;
                case 4:
                    d = "DRM: User Consent Needed";
                    break;
                case 5:
                    d = "DRM: Unknown DRM system"
                }
                e(c, d, d)
            }
            ;
            a.onDRMRightsError = function(b, a, c, d) {
                a = "";
                switch (b) {
                case 0:
                    a = "DRM: No license error " + c;
                    break;
                case 1:
                    a = "DRM: Invalid license error " + c;
                    break;
                case 2:
                    a = "license valid " + c
                }
                e(-1, a, "E" + b)
            }
            ;
            if ("function" === typeof a.sendDRMMessage)
                try {
                    a.sendDRMMessage(b.msgType, b.xmlLicenceAcquisition, b.DRMSysID)
                } catch (u) {
                    e(-1, u.toString(), "Er9")
                }
            else
                e(-1, "No DRM Agent")
        },
        getPlayReadyPayload: function(b, e) {
            console.log("getPlayReadyPayload: " + e);
            var a = "";
            if (e) {
                e = b.split("?");
                for (var c = e[1].split("#")[0].split("&"), d, f = 0; !d && f < c.length; f++) {
                    var g = c[f].split("=");
                    "Authorization" === g[0] && (d = '{"nv-authorizations": ["' + g[1] + '"]}')
                }
                d && (a = "<SetCustomData><CustomData>" + d + "</CustomData></SetCustomData>",
                b = e[0],
                console.log("- TOKEN-BASE64: " + d),
                console.log("- LA-URL: " + b),
                console.log("- CUSTOM-DATA: " + a),
                a = '<?xml version="1.0" encoding="utf-8"?><PlayReadyInitiator xmlns="http://schemas.microsoft.com/DRM/2007/03/protocols/">' + a + "</PlayReadyInitiator>")
            }
            return {
                msgType: "application/vnd.ms-playready.initiator+xml",
                xmlLicenceAcquisition: '<?xml version="1.0" encoding="utf-8"?><PlayReadyInitiator xmlns="http://schemas.microsoft.com/DRM/2007/03/protocols/"><LicenseServerUriOverride><LA_URL>' + b + "</LA_URL></LicenseServerUriOverride></PlayReadyInitiator>",
                customXml: a,
                DRMSysID: "urn:dvb:casystemid:19219"
            }
        }
    }
      , d = "PLAYREADY";
    h.prototype.seek = function(b) {
        this._time = b
    }
    ;
    h.prototype.onMedia = function(b) {
        this.url = (b && b.url || "").trim();
        this.type = b && b.type;
        this.config = b && b.config
    }
    ;
    h.prototype.dispose = function() {
        var b = this.control && this.control.parentNode;
        b && b.removeChild(this.control);
        this.drm = this.type = this.url = this._listener = this.control = null;
        this.ready = !1
    }
    ;
    h.prototype.setDRM = function(b, a) {
        var e = d
          , c = b[e];
        if (this.drm = c) {
            if ($Player.mse && (window.pico || window.Hls || window.dashjs))
                return a(0, "using mse engine");
            console.log("clearing licence...");
            g.clearLicence(function() {
                var b = g.getPlayReadyPayload(c.url, "nagra" === c.operator);
                console.log("drm operator: " + c.operator);
                b.customXml ? (console.log("|__ sending custom parameters..."),
                g.sendLicenceRequest({
                    msgType: b.msgType,
                    xmlLicenceAcquisition: b.customXml,
                    DRMSysID: b.DRMSysID
                }, function(e, c) {
                    console.log("|__ custom payload result: " + e + " " + c);
                    0 === e ? (console.log("|__ sending LA-URL"),
                    g.sendLicenceRequest(b, a)) : a(e, c)
                })) : g.sendLicenceRequest(b, a)
            })
        } else
            a(-1, "", e + " NOT found")
    }
    ;
    h.prototype.isDash = function() {
        return this.type === $Player.MEDIA_TYPES.MPD
    }
    ;
    h.prototype.isHls = function() {
        return this.type === $Player.MEDIA_TYPES.M3U8
    }
    ;
    h.prototype.getError = function() {}
    ;
    h.prototype.getQuality = function(b) {}
    ;
    h.prototype.applySettings = function(b) {}
    ;
    var c = function() {
        var b = "capabilities vendorName modelName softwareVersion hardwareVersion familyName reserved".split(" ")
          , a = {}
          , c = /HbbTV\/(\d.\d.\d)\s\((.*?)\)/gm.exec(navigator.userAgent);
        if (c && 1 < c.length) {
            Object.defineProperty(a, "version", {
                value: c[1],
                writable: !1,
                enumerable: !0
            });
            c = c[2].split(";");
            for (var d = 0, f = c.length; d < f; d++)
                Object.defineProperty(a, b[d], {
                    value: c[d] && c[d].trim(),
                    writable: !1,
                    enumerable: !0
                })
        }
        return a
    }()
      , a = function() {
        var b = {
            resolution: "",
            framerate: "",
            isHDR: !1,
            pointer: !1,
            hasParentalControl: !1,
            drmList: [],
            drmHashSet: {}
        }
          , a = document.querySelector('object[type="application/oipfCapabilities"]');
        if (!a) {
            if (window.oipfObjectFactory && oipfObjectFactory.isObjectSupported("application/oipfCapabilities"))
                try {
                    a = oipfObjectFactory.createCapabilitiesObject()
                } catch (r) {}
            if (!a)
                return b
        }
        b.extraSDVideoDecodes = a.extraSDVideoDecodes;
        b.extraHDVideoDecodes = a.extraHDVideoDecodes;
        b.extraUHDVideoDecodes = a.extraUHDVideoDecodes;
        if (a = (a.xmlCapabilities || {}).documentElement) {
            var c = a.getElementsByTagName("video_display_format")[0];
            if (c) {
                var d = c.getAttribute("height");
                b.resolution = "4320" === d ? "8K" : "2160" === d ? "UHD" : "HD";
                b.isHDR = -1 !== c.getAttribute("colorimetry").indexOf("bt2020");
                b.framerate = c.getAttribute("frame_rate")
            } else {
                if (c = a.getElementsByTagName("video_profile"))
                    for (d = 0; !b.resolution && d < c.length; d++) {
                        var f = c[d].getAttribute("name");
                        f && -1 !== f.indexOf("HEVC_UHD") && (b.resolution = "UHD")
                    }
                b.resolution || (b.resolution = "HD")
            }
            if (c = a.getElementsByTagName("drm"))
                for (d = 0; d < c.length; d++)
                    (f = c[d].getAttribute("DRMSystemID")) && !b.drmHashSet[f] && (b.drmHashSet[f] = !0,
                    g.drm[f] && b.drmList.push(g.drm[f].name));
            c = a.getElementsByTagName("parentalcontrol");
            if (c.length)
                for (d = 0; !b.hasParentalControl && d < c.length; d++)
                    "dvb-si" === (c[d].getAttribute("schemes") || c[d].getAttribute("scheme")) && (b.hasParentalControl = "true" === c[d].textContent);
            a = a.getElementsByTagName("pointer");
            a.length && a[0] && (b.pointer = "true" === a[0].textContent.toLowerCase())
        }
        return b
    }();
    return {
        MAJOR: 1,
        MINOR: 9,
        PATCH: 3,
        HLS_LIB_URL: "https://www.raiplay.it/hbbtv/Common/hls.min.js",
        DASH_LIB_URL: "https://www.raiplay.it/hbbtv/Common/dash.js",
        MEDIA_TYPES: {
            MP4: "video/mp4",
            MPD: "application/dash+xml",
            M3U8: "application/vnd.apple.mpegurl"
        },
        mse: !1,
        ads_timeout: 5E3,
        protocol: "hbbtv",
        output: "62",
        preferredMSEEngine: "pico",
        getVersionString: function() {
            return this.MAJOR + "." + this.MINOR + "." + this.PATCH
        },
        getDevice: function() {
            return c
        },
        getResolution: function() {
            return a.resolution
        },
        getExtraSDDecoders: function() {
            return a.extraSDVideoDecodes || "-"
        },
        getExtraHDDecoders: function() {
            return a.extraHDVideoDecodes || "-"
        },
        getExtraUHDDecoders: function() {
            return a.extraUHDVideoDecodes || "-"
        },
        getFramerate: function() {
            return a.framerate ? a.framerate + "P" : ""
        },
        isHbbTv: function() {
            return !!c.version
        },
        isHDR: function() {
            return a.isHDR
        },
        isPointerSupported: function() {
            return a.pointer
        },
        hasParentalControl: function() {
            return a.hasParentalControl
        },
        isPlayreadySupported: function() {
            return a.drmHashSet["urn:dvb:casystemid:19219"]
        },
        getSupportedDRMs: function() {
            return a.drmList
        },
        setPreferredDRM: function(b) {
            if ("PLAYREADY" === b || "WIDEVINE" === b)
                d = b
        },
        utils: {
            html2Element: k,
            getXml: function(b, a, c) {
                l(b, function(b) {
                    if (b.errorFlag)
                        a(null, {
                            error: this.statusText,
                            code: this.status,
                            url: this.responseURL
                        });
                    else {
                        var c = b.response;
                        c = (new DOMParser).parseFromString(c, "text/xml");
                        a(c, null, b.responseURL)
                    }
                })
            },
            getJson: function(b, a) {
                l(b, function(b) {
                    if (b.errorFlag)
                        a(null, {
                            error: "error",
                            code: this.status,
                            url: this.responseURL
                        });
                    else {
                        try {
                            var c = JSON.parse(b.response)
                        } catch (r) {
                            var d = {
                                error: r,
                                code: this.status,
                                url: this.responseURL
                            }
                        }
                        a(c, d)
                    }
                })
            },
            getText: function(b, a) {
                l(b, function(b) {
                    a(b.response)
                })
            },
            toSeconds: function(b, a) {
                b = (b || "").split(a || ":");
                a = 0;
                for (var c = 1, d = b.length - 1; -1 < d; d--)
                    a += parseInt(b[d], 10) * c,
                    c *= 60;
                return a
            },
            loadLibrary: f,
            loadLibraries: function(a, c, d) {
                var b = a.length
                  , e = []
                  , g = 0;
                if (0 === b)
                    return c(e);
                for (var m = function(a, d) {
                    e.push({
                        url: a,
                        error: d
                    });
                    g += 1;
                    console.log("loaded", a, d);
                    g < b ? console.log("=> remaining " + (b - g) + " libraries...") : (console.log("all libs loaded!"),
                    c(e))
                }, k = 0; k < b; k++)
                    f(a[k], m, d)
            }
        },
        Player: h
    }
}();
(function(h) {
    function k(a, b) {
        $sOut.log("[BROADCAST] onPlayStateChange: " + ["UNREALIZED", "CONNECTING", "PRESENTING", "STOPPED"][a] + " (" + a + "), err: " + b);
        m && 2 === a && (m(),
        m = null)
    }
    function l(a) {
        $sOut.log("[BROADCAST] onChannelChangeSucceeded: " + (a && a.name + ", dvb://" + a.onid + "." + a.tsid + "." + a.sid));
        for (var b = 0, c = u.length; b < c; b++)
            u[b](a)
    }
    function f(a, b) {
        for (var c = 0, d = u.length; c < d; c++)
            u[c](a, b)
    }
    function g(a) {
        b = a || {};
        a && (e = {
            name: a.name,
            delivery: a.idType === a.ID_DVB_T || a.idType === a.ID_DVB_T2 ? 2 : 0,
            onid: a.onid,
            tsid: a.tsid,
            sid: a.sid,
            majorChannel: a.majorChannel
        })
    }
    var d, c = !1, a = !0, b, e, m, u = [];
    h.broadcast = {
        init: function() {
            if (d = document.querySelector('object[type="video/broadcast"]'))
                d.onChannelChangeSucceeded = l,
                d.onChannelChangeError = f,
                d.onPlayStateChange = k
        },
        bind: function() {
            if (d && "function" === typeof d.bindToCurrentChannel)
                try {
                    return d.bindToCurrentChannel(),
                    g(d.currentChannel),
                    c = !0,
                    a = !1,
                    b
                } catch (q) {
                    console.error("[BROADCAST] catch -> cannot bind: " + q)
                }
        },
        detach: function(a) {
            a = a || function(a) {}
            ;
            if (c) {
                if (d && "function" === typeof d.setChannel) {
                    b || g(d.currentChannel);
                    var e = b && {
                        name: b.name,
                        triplet: "dvb://" + b.onid + "." + b.tsid + "." + b.sid,
                        lcn: b.terminalChannel
                    };
                    try {
                        d.setChannel(null)
                    } catch (y) {}
                }
                typeof a(e)
            } else
                a(null)
        },
        attach: function(a) {
            if (c)
                if (m = a,
                "function" === typeof d.setChannel)
                    try {
                        d.setChannel(b)
                    } catch (r) {
                        f(null, "setChannel exception")
                    }
                else
                    f(null, "setChannel undefined");
            else
                f(null, "not bound")
        },
        stop: function() {
            if (d && "function" === typeof d.stop)
                try {
                    d.stop()
                } catch (q) {
                    console.error("[BROADCAST] catch -> cannot stop: " + q)
                }
        },
        getStartChannel: function() {
            return b
        },
        getCopyChannel: function() {
            return e
        },
        isBroadcastIndependent: function() {
            return a
        },
        addListener: function(a) {
            u.push(a)
        }
    }
}
)($Player);
(function(h) {
    function k(d) {
        return d.split(/#|\?/)[0].split(".").pop().trim()
    }
    function l(d) {
        for (var c = [], a = 0; a < d.length; a++) {
            var b = d[a];
            b && (b = parseInt(b, 10),
            isNaN(b) || c.push(b))
        }
        return c
    }
    function f(d) {
        var c = d.querySelector('url[type="content"]');
        c = c && c.textContent || "";
        var a = (a = k(c)) && h.MEDIA_TYPES[a.toUpperCase()];
        this.url = c;
        this.type = a;
        a: {
            a = d.querySelector("license_url");
            c = {};
            if (a && a.textContent) {
                try {
                    var b = JSON.parse(a.textContent)
                } catch (e) {
                    b = c;
                    break a
                }
                if ((b = b && b.drmLicenseUrlValues) && b.length)
                    for (a = 0; a < b.length; a++)
                        c[b[a].drm] = {
                            url: b[a].licenceUrl,
                            name: b[a].drm
                        }
            }
            b = c
        }
        this.licenses = b;
        this.drmProtected = !!Object.keys(this.licenses).length;
        try {
            this.thumbs = JSON.parse(d.querySelector("thumbs_array").textContent)
        } catch (e) {
            this.thumbs = {}
        }
        (b = (d.querySelector("ads_tecnico") || {}).textContent) && (b = l(b.split(";")));
        this.pauses = b;
        this.isLive = d.querySelector("is_live").textContent;
        this.duration = h.utils.toSeconds(d.querySelector("duration").textContent);
        this.bumperStart = (b = d.querySelector('url[type="bumper"]')) && b.textContent;
        this.bumperEnd = (b = d.querySelector('url[type="bumperend"]')) && b.textContent
    }
    function g(d) {
        if (d.playlist)
            for (var c = 0; c < d.playlist.length; c++) {
                var a = d.playlist[c];
                if (a)
                    if ("bumper" === a.type)
                        var b = a.url;
                    else if ("main" === a.type)
                        var e = a.url
            }
        this.url = e || d.video[0];
        this.type = h.MEDIA_TYPES[k(e || d.video[0]).toUpperCase()];
        e = d.licence_server_map.drmLicenseUrlValues;
        c = {};
        if (e)
            for (a = 0; a < e.length; a++)
                e[a] && (c[e[a].drm] = {
                    name: e[a].drm,
                    url: e[a].licenceUrl,
                    operator: e[a].operator
                });
        this.licenses = c;
        this.drmProtected = e && 0 < e.length;
        this.thumbs = d.thumbs_array;
        this.pauses = d.ads_tecnico ? l(d.ads_tecnico.split(";")) : [];
        this.isLive = d.is_live;
        this.duration = h.utils.toSeconds(d.duration);
        this.bumperStart = b
    }
    h.mediaPolis = {
        parse: function(d, c) {
            if (!d)
                return c(null, {
                    error: "invalid url"
                });
            if ("mpd" === k(d))
                return c({
                    url: d,
                    type: h.MEDIA_TYPES.MPD,
                    licenses: null,
                    drmProtected: !1,
                    thumbs: null,
                    pauses: [],
                    isLive: !1,
                    duration: -1,
                    bumperStart: null
                }, null);
            var a = "&";
            -1 === d.indexOf("?") && (a = "?");
            d = d + a + "output=" + h.output + "&forceUserAgent=" + h.protocol;
            "62" === h.output || "63" === h.output ? h.utils.getJson(d, function(a, d) {
                a ? c(new g(a), null) : c(null, d)
            }) : "56" === h.output && h.utils.getXml(d, function(a, d) {
                a && "Mediapolis" === a.documentElement.nodeName ? c(new f(a.documentElement), null) : c(null, d)
            })
        }
    }
}
)($Player);
(function(h) {
    function k(a) {
        a && (a = l(a));
        if ("string" === typeof a) {
            a = a.split("&");
            for (var b = {}, c = 0; c < a.length; c++) {
                var n = a[c].indexOf("=");
                if (-1 < n) {
                    var d = a[c].substring(0, n);
                    n = a[c].substring(n + 1);
                    d && (b[decodeURIComponent(d)] = decodeURIComponent(n))
                }
            }
            return b
        }
    }
    function l(a) {
        if (a) {
            var c = a.childNodes;
            if (!c)
                return "";
            for (var b = 0, n = c.length; b < n; b++)
                if (1 === c[b].nodeType || 4 === c[b].nodeType)
                    return c[b].nodeValue
        }
        return a && a.firstChild && a.firstChild.nodeValue || ""
    }
    function f(a) {
        if (a && a.length)
            return a[0]
    }
    function g(a) {
        if (a) {
            var c = 0;
            a = a.split(/\D/);
            for (var b = 0, n = a.length; b < n; b++)
                switch (b) {
                case 0:
                    c += 36E5 * parseInt(a[b], 10);
                    break;
                case 1:
                    c += 6E4 * parseInt(a[b], 10);
                    break;
                case 2:
                    c += 1E3 * parseInt(a[b], 10);
                    break;
                default:
                    c += parseInt(a[b], 10)
                }
            return c
        }
    }
    function d(a, b, c) {
        var n = new XMLHttpRequest
          , d = !1;
        n.open("GET", a);
        n.ontimeout = function() {
            d || (clearTimeout(w),
            d = !0,
            c && c(this.status, this.responseText))
        }
        ;
        n.onload = function() {
            d || (clearTimeout(w),
            d = !0,
            200 === n.status ? b && b(n.responseText) : c && c(301, this.responseText))
        }
        ;
        n.onerror = function() {
            d || (clearTimeout(w),
            d = !0,
            c && c(301, this.responseText))
        }
        ;
        n.timeout = h.ads_timeout;
        n.send(null);
        var w = setTimeout(function() {
            d || (d = !0,
            c && c(301, "timeout expired"))
        }
        .bind(this), h.ads_timeout + 1E3)
    }
    function c(a, c, b) {
        var n = [];
        c = c || function(a) {
            return !0
        }
        ;
        for (var d = 0, w = a.length, e = void 0; d < w; d++)
            c(a[d]) && (e = b ? b(a[d]) : a[d],
            void 0 !== e && null !== e && n.push(e));
        return n
    }
    function a(a) {
        var c = {};
        a = a.getElementsByTagName("Tracking");
        for (var b = 0; b < a.length; b++) {
            var n = a[b].getAttribute("event");
            "verificationNotExecuted" === n && (c.tracking = new F(n,l(a[b])))
        }
        return c
    }
    function b(a) {
        var c = [];
        if (a)
            for (var b = 0; b < a.length; b++)
                a[b] && c.push({
                    type: a[b].getAttribute("creativeType"),
                    value: l(a[b])
                });
        return c
    }
    function e(a) {
        if (a) {
            var d = a.getElementsByTagName("UniversalAdId")
              , n = [];
            if (d)
                for (var p = 0; p < d.length; p++)
                    if (d[p]) {
                        var e = d[p].getAttribute("idValue") || l(d[p]);
                        e && n.push(e)
                    }
            p = a.getAttribute("id");
            if (d = f(a.getElementsByTagName("Linear"))) {
                var v = f(d.getElementsByTagName("Duration")), m;
                e = d.getAttribute("skipoffset") || -1;
                var q = k(f(d.getElementsByTagName("AdParameters")));
                v && (v = g(l(v)));
                if ((a = f(d.getElementsByTagName("MediaFiles"))) && a.hasChildNodes() && (a = c(a.getElementsByTagName("MediaFile"), function(a) {
                    return "progressive" === a.getAttribute("delivery") && "video/mp4" === a.getAttribute("type")
                }, function(a) {
                    return a
                })) && a.length)
                    if (0 === a.length)
                        var h = l(a[0]);
                    else {
                        for (var u = h = 0, r = 0, t = a.length, B = void 0; r < t; r++)
                            B = parseInt(a[r].getAttribute("bitrate"), 10),
                            !isNaN(B) && B > h && (h = B,
                            u = r);
                        h = l(a[u])
                    }
                (a = f(d.getElementsByTagName("TrackingEvents"))) && a.hasChildNodes() && (m = c(a.getElementsByTagName("Tracking"), null, function(a) {
                    return new F(a.getAttribute("event"),l(a),g(a.getAttribute("offset")) || -1)
                }));
                "string" === typeof e && (e = -1 !== e.indexOf("%") ? parseInt(e, 10) * v / 100 : g(e));
                return new G(p,v,h,e,m,n,q)
            }
            if (d = f(a.getElementsByTagName("NonLinearAds"))) {
                n = [];
                m = d.getElementsByTagName("NonLinear");
                for (p = 0; p < m.length; p++)
                    a = k(f(m[p].getElementsByTagName("AdParameters"))),
                    h = b(m[p].getElementsByTagName("StaticResource")),
                    e = c(m[p].getElementsByTagName("HTMLResource"), null, function(a) {
                        return l(a)
                    }),
                    q = c(m[p].getElementsByTagName("IFrameResource"), null, function(a) {
                        return l(a)
                    }),
                    n.push({
                        width: m[p].getAttribute("width"),
                        height: m[p].getAttribute("height"),
                        minSuggestedDuration: m[p].getAttribute("minSuggestedDuration"),
                        params: a,
                        res: {
                            staticRes: h,
                            htmlRes: e,
                            ifrRes: q
                        }
                    });
                (d = f(d.getElementsByTagName("TrackingEvents"))) && d.hasChildNodes() && (v = c(d.getElementsByTagName("Tracking"), null, function(a) {
                    return new F(a.getAttribute("event"),l(a),g(a.getAttribute("offset")) || -1)
                }));
                return new J(n,v)
            }
        }
    }
    function m(b, d, g) {
        var n = f(b.getElementsByTagName("AdSystem"))
          , w = f(b.getElementsByTagName("AdTitle"))
          , v = c(b.getElementsByTagName("Error"), null, function(a) {
            return l(a)
        });
        n = new H(l(n),l(w),v);
        n.adServingId = l(f(b.getElementsByTagName("AdServingId")));
        n.impressions = c(b.getElementsByTagName("Impression"), null, function(a) {
            if (a = l(a))
                return a
        });
        f(b.getElementsByTagName("Creatives")) && (n.creatives = c(b.getElementsByTagName("Creative"), null, function(a) {
            return e(a)
        }));
        if (b = f(b.getElementsByTagName("AdVerifications")))
            n.verifications = c(b.getElementsByTagName("Verification"), null, a);
        d.content = n;
        g(d)
    }
    function u(a, b, d) {
        var n = "true" === a.getAttribute("allowMultipleAds")
          , w = "true" === a.getAttribute("followAdditonalWrappers")
          , g = f(a.getElementsByTagName("AdSystem"))
          , v = f(a.getElementsByTagName("VASTAdTagURI"));
        var A = new I(l(g),l(v),n,w);
        A.impressions = c(a.getElementsByTagName("Impression"), null, function(a) {
            return l(a)
        });
        A.error = c(a.getElementsByTagName("Error"), null, function(a) {
            return l(a)
        });
        f(a.getElementsByTagName("Creatives")) && (A.creatives = c(a.getElementsByTagName("Creative"), null, function(a) {
            return e(a)
        }));
        A._followVastUri(function() {
            b.content = A;
            d(b)
        })
    }
    function q(a, b) {
        var c = new C(a.getAttribute("id"),a.getAttribute("sequence"))
          , d = f(a.getElementsByTagName("InLine"));
        d ? m(d, c, b) : (d = f(a.getElementsByTagName("Wrapper"))) ? u(d, c, b) : b()
    }
    function r(a, b) {
        if ("function" !== typeof b)
            throw TypeError("Argument must be a function!");
        if ("parsererror" === a.documentElement.nodeName)
            b && b(null, {
                status: 100,
                err: "parse error"
            });
        else if (a = a.getElementsByTagName("VAST"),
        0 < a.length) {
            a = a[0];
            var c = function(a) {
                a && a.hasCreatives() ? e.ads.push(a) : --e.total;
                0 >= e.total ? b && b(null, {
                    status: -1,
                    err: "invalid VAST, found NULL Ad"
                }) : e.ads.length === e.total && b && b(D(e))
            };
            if (a)
                if (0 !== a.getElementsByTagName("parsererror").length)
                    b && b(null, {
                        status: 100,
                        err: "parse error"
                    });
                else {
                    var d = a.getElementsByTagName("Ad");
                    if (0 === d.length) {
                        d = [];
                        for (c = 0; c < a.children.length; c++)
                            "Error" === a.children[c].nodeName && d.push(l(a.children[c]));
                        x(d, 303);
                        b && b(null, {
                            status: d.length ? 303 : -1,
                            err: "empty VAST, found NO Ads at all"
                        })
                    } else {
                        var e = new E(a.getAttribute("version"),d.length);
                        a = 0;
                        for (var n = d.length; a < n; a++)
                            q(d[a], c)
                    }
                }
        } else
            b && b(null, {
                status: 101,
                err: "parse error"
            })
    }
    function y(a, b) {
        a ? d(a, function(a) {
            if (b) {
                a = a.trim();
                var c = new DOMParser;
                r(c.parseFromString(a, "text/xml"), b)
            }
        }, function(c, d) {
            b && b(null, {
                url: a,
                status: c,
                err: d
            })
        }) : b && b(null, {
            url: a,
            status: -1,
            err: "invalid Url"
        })
    }
    function z(a) {
        var b = parseInt(a.substring(0, 2), 10)
          , c = parseInt(a.substring(3, 5), 10);
        a = parseInt(a.substring(6, 8), 10);
        if (!(isNaN(b) || isNaN(c) || isNaN(a)))
            return a + 60 * c + 3600 * b
    }
    function t(a, b) {
        var c = a.getElementsByTagName(b);
        c.length || (c = a.getElementsByTagName("vmap:" + b));
        return c
    }
    function x(a, b) {
        b = b || 900;
        for (var c = 0; c < a.length; c++) {
            var e = a[c].replace("[ERRORCODE]", b);
            console.log("[VAST] error: " + e);
            d(e, function() {}, function() {})
        }
    }
    var D = function(a) {
        var b = a.ads;
        if (b && 1 < b.length) {
            for (var c = 0, d = 0; d < b.length; d++)
                0 < b[d].sequence && c++;
            c && b.sort(function(a, b) {
                return 0 > a.sequence || 0 > b.sequence ? 0 >= a.sequence && 0 < b.sequence ? 1 : 0 < a.sequence && 0 >= b.sequence ? -1 : 0 : a.sequence > b.sequence ? 1 : a.sequence < b.sequence ? -1 : 0
            })
        }
        return a
    }
      , E = function(a, b) {
        this.version = a;
        this.total = b;
        this.ads = [];
        this.pauses = []
    }
      , C = function(a, b) {
        this.id = a;
        this.sequence = b ? parseInt(b, 10) : -1;
        this.content = null;
        this.getImpressions = function() {
            return this.content && this.content.getImpressions() || []
        }
        ;
        this.getAdSystem = function() {
            return this.content && this.content.adSystem
        }
        ;
        this.hasCreatives = function() {
            return this.content && !!(this.content.creatives || []).length
        }
        ;
        this.getLinear = function() {
            return this.content && this.content.getLinear()
        }
        ;
        this.getNonLinear = function() {
            return this.content && this.content.getNonLinear()
        }
        ;
        this.getTracking = function(a) {
            return this.content && this.content.getTracking(a) || []
        }
        ;
        this.getErrorUrls = function() {
            return this.content && this.content.getErrorUrls()
        }
        ;
        this.checkVerification = function() {
            this.content && this.content.checkVerification()
        }
    }
      , H = function(a, b, e) {
        this.type = "Inline";
        this.adSystem = a;
        this.adTitle = b;
        this.adServingId = null;
        this.error = e;
        this.impressions = [];
        this.creatives = [];
        this.verifications = null;
        this.getImpressions = function() {
            return this.impressions
        }
        ;
        this.getLinear = function() {
            if (this.creatives && this.creatives.length)
                return f(c(this.creatives, function(a) {
                    return 0 === a.kind
                }))
        }
        ;
        this.getNonLinear = function() {
            if (this.creatives && this.creatives.length)
                return f(c(this.creatives, function(a) {
                    return 1 === a.kind
                }))
        }
        ;
        this.getTracking = function(a) {
            var b = this.getLinear();
            return b ? c(b.events, function(b) {
                return b.name === a
            }) : []
        }
        ;
        this.getErrorUrls = function() {
            return this.error
        }
        ;
        this.checkVerification = function() {
            if (this.verifications)
                for (var a = 0; a < this.verifications.length; a++) {
                    var b = this.verifications[a] && this.verifications[a].tracking;
                    b && "verificationNotExecuted" === b.name && d(b.url.replace("[REASON]", "1"))
                }
        }
    }
      , I = function(a, b, d, e) {
        this.type = "Wrapper";
        this.adSystem = a;
        this.vastURI = b;
        this.allowMultiple = d;
        this.followWrappers = e;
        this.error = null;
        this.impressions = [];
        this.creatives = [];
        this.next = null;
        this.getImpressions = function() {
            return this._sum("impressions")
        }
        ;
        this.getLinear = function() {
            var a = this._getTail();
            return a && a.getLinear()
        }
        ;
        this.getNonLinear = function() {
            var a = this._getTail();
            return a && a.getNonLinear()
        }
        ;
        this.getErrorUrls = function() {
            return this._sum("error")
        }
        ;
        this.checkVerification = function() {
            var a = this._getTail();
            return a && a.checkVerification()
        }
        ;
        this.checkError = function() {
            for (var a = this; a; ) {
                if (a.errCode)
                    return {
                        errUrls: this.getErrorUrls(),
                        code: a.errCode
                    };
                a = a.next
            }
        }
        ;
        this.getTracking = function(a) {
            for (var b = [], c = this; c; )
                b = "Wrapper" === c.type ? b.concat(c._getTracking(a)) : b.concat(c.getTracking(a)),
                c = c.next;
            return b
        }
        ;
        this._getTracking = function(a) {
            var b = f(this.creatives);
            return b ? c(b.events, function(b) {
                return b.name === a
            }) : []
        }
        ;
        this._followVastUri = function(a) {
            if (this.vastURI) {
                var b = this;
                y(this.vastURI, function(c, d) {
                    d && 100 <= d.status && (b.errCode = d.status);
                    if (c && c.ads && c.ads.length && (b.next = c.ads[0].content,
                    "Inline" === b.next.type)) {
                        a();
                        return
                    }
                    a()
                })
            }
        }
        ;
        this._getTail = function() {
            for (var a = this.next; a && "Inline" !== a.type; )
                a = a.next;
            return a
        }
        ;
        this._sum = function(a) {
            for (var b = [], c = this; c; )
                b = b.concat(c[a]),
                c = c.next;
            return b
        }
    }
      , G = function(a, b, c, d, e, f, g) {
        this.kind = 0;
        this.id = a;
        this.duration = b;
        this.mediaFile = c || [];
        this.skipOffset = d;
        this.events = e || [];
        this.adIds = f;
        this.params = g
    }
      , J = function(a, b) {
        this.kind = 1;
        this.nonLinear = a;
        this.events = b
    }
      , F = function(a, b, c) {
        this.name = a;
        this.url = b;
        this.offset = c;
        this.sent = !1
    }
      , v = function(a) {
        this.total = a.length;
        this.preRolls = [];
        this.postRolls = [];
        this.pauses = [];
        this.overAll = [];
        this.midRolls = {};
        this.index = 0;
        this.notched = !1;
        for (var b = 0, c = a.length; b < c; b++)
            if ("start" === a[b].getAttribute("timeOffset"))
                this.preRolls.push(a[b]);
            else if ("end" === a[b].getAttribute("timeOffset"))
                this.postRolls.push(a[b]);
            else {
                var d = a[b].getAttribute("timeOffset")
                  , e = d.indexOf(".");
                -1 !== e && (d = d.substring(0, e));
                this.midRolls[d] || (this.midRolls[d] = [],
                this.pauses.push(d),
                this.overAll.push(z(d)));
                this.midRolls[d].push(a[b])
            }
    };
    v.prototype.allRollURIs = function(a, b) {
        for (var c = [], d; d = this.nextRoll(a, b); )
            c.push(d);
        b && (a = this.pauses.indexOf(a),
        -1 !== a && this.pauses.splice(a, 1));
        return c
    }
    ;
    v.prototype.nextRoll = function(a, b) {
        if ((a = b ? this.midRolls[a] : this[a]) && a.length && (b = a[0]) && (b = t(b, "AdSource"),
        b.length && (b = t(b[0], "AdTagURI"),
        b.length)))
            return a.shift(),
            l(b[0])
    }
    ;
    v.prototype.nextStop = function(a) {
        a |= 0;
        for (var b = 0; b < this.pauses.length; b++) {
            var c = z(this.pauses[b]);
            if (c > a)
                return c
        }
    }
    ;
    v.prototype.closestTo = function(a) {
        a |= 0;
        for (var b = this.pauses.length - 1; 0 <= b; b--) {
            var c = z(this.pauses[b]);
            if (c < a)
                return c
        }
    }
    ;
    h.vastparser = {
        version: 2,
        profiles: {
            vast: "4.2"
        },
        parseURL: function(a, b) {
            y(a, function(a, d) {
                if (a) {
                    var e = f(c(a.ads, function(a) {
                        return a && !!a.content && !!a.content.checkError
                    }, function(a) {
                        return a.content.checkError()
                    }));
                    e && x(e.errUrls, e.code)
                }
                b(a, d)
            })
        },
        parseVMap: function(a, b) {
            a ? d(a, function(a) {
                a = (new DOMParser).parseFromString(a, "text/xml");
                if ("parsererror" === a.documentElement.nodeName)
                    b(null, {
                        status: 100,
                        err: "parse error"
                    });
                else {
                    var c = a.getElementsByTagName("AdBreak");
                    c.length || (c = a.getElementsByTagName("vmap:AdBreak"));
                    b && b(new v(c), null)
                }
            }, function(c, d) {
                b && b(null, {
                    url: a,
                    status: c,
                    err: d
                })
            }) : b && b(null, {
                url: a,
                status: -1,
                err: "invalid Url"
            })
        },
        notifyError: x,
        uuid: void 0
    }
}
)($Player);
$Player.subHandler = function(h, k, l) {
    function f(a, c) {
        if (a) {
            var d = a.split(".").pop().toLowerCase()
              , e = this;
            if ("vtt" === d || -1 !== a.indexOf("relinkerServlet"))
                d = "vtt";
            "txt" === d && (d = a.substring(0, a.length - 4).split(".").pop().toLowerCase());
            "srt" === d || "vtt" === d ? y(a, function(f) {
                b = "vtt" === d ? new I(f) : new C(f);
                c.call(e, 200, a)
            }, function(b) {
                c.call(e, b, a)
            }) : "stl" === d ? z(a, function(d, f) {
                2 === f / 100 && (b = new H(d));
                c.call(e, f, a)
            }) : c.call(e, 404)
        }
    }
    function g() {
        var a = document.getElementById(k);
        e = !1;
        a && h.removeChild(a)
    }
    k = k || "subtitleWidget";
    h = h || document.body;
    l = l || {
        x: 0,
        y: 0,
        width: 1280,
        height: 720
    };
    var d, c, a, b, e, m, u, q, r, y = function(a, b, c, d) {
        var e = new XMLHttpRequest;
        e.onload = function() {
            e.readyState === e.DONE && 200 === e.status ? b && b.call(d || window, e.responseXML || e.responseText) : c && c.call(d || window, e.status)
        }
        ;
        e.open("GET", a, !0);
        e.send();
        return e
    }, z = function(a, b) {
        var c = new XMLHttpRequest;
        c.open("GET", a, !0);
        c.responseType = "arraybuffer";
        c.onload = function() {
            b && b.call(window, c.response, c.status)
        }
        ;
        c.send(null);
        return c
    }, t = function(a, b, c) {
        for (var d = ""; b < c; b++)
            d += String.fromCharCode(a[b]);
        return d
    }, x = function(a, b) {
        if ("string" === typeof a || a instanceof String)
            b.appendChild(document.createTextNode(a));
        else if (a.tagName)
            b.appendChild(a);
        else if (a.constructor === Array)
            for (var c = 0; c < a.length; c++)
                x(a[c], b)
    }, D = function(a, b, c) {
        a = document.createElement(a);
        if (b)
            for (var d in b)
                b.hasOwnProperty(d) && a.setAttribute(d, b[d]);
        c && x(c, a);
        return a
    }, E = function(a, b, c) {
        a += "";
        b += "";
        if (0 >= b.length)
            return a.length + 1;
        var d = 0
          , e = 0;
        for (c = c ? 1 : b.length; ; )
            if (e = a.indexOf(b, e),
            0 <= e)
                ++d,
                e += c;
            else
                break;
        return d
    }, C = function() {
        function b(a) {
            a = a.replace(/\r/g, "");
            a = a.split(/(\d+)\n(\d{2}:\d{2}:\d{2},*\d{0,7}) --\x3e (\d{2}:\d{2}:\d{2},*\d{0,7})/g);
            a.shift();
            for (var b = [], c = 0; c < a.length; c += 4)
                b.push({
                    id: a[c].trim(),
                    startTime: e(a[c + 1].trim()),
                    endTime: e(a[c + 2].trim()),
                    text: a[c + 3].trim()
                });
            this.srtData = b;
            this.currentSub = null
        }
        b.prototype.update = function(b, e) {
            var f = a || 0;
            e = e || 1;
            d && d > b && (a = 0);
            d = b;
            if (!(0 === this.srtData.length || this.srtData[0].startTime * e > b)) {
                for (var g = !1; f < this.srtData.length && this.srtData[f].startTime * e <= b; )
                    this.srtData[f].endTime * e >= b && (g = !0,
                    a = f),
                    f++;
                if (g) {
                    if (b = this.srtData[a],
                    !this.currentSub || this.currentSub.id !== b.id) {
                        e = b.text.split("\n");
                        f = e.length;
                        g = "";
                        for (var p, m = 0; m < f; m++) {
                            var n = E(e[m], "<font", !1)
                              , k = E(e[m], "</font>", !1);
                            n !== k ? n > k ? (g += e[m] + "</font>",
                            p = e[m].match(/color="([#A-Za-z0-9]*)"/)[1]) : g += "<font " + (p ? 'color="' + p + '"' : "") + ">" + e[m] : g += "<div>" + e[m] + "</div>"
                        }
                        1 === f && (g += "<div>&nbsp;</div>");
                        b.text = g;
                        c.innerHTML = b.text.replace(/<font/g, "<div").replace(/color="/g, 'style="color:').replace(/<\/font>/g, "</div>").replace(/&agrave;/g, "\u00e0").replace(/&egrave;/g, "\u00e8").replace(/&eacute;/g, "\u00e9").replace(/&igrave;/g, "\u00ec").replace(/&ograve;/g, "\u00f2").replace(/&ugrave;/g, "\u00f9");
                        c.style.display = "block";
                        this.currentSub = b
                    }
                } else
                    this.currentSub = null,
                    c.style.display = "none",
                    c.innerHTML = null
            }
        }
        ;
        var e = function(a) {
            a = /(\d+):(\d{2}):(\d{2}),*(\d{0,7})/.exec(a);
            if (null === a)
                return 0;
            for (var b = 1; 5 > b; b++)
                for (a[b] = parseInt(a[b], 10),
                isNaN(a[b]) && (a[b] = 0); 999 < a[b]; )
                    a[b] /= 10;
            return 36E5 * a[1] + 6E4 * a[2] + 1E3 * a[3] + a[4]
        };
        return b
    }
    .call(this), H = function() {
        function b(a) {
            this.gsiBlock = new f(new Uint8Array(a,0,1024));
            for (var b = 1024, c = null, d = []; b < a.byteLength; ) {
                var e = new g(new Uint8Array(a,b,128));
                null !== c && e.subtitleNumber === c.subtitleNumber ? (c.extendTTI(e),
                255 === e.extensionBlockNumber && (d.push(e),
                c = e)) : (255 === e.extensionBlockNumber && d.push(e),
                c = e);
                b += 128
            }
            this.ttiList = d;
            this.currentTTI = null
        }
        function e(a, b) {
            for (; a.firstChild; )
                a.removeChild(a.firstChild);
            if (b) {
                var c = b.buffer;
                for (var d = c.byteLength, e = !1, f = !1, g = null, p = null, h = 0; h < d; h++) {
                    var q = c[h];
                    128 > q ? (p = p || new m,
                    32 <= q && 127 >= q ? e ? (97 === q ? p.text += "\u00e0" : 101 === q ? p.text += "\u00e8" : 105 === q ? p.text += "\u00ec" : 111 === q ? p.text += "\u00f2" : 117 === q && (p.text += "\u00f9"),
                    e = !1) : f ? (101 === q && (p.text += "\u00e9"),
                    f = !1) : p.text += String.fromCharCode(q) : 0 <= q && 7 >= q ? p.foreground = k[q] : 29 === q && (p.background = p.foreground)) : 193 === q ? e = !0 : 194 === q ? f = !0 : 138 === q && (g = g || [],
                    p && g.push(p),
                    p = null)
                }
                c = g;
                for (d = 0; d < c.length; d++)
                    x(c[d].getWidget(), a);
                c = getComputedStyle(a);
                a.style.display = "block";
                a.style.top = l.y + l.height - parseInt(c.height, 10) - 10 + "px"
            } else
                a.style.display = "none";
            return b
        }
        function f(a) {
            this.codePageNumber = 100 * (a[0] - 48) + 10 * (a[1] - 48) + (a[2] - 48);
            this.diskFormatCode = t(a, 3, 11);
            this.displayStandardCode = a[11];
            this.characterCodeTableNumber = 10 * (a[12] - 48) + (a[13] - 48);
            this.languageCode = parseInt(t(a, 14, 16), 16);
            this.originalProgramTitle = t(a, 16, 48).trim();
            this.originalEpisodeTitle = t(a, 48, 80).trim();
            this.translatedProgramTitle = t(a, 80, 112).trim();
            this.translatedEpisodeTitle = t(a, 112, 144).trim();
            this.translatorsName = t(a, 144, 176).trim();
            this.translatorContactDetails = t(a, 176, 208).trim();
            this.subtitleListReferenceCode = t(a, 208, 224).trim();
            this.creationDate = t(a, 224, 230);
            this.revisionDate = t(a, 230, 236);
            this.revisionNumber = 10 * (a[236] - 48) + (a[237] - 48);
            this.totalTTIBlocks = 1E4 * (a[238] - 48) + 1E3 * (a[239] - 48) + 100 * (a[240] - 48) + 10 * (a[241] - 48) + (a[242] - 48);
            this.totalSubtitles = 1E4 * (a[243] - 48) + 1E3 * (a[244] - 48) + 100 * (a[245] - 48) + 10 * (a[246] - 48) + (a[247] - 48);
            this.totalGroups = 100 * (a[248] - 48) + 10 * (a[249] - 48) + (a[250] - 48);
            this.maxChars = 10 * (a[251] - 48) + (a[252] - 48);
            this.maxRows = 10 * (a[253] - 48) + (a[254] - 48);
            this.timCodeStatus = 49 === a[255];
            this.startOfProgramme = t(a, 256, 264);
            this.firstInCue = t(a, 264, 272);
            this.totalDisks = a[272] - 48;
            this.country = t(a, 274, 277);
            this.publisher = t(a, 277, 309).trim();
            this.editorName = t(a, 309, 341).trim();
            this.editorContactDetails = t(a, 341, 373).trim();
            this.userDefinedArea = t(a, 448, 1024).trim()
        }
        function g(a) {
            this.subtitleGroupNumber = a[0];
            this.subtitleNumber = a[1] + 256 * a[2];
            this.extensionBlockNumber = a[3];
            this.cumulativeStatus = a[4];
            this.timeCodeIn = 1E3 * (3600 * a[5] + 60 * a[6] + a[7]);
            this.timeCodeOut = 1E3 * (3600 * a[9] + 60 * a[10] + a[11]);
            this.verticalPosition = a[13];
            this.justificationCode = a[14];
            this.commentFlag = 0 !== a[15];
            var b = a.byteLength
              , c = b - 1 - 15;
            for (--b; 15 < b && 143 === a[b]; b--)
                c--;
            this.buffer = a.subarray(16, 16 + c)
        }
        function m() {
            this.background = k[0];
            this.foreground = k[k.length - 1];
            this.text = ""
        }
        var k = "#000000 #bf1f00 #00bf00 #bfbf00 #003f7f #bf3f7f #3fbfff #ffffff".split(" ");
        b.prototype.update = function(b, f) {
            var g = a || 0;
            f = f || 1;
            d && d > b && (a = 0);
            d = b;
            if (!(0 === this.ttiList.length || this.ttiList[0].timeCodeIn * f > b)) {
                for (var m = !1; g < this.ttiList.length && this.ttiList[g].timeCodeIn * f <= b; )
                    this.ttiList[g].timeCodeOut * f >= b && (m = !0,
                    a = g),
                    g++;
                m ? (b = this.ttiList[a],
                this.currentTTI && this.currentTTI.subtitleNumber === b.subtitleNumber || b.commentFlag || (this.currentTTI = e(c, b))) : this.currentTTI = e(c, null)
            }
        }
        ;
        g.prototype.extendTTI = function(a) {
            if (a) {
                var b = new Uint8Array(this.buffer.byteLength + a.buffer.byteLength);
                b.set(new Uint8Array(this.buffer), 0);
                b.set(new Uint8Array(a.buffer), this.buffer.byteLength);
                this.buffer = b
            }
        }
        ;
        m.prototype.getWidget = function() {
            return D("div", {
                style: "background-color: " + (this.background === k[0] ? "transparent" : this.background) + "; text-align: center; color:" + this.foreground
            }, this.text)
        }
        ;
        return b
    }
    .call(this), I = function() {
        function a(a) {
            var c = /^((?:\d{1,2}:)*\d{2}:\d{2}[.,]\d{3})\s--\x3e\s((?:\d{1,2}:)*\d{2}:\d{2}[.,]\d{3})\n(.*(?:\r?\n(?!\r?\n).*)*)/gm, d, e = 0, f = [];
            for (a = a.replace(/\r/g, ""); null !== (d = c.exec(a)); )
                d.index === c.lastIndex && c.lastIndex++,
                f.push({
                    id: e,
                    startTime: b(d[1]),
                    endTime: b(d[2]),
                    text: d[3]
                }),
                e += 1;
            this.srtData = f
        }
        function b(a) {
            var b = a.indexOf(".")
              , c = 1E3
              , d = 0;
            -1 !== b && (d = parseInt(a.substring(b + 1)),
            a = a.substring(0, b));
            a = a.split(":");
            for (b = a.length - 1; 0 <= b; )
                d += parseInt(a[b]) * c,
                c *= 60,
                b--;
            return d
        }
        a.prototype.update = function(a, b) {
            C.prototype.update.call(this, a, b)
        }
        ;
        return a
    }(), G = {
        it: "ITALIANO",
        en: "INGLESE",
        fr: "FRANCESE",
        de: "TEDESCO",
        es: "SPAGNOLO"
    };
    return {
        unload: function() {
            g();
            c = a = b = r = e = null
        },
        start: function() {
            var b = document.getElementById(k) || D("div", {
                id: k
            });
            b.parentNode || ($CONFIG && !$CONFIG.mods.euro202X && (b.style.fontSize = "28px"),
            x(b, h));
            u && (b.style.fontSize = u,
            b.style.lineHeight = q);
            c = b;
            e = !0;
            d = null;
            a = 0;
            return e
        },
        stop: g,
        onupdate: function(a, c) {
            b && b.update(a, c)
        },
        setSize: function(a, b) {
            u = a;
            q = b;
            c && (c.style.fontSize = a,
            c.style.lineHeight = b)
        },
        isReady: function() {
            return !!b
        },
        ison: function() {
            return !!e
        },
        btm: function(a) {
            c.style.bottom = a + "px"
        },
        top: function(a) {
            c.style.top = a + "px"
        },
        setRepo: function(a) {
            r = a
        },
        getRepo: function() {
            return r
        },
        loadTrack: function(a, c) {
            if (a) {
                for (var d = 0; null === m && d < r.length; d++)
                    r[d] === a && (m = d);
                a.type ? (b = a.type,
                c(!!b)) : f(a.url, function() {
                    a.type = b;
                    c(!!b)
                })
            } else
                c()
        },
        loadRepo: function(a, b) {
            var c = r && r[a];
            m = c ? a : null;
            this.loadTrack(c, "function" === typeof b && b || function() {}
            )
        },
        size: function() {
            return r ? r.length : 0
        },
        getSelectedIndex: function() {
            return "number" === typeof m && m + 1
        },
        getLabels: function() {
            for (var a = ["DISATTIVATI"], b = 0, c = r && r.length; b < c; b++)
                a.push((G[(r[b].language || "").toLowerCase()] || r[b].language || "OTHER").toUpperCase());
            return a
        }
    }
}
;
(function(h) {
    function k(a) {
        return new c(a.match(d))
    }
    function l(a) {
        for (var b = a.getElementsByTagName("Representation"), c = [], d = 0; b && d < b.length; d++)
            b[d] && c.push({
                id: b[d].getAttribute("id"),
                codecs: b[d].getAttribute("codecs") || a.getAttribute("codecs"),
                bandwidth: b[d].getAttribute("bandwidth")
            });
        return {
            id: a.getAttribute("id"),
            lang: a.getAttribute("lang"),
            representations: c
        }
    }
    function f(a) {
        var b = []
          , c = a.getElementsByTagName("Representation")
          , d = a.getElementsByTagName("SegmentTemplate")
          , f = -1;
        if (d && d.length && d[0]) {
            var g = d[0].getAttribute("timescale");
            (d = d[0].getAttribute("duration")) && g && (f = parseInt(d, 10) / parseInt(g, 10))
        }
        for (g = 0; g < c.length; g++)
            b.push({
                id: c[g].getAttribute("id"),
                codecs: c[g].getAttribute("codecs"),
                bandwidth: parseInt(c[g].getAttribute("bandwidth"), 10),
                height: parseInt(a.getAttribute("height") || c[g].getAttribute("height"), 0),
                framerate: a.getAttribute("frameRate") || c[g].getAttribute("frameRate"),
                segmentDuration: f
            });
        b.sort(function(a, b) {
            return a.bandwidth < b.bandwidth ? -1 : a.bandwidth > b.bandwidth ? 1 : 0
        });
        return b
    }
    function g(a) {
        var b = a.getElementsByTagName("Representation");
        a = {
            id: null,
            url: null,
            language: a.getAttribute("lang")
        };
        0 < b.length && (a.id = b[0].getAttribute("id"),
        b = b[0].getElementsByTagName("SegmentTemplate"),
        0 < b.length && (a.url = b[0].getAttribute("media")));
        return a
    }
    var d = /P((([0-9]*\.?[0-9]*)Y)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)W)?(([0-9]*\.?[0-9]*)D)?)?(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)?/
      , c = function(a) {
        this.years = parseFloat(a[3]) || 0;
        this.months = parseFloat(a[5]) || 0;
        this.weeks = parseFloat(a[7]) || 0;
        this.days = parseFloat(a[9]) || 0;
        this.hours = parseFloat(a[12]) || 0;
        this.minutes = parseFloat(a[14]) || 0;
        this.seconds = parseFloat(a[16]) || 0
    };
    c.prototype.toSeconds = function() {
        return 3600 * this.hours + 60 * this.minutes + this.seconds
    }
    ;
    h.utils.parseMPD = function(a, b) {
        h.utils.getXml(a, function(a, c, d) {
            if (!a || c)
                return b();
            a = a.documentElement;
            if (!a || "parsererror" === a.nodeName)
                return b();
            c = a.getElementsByTagName("Period");
            if (c.length) {
                d = {
                    responseURL: d,
                    live: "dynamic" === a.getAttribute("type"),
                    audio: [],
                    video: [],
                    text: []
                };
                var e = a.getAttribute("minBufferTime");
                d.minBufferTime = e && k(e).toSeconds();
                e = a.getAttribute("publishTime");
                d.publishTime = (new Date(e)).getTime() / 1E3;
                d.live ? (e = a.getAttribute("timeShiftBufferDepth"),
                d.timeShiftBufferDepth = k(e).toSeconds(),
                d.canRestart = 7200 <= d.timeShiftBufferDepth,
                e = a.getAttribute("availabilityStartTime"),
                d.availabilityStartTimeStr = e,
                d.availabilityStartTime = (new Date(e)).getTime() / 1E3,
                d.started = d.publishTime - d.availabilityStartTime,
                e = a.getAttribute("minimumUpdatePeriod") || "PT6.0S",
                d.minimumUpdatePeriod = k(e).toSeconds(),
                d.valid = Date.now() / 1E3 - 300 < d.publishTime) : (e = a.getAttribute("mediaPresentationDuration"),
                d.mediaPresentationDuration = k(e).toSeconds());
                d.SegmentTimeline = 0 < a.getElementsByTagName("SegmentTimeline").length;
                a = c[0].getElementsByTagName("AdaptationSet");
                for (c = 0; c < a.length; c++) {
                    e = a[c].getAttribute("contentType");
                    var h = a[c].getAttribute("mimeType");
                    if ("audio" === e || "audio/mp4" === h)
                        d.audio.push(l(a[c]));
                    else if ("video" === e || "video/mp4" === h) {
                        d.video.push(f(a[c]));
                        e = a[c].getElementsByTagName("ContentProtection");
                        h = {};
                        for (var m = 0; e && m < e.length; m++)
                            if (e[m]) {
                                var u = (e[m].getAttribute("schemeIdUri") || "").toLowerCase();
                                "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95" === u ? h.playready = !0 : "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === u ? h.widevine = !0 : "urn:mpeg:dash:mp4protection:2011" === u && (h.cenc = !0)
                            }
                        d.caSystems = h
                    } else
                        "text" !== e && "text/vtt" !== h || d.text.push(g(a[c]))
                }
                return b(d)
            }
            return b()
        })
    }
}
)($Player);
(function(h) {
    function k(c) {
        for (var a, b = {}; a = g.exec(c); )
            b[a[1].toLowerCase()] = a[2] || a[3];
        return b
    }
    function l(c, a, b) {
        if (c)
            if (0 === a)
                b.extm3u = "#EXTM3U" === c;
            else if ("#" === c[0]) {
                if (a = c.indexOf(":"),
                -1 < a) {
                    var e = c.substring(0, a)
                      , f = d[e];
                    f ? f(c.substring(a + 1), b) : console.warn("UNKNOWN TAG", e);
                    b.currentTagName = e
                }
            } else
                "#EXT-X-STREAM-INF" === b.currentTagName && (b.streams[b.streams.length - 1].url = (new URL(c,b.baseUrl)).href)
    }
    function f(c, a) {
        var b = a.match(/^.*\//)[0];
        a = {
            url: a,
            baseUrl: b,
            currentTagName: ""
        };
        c = c.split("\n");
        for (b = 0; b < c.length; b++)
            c[b] && l(c[b].trim(), b, a);
        delete a.currentTagName;
        return a
    }
    var g = /([A-Z0-9\\-]+)=(?:"([^"]+)"|([^,]+))/g
      , d = {
        "#EXT-X-VERSION": function(c, a) {
            a.version = parseInt(c, 10)
        },
        "#EXT-X-MEDIA": function(c, a) {
            var b = a.media || [];
            b.push(k(c));
            a.media = b
        },
        "#EXT-X-STREAM-INF": function(c, a) {
            var b = a.streams || [];
            b.push(k(c));
            a.streams = b
        },
        "#EXT-X-I-FRAME-STREAM-INF": function(c, a) {
            var b = a.frames || [];
            b.push(k(c));
            a.frames = b
        },
        "#EXT-X-PLAYLIST-TYPE": function(c, a) {
            a.vod = c
        },
        "#EXT-X-TARGETDURATION": function(c, a) {
            a.targetduration = parseInt(c, 10)
        },
        "#EXT-X-MEDIA-SEQUENCE": function(c, a) {
            a.sequence = parseInt(c, 10)
        },
        "#EXT-X-PROGRAM-DATE-TIME": function(c, a) {
            a.programDateTime = c
        },
        "#EXT-X-KEY": function(c, a) {
            a.keyMethod = k(c)
        },
        "#EXTINF": function(c, a) {
            a.totalDuration = (a.totalDuration || 0) + parseFloat(c)
        }
    };
    h.utils.parseHLS = function(c, a) {
        h.utils.getText(c, function(b) {
            var d = f(b, c);
            h.utils.getText(d.streams && d.streams[0] && d.streams[0].url, function(b) {
                var c = {};
                b = b.split("\n");
                for (var e = 0; e < b.length; e++)
                    b[e] && l(b[e].trim(), e, c);
                b = Date.now() / 1E3 - c.totalDuration | 0;
                e = [];
                if (d.streams)
                    for (var f = 0; f < d.streams.length; f++)
                        e[0] || (e[0] = []),
                        e[0].push({
                            id: f,
                            codecs: (d.streams[f].codecs || "-,-").split(",")[0],
                            bandwidth: d.streams[f].bandwidth,
                            height: d.streams[f].resolution && d.streams[f].resolution.split("x")[1],
                            framerate: 0
                        });
                f = [];
                for (var g = 0; d.media && g < d.media.length; g++)
                    f.push({
                        id: g,
                        lang: d.media[g].language,
                        representations: [{
                            id: g,
                            codecs: (d.streams[g].codecs || "-,-").split(",")[1],
                            bandwidth: ""
                        }]
                    });
                a({
                    live: !c.vod,
                    audio: f,
                    video: e,
                    text: [],
                    canRestart: 7200 < c.totalDuration,
                    availabilityStartTime: b,
                    availabilityStartTimeStr: "-",
                    timeShiftBufferDepth: c.totalDuration,
                    valid: !0
                })
            })
        })
    }
}
)($Player);
(function(h) {
    h.Bumper = function(k, l, f, g, d) {
        var c = null, a, b = {
            start: !1,
            end: !1
        };
        d = d || window.innerWidth / 1920;
        this._width = 1920 * d;
        this._height = 1080 * d;
        this.play = function(d) {
            if (!b[d] && (a = d,
            b[d] = !0,
            d = "start" === d ? k : "end" === d ? l : null))
                return f("loading", a),
                c = new h.VideoPlayer(this,0),
                c.start({
                    type: $Player.MEDIA_TYPES.MP4,
                    url: d
                }, g),
                d
        }
        ;
        this.onPlay = function() {
            f("play", a)
        }
        ;
        this.onError = function() {
            f("error", a);
            c && c.clear();
            c = null
        }
        ;
        this.onEnded = function() {
            f("ended", a);
            c && c.clear();
            c = null
        }
    }
}
)($Player);
(function(h) {
    function k(d, c) {
        h.Player.call(this, d, c);
        this._onSeeking = !1;
        this._seekAt = null;
        this._retries = 0;
        Object.defineProperty(this, "_time", {
            get: function() {
                return ((this.control || {}).playPosition || 0) / 1E3
            },
            set: function(a) {
                0 <= a && (2 !== this.control.playState && this.control.play(0),
                this._onSeeking = !0,
                this._seekAt = 1E3 * a | 0,
                this.control.seek(this._seekAt))
            }
        });
        Object.defineProperty(this, "_duration", {
            get: function() {
                return this.control.playTime / 1E3
            }
        });
        Object.defineProperty(this, "_paused", {
            get: function() {
                return 2 === this.control.playState
            }
        })
    }
    function l(d) {
        this._onSeeking && (this._onSeeking = !1,
        g(this._listener, "onSeeked", this),
        2 === this.control.playState && this.control.play(1))
    }
    function f(d) {
        switch (d && "number" === typeof d ? d : this.control.playState) {
        case 1:
            g(this._listener, "onPlay", this);
            0 < this.startTime && (d = this.startTime,
            this._onSeeking = !0,
            this.seek(d),
            this.startTime = 0);
            if (!this.firstRun) {
                this.firstRun = !0;
                var c = this;
                this.timeUpdateID = setInterval(function() {
                    g(c._listener, "onTimeupdate", c)
                }, 500)
            }
            break;
        case 2:
            this._onSeeking || g(this._listener, "onPause", this);
            break;
        case 3:
            g(this._listener, "onCanplay", this);
            break;
        case 5:
            this.timeUpdateID && clearInterval(this.timeUpdateID);
            this.timeUpdateID = null;
            g(this._listener, "onEnded", this);
            break;
        case 6:
            g(this._listener, "onError", this)
        }
    }
    function g(d, c, a) {
        d && "function" === typeof d[c] && d[c].call(d, a)
    }
    k.prototype = Object.create(h.Player.prototype);
    k.prototype.constructor = k;
    k.prototype.createVideo = function(d, c) {
        d.appendChild(h.utils.html2Element('<object id="player" type="' + c + '" style="position: absolute; width: 1280px; height: 720px; left: 0; top: 0; display: block"></object>'))
    }
    ;
    k.prototype.start = function(d, c, a) {
        this.onMedia(d);
        if (!a) {
            for (; c.firstChild; )
                c.removeChild(c.firstChild);
            c.appendChild(h.utils.html2Element('<object id="player" type="' + this.type + '" style="position: absolute; width: 1280px; height: 720px; left: 0; top: 0; display: block"></object>'))
        }
        c.style.display = "block";
        this.control = document.querySelector("#player");
        this.control.data = this.url;
        this.control.onPlayStateChange = f.bind(this);
        this.control.onPlayPositionChanged = l.bind(this);
        "function" === typeof this.control.play && this.control.play(1);
        window.$sOut && $sOut.log("[OIPFPLAYER] using native engine")
    }
    ;
    k.prototype.toggle = function() {
        2 === this.control.playState ? this.control.play(1) : this.control.play(0)
    }
    ;
    k.prototype.pause = function() {
        2 !== this.control.playState && this.control.play(0)
    }
    ;
    k.prototype.resume = function() {
        2 === this.control.playState && this.control.play(1)
    }
    ;
    k.prototype.clear = function() {
        this.timeUpdateID = this.timeUpdateID && clearInterval(this.timeUpdateID);
        this.control && (this.control.stop(),
        this.control.onPlayStateChange = null,
        this.control.onPlayPositionChanged = null);
        this._seekAt = null;
        this._onSeeking = !1;
        this.dispose()
    }
    ;
    k.prototype.reset = function() {}
    ;
    k.prototype.getAudioTracks = function() {
        for (var d = this.control.getComponents(this.control.COMPONENT_TYPE_AUDIO), c = this.control.getCurrentActiveComponents(this.control.COMPONENT_TYPE_AUDIO).item(0), a = [], b = 0, e; b < d.length; b++)
            (e = d.item(b)) && a.push({
                language: e.language,
                enabled: e.language === c.language,
                id: e.componentTag
            });
        return a
    }
    ;
    k.prototype.setAudioTrack = function(d) {
        for (var c = this.control.getComponents(this.control.COMPONENT_TYPE_AUDIO), a = 0, b; a < c.length; a++)
            (b = c.item(a)) && b.componentTag === d.id && this.control.selectComponent(b)
    }
    ;
    h.OipfPlayer = k
}
)($Player);
(function(h) {
    function k(f, g) {
        h.Player.call(this, f, g);
        Object.defineProperty(this, "_time", {
            get: function() {
                return this.control && this.control.currentTime
            },
            set: function(d) {
                0 <= d && (this._mse ? this._mse.seek(d, !0) : this.control.currentTime = d)
            }
        });
        Object.defineProperty(this, "_duration", {
            get: function() {
                return this.control && this.control.duration
            }
        });
        Object.defineProperty(this, "_paused", {
            get: function() {
                return this.control && this.control.paused
            }
        });
        this._mse = this._dashjs = this._hls = null;
        this.onLoadedMetadata = function() {
            console.log("=== on loaded metadata ===", this.startTime);
            this._hls || this._dashjs || this._mse ? console.warn("using mse player") : this.startTime && (console.warn("setting start-time", this.startTime),
            this.control.currentTime = this.startTime,
            this.startTime = 0)
        }
        .bind(this);
        this.onCanPlay = function() {
            l(this._listener, "onCanplay")
        }
        .bind(this);
        this.onPlay = function() {
            l(this._listener, "onPlay")
        }
        .bind(this);
        this.onPause = function() {
            l(this._listener, "onPause")
        }
        .bind(this);
        this.onTimeupdate = function() {
            l(this._listener, "onTimeupdate", this)
        }
        .bind(this);
        this.onSeeked = function() {
            l(this._listener, "onSeeked", this)
        }
        .bind(this);
        this.onEnded = function() {
            l(this._listener, "onEnded")
        }
        .bind(this);
        this.onError = function() {
            l(this._listener, "onError")
        }
        .bind(this)
    }
    function l(f, g, d) {
        f && f[g] && f[g](d);
        f && f[g] || console.warn(g + " NOT FOUND")
    }
    k.prototype = Object.create(h.Player.prototype);
    k.prototype.constructor = k;
    k.prototype.createVideo = function(f, g) {
        var d = '<video id="player" width="' + this._listener._width + '" height="' + this._listener._height + '"></video>';
        g === $Player.MEDIA_TYPES.MP4 && (d = '<video id="player" type="' + g + '" width="' + this._listener._width + '" height="' + this._listener._height + '"></video>');
        f.appendChild(h.utils.html2Element(d))
    }
    ;
    k.prototype.start = function(f, g, d) {
        this.onMedia(f);
        d || (this.reset(g),
        this.createVideo(g, this.type));
        this.control = document.querySelector("#player");
        this.control.addEventListener("loadedmetadata", this.onLoadedMetadata);
        this.control.addEventListener("canplay", this.onCanPlay);
        this.control.addEventListener("play", this.onPlay);
        this.control.addEventListener("pause", this.onPause);
        this.control.addEventListener("timeupdate", this.onTimeupdate);
        this.control.addEventListener("seeked", this.onSeeked);
        this.control.addEventListener("ended", this.onEnded);
        this.control.addEventListener("error", this.onError);
        this._innerStart()
    }
    ;
    k.prototype.toggle = function() {
        var f = this.control;
        f.paused ? f.play() : f.pause()
    }
    ;
    k.prototype.pause = function() {
        var f = this.control;
        f.paused || f.pause()
    }
    ;
    k.prototype.resume = function() {
        var f = this.control;
        f.paused && f.play()
    }
    ;
    k.prototype.clear = function() {
        this.control && (this.control.pause(),
        this._hls && (this._hls.detachMedia(this.control),
        this._hls.destroy(),
        this._hls = null),
        this._dashjs && (this._dashjs.reset(),
        this._dashjs = null),
        this._mse && (this._mse.dispose(),
        this._mse = null),
        this.reset());
        this.dispose()
    }
    ;
    k.prototype.reset = function(f) {
        if (this.control)
            if (this.control.removeEventListener("loadedmetadata", this.onLoadedMetadata),
            this.control.removeEventListener("canplay", this.onCanPlay),
            this.control.removeEventListener("play", this.onPlay),
            this.control.removeEventListener("pause", this.onPause),
            this.control.removeEventListener("timeupdate", this.onTimeupdate),
            this.control.removeEventListener("seeked", this.onSeeked),
            this.control.removeEventListener("ended", this.onEnded),
            this.control.removeEventListener("error", this.onError),
            this._mse)
                this._mse.dispose();
            else {
                var g = this.control.querySelector("source");
                g ? g.src = "" : this.control.src = ""
            }
        if (f = f || (this.control || {}).parentNode)
            for (; f.firstChild; )
                f.removeChild(f.firstChild)
    }
    ;
    k.prototype.getError = function() {
        var f = this.control && this.control.error
          , g = "";
        if (f) {
            switch (f.code) {
            case MediaError.MEDIA_ERR_ABORTED:
                g += "The user canceled the media.";
                break;
            case MediaError.MEDIA_ERR_NETWORK:
                g += "A network error occurred while fetching the media.";
                break;
            case MediaError.MEDIA_ERR_DECODE:
                g += "An error occurred while decoding the media.";
                break;
            case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                g += "The media is missing or is in a format not supported by your browser.";
                break;
            default:
                g += "An unknown error occurred."
            }
            (f = f.message) && f.length && (g += " " + f)
        }
        return g
    }
    ;
    k.prototype.getAudioTracks = function() {
        if (this._mse)
            return this._mse.getAudioTrackList();
        if (this._hls) {
            for (var f = this._hls.audioTrack, g = this._hls.audioTracks, d = [], c = 0; c < g.length; c++)
                d.push({
                    id: g[c].id,
                    enabled: g[c].id === f,
                    language: g[c].name
                });
            return d
        }
        if (this._dashjs) {
            f = this._dashjs.getCurrentTrackFor("audio");
            g = this._dashjs.getTracksFor("audio");
            d = [];
            for (c = 0; c < g.length; c++)
                d.push({
                    id: g[c].id,
                    enabled: g[c].id === f.id,
                    language: g[c].lang
                });
            return d
        }
        f = this.control.audioTracks;
        g = [];
        d = {};
        for (c = 0; f && c < f.length; c++) {
            var a = f[c].id || f[c].language;
            d[a] || (d[a] = !0,
            g.push(f[c]))
        }
        if (g)
            return g
    }
    ;
    k.prototype.setAudioTrack = function(f) {
        if (this._mse)
            this._mse.setAudioTrack(f);
        else if (this._hls)
            this._hls.audioTrack = f.id;
        else if (this._dashjs)
            for (var g = this._dashjs.getTracksFor("audio"), d = 0; d < g.length; d++) {
                if (g[d].id === f.id) {
                    this._dashjs.setCurrentTrack(g[d]);
                    break
                }
            }
        else if (g = this.control.audioTracks,
        d = 0,
        g) {
            for (var c = 0; c < g.length; c++)
                f.id === g[c].id && (d = c),
                g[c].enabled = !1;
            g[d].enabled = !0
        }
    }
    ;
    k.prototype.getQuality = function(f) {
        if (this._dashjs)
            return this._dashjs.getCurrentTrackFor(f).bitrateList[this._dashjs.getQualityFor(f)];
        if (this._hls) {
            if ("video" === f)
                return {
                    id: this._hls.currentLevel
                };
            if ("audio" === f)
                return {
                    id: this._hls.audioTrack
                }
        }
        if (this._mse)
            if ("video" === f) {
                f = this._mse.getVideoQualities();
                for (var g = 0; f && g < f.length; g++)
                    if (f[g].active)
                        return {
                            id: f[g].id
                        }
            } else if ("audio" === f)
                for (f = this._mse.getAudioTrackList(),
                g = 0; f && g < f.length; g++)
                    if (f[g].enabled)
                        return {
                            id: f[g].id
                        }
    }
    ;
    k.prototype.applySettings = function(f) {
        this._dashjs && this._dashjs.updateSettings(f)
    }
    ;
    k.prototype._innerStart = function() {
        if ($Player.mse) {
            if ("pico" === $Player.preferredMSEEngine && window.pico) {
                window.$sOut && $sOut.log("[VIDEOPLAYER] using pico engine");
                if (!this._mse) {
                    this._mse = pico.create({
                        removeOldSegments: !0,
                        adaptive: !0,
                        from: this.startTime
                    });
                    this._mse.on(pico.events.ENDED, this.onEnded);
                    this._mse.on(pico.events.ERROR, this.onError);
                    var f = this._listener.onClosed;
                    this._mse.on(pico.events.CLOSED, function() {
                        f ? (console.warn("CALLING ON CLOSE"),
                        f.call(this)) : console.error("CANNOT DELIVER ON CLOSED EVENT")
                    }
                    .bind(this));
                    this._mse.on(pico.events.OK, function() {
                        a: {
                            var a = this._mse.getVideoQualities();
                            for (var b = ["1080", "810", "720", "576"], c = a.length - 1; 0 <= c; c--)
                                for (var d = b.length - 1; 0 <= d; d--)
                                    if (a[c].display === b[d]) {
                                        a = a[c];
                                        break a
                                    }
                            a = void 0
                        }
                        a && this._mse.setVideoQuality(a);
                        this._mse.setVideoQuality({
                            active: !0,
                            label: "auto"
                        })
                    }
                    .bind(this));
                    this._mse.on(pico.events.READY, function() {
                        this.startTime && (this.control.currentTime = this.startTime,
                        this.startTime = 0);
                        this._mse.resume()
                    }
                    .bind(this));
                    this._mse.on(pico.events.ON_RENDITION_CHANGE, function(a) {
                        if ("function" === typeof this._listener.onRepresentationSwitch)
                            this._listener.onRepresentationSwitch({
                                type: "video/mp4" === a.type ? "video" : "audio",
                                id: a.data.id
                            })
                    }
                    .bind(this));
                    this._mse.on(pico.events.ON_TRACK_CHANGED, function(a) {
                        if ("function" === typeof this._listener.onRepresentationSwitch)
                            this._listener.onRepresentationSwitch({
                                type: "video/mp4" === a.type ? "video" : "audio",
                                id: a.id
                            })
                    }
                    .bind(this))
                }
                var g = !$Player.isHbbTv() || "SmartTV_2019_1" === pico.info.getUA().modelName;
                this._mse.load(this.control, this.url, {
                    mimeType: this.type,
                    laUrl: (this.drm || {}).url,
                    drmProvider: (this.drm || {}).name,
                    operator: (this.drm || {}).operator,
                    messageFormat: g ? "utf-16" : "utf-8"
                });
                return
            }
            if ((g = this.isHls()) && window.Hls && Hls.isSupported()) {
                window.$sOut && $sOut.log("[VIDEOPLAYER] using hls engine");
                var d = new Hls({
                    lowLatencyMode: !1,
                    startLevel: 0
                });
                d.loadSource(this.url);
                d.attachMedia(this.control);
                d.on(Hls.Events.MANIFEST_PARSED, function(a, b) {
                    this.control.currentTime = this.startTime || -1;
                    this.startTime = 0;
                    this.control.play()
                }
                .bind(this));
                d.on(Hls.Events.AUDIO_TRACK_SWITCHED, function(a, b) {
                    console.log("[HLS] AUDIO TRACK SWITCHED", b);
                    if ("function" === typeof this._listener.onRepresentationSwitch)
                        this._listener.onRepresentationSwitch({
                            type: "audio",
                            id: b.id
                        })
                }
                .bind(this));
                d.on(Hls.Events.LEVEL_SWITCHED, function(a, b) {
                    console.log("[HLS] LEVEL SWITCHED", b);
                    if ("function" === typeof this._listener.onRepresentationSwitch)
                        this._listener.onRepresentationSwitch({
                            type: "video",
                            id: b.level
                        })
                }
                .bind(this));
                d.on(Hls.Events.ERROR, function(a, b) {
                    if (b.fatal)
                        switch (b.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.warn("[HLS] fatal network error encountered, try to recover");
                            d.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            console.warn("[HLS] fatal media error encountered, try to recover");
                            d.recoverMediaError();
                            break;
                        default:
                            console.error("[HLS] cannot recover error"),
                            d.destroy()
                        }
                    else
                        console.warn("[HLS] ERROR:", b)
                });
                this._hls = d;
                return
            }
            if ((g = this.isDash()) && window.dashjs) {
                window.$sOut && $sOut.log("[VIDEOPLAYER] using dash-js engine");
                g = window.dashjs.MediaPlayer().create();
                g.on(window.dashjs.MediaPlayer.events.PLAYBACK_METADATA_LOADED, function() {
                    this.control.currentTime = this.startTime || -1;
                    this.startTime = 0
                }
                .bind(this));
                g.on(window.dashjs.MediaPlayer.events.REPRESENTATION_SWITCH, function(a) {
                    if ("function" === typeof this._listener.onRepresentationSwitch)
                        this._listener.onRepresentationSwitch({
                            type: a.mediaType,
                            id: a.currentRepresentation.id
                        })
                }
                .bind(this));
                g.on(window.dashjs.MediaPlayer.events.TRACK_CHANGE_RENDERED, function(a) {
                    if ("function" === typeof this._listener.onRepresentationSwitch && a.oldMediaInfo)
                        this._listener.onRepresentationSwitch({
                            type: a.mediaType,
                            id: a.newMediaInfo.id
                        })
                }
                .bind(this));
                this.config && g.updateSettings(this.config);
                g.initialize(this.control, this.url, !0);
                g.setTextTrack(-1);
                if (this.drm) {
                    if ($Player.isHbbTv() && -1 === navigator.userAgent.indexOf("SmartTV_2019_1"))
                        for (var c = g.getProtectionController().getKeySystems(), a = 0; a < c.length; a++)
                            if ("urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95" === c[a].schemeIdURI) {
                                c[a].setPlayReadyMessageFormat("utf-8");
                                break
                            }
                    c = "PLAYREADY" === $DEVICE.preferredDRM ? {
                        "com.microsoft.playready": {
                            serverURL: this.drm.url
                        }
                    } : {
                        "com.widevine.alpha": {
                            serverURL: this.drm.url
                        }
                    };
                    "nagra" === this.drm.operator && c["com.microsoft.playready"] && (a = this.drm.url.split("?"),
                    c["com.microsoft.playready"].serverURL = a[0],
                    c["com.microsoft.playready"].httpRequestHeaders = {
                        "nv-authorizations": a[1].split("=")[1]
                    });
                    g.setProtectionData(c)
                }
                this._dashjs = g;
                return
            }
        }
        window.$sOut && $sOut.log("[VIDEOPLAYER] using native engine");
        this.control.src = this.url;
        if (g = this.control.play()) {
            var b = this._listener;
            g.then(function() {
                l(b, "onPlaybackStarted")
            }).catch(function(a) {
                console.error("[video] error: " + a)
            })
        }
    }
    ;
    h.VideoPlayer = k
}
)($Player);
