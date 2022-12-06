var $VirtualHbbtv = function() {
    function _0x155400() {
        var _0x2ebcc7 = !![]
          , _0x48ffcf = document['querySelector']('#appmgr')
          , _0x4d0ed4 = !!(typeof _0x48ffcf['getOwnerApplication'] === 'function' && _0x48ffcf['getOwnerApplication'](document));
        HBBTV_EMULATION = !_0x4d0ed4;
        if (!_0x4d0ed4) {
            println('Emulating\x20HBBTV\x20layer...', 'fne');
            var _0x3bc7d2 = document['querySelector']('object[type=\x22application/oipfConfiguration\x22]');
            _0x3bc7d2['configuration'] = {
                'subtitlesEnabled': !![],
                'preferredSubtitleLanguage': 'ITA'
            },
            setTimeout(function() {
                var _0x3d8dae = document['querySelector']('object[type=\x22application/oipfApplicationManager\x22]');
                _0x3d8dae['getOwnerApplication'] = function() {
                    return {
                        'createApplication': function(_0x26eb03, _0x1502c8) {
                            return println('createApplication(' + _0x26eb03 + ',\x20' + _0x1502c8 + ')', 'inf'),
                            setTimeout(function() {
                                window['open'](_0x26eb03);
                            }, 0x0),
                            {};
                        },
                        'destroyApplication': function() {
                            println('destroyApplication()', 'inf'),
                            document['body']['innerHTML'] = '<div\x20style=\x27color:white;\x20background:red;\x20font-size:\x2035px\x27>&nbsp;&nbsp;APP\x20DESTROYED\x20BY\x20destroyApplication&nbsp;&nbsp;<div>',
                            _0x2ebcc7 && location['reload']();
                        }
                    };
                }
                ;
            }, 0x0);
            var _0x16b6f4 = document['querySelector']('object[type=\x22video/broadcast\x22]')
              , _0xac737d = {
                'rai1': new $channel('Rai\x201\x20HD',0x217c,0x2,0x41f),
                'rai1hd': new $channel('Rai\x201\x20HD',0x217c,0x71,0x44d),
                'rai2': new $channel('Rai\x202\x20HD',0x217c,0x71,0x44e),
                'rai2hd': new $channel('Rai\x202\x20HD',0x217c,0x71,0x44e),
                'rai3': new $channel('Rai\x203\x20HD',0x217c,0x2,0x41b),
                'rai3hd': new $channel('Rai\x203\x20HD',0x217c,0x2,0x41b),
                'rai4': new $channel('Rai\x204',0x217c,0x2,0x420),
                'rai4hd': new $channel('Rai\x204\x20HD',0x217c,0x2,0x420),
                'rai5': new $channel('Rai\x205',0x217c,0x2,0x421),
                'rainews24': new $channel('Rai\x20News\x2024',0x217c,0x71,0x44f),
                'raimovie': new $channel('Rai\x20Movie',0x217c,0x1,0x3ea),
                'raipremium': new $channel('Rai\x20Premium\x20HD',0x217c,0x1,0x3ee),
                'raipremiumhd': new $channel('Rai\x20Premium\x20HD',0x217c,0x1,0x3ee),
                'raigulp': new $channel('Rai\x20Gulp',0x217c,0x1,0x3ec),
                'raiyoyo': new $channel('Rai\x20YoYo',0x217c,0x1,0x3ed),
                'raistoria': new $channel('Rai\x20Storia',0x217c,0x1,0x3ef),
                'raisport+hd': new $channel('Rai\x20Sport\x20+\x20HD',0x217c,0x1,0x3e9),
                'raisport': new $channel('Rai\x20Sport',0x217c,0x2,0x41d),
                'raiscuola': new $channel('Rai\x20Scuola',0x217c,0x2,0x41e),
                'rairadio1': new $channel('Rai\x20Radio\x201',0x217c,0x71,0x451),
                'rairadio2': new $channel('Rai\x20Radio\x202',0x217c,0x71,0x452),
                'rairadio3': new $channel('Rai\x20Radio\x203',0x217c,0x71,0x453),
                'raigrparlamento': new $channel('Rai\x20GrParlamento',0x13e,0x2,0x217c),
                'rairadiotuttaitaliana': new $channel('Rai\x20Radio\x20Tutta\x20Italiana',0x13e,0x2,0x2182),
                'rairadiolive': new $channel('Rai\x20Radio\x20Live',0x13e,0x2,0x2184),
                'rairadiokids': new $channel('Rai\x20Radio\x20Kids',0x13e,0x2,0x218d),
                'rairadiotechete\x27': new $channel('Rai\x20Radio\x20Techete\x27',0x13e,0x2,0x2183),
                'raiisoradio': new $channel('Rai\x20Isoradio',0x13e,0x2,0x217d),
                'rairadio1sport': new $channel('Rai\x20Radio\x201\x20Sport',0x13e,0x2,0x218e),
                'rairadio2indie': new $channel('Rai\x20Radio\x202\x20Indie',0x13e,0x2,0x218f),
                'rairadioclassica': new $channel('Rai\x20Radio\x20Classica',0x13e,0x2,0x217a)
            }
              , _0x10c98b = _0xac737d[CHANNEL['toLowerCase']()['replace'](/ /gm, '')];
            if (!_0x10c98b)
                _0x10c98b = new $channel('Rai\x201',0x13e,0x1,0xd49);
            _0x16b6f4['currentChannel'] = _0x10c98b,
            println('📺\x20STARTING\x20CHANNEL:\x20' + _0x10c98b['name']);
            var _0x24ed2e = new chList();
            _0x16b6f4['getChannelConfig'] = function() {
                return {
                    'channelList': _0x24ed2e
                };
            }
            ,
            _0x16b6f4['setChannel'] = function(_0x2144cc, _0x45ce8f, _0x57680d) {
                $StreamingService['setChannel'](_0x2144cc),
                _0x16b6f4['currentChannel'] = _0x2144cc;
            }
            ,
            _0x16b6f4['onChannelChangeSucceeded'] = function(_0x33d383) {
                println('onChannelChangeSucceeded(' + (_0x33d383 && _0x33d383['name']) + ')');
            }
            ;
            var _0x45f59a = {
                '_currentPointer': 0x0,
                '_comps': [new $audioComponent('1','650',0x1,'MPEG1_L2',![],'ITA',![],'2'), new $audioComponent('2','694',0x1,'MPEG1_L2',![],'OTH',![],'2'), new $audioComponent('3','699',0x1,'MPEG1_L2',![],'ENG',![],'2')]
            }
              , _0x4ea497 = {
                '_currentPointer': 0x0,
                '_comps': [new $subtitleComponent('255','576',0x2,'EBU-SUBT',![],'ITA',![]), new $subtitleComponent('255','576',0x2,'EBU-SUBT',![],'ENG',![])]
            };
            _0x16b6f4['getComponents'] = function(_0x4adda0) {
                switch (_0x4adda0) {
                case 0x0:
                    return undefined;
                case 0x1:
                    return _0x45f59a['_comps'];
                case 0x2:
                    return _0x4ea497['_comps'];
                }
            }
            ,
            _0x16b6f4['getCurrentActiveComponents'] = function(_0x2e7b09) {
                switch (_0x2e7b09) {
                case 0x0:
                    return undefined;
                case 0x1:
                    return [_0x45f59a['_comps'][_0x45f59a['_currentPointer']]];
                case 0x2:
                    return [_0x4ea497['_comps'][_0x4ea497['_currentPointer']]];
                }
            }
            ,
            _0x16b6f4['unselectComponent'] = function(_0x4755a2) {}
            ,
            _0x16b6f4['selectComponent'] = function(_0x30f25b) {
                switch (_0x30f25b['type']) {
                case 0x0:
                    break;
                case 0x1:
                    var _0x5f4f9d = _0x45f59a['_comps']['indexOf'](_0x30f25b);
                    if (_0x5f4f9d !== -0x1)
                        _0x45f59a['_currentPointer'] = _0x5f4f9d,
                        _0x16b6f4['onSelectedComponentChanged'](0x1);
                    else
                        println('TODO\x20-\x20selectComponent\x20not\x20implemented\x20for\x20this\x20case...', 'err');
                    break;
                case 0x2:
                    var _0x1b19af = _0x4ea497['_comps']['indexOf'](_0x30f25b);
                    if (_0x1b19af !== -0x1)
                        _0x4ea497['_currentPointer'] = _0x1b19af,
                        _0x16b6f4['onSelectedComponentChanged'](0x2);
                    else
                        println('TODO\x20-\x20selectComponent\x20not\x20implemented\x20for\x20this\x20case...', 'err');
                    break;
                }
            }
            ,
            _0x16b6f4['onSelectedComponentChanged'] = function(_0x321626) {
                println('onSelectedComponentChanged(' + _0x321626 + ')');
            }
            ,
            _0x16b6f4['COMPONENT_TYPE_VIDEO'] = 0x0,
            _0x16b6f4['COMPONENT_TYPE_AUDIO'] = 0x1,
            _0x16b6f4['COMPONENT_TYPE_SUBTITLE'] = 0x2,
            $VideoStreamer['getInstance']()['addOkEventListener'](function() {
                println('_______________OK', 'err');
            }),
            $VideoStreamer['getInstance']()['addErrorEventListener'](function() {
                println('_______________ERROR', 'err');
            }),
            $VideoStreamer['getInstance']()['addClosedEventListener'](function() {
                println('_______________CLOSED', 'err');
            }),
            $VideoStreamer['getInstance']()['addReadyEventListener'](function() {
                var _0x7f12eb = document['querySelector']('object[type=\x22video/broadcast\x22]');
                println('_______________READY\x20' + _0x7f12eb['currentChannel']['name'], 'err'),
                _0x7f12eb['onChannelChangeSucceeded'](_0x7f12eb['currentChannel']);
            }),
            $VideoStreamer['getInstance']()['addDvrEventListener'](function() {
                println('_______________DVR', 'err');
            });
        }
    }
    return _0x155400['prototype']['constructor'] = _0x155400,
    _0x155400;
}()
  , $channel = function() {
    function _0x55087c(_0x1ce7eb, _0x220861, _0x24946a, _0x2988fa) {
        this['name'] = _0x1ce7eb,
        this['onid'] = _0x220861,
        this['tsid'] = _0x24946a,
        this['sid'] = _0x2988fa;
    }
    return _0x55087c['prototype']['constructor'] = _0x55087c,
    _0x55087c;
}()
  , $audioComponent = function() {
    function _0x24ac8a(_0x26dde8, _0x103073, _0x3b3eca, _0x1a86e9, _0x5245a4, _0x2c9060, _0x51deba, _0x16f9da) {
        this['componentTag'] = _0x26dde8,
        this['pid'] = _0x103073,
        this['type'] = _0x3b3eca,
        this['encoding'] = _0x1a86e9,
        this['encrypted'] = _0x5245a4,
        this['language'] = _0x2c9060,
        this['audioDescription'] = _0x51deba,
        this['audioChannels'] = _0x16f9da;
    }
    return _0x24ac8a['prototype']['constructor'] = _0x24ac8a,
    _0x24ac8a;
}()
  , $subtitleComponent = function() {
    function _0x6b4ccb(_0x2dd731, _0x38ce69, _0x451852, _0x1875e8, _0x5aa86a, _0x43343b, _0xf9d1cf) {
        this['componentTag'] = _0x2dd731,
        this['pid'] = _0x38ce69,
        this['type'] = _0x451852,
        this['encoding'] = _0x1875e8,
        this['encrypted'] = _0x5aa86a,
        this['language'] = _0x43343b,
        this['hearingImpaired'] = _0xf9d1cf;
    }
    return _0x6b4ccb['prototype']['constructor'] = _0x6b4ccb,
    _0x6b4ccb;
}()
  , chList = function() {
    function _0x5f58d0() {
        var _0x3df39e = [];
        this['getChannelByTriplet'] = function(_0x53be58, _0x3696ef, _0x4f4ef8, _0x4e97df) {
            for (var _0x5645ac = 0x0; _0x5645ac < _0x3df39e['length']; _0x5645ac++) {
                if (_0x53be58 === _0x3df39e[_0x5645ac]['onid'] && _0x3696ef === _0x3df39e[_0x5645ac]['tsid'] && _0x4f4ef8 === _0x3df39e[_0x5645ac]['sid'])
                    return _0x3df39e[_0x5645ac];
            }
            return null;
        }
        ,
        this['clear'] = function() {
            _0x3df39e = [];
        }
        ,
        this['addCh'] = function(_0xe2f3c3, _0x57291f, _0x4f4b71, _0x396434) {
            var _0xd19cf9 = new $channel(_0xe2f3c3,_0x57291f,_0x4f4b71,_0x396434);
            _0x3df39e['push'](_0xd19cf9);
            var _0xc7ebc8 = _0xe2f3c3['toLowerCase']()['replace'](/ /gm, '')
              , _0x5d599f = $VideoManager['getInstance']()['_video']['currentChannel']['name']['toLowerCase']()['replace'](/ /gm, '');
            if (_0x5d599f === _0xc7ebc8) {
                var _0x49c2e2 = document['querySelector']('object[type=\x22video/broadcast\x22]');
                _0x49c2e2['currentChannel'] = _0xd19cf9;
            }
        }
        ,
        this['setArtifact'] = function(_0x102201, _0x41d177, _0x3312fd, _0x4ebb59) {
            this['getChannelByTriplet'](_0x102201, _0x41d177, _0x3312fd)['artifact'] = _0x4ebb59;
        }
        ,
        this['chReset'] = function(_0x3e13b8) {
            var _0x5c3b70 = this['getChannelByTriplet'](_0x3e13b8['onid'], _0x3e13b8['tsid'], _0x3e13b8['sid'])
              , _0xfa60d8 = _0x3df39e['indexOf'](_0x5c3b70);
            _0x3df39e[_0xfa60d8] = _0x3e13b8;
        }
        ,
        this['chRemove'] = function(_0x2a9692) {
            var _0x1d29b7 = _0x3df39e['indexOf'](_0x2a9692);
            return _0x3df39e['splice'](_0x1d29b7, 0x1),
            _0x1d29b7;
        }
        ,
        this['toArray'] = function() {
            return _0x3df39e;
        }
        ;
    }
    return _0x5f58d0['prototype']['constructor'] = _0x5f58d0,
    _0x5f58d0;
}()
  , $VideoStreamer = function() {
    function _0x15e3f5() {
        var _0x57c6e7 = document['querySelector']('#appmgr')
          , _0x5b3567 = !!(typeof _0x57c6e7['getOwnerApplication'] === 'function' && _0x57c6e7['getOwnerApplication'](document));
        this['restart'] = function() {
            var _0x22fa37 = document['querySelector']('object[type=\x22video/broadcast\x22]');
            println('[STREAMER]\x20RESTART\x20' + _0x22fa37['currentChannel']['name']),
            $HubServices['getChannelByName'](_0x22fa37['currentChannel']['name'], function(_0x3db966) {
                var _0x4f9927 = $Scene['switch2']($ScenePlayer);
                _0x4f9927['setData'](_0x3db966, 'restart');
            });
        }
        ,
        this['play'] = function() {}
        ,
        this['playUrl'] = function(_0x2eb348) {}
        ,
        this['setChannel'] = function() {}
        ,
        this['dispose'] = function() {}
        ,
        this['pause'] = function() {}
        ,
        this['resume'] = function() {}
        ,
        this['addOkEventListener'] = function() {}
        ,
        this['removeOkEventListener'] = function() {}
        ,
        this['addReadyEventListener'] = function() {}
        ,
        this['removeReadyEventListener'] = function() {}
        ,
        this['addErrorEventListener'] = function() {}
        ,
        this['removeErrorEventListener'] = function() {}
        ,
        this['addClosedEventListener'] = function() {}
        ,
        this['removeClosedEventListener'] = function() {}
        ,
        this['addDvrEventListener'] = function() {}
        ,
        this['removeDvrEventListener'] = function() {}
        ;
    }
    return {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x15e3f5()),
            this['instance'];
        }
    };
}()
  , $DataLoader = function() {
    function _0xa02bce(_0xab1566) {
        this['instanceReadyListener'] = [];
        if (_0xab1566)
            this['instanceReadyListener']['push'](_0xab1566);
        function _0x1c0a0e() {
            println('🟢\x20Data\x20Loader');
            for (var _0x172709 = 0x0; _0x172709 < this['instanceReadyListener']['length']; _0x172709++) {
                this['instanceReadyListener'][_0x172709]();
            }
        }
        var _0x2223f1 = undefined;
        Object['defineProperty'](this, '_svgXml', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x2223f1;
            }
        }),
        Object['defineProperty'](this, '_ready', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return !!_0x2223f1;
            }
        });
        var _0x19fc83 = undefined;
        if (SVG0_FILE) {
            _0x19fc83 = $StorageManager['getInstance']()['read'](SVG0_FILE),
            _0x2223f1 = _0x19fc83 ? new DOMParser()['parseFromString'](_0x19fc83, 'text/xml') : undefined;
            if (_0x2223f1) {
                var _0x4f19c3 = _0x2223f1['getElementsByTagName']('svgResources')[0x0]['getAttribute']('expirationTime');
                if (_0x4f19c3) {
                    _0x4f19c3 = parseInt(_0x4f19c3);
                    if (Date['now']() > _0x4f19c3)
                        println('SVG0\x20cache\x20retrieved\x20but\x20expired\x20=>\x20cache\x20abort', 'fne'),
                        $StorageManager['getInstance']()['delete'](SVG0_FILE),
                        _0x2223f1 = undefined;
                    else {
                        var _0x2fd14c = _0x4f19c3 - Date['now'](), _0x372707 = Math['floor'](_0x2fd14c / 0x3e8), _0x345a9e, _0x29a516;
                        _0x29a516 = _0x372707 >= 0xe10 ? Math['floor'](_0x372707 / 0xe10) : 0x0,
                        _0x372707 = _0x372707 - _0x29a516 * 0xe10,
                        _0x345a9e = Math['floor'](_0x372707 / 0x3c),
                        _0x372707 = _0x372707 - _0x345a9e * 0x3c,
                        println('SVG0\x20cache\x20retrieved.\x20It\x20will\x20expire\x20in\x20' + _0x29a516 + '\x20hours,\x20' + _0x345a9e + '\x20minutes,\x20' + _0x372707 + '\x20seconds', 'fne');
                    }
                } else
                    println('SVG0\x20cache\x20retrieved\x20but\x20missing\x20\x22expirationTime\x22\x20field\x20=>\x20cache\x20abort', 'fne'),
                    $StorageManager['getInstance']()['delete'](SVG0_FILE),
                    _0x2223f1 = undefined;
            } else
                println('missing\x20SVG0\x20cache', 'fne'),
                $StorageManager['getInstance']()['delete'](SVG0_FILE);
        } else
            println('undefined\x20SVG0_FILE\x20=>\x20SVG0\x20CACHE\x20DISABLED', 'fne');
        if (!_0x2223f1)
            $Net['http']('resources/SVG0_20221130_164531.xml')['get']({
                'resolve': function(_0x3ba08b) {
                    if (!_0x3ba08b['errorFlag']) {
                        _0x2223f1 = new DOMParser()['parseFromString'](_0x3ba08b['text'], 'text/xml');
                        if (SVG0_FILE)
                            $StorageManager['getInstance']()['write'](SVG0_FILE, _0x3ba08b['text']['replace']('<svgResources>', '<svgResources\x20expirationTime=\x22' + new Date(Date['now']() + 0x3e8 * 0x3c * 0x3c * 0x18)['getTime']() + '\x22>'));
                        if (this['_ready'])
                            _0x1c0a0e['bind'](this)();
                    } else
                        println(_0x3ba08b, 'err');
                }
                ['bind'](this),
                'reject': function(_0x336d20) {
                    println(_0x336d20, 'err');
                }
            });
        else {
            if (this['_ready'])
                _0x1c0a0e['bind'](this)();
        }
    }
    _0xa02bce['prototype']['constructor'] = _0xa02bce;
    var _0x4305c9 = new XMLSerializer();
    return _0xa02bce['prototype']['getSvgCode'] = function(_0x29a937) {
        var _0x4b0492 = this['_svgXml']['querySelector']('svg[name=\x22' + _0x29a937 + '\x22]');
        if (!_0x4b0492)
            return println('⚠️\x20DataLoader.getSvgCode:\x20unable\x20to\x20get\x20svg\x20resource\x20\x22' + _0x29a937 + '\x22', 'wrn'),
            undefined;
        _0x4b0492['removeAttribute']('name'),
        _0x4b0492['setAttribute']('xmlns', 'http://www.w3.org/2000/svg');
        var _0x220a87 = _0x4305c9['serializeToString'](_0x4b0492);
        return _0x220a87 = $MISC['colorNormalize'](_0x220a87),
        _0x220a87['length'] <= 0x2ee0 && (_0x220a87 = _0x220a87['replace'](/href="#/gm, 'href=\x22%23'),
        _0x220a87 = _0x220a87['replace'](/url\(#/gm, 'url(%23')),
        _0x4b0492['removeAttribute']('xmlns'),
        _0x4b0492['setAttribute']('name', _0x29a937),
        _0x220a87;
    }
    ,
    _0xa02bce['prototype']['getSvgImageUrl'] = function(_0x21beaf) {
        var _0x4954d1 = this['getSvgCode'](_0x21beaf);
        return _0x4954d1 ? 'data:image/svg+xml;utf8,' + _0x4954d1 : undefined;
    }
    ,
    _0xa02bce['prototype']['fileInject'] = function(_0x13015f, _0x5742c4) {
        var _0x207baa = _0x13015f['indexOf']('resources/SVG1') === 0x0 ? 'svg1.xml' : _0x13015f
          , _0x393b17 = $StorageManager['getInstance']()['read']('hbbtv.tvhub.' + _0x207baa)
          , _0x2bfd6c = _0x393b17 ? new DOMParser()['parseFromString'](_0x393b17, 'text/xml') : undefined;
        if (_0x2bfd6c) {
            var _0x4bae08 = _0x2bfd6c['getElementsByTagName']('svgResources')[0x0]['getAttribute']('expirationTime');
            if (_0x4bae08) {
                _0x4bae08 = parseInt(_0x4bae08);
                if (Date['now']() > _0x4bae08)
                    println('cache\x20retrieved\x20for\x20file\x20\x22' + _0x207baa + '\x22\x20but\x20expired\x20=>\x20cache\x20abort', 'fne'),
                    $StorageManager['getInstance']()['delete']('hbbtv.tvhub.' + _0x13015f),
                    _0x2bfd6c = undefined;
                else {
                    var _0x5d4748 = _0x4bae08 - Date['now'](), _0x72fb6b = Math['floor'](_0x5d4748 / 0x3e8), _0xd81ffc, _0x21c181;
                    _0x21c181 = _0x72fb6b >= 0xe10 ? Math['floor'](_0x72fb6b / 0xe10) : 0x0,
                    _0x72fb6b = _0x72fb6b - _0x21c181 * 0xe10,
                    _0xd81ffc = Math['floor'](_0x72fb6b / 0x3c),
                    _0x72fb6b = _0x72fb6b - _0xd81ffc * 0x3c,
                    println('cache\x20retrieved\x20for\x20file\x20\x22' + _0x207baa + '\x22.\x20It\x20will\x20expire\x20in\x20' + _0x21c181 + '\x20hours,\x20' + _0xd81ffc + '\x20minutes,\x20' + _0x72fb6b + '\x20seconds', 'fne');
                }
            } else
                println('cache\x20retrieved\x20for\x20file\x20\x22' + _0x207baa + '\x22\x20but\x20missing\x20\x22expirationTime\x22\x20field\x20=>\x20cache\x20abort', 'fne'),
                $StorageManager['getInstance']()['delete']('hbbtv.tvhub.' + _0x13015f),
                _0x2bfd6c = undefined;
        } else
            println('missing\x20cache\x20for\x20file\x20\x22' + _0x207baa + '\x22', 'fne');
        if (_0x2bfd6c) {
            for (var _0xc3b8db, _0x3696c4 = $DataLoader['getInstance']()['_svgXml']; _0x2bfd6c['firstElementChild']['childElementCount'] > 0x0; ) {
                _0xc3b8db = _0x2bfd6c['firstElementChild']['childNodes'][0x0],
                _0x3696c4['getElementsByTagName']('svgResources')[0x0]['appendChild'](_0xc3b8db);
            }
            if (_0x5742c4)
                _0x5742c4();
        } else
            $Net['http'](_0x13015f)['get']({
                'resolve': function(_0x1cd77a) {
                    if (!_0x1cd77a['errorFlag']) {
                        $StorageManager['getInstance']()['write']('hbbtv.tvhub.' + _0x207baa, _0x1cd77a['text']['replace']('<svgResources>', '<svgResources\x20expirationTime=\x22' + new Date(Date['now']() + 0x3e8 * 0x3c * 0x3c * 0x18)['getTime']() + '\x22>'));
                        for (var _0x583f32, _0x5395a6 = new DOMParser()['parseFromString'](_0x1cd77a['text'], 'text/xml'), _0x4373fc = $DataLoader['getInstance']()['_svgXml']; _0x5395a6['firstElementChild']['childElementCount'] > 0x0; ) {
                            _0x583f32 = _0x5395a6['firstElementChild']['childNodes'][0x0],
                            _0x4373fc['getElementsByTagName']('svgResources')[0x0]['appendChild'](_0x583f32);
                        }
                        if (_0x5742c4)
                            _0x5742c4();
                    } else {
                        println(_0x1cd77a, 'err');
                        if (_0x5742c4)
                            _0x5742c4();
                    }
                }
                ['bind'](this),
                'reject': function(_0xc195fa) {
                    println(_0xc195fa, 'err');
                    if (_0x5742c4)
                        _0x5742c4();
                }
            });
    }
    ,
    {
        'instance': undefined,
        'getInstance': function(_0x1b9e89) {
            if (!this['instance'])
                this['instance'] = new _0xa02bce(_0x1b9e89);
            else {
                if (this['instance']['_ready']) {
                    if (_0x1b9e89)
                        _0x1b9e89();
                } else {
                    if (_0x1b9e89)
                        this['instance']['instanceReadyListener']['push'](_0x1b9e89);
                }
            }
            return this['instance'];
        }
    };
}()
  , $Net = {
    'http': function(_0x3ca3d3) {
        var _0x2d0abc = function(_0x42cf2b) {
            var _0x397c2b = (_0x42cf2b['status'] / 0x64 | 0x0) !== 0x2;
            return {
                'code': _0x42cf2b['status'],
                'errorFlag': _0x397c2b,
                'text': _0x397c2b ? _0x42cf2b['statusText'] : _0x42cf2b['response'],
                'type': _0x42cf2b['getResponseHeader']('Content-Type'),
                'url': _0x42cf2b['responseURL']
            };
        }
          , _0x53109a = {
            'ajax': function(_0x19adc6, _0x1193f2, _0x564c1b, _0x15f507, _0xb779d3) {
                var _0x3b60e1 = new XMLHttpRequest(), _0x5ab2af = _0x1193f2, _0x16a35a;
                if (_0x15f507 && (_0x19adc6 === 'POST' || _0x19adc6 === 'PUT')) {
                    _0x16a35a = '';
                    if (_0xb779d3 === 'json')
                        _0x16a35a = JSON['stringify'](_0x15f507);
                    else {
                        var _0x40804a = 0x0;
                        for (var _0x1b0d1d in _0x15f507) {
                            if (_0x15f507['hasOwnProperty'](_0x1b0d1d)) {
                                if (_0x40804a++)
                                    _0x16a35a += '&';
                            }
                            _0x16a35a += encodeURIComponent(_0x1b0d1d) + '=' + encodeURIComponent(_0x15f507[_0x1b0d1d]);
                        }
                    }
                }
                _0x3b60e1['open'](_0x19adc6, _0x5ab2af),
                _0x19adc6 === 'POST' && _0xb779d3 === 'json' && _0x3b60e1['setRequestHeader']('Content-Type', 'application/json'),
                _0x3b60e1['send'](_0x16a35a),
                _0x3b60e1['onload'] = function() {
                    this['status'] >= 0xc8 && this['status'] < 0x12c ? _0x564c1b['resolve'](_0x2d0abc(this)) : _0x564c1b['reject'](_0x2d0abc(this));
                }
                ,
                _0x3b60e1['onerror'] = function() {
                    _0x564c1b['reject'](_0x2d0abc(this));
                }
                ;
            }
        };
        return {
            'get': function(_0x3c3e90, _0x1e89b7) {
                _0x53109a['ajax']('GET', _0x3ca3d3, _0x3c3e90, _0x1e89b7);
            },
            'post': function(_0x4c9fff, _0x4c5467, _0x5b65aa) {
                _0x53109a['ajax']('POST', _0x3ca3d3, _0x4c9fff, _0x4c5467, _0x5b65aa);
            },
            'put': function(_0x449e56, _0x1b515b) {
                _0x53109a['ajax']('PUT', _0x3ca3d3, _0x449e56, _0x1b515b);
            },
            'delete': function(_0x293238, _0x527af1) {
                _0x53109a['ajax']('DELETE', _0x3ca3d3, _0x293238, _0x527af1);
            }
        };
    },
    'getParams': function(_0x41a914) {
        var _0x5c7117 = _0x41a914 ? _0x41a914['split']('?')[0x1] : window['location']['search']['slice'](0x1), _0x1b8c4a = {}, _0x135c0a, _0x58a52d, _0x5235ae;
        if (_0x5c7117) {
            _0x5c7117 = _0x5c7117['split']('#')[0x0];
            var _0x57fce9 = _0x5c7117['split']('&');
            for (var _0x525cbc = 0x0; _0x525cbc < _0x57fce9['length']; _0x525cbc++) {
                _0x135c0a = _0x57fce9[_0x525cbc]['split']('='),
                _0x58a52d = _0x135c0a[0x0],
                _0x5235ae = typeof _0x135c0a[0x1] === 'undefined' ? !![] : _0x135c0a[0x1],
                _0x58a52d = _0x58a52d['toLowerCase']();
                if (typeof _0x5235ae === 'string')
                    _0x5235ae = _0x5235ae['toLowerCase']();
                if (_0x58a52d['match'](/\[(\d+)?]$/)) {
                    var _0x3d7a82 = _0x58a52d['replace'](/\[(\d+)?]/, '');
                    if (!_0x1b8c4a[_0x3d7a82])
                        _0x1b8c4a[_0x3d7a82] = [];
                    if (_0x58a52d['match'](/\[\d+]$/)) {
                        var _0x4db2f8 = /\[(\d+)]/['exec'](_0x58a52d)[0x1];
                        _0x1b8c4a[_0x3d7a82][_0x4db2f8] = _0x5235ae;
                    } else
                        _0x1b8c4a[_0x3d7a82]['push'](_0x5235ae);
                } else {
                    if (!_0x1b8c4a[_0x58a52d])
                        _0x1b8c4a[_0x58a52d] = _0x5235ae;
                    else
                        _0x1b8c4a[_0x58a52d] && typeof _0x1b8c4a[_0x58a52d] === 'string' ? (_0x1b8c4a[_0x58a52d] = [_0x1b8c4a[_0x58a52d]],
                        _0x1b8c4a[_0x58a52d]['push'](_0x5235ae)) : _0x1b8c4a[_0x58a52d]['push'](_0x5235ae);
                }
            }
        }
        return _0x1b8c4a;
    }
}
  , $StreamingService = function() {
    var _0x3bd2e5 = 'StreamingService', _0x4fdeb0 = 0x0, _0x5713cd = 0x1, _0x411c2f = 0x2, _0x97012c = 0x3, _0xa41cf9 = 0x3 * 0x3e8, _0x2e22d0 = 0x2, _0x59427e = 'https://www.raiplay.it/hbbtv/Common/player.js', _0x423136 = 'https://www.raiplay.it/palinsesto/onAir.json', _0x3b5d27, _0xba68b, _0x176adc = ![], _0x1678b5 = 0x0, _0x4a05bd = 0x0, _0x253cf2 = 0x0, _0x468f12 = 0x0, _0x1e4556 = 0x0, _0x166c06, _0x10ae71, _0x753c73, _0x363276, _0x5ae280, _0x120ab2, _0x46c16e, _0x506c06, _0x1fff11, _0xc83e53, _0x3d2e11, _0xa94dc0, _0xa88d3a, _0x509a90, _0x44826c = ![];
    function _0x3edf69(_0x58127c, _0x98d3cc, _0x34e5c5) {
        return {
            'on': _0x58127c,
            'ts': Date['now'](),
            'callbackFN': _0x98d3cc,
            'data': _0x34e5c5
        };
    }
    function _0x562812(_0x468e6e, _0x34b02d) {
        for (var _0x10a210 = 0x0; _0x10a210 < _0x468e6e['length']; _0x10a210++) {
            var _0x17a562 = _0x468e6e[_0x10a210];
            for (var _0x609090 = 0x0; _0x17a562 && _0x609090 < _0x17a562['length']; _0x609090++) {
                var _0x502020 = _0x17a562[_0x609090]['dvbTriplet']['split']('.');
                if (_0x41e086({
                    'onid': _0x502020[0x0],
                    'tsid': _0x502020[0x1],
                    'sid': _0x502020[0x2]
                }, _0x34b02d))
                    return _0x17a562[_0x609090];
            }
        }
    }
    function _0xbfd3ce(_0x41194c, _0x1a3bf9) {
        var _0x328b74, _0x45a0bb;
        if (_0x1a3bf9)
            for (_0x45a0bb = 0x0; _0x45a0bb < _0x1a3bf9['length']; _0x45a0bb++) {
                _0x328b74 = _0x1a3bf9[_0x45a0bb]['channel'];
                if (_0x328b74) {
                    _0x328b74 = _0x328b74['toLowerCase']()['replace'](/ /g, '-');
                    if (_0x328b74 === _0x41194c)
                        return _0x1a3bf9[_0x45a0bb];
                }
            }
    }
    function _0x3f4bf8(_0x2266a0, _0x43bffd, _0x586444) {
        if (_0x2266a0 && _0x43bffd && _0x586444) {
            var _0x48b8dd = _0x43bffd['length'] > 0x5 ? parseInt(_0x43bffd['substring'](0x6), 0xa) : 0x0;
            isNaN(_0x48b8dd) && (_0x48b8dd = 0x0);
            _0x2266a0 = new Date(parseInt(_0x2266a0['substring'](0x6), 0xa),parseInt(_0x2266a0['substring'](0x3, 0x5), 0xa) - 0x1,parseInt(_0x2266a0['substring'](0x0, 0x3), 0xa),parseInt(_0x43bffd['substring'](0x0, 0x2), 0xa),parseInt(_0x43bffd['substring'](0x3), 0xa),_0x48b8dd,0x0)['getTime']();
            if (!isNaN(_0x2266a0))
                return {
                    'start': _0x2266a0,
                    'end': new Date(_0x2266a0 + _0x586444)['getTime']()
                };
        }
        return {
            'start': 0x0,
            'end': 0x0
        };
    }
    function _0x250738() {
        var _0x121e25 = $Gui['getInstance']()['getChildrenByClassName']('RadioPoster')[0x0];
        _0x121e25 && _0x121e25['update'](_0x9cc0cf(EPG['tv'][0x0]));
    }
    function _0x3a457e() {
        if (_0xc83e53)
            _0xc83e53['streaming'] = ![];
        _0x166c06 && (println('[' + _0x3bd2e5 + ']\x20closing\x20player'),
        _0x166c06['clear'](),
        _0x166c06 = null,
        _0x4f352a(![]));
    }
    function _0x528402(_0x4c0b4e) {
        if (HBBTV_EMULATION || _0x4c0b4e['type'] === $Player['MEDIA_TYPES']['M3U8'])
            return 'mse';
        var _0x112f03 = $DEVICE['userAgentInfo']
          , _0x127d00 = _0x112f03['vendorName'] === 'Samsung'
          , _0x55dca0 = _0x127d00 && (_0x112f03['modelName'] === 'SmartTV2017' || _0x112f03['modelName'] === 'SmartTV2018');
        if (_0x4c0b4e['isLive'] === 'Y') {
            if ($ReaService['isRunning']() && _0x127d00)
                return 'oipf';
            if (_0x127d00 || _0x112f03['vendorName'] === 'Philips' && _0x112f03['specVersion'] >= '2.0.3') {
                var _0x39457e = _0x143f3b();
                if (_0x39457e && (_0x39457e['majorChannel'] === 0x65 || _0x39457e['majorChannel'] === 0xca))
                    return console['warn']('--->\x20this\x20channel\x20uses\x20MSE\x20<---'),
                    'mse';
            }
            if (_0x4c0b4e['drmProtected'])
                return _0x127d00 ? 'mse' : 'html5';
            return _0x55dca0 ? 'mse' : 'html5';
        } else
            return _0x4c0b4e['drmProtected'] ? _0x55dca0 ? 'mse' : 'html5' : _0x55dca0 ? 'oipf' : 'html5';
    }
    function _0x521dd6(_0x532068) {
        if (_0x532068 === $Player['MEDIA_TYPES']['M3U8'])
            return {
                'name': 'Hls',
                'display': 'hls.js',
                'url': $Player['HLS_LIB_URL'],
                'engine': window['Hls']
            };
        if (_0x532068 === $Player['MEDIA_TYPES']['MPD']) {
            if (HBBTV_EMULATION && !_0x44826c)
                return {
                    'name': 'dashjs',
                    'display': 'dash.js',
                    'url': $Player['DASH_LIB_URL'],
                    'engine': window['dashjs']
                };
            return {
                'name': 'pico',
                'display': 'pico',
                'url': './mse_dev.js',
                'engine': window['pico']
            };
        }
    }
    function _0x533f71(_0x75ed8d, _0x238133) {
        $Player['mse'] = !![],
        _0x75ed8d['engine'] ? _0x238133 && _0x238133(_0x75ed8d['engine']) : $MISC['loadJS'](_0x75ed8d['url'], function() {
            var _0x2fc15c = window[_0x75ed8d['name']];
            println('[' + _0x3bd2e5 + ']\x20installed\x20PLAYER:\x20' + _0x75ed8d['name'] + '\x20v.' + (_0x2fc15c && (_0x2fc15c['version'] || _0x2fc15c['Version'])), 'inf'),
            $Player['mse'] = !!_0x2fc15c,
            _0x238133 && _0x238133(_0x2fc15c);
        }, document['body']);
    }
    function _0x54c7d6(_0x4319a1) {
        _0x3b5d27 = document['querySelector']('object[type=\x22video/broadcast\x22]');
        var _0x5dc412 = document['createElement']('div');
        _0x5dc412['id'] = '__tvp_video_wrapper',
        _0x5dc412['style']['position'] = 'absolute',
        _0x5dc412['style']['width'] = '1280px',
        _0x5dc412['style']['height'] = '720px';
        if (HBBTV_EMULATION)
            _0x5dc412['style']['backgroundColor'] = '#000000';
        _0x3b5d27['parentNode']['insertBefore'](_0x5dc412, _0x3b5d27['nextSibling']);
        var _0xa21fd8 = $DEVICE['userAgentInfo']
          , _0x382445 = _0xa21fd8['vendorName'] === 'Samsung' && (_0xa21fd8['modelName'] === 'SmartTV2017' || _0xa21fd8['modelName'] === 'SmartTV2018' || _0xa21fd8['modelName'] && _0xa21fd8['modelName']['indexOf']('SmartTV2019') !== -0x1);
        _0xc83e53 = {
            'protocol': HBBTV_EMULATION ? 'chrome' : 'hbbtv',
            'videoWrapper': _0x5dc412,
            'requirements': {
                'channelNull': _0x382445
            },
            'isRemoteEnv': !location['hostname']['match'](/localhost|[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{1,3}\.[0-9]{1,3}|::1|\.local|^$/gi),
            'streaming': ![]
        },
        _0x10ae71 = {
            'onCanplay': function() {
                _0x50b3ef('onCanplay');
            },
            'onPlaybackStarted': function() {
                _0x50b3ef('onPlaybackStarted');
            },
            'onRepresentationSwitch': function(_0x1eeb60) {
                _0x50b3ef('onRepresentationSwitch', _0x1eeb60);
            },
            'onPlay': function() {
                _0x50b3ef('onPlay');
            },
            'onPause': function() {
                _0x50b3ef('onPause', {
                    'time': _0x166c06['_time'],
                    'duration': _0x166c06['_duration']
                });
            },
            'onSeeked': function() {
                _0x50b3ef('onSeeked');
            },
            'onTimeupdate': function() {
                _0x50b3ef('onTimeupdate', _0x363276 && {
                    'time': _0x166c06['_time'],
                    'duration': _0xc83e53['mediaPolisObject']['manifest']['live'] ? _0x363276['endAt'] - _0x363276['startFrom'] : _0x166c06['_duration']
                });
            },
            'onEnded': function() {
                _0x50b3ef('onEnded');
            },
            'onError': function() {
                _0x50b3ef('onError');
            }
        },
        println('[' + _0x3bd2e5 + ']\x20running\x20on\x20' + (_0xc83e53['isRemoteEnv'] ? 'remote' : 'local') + '\x20server', 'inf'),
        $VideoManager['getInstance']()['addPlayStateChangeListener'](function(_0x4e15cf, _0x3a99ac) {
            if (_0x4e15cf === _0x4fdeb0) {
                println('[' + _0x3bd2e5 + ']\x20BROADCAST\x20UNREALIZED', 'wrn');
                return;
            }
            _0x3d2e11 && _0x4e15cf === _0x97012c && (println('[' + _0x3bd2e5 + ']\x20BROADCAST\x20STOPPPED'),
            _0x260ffb(_0x3d2e11));
            if (_0xa94dc0 && _0x4e15cf === _0xa94dc0['on']) {
                var _0x5c2f08 = _0xa94dc0['callbackFN']
                  , _0x23b6bd = _0xa94dc0['data'];
                _0xa94dc0 = null;
                if (_0x5c2f08)
                    _0x5c2f08(_0x23b6bd);
            }
        }),
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](function(_0x3d5b7a) {
            _0x1e4556 = Date['now']();
            if (!_0x3d5b7a)
                return;
            if (_0x1fff11 && _0x41e086(_0x1fff11, _0x3d5b7a))
                return;
            println('[' + _0x3bd2e5 + ']\x20on\x20channel\x20change\x20event:\x20' + (_0x3d5b7a && _0x3d5b7a['name'] + '\x20LCN:\x20' + _0x3d5b7a['majorChannel']), 'inf');
            if (_0x363276) {
                println('[' + _0x3bd2e5 + ']\x20there\x27s\x20a\x20media\x20content\x20still\x20running...');
                var _0x30d387 = $Gui['getInstance']()['getChildrenByClassName']('ScenePlayer');
                _0x30d387 && _0x30d387[0x0] && _0x30d387[0x0]['closePage'](!![]);
            }
            if (!EPG) {
                println('[' + _0x3bd2e5 + ']\x20epg\x20NOT\x20defined...', 'wrn'),
                _0x2f987f(_0x3d5b7a);
                return;
            }
            var _0x58e4b5 = _0x562812([EPG['tv'], EPG['radio']], _0x3d5b7a);
            if (!_0x58e4b5) {
                println('[' + _0x3bd2e5 + ']\x20channel\x20NOT\x20found:\x20' + _0x3d5b7a['name'] + '\x20' + (_0x3d5b7a['onid'] + '.' + _0x3d5b7a['tsid'] + '.' + _0x3d5b7a['sid']), 'err');
                return;
            }
            if (_0x58e4b5['hybrid']) {
                println('[' + _0x3bd2e5 + ']\x20found\x20HYBRID\x20channel', 'inf');
                if ($DEVICE['userAgentInfo']['isOneDotFiveHbbTv']())
                    return;
                !_0x1fff11 || _0x1fff11['name'] !== _0x3b5d27['currentChannel']['name'] ? (println('[' + _0x3bd2e5 + ']\x20starting\x20' + _0x3b5d27['currentChannel']['name'], 'inf'),
                _0x2f987f(_0x3b5d27['currentChannel'])) : println('[' + _0x3bd2e5 + ']\x20channel\x20already\x20playing', 'inf');
            } else {
                if (!_0x58e4b5['dvbTriplet']['startsWith']('0')) {
                    if ($ReaService['isRunning']()) {
                        println('[' + _0x3bd2e5 + ']\x20REA\x20is\x20RUNNING', 'wrn');
                        if ($ReaService['isChannelEnabled'](_0x3d5b7a))
                            return;
                        println('[' + _0x3bd2e5 + ']\x20but\x20channel\x20is\x20NOT\x20rea\x20enabled!\x20close\x20player', 'wrn'),
                        $ReaService['stop'](!![]);
                    }
                    _0x3a457e(),
                    _0x1fff11 = _0x9cc0cf(_0x3d5b7a),
                    _0x5ae280 = _0x120ab2 = null,
                    _0x506c06 = ![],
                    println('[' + _0x3bd2e5 + ']\x20REAL\x20CHANNEL', 'inf');
                    if (_0x3b5d27['playState'] === 0x3)
                        _0x3b5d27['bindToCurrentChannel']();
                    _0xa88d3a && _0x10b3af();
                } else
                    _0x1fff11 = _0x9cc0cf(_0x3d5b7a);
            }
        }),
        $MISC['loadJS'](_0x59427e, function(_0x53b953) {
            var _0x2f10dc = {
                'ok': !!window['$Player'],
                'url': _0x53b953,
                'version': $Player && $Player['getVersionString']()
            };
            println('[' + _0x3bd2e5 + ']\x20player\x20library\x20' + (_0x2f10dc['ok'] ? 'OK' : 'FAIL') + '\x20|\x20version:' + _0x2f10dc['version'], _0x2f10dc['ok'] ? 'inf' : 'err'),
            _0x4319a1(_0x2f10dc);
        }, document['head']);
    }
    function _0x9cc0cf(_0x2b9552) {
        var _0x387c87 = _0x2b9552['dvbTriplet'] && _0x2b9552['dvbTriplet']['split']('.') || [_0x2b9552['onid'], _0x2b9552['tsid'], _0x2b9552['sid']];
        return {
            'name': _0x2b9552['name'],
            'onid': parseInt(_0x387c87[0x0], 0xa),
            'tsid': parseInt(_0x387c87[0x1], 0xa),
            'sid': parseInt(_0x387c87[0x2], 0xa),
            'majorChannel': parseInt(_0x2b9552['lcn'], 0xa) || _0x2b9552['majorChannel']
        };
    }
    function _0x41e086(_0x8ab27e, _0x22aa79) {
        if (!_0x8ab27e || !_0x22aa79)
            return _0x22aa79 === _0x8ab27e;
        var _0x1deca4, _0x439562, _0x52fb64, _0x4833c0 = function(_0x12bda3) {
            var _0x25a23c = [_0x12bda3['onid'], _0x12bda3['tsid'], _0x12bda3['sid']];
            return typeof _0x25a23c[0x0] === 'string' && (_0x25a23c[0x0] = parseInt(_0x25a23c[0x0], 0xa),
            _0x25a23c[0x1] = parseInt(_0x25a23c[0x1], 0xa),
            _0x25a23c[0x2] = parseInt(_0x25a23c[0x2], 0xa)),
            _0x25a23c;
        };
        _0x1deca4 = _0x4833c0(_0x8ab27e),
        _0x439562 = _0x4833c0(_0x22aa79);
        for (_0x52fb64 = 0x0; _0x52fb64 < _0x1deca4['length']; _0x52fb64++) {
            if (_0x1deca4[_0x52fb64] !== _0x439562[_0x52fb64])
                return ![];
        }
        return !![];
    }
    function _0x1df26e() {
        if (_0x5ae280) {
            var _0x375fcc = _0x9cc0cf(_0x5ae280);
            println('[' + _0x3bd2e5 + ']\x20notify\x20channel\x20change\x20event:\x20' + _0x5ae280['name'] + ',\x20dvb://' + _0x375fcc['onid'] + '.' + _0x375fcc['tsid'] + '.' + _0x375fcc['sid'], 'inf'),
            $VideoManager['getInstance']()['notifyVirtualChannelChange'](_0x375fcc);
            if (HBBTV_EMULATION && _0xc83e53 && !_0xc83e53['isRemoteEnv'])
                _0x3b5d27['currentChannel'] = _0x375fcc;
        }
    }
    function _0x33509f(_0xbcc32) {
        if (_0x363276)
            _0x50b3ef('onError');
        else
            _0x5ae280 && println('notify\x20channel\x20change\x20error:\x20' + _0x5ae280, 'err');
    }
    function _0x50b3ef(_0x12c836, _0x110e26) {
        var _0x7c63f1;
        if (!_0xc83e53['streaming']) {
            if (_0x12c836 === 'onPlay')
                println('[' + _0x3bd2e5 + ']\x20' + _0x12c836);
            else {
                if (_0x12c836 === 'onPause')
                    println('[' + _0x3bd2e5 + ']\x20pause\x20event\x20playing\x20emulated\x20channel!', 'wrn');
                else {
                    if (!_0x176adc && _0x12c836 === 'onTimeupdate') {
                        if (_0x166c06['_time']) {
                            if (!_0x468f12 || _0x166c06['_time'] - _0x468f12 < 0x0) {
                                _0x468f12 = _0x166c06['_time'];
                                return;
                            }
                            if (_0x166c06['_time'] - _0x468f12 < 0.2) {
                                println('\x20\x20|>\x20NOT\x20READY\x20' + ((_0x166c06['_time'] - _0x468f12) * 0x3e8)['toFixed'](0x1) + 'ms', 'wrn');
                                return;
                            }
                            println('\x20\x20|>\x20FIRST\x20START'),
                            _0x468f12 = 0x0,
                            _0x176adc = !![],
                            _0xa88d3a && $MISC['loadMainJS'](function(_0x1445b1, _0x4c0afc) {
                                if (!!_0x4c0afc) {
                                    _0x10b3af();
                                    return;
                                }
                                if (_0x46c16e === 'radio') {
                                    var _0x105739 = $Gui['getInstance']()['getChildrenByClassName']('RadioPoster');
                                    if (_0x105739 && _0x105739['length'])
                                        _0x10b3af(),
                                        _0x1df26e();
                                    else
                                        $Gui['getInstance']()['onInfoLoad'](function() {
                                            _0x10b3af(),
                                            _0x1df26e();
                                        });
                                } else
                                    _0x10b3af(),
                                    _0x1df26e();
                            });
                        }
                    } else {
                        if (_0x12c836 === 'onError') {
                            println('[' + _0x3bd2e5 + ']\x20on\x20error:\x20' + _0x166c06['getError'](), 'err');
                            if (!_0x1678b5) {
                                _0x3a457e();
                                var _0x5048ed = EPG && EPG['getEpg'] && EPG['getEpg']();
                                if (!_0x5048ed)
                                    _0x5048ed = _0x562812([EPG['tv'], EPG['radio']], _0x5ae280);
                                _0x509a90 = _0x5048ed && _0x5048ed['type'] === 'radio' && _0x5048ed,
                                _0x3fe3bf(_0x5048ed && _0x5048ed['color'] || '#000099'),
                                _0xc83e53['mediaPolisObject']['drmProtected'] ? (console['warn']('request\x20media\x20polis\x20object\x20with\x20new\x20key...'),
                                _0x1678b5 = setTimeout(function(_0x3835a5) {
                                    _0x1678b5 = 0x0,
                                    $Player['mediaPolis']['parse'](_0x3835a5, _0x37a17f);
                                }, 0x200, _0xc83e53['mediaUrl'])) : _0x1678b5 = setTimeout(function(_0x3aff91) {
                                    _0x1678b5 = 0x0,
                                    _0x260ffb(_0x3aff91);
                                }, 0x200, _0xc83e53['mediaPolisObject']);
                            }
                        }
                    }
                }
            }
        }
        if (_0x12c836 === 'onRepresentationSwitch') {
            if (_0x110e26 && _0x110e26['type'] === 'audio') {
                var _0x485247 = _0x166c06['getAudioTracks']();
                for (_0x7c63f1 = 0x0; _0x7c63f1 < _0x485247['length']; _0x7c63f1++) {
                    if (_0x110e26['id'] === _0x485247[_0x7c63f1]['id']) {
                        $VideoManager['getInstance']()['notifyVirtualComponentChange'](0x1, _0x485247[_0x7c63f1]);
                        break;
                    }
                }
            }
        }
        if (_0xc83e53['streaming'] && _0x753c73)
            for (_0x7c63f1 = 0x0; _0x7c63f1 < _0x753c73['length']; _0x7c63f1++) {
                _0x753c73[_0x7c63f1][_0x12c836] && _0x753c73[_0x7c63f1][_0x12c836](_0x110e26);
            }
    }
    function _0x5ae11c(_0x1f79e2) {
        if (!$ReaService['isRunning']()) {
            if (_0x3b5d27['playState'] === _0x411c2f)
                _0x3b5d27['stop']();
            else
                _0x3a457e();
            if (_0x363276)
                for (var _0x18706e = 0x0; !!_0x753c73 && _0x18706e < _0x753c73['length']; _0x18706e++) {
                    _0x753c73[_0x18706e]['onError'] && _0x753c73[_0x18706e]['onError']();
                }
            else {
                if (!_0xa88d3a)
                    _0x3fe3bf();
                _0xa88d3a['_errorMode'] = {
                    'type': _0x1f79e2 && _0x1f79e2['type'] || 'serv'
                },
                _0x3b5d27['bindToCurrentChannel'](),
                setTimeout(function() {
                    _0x3b5d27['stop']();
                }, 0x3e8);
            }
            return;
        }
        var _0x5de031 = $ReaService['getTrigger']()
          , _0x127015 = $ReaService['getDistrict']();
        $SceneError['getInstance']()['_title'] = (_0x5de031 && _0x127015 ? 'Il\x20programma\x20' + _0x5de031['name'] + '\x20' + _0x127015['name'] : 'La\x20redazione\x20che\x20hai\x20scelto') + '<br/>non\x20è\x20disponibile.',
        _0x5ae280 = _0x120ab2 = null,
        $ReaService['stop']();
        !$Gui['getInstance']()['getChildrenByClassName']('SceneError') && $Gui['getInstance']()['append']($SceneError['getInstance']());
        var _0x6c19af = $Gui['getInstance']()['getChildrenByClassName']('Scene0');
        _0x6c19af && _0x6c19af[0x0]['_visible'] ? _0x6c19af[0x0]['visibleTrigger'](![], function() {
            $SceneError['getInstance']()['visibleTrigger'](!![]);
        }) : $SceneError['getInstance']()['visibleTrigger'](!![]),
        _0x10b3af(!![]);
    }
    function _0x37a17f(_0x1c8028, _0xb57739) {
        if (_0xb57739) {
            println('[' + _0x3bd2e5 + ']\x20media\x20polis\x20error,\x20retry...', 'err');
            _0xc83e53['mediaUrl'] && _0x253cf2 ? (_0x253cf2 -= 0x1,
            _0x4a05bd = setTimeout(function(_0x25c3bd) {
                _0x4a05bd = 0x0,
                $Player['mediaPolis']['parse'](_0x25c3bd, _0x37a17f);
            }, _0xa41cf9, _0xc83e53['mediaUrl'])) : _0x5ae11c();
            return;
        }
        var _0x58dc8f;
        if (_0x1c8028['type'] === $Player['MEDIA_TYPES']['MPD'])
            _0x58dc8f = $Player['utils']['parseMPD'];
        else
            _0x1c8028['type'] === $Player['MEDIA_TYPES']['M3U8'] && (_0x58dc8f = $Player['utils']['parseHLS']);
        _0x253cf2 = _0x2e22d0,
        _0x58dc8f ? _0x58dc8f(_0x1c8028['url'], function(_0x5a44aa) {
            if (!_0x5a44aa)
                return setTimeout(function() {
                    _0x37a17f(_0x1c8028);
                }, 0xfa);
            _0x1c8028['manifest'] = _0x5a44aa,
            _0x260ffb(_0x1c8028);
        }) : (_0x1c8028['manifest'] = {
            'audio': null,
            'text': null,
            'video': null,
            'availabilityStartTime': 0x0,
            'live': ![],
            'canRestart': ![],
            'valid': !![]
        },
        _0x260ffb(_0x1c8028));
    }
    function _0x260ffb(_0x33e8af) {
        if (!_0x33e8af || !!_0x33e8af['error'])
            return _0x33509f(0x1);
        if (_0x33e8af['isLive'] === 'Y' && _0x33e8af['type'] === $Player['MEDIA_TYPES']['MPD']) {
            if (!_0x33e8af['manifest']['valid']) {
                println('[' + _0x3bd2e5 + ']\x20manifest\x20is\x20NOT\x20valid', 'wrn'),
                _0x1df26e(),
                _0x5ae11c();
                return;
            }
        }
        if (_0x33e8af['drmProtected'] && _0x33e8af['type'] === $Player['MEDIA_TYPES']['MPD']) {
            var _0x228881 = _0x33e8af['manifest'] && _0x33e8af['manifest']['caSystems'];
            _0x228881 && (_0x33e8af['drmProtected'] = _0x228881['cenc'] || _0x228881['playready']);
        }
        if (_0x3b5d27['playState'] === _0x5713cd || _0x3b5d27['playState'] === _0x411c2f) {
            println('[' + _0x3bd2e5 + ']\x20waiting\x20for\x20broadcast\x20stop\x20(' + _0x3b5d27['playState'] + ')', 'wrn');
            _0x3b5d27['playState'] === _0x5713cd && _0x3b5d27['bindToCurrentChannel']();
            setTimeout(function() {
                _0x3d2e11 = _0x33e8af,
                _0x3b5d27['stop']();
                var _0x45bd10 = _0x528402(_0x33e8af);
                _0xc83e53['requirements']['engine'] = _0x45bd10;
                if ((_0x45bd10 === 'html5' || _0x45bd10 === 'mse') && _0xc83e53['requirements']['channelNull']) {
                    println('[' + _0x3bd2e5 + ']\x20changing\x20to\x20INDEPENDENT\x20APP', 'wrn'),
                    _0xc83e53['requirements']['storedChannels'] = {};
                    var _0x41a53b = _0x3b5d27['getChannelConfig']()['channelList'], _0x2ec7c4, _0x28dd5c;
                    for (_0x2ec7c4 = 0x0; _0x2ec7c4 < EPG['tv']['length']; _0x2ec7c4++) {
                        _0x28dd5c = EPG['tv'][_0x2ec7c4]['dvbTriplet']['split']('.'),
                        _0xc83e53['requirements']['storedChannels'][EPG['tv'][_0x2ec7c4]['dvbTriplet']] = _0x41a53b['getChannelByTriplet'](_0x28dd5c[0x0], _0x28dd5c[0x1], _0x28dd5c[0x2]);
                    }
                    for (_0x2ec7c4 = 0x0; _0x2ec7c4 < EPG['radio']['length']; _0x2ec7c4++) {
                        _0x28dd5c = EPG['radio'][_0x2ec7c4]['dvbTriplet']['split']('.'),
                        _0xc83e53['requirements']['storedChannels'][EPG['radio'][_0x2ec7c4]['dvbTriplet']] = _0x41a53b['getChannelByTriplet'](_0x28dd5c[0x0], _0x28dd5c[0x1], _0x28dd5c[0x2]);
                    }
                    _0x3b5d27['setChannel'](null);
                }
            }, 0x1f4);
            return;
        }
        _0x3d2e11 = null,
        _0x3a457e(),
        _0xc83e53['mediaPolisObject'] = _0x33e8af,
        _0xc83e53['streaming'] = !!_0x363276;
        var _0x1fdc5f = _0x528402(_0x33e8af);
        _0xc83e53['requirements']['engine'] = _0x1fdc5f,
        println('[' + _0x3bd2e5 + ']\x20using\x20engine:\x20' + _0x1fdc5f),
        _0xba68b = _0x1fdc5f === 'mse';
        if (_0x1fdc5f === 'oipf')
            _0x166c06 = new $Player['OipfPlayer'](_0x10ae71);
        else {
            if (_0x1fdc5f === 'mse') {
                var _0x3351cd = _0x521dd6(_0x33e8af['type']);
                if (_0x3351cd && !_0x3351cd['engine'])
                    return _0x533f71(_0x3351cd, function() {
                        _0x260ffb(_0x33e8af);
                    });
            }
            _0x166c06 = new $Player['VideoPlayer'](_0x10ae71);
        }
        if (_0x363276) {
            if (_0x363276['startFrom']) {
                println('[' + _0x3bd2e5 + ']\x20restarting\x20LIVE\x20content');
                var _0x12bdfb = Date['now']() / 0x3e8 - _0x33e8af['manifest']['timeShiftBufferDepth'];
                _0x363276['startFrom'] - _0x12bdfb < 0x0 && (console['warn'](_0x3bd2e5, 'cannot\x20restart:\x20insufficient\x20buffer\x20length\x20[' + _0x33e8af['manifest']['timeShiftBufferDepth'] + 's]'),
                _0x363276['startFrom'] = _0x12bdfb + 0xa),
                _0x33e8af['absoluteStartFrom'] = _0x363276['startFrom'],
                _0x166c06['startTime'] = _0x33e8af['startFrom'] = _0x363276['startFrom'] - _0x33e8af['manifest']['availabilityStartTime'];
            } else
                _0x250738();
        }
        _0x50b3ef('onManifestReady', _0x33e8af),
        _0x176adc = ![],
        _0x4f352a(!![]),
        _0x33e8af['drmProtected'] ? (_0x166c06['reset'](_0xc83e53['videoWrapper']),
        _0x166c06['createVideo'](_0xc83e53['videoWrapper'], _0x33e8af['type']),
        _0x166c06['setDRM'](_0x33e8af['licenses'], function(_0x2a69d8, _0x382088, _0x2e73b9) {
            println('[' + _0x3bd2e5 + ']\x20drm:\x20' + _0x2a69d8 + '\x20err:' + _0x382088 + ',\x20errCode:' + _0x2e73b9),
            _0x2a69d8 === 0x0 ? (_0x166c06['start']({
                'type': _0x33e8af['type'],
                'url': _0x33e8af['url'],
                'config': _0x33e8af['config']
            }, _0xc83e53['videoWrapper'], !![]),
            _0x166c06['ready'] = !![]) : _0x5ae11c({
                'type': 'drm'
            });
        }
        ['bind'](this))) : _0x166c06['start']({
            'type': _0x33e8af['type'],
            'url': _0x33e8af['url'],
            'config': _0x33e8af['config']
        }, _0xc83e53['videoWrapper']);
    }
    function _0x44b5d4(_0x47f2b3) {
        var _0x216a3a = EPG['getEpg'](), _0xc40b77, _0xf181d7, _0x2f70d7, _0x19cb13;
        _0xf181d7 = _0xbfd3ce(_0x216a3a['epgName'], _0x47f2b3 && _0x47f2b3['on_air']);
        if (_0xf181d7) {
            _0x2f70d7 = _0xf181d7['currentItem'] || {};
            for (_0x19cb13 = 0x0; _0x19cb13 < 0x2; _0x19cb13++) {
                if (_0x216a3a['chEpg']['_now']['_hhmmStartString'] !== _0x2f70d7['hour']) {
                    println('[' + _0x3bd2e5 + ']\x20using\x20next\x20event:\x20' + _0x2f70d7['hour'] + '!=' + _0x216a3a['chEpg']['_now']['_hhmmStartString']);
                    if (_0x19cb13 === 0x0)
                        _0x2f70d7 = _0xf181d7['nextItem'] || {};
                    else
                        _0x2f70d7 = {};
                } else
                    break;
            }
            _0xc40b77 = _0x2f70d7['tech_datetime'],
            _0xc40b77 && (_0xc40b77 = _0x3f4bf8(_0xc40b77['substring'](0x0, 0xa), _0xc40b77['substring'](0xb), _0x216a3a['chEpg']['_now']['_duration'])['start']);
        } else
            _0x2f70d7 = _0x216a3a['chEpg']['_now'];
        !_0xc40b77 && (println('[' + _0x3bd2e5 + ']\x20tech-datetime\x20NOT\x20available', 'wrn'),
        _0xc40b77 = _0x216a3a['chEpg']['_now']['_startTime']);
        _0x363276 = {
            'date': '',
            'time': _0x216a3a['chEpg']['_now']['_hhmmStartString'],
            'label': _0x216a3a['chEpg']['_now'],
            'mediaUri': _0x216a3a['urlRestart'] || _0x216a3a['url'],
            'startFrom': Math['round'](_0xc40b77 / 0x3e8),
            'endAt': Math['round']((_0xc40b77 + _0x216a3a['chEpg']['_now']['_duration']) / 0x3e8),
            'channel': _0x216a3a['name'],
            'name': (_0x2f70d7['program'] || _0x2f70d7)['name']
        };
        if (_0xc83e53['isRemoteEnv']) {
            $ReaService['stop'](!![]),
            println('[' + _0x3bd2e5 + ']\x20restart\x20of\x20' + (_0x363276['name'] + '\x20@' + _0x363276['time']), 'inf');
            if (!_0x363276['mediaUri']) {
                println('[' + _0x3bd2e5 + ']\x20cannot\x20find\x20media-uri!');
                for (_0x19cb13 = 0x0; _0x19cb13 < _0x753c73['length']; _0x19cb13++) {
                    _0x753c73[_0x19cb13]['onError'] && _0x753c73[_0x19cb13]['onError']();
                }
                return;
            }
            $Player['protocol'] = _0xc83e53['protocol'],
            _0xc83e53['mediaUrl'] = _0x363276['mediaUri'],
            _0x253cf2 = _0x2e22d0,
            $Player['mediaPolis']['parse'](_0x363276['mediaUri'], _0x37a17f),
            $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
                'cg': [{
                    'key': 'cg1',
                    'val': $WebTrekk['CG1']
                }, {
                    'key': 'cg4',
                    'val': _0x363276['name']
                }, {
                    'key': 'cg8',
                    'val': _0x363276['name']
                }],
                'cp': [{
                    'key': 'cp2',
                    'val': _0x363276['channel']
                }, {
                    'key': 'cp12',
                    'val': 'rai\x20tv+'
                }],
                'url': $WebTrekk['sections']['ON_AIR'] + '/ingressoRestart',
                'immediate': !![]
            });
        }
    }
    function _0x354feb(_0x1b426b) {
        if (_0x1b426b['hybrid']) {
            if (_0x1b426b['definition'] === 'ultrahigh') {
                var _0x107612 = $MISC['getResolution']();
                return _0x107612 === 'UHD' || _0x107612 === '8K';
            }
        }
        return !![];
    }
    function _0x2f987f(_0x4c0941) {
        var _0x422cc5;
        if (!EPG)
            println('[' + _0x3bd2e5 + ']\x20config\x20manager\x20is\x20not\x20READY', 'wrn'),
            $QuickConfManager['getInstance'](function() {
                println('[' + _0x3bd2e5 + ']\x20quick\x20manager\x20READY', 'inf');
                var _0x449fcf = $QuickConfManager['getInstance']()['_quickEPG'];
                if (_0x449fcf && (_0x449fcf['hybrid'] || HBBTV_EMULATION)) {
                    if (_0x354feb(_0x449fcf))
                        _0x457fcf(_0x449fcf['url'], _0x449fcf);
                }
            });
        else {
            if (!EPG['getEpg']) {
                println('[' + _0x3bd2e5 + ']\x20EPG\x20is\x20not\x20READY', 'wrn'),
                _0x422cc5 = _0x562812([EPG['tv'], EPG['radio']], _0x4c0941);
                if (_0x422cc5 && (_0x422cc5['hybrid'] || HBBTV_EMULATION)) {
                    if (_0x354feb(_0x422cc5))
                        _0x457fcf(_0x422cc5['url'], _0x422cc5, _0x4c0941);
                }
            } else {
                println('[' + _0x3bd2e5 + ']\x20config\x20manager\x20running\x20with\x20full\x20powers'),
                _0x422cc5 = EPG['getEpg'](_0x4c0941);
                if (_0x422cc5 && (_0x422cc5['hybrid'] || _0x422cc5['dvbTriplet']['startsWith']('0') || HBBTV_EMULATION)) {
                    if (_0x354feb(_0x422cc5))
                        _0x457fcf(_0x422cc5['url'], _0x422cc5, _0x4c0941);
                } else
                    _0x3b5d27['bindToCurrentChannel'](),
                    $ReaService['probe']();
            }
        }
    }
    function _0x4f352a(_0xb254e0) {
        println('[' + _0x3bd2e5 + ']\x20set\x20' + (_0xb254e0 ? 'PLAYER' : 'DEFAULT') + '\x20mask', 'inf');
        var _0x395bf7 = $DEVICE['keyManager']['kset'];
        if (_0xb254e0) {
            var _0x150de8 = _0x395bf7['NAVIGATION'] | _0x395bf7['RED'] | _0x395bf7['GREEN'] | _0x395bf7['YELLOW'] | _0x395bf7['BLUE'];
            (_0x5ae280 && !_0x5ae280['onid'] || !!_0x363276) && (println('[' + _0x3bd2e5 + ']\x20virtual\x20channel,\x20add\x20numeric\x20keys'),
            _0x150de8 |= _0x395bf7['NUMERIC']),
            $DEVICE['keyManager']['setValue'](_0x150de8);
        } else
            $DEVICE['keyManager']['setValue'](_0x395bf7['NAVIGATION'] | _0x395bf7['RED'] | _0x395bf7['GREEN'] | _0x395bf7['YELLOW'] | _0x395bf7['BLUE']);
    }
    function _0x143f3b() {
        if (_0x5ae280)
            return !_0x120ab2 && (_0x120ab2 = _0x9cc0cf(_0x5ae280)),
            _0x120ab2;
    }
    function _0x3fe3bf(_0x45d29d, _0x9ad1e4) {
        println('---------\x20SHOW\x20LOADING\x20SCREEN\x20' + (_0x45d29d || 'N/A') + '\x20----------', 'wrn');
        if (!_0xa88d3a) {
            _0xa88d3a = $StreamingService['newLoadingScreen']();
            var _0x9b5395 = document['getElementById']('mainFrame');
            _0x9b5395['insertBefore'](_0xa88d3a['_node'], _0x9b5395['firstChild']);
        }
        _0x9ad1e4 && _0xa88d3a['addExtra'](_0x9ad1e4);
        _0xa88d3a['_background'] = _0x45d29d || '#000099',
        _0xa88d3a['_loadingChannel'] = _0x509a90,
        _0x509a90 = null,
        _0xa88d3a['show'](!![]);
        if (EPG && EPG['getEpg']) {
            var _0x4dd7e7 = $Gui['getInstance']()['getChildrenByClassName']('RadioPoster')[0x0];
            _0x4dd7e7 && _0x4dd7e7['update']();
        }
    }
    function _0x10b3af(_0x48eba8) {
        if (!_0xa88d3a)
            return;
        if (!_0x48eba8 && _0xa88d3a['show'](![]))
            return;
        println('---------\x20DISPOSE\x20LOADING\x20SCREEN\x20----------', 'wrn'),
        document['getElementById']('mainFrame')['removeChild'](_0xa88d3a['_node']),
        _0xa88d3a['dispose'](),
        _0xa88d3a = null;
    }
    function _0x457fcf(_0x13dd4e, _0x32739d, _0x51a4d8) {
        if (!_0x13dd4e) {
            println('[' + _0x3bd2e5 + ']\x20invalid\x20url!', 'err');
            return;
        }
        if (_0x3b5d27['currentChannel'])
            _0x1fff11 = _0x9cc0cf(_0x3b5d27['currentChannel']);
        _0x120ab2 = null,
        _0x46c16e = _0x32739d['type'],
        _0x506c06 = _0x32739d['hybrid'],
        _0x5ae280 = _0x51a4d8 || _0x9cc0cf(_0x32739d) || _0x3b5d27['currentChannel'];
        if (_0xc83e53['isRemoteEnv']) {
            println('[' + _0x3bd2e5 + ']\x20playing\x20channel\x20' + _0x32739d['lcn'] + '\x20' + _0x32739d['name'] + '\x20dvb://' + _0x32739d['dvbTriplet'] + (_0x32739d['hybrid'] ? '\x20HYBRID' : ''), 'inf'),
            _0x509a90 = _0x32739d['type'] === 'radio' && _0x32739d;
            if (!$ReaService['isRunning']() || _0x32739d['hybrid'])
                _0x3fe3bf(_0x32739d['color']);
            _0xc83e53['mediaUrl'] = _0x13dd4e,
            _0x253cf2 = _0x2e22d0,
            _0x13dd4e['split'](/[#?]/)[0x0]['split']('.')['pop']()['trim']() === 'm3u8' ? _0x37a17f({
                'url': _0x13dd4e,
                'type': $Player['MEDIA_TYPES']['M3U8'],
                'live': !![]
            }) : ($Player['protocol'] = _0xc83e53['protocol'],
            $Player['mediaPolis']['parse'](_0x13dd4e, _0x37a17f));
        } else
            _0x1df26e();
    }
    function _0x4ca129(_0x5464f2, _0x1a91fb) {
        if (!_0x3b5d27)
            return _0x54c7d6(function(_0x52b3f1) {
                _0x52b3f1['ok'] && _0x4ca129(_0x5464f2, _0x1a91fb);
            });
        println('[' + _0x3bd2e5 + ']\x20SET\x20CHANNEL,\x20type:\x20' + typeof _0x5464f2 + ',\x20value:\x20'),
        println(_0x5464f2),
        println('*******************');
        _0x4a05bd && (clearTimeout(_0x4a05bd),
        _0x4a05bd = 0x0);
        if (_0x5464f2 === undefined) {
            _0x363276 && _0x363276['channel'] && $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
                'cg': [{
                    'key': 'cg1',
                    'val': $WebTrekk['CG1']
                }, {
                    'key': 'cg4',
                    'val': _0x363276['name']
                }, {
                    'key': 'cg8',
                    'val': _0x363276['name']
                }],
                'cp': [{
                    'key': 'cp2',
                    'val': _0x363276['channel']
                }, {
                    'key': 'cp12',
                    'val': 'rai\x20tv+'
                }],
                'url': $WebTrekk['sections']['ON_AIR'] + '/uscitaRestart',
                'immediate': !![]
            });
            if (_0x5ae280)
                _0x5ae280['name'] = _0x3b5d27['currentChannel']['name'];
            _0x5464f2 = _0x5ae280 || HBBTV_EMULATION;
        }
        var _0x240922 = ![];
        typeof _0x5464f2 === 'boolean' && (_0x5464f2 ? (println('[' + _0x3bd2e5 + ']\x20setChannel\x20by\x20FLAG,\x20virtual\x20env.\x20detected', 'inf'),
        _0x5464f2 = _0x3b5d27['currentChannel']) : (println('[' + _0x3bd2e5 + ']\x20setChannel\x20by\x20FLAG,\x20HbbTv\x20env.\x20detected', 'inf'),
        _0x5464f2 = null,
        _0x240922 = !![]));
        if (_0x5464f2 === null) {
            _0x363276 = null;
            var _0x25d194 = !!_0x166c06 && $ReaService['isRunning']() === 0x0;
            _0x3a457e(),
            _0x5ae280 = _0x120ab2 = null;
            _0x1678b5 && (clearTimeout(_0x1678b5),
            _0x1678b5 = null);
            println('[' + _0x3bd2e5 + ']\x20bind\x20flag=' + _0x240922, 'wrn');
            if (_0x240922) {
                if (_0x3b5d27['playState'] === _0x97012c || _0x3b5d27['playState'] === _0x4fdeb0) {
                    println('[' + _0x3bd2e5 + ']\x20restarting\x20channel\x20with\x20' + (_0xba68b ? '(setChannel)' : '(bind)'), 'inf');
                    try {
                        _0x5ae280 = _0x120ab2 = _0x1fff11 = null;
                        var _0x9f9301 = $VideoManager['getInstance']()['isBinding']();
                        !$ReaService['isRunning']() && (_0xa94dc0 = _0x3edf69(_0x411c2f, function() {
                            $ReaService['probe'](),
                            _0x9f9301 && !$DEVICE['userAgentInfo']['isOneDotFiveHbbTv']() && _0x2f987f(_0x3b5d27['currentChannel']);
                        }));
                        if (_0xba68b)
                            _0x3b5d27['setChannel'](_0x3b5d27['currentChannel'], ![], null, 0x1);
                        else
                            _0x3b5d27['bindToCurrentChannel']();
                    } catch (_0x5df7f9) {
                        println(_0x5df7f9, 'err');
                    }
                } else {
                    println('[' + _0x3bd2e5 + ']\x20channel\x20already\x20playing,\x20no\x20need\x20to\x20bind', 'wrn');
                    if (!$DEVICE['userAgentInfo']['isOneDotFiveHbbTv']())
                        _0x2f987f(_0x3b5d27['currentChannel']);
                }
            } else {
                if (!_0x3b5d27['currentChannel'])
                    return;
                var _0x2b9e11 = Date['now']()
                  , _0x5c7d78 = 0xdac;
                setTimeout(function() {
                    if (_0x1e4556 - _0x2b9e11 < 0x0 || _0x1e4556 - _0x2b9e11 > _0x5c7d78) {
                        if ($ReaService['isRunning']() === 0x1 && !$ReaService['isServiceRelated']())
                            return;
                        println('[' + _0x3bd2e5 + ']\x20sending\x20virtual\x20channel\x20event,\x20timeout:' + (_0x1e4556 - _0x2b9e11), 'wrn'),
                        _0x1fff11 = null,
                        $VideoManager['getInstance']()['notifyVirtualChannelChange'](_0x3b5d27['currentChannel']);
                    } else
                        println('[' + _0x3bd2e5 + ']\x20channel\x20change\x20event\x20received\x20' + (_0x1e4556 - _0x2b9e11) + 'ms\x20ago', 'wrn'),
                        _0x25d194 && !_0x506c06 && !HBBTV_EMULATION && (println('[' + _0x3bd2e5 + ']\x20SET-CHANNEL', 'wrn'),
                        _0x3b5d27['setChannel'](_0x3b5d27['currentChannel']));
                }, _0x5c7d78);
            }
            return;
        }
        _0x363276 !== null && (println('[' + _0x3bd2e5 + ']\x20closing\x20media\x20content', 'inf'),
        _0x363276 = _0x5ae280 = _0x120ab2 = null,
        _0x3a457e());
        if (!_0x1a91fb)
            _0x2f987f(_0x9cc0cf(_0x5464f2));
    }
    function _0x6c3582(_0x3f44f8) {
        var _0x399dba = _0x143f3b() || $VideoManager['getInstance']()['_video']['currentChannel'];
        if (!_0x399dba)
            return;
        var _0x2676f2 = _0x399dba['onid'] + '.' + _0x399dba['tsid'] + '.' + _0x399dba['sid'];
        for (var _0x4e6b1b = 0x0, _0x1cd619; _0x4e6b1b < EPG['radio']['length']; _0x4e6b1b++) {
            _0x1cd619 = EPG['radio'][_0x4e6b1b];
            if (_0x2676f2 === _0x1cd619['dvbTriplet']) {
                if (_0x3f44f8)
                    _0x4e6b1b = _0x4e6b1b - 0x1 < 0x0 ? EPG['radio']['length'] - 0x1 : _0x4e6b1b - 0x1;
                else
                    _0x4e6b1b = (_0x4e6b1b + 0x1) % EPG['radio']['length'];
                _0x1cd619 = EPG['radio'][_0x4e6b1b],
                _0x2676f2 = _0x1cd619['dvbTriplet']['split']('.'),
                _0x399dba = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['getChannelByTriplet'](parseInt(_0x2676f2[0x0]), parseInt(_0x2676f2[0x1]), parseInt(_0x2676f2[0x2])),
                _0x509a90 = _0x1cd619;
                !_0x399dba ? _0x4ca129(_0x1cd619) : (_0x4ca129(null),
                $VideoManager['getInstance']()['_video']['setChannel'](_0x399dba, ![], null, 0x1));
                return;
            }
        }
    }
    function _0x5b2e80() {
        _0x4a05bd && (clearTimeout(_0x4a05bd),
        _0x4a05bd = 0x0);
        var _0x230080 = EPG['getEpg']();
        if (_0x230080['type'] === 'radio')
            _0x44b5d4(null);
        else
            $Player['utils']['getJson'](_0x423136, _0x44b5d4);
    }
    function _0x4184b6(_0x3200c8) {
        _0x4a05bd && (clearTimeout(_0x4a05bd),
        _0x4a05bd = 0x0),
        _0x3a457e(),
        _0x3200c8 ? ($ReaService['stop'](!![]),
        _0x363276 = _0x3200c8['latest'],
        _0x253cf2 = _0x2e22d0,
        _0xc83e53['isRemoteEnv'] && ($Player['protocol'] = _0xc83e53['protocol'],
        _0xc83e53['mediaUrl'] = _0x363276['mediaUri'],
        $Player['mediaPolis']['parse'](_0x363276['mediaUri'], _0x37a17f)),
        $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
            'cg': [{
                'key': 'cg1',
                'val': $WebTrekk['CG1']
            }, {
                'key': 'cg2',
                'val': 'rainews'
            }, {
                'key': 'cg3',
                'val': 'informazione\x20notiziari'
            }, {
                'key': 'cg4',
                'val': _0x3200c8['name']
            }, {
                'key': 'cg5',
                'val': 'pagina\x20notiziario'
            }, {
                'key': 'cg8',
                'val': _0x3200c8['name']
            }, {
                'key': 'cg14',
                'val': 'informazione\x20notiziari'
            }],
            'cp': [{
                'key': 'cp6',
                'val': ''
            }, {
                'key': 'cp7',
                'val': _0x363276['label']
            }, {
                'key': 'cp11',
                'val': 'hbbtv'
            }, {
                'key': 'cp12',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cp13',
                'val': _0x363276['label']
            }],
            'url': $WebTrekk['sections']['ON_AIR'] + '/notiziari',
            'immediate': !![]
        })) : _0x363276 = null;
    }
    function _0x201ae2(_0x5870ae) {
        if (!_0x753c73)
            _0x753c73 = [];
        _0x753c73['push'](_0x5870ae);
    }
    function _0x2cc755() {
        return _0x166c06;
    }
    function _0x31106f() {
        return _0xc83e53 && _0xc83e53['mediaPolisObject'];
    }
    function _0x331831() {
        return _0xc83e53['requirements'];
    }
    function _0x4d5e4d(_0x2c05ad) {
        if (_0xc83e53)
            return (_0x2c05ad === 'hbbtv' || _0x2c05ad === 'chrome') && (_0xc83e53['protocol'] = _0x2c05ad),
            _0xc83e53['protocol'];
    }
    return {
        'version': 0x7,
        'codeName': 'purring\x20player',
        'getChannel': _0x143f3b,
        'getStreamingMediaPolis': _0x31106f,
        'getStreamingRequirements': _0x331831,
        'getPlayer': _0x2cc755,
        'setMediaListener': _0x201ae2,
        'setChannel': _0x4ca129,
        'play': _0x457fcf,
        'nextChannel': _0x6c3582,
        'setMedia': _0x4184b6,
        'setStreamingProtocol': _0x4d5e4d,
        'restartEvent': _0x5b2e80,
        'isSameChannel': _0x41e086,
        'displayError': _0x5ae11c,
        'isChannelHybrid': function() {
            return _0x506c06 && !_0x363276;
        },
        'setLoading': function(_0x1e9f5f, _0x1a7cee) {
            if (_0x1e9f5f)
                _0x3fe3bf(_0x1e9f5f, _0x1a7cee);
            else
                _0x10b3af();
        },
        'isChannelLive': function() {
            return _0x3b5d27['playState'] === _0x411c2f;
        },
        'useMseDash': function() {
            _0x4d5e4d('hbbtv'),
            _0x44826c = !![],
            println('using\x20dash\x20with\x20rai-mse');
        },
        'newLoadingScreen': function(_0x3fe664) {
            var _0x2a3e7c, _0x661b89, _0x31bb52, _0xc8203f, _0x1af4df, _0x2dd24e, _0x493c0f, _0x265825, _0x3d70c0, _0x3495a4 = 1.2;
            return _0x31bb52 = new $Svg($DataLoader['getInstance']()['getSvgCode']('RaiSquareLogo')),
            _0x31bb52['_visible'] = ![],
            _0x31bb52['_bounds'] = {
                'top': 0x37,
                'left': 0x62,
                'width': 0x3c * _0x3495a4,
                'height': 0x3c * _0x3495a4
            },
            _0xc8203f = new $Svg('<svg\x20width=\x220\x22\x20height=\x2260\x22\x20viewBox=\x220\x200\x200\x200\x22><path></path></svg>'),
            _0xc8203f['_visible'] = ![],
            _0xc8203f['_bounds'] = {
                'top': 0x37,
                'left': 0x62,
                'width': 0x0,
                'height': 0x3c * _0x3495a4
            },
            _0x661b89 = new $Svg('<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22126\x22\x20height=\x22126\x22\x20viewBox=\x22-7\x20-7\x20140.3\x20140.3\x22><g>' + '<circle\x20cx=\x2263.15\x22\x20cy=\x2263.15\x22\x20r=\x2263.15\x22\x20fill=\x22none\x22\x20stroke=\x22rgba(255,255,255,0.2)\x22\x20stroke-width=\x2214\x22\x20/>' + '<path\x20d=\x22M\x2063.15\x200\x20A\x2063.15\x2063.15,\x201,\x201,\x200,\x20126.3\x2063.15\x22\x20fill=\x22none\x22\x20stroke=\x22#fff\x22\x20stroke-width=\x2214\x22\x20/>' + '<circle\x20cx=\x2263.15\x22\x20cy=\x220\x22\x20r=\x227\x22\x20fill=\x22#fff\x22\x20/><circle\x20cx=\x22126.3\x22\x20cy=\x2263.15\x22\x20r=\x227\x22\x20fill=\x22#fff\x22\x20/>' + '<animateTransform\x20attributeName=\x22transform\x22\x20attributeType=\x22XML\x22\x20type=\x22rotate\x22\x20from=\x220\x2063.15\x2063.15\x22\x20to=\x22360\x2063.15\x2063.15\x22\x20dur=\x221.5s\x22\x20repeatCount=\x22indefinite\x22\x20/>' + '</g></svg>'),
            _0x661b89['_bounds'] = {
                'left': 0x380,
                'top': 0x1ad,
                'width': 0x7e,
                'height': 0x7e
            },
            _0x2a3e7c = new $Widget(),
            _0x2a3e7c['_className'] = _0x3fe664 || 'loadingScreen',
            _0x2a3e7c['_bounds'] = {
                'left': 0x0,
                'top': 0x0,
                'width': 0x780,
                'height': 0x438
            },
            _0x2a3e7c['_node']['style']['opacity'] = 0x0,
            Object['defineProperty'](_0x2a3e7c, '_background', {
                'set': function(_0x530ef4) {
                    this['_node']['style']['backgroundColor'] = _0x530ef4;
                }
            }),
            Object['defineProperty'](_0x2a3e7c, '_loadingChannel', {
                'set': function(_0x4cefe7) {
                    _0x31bb52['_visible'] = !!_0x4cefe7;
                    _0x1af4df && (_0x1af4df['_visible'] = ![],
                    _0x661b89['_visible'] = !![]);
                    if (!!_0x4cefe7) {
                        var _0x1d2fca, _0x4f0cb1, _0x4b8f86;
                        _0x1d2fca = $DataLoader['getInstance']()['getSvgCode'](_0x4cefe7['name']);
                        if (!_0x493c0f)
                            _0x493c0f = new DOMParser();
                        _0x4b8f86 = _0x493c0f['parseFromString'](_0x1d2fca, 'image/svg+xml')['getElementsByTagName']('svg')[0x0];
                        if (!_0x4b8f86) {
                            _0xc8203f['_visible'] = ![];
                            return;
                        }
                        _0x4f0cb1 = parseFloat(_0x4b8f86['getAttribute']('width')) * _0x3495a4,
                        _0xc8203f['_width'] = _0x4f0cb1,
                        _0xc8203f['_node']['setAttribute']('width', _0x4f0cb1),
                        _0xc8203f['_node']['setAttribute']('viewBox', _0x4b8f86['getAttribute']('viewBox')),
                        _0xc8203f['_node']['removeChild'](_0xc8203f['_node']['getElementsByTagName']('path')[0x0]),
                        _0xc8203f['_node']['appendChild'](_0x4b8f86['getElementsByTagName']('path')[0x0]),
                        _0xc8203f['_visible'] = !![];
                    } else
                        _0xc8203f['_visible'] = ![];
                }
            }),
            Object['defineProperty'](_0x2a3e7c, '_errorMode', {
                'get': function() {
                    return _0x661b89['_visible'];
                },
                'set': function(_0xbc2533) {
                    _0x661b89['_visible'] = !_0xbc2533,
                    _0xbc2533 && (!_0x1af4df && (_0x1af4df = new $Widget(),
                    _0x1af4df['_bounds'] = {
                        'left': 0x1c2,
                        'top': 0x1fc,
                        'width': 0x3fc,
                        'height': 0x40
                    },
                    _0x1af4df['_color'] = '#fff',
                    _0x1af4df['_font'] = '52px\x20PublicSans-Regular',
                    _0x1af4df['_node']['style']['lineHeight'] = '64px',
                    _0x1af4df['_node']['style']['letterSpacing'] = '-1.6px',
                    _0x1af4df['_node']['style']['textAlign'] = 'center',
                    _0x1af4df['_node']['innerHTML'] = _0xbc2533['type'] === 'drm' ? 'Errore\x20di\x20DRM' : 'Servizio\x20non\x20disponibile.',
                    this['append'](_0x1af4df)),
                    this['show'](!![]));
                }
            }),
            _0x2a3e7c['addExtra'] = function(_0x580a11) {
                var _0x4dc70a, _0x4475af;
                if (_0x2dd24e)
                    for (_0x4dc70a = 0x0; _0x4dc70a < _0x2dd24e['length']; _0x4dc70a++) {
                        _0x2dd24e[_0x4dc70a]['_node']['innerHTML'] = _0x580a11[_0x4dc70a]['text'],
                        _0x2dd24e[_0x4dc70a]['_bounds'] = _0x580a11[_0x4dc70a]['bounds'];
                    }
                else {
                    _0x2dd24e = [];
                    for (_0x4dc70a = 0x0; _0x4dc70a < _0x580a11['length']; _0x4dc70a++) {
                        _0x4475af = new $Widget(),
                        _0x4475af['_bounds'] = _0x580a11[_0x4dc70a]['bounds'],
                        _0x4475af['_color'] = '#fff',
                        _0x4475af['_font'] = _0x580a11[_0x4dc70a]['font'],
                        _0x4475af['_node']['style']['lineHeight'] = _0x580a11[_0x4dc70a]['lineHeight'] + 'px',
                        _0x4475af['_node']['style']['letterSpacing'] = _0x580a11[_0x4dc70a]['letterSpacing'] + 'px',
                        _0x4475af['_node']['style']['textAlign'] = 'center',
                        _0x4475af['_node']['innerHTML'] = _0x580a11[_0x4dc70a]['text'],
                        _0x2dd24e['push'](_0x4475af),
                        this['append'](_0x4475af);
                    }
                }
            }
            ,
            _0x2a3e7c['show'] = function(_0x10465c) {
                _0x3d70c0 && (clearTimeout(_0x3d70c0),
                _0x3d70c0 = null);
                if (!_0x10465c && $ReaService['isRunning']()) {
                    var _0x36e067 = Date['now']() - _0x265825;
                    if (_0x36e067 > 0x0 && _0x36e067 < 0xbb8)
                        return _0x3d70c0 = setTimeout(function() {
                            _0x265825 = 0x0,
                            _0x2a3e7c['show'](![]);
                        }, 0xbb8 - _0x36e067),
                        _0x3d70c0;
                }
                TRANSITION && (_0x2a3e7c['_node']['style']['transition'] = '',
                _0x2a3e7c['_node']['offsetWidth'],
                _0x2a3e7c['_node']['style']['transition'] = _0x10465c ? 'opacity\x200.5s' : 'opacity\x200.4s');
                _0x2a3e7c['_node']['style']['opacity'] = _0x10465c ? 0x1 : 0x0,
                _0x265825 = _0x10465c ? Date['now']() : 0x0;
                if (!_0x10465c && _0x2dd24e)
                    for (var _0xa1db2d = 0x0; _0xa1db2d < _0x2dd24e['length']; _0xa1db2d++) {
                        if (_0x2dd24e[_0xa1db2d])
                            _0x2dd24e[_0xa1db2d]['_node']['innerHTML'] = '';
                    }
            }
            ,
            _0x2a3e7c['append'](_0x31bb52),
            _0x2a3e7c['append'](_0xc8203f),
            _0x2a3e7c['append'](_0x661b89),
            _0x2a3e7c;
        }
    };
}()
  , $ReaService = function() {
    var _0x376325 = 0x2, _0x134a07 = 0x0, _0x4de423 = 0x1, _0x1b89fc = 0x2, _0x229311 = 0x3, _0x3807bc = ['IDLE', 'BUFFERING', 'PLAYING', 'STOPPED'], _0x3d3411 = 'hbbtv.tvhub.rea', _0x9da74d, _0x579407, _0x848805;
    function _0x91d8a1() {
        var _0x35c659 = $TimeManager['getInstance']()['_offset']
          , _0x6571d5 = new Date();
        return _0x6571d5['setTime'](Date['now']() + _0x35c659),
        {
            'week_day': _0x6571d5['getDay'](),
            'month': _0x6571d5['getMonth']() + 0x1,
            'day': _0x6571d5['getDate'](),
            'time': _0x6571d5['getHours']() * 0xe10 + _0x6571d5['getMinutes']() * 0x3c + _0x6571d5['getSeconds']()
        };
    }
    function _0x82efb0(_0x2ddc4e) {
        if (typeof _0x2ddc4e !== 'string' || _0x2ddc4e['length'] !== 0x5 && _0x2ddc4e['length'] !== 0x8)
            return println('[REA]\x20invalid\x20string\x20seconds', 'err'),
            -0x1;
        var _0x24614b = parseInt(_0x2ddc4e['substring'](0x0, 0x2), 0xa)
          , _0x247188 = parseInt(_0x2ddc4e['substring'](0x3, 0x5), 0xa)
          , _0x5623be = 0x0;
        _0x2ddc4e['length'] > 0x6 && (_0x5623be = parseInt(_0x2ddc4e['substring'](0x6, 0x8), 0xa));
        if (isNaN(_0x24614b) || isNaN(_0x247188) || isNaN(_0x5623be))
            return println('[REA]\x20cannot\x20convert\x20string\x20to\x20seconds', 'err'),
            -0x1;
        return _0x24614b * 0xe10 + _0x247188 * 0x3c + _0x5623be;
    }
    function _0x4cb85b(_0x30735a) {
        _0x30735a < 0x0 && (_0x30735a *= -0x1);
        var _0x240fd4 = Math['floor'](_0x30735a / 0xe10)
          , _0x4935c9 = Math['floor']((_0x30735a - _0x240fd4 * 0xe10) / 0x3c)
          , _0x76b1ed = _0x30735a - _0x240fd4 * 0xe10 - _0x4935c9 * 0x3c;
        return (_0x240fd4 ? (_0x240fd4 < 0xa ? '0' : '') + _0x240fd4 + ':' : '') + ((_0x4935c9 < 0xa ? '0' : '') + _0x4935c9) + ':' + ((_0x76b1ed < 0xa ? '0' : '') + _0x76b1ed);
    }
    function _0x2ad3a4(_0x315a36, _0x2481ee) {
        if (!_0x315a36 || !_0x2481ee)
            return ![];
        if (!_0x315a36['on_air'] || _0x315a36['on_air']['length'] === 0x0)
            return !![];
        for (var _0x585ef0 = 0x0, _0x194dd1; _0x585ef0 < _0x315a36['on_air']['length']; _0x585ef0++) {
            _0x194dd1 = _0x315a36['on_air'][_0x585ef0]['split']('-');
            var _0xb5b385 = parseInt(_0x194dd1[0x0]['substring'](0x3), 0xa)
              , _0x122cb0 = parseInt(_0x194dd1[0x1]['substring'](0x3), 0xa);
            if (_0x2481ee['month'] > _0xb5b385 && _0x2481ee['month'] < _0x122cb0)
                return !![];
            if (_0x2481ee['month'] === _0xb5b385)
                return _0x2481ee['day'] >= parseInt(_0x194dd1[0x0]['substring'](0x0, 0x2), 0xa);
            if (_0x2481ee['month'] === _0x122cb0)
                return _0x2481ee['day'] <= parseInt(_0x194dd1[0x1]['substring'](0x0, 0x2), 0xa);
        }
        return ![];
    }
    function _0x90ba3b(_0x4f8fda, _0x1e4cc0, _0x4e1fe6, _0x49560c) {
        _0x579407 = [];
        for (var _0x46ab95 = 0x0, _0x3bdb04; _0x46ab95 < _0x4f8fda['Service']['length']; _0x46ab95++) {
            _0x3bdb04 = _0x4f8fda['Service'][_0x46ab95];
            var _0x34e4c1 = _0x4e1fe6[_0x3bdb04['dvbTriplet']];
            if (!_0x34e4c1)
                continue;
            if (typeof _0x34e4c1 === 'string')
                _0x34e4c1 = [_0x34e4c1];
            for (var _0x17d999 = 0x0, _0x170631; _0x17d999 < _0x34e4c1['length']; _0x17d999++) {
                _0x170631 = {
                    'uid': _0x3bdb04['dvbTriplet'] + '.' + _0x17d999,
                    'dvbTriplet': _0x3bdb04['dvbTriplet'],
                    'channelName': _0x3bdb04['name'],
                    'name': _0x34e4c1[_0x17d999],
                    'url': _0x3bdb04['url'],
                    'nth': -0x1,
                    'restart': typeof _0x3bdb04['restart'] === 'string' ? _0x3bdb04['restart'] === 'true' : _0x49560c === 'true',
                    'delay': _0x3bdb04['delay'] && parseInt(_0x3bdb04['delay']) || 0x0
                },
                _0x579407['push'](_0x170631),
                !_0x848805 && _0x1e4cc0 && _0x1e4cc0['uid'] === _0x170631['uid'] && (_0x848805 = _0x170631);
            }
        }
        _0x579407['sort'](function(_0x2f1ea7, _0x3c04c5) {
            if (_0x2f1ea7['name']['toLowerCase']() < _0x3c04c5['name']['toLowerCase']())
                return -0x1;
            if (_0x2f1ea7['name']['toLowerCase']() > _0x3c04c5['name']['toLowerCase']())
                return 0x1;
            return 0x0;
        });
    }
    function _0xe35587() {
        _0x9da74d && _0x9da74d['alarmId'] && (println('[REA]\x20disposed\x20timer', 'wrn'),
        clearTimeout(_0x9da74d['alarmId']),
        _0x9da74d['alarmId'] = null);
    }
    function _0xa06d90() {
        println('[REA]\x20back\x20to\x20original\x20channel');
        var _0x14be7e = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['getChannelByTriplet'](_0x9da74d['origin']['onid'], _0x9da74d['origin']['tsid'], _0x9da74d['origin']['sid']);
        if (_0x14be7e)
            $VideoManager['getInstance']()['_video']['setChannel'](_0x14be7e, ![], null, 0x1);
        else
            $StreamingService['setChannel'](HBBTV_EMULATION);
    }
    function _0x1442bb() {
        println('[REA]\x20end\x20of\x20content'),
        _0x9da74d['alarmId'] = null;
        if (_0x9da74d['triggers']['length'])
            _0x9da74d['triggers']['shift']();
        $StreamingService['setLoading'](_0x9da74d['color']),
        $StreamingService['setChannel'](null),
        _0x9da74d['running'] = _0x229311,
        _0xa06d90();
    }
    function _0x2a33d5(_0x1fe5da) {
        if (!_0x848805 || !_0x9da74d) {
            if (_0x9da74d) {
                if (_0x9da74d['running'])
                    $StreamingService['setLoading']();
                _0x9da74d['running'] = _0x134a07;
            }
            return;
        }
        var _0xe664d2 = _0x1fe5da['name'] + '\x20' + _0x1fe5da['onid'] + '.' + _0x1fe5da['tsid'] + '.' + _0x1fe5da['sid'];
        if (_0x9da74d['channelName'] === _0xe664d2) {
            println('[REA]\x20duplicate\x20event!\x20[' + _0x1fe5da['name'] + ']');
            return;
        }
        _0x9da74d['channelName'] = _0xe664d2,
        println('[REA]\x20status:\x20' + _0x3807bc[_0x9da74d['running']] + '\x20|\x20' + _0x1fe5da['name'] + '\x20|\x20' + _0x848805['channelName']);
        if (_0x1fe5da['name']['noBOM']() === _0x848805['channelName']) {
            if (_0x9da74d['running'] === _0x4de423) {
                if (_0x1fe5da['name'] === _0x9da74d['origin']['name']) {
                    println('[REA]\x20selected\x20origin\x20channel', 'wrn'),
                    $StreamingService['setLoading'](),
                    _0x9da74d['running'] = _0x134a07;
                    return;
                }
                _0x9da74d['running'] = _0x1b89fc;
                var _0x59f6b9 = _0x9da74d['triggers'][0x0]
                  , _0x2e8c24 = _0x59f6b9['duration'];
                if (!_0x9da74d['serviceRelated'])
                    _0x2e8c24 += _0x848805['delay'];
                _0x9da74d['alarmId'] = setTimeout(_0x1442bb, _0x2e8c24 * 0x3e8),
                println('[REA]\x20rea\x20is\x20current\x20playing\x20content!\x20Resume\x20in\x20' + _0x4cb85b(_0x2e8c24));
                if (_0x9da74d['serviceRelated'])
                    $StreamingService['setLoading']();
                else {
                    _0xe664d2 = $BannerReaStreaming['getInstance']();
                    if (!$Gui['getInstance']()['getChildrenByClassName']('BannerReaStreaming'))
                        $Gui['getInstance']()['append'](_0xe664d2);
                    _0xe664d2['visibleTrigger'](!![]);
                }
            }
        } else {
            if (_0x9da74d['running'] === _0x4de423) {
                println('[REA]\x20incoherent\x20state,\x20wait...', 'wrn');
                return;
            }
            var _0x512cd7 = _0x48a569(_0x1fe5da);
            println('[REA]\x20channel\x20' + _0x1fe5da['name'] + '\x20is\x20' + (_0x512cd7 ? 'ENABLED' : 'DISABLED'));
            if (_0x9da74d['running'] || !_0x512cd7) {
                _0xe35587();
                if (_0x9da74d['running'] === _0x229311) {
                    $StreamingService['setLoading']();
                    if (_0x9da74d['triggers']['length']) {
                        var _0x120eae = _0x91d8a1()
                          , _0x127bcc = _0x9da74d['triggers'][0x0]['from'] - _0x120eae['time'];
                        _0x127bcc > 0x0 && (_0x9da74d['alarmId'] = setTimeout(_0x79efb2, _0x127bcc * 0x3e8),
                        println('[REA]\x20next\x20trigger\x20' + _0x9da74d['triggers'][0x0]['scheduled'] + '\x20SET,\x20remaining\x20' + _0x4cb85b(_0x127bcc)));
                    } else
                        println('[REA]\x20no\x20more\x20trigger\x20for\x20today');
                }
                _0x9da74d['running'] = _0x134a07;
            } else
                _0x153409();
        }
    }
    function _0x79efb2() {
        var _0x13de6d, _0x2a8847;
        if (!_0x9da74d)
            return;
        _0x9da74d['alarmId'] = null;
        if (!_0x848805) {
            println('[REA]\x20alarm\x20set\x20with\x20no\x20DISTRCIT', 'err');
            return;
        }
        _0x13de6d = _0x9da74d['triggers'][0x0];
        if (!_0x13de6d) {
            println('[REA]\x20invalid\x20TRIGGER', 'err');
            return;
        }
        _0x9da74d['running'] = _0x4de423;
        !_0x9da74d['origin'] && (_0x2a8847 = $StreamingService['getChannel']() || function(_0x27cc44) {
            return {
                'name': _0x27cc44['name'],
                'onid': _0x27cc44['onid'],
                'tsid': _0x27cc44['tsid'],
                'sid': _0x27cc44['sid']
            };
        }($VideoManager['getInstance']()['_video']['currentChannel']),
        _0x9da74d['origin'] = _0x2a8847);
        var _0x3be625 = 0x23e
          , _0x5582c1 = $Gui['getInstance']()['getChildrenByClassName']('Scene0');
        if (_0x5582c1 && _0x5582c1[0x0]) {
            if (_0x5582c1[0x0]['_visible'])
                _0x3be625 = 0x1ad - 0x32 - 0x40 * 0x2;
        }
        $StreamingService['setLoading'](_0x9da74d['color'], [{
            'text': 'Selezione\x20del\x20programma<br/>' + _0x13de6d['name'] + '\x20' + _0x848805['name'],
            'bounds': {
                'top': _0x3be625,
                'left': 0xa,
                'width': 0x76c,
                'height': 0x40 * 0x2
            },
            'font': '42px\x20PublicSans-Regular',
            'letterSpacing': -1.6,
            'lineHeight': 0x40
        }]);
        for (var _0x101036 = 0x0, _0x2d27da; _0x101036 < _0x9da74d['tunableChannels']['length']; _0x101036++) {
            _0x2d27da = _0x9da74d['tunableChannels'][_0x101036];
            if (_0x2d27da['name'] === _0x848805['channelName']) {
                var _0x2658c0 = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['getChannelByTriplet'](parseInt(_0x2d27da['triplet'][0x0]), parseInt(_0x2d27da['triplet'][0x1]), parseInt(_0x2d27da['triplet'][0x2]));
                _0x2658c0 ? (_0x9da74d['serviceRelated'] = !![],
                $StreamingService['setChannel'](null),
                $VideoManager['getInstance']()['_video']['setChannel'](_0x2658c0, ![], null, 0x1)) : (println('[REA]\x20channel\x20not\x20tunable', 'wrn'),
                $StreamingService['displayError']());
                return;
            }
        }
        _0x9da74d['serviceRelated'] = ![],
        $StreamingService['play'](_0x848805['url'], {
            'onid': _0x9da74d['origin']['onid'],
            'tsid': _0x9da74d['origin']['tsid'],
            'sid': _0x9da74d['origin']['sid'],
            'name': _0x848805['channelName'],
            'lcn': 0x3,
            'type': 'tv',
            'color': '#159460'
        });
    }
    function _0x15db03(_0x4fa1de) {
        var _0x567eaf = [];
        for (var _0x44e33a = 0x0; _0x44e33a < EPG['tv']['length']; _0x44e33a++) {
            EPG['tv'][_0x44e33a]['editorName'] === _0x4fa1de && _0x567eaf['push']({
                'name': EPG['tv'][_0x44e33a]['name'],
                'triplet': EPG['tv'][_0x44e33a]['dvbTriplet']['split']('.'),
                'lcn': parseInt(EPG['tv'][_0x44e33a]['lcn'])
            });
        }
        return _0x567eaf;
    }
    function _0x286e21(_0x367fc6, _0x526392) {
        for (var _0x1c1d02 = 0x0; _0x1c1d02 < _0x367fc6['length']; _0x1c1d02++) {
            for (var _0x41f15c = 0x0; _0x41f15c < _0x526392['length']; _0x41f15c++) {
                if (_0x367fc6[_0x1c1d02] === _0x526392[_0x41f15c]['lcn'])
                    return [_0x367fc6[_0x1c1d02]];
            }
        }
        return _0x367fc6;
    }
    function _0x30fdf9(_0x50940b, _0x452770) {
        var _0x66fe41 = $ConfigManager['getInstance']()['_source']['Configuration']['Editors']['Editor']
          , _0x41be92 = _0x66fe41['length']
          , _0x532d06 = ![];
        $MISC['objScanner'](_0x66fe41, 'Editor', function(_0xd900e3) {
            _0x41be92 -= 0x1;
            if (_0xd900e3['name'] && _0xd900e3['name'] === _0x50940b && _0xd900e3['Services'])
                for (var _0x3d3309 = 0x0; _0x3d3309 < _0xd900e3['Services']['length']; _0x3d3309++) {
                    if (_0xd900e3['Services'][_0x3d3309]['delivery'] === '3')
                        return _0x532d06 = !![],
                        _0x452770(_0xd900e3['Services'][_0x3d3309], {
                            'color': _0xd900e3['color'],
                            'restart': _0xd900e3['restart']
                        }),
                        ![];
                }
            else {
                if (!_0x532d06 && _0x41be92 < 0x0)
                    _0x452770();
                return Array['isArray'](_0xd900e3);
            }
        });
    }
    function _0x153409() {
        _0xe35587();
        if (_0x848805 && _0x9da74d) {
            println('[REA]\x20find\x20triggers...');
            var _0x4ac09d = _0x91d8a1(), _0x131f93 = _0x9da74d['epg'][_0x848805['uid']] || _0x9da74d['epg']['all'], _0x1ad589;
            _0x1ad589 = $StreamingService['getChannel']() || $VideoManager['getInstance']()['_video']['currentChannel'];
            if (_0x1ad589) {
                if (_0x848805['channelName'] === (_0x1ad589['name'] || '')['noBOM']()) {
                    println('[REA]\x20default\x20service\x20selected,\x20skip\x20trigger\x20search', 'wrn');
                    return;
                }
            }
            for (var _0x7ff139 = 0x0; _0x7ff139 < _0x131f93['length']; _0x7ff139++) {
                for (var _0x3e7b27 = 0x0; _0x3e7b27 < _0x131f93[_0x7ff139]['days']['length']; _0x3e7b27++) {
                    if (_0x131f93[_0x7ff139]['days'][_0x3e7b27] === _0x4ac09d['week_day'] || _0x131f93[_0x7ff139]['days'][_0x3e7b27] === -0x1) {
                        _0x9da74d['triggers'] = [];
                        for (var _0x1ac94f = 0x0, _0x42fcf3, _0x3009a0; _0x1ac94f < _0x131f93[_0x7ff139]['triggers']['length']; _0x1ac94f++) {
                            _0x42fcf3 = _0x82efb0(_0x131f93[_0x7ff139]['triggers'][_0x1ac94f]['to']);
                            if (_0x42fcf3 > -0x1 && _0x4ac09d['time'] <= _0x42fcf3) {
                                var _0x1cd01f = _0x9da74d['editions'][_0x131f93[_0x7ff139]['triggers'][_0x1ac94f]['ref']];
                                _0x2ad3a4(_0x1cd01f, _0x4ac09d) ? (_0x3009a0 = _0x82efb0(_0x131f93[_0x7ff139]['triggers'][_0x1ac94f]['from']),
                                _0x9da74d['triggers']['push']({
                                    'name': _0x1cd01f['display_name'] || '',
                                    'from': _0x3009a0,
                                    'to': _0x42fcf3,
                                    'duration': _0x42fcf3 - _0x3009a0,
                                    'scheduled': _0x131f93[_0x7ff139]['triggers'][_0x1ac94f]['from'] + '-' + _0x131f93[_0x7ff139]['triggers'][_0x1ac94f]['to']
                                })) : println('[REA]\x20edition\x20not\x20available', 'wrn');
                            }
                        }
                        if (_0x9da74d['triggers']['length']) {
                            var _0x56fc69 = _0x9da74d['triggers'][0x0]['from'] - _0x4ac09d['time'];
                            _0x56fc69 > 0x0 ? (_0x9da74d['alarmId'] = setTimeout(_0x79efb2, _0x56fc69 * 0x3e8),
                            println('[REA]\x20next\x20trigger\x20' + _0x9da74d['triggers'][0x0]['scheduled'] + '\x20SET,\x20remaining\x20' + _0x4cb85b(_0x56fc69) + '\x20(' + _0x848805['name'] + ')')) : (println('[REA]\x20we\x27re\x20on\x20air!\x20Hurry\x20up!\x20' + _0x4cb85b(_0x56fc69 * -0x1) + '\x20(' + _0x848805['name'] + ')'),
                            _0x9da74d['triggers'][0x0]['duration'] += _0x56fc69,
                            _0x79efb2());
                        } else
                            println('[REA]\x20no\x20triggers'),
                            _0x1765f0();
                        return;
                    }
                }
            }
        } else
            println('[REA]\x20no\x20district\x20selected,\x20skip');
    }
    function _0x5299f5() {
        println('[REA]\x20starting\x20rea\x20service...'),
        $Net['http']('./resources/rea.json')['get']({
            'resolve': function(_0x545134) {
                if (!_0x545134['errorFlag'])
                    try {
                        var _0x3e6c85, _0x490d75, _0x52ba40 = JSON['parse'](_0x545134['text']);
                        if (!_0x52ba40)
                            return println('[REA]\x20invalid\x20config\x20file', 'err');
                        if (_0x52ba40['version'] < _0x376325)
                            return println('[REA]\x20rea\x20version\x20NOT\x20supported', 'err');
                        println('[REA]\x20loaded\x20' + _0x52ba40['name'] + '\x20v.' + _0x52ba40['version'] + '\x20' + _0x52ba40['dateTime']);
                        if (!_0x52ba40['enabled'])
                            return println('[REA]\x20service\x20is\x20globally\x20disabled', 'wrn');
                        _0x3e6c85 = DELIVERY_FLAG === 0x0 ? 'sat' : DELIVERY_FLAG === 0x2 ? 'dtt' : 'net',
                        println('[REA]\x20current\x20delivery:\x20' + _0x3e6c85),
                        _0x3e6c85 = _0x52ba40['delivery'][_0x3e6c85];
                        if (!_0x3e6c85)
                            return println('[REA]\x20delivery\x20not\x20defined', 'err');
                        if (!_0x3e6c85['enabled'])
                            return println('[REA]\x20service\x20is\x20disabled\x20for\x20this\x20delivery', 'wrn');
                        if (!_0x52ba40['display'])
                            return println('[REA]\x20invalid\x20json\x20format:\x20missing\x20display', 'err');
                        _0x490d75 = $StorageManager['getInstance']()['read'](_0x3d3411);
                        if (_0x490d75)
                            try {
                                _0x490d75 = JSON['parse'](_0x490d75);
                            } catch (_0x983ce3) {
                                println('[REA]\x20error\x20loading\x20district\x20from\x20memory:\x20' + _0x983ce3, 'err'),
                                $StorageManager['getInstance']()['delete'](_0x3d3411),
                                _0x490d75 = null;
                            }
                        _0x30fdf9(_0x52ba40['editor'], function(_0xa41dcb, _0x23d6f2) {
                            if (!_0xa41dcb) {
                                println('[REA]\x20cannot\x20find\x20channels\x20for\x20' + _0x52ba40['editor'], 'err');
                                return;
                            }
                            _0x9da74d = _0x3e6c85,
                            _0x9da74d['dateTime'] = _0x52ba40['dateTime'] || '-',
                            _0x9da74d['running'] = _0x134a07,
                            _0x9da74d['epg'] = _0x52ba40['epg'],
                            _0x9da74d['editions'] = _0x52ba40['editions'],
                            _0x9da74d['color'] = _0x23d6f2['color'],
                            _0x9da74d['orientation'] = _0x52ba40['orientation'] === 'vertical' || _0x52ba40['orientation'] === 'horizontal' ? _0x52ba40['orientation'] : 'vertical',
                            _0x9da74d['tunableChannels'] = _0x15db03(_0x52ba40['editor']),
                            _0x9da74d['lcn'] = _0x286e21(_0x9da74d['lcn'], _0x9da74d['tunableChannels']),
                            _0x90ba3b(_0xa41dcb, _0x490d75, _0x52ba40['display'], _0x23d6f2 && _0x23d6f2['restart']),
                            println('[REA]\x20selected\x20district:\x20' + (_0x848805 ? _0x848805['name'] : 'NONE')),
                            $VideoManager['getInstance']()['addChannelChangeSucceededListener'](_0x2a33d5),
                            println('[REA]\x20service\x20started'),
                            _0x48a569() && _0x153409();
                        });
                    } catch (_0x1e8df8) {
                        println('[REA]\x20error\x20starting\x20rea:\x20' + _0x1e8df8['message'], 'err');
                    }
                else
                    println('[REA]\x20error\x20fetching\x20rea.json\x20[' + _0x545134['code'] + ']', 'err');
            },
            'reject': function() {
                println('[REA]\x20error\x20fetching\x20rea.json', 'err');
            }
        });
    }
    function _0x48a569(_0x43a4a2) {
        if (_0x9da74d) {
            _0x43a4a2 = _0x43a4a2 || $StreamingService['getChannel']() || $VideoManager['getInstance']()['_video']['currentChannel'];
            if (!_0x43a4a2)
                return println('[REA]\x20cannot\x20find\x20channel', 'err'),
                ![];
            if (_0x9da74d['lcn']['length'])
                for (var _0x2eb0e0 = 0x0; _0x2eb0e0 < _0x9da74d['lcn']['length']; _0x2eb0e0++) {
                    if (_0x9da74d['lcn'][_0x2eb0e0] === _0x43a4a2['majorChannel'])
                        return !![];
                }
            else
                return _0x43a4a2['name'] === 'Rai\x203\x20HD';
        }
        return ![];
    }
    function _0x29a070() {
        return _0x579407;
    }
    function _0x13fd80() {
        return _0x848805;
    }
    function _0x35ab7a() {
        return _0x9da74d && _0x9da74d['triggers'][0x0];
    }
    function _0x30a8d7(_0x36dba8) {
        if (_0x36dba8)
            $StorageManager['getInstance']()['write'](_0x3d3411, JSON['stringify']({
                'uid': _0x36dba8['uid']
            }));
        else
            $StorageManager['getInstance']()['delete'](_0x3d3411);
        _0x848805 = _0x36dba8,
        _0x153409();
    }
    function _0x42f219() {
        return _0x9da74d && _0x9da74d['orientation'];
    }
    function _0x1f8e53() {
        return _0x9da74d && _0x9da74d['running'];
    }
    function _0x353032() {
        return _0x9da74d && _0x9da74d['serviceRelated'];
    }
    function _0x1765f0(_0x21ac00) {
        if (!_0x9da74d)
            return;
        println('[REA]\x20stop'),
        _0xe35587();
        if (_0x9da74d['running']) {
            _0x9da74d['running'] = _0x229311;
            if (_0x21ac00) {
                if (HBBTV_EMULATION)
                    $VideoManager['getInstance']()['_video']['currentChannel']['name'] = _0x9da74d['origin']['name'];
                _0x9da74d['channelName'] = null;
                return;
            }
            $StreamingService['setLoading'](_0x9da74d['color']),
            $StreamingService['setChannel'](null),
            _0xa06d90();
        }
    }
    function _0x1027de() {
        println('[REA]\x20probe');
        if (_0x48a569())
            _0x153409();
    }
    return {
        'version': '0.2.4',
        'init': _0x5299f5,
        'isChannelEnabled': _0x48a569,
        'isRunning': _0x1f8e53,
        'isServiceRelated': _0x353032,
        'getAllDistricts': _0x29a070,
        'getDistrict': _0x13fd80,
        'getTrigger': _0x35ab7a,
        'setDistrict': _0x30a8d7,
        'getOrientation': _0x42f219,
        'probe': _0x1027de,
        'stop': _0x1765f0,
        'dispose': function() {
            _0xe35587(),
            _0x9da74d['running'] = _0x134a07;
        },
        'test': function(_0x8ee4da) {
            $ReaService['getDO']()['triggers'] && $ReaService['getDO']()['triggers']['length'] ? ($ReaService['getDO']()['triggers'][0x0]['duration'] = _0x8ee4da || 0x3c,
            _0x79efb2()) : println('[REA]\x20no\x20triggers', 'wrn');
        },
        'getDO': function() {
            return _0x9da74d;
        }
    };
}()
  , $SubtitleService = function() {
    var _0x32ac2e = '[SUBTITLE]\x20', _0x80a2e = 'hbbtv.tvhub.subs', _0x1568f5 = ['#000000', '#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff', '#00ffff', '#ffffff'], _0x4ac9f6 = 0x2be / 0x1a, _0x295b1c = {
        'active': 0x0,
        'base64': !![],
        'hasHeader': ![],
        'fontFamily': 'monospace',
        'fontSize': 0x1,
        'fontSizes': [0x17, 0x23, 0x2e],
        'languages': ['Disattivati', 'Italiano'],
        'labels': ['Aa', 'Aa', 'Aa']
    }, _0x4a500a = [['\x20', '0', '@', 'P', '`', 'p'], ['!', '1', 'A', 'Q', 'a', 'q'], ['\x22', '2', 'B', 'R', 'b', 'r'], ['#', '3', 'C', 'S', 'c', 's'], ['\x20', '4', 'D', 'T', 'd', 't'], ['%', '5', 'E', 'U', 'e', 'u'], ['&', '6', 'F', 'V', 'f', 'v'], ['\x27', '7', 'G', 'W', 'g', 'w'], ['(', '8', 'H', 'X', 'h', 'x'], [')', '9', 'I', 'Y', 'i', 'y'], ['*', ':', 'J', 'Z', 'j', 'z'], ['+', ';', 'K', '[', 'k', '{'], [',', '<', 'L', '\x5c', 'l', '|'], ['-', '=', 'M', ']', 'm', '}'], ['.', '>', 'N', '^', 'n', '~'], ['/', '?', 'O', '_', 'o', '\x20']], _0x54dd42 = [['\x20', '0', 'é', 'P', 'ù', 'p'], ['!', '1', 'A', 'Q', 'a', 'q'], ['\x22', '2', 'B', 'R', 'b', 'r'], ['£', '3', 'C', 'S', 'c', 's'], ['$', '4', 'D', 'T', 'd', 't'], ['%', '5', 'E', 'U', 'e', 'u'], ['&', '6', 'F', 'V', 'f', 'v'], ['\x27', '7', 'G', 'W', 'g', 'w'], ['(', '8', 'H', 'X', 'h', 'x'], [')', '9', 'I', 'Y', 'i', 'y'], ['*', ':', 'J', 'Z', 'j', 'z'], ['+', ';', 'K', '°', 'k', 'à'], [',', '<', 'L', 'ç', 'l', 'ò'], ['-', '=', 'M', '>', 'm', 'è'], ['.', '>', 'N', '^', 'n', 'ì'], ['/', '?', 'O', '#', 'o', '\x20']], _0x3c7d14, _0x5d858e = ![], _0x4a14d4, _0x368b4f, _0x452a14, _0xa9b615, _0x3dd478 = ![], _0x20f2fc = 0x0;
    function _0x321f2d(_0x472c22, _0xa9cdbf) {
        var _0x47f41a = !_0x295b1c['hasHeader'] || _0x472c22[0x8] % 0x2 !== 0x0;
        if (!_0x47f41a) {
            println(_0x32ac2e + 'not\x20a\x20subtitle\x20page', 'wrn');
            return;
        }
        var _0x32fc71 = _0x295b1c['hasHeader'] ? (_0x472c22[0xa] >> 0x4) % 0x2 * 0x4 + (_0x472c22[0xa] >> 0x2) % 0x2 * 0x2 + _0x472c22[0xa] % 0x2 : 0x3;
        _0x32fc71 = _0x32fc71 === 0x3 ? _0x54dd42 : _0x4a500a;
        var _0x456b15, _0x24cbdb, _0x200da2, _0x2f774a = ![], _0x1ef482 = 0x0, _0x30fcf5 = 0x0, _0x58480d = _0x1568f5[0x7], _0x1fdfc2 = _0x1568f5[0x0], _0x3fedf0, _0x5a21e0 = '', _0x595748 = _0x295b1c['hasHeader'] ? 0x2b : 0x0;
        for (_0x456b15 = 0xb; _0x456b15 < _0x595748; _0x456b15++) {
            _0x200da2 = _0x247485(_0x472c22[_0x456b15]),
            _0x5a21e0 += _0x4a500a[_0x200da2['row']][_0x200da2['col'] - 0x2];
        }
        this['header'] = _0x5a21e0,
        _0x5a21e0 = [],
        _0x3fedf0 = '';
        for (_0x456b15 = _0x595748; _0x456b15 < _0xa9cdbf; _0x456b15++) {
            _0x24cbdb = (_0x456b15 - _0x595748) % 0x2b;
            _0x24cbdb === 0x0 && !!_0x3fedf0 && (_0x2f774a && (_0x3fedf0 += '</span>',
            _0x2f774a = ![]),
            _0x5a21e0['push']({
                'y': _0x1ef482,
                'line': _0x3fedf0,
                'background': _0x1fdfc2 !== _0x1568f5[0x0] && _0x1fdfc2
            }),
            _0x3fedf0 = '',
            _0x58480d = _0x1568f5[0x7],
            _0x1fdfc2 = _0x1568f5[0x0],
            _0x30fcf5 = 0x0);
            if (_0x24cbdb < 0x3) {
                _0x24cbdb === 0x2 && (_0x1ef482 = _0x472c22[_0x456b15] % 0x2 * 0x10 + (_0x472c22[_0x456b15] >> 0x2) % 0x2 * 0x8 + (_0x472c22[_0x456b15] >> 0x4) % 0x2 * 0x4 + (_0x472c22[_0x456b15] >> 0x6) % 0x2 * 0x2 + _0x472c22[_0x456b15 - 0x1] % 0x2);
                continue;
            }
            _0x200da2 = _0x247485(_0x472c22[_0x456b15]);
            if (_0x200da2['col'] > 0x1)
                _0x1fdfc2 !== _0x58480d && _0x30fcf5 === 0x2 && (_0x3fedf0 += _0x32fc71[_0x200da2['row']][_0x200da2['col'] - 0x2]);
            else {
                if (_0x200da2['col'] === 0x0) {
                    if (_0x200da2['row'] >= 0x0 && _0x200da2['row'] < 0x8)
                        _0x2f774a && (_0x3fedf0 += '</span>',
                        _0x2f774a = ![]),
                        _0x58480d = _0x1568f5[_0x200da2['row']],
                        _0x3fedf0 += '<span\x20style=\x22color:\x20' + _0x58480d + '\x22>',
                        _0x2f774a = !![];
                    else {
                        if (_0x200da2['row'] === 0xb)
                            _0x30fcf5 += 0x1;
                        else
                            _0x200da2['row'] === 0xa && (_0x30fcf5 -= 0x1);
                    }
                    _0x3fedf0 += '\x20';
                } else {
                    if (_0x200da2['col'] === 0x1) {
                        if (_0x200da2['row'] === 0xd)
                            _0x1fdfc2 = _0x58480d;
                        else
                            _0x200da2['row'] === 0xc && (_0x1fdfc2 = _0x1568f5[0x0]);
                    }
                }
            }
        }
        if (_0x3fedf0) {
            if (_0x2f774a)
                _0x3fedf0 += '</span>';
            _0x5a21e0['push']({
                'y': _0x1ef482,
                'line': _0x3fedf0,
                'background': _0x1fdfc2 !== _0x1568f5[0x0] && _0x1fdfc2
            });
        }
        this['captions'] = _0x5a21e0;
    }
    function _0x247485(_0x41d77e) {
        return {
            'col': (_0x41d77e >> 0x1) % 0x2 * 0x4 + (_0x41d77e >> 0x2) % 0x2 * 0x2 + (_0x41d77e >> 0x3) % 0x2,
            'row': (_0x41d77e >> 0x4) % 0x2 * 0x8 + (_0x41d77e >> 0x5) % 0x2 * 0x4 + (_0x41d77e >> 0x6) % 0x2 * 0x2 + (_0x41d77e >> 0x7) % 0x2
        };
    }
    function _0x277a59(_0x917c03) {
        for (var _0x1fbc3a = [], _0x4f20d6 = 0x0; _0x4f20d6 < _0x917c03['length']; _0x4f20d6 += 0x2)
            _0x1fbc3a['push'](parseInt(_0x917c03['substring'](_0x4f20d6, _0x4f20d6 + 0x2), 0x10));
        return _0x1fbc3a;
    }
    function _0x8ea8c5(_0x133a17) {
        var _0x5d66ff = window['atob'](_0x133a17)
          , _0x5080f7 = _0x5d66ff['length']
          , _0x392995 = new Uint8Array(_0x5080f7);
        for (var _0x2d0f8c = 0x0; _0x2d0f8c < _0x5080f7; _0x2d0f8c++) {
            _0x392995[_0x2d0f8c] = _0x5d66ff['charCodeAt'](_0x2d0f8c);
        }
        return _0x392995;
    }
    function _0x4fe569(_0x969e38) {
        if (!_0x969e38)
            return;
        var _0x38a911 = _0x969e38['length'] || _0x969e38['byteLength'];
        if (_0x38a911 % 0x2b !== 0x0) {
            if (_0x38a911)
                println(_0x32ac2e + 'invalid\x20length:\x20' + _0x38a911);
            _0x2f1bb6();
            return;
        }
        var _0x5f1b44 = new _0x321f2d(_0x969e38,_0x38a911)
          , _0x2eb055 = _0x2f1bb6();
        if (_0x5f1b44['captions']) {
            for (var _0x47e0b9 = 0x0; _0x47e0b9 < _0x5f1b44['captions']['length']; _0x47e0b9++) {
                if (_0x47e0b9 === 0x0) {
                    var _0x21eba4 = _0x5f1b44['captions'][0x0]['y']
                      , _0x4abd12 = 0x16 + (0x2 - _0x295b1c['fontSize']);
                    _0x21eba4 > _0x4abd12 && (_0x21eba4 -= _0x21eba4 - _0x4abd12);
                    _0x21eba4 *= _0x4ac9f6;
                    if (_0x452a14 && _0x5f1b44['captions']['length'] === 0x1) {
                        if (_0x452a14[0x1]['y'] === _0x5f1b44['captions'][0x0]['y']) {
                            if (_0x295b1c['fontSize'] === 0x0)
                                _0x21eba4 -= _0x4ac9f6;
                            else {
                                if (_0x295b1c['fontSize'] === 0x1)
                                    _0x21eba4 -= _0x4ac9f6 / 0x2;
                            }
                        }
                    }
                    if (_0x5f1b44['captions'][0x0]['y'] > 0xd) {
                        if (_0x295b1c['fontSize'] === 0x0)
                            _0x21eba4 += _0x4ac9f6;
                        else {
                            if (_0x295b1c['fontSize'] === 0x1)
                                _0x21eba4 += _0x4ac9f6 / 0x2;
                        }
                    }
                    _0x3c7d14['firstChild']['style']['top'] = _0x21eba4 + 'px',
                    _0x5f1b44['captions'][0x0]['background'] ? _0x3c7d14['firstChild']['style']['backgroundColor'] = _0x45c438(_0x5f1b44['captions'][0x0]['background']) : _0x3c7d14['firstChild']['style']['backgroundColor'] = 'rgba(0,0,0,0.8)';
                }
                _0x2eb055['innerHTML'] += '<div>' + _0x5f1b44['captions'][_0x47e0b9]['line'] + '</div>';
            }
            _0x5f1b44['captions']['length'] > 0x1 && (_0x452a14 = _0x5f1b44['captions']);
        }
    }
    function _0x45c438(_0x53c1d6) {
        var _0x26d6d4 = parseInt(_0x53c1d6['substring'](0x1, 0x3), 0x10)
          , _0x8aee47 = parseInt(_0x53c1d6['substring'](0x3, 0x5), 0x10)
          , _0x300fc2 = parseInt(_0x53c1d6['substring'](0x5, 0x7), 0x10);
        return 'rgba(' + _0x26d6d4 + ',' + _0x300fc2 + ',' + _0x8aee47 + ',.8)';
    }
    function _0x2f1bb6() {
        var _0x268f67 = _0x3c7d14['firstChild']['firstChild'];
        return _0x268f67['innerHTML'] = '',
        _0x268f67;
    }
    function _0x5ced1f() {
        var _0x2cce40 = _0x3c7d14['firstChild']['firstChild'];
        _0x2cce40['style']['fontSize'] = _0x295b1c['fontSizes'][_0x295b1c['fontSize']] + 'px';
    }
    function _0x18e960() {
        if (!EPG)
            return ![];
        for (var _0x439b9b = 0x0; _0x439b9b < EPG['tv']['length']; _0x439b9b++) {
            if (EPG['tv'][_0x439b9b] && EPG['tv'][_0x439b9b]['dvbTriplet'] === _0x368b4f)
                return EPG['tv'][_0x439b9b]['subtitles'] === 'true';
        }
        return ![];
    }
    function _0x293653(_0x5366e1, _0x300a5e) {
        if (_0xa9b615)
            for (var _0x4ba648 = 0x0; _0x4ba648 < _0xa9b615['length']; _0x4ba648++) {
                _0xa9b615[_0x4ba648]({
                    'action': _0x5366e1,
                    'value': _0x300a5e
                });
            }
        _0x5366e1 === 'activation' && $VideoManager['getInstance']()['notifyVirtualComponentChange'](0x2, _0x295b1c['languages'][_0x295b1c['active']]);
    }
    function _0x51ba7d() {
        return './resources/subtitles/' + _0x368b4f + '.dsmx';
    }
    function _0x239c53(_0x6e2b89) {
        if (_0x6e2b89['status'] === 'trigger') {
            if (_0x6e2b89['name'] !== _0x368b4f) {
                println(_0x32ac2e + 'stream\x20event\x20received\x20' + _0x6e2b89['name'] + '\x20but\x20should\x20be\x20' + _0x368b4f, 'wrn');
                if (!_0x20f2fc) {
                    var _0x1b47ed = _0x295b1c['active'];
                    _0x21e952(),
                    _0x20f2fc = setTimeout(function() {
                        _0x4b8248(_0x1b47ed),
                        _0x20f2fc = 0x0;
                    }, 0x3e8);
                }
            } else {
                if (SUBTITLE_LOG)
                    println(_0x32ac2e + _0x6e2b89['status'] + '\x20|\x20' + _0x6e2b89['text']);
                _0x4fe569(_0x295b1c['base64'] ? _0x8ea8c5(_0x6e2b89['text']) : _0x277a59(_0x6e2b89['data']));
            }
        } else
            println(_0x32ac2e + 'stream\x20event\x20error\x20' + _0x6e2b89['name'] + ':\x20' + _0x6e2b89['status'], 'err'),
            _0x2f1bb6();
    }
    function _0x490a47(_0x10d3b3) {
        if (!_0x3dd478 || !_0x10d3b3)
            return;
        var _0x27c767 = _0x10d3b3['onid'] + '.' + _0x10d3b3['tsid'] + '.' + _0x10d3b3['sid'], _0x1e252e;
        if (_0x27c767 !== _0x368b4f) {
            _0x1e252e = _0x295b1c['active'],
            _0x368b4f = _0x27c767;
            if (_0x1e252e) {
                _0x2f1bb6();
                if (_0x18e960()) {
                    var _0x169330 = $StreamEventManager['request'](_0x4a14d4, _0x51ba7d(), _0x368b4f);
                    println(_0x32ac2e + 'request\x20' + (_0x169330 && _0x169330['code'] + '\x20-\x20' + _0x169330['text']));
                    if (_0x169330['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
                        _0x293653('activation', !![]);
                } else
                    println(_0x32ac2e + 'channel\x20NOT\x20active', 'wrn'),
                    _0x21e952(),
                    _0x295b1c['active'] = _0x1e252e;
            }
        }
    }
    function _0x1c281e(_0x289585, _0x4e2312) {
        if (_0x289585 === $StreamEventManager['RESOURCE_DATA'])
            _0x239c53(_0x4e2312);
        else {
            println(_0x32ac2e + _0x289585 + '\x20' + _0x4e2312);
            if (_0x289585 === $StreamEventManager['RESOURCE_LOST'])
                _0x2f1bb6();
        }
    }
    function _0xf9cd3d() {
        var _0x44a0b2;
        if (_0x3dd478) {
            println(_0x32ac2e + 'service\x20already\x20initialized', 'wrn');
            return;
        }
        _0x3dd478 = !![];
        !_0x4a14d4 && (_0x4a14d4 = $StreamEventManager['sign'](0xa, _0x1c281e),
        println(_0x32ac2e + 'received\x20id:' + _0x4a14d4));
        _0x44a0b2 = $VideoManager['getInstance']()['_video']['currentChannel'];
        if (!_0x44a0b2) {
            println(_0x32ac2e + 'cannot\x20find\x20current\x20channel', 'err');
            return;
        }
        println(_0x32ac2e + 'initialized'),
        _0x3c7d14 = $MISC['html2Element']('<div\x20id=\x22subtitleRoot\x22\x20style=\x22position:\x20absolute;\x20top:\x209px;\x20width:\x201280px;\x20height:\x20702px;\x22>' + '<div\x20id=\x22subtitleBox\x22\x20style=\x22display:\x20table;\x20position:\x20absolute;\x20left:\x2050%;\x20height:\x20auto;\x20transform:\x20translateX(-50%);\x20width:\x20fit-content;\x20' + 'padding:\x200\x2014px;\x20color:\x20#fff;\x20background-color:rgba(0,0,0,0.8);\x20border-radius:\x208px\x22>' + '<div\x20style=\x22position:\x20relative;\x20width:\x20auto;\x20margin:\x200\x20auto;\x20text-align:\x20center;\x20font-family:\x20' + _0x295b1c['fontFamily'] + ';\x22></div></div></div>'),
        _0x5ced1f();
        var _0xbce229 = document['getElementById']('video')['nextSibling'];
        document['body']['insertBefore'](_0x3c7d14, _0xbce229),
        _0x368b4f = _0x44a0b2['onid'] + '.' + _0x44a0b2['tsid'] + '.' + _0x44a0b2['sid'],
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](_0x490a47);
    }
    function _0x1858ad() {
        _0x5d858e = DEBUG || CONSOLE_DEBUG;
        var _0xb01e60 = $StorageManager['getInstance']()['read'](_0x80a2e);
        if (_0xb01e60)
            try {
                _0xb01e60 = JSON['parse'](_0xb01e60),
                _0x295b1c['fontSize'] = _0xb01e60['fontSize'] || 0x0,
                println(_0x32ac2e + 'loaded\x20subtitle\x20preferences');
                var _0x46162a = $VideoManager['getInstance']()['_video']['currentChannel'];
                _0x368b4f = _0x46162a['onid'] + '.' + _0x46162a['tsid'] + '.' + _0x46162a['sid'],
                _0xb01e60['active'] && (_0x18e960() ? _0x4b8248(_0xb01e60['active']) : (println(_0x32ac2e + 'channel\x20NOT\x20active', 'wrn'),
                _0x295b1c['active'] = _0xb01e60['active'],
                _0xf9cd3d()));
            } catch (_0x502f24) {
                println(_0x32ac2e + 'error\x20parsing\x20subtitle\x20preferences', 'err');
            }
        else
            println(_0x32ac2e + 'no\x20preferences\x20found');
    }
    function _0x40ca21() {
        $StorageManager['getInstance']()['write'](_0x80a2e, JSON['stringify']({
            'active': _0x295b1c['active'],
            'fontSize': _0x295b1c['fontSize']
        }));
    }
    function _0x4b8248(_0x2c2171) {
        !_0x3dd478 && _0xf9cd3d();
        if (_0x295b1c['active'])
            return println(_0x32ac2e + 'cannot\x20start\x20service\x20because\x20it\x27s\x20already\x20STARTED', 'wrn'),
            ![];
        _0x295b1c['active'] = _0x2c2171;
        var _0x44612c = $StreamEventManager['request'](_0x4a14d4, _0x51ba7d(), _0x368b4f);
        println(_0x32ac2e + 'request\x20' + (_0x44612c && _0x44612c['code'] + '\x20-\x20' + _0x44612c['text']));
        if (_0x44612c['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
            return _0x293653('activation', !![]),
            !![];
    }
    function _0x21e952() {
        if (!_0x295b1c['active'] || !_0x368b4f)
            return println(_0x32ac2e + 'cannot\x20stop\x20service\x20because\x20it\x27s\x20STOPPED', 'wrn'),
            ![];
        return _0x295b1c['active'] = 0x0,
        _0x452a14 = null,
        $StreamEventManager['release'](_0x4a14d4),
        _0x2f1bb6(),
        _0x293653('activation', ![]),
        !![];
    }
    function _0x508593() {
        if (_0x295b1c['active']) {
            if (_0x21e952())
                $SimpleBanner['getInstance']()['show'](!![], 'Sottotitoli:\x20disattivati');
        } else {
            if (_0x4b8248(0x1))
                $SimpleBanner['getInstance']()['show'](!![], 'Sottotitoli:\x20Italiano');
        }
        _0x40ca21();
    }
    function _0x571941() {
        if (!_0x5d858e)
            return;
        if (!_0x3dd478) {
            var _0x216f59 = $VideoManager['getInstance']()['_video']['currentChannel'];
            if (!_0x216f59)
                return;
            _0x368b4f = _0x216f59['onid'] + '.' + _0x216f59['tsid'] + '.' + _0x216f59['sid'];
        }
        for (var _0x8aee87 = 0x0; _0x8aee87 < EPG['tv']['length']; _0x8aee87++) {
            if (EPG['tv'][_0x8aee87]['dvbTriplet'] === _0x368b4f) {
                if (EPG['tv'][_0x8aee87]['subtitles'] === 'true')
                    _0x508593();
                return;
            }
        }
    }
    return {
        'version': 0x5,
        'load': _0x1858ad,
        'save': _0x40ca21,
        'stop': _0x21e952,
        'start': _0x4b8248,
        'toggle': _0x571941,
        'isEnabled': function() {
            return _0x5d858e;
        },
        'addSelectionListener': function(_0x6c72de) {
            if (typeof _0x6c72de !== 'function')
                return;
            if (!_0xa9b615)
                _0xa9b615 = [];
            _0xa9b615['push'](_0x6c72de);
        },
        'getSetting': function(_0x29560f) {
            return _0x295b1c && _0x295b1c[_0x29560f];
        },
        'setSetting': function(_0x4cc441, _0x23175f) {
            if (_0x295b1c) {
                _0x295b1c[_0x4cc441] = _0x23175f;
                if (_0x4cc441 === 'fontSize')
                    _0x5ced1f();
                _0x40ca21();
            }
        }
    };
}()
  , $WebTrekk = function() {
    var _0x1ceb93 = 0x0, _0x51f85a = 0x1, _0x1e474e = 0x2, _0x22d7c8 = 0x3, _0x56d18c = 0x2a, _0x2ca4d6 = ![], _0x5e2a73 = null, _0x17f3d = ![], _0x204b2c = '', _0xa37c27 = 0x0, _0x192dcb = 0x0, _0x330f0d = -0x1, _0x56ef0e, _0x49e899, _0x9eeabe = 'aggregato.hbbtv', _0x44c925 = '', _0x2dd344 = '', _0x5de297 = 0x0, _0x4bbf5b = 0x0, _0x540756 = 0x0, _0x600995, _0x9b2007, _0x4c8bcd, _0x4633a0, _0x65820a = ![];
    function _0xb2e64a() {
        return Math['floor'](0x3b9aca00 + Math['random']() * 0x218711a00) + '_' + Date['now']();
    }
    function _0x2c8058(_0x47ac8e) {
        var _0x4e1a36 = $StorageManager['getInstance']()['read'](_0x47ac8e);
        return !_0x4e1a36 && (_0x4e1a36 = _0xb2e64a(),
        $StorageManager['getInstance']()['write'](_0x47ac8e, _0x4e1a36)),
        _0x4e1a36;
    }
    function _0x56624d(_0x42df68) {
        var _0x5ee4e8 = '', _0x3417b;
        if (_0x42df68)
            for (_0x3417b = 0x0; _0x3417b < _0x42df68['length']; _0x3417b++) {
                _0x42df68[_0x3417b] && (_0x5ee4e8 += '&' + _0x42df68[_0x3417b]['key'] + '=' + encodeURIComponent(_0x42df68[_0x3417b]['val'] || _0x42df68[_0x3417b]['value'] || ''));
            }
        return _0x5ee4e8;
    }
    function _0x2ee9b9() {
        var _0x5b4d3c = (($VideoManager['getInstance']()['_video'] || {})['currentChannel'] || $StreamingService['getChannel']() || {})['name'];
        if (_0x5b4d3c && typeof _0x5b4d3c === 'string')
            return _0x5b4d3c['noBOM']();
        return '';
    }
    function _0x2a91c7(_0xda567a) {
        if (!_0xda567a)
            return ![];
        var _0x36a99a = _0xda567a['toLowerCase']();
        for (var _0x449a61 = 0x0; _0x449a61 < _0x4c8bcd['length']; _0x449a61++) {
            if (_0x36a99a['indexOf'](_0x4c8bcd[_0x449a61]) === 0x0)
                return !![];
        }
    }
    function _0x23d83f(_0x326418) {
        if (_0x2ca4d6) {
            var _0x5c8098 = new Image();
            _0x5c8098['src'] = _0x326418,
            _0x5c8098['onload'] = function() {}
            ,
            _0x5c8098['onerror'] = function() {}
            ;
        }
    }
    function _0x4f2358() {
        var _0x437281 = '[TREKK]\x20', _0x129776;
        if (arguments)
            for (var _0x53d0c5 = 0x0; _0x53d0c5 < arguments['length']; _0x53d0c5++) {
                _0x129776 = arguments[_0x53d0c5];
                if (typeof _0x129776 === 'string')
                    _0x437281 += _0x129776 + '\x20|\x20';
                else {
                    if (_0x129776)
                        for (var _0x420964 = 0x0; _0x420964 < _0x129776['length']; _0x420964++) {
                            if (_0x129776)
                                _0x437281 += _0x129776[_0x420964]['key'] + ':\x20\x27' + _0x129776[_0x420964]['val'] + '\x27\x20|\x20';
                        }
                }
            }
        println(_0x437281, 'inf');
    }
    function _0xd51c0c(_0x16585e, _0x126464, _0x27b622, _0x47bd52) {
        _0x4f2358(_0x27b622, _0x16585e, _0x126464);
        var _0x5d40d1 = ['323', encodeURIComponent(_0x204b2c + _0x27b622), 0x0, 0x0, 0x0, 0x0, Date['now']()];
        _0x23d83f((_0x47bd52 ? _0x49e899 : _0x56ef0e) + '/wt?la=it&tz=1&p=' + _0x5d40d1['join'](',') + _0x56624d(_0x16585e) + _0x56624d(_0x126464) + '&eid=' + _0x4633a0 + '&sid=' + _0x600995);
    }
    function _0x2b225b() {
        var _0x16e7c8 = ![];
        if (!$StreamingService['isChannelLive']() || !!$StreamingService['getPlayer']()) {
            if (!$StreamingService['isChannelHybrid']()) {
                println('[TREKK]\x20streaming', 'wrn');
                return;
            }
            _0x16e7c8 = !![];
        }
        var _0x482992 = _0x2ee9b9()
          , _0x596954 = DELIVERY_FLAG === 0x2 && _0x482992['toLowerCase']() === 'rai\x204k';
        println('[TREKK]\x20channel\x20name:\x20' + _0x482992 + '\x20|\x20' + (_0x16e7c8 ? 'HYBRID' + (_0x596954 ? '\x20UHD' : '') : DELIVERY_FLAG === 0x2 ? 'DTT' : DELIVERY_FLAG === 0x0 ? 'DTH' : 'NET'), 'wrn');
        if (!_0x482992)
            return;
        var _0x26b117 = _0x16e7c8 || _0x2a91c7(_0x482992);
        _0x482992 !== _0x9b2007 && (_0x9b2007 = _0x482992,
        _0x65820a = ![],
        println('[TREKK]\x20\x27' + _0x482992 + '\x27\x20has\x20tracking\x20' + (_0x26b117 ? 'ENABLED' : 'DISABLED'), 'inf'),
        _0x26b117 && _0x4fd392(_0x482992));
        _0x540756 = (Date['now']() - _0x5de297) / 0x3e8 | 0x0;
        _0x540756 < 0x0 && (_0x540756 = 0x0);
        if (_0x26b117 && !_0x65820a) {
            if (!_0x596954 && _0x16e7c8)
                _0x65820a = !![];
            _0xdfbfb5('pos', !![], _0x482992),
            _0xdfbfb5('uptime', !![], _0x482992);
        }
    }
    function _0x43b23c(_0x58e313, _0x4ea37c) {
        switch (_0x58e313) {
        case _0x1ceb93:
            _0xd51c0c([{
                'key': 'cg1',
                'val': _0x9eeabe
            }, {
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cg5',
                'val': 'BANNER\x20BROADCAST'
            }], [{
                'key': 'cp2',
                'val': _0x2ee9b9()
            }, {
                'key': 'cp5',
                'val': _0x44c925
            }, {
                'key': 'cp12',
                'val': _0x2dd344
            }], 'bannerPolicy');
            break;
        case _0x51f85a:
            _0xd51c0c([{
                'key': 'cg1',
                'val': _0x9eeabe
            }, {
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cg5',
                'val': 'INFORMATIVA\x20BROADCAST'
            }], [{
                'key': 'cp2',
                'val': _0x2ee9b9()
            }, {
                'key': 'cp5',
                'val': _0x44c925
            }, {
                'key': 'cp12',
                'val': _0x2dd344
            }], 'infoPolicy');
            break;
        case _0x1e474e:
            !_0x17f3d && (_0x17f3d = !![],
            _0xd51c0c([{
                'key': 'cg1',
                'val': _0x9eeabe
            }, {
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }, {
                'key': 'cg5',
                'val': 'BANNER\x20RAI\x20TV+'
            }], [{
                'key': 'cp2',
                'val': _0x2ee9b9()
            }, {
                'key': 'cp5',
                'val': _0x44c925
            }, {
                'key': 'cp12',
                'val': _0x2dd344
            }], 'bannerRaiTv+'));
            break;
        case _0x22d7c8:
            _0xd51c0c([{
                'key': 'cg1',
                'val': _0x9eeabe
            }, {
                'key': 'cg2',
                'val': 'raiplay'
            }, {
                'key': 'cg5',
                'val': 'TASTO\x20BLU'
            }], [{
                'key': 'cp2',
                'val': _0x2ee9b9()
            }, {
                'key': 'cp5',
                'val': _0x44c925
            }, {
                'key': 'cp12',
                'val': _0x2dd344
            }], 'bannerRaiPlay');
            break;
        case _0x56d18c:
            _0x4ea37c['cg'] && (!_0xc0813c(_0x4ea37c['cg'], 'cg2') && _0x4ea37c['cg']['push']({
                'key': 'cg2',
                'val': 'rai\x20tv+'
            }));
            _0x4ea37c['cp'] && (!_0xc0813c(_0x4ea37c['cp'], 'cp5') && _0x4ea37c['cp']['push']({
                'key': 'cp5',
                'val': _0x44c925
            }),
            !_0xc0813c(_0x4ea37c['cp'], 'cp10') && _0x4ea37c['cp']['push']({
                'key': 'cp10',
                'val': 'smart\x20tv\x20-\x20hbbtv'
            }),
            !_0xc0813c(_0x4ea37c['cp'], 'cp11') && _0x4ea37c['cp']['push']({
                'key': 'cp11',
                'val': 'hbbtv'
            }),
            !_0xc0813c(_0x4ea37c['cp'], 'cp12') && _0x4ea37c['cp']['push']({
                'key': 'cp12',
                'val': _0x2dd344
            }));
            if (_0x4ea37c['immediate']) {
                _0xd51c0c(_0x4ea37c['cg'], _0x4ea37c['cp'], _0x4ea37c['url']);
                return;
            }
            _0xa37c27 && (clearTimeout(_0xa37c27),
            _0xa37c27 = 0x0);
            _0xa37c27 = setTimeout(function(_0x2c7178) {
                _0xd51c0c(_0x2c7178['cg'], _0x2c7178['cp'], _0x2c7178['url']),
                _0xa37c27 = 0x0;
            }, 0x5 * 0x3e8, _0x4ea37c);
            break;
        default:
            break;
        }
    }
    function _0xc0813c(_0xbcd710, _0x3ab26e) {
        for (var _0x24275e = 0x0; _0x24275e < _0xbcd710['length']; _0x24275e++) {
            if (_0xbcd710[_0x24275e]['key'] === _0x3ab26e)
                return !![];
        }
        return ![];
    }
    function _0xdfbfb5(_0x578f96, _0x329d09, _0x2f059b) {
        if (_0x2f059b) {
            var _0x2c1de5, _0xbbc49f, _0x362bd9;
            _0x2c1de5 = _0x2f059b['toUpperCase']()['indexOf']('TGR'),
            _0xbbc49f = _0x362bd9 = _0x2f059b['substring'](0x0, 0x3)['toLowerCase']() + _0x2f059b['substring'](0x3);
            _0x2c1de5 > -0x1 && (_0xbbc49f = _0xbbc49f['substring'](0x0, _0x2c1de5)['trim'](),
            _0x362bd9 = _0x362bd9['substring'](0x0, _0x2c1de5)['trim']() + '\x20-\x20' + _0x362bd9['substring'](_0x2c1de5 + 0x3)['toLowerCase']()['trim']());
            var _0x4da90b = 'la\x20diretta\x20di\x20' + _0x2f059b + '\x20in\x20broadcast'
              , _0xde3d12 = [{
                'key': 'mg1',
                'val': 'hbbtv'
            }, {
                'key': 'mg2',
                'val': _0xbbc49f
            }, {
                'key': 'mg4',
                'val': _0x362bd9
            }, {
                'key': 'mg5',
                'val': 'live'
            }, {
                'key': 'mg13',
                'val': 'rai\x20tv+'
            }]
              , _0x3667bf = ['323', 'st', 0x0, 0x0, 0x0, 0x0, Date['now']()];
            println('[TREKK]\x20action:' + _0x578f96 + '\x20|\x20mg2:' + _0xbbc49f + '\x20|\x20mg4:' + _0x362bd9, 'inf'),
            _0x23d83f(_0x49e899 + '/wt.pl?la=it&tz=1&p=' + _0x3667bf['join'](',') + '&eid=' + _0x4633a0 + '&sid=' + _0x600995 + '&mt2=' + _0x4bbf5b + '&mt1=' + (_0x329d09 ? _0x540756 : 0x0) + '&mk=' + encodeURIComponent(_0x578f96) + '&mi=' + encodeURIComponent(_0x4da90b) + _0x56624d(_0xde3d12));
        }
    }
    function _0x4fd392(_0x94c42) {
        _0x5de297 = Date['now'](),
        _0xd51c0c([{
            'key': 'cg1',
            'val': _0x9eeabe
        }, {
            'key': 'cg2',
            'val': 'rai\x20tv+'
        }, {
            'key': 'cg5',
            'val': 'SERVIZIO\x20TV\x20BROADCAST'
        }], [{
            'key': 'cp2',
            'val': _0x94c42
        }, {
            'key': 'cp5',
            'val': _0x44c925
        }, {
            'key': 'cp12',
            'val': _0x2dd344
        }], _0x94c42, !![]),
        _0xdfbfb5('init', ![], _0x94c42),
        _0xdfbfb5('live', ![], _0x94c42),
        _0xdfbfb5('hbbtv', ![], _0x94c42),
        _0xdfbfb5('start\x20content', ![], _0x94c42),
        _0xdfbfb5('play', ![], _0x94c42);
    }
    function _0x376257() {
        if (_0x192dcb || _0x330f0d <= 0x0)
            return;
        var _0x13d1e2 = new Date()
          , _0x33c6a2 = $TimeManager['getInstance']()['_offset'];
        _0x13d1e2['setTime'](Date['now']() + _0x33c6a2);
        var _0x1f01f5 = Math['floor'](Math['random']() * 0x3c)
          , _0x2f12ee = Math['abs'](_0x13d1e2['getSeconds']() - _0x1f01f5);
        println('[TREKK]\x20set\x20up\x20UPTIME\x20in\x20' + _0x2f12ee + '\x20seconds');
        if (_0x2f12ee > 0x0 && _0x2f12ee < 0x3c) {
            setTimeout(function() {
                _0x2b225b(),
                _0x192dcb = setInterval(function() {
                    _0x2b225b();
                }, _0x330f0d * 0x3e8);
            }, _0x2f12ee * 0x3e8);
            return;
        }
        _0x2b225b(),
        _0x192dcb = setInterval(function() {
            _0x2b225b();
        }, _0x330f0d * 0x3e8);
    }
    function _0x100ede(_0x480664, _0x4d1caf) {
        _0x5e2a73 = {
            'vod': !!_0x480664
        };
        if (_0x4d1caf) {
            if (_0x480664) {
                var _0xbf9b05 = _0x4d1caf['latest']['date']['split']('/')[0x2] || ''
                  , _0x3de6fc = _0x4d1caf['latest']['id'] ? 'tgr\x20-\x20' + _0x4d1caf['name'] : _0x4d1caf['name']
                  , _0x3002f4 = (_0x4d1caf['latest']['id'] ? 'tgr\x20' + _0x4d1caf['name'] : _0x4d1caf['name']) + '\x20del\x20' + _0x4d1caf['latest']['date'] + '\x20ore\x20' + _0x4d1caf['latest']['time'];
                _0x5e2a73['mi'] = ['hbbtv', 'rai\x20tv+', !!_0x480664 && 'vod' || 'live', _0x3de6fc, _0x3002f4]['join']('\x20-\x20'),
                _0x5e2a73['mg'] = _0x56624d([{
                    'key': 'mg1',
                    'val': 'hbbtv'
                }, {
                    'key': 'mg2',
                    'val': _0x4d1caf['latest']['id'] ? 'rai\x203' : _0x4d1caf['name'] === 'TG1' ? 'rai\x201' : _0x4d1caf['name'] === 'TG2' ? 'rai\x202' : _0x4d1caf['name'] === 'TG3' ? 'rai\x203' : '',
                    'mg3': (_0x4d1caf['latest']['id'] || _0x4d1caf['name'])['toLowerCase']()
                }, {
                    'key': 'mg4',
                    'val': _0x3de6fc['toLowerCase']()
                }, {
                    'key': 'mg5',
                    'val': 'vod'
                }, {
                    'key': 'mg6',
                    'val': 'full\x20episode'
                }, {
                    'key': 'mg7',
                    'val': _0x3002f4['toLowerCase']()
                }, {
                    'key': 'mg8',
                    'val': _0xbf9b05
                }, {
                    'key': 'mg9',
                    'val': _0x4d1caf['latest']['label']['toLowerCase']()
                }, {
                    'key': 'mg12',
                    'val': 'informazione\x20notiziari'
                }, {
                    'key': 'mg13',
                    'val': 'rainews'
                }]);
            }
        }
    }
    function _0x3ae80a(_0x2e1a22, _0xccfac8) {
        _0x5e2a73['mediaPosition'] = (_0x2e1a22 || 0x0) | 0x0,
        _0x5e2a73['mediaDuration'] = (_0xccfac8 || 0x0) | 0x0;
    }
    function _0x542144(_0x19455c) {
        println('[TREKK]\x20action:\x20' + _0x19455c + ',\x20' + _0x5e2a73['mediaPosition'] + '\x20|\x20' + _0x5e2a73['mediaDuration']);
    }
    function _0x1c914d(_0x42aaba) {
        if (_0x5e2a73['live'])
            return;
        switch (_0x42aaba) {
        case 'READY':
            _0x542144('init'),
            _0x542144(_0x5e2a73['live'] && 'live' || 'vod'),
            _0x542144('hbbtv');
            break;
        case 'STARTED':
            _0x542144('start\x20content'),
            _0x542144('play'),
            setTimeout(function() {
                _0x542144('play300');
            }, 0x12c);
            break;
        case 'SEEK':
            _0x542144('seek');
            break;
        case 'PAUSE':
            _0x542144('pause');
            break;
        case 'PLAY':
            _0x542144('play');
            break;
        case 'END':
            _0x542144('eof');
            break;
        default:
            println('[TREKK]\x20invalid\x20' + _0x42aaba, 'wrn');
            break;
        }
    }
    function _0x7802f0(_0x33b419) {
        if (!_0x33b419) {
            println('[TREKK]\x20missing\x20conf\x20in\x20init', 'wnr');
            return;
        }
        _0x600995 = _0xb2e64a(),
        _0x4633a0 = _0x2c8058(_0x33b419['devKey']),
        _0x204b2c = _0x33b419['baseUrl'] || 'hbbtv://www.rai.tv/',
        _0x56ef0e = 'https://' + _0x33b419['domain'] + '/' + _0x33b419['id'],
        _0x49e899 = 'https://' + _0x33b419['testDomain'] + '/' + _0x33b419['testId'],
        _0x2ca4d6 = !!_0x33b419['enabled'],
        _0x4c8bcd = _0x33b419['channels'],
        _0x330f0d = _0x33b419['uptimeSeconds'] || -0x1,
        _0x44c925 = _0x33b419['version'] || '',
        _0x2dd344 = _0x33b419['delivery'] === 0x2 ? 'dtt' : _0x33b419['delivery'] === 0x0 ? 'sat' : 'net',
        println('[TREKK]\x20' + (_0x2ca4d6 ? 'ON' : 'OFF') + '\x20|\x20sessionID:\x20' + _0x600995 + '\x20(' + _0x2dd344 + ')\x20' + _0x44c925 + '\x20|\x20uptime:\x20' + _0x330f0d + 's\x20|\x20channels:\x20' + _0x4c8bcd['join'](','), _0x2ca4d6 ? 'inf' : 'wrn');
    }
    return {
        'version': 0x3,
        'CG1': _0x9eeabe,
        'events': {
            'PRIVACY': _0x1ceb93,
            'PRIVACY_INFO': _0x51f85a,
            'TVPLUS': _0x1e474e,
            'RAIPLAY': _0x22d7c8,
            'GENERIC': _0x56d18c
        },
        'sections': {
            'ON_AIR': 'oraInOnda',
            'RAIPLAY': 'raiPlay',
            'TV_CHANNELS': 'canaliTv',
            'RADIO_CHANNELS': 'canaliRadio',
            'LAST_NEWS': 'rainews/tgUltimeEdizioni',
            'SETTINGS': 'supporto'
        },
        'init': _0x7802f0,
        'setUptime': _0x376257,
        'setContentVOD': _0x100ede,
        'setPosition': _0x3ae80a,
        'track': _0x43b23c,
        'trackAction': _0x1c914d,
        'display': function() {
            return 'version:\x20' + _0x44c925 + ',\x20delivery:\x20' + _0x2dd344;
        }
    };
}()
  , $TaService = function() {
    var _0x512414 = './resources/stream_events.dsmx', _0x5d987c = 'urn:dvb:css:timeline:temi:0:', _0x59e793 = 'urn:hbbtv:ta:profile:2019:2', _0x4848f4 = 'urn:hbbtv:ta:profile:2019:1', _0x4b2289 = 'https://www.raiplay.it/hbbtv/video/ta/FIAT500/manifest.mpd', _0x2a395c = 'event_01', _0xfd01db, _0x166ce4 = ![], _0x5ad55f, _0xc25b27, _0x425ee9;
    function _0x3dd704() {
        println('|>\x20set\x20switch\x20BACK'),
        _0xfd01db['mediaSwitcher']['switchMediaPresentation'](_0xfd01db['video'], null, !![], 0x0, document['querySelector']('#video'), _0x59e793)['then'](function(_0x24e1b7) {
            println('[TA]\x20END:\x20' + _0x24e1b7),
            _0x1aa26b();
        }, function(_0x2a24a5) {
            println('[TA]\x20FAIL:\x20' + _0x2a24a5, 'err');
        });
    }
    function _0x19385c() {
        !_0xfd01db['mediaSwitcher'] && (_0xfd01db['mediaSwitcher'] = document['getElementById']('mswitch') || oipfObjectFactory['createMediaSwitcher']());
        var _0x11fb36 = document['getElementById']('video')
          , _0x56c7a3 = _0x1f9bc7(_0x11fb36)
          , _0x497ada = _0xfd01db['startTime'] | 0x0;
        println('[TA]\x20broadcast\x20state:\x20' + _0x11fb36['playState']),
        println('[TA]\x20broadband\x20state:\x20' + _0xfd01db['video']['readyState'] + '\x20' + _0xfd01db['video']['seeking']),
        println('[TA]\x20TEMI\x20timeline:\x20' + _0x56c7a3 + '\x20|\x20' + _0x497ada),
        _0xfd01db['mediaSwitcher']['switchMediaPresentation'](_0x11fb36, _0x56c7a3, !![], _0x497ada, _0xfd01db['video'], _0x59e793)['then'](function(_0xace7c2) {
            _0xace7c2 ? (println('[TA]\x20fast\x20switch\x20api:\x20' + _0xace7c2, 'err'),
            _0x1aa26b()) : (println('[TA]\x20fast\x20switch\x20api\x20completed'),
            _0x2ae958({
                'watermarks': [{
                    'type': 'img',
                    'name': 'resources/TA/rai.svg?v=1',
                    'x': 0x41,
                    'y': 0x25,
                    'width': 0x30,
                    'height': 0x30
                }]
            }),
            _0xfd01db['useSwitch'] && setTimeout(function() {
                _0x3dd704();
            }, 0x7d0));
        }, function(_0x304b1e) {
            println('[TA]\x20fast\x20switch\x20api\x20ERROR:\x20' + _0x304b1e, 'err'),
            _0x1aa26b();
        });
    }
    function _0x3f7d27() {
        _0xfd01db['started'] = !![];
        if ($DEVICE['userAgentInfo']['vendorName'] === 'Panasonic') {
            if (document['querySelector']('object[type=\x22application/proprietaryfunctionprovider\x22]'))
                _0x19385c();
            else {
                var _0x191ed0 = 'U2FsdGVkX195aeJqrdL6Ud+odPkxgieavyzFE86Ruf/JBh8Tkc4QgNf3EAn+m/Fairx8YK8w057xRbaJo/CLrqaiW/COCwxHNuWc457PbEx611B2IX8HJ5Cz3Ciqkk15JlQWKLvMVmla8RJXRzXdd2KpgbFTCXxGOaRygupc8Y1/nIhYKA0AA+LDKgIFdE2rOrhYcbj3GTtCZzOSymdL30q+LOJuA21eo0/YRc+frOgXAZERye99DZsr'
                  , _0x48a734 = window['oipfObjectFactory']['createProprietaryFunctionProvider']()
                  , _0x95301f = _0x48a734['invokeFunction']('com.panasonic.hbbtv.targetedAdvertisment', 'enable', _0x191ed0);
                _0x95301f['then'](function() {
                    println('[TA]\x20authentication\x20successful'),
                    _0x19385c();
                }, function(_0x1672b2) {
                    println('[TA]\x20authentication\x20failed:\x20' + _0x1672b2, 'err');
                });
            }
        } else
            _0x19385c();
    }
    function _0x428533() {}
    function _0x1e4ff3() {
        println('[MSE]\x20onLoadedData'),
        _0xfd01db['video']['readyState'] === 0x4 && (_0xfd01db['loadedDataReceived'] = !![],
        !_0xfd01db['started'] && _0xfd01db['completed'] && _0x3f7d27());
    }
    function _0x5da538() {
        println('[MSE]\x20onCanPlay');
    }
    function _0x570a37() {
        println('[MSE]\x20onPlay'),
        _0xfd01db['playing'] = !![];
    }
    function _0x1fb8f0() {
        _0xfd01db['video']['currentTime'] - _0xfd01db['currentTime'] >= 0x1 && (_0xfd01db['currentTime'] = _0xfd01db['video']['currentTime'],
        println('[MSE]\x20onTimeUpdate:\x20' + _0xfd01db['currentTime'] + '\x20|\x20' + _0xfd01db['video']['duration']));
    }
    function _0x3003fb() {
        println('[MSE]\x20onEnded'),
        _0xfd01db['playing'] = ![];
        if (!_0xfd01db['useSwitch'])
            setTimeout(function() {
                _0x1aa26b();
            }, 0x3e8);
        _0x40a795();
    }
    function _0xc7a181() {
        println('[MSE]\x20onError', 'err'),
        _0xfd01db['playing'] = ![];
    }
    function _0x2f0338() {
        if (_0xfd01db['aborted']) {
            _0x1aa26b();
            return;
        }
        _0xfd01db['bufferIndex'] = (_0xfd01db['bufferIndex'] + 0x1) % _0xfd01db['buffers']['length'];
        var _0x2354fa = _0xfd01db['spotArray'][_0xfd01db['bufferIndex']]['chunks']['shift']();
        if (_0x2354fa)
            _0xfd01db['buffers'][_0xfd01db['bufferIndex']]['appendBuffer'](_0x2354fa['data']);
        else {
            println('[MSE]\x20buffer\x20loading\x20completed'),
            _0xfd01db['completed'] = !![];
            var _0x31f84e = _0xfd01db['video']['buffered'];
            println('buffered.length=' + _0x31f84e['length']);
            for (var _0x37af42 = 0x0; _0x37af42 < _0x31f84e['length']; _0x37af42++) {
                println(_0x37af42 + '\x20|\x20' + _0x31f84e['start'](_0x37af42) + '-' + _0x31f84e['end'](_0x37af42));
            }
            _0xfd01db['mediaSource']['endOfStream'](),
            !_0xfd01db['started'] && _0xfd01db['loadedDataReceived'] && _0x3f7d27();
        }
    }
    function _0x735a34() {
        println('[MSE]\x20buffer\x20abort', 'wrn');
    }
    function _0x2ba73b() {
        println('[MSE]\x20buffer\x20error', 'err');
    }
    function _0x5c716d() {
        if (_0xfd01db['buffers'] && _0xfd01db['buffers']['length']) {
            println('[MSE]\x20source\x20already\x20open!', 'wrn');
            return;
        }
        println('[MSE]\x20on\x20source\x20open');
        _0xfd01db['video']['src'] && URL['revokeObjectURL'](_0xfd01db['video']['src']);
        _0xfd01db['buffers'] = [],
        _0xfd01db['bufferIndex'] = 0x0;
        for (var _0x7dc459 = 0x0; _0x7dc459 < _0xfd01db['spotArray']['length']; _0x7dc459++) {
            println('[MSE]\x20create\x20buffer\x20of\x20type:\x20' + (_0xfd01db['spotArray'][_0x7dc459]['mimeType'] + ';\x20codecs=\x22' + _0xfd01db['spotArray'][_0x7dc459]['codecs'] + '\x22'));
            var _0xfd200b = _0xfd01db['mediaSource']['addSourceBuffer'](_0xfd01db['spotArray'][_0x7dc459]['mimeType'] + ';\x20codecs=\x22' + _0xfd01db['spotArray'][_0x7dc459]['codecs'] + '\x22');
            _0xfd200b['addEventListener']('updateend', _0x2f0338),
            _0xfd200b['addEventListener']('abort', _0x735a34),
            _0xfd200b['addEventListener']('error', _0x2ba73b),
            _0xfd01db['buffers']['push'](_0xfd200b);
        }
        var _0x4b770e = _0xfd01db['spotArray'][_0xfd01db['bufferIndex']]['chunks']['shift']();
        _0xfd01db['buffers'][_0xfd01db['bufferIndex']]['appendBuffer'](_0x4b770e['data']);
    }
    function _0x59cfce() {}
    function _0x20d0bd() {
        println('[MSE]\x20opening\x20media\x20source'),
        _0xfd01db['armed'] = !![],
        _0xfd01db['breakIndex'] = 0x0,
        _0xfd01db['started'] = ![],
        _0xfd01db['completed'] = ![],
        _0xfd01db['loadedDataReceived'] = ![];
        var _0x4465f3 = document['getElementById']('spot-player');
        !_0x4465f3 ? _0x4465f3 = $MISC['html2Element']('<video\x20id=\x22spot-player\x22\x20style=\x22position:\x20absolute;\x20width:\x201280px;\x20height:\x20720px;\x20visibility:\x20hidden\x22></video>') : _0x4465f3['style']['visibility'] = 'hidden';
        _0x4465f3['addEventListener']('loadedmetadata', _0x428533),
        _0x4465f3['addEventListener']('loadeddata', _0x1e4ff3),
        _0x4465f3['addEventListener']('canplay', _0x5da538),
        _0x4465f3['addEventListener']('play', _0x570a37),
        _0x4465f3['addEventListener']('timeupdate', _0x1fb8f0),
        _0x4465f3['addEventListener']('ended', _0x3003fb),
        _0x4465f3['addEventListener']('error', _0xc7a181),
        _0xfd01db['video'] = _0x4465f3;
        var _0x567bbf = new MediaSource();
        _0x567bbf['addEventListener']('sourceopen', _0x5c716d),
        _0x567bbf['addEventListener']('sourceclose', _0x59cfce),
        _0xfd01db['mediaSource'] = _0x567bbf,
        _0x4465f3['src'] = URL['createObjectURL'](_0x567bbf),
        document['body']['insertBefore'](_0x4465f3, document['getElementById']('video'));
    }
    function _0x1aa26b() {
        _0x40a795(),
        _0xfd01db['started'] = ![],
        _0xfd01db['completed'] = ![],
        _0xfd01db['loadedDataReceived'] = ![],
        _0xfd01db['playing'] = ![],
        _0xfd01db['aborted'] = ![],
        _0xfd01db['currentTime'] = 0x0,
        delete _0xfd01db['startTime'],
        delete _0xfd01db['spotArray'];
        if (_0xfd01db['buffers']) {
            for (var _0x4903e3 = 0x0; _0x4903e3 < _0xfd01db['buffers']['length']; _0x4903e3++) {
                _0xfd01db['buffers'][_0x4903e3]['removeEventListener']('updateend', _0x2f0338),
                _0xfd01db['buffers'][_0x4903e3]['removeEventListener']('abort', _0x735a34),
                _0xfd01db['buffers'][_0x4903e3]['removeEventListener']('error', _0x2ba73b);
            }
            _0xfd01db['buffers']['length'] = 0x0;
        }
        _0xfd01db['mediaSource']['removeEventListener']('sourceopen', _0x5c716d),
        _0xfd01db['mediaSource']['removeEventListener']('sourceclose', _0x59cfce),
        delete _0xfd01db['mediaSource'],
        _0xfd01db['video']['removeEventListener']('loadedmetadata', _0x428533),
        _0xfd01db['video']['removeEventListener']('loadeddata', _0x1e4ff3),
        _0xfd01db['video']['removeEventListener']('canplay', _0x5da538),
        _0xfd01db['video']['removeEventListener']('play', _0x570a37),
        _0xfd01db['video']['removeEventListener']('timeupdate', _0x1fb8f0),
        _0xfd01db['video']['removeEventListener']('ended', _0x3003fb),
        _0xfd01db['video']['removeEventListener']('error', _0xc7a181),
        _0xfd01db['video']['src'] = '',
        _0xfd01db['armed'] = ![],
        println('[MSE]\x20closed\x20media\x20source');
    }
    function _0x91478b() {
        if (!window['oipfObjectFactory'])
            return {
                'ok': ![],
                'error': 'missing\x20OIPF\x20factory'
            };
        if ($DEVICE['userAgentInfo']['version'] < '1.6.1')
            return {
                'ok': ![],
                'error': 'hbbTv\x20version\x20not\x20supported'
            };
        var _0xac4020 = document['querySelector']('object[type=\x22application/oipfCapabilities\x22]');
        if (!_0xac4020) {
            oipfObjectFactory['isObjectSupported']('application/oipfCapabilities') && (_0xac4020 = oipfObjectFactory['createCapabilitiesObject']());
            if (!_0xac4020)
                return {
                    'ok': ![],
                    'error': 'missing\x20configuration\x20object'
                };
        }
        _0xac4020 = _0xac4020['xmlCapabilities'];
        if (!_0xac4020)
            return {
                'ok': ![],
                'error': 'missing\x20xmlCapabilities\x20field'
            };
        _0xac4020 = _0xac4020['documentElement']['getElementsByTagName']('ta');
        if (!_0xac4020 || !_0xac4020['length'])
            return {
                'ok': ![],
                'error': 'ta\x20tag\x20not\x20found'
            };
        for (var _0x3416de = 0x0; _0x3416de < _0xac4020['length']; _0x3416de++) {
            if (_0xac4020[_0x3416de]['getAttribute']('GOPIndependentSwitchToBroadcast') === 'true') {
                if (!oipfObjectFactory['isObjectSupported']('application/hbbtvMediaSynchroniser'))
                    return {
                        'ok': ![],
                        'error': 'media\x20sync\x20not\x20supported'
                    };
                if (!oipfObjectFactory['isObjectSupported']('application/hbbtvMediaSwitcher'))
                    return {
                        'ok': ![],
                        'error': 'media\x20fast\x20switch\x20api\x20not\x20supported'
                    };
                var _0x20d315 = _0xac4020[_0x3416de]['getElementsByTagName']('profile')
                  , _0xa4a504 = ![]
                  , _0x3c0d51 = ![];
                if (_0x20d315)
                    for (var _0x143ed1 = 0x0; _0x143ed1 < _0x20d315['length']; _0x143ed1++) {
                        if (!_0x20d315[_0x143ed1])
                            continue;
                        if (_0x20d315[_0x143ed1]['textContent'] === _0x59e793)
                            _0xa4a504 = !![];
                        else {
                            if (_0x20d315[_0x143ed1]['textContent'] === _0x4848f4)
                                _0x3c0d51 = !![];
                        }
                    }
                return {
                    'ok': !![],
                    'double': _0xa4a504,
                    'single': _0x3c0d51
                };
            }
        }
        return {
            'ok': ![],
            'error': 'insufficient\x20resources'
        };
    }
    function _0x1f9bc7(_0x1413de) {
        var _0x2b759d = _0x1413de['currentChannel'];
        if (_0x2b759d)
            return _0x5d987c + _0x2b759d['majorChannel'];
    }
    function _0xc066b7(_0x407216, _0x10c513) {
        _0x10c513 = _0x10c513 || {};
        var _0x3b942c = _0x407216['nodeName'], _0x3654aa = _0x407216['attributes'], _0x5edc84 = _0x407216['childNodes'], _0x6f9462, _0x4c7d53, _0x3ce527;
        _0x10c513[_0x3b942c] === undefined ? _0x6f9462 = _0x10c513[_0x3b942c] = {} : (_0x6f9462 = {},
        Array['isArray'](_0x10c513[_0x3b942c]) ? _0x10c513[_0x3b942c]['push'](_0x6f9462) : _0x10c513[_0x3b942c] = [_0x10c513[_0x3b942c], _0x6f9462]);
        for (_0x4c7d53 = 0x0; _0x4c7d53 < _0x3654aa['length']; _0x4c7d53++) {
            _0x6f9462[_0x3654aa[_0x4c7d53]['name']] = _0x3654aa[_0x4c7d53]['value'];
        }
        if (_0x407216['nodeType'] === Node['ELEMENT_NODE'])
            for (_0x4c7d53 = 0x0; _0x4c7d53 < _0x5edc84['length']; _0x4c7d53++) {
                if (_0x5edc84[_0x4c7d53]['nodeType'] === Node['ELEMENT_NODE'])
                    _0xc066b7(_0x5edc84[_0x4c7d53], _0x6f9462);
                else
                    _0x5edc84[_0x4c7d53]['nodeType'] === Node['TEXT_NODE'] ? (_0x3ce527 = _0x5edc84[_0x4c7d53]['nodeValue'],
                    typeof _0x3ce527 === 'string' && (_0x3ce527 = _0x3ce527['trim']()) && (_0x6f9462['_text_'] = _0x3ce527)) : console['warn'](_0x5edc84[_0x4c7d53]['nodeName'], _0x5edc84[_0x4c7d53]['nodeType']);
            }
        return _0x10c513;
    }
    function _0x507c45(_0x584dac) {
        var _0x45f1c4 = _0x584dac['match'](/^.*\//);
        return _0x45f1c4[0x0];
    }
    function _0x55bac6(_0x3888db) {
        if (_0x3888db['length']) {
            var _0x14e900, _0x124e05 = 0x0, _0x35c854, _0x34bacb;
            for (_0x35c854 = 0x0; _0x35c854 < _0x3888db['length']; _0x35c854++) {
                _0x34bacb = parseInt(_0x3888db[_0x35c854]['bandwidth'], 0xa),
                _0x34bacb > _0x124e05 && (_0x124e05 = _0x34bacb,
                _0x14e900 = _0x3888db[_0x35c854]);
            }
            return _0x14e900;
        } else
            return _0x3888db;
    }
    function _0xbc27a(_0x2279ce, _0x4f65dc) {
        var _0x11145d, _0x25cc9f, _0x2abbc2, _0x115e9f, _0x305a59, _0xb5d28b, _0xe89a0;
        if (_0x2279ce['SegmentTemplate']) {
            _0x11145d = _0x2279ce['SegmentTemplate'],
            _0x25cc9f = parseInt(_0x11145d['duration']) / parseInt(_0x11145d['timescale']),
            _0x2abbc2 = parseInt(_0x11145d['startNumber']),
            _0x115e9f = _0x55bac6(_0x2279ce['Representation']),
            _0x305a59 = [],
            _0x305a59['push']({
                'type': 'init',
                'url': _0x11145d['initialization']['replace']('$RepresentationID$', _0x115e9f['id'])
            }),
            _0xb5d28b = _0x4f65dc / _0x25cc9f;
            for (_0xe89a0 = 0x0; _0xe89a0 < _0xb5d28b; _0xe89a0++) {
                _0x305a59['push']({
                    'type': 'media',
                    'url': _0x11145d['media']['replace']('$RepresentationID$', _0x115e9f['id'])['replace']('$Number$', (_0x2abbc2 + _0xe89a0)['toString']())
                });
            }
            return {
                'mimeType': _0x115e9f['mimeType'],
                'codecs': _0x115e9f['codecs'],
                'chunks': _0x305a59
            };
        }
    }
    function _0x2e19e9(_0x145a28, _0x4d3a5a) {
        var _0x5468a3 = new DOMParser()
          , _0x3f2ea2 = _0x5468a3['parseFromString'](_0x145a28, 'application/xml');
        _0x3f2ea2 = _0x3f2ea2['documentElement'];
        if (_0x3f2ea2['tagName'] === 'MPD')
            return _0xc066b7(_0x3f2ea2, {
                'url': _0x4d3a5a,
                'type': 'application/dash+xml',
                'date': Date['now']()
            });
    }
    function _0xd67be8(_0x10f10a, _0x18d116) {
        function _0x1035c4(_0x9211b8) {
            var _0x20af1a = (_0x9211b8['status'] / 0x64 | 0x0) !== 0x2;
            return {
                'code': _0x9211b8['status'],
                'errorFlag': _0x20af1a,
                'text': _0x20af1a ? _0x9211b8['statusText'] : _0x9211b8['response'],
                'type': _0x9211b8['getResponseHeader']('Content-Type'),
                'url': _0x9211b8['responseURL']
            };
        }
        var _0x351367 = new XMLHttpRequest();
        _0x351367['open']('GET', _0x10f10a),
        _0x351367['responseType'] = 'arraybuffer',
        _0x351367['send'](null),
        _0x351367['onload'] = function() {
            _0x18d116(_0x1035c4(this));
        }
        ,
        _0x351367['onerror'] = function() {
            _0x18d116(_0x1035c4(this));
        }
        ;
    }
    function _0x375d77(_0x4d21c0, _0x5db695, _0x424400) {
        var _0x420f8d = _0x4d21c0['chunks']['length'];
        for (var _0x3e98a6 = 0x0; _0x3e98a6 < _0x4d21c0['chunks']['length']; _0x3e98a6++) {
            (function(_0x1aa74c, _0x498751) {
                _0xd67be8(_0x424400 + _0x1aa74c['url'], function(_0xdeb0f9) {
                    _0x1aa74c['status'] = _0xdeb0f9['errorFlag'] ? 'fail' : 'ok',
                    _0x1aa74c['index'] = _0x498751;
                    if (!_0xdeb0f9['errorFlag'])
                        _0x1aa74c['data'] = _0xdeb0f9['text'];
                    println('[TA]\x20' + _0x498751 + '\x20|\x20' + _0x4d21c0['mimeType'] + '\x20|\x20' + _0xdeb0f9['url'] + '\x20|\x20' + _0x1aa74c['status'], _0xdeb0f9['errorFlag'] ? 'err' : 'inf'),
                    _0x420f8d--;
                    if (_0x420f8d === 0x0)
                        _0x5db695(_0x4d21c0);
                });
            }(_0x4d21c0['chunks'][_0x3e98a6], _0x3e98a6));
        }
    }
    function _0x9b2253(_0xfbd1b1, _0x18e0c2) {
        println('[TA]\x20download\x20break\x20' + _0xfbd1b1),
        _0xfd01db['downloading'] = !![],
        $Net['http'](_0xfbd1b1)['get']({
            'resolve': function(_0x50f313) {
                if (!_0x50f313['errorFlag']) {
                    var _0x290ffd = _0x2e19e9(_0x50f313['text'], _0xfbd1b1), _0x1a123a = _0x290ffd['MPD']['Period']['AdaptationSet'], _0x8cae55 = _0x507c45(_0x290ffd['url']), _0x3c6630 = _0x1a123a['length'], _0x1cc25e = {}, _0x34fbcd = 0x0, _0x4460e4, _0x169a8d;
                    for (_0x4460e4 = 0x0; _0x4460e4 < _0x3c6630; _0x4460e4++) {
                        _0x169a8d = _0xbc27a(_0x1a123a[_0x4460e4], 0xf),
                        _0xfd01db['currentBreak'] === 0x0 && (_0xfd01db['logic'][_0x169a8d['mimeType']] = {
                            'ready': ![],
                            'defaultSampleDuration': 0x0,
                            'earliestPresentationTime': 0x0,
                            'baseMediaDecodeTime': 0x0,
                            'total': 0x0
                        }),
                        println('[TA]\x20downloading\x20spot\x20#' + (_0x4460e4 + 0x1) + '\x20' + _0x169a8d['mimeType']),
                        _0x375d77(_0x169a8d, function(_0x21e0e0) {
                            _0xfd01db['downloading'] = ![],
                            println('[TA]\x20downloaded\x20' + _0x21e0e0['mimeType'] + ',\x20segments:\x20' + _0x21e0e0['chunks']['length']),
                            _0x1cc25e[_0x21e0e0['mimeType']] = _0x21e0e0,
                            _0x34fbcd++,
                            _0x34fbcd === _0x3c6630 && (_0x1cc25e = [_0x1cc25e['video/mp4'], _0x1cc25e['audio/mp4']],
                            _0x18e0c2(_0x1cc25e));
                        }, _0x8cae55);
                    }
                    _0xfd01db['currentBreak']++;
                } else
                    println('failed\x20to\x20download\x20spot:\x20' + _0x50f313['code'], 'err');
            },
            'reject': function() {
                println('failed\x20to\x20download\x20spot', 'err');
            }
        });
    }
    function _0x2b78a1(_0x102b95, _0x307a6d) {
        if (_0xc25b27 && _0xc25b27[_0x102b95])
            for (var _0x22d54a = 0x0; _0x22d54a < _0xc25b27[_0x102b95]['length']; _0x22d54a++) {
                _0xc25b27[_0x102b95][_0x22d54a](_0x307a6d);
            }
    }
    function _0x965996(_0x1a97f6) {
        _0x1a97f6['status'] === 'trigger' ? _0x1a97f6['name'] !== _0x2a395c ? println('[TA]\x20stream\x20event\x20received\x20' + _0x1a97f6['name'] + '\x20but\x20should\x20be\x20' + _0x2a395c, 'wrn') : _0x2b78a1('echo', _0x1a97f6) : println('[TA]\x20' + _0x1a97f6['status'], 'err');
    }
    function _0x913c88(_0x1eb2d9) {
        if (!_0x1eb2d9 || !_0x425ee9)
            return;
        var _0x334cfb = _0x1eb2d9['onid'] + '.' + _0x1eb2d9['tsid'] + '.' + _0x1eb2d9['sid'];
        if (_0x334cfb !== _0x5ad55f) {
            _0x5ad55f = _0x334cfb;
            if (_0x1eb2d9['onid']) {
                if (document['getElementById']('video')['playState'] === 0x3) {
                    println('[TA]\x20broadcast\x20STOPPED,\x20skip');
                    return;
                }
                var _0x314c03 = $StreamEventManager['request'](_0x425ee9, _0x512414, _0x2a395c);
                if (_0x314c03['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
                    _0x166ce4 = !![];
                println('[TA]\x20stream\x20event\x20resource\x20' + _0x314c03['text'], _0x166ce4 ? 'out' : 'wrn');
                if (!!_0x2e7a2a)
                    _0x2e7a2a['onChannelChanged'](_0x1eb2d9);
            }
            _0xfd01db && _0xfd01db['playing'] && (println('[TA]\x20stop\x20current\x20break'),
            _0xfd01db['video']['pause'](),
            _0x1aa26b());
        }
    }
    function _0x54acae(_0xbab369, _0x5347e9) {
        if (_0xbab369 === $StreamEventManager['RESOURCE_DATA'])
            _0x965996(_0x5347e9);
        else {
            println('[TA]\x20stream\x20event\x20resource:\x20' + _0x5347e9);
            if (_0xbab369 === $StreamEventManager['RESOURCE_ADQUIRED'])
                _0x166ce4 = !![];
            else
                (_0xbab369 === $StreamEventManager['RESOURCE_RELEASED'] || _0xbab369 === $StreamEventManager['RESOURCE_LOST']) && (_0x166ce4 = ![]);
        }
    }
    function _0x14195c(_0x1bf951) {
        if (_0x425ee9)
            return;
        _0x425ee9 = $StreamEventManager['sign'](0x1, _0x54acae);
        var _0x24d984 = $VideoManager['getInstance']()['_video']['currentChannel'];
        if (!_0x24d984)
            return;
        _0x5ad55f = _0x24d984['onid'] + '.' + _0x24d984['tsid'] + '.' + _0x24d984['sid'],
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](_0x913c88);
        var _0x4cf3a3 = _0x91478b();
        println('[TA]\x20spot\x20replacement:\x20' + (_0x4cf3a3['ok'] ? '' : 'NOT\x20') + 'SUPPORTED' + (_0x4cf3a3['error'] && '\x20|\x20' + _0x4cf3a3['error'] || ''), _0x4cf3a3['error'] ? 'wrn' : 'inf'),
        _0xfd01db = {
            'support': _0x4cf3a3,
            'useSwitch': $DEVICE['userAgentInfo']['vendorName'] === 'Philips',
            'currentBreak': 0x0,
            'currentTime': 0x0,
            'logic': {}
        },
        _0x569800()['init']();
        if (_0x1bf951)
            _0x19f317();
    }
    function _0x19f317() {
        if (_0x425ee9 && !_0x166ce4) {
            var _0x29084 = $StreamEventManager['request'](_0x425ee9, _0x512414, _0x2a395c);
            if (_0x29084['code'] === $StreamEventManager['RESOURCE_ADQUIRED'])
                _0x166ce4 = !![];
            println('[TA]\x20stream\x20event\x20resource\x20' + _0x29084['text'], _0x166ce4 ? 'out' : 'wrn');
        }
    }
    function _0x255cdc() {
        _0x425ee9 && _0x166ce4 && $StreamEventManager['release'](_0x425ee9);
    }
    function _0x4ba71(_0x5fcdce, _0x4904f1) {
        if (typeof _0x4904f1 !== 'function')
            return;
        if (!_0xc25b27)
            _0xc25b27 = {};
        if (!_0xc25b27[_0x5fcdce])
            _0xc25b27[_0x5fcdce] = [];
        _0xc25b27[_0x5fcdce]['push'](_0x4904f1);
    }
    function _0x59eb4d(_0x3e19d1, _0x5f4289, _0xcaa022, _0x5c803c) {
        _0x3e19d1 = _0x3e19d1 * 0x3e8;
        var _0x20fa65 = [{
            'r': 0.25,
            'n': 'firstQuartile'
        }, {
            'r': 0.5,
            'n': 'midpoint'
        }, {
            'r': 0.75,
            'n': 'thirdQuartile'
        }], _0x50a063 = function(_0x376064, _0x3c62b7, _0xe9ad5b) {
            var _0x2a4f14 = new Image();
            _0x2a4f14['src'] = _0x376064,
            _0x2a4f14['onload'] = function() {
                console['log']('[VAST]\x20ok:' + _0x3c62b7 + '\x20at\x20' + _0xe9ad5b);
            }
            ,
            _0x2a4f14['onerror'] = function() {
                console['log']('[VAST]\x20err:' + _0x3c62b7 + '\x20at\x20' + _0xe9ad5b);
            }
            ;
        }, _0x338284 = function(_0x1508c5, _0x2c9fc0) {
            setTimeout(function() {
                for (var _0x386126 = 0x0; _0x386126 < _0xcaa022['length']; _0x386126++) {
                    _0xcaa022[_0x386126] && _0xcaa022[_0x386126]['name'] === _0x1508c5 && _0x50a063(_0xcaa022[_0x386126]['url'], _0x1508c5, _0x2c9fc0);
                }
            }, 0xa);
        }, _0x58931a = 0x0, _0x4a6f20, _0x6bd7ce = function() {
            var _0x29ed2e = 0x0
              , _0x105d62 = 0x0
              , _0x1eaa52 = performance['now']();
            _0x4a6f20 = setInterval(function() {
                _0x58931a === 0x0 ? _0x338284('start', _0x58931a) : (_0x105d62 = _0x58931a / _0x3e19d1,
                _0x29ed2e < _0x20fa65['length'] && _0x105d62 >= _0x20fa65[_0x29ed2e]['r'] && (_0x338284(_0x20fa65[_0x29ed2e]['n'], _0x58931a),
                _0x29ed2e += 0x1));
                var _0x481d60 = performance['now']()
                  , _0x45cbe6 = _0x481d60 - _0x1eaa52;
                _0x1eaa52 = _0x481d60,
                _0x58931a += _0x45cbe6,
                _0x58931a >= _0x3e19d1 && (clearInterval(_0x4a6f20),
                _0x5c803c('ended'),
                _0x338284('complete', _0x58931a));
            }, 0xfa),
            _0x5c803c('start');
            for (var _0x59e6ba = 0x0; _0x59e6ba < _0x5f4289['length']; _0x59e6ba++) {
                _0x50a063(_0x5f4289[_0x59e6ba], 'impressions', _0x58931a);
            }
        };
        return {
            'isRunning': function() {
                return !!_0x4a6f20;
            },
            'getTime': function() {
                return _0x58931a / 0x3e8;
            },
            'start': _0x6bd7ce,
            'stop': function() {
                if (!_0x4a6f20)
                    return;
                clearInterval(_0x4a6f20),
                _0x4a6f20 = null,
                _0x5c803c('stopped');
            }
        };
    }
    function _0x481330(_0x56f7ba) {
        _0x56f7ba = _0x56f7ba || 'https://ad.sxp.smartclip.net/select?type=dyn&ple=test.atv.de.smartclip~~1x1&fwd_sz=1x1&cu_env=test&fmt=all&cu_demo=rai&hv=&rnd=53057532&uuid=FB8C020A-6F29-F262-0E00-6FAF02AA223C&ang_wfmt=1280x720&opt=in&wlist=',
        println('url:' + _0x56f7ba),
        $Player['vastparser']['parseURL'](_0x56f7ba, function(_0x4c16c0, _0x10232a) {
            if (_0x10232a)
                println('error\x20retrieving\x20l-shape\x20banner', 'err');
            else {
                println('found\x20vast\x20object\x20with\x20' + _0x4c16c0['ads']['length'] + '\x20ads');
                if (!_0x4c16c0['ads']['length'])
                    return;
                var _0x26aa66 = _0x4c16c0['ads']['shift'](), _0x14116b, _0x24e714, _0x36ff56;
                if (!_0x26aa66)
                    return;
                _0x14116b = _0x26aa66['getNonLinear'] && _0x26aa66['getNonLinear']();
                if (!_0x14116b || !_0x14116b['nonLinear'] || !_0x14116b['nonLinear']['length'])
                    return;
                _0x24e714 = _0x14116b['events'],
                _0x14116b = _0x14116b['nonLinear'][0x0],
                _0x36ff56 = _0x14116b['params'];
                if (!_0x36ff56)
                    return;
                if (_0x36ff56['adformat'] === 'xxl') {
                    var _0x446d87 = $SceneTA['getInstance']()
                      , _0x4f1c27 = _0x59eb4d($Player['utils']['toSeconds'](_0x14116b['minSuggestedDuration']), _0x26aa66['getImpressions'](), _0x24e714, function(_0x595f0e) {
                        if (_0x595f0e === 'ended')
                            _0x446d87['_visible'] = ![];
                    });
                    _0x4f1c27['actionObj'] = {
                        'ms': _0x36ff56['msurl'],
                        'action': _0x36ff56['ctaction']
                    };
                    var _0x2ebcf3 = _0x446d87['addPreloadListener'](function() {
                        _0x4f1c27['start'](),
                        _0x446d87['removePreloadListener'](_0x2ebcf3);
                    });
                    _0x446d87['setData'](_0x36ff56['creativeurl'], {
                        'width': parseInt(_0x36ff56['width'], 0xa),
                        'height': parseInt(_0x36ff56['height'], 0xa)
                    }, _0x4f1c27),
                    _0x446d87['_visible'] = !![];
                }
            }
        });
    }
    function _0x2ae958(_0x340e50) {
        _0xfd01db['watermarks'] = [];
        for (var _0xd50c82 = 0x0, _0x483392; _0xd50c82 < _0x340e50['watermarks']['length']; _0xd50c82++) {
            if (_0x340e50['watermarks'][_0xd50c82]['type'] === 'img')
                _0xfd01db['watermarks']['push'](_0xd50c82),
                _0x483392 = $MISC['html2Element']('<img\x20id=\x22_ta_spwk' + _0xd50c82 + '\x22\x20' + 'src=\x22' + _0x340e50['watermarks'][_0xd50c82]['name'] + '\x22\x20alt=\x22\x22\x20' + 'width=\x22' + _0x340e50['watermarks'][_0xd50c82]['width'] + '\x22\x20' + 'height=\x22' + _0x340e50['watermarks'][_0xd50c82]['height'] + '\x22\x20style=\x22position:\x20absolute;\x20top:\x20' + _0x340e50['watermarks'][_0xd50c82]['y'] + 'px;\x20' + 'left:\x20' + _0x340e50['watermarks'][_0xd50c82]['x'] + 'px\x22/>');
            else
                _0x340e50['watermarks'][_0xd50c82]['type'] === 'label' && (_0xfd01db['watermarks']['push'](_0xd50c82),
                _0x483392 = $MISC['html2Element']('<div\x20id=_ta_spwk' + _0xd50c82 + '\x20style=\x22position:\x20absolute;\x20background-color:\x20yellow;' + 'left:\x20' + _0x340e50['watermarks'][_0xd50c82]['x'] + 'px;\x20' + 'top:\x20' + _0x340e50['watermarks'][_0xd50c82]['y'] + 'px;\x22\x22>' + _0x340e50['watermarks'][_0xd50c82]['text'] + '</div>'));
            if (_0x483392)
                document['body']['insertBefore'](_0x483392, document['getElementById']('mainFrame'));
        }
    }
    function _0x40a795() {
        if (_0xfd01db['watermarks']) {
            for (var _0x2b8a41 = 0x0, _0x839607; _0x2b8a41 < _0xfd01db['watermarks']['length']; _0x2b8a41++) {
                _0x839607 = document['getElementById']('_ta_spwk' + _0xfd01db['watermarks'][_0x2b8a41]);
                if (_0x839607)
                    _0x839607['parentNode']['removeChild'](_0x839607);
            }
            _0xfd01db['watermarks'] = null;
        }
    }
    function _0x5bbac4() {
        _0xfd01db['aborted'] = ![],
        println('[TA]\x20start\x20sport\x20replacement', 'inf'),
        _0x9b2253(_0x4b2289, function(_0x52f893) {
            if (_0xfd01db['aborted'])
                return;
            for (var _0x45383c = 0x0; _0x45383c < _0x52f893['length']; _0x45383c++) {
                for (var _0x494e41 = 0x0; _0x494e41 < _0x52f893[_0x45383c]['chunks']['length']; _0x494e41++) {
                    if (_0x52f893[_0x45383c]['chunks'][_0x494e41]['status'] !== 'ok') {
                        println('[TA]\x20download\x20failed', 'err');
                        return;
                    }
                }
            }
            _0xfd01db['spotArray'] = _0x52f893,
            _0xfd01db['startTime'] = 0x96,
            _0x20d0bd();
        });
    }
    function _0x183cf2() {
        if (!_0xfd01db || !_0xfd01db['support'] || !_0xfd01db['support']['ok'])
            return;
        _0xfd01db['aborted'] = !![];
        if (_0xfd01db['started']) {
            println('[TA]\x20abort\x20sport\x20replacement', 'wrn');
            if (_0xfd01db['playing'])
                _0xfd01db['video']['pause']();
            _0x1aa26b();
        }
    }
    var _0x2e7a2a;
    function _0x3588cf() {
        function _0x448f96(_0x7d0b54) {
            return (_0x7d0b54 < 0xa ? '0' : '') + _0x7d0b54;
        }
        function _0x3b24d1() {
            var _0x4b2454 = new Date();
            return _0x4b2454['getFullYear']() + '-' + _0x448f96(_0x4b2454['getMonth']() + 0x1) + '-' + _0x448f96(_0x4b2454['getDate']()) + '\x20' + _0x448f96(_0x4b2454['getHours']()) + ':' + _0x448f96(_0x4b2454['getMinutes']()) + ':' + _0x448f96(_0x4b2454['getSeconds']());
        }
        function _0x4d8efc() {
            var _0x4adf34 = '';
            for (var _0x47acbf = 0x0; _0x47acbf < 0x20; _0x47acbf++) {
                var _0x5b5e2b = Math['random']() * 0x10 | 0x0;
                (_0x47acbf === 0x8 || _0x47acbf === 0xc || _0x47acbf === 0x10 || _0x47acbf === 0x14) && (_0x4adf34 += '-'),
                _0x4adf34 += (_0x47acbf === 0xc ? 0x4 : _0x47acbf === 0x10 ? _0x5b5e2b & 0x3 | 0x8 : _0x5b5e2b)['toString'](0x10);
            }
            return _0x4adf34;
        }
        function _0x9df17a() {
            var _0x2410b8 = $StorageManager['getInstance']()['read']('hbbtv.raiplay.rdid');
            return !_0x2410b8 && (_0x2410b8 = _0x4d8efc(),
            $StorageManager['getInstance']()['write']('hbbtv.raiplay.rdid', _0x2410b8)),
            _0x2410b8;
        }
        function _0x51adc7(_0x2d43d0, _0x5ce980) {
            function _0x8d43c9(_0x213355, _0x431541) {
                var _0x3ef32c = _0x431541['_nowMs']
                  , _0x523c6a = [];
                for (var _0x488942 = 0x0; !!_0x213355 && _0x488942 < _0x213355['length']; _0x488942++) {
                    if (!!_0x213355[_0x488942]) {
                        var _0x35d4a9 = _0x431541['_nowDate'];
                        _0x35d4a9['setFullYear'](parseInt(_0x213355[_0x488942]['day']['substring'](0x6, 0xa), 0xa), parseInt(_0x213355[_0x488942]['day']['substring'](0x3, 0x5), 0xa) - 0x1, parseInt(_0x213355[_0x488942]['day']['substring'](0x0, 0x2), 0xa)),
                        _0x35d4a9['setHours'](parseInt(_0x213355[_0x488942]['hour']['substring'](0x0, 0x2), 0xa), parseInt(_0x213355[_0x488942]['hour']['substring'](0x3, 0x5), 0xa), 0x0),
                        _0x35d4a9 = _0x35d4a9['getTime']();
                        var _0x1b5448 = (parseInt(_0x213355[_0x488942]['duration']['substring'](0x0, 0x2), 0xa) * 0xe10 + parseInt(_0x213355[_0x488942]['duration']['substring'](0x3, 0x5), 0xa) * 0x3c + parseInt(_0x213355[_0x488942]['duration']['substring'](0x6, 0x8), 0xa)) * 0x3e8;
                        if (_0x3ef32c < _0x35d4a9 + _0x1b5448)
                            _0x523c6a['push']({
                                's': _0x35d4a9,
                                'e': _0x35d4a9 + _0x1b5448,
                                'g': _0x213355[_0x488942]['dfp'] && _0x213355[_0x488942]['dfp']['escaped_genre_name'],
                                'n': _0x213355[_0x488942]['dfp'] && _0x213355[_0x488942]['dfp']['escaped_name'],
                                't': _0x213355[_0x488942]['dfp'] && _0x213355[_0x488942]['dfp']['escaped_typology_name']
                            });
                    }
                }
                return _0x523c6a;
            }
            var _0x5decf7 = {};
            try {
                var _0x449583 = JSON['parse'](_0x2d43d0);
                _0x5decf7['date'] = _0x449583['date'],
                _0x5decf7['epg'] = [];
                for (var _0xcdd3fe = 0x0; _0xcdd3fe < _0x449583['epg']['length']; _0xcdd3fe++) {
                    _0x5decf7['epg']['push']({
                        'channel': _0x449583['epg'][_0xcdd3fe]['channel']['toLowerCase'](),
                        'events': _0x8d43c9(_0x449583['epg'][_0xcdd3fe]['events'], _0x5ce980)
                    });
                }
                return _0x5decf7;
            } catch (_0x83d953) {
                println('[EXAUDI]\x20error\x20parsing\x20json', 'err');
            }
        }
        var _0x36e930;
        function _0x3d7ebb(_0x5a2af6, _0x1f1ae5) {
            var _0x352943 = $TimeManager['getInstance']()
              , _0x5110e9 = _0x352943['_nowDate']
              , _0x4bd2c6 = !_0x1f1ae5 && $StorageManager['getInstance']()['read']('hbbtv.tvhub.epglite');
            if (!!_0x4bd2c6)
                try {
                    _0x36e930 = JSON['parse'](_0x4bd2c6),
                    _0x36e930['date'] !== _0x448f96(_0x5110e9['getDate']()) + '-' + _0x448f96(_0x5110e9['getMonth']() + 0x1) + '-' + _0x5110e9['getFullYear']() ? (println('[EXAUDI]\x20stale\x20epg', 'wrn'),
                    _0x36e930 = null) : println('[EXAUDI]\x20using\x20lite\x20epg\x20from\x20cache');
                } catch (_0x27b5d3) {
                    println('[EXAUDI]\x20error\x20loading\x20epg\x20lite', 'err');
                }
            if (!_0x36e930) {
                var _0x3c1b7e = new Date(_0x352943['_nowMs'] - 0x5265c00)
                  , _0x118a77 = 'https://www.raiplay.it/palinsesto/light/[previous_date]/[current_date]/canali.json'['replace']('[previous_date]', _0x448f96(_0x3c1b7e['getDate']()) + '-' + _0x448f96(_0x3c1b7e['getMonth']() + 0x1) + '-' + _0x3c1b7e['getFullYear']())['replace']('[current_date]', _0x448f96(_0x5110e9['getDate']()) + '-' + _0x448f96(_0x5110e9['getMonth']() + 0x1) + '-' + _0x5110e9['getFullYear']());
                println('[EXAUDI]\x20downloading\x20epg...'),
                $Net['http'](_0x118a77)['get']({
                    'resolve': function(_0x35017b) {
                        !_0x35017b['errorFlag'] && (_0x36e930 = _0x51adc7(_0x35017b['text'], _0x352943),
                        $StorageManager['getInstance']()['write']('hbbtv.tvhub.epglite', JSON['stringify'](_0x36e930))),
                        _0x5a2af6(!!_0x36e930);
                    },
                    'reject': function(_0x1f3bc5) {
                        _0x5a2af6();
                    }
                });
            } else
                _0x5a2af6();
        }
        var _0x52f3c0 = 'https://tracker-stream.neodatagroup.com/pv?sid=2020&rnd={id_sessione}&uuid={@PPID}&ip={ip}&id={channelTagId}&ac=e&at={eventType}&av=true&de={device_brand}&dm={device_model}&df={device_model_family}&os={operating_system}&cd={cd}&ids={@PPID};ppid;rai&cl=1', _0x1e9156 = 0x3c, _0x2cbe0c = _0x4d8efc(), _0x56d6b6 = _0x9df17a(), _0x89c4c3 = 'start', _0x559c7a, _0x556fb9, _0xaa95db = {
            'rai\x201': 0x2e5a,
            'rai\x202': 0x2e5b,
            'rai\x203': 0x2e5c,
            'rai\x204': 0x2e5d,
            'rai\x205': 0x2e5e,
            'rai\x20movie': 0x2e5f,
            'rai\x20premium': 0x2e60,
            'rai\x20storia': 0x2e61,
            'rai\x20yoyo': 0x2e62,
            'rai\x20news\x2024': 0x2e63,
            'rai\x20sport': 0x2e64,
            'rai\x20gulp': 0x2e65,
            'rai\x20scuola': 0x2e66
        }, _0x55db06 = function(_0x5676e8, _0x41c510) {
            if (!!_0x41c510)
                switch (_0x5676e8) {
                case '{id_sessione}':
                    return _0x2cbe0c;
                case '{@PPID}':
                    return _0x56d6b6;
                case '{ip}':
                    break;
                case '{channelTagId}':
                    var _0x15c85d = $VideoManager['getInstance']()['_channelName']['noBOM']()['toLowerCase']();
                    if (_0x15c85d['indexOf']('rai\x20sport') === 0x0)
                        _0x15c85d = 'rai\x20sport';
                    else {
                        if (_0x15c85d['indexOf']('rai\x203') === 0x0)
                            _0x15c85d = 'rai\x203';
                        else {
                            var _0x3333b6 = _0x15c85d['indexOf']('hd');
                            _0x3333b6 > -0x1 && (_0x15c85d = _0x15c85d['substring'](0x0, _0x3333b6)['trim']());
                        }
                    }
                    return _0xaa95db[_0x15c85d] || '';
                case '{eventType}':
                    return _0x89c4c3;
                case '{device_brand}':
                    return $DEVICE['userAgentInfo']['vendorName'] || '';
                case '{device_model}':
                    return $DEVICE['userAgentInfo']['modelName'] || '';
                case '{device_model_family}':
                    return $DEVICE['userAgentInfo']['familyName'] || '';
                case '{operating_system}':
                    break;
                case '{cd}':
                    var _0x587cbc = [];
                    if (!!_0x41c510['n'])
                        _0x587cbc['push']('c|prgid_' + _0x41c510['n']);
                    if (!!_0x41c510['g'])
                        _0x587cbc['push']('c|prgcat_' + _0x41c510['g']);
                    if (!!_0x41c510['t'])
                        _0x587cbc['push']('c|prgtype_' + _0x41c510['t']);
                    _0x587cbc['push']('c|plat_' + (DELIVERY_FLAG === 0x0 ? 'DTH' : DELIVERY_FLAG === 0x2 ? 'DTT' : 'NET') + '-' + $MISC['getResolution']()),
                    _0x587cbc['push']('c|vers_' + $DEVICE['userAgentInfo']['specVersion'] + '-' + (_0xfd01db['support']['double'] ? 0x2 : _0xfd01db['support']['single'] ? 0x1 : 0x0));
                    return _0x587cbc['join'](',');
                default:
                    println('[EXAUDI]\x20unknown\x20parameter:\x20' + _0x5676e8, 'wrn');
                }
            return '';
        }, _0x11546b = function(_0x22d0c9) {
            var _0x5050c2 = _0x52f3c0
              , _0x2503b1 = _0x52f3c0['match'](/\{(.*?)}/g);
            if (_0x2503b1)
                for (var _0x5b7f19 = 0x0; _0x5b7f19 < _0x2503b1['length']; _0x5b7f19++)
                    _0x5050c2 = _0x5050c2['replace'](_0x2503b1[_0x5b7f19], encodeURIComponent(_0x55db06(_0x2503b1[_0x5b7f19], _0x22d0c9)));
            return _0x5050c2;
        };
        function _0xfae609() {
            _0x89c4c3 = 'start',
            _0x2916aa(),
            _0x556fb9 = setInterval(_0x2916aa, _0x1e9156 * 0x3e8);
        }
        function _0x2916aa() {
            if (!$StreamingService['isChannelLive']() || !!$StreamingService['getPlayer']()) {
                println('[EXAUDI]\x20not\x20a\x20broadcast\x20channel,\x20skip', 'wrn');
                return;
            }
            if (!_0x36e930 || !_0x559c7a) {
                println('[EXAUDI]\x20epg\x20not\x20available,\x20skip', 'wrn');
                return;
            }
            var _0x7cc87d = $TimeManager['getInstance']()['_nowMs'];
            while (_0x559c7a['length'] && _0x7cc87d > _0x559c7a[0x0]['e']) {
                _0x559c7a['shift']();
            }
            if (_0x559c7a['length'] === 0x0) {
                println('[EXAUDI]\x20no\x20more\x20events', 'wrn'),
                _0x36e930 = null,
                _0x3d7ebb(function(_0x28ac98) {
                    !!_0x28ac98 && _0x2916aa();
                }, !![]);
                return;
            }
            var _0x16958a = _0x11546b(_0x559c7a[0x0]);
            _0x89c4c3 = 'heartbeat';
            if (HBBTV_EMULATION)
                return;
            $Net['http'](_0x16958a)['get']({
                'resolve': function(_0x42632e) {
                    println('[EXAUDI]\x20' + _0x42632e['code'] + '\x20-\x20url:\x20' + _0x16958a, 'fne');
                },
                'reject': function(_0x13b446) {
                    println('[EXAUDI]\x20' + _0x13b446['code'] + '\x20-\x20url:\x20' + _0x16958a, 'wrn');
                }
            });
        }
        function _0xc140d2(_0x5021f4) {
            var _0x238996 = !!_0x5021f4 && _0x5021f4['name'];
            println('[EXAUDI]\x20channel\x20changed:\x20' + _0x238996);
            if (!_0x238996)
                return;
            _0x238996 = _0x238996['toLowerCase']();
            var _0x4769b7;
            if (_0x238996 === 'rai\x20sport\x20+\x20hd' || _0x238996 === 'rai\x20sport')
                _0x238996 = 'rai\x20sport\x20piu\x20hd';
            else {
                if (_0x238996['indexOf']('tgr') > -0x1)
                    _0x238996 = 'rai\x203';
                else {
                    if (_0x238996['indexOf']('\x20hd') > -0x1)
                        _0x4769b7 = _0x238996['indexOf']('\x20hd'),
                        _0x238996 = _0x238996['substring'](0x0, _0x4769b7);
                    else
                        _0x238996['indexOf']('\x20sd') > -0x1 && (_0x4769b7 = _0x238996['indexOf']('\x20sd'),
                        _0x238996 = _0x238996['substring'](0x0, _0x4769b7));
                }
            }
            for (var _0x265044 = 0x0; !!_0x36e930 && _0x265044 < _0x36e930['epg']['length']; _0x265044++) {
                if (_0x36e930['epg'][_0x265044]['channel'] === _0x238996) {
                    _0x559c7a = _0x36e930['epg'][_0x265044]['events'];
                    !!_0x556fb9 && (clearInterval(_0x556fb9),
                    _0x556fb9 = null);
                    _0xfae609();
                    return;
                }
            }
            println('[EXAUDI]\x20channel\x20not\x20' + _0x238996 + '\x20found,\x20abort!', 'err');
        }
        return {
            'init': function() {
                _0x3d7ebb(function() {
                    _0xc140d2($VideoManager['getInstance']()['_video']['currentChannel']);
                }
                ['bind'](this));
            },
            'onChannelChanged': _0xc140d2
        };
    }
    function _0x569800() {
        if (!_0x2e7a2a)
            _0x2e7a2a = _0x3588cf();
        return _0x2e7a2a;
    }
    return {
        'version': 0x7,
        'init': _0x14195c,
        'start': _0x19f317,
        'stop': _0x255cdc,
        'on': _0x4ba71,
        'isTASupported': function() {
            return _0xfd01db && _0xfd01db['support']['ok'];
        },
        'isOn': function() {
            return _0x425ee9 && _0x166ce4;
        },
        'loadCreativity': _0x481330,
        'spotReplacement': {
            'replace': _0x5bbac4,
            'abort': _0x183cf2,
            'testWK': function() {
                _0x2ae958({
                    'watermarks': [{
                        'type': 'img',
                        'name': 'resources/TA/rai.svg?v=1',
                        'x': 0x41,
                        'y': 0x25,
                        'width': 0x30,
                        'height': 0x30
                    }, {
                        'type': 'label',
                        'text': 'Pubblicità',
                        'x': 0x41,
                        'y': 0x55,
                        'width': 0x30,
                        'height': 0x30
                    }]
                });
            }
        }
    };
}()
  , pending = undefined
  , keyLock = ![];
pendingTask = [];
var $DEVICE = {
    'hbbTv': {
        'appManager': undefined,
        'init': function(_0x280964) {
            this['appManager'] = typeof _0x280964['getOwnerApplication'] === 'function' && _0x280964['getOwnerApplication'](document) || {
                'privateData': {
                    'keyset': {
                        'RED': 0x0,
                        'GREEN': 0x0,
                        'YELLOW': 0x0,
                        'BLUE': 0x0,
                        'NAVIGATION': 0x0,
                        'NUMERIC': 0x0,
                        'PLAY': 0x0,
                        'PAUSE': 0x0,
                        'STOP': 0x0,
                        'value': 0x0,
                        'maximumValue': 0x200,
                        'setValue': function(_0x2151a1) {
                            this['value'] = _0x2151a1;
                        }
                    }
                },
                'show': function() {
                    println('[Device.hbbTV]\x20app\x20running\x20on\x20a\x20non\x20HbbTV\x20device', 'wrn'),
                    document['getElementById']('appmgr')['style']['display'] = 'none',
                    document['getElementById']('video')['style']['display'] = 'none';
                },
                'destroyApplication': function() {
                    location['reload']();
                }
            };
            !window['KeyEvent'] && (window['KeyEvent'] = {});
            if (!KeyEvent['VK_LEFT'])
                KeyEvent['VK_LEFT'] = 0x25;
            if (!KeyEvent['VK_UP'])
                KeyEvent['VK_UP'] = 0x26;
            if (!KeyEvent['VK_RIGHT'])
                KeyEvent['VK_RIGHT'] = 0x27;
            if (!KeyEvent['VK_DOWN'])
                KeyEvent['VK_DOWN'] = 0x28;
            if (!KeyEvent['VK_ENTER'])
                KeyEvent['VK_ENTER'] = 0xd;
            if (!KeyEvent['VK_RED'])
                KeyEvent['VK_RED'] = 0x193;
            if (!KeyEvent['VK_GREEN'])
                KeyEvent['VK_GREEN'] = 0x194;
            if (!KeyEvent['VK_YELLOW'])
                KeyEvent['VK_YELLOW'] = 0x195;
            if (!KeyEvent['VK_BLUE'])
                KeyEvent['VK_BLUE'] = 0x196;
            if (!KeyEvent['VK_0'])
                KeyEvent['VK_0'] = 0x30;
            if (!KeyEvent['VK_1'])
                KeyEvent['VK_1'] = 0x31;
            if (!KeyEvent['VK_2'])
                KeyEvent['VK_2'] = 0x32;
            if (!KeyEvent['VK_3'])
                KeyEvent['VK_3'] = 0x33;
            if (!KeyEvent['VK_4'])
                KeyEvent['VK_4'] = 0x34;
            if (!KeyEvent['VK_5'])
                KeyEvent['VK_5'] = 0x35;
            if (!KeyEvent['VK_6'])
                KeyEvent['VK_6'] = 0x36;
            if (!KeyEvent['VK_7'])
                KeyEvent['VK_7'] = 0x37;
            if (!KeyEvent['VK_8'])
                KeyEvent['VK_8'] = 0x38;
            if (!KeyEvent['VK_9'])
                KeyEvent['VK_9'] = 0x39;
            if (!KeyEvent['VK_BACK'])
                KeyEvent['VK_BACK'] = 0x8;
            if (!KeyEvent['VK_PLAY'])
                KeyEvent['VK_PLAY'] = 0x51;
            if (!KeyEvent['VK_PAUSE'])
                KeyEvent['VK_PAUSE'] = 0x57;
            if (!KeyEvent['VK_STOP'])
                KeyEvent['VK_STOP'] = 0x41;
            if (!KeyEvent['VK_PLAY_PAUSE'])
                KeyEvent['VK_PLAY_PAUSE'] = 0x45;
            if (!KeyEvent['VK_FAST_FWD'])
                KeyEvent['VK_FAST_FWD'] = 0x53;
            if (!KeyEvent['VK_REWIND'])
                KeyEvent['VK_REWIND'] = 0x44;
        }
    },
    'keyManager': {
        'kset': undefined,
        'listeners': [],
        'setValue': function(_0x4d76ec) {
            document['removeEventListener']('keydown', $DEVICE['keyManager']['dispatch'], ![]);
            var _0x4467b3 = this['kset'];
            _0x4467b3['setValue'](_0x4d76ec),
            _0x4d76ec !== _0x4467b3['value'] ? println('[Device.keyManager]\x20WARNING!\x20Unable\x20to\x20listen\x20to\x20the\x20required\x20key\x20set\x20[' + _0x4d76ec + '].\x0a\x09Actualy\x20keySet\x20has\x20been\x20set\x20to\x20[' + _0x4467b3['value'] + ']\x20/\x20keySet.maximumValue:\x20' + _0x4467b3['maximumValue'], 'WRN') : println('[Device.keyManager]\x20keySet\x20<-\x20[value:\x20' + _0x4467b3['value'] + '\x20/\x20maximumValue:\x20' + _0x4467b3['maximumValue'] + ']', 'fne'),
            document['addEventListener']('keydown', $DEVICE['keyManager']['dispatch'], ![]);
        },
        'setDefaultMask': function() {
            if (($DEVICE['userAgentInfo']['vendorName'] || '')['toLowerCase']() === 'samsung') {
                if (ON_SCREEN_DEBUG)
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN'] | this['kset']['OTHER'] | this['kset']['NAVIGATION'], this['kset']['VK_BACK']);
                else
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN'] | this['kset']['OTHER'], this['kset']['VK_BACK']);
            } else {
                if (ON_SCREEN_DEBUG)
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN'] | this['kset']['NAVIGATION']);
                else
                    this['setValue'](this['kset']['RED'] | this['kset']['BLUE'] | this['kset']['YELLOW'] | this['kset']['GREEN']);
            }
        },
        'setListener': function(_0x5af0c7) {
            function _0x186642(_0x54871e) {
                this['clearListener'](_0x54871e['widget']),
                this['listeners']['push'](_0x54871e);
            }
            keyLock ? pendingTask['push'](function() {
                _0x186642['bind'](this)(_0x5af0c7);
            }
            ['bind'](this)) : _0x186642['bind'](this)(_0x5af0c7);
        },
        'clearListener': function(_0x2119a7) {
            for (var _0x58a867 = 0x0; _0x58a867 < this['listeners']['length']; _0x58a867++) {
                if (this['listeners'][_0x58a867]['widget'] === _0x2119a7)
                    return this['listeners']['splice'](_0x58a867, 0x1),
                    !![];
            }
            return ![];
        },
        'getListener': function(_0x16ffb7) {
            for (var _0x3c823e = 0x0; _0x3c823e < this['listeners']['length']; _0x3c823e++) {
                if (this['listeners'][_0x3c823e]['widget'] === _0x16ffb7)
                    return this['listeners'][_0x3c823e]['handler'];
            }
            return undefined;
        },
        'dispatch': function(_0x55eb94) {
            keyLock = !![];
            var _0x49b9b0 = Object['prototype']['toString']['call'](_0x55eb94);
            _0x49b9b0 = _0x49b9b0['replace']('[object\x20', ''),
            _0x49b9b0 = _0x49b9b0['replace'](']', '');
            if (_0x49b9b0 === 'Number') {
                var _0x10af8b = new Event('keypress');
                _0x10af8b['keyCode'] = _0x55eb94,
                _0x55eb94 = _0x10af8b;
            } else {
                if (HBBTV_EMULATION && _0x49b9b0 === 'KeyboardEvent')
                    switch (_0x55eb94['keyCode']) {
                    case 'R'['charCodeAt'](0x0):
                        _0x10af8b = new Event('keypress'),
                        _0x10af8b['keyCode'] = KeyEvent['VK_RED'],
                        _0x55eb94 = _0x10af8b;
                        break;
                    case 'G'['charCodeAt'](0x0):
                        _0x10af8b = new Event('keypress'),
                        _0x10af8b['keyCode'] = KeyEvent['VK_GREEN'],
                        _0x55eb94 = _0x10af8b;
                        break;
                    case 'Y'['charCodeAt'](0x0):
                        _0x10af8b = new Event('keypress'),
                        _0x10af8b['keyCode'] = KeyEvent['VK_YELLOW'],
                        _0x55eb94 = _0x10af8b;
                        break;
                    case 'B'['charCodeAt'](0x0):
                        _0x10af8b = new Event('keypress'),
                        _0x10af8b['keyCode'] = KeyEvent['VK_BLUE'],
                        _0x55eb94 = _0x10af8b;
                        break;
                    case 0x8:
                        _0x10af8b = new Event('keypress'),
                        _0x10af8b['keyCode'] = KeyEvent['VK_BACK'],
                        _0x55eb94 = _0x10af8b;
                        break;
                    }
            }
            var _0x571483 = !HBBTV_EMULATION;
            if (_0x571483) {
                if (pending) {
                    if (pending['evnt']['keyCode'] !== _0x55eb94['keyCode']) {
                        clearTimeout(pending['id']),
                        println('🔹\x20notifying\x20(while\x20pending)\x20key\x20' + pending['evnt']['keyCode'] + '\x20/\x20time:\x20' + pending['evnt']['timeStamp'], 'inf');
                        for (var _0x3e4883 = 0x0, _0x36971a = $DEVICE['keyManager']['listeners']; _0x3e4883 < _0x36971a['length']; _0x3e4883++) {
                            _0x36971a[_0x3e4883]['handler']['call'](_0x36971a[_0x3e4883]['handler'], pending['evnt']);
                        }
                        while (pendingTask['length'] > 0x0) {
                            pendingTask['pop']()();
                        }
                    } else {
                        println('DUMMY\x20KeyEvent\x20CLONE\x20=>\x20DISCARD\x20the\x20received\x20event', 'err');
                        return;
                    }
                }
                pending = {
                    'evnt': _0x55eb94
                },
                pending['id'] = setTimeout(function(_0x4f9a02) {
                    for (var _0x5e17e8 = 0x0, _0x564048 = $DEVICE['keyManager']['listeners']; _0x5e17e8 < _0x564048['length']; _0x5e17e8++) {
                        _0x564048[_0x5e17e8]['handler']['call'](_0x564048[_0x5e17e8]['handler'], _0x4f9a02);
                    }
                    pending = undefined,
                    keyLock = ![];
                    while (pendingTask['length'] > 0x0) {
                        pendingTask['pop']()();
                    }
                }, 0x32, _0x55eb94);
            } else {
                for (_0x3e4883 = 0x0,
                _0x36971a = $DEVICE['keyManager']['listeners']; _0x3e4883 < _0x36971a['length']; _0x3e4883++) {
                    _0x36971a[_0x3e4883]['handler']['call'](_0x36971a[_0x3e4883]['handler'], _0x55eb94);
                }
                keyLock = ![];
                while (pendingTask['length'] > 0x0) {
                    pendingTask['pop']()();
                }
            }
        }
    },
    'userAgentInfo': undefined,
    'preferredDRM': 'PLAYREADY',
    'init': function() {
        this['hbbTv']['init'](document['querySelector']('#appmgr')),
        this['keyManager']['kset'] = this['hbbTv']['appManager']['privateData']['keyset'],
        this['userAgentInfo'] = function() {
            var _0xfcd042 = /HbbTV\/(\d.\d.\d)\s\((.*?)\)/gm, _0x2b03b5 = _0xfcd042['exec'](navigator['userAgent']), _0x428b66 = ['capabilities', 'vendorName', 'modelName', 'softwareVersion', 'hardwareVersion', 'familyName', 'reserved'], _0x188438 = {}, _0x5b0885, _0x5c2d23;
            if (_0x2b03b5 && _0x2b03b5['length'] > 0x1) {
                _0x188438['version'] = _0x2b03b5[0x1],
                _0x2b03b5 = _0x2b03b5[0x2]['split'](';');
                for (_0x5b0885 = 0x0,
                _0x5c2d23 = _0x2b03b5['length']; _0x5b0885 < _0x5c2d23; _0x5b0885++) {
                    _0x188438[_0x428b66[_0x5b0885]] = _0x2b03b5[_0x5b0885] && _0x2b03b5[_0x5b0885]['trim']();
                }
            }
            var _0x32d7f0 = {
                '1.2.1': '1.5',
                '1.3.1': '2.0',
                '1.4.1': '2.0.1',
                '1.5.1': '2.0.2',
                '1.6.1': '2.0.3'
            };
            return _0x188438['specVersion'] = _0x32d7f0[_0x188438['version']] || '',
            _0x188438['isOneDotFiveHbbTv'] = function() {
                return _0x188438['version'] < '1.4.1';
            }
            ,
            _0x188438['toString'] = function() {
                return this['vendorName'] + '\x20' + this['modelName'] + '\x20(HbbTV\x20' + this['specVersion'] + ')';
            }
            ,
            _0x188438;
        }();
    }
};
String['prototype']['width'] = function(_0x312de8, _0x437b66) {
    return this['bounds'](_0x312de8, _0x437b66)['width'];
}
,
String['prototype']['bounds'] = function(_0x504b4e, _0xd8838e) {
    var _0xdfda2e = String['prototype']['bounds']['el']
      , _0x2d4098 = String['prototype']['bounds']['canvas'];
    _0xdfda2e === undefined && (String['prototype']['bounds']['el'] = document['createElement']('div'),
    String['prototype']['bounds']['el']['id'] = 'TEXT\x20METRICS\x20DUMMY\x20DIV',
    _0xdfda2e = document['body']['appendChild'](String['prototype']['bounds']['el']),
    String['prototype']['bounds']['canvas'] = document['createElement']('canvas'),
    _0x2d4098 = String['prototype']['bounds']['canvas']);
    var _0xdf5f87 = _0x2d4098['getContext']('2d');
    if (typeof _0x504b4e === 'number') {
        var _0x156197 = _0xdf5f87['font'];
        _0x156197 = _0x156197['substring'](_0x156197['indexOf']('px')),
        _0x504b4e = _0x504b4e + _0x156197;
    }
    if (_0x504b4e)
        _0xdf5f87['font'] = _0x504b4e;
    _0xdfda2e['style']['position'] = 'absolute',
    _0xdfda2e['style']['whiteSpace'] = 'nowrap',
    _0xdfda2e['style']['visibility'] = 'hidden';
    if (_0x504b4e)
        _0xdfda2e['style']['font'] = _0x504b4e;
    _0xd8838e && (_0xdfda2e['style']['letterSpacing'] = _0xd8838e + 'px');
    _0xdfda2e['innerHTML'] = this['replace'](new RegExp('\x20','g'), '&nbsp;');
    var _0x4d311c = {
        'width': _0xdfda2e['getBoundingClientRect']()['width'],
        'height': _0xdfda2e['getBoundingClientRect']()['height']
    };
    return _0xdfda2e['style']['letterSpacing'] = '',
    _0x4d311c;
}
,
String['prototype']['startsWith'] = function(_0x593d66) {
    return this['indexOf'](_0x593d66) === 0x0;
}
,
String['prototype']['noBOM'] = function() {
    return this && this['length'] > 0x0 && this[0x0] === '' ? this['substr'](0x1) : this['valueOf']();
}
,
Date['prototype']['toITA'] = function() {
    return new Date(this['toLocaleString']('en-US', {
        'timeZone': 'Europe/Rome'
    }));
}
,
Str = {
    'spaces': 0x2,
    'empty': function(_0x123d5e, _0x120101) {
        var _0x551da9, _0x43334f = '';
        _0x123d5e = _0x123d5e || 0x0,
        _0x120101 = _0x120101 || '\x20';
        for (_0x551da9 = 0x0; _0x551da9 < _0x123d5e; _0x551da9++)
            _0x43334f += _0x120101;
        return _0x43334f;
    },
    'str': function(_0x48b0ba, _0x4aadfb) {
        var _0x49094f = typeof _0x48b0ba, _0x3992f6 = '', _0x35f0c5, _0x4c84ed, _0x12ac90 = 0x0;
        _0x4aadfb = _0x4aadfb || 0x0,
        _0x35f0c5 = this['empty'](_0x4aadfb);
        if (_0x48b0ba === null)
            _0x3992f6 += 'null';
        else {
            if (_0x49094f === 'object') {
                if (this['isNode'](_0x48b0ba) || this['isElement'](_0x48b0ba))
                    return _0x3992f6 += _0x48b0ba['toString'](),
                    _0x3992f6;
                if (Array['isArray'](_0x48b0ba))
                    _0x4c84ed = '[]';
                else
                    _0x4c84ed = '{}';
                _0x3992f6 += _0x35f0c5 + _0x4c84ed[0x0] + '\x0a';
                for (var _0x1538a0 in _0x48b0ba) {
                    _0x48b0ba['hasOwnProperty'](_0x1538a0) && (_0x12ac90++,
                    _0x3992f6 += this['empty'](_0x4aadfb + this['spaces']) + '-\x20' + _0x1538a0 + ':\x20' + this['str'](_0x48b0ba[_0x1538a0], _0x4aadfb + this['spaces']) + '\x0a');
                }
                _0x12ac90 === 0x0 && (_0x3992f6 += this['empty'](_0x4aadfb + this['spaces']) + '\x20' + _0x48b0ba['toString']() + '\x0a'),
                _0x3992f6 += _0x35f0c5 + _0x4c84ed[0x1];
            } else {
                if (_0x49094f === 'function')
                    _0x3992f6 += 'function\x20[code\x20omitted]';
                else
                    _0x49094f === 'string' ? _0x3992f6 += _0x48b0ba : _0x3992f6 += _0x48b0ba;
            }
        }
        return _0x3992f6;
    },
    'isNode': function(_0x2e87ae) {
        return typeof Node === 'object' ? _0x2e87ae instanceof Node : _0x2e87ae && typeof _0x2e87ae === 'object' && typeof _0x2e87ae['nodeType'] === 'number' && typeof _0x2e87ae['nodeName'] === 'string';
    },
    'isElement': function(_0x441905) {
        return typeof HTMLElement === 'object' ? _0x441905 instanceof HTMLElement : _0x441905 && typeof _0x441905 === 'object' && _0x441905 !== null && _0x441905['nodeType'] === 0x1 && typeof _0x441905['nodeName'] === 'string';
    },
    'xmlToJson': function(_0xfd4a1a) {
        var _0x411050 = {};
        if (_0xfd4a1a['nodeType'] === 0x1) {
            if (_0xfd4a1a['attributes']['length'] > 0x0) {
                _0x411050['@attributes'] = {};
                for (var _0x3f000b = 0x0; _0x3f000b < _0xfd4a1a['attributes']['length']; _0x3f000b++) {
                    var _0x42d218 = _0xfd4a1a['attributes']['item'](_0x3f000b);
                    _0x411050['@attributes'][_0x42d218['nodeName']] = _0x42d218['nodeValue'];
                }
            }
        } else
            _0xfd4a1a['nodeType'] === 0x3 && (_0x411050 = _0xfd4a1a['nodeValue']);
        if (_0xfd4a1a['hasChildNodes']() && _0xfd4a1a['childNodes']['length'] === 0x1 && _0xfd4a1a['childNodes'][0x0]['nodeType'] === 0x3 && !_0x411050['@attributes'])
            _0x411050 = _0xfd4a1a['childNodes'][0x0]['nodeValue'];
        else {
            if (_0xfd4a1a['hasChildNodes']())
                for (var _0x5a29c0 = 0x0; _0x5a29c0 < _0xfd4a1a['childNodes']['length']; _0x5a29c0++) {
                    var _0x443d60 = _0xfd4a1a['childNodes']['item'](_0x5a29c0)
                      , _0x3632bd = _0x443d60['nodeName'];
                    if (typeof _0x411050[_0x3632bd] === 'undefined')
                        _0x411050[_0x3632bd] = this['xmlToJson'](_0x443d60);
                    else {
                        if (typeof _0x411050[_0x3632bd]['push'] === 'undefined') {
                            var _0x441c7d = _0x411050[_0x3632bd];
                            _0x411050[_0x3632bd] = [],
                            _0x411050[_0x3632bd]['push'](_0x441c7d);
                        }
                        _0x411050[_0x3632bd]['push'](this['xmlToJson'](_0x443d60));
                    }
                }
        }
        return _0x411050;
    },
    'xmlToString': function(_0x26b48b) {
        function _0x170429(_0x3c1ed3) {
            xmlString = _0x3c1ed3['trim']()['replace'](/>\s*</g, '>\x0a<')['replace'](/(<[^\/>].*>)\n(<[\/])/g, '$1$2')['replace'](/(<\/[^>]+>|<[^>]+\/>)(<[^>]+>)/g, '$1\x0a$2'),
            xmlArr = xmlString['split']('\x0a');
            var _0x5e5fd8 = ''
              , _0x5ee4e7 = 0x0;
            if (/^<[?]xml/['test'](xmlArr[0x0]))
                _0x5ee4e7++;
            for (var _0xc60013 = _0x5ee4e7; _0xc60013 < xmlArr['length']; _0xc60013++) {
                var _0x30d1f8 = xmlArr[_0xc60013]['trim']();
                if (/^<[/]/['test'](_0x30d1f8))
                    _0x5e5fd8 = _0x5e5fd8['replace'](/.$/, ''),
                    xmlArr[_0xc60013] = _0x5e5fd8 + _0x30d1f8;
                else
                    /<.*>.*<\/.*>|<.*[^>]\/>/['test'](_0x30d1f8) ? xmlArr[_0xc60013] = _0x5e5fd8 + _0x30d1f8 : (xmlArr[_0xc60013] = _0x5e5fd8 + _0x30d1f8,
                    _0x5e5fd8 += '\x09');
            }
            return xmlArr['join']('\x0a');
        }
        if (_0x26b48b['xml'])
            return _0x170429(_0x26b48b['xml']);
        else {
            if (XMLSerializer)
                return _0x170429(new XMLSerializer()['serializeToString'](_0x26b48b));
            else
                return '';
        }
    }
};
!Array['from'] && (Array['from'] = function() {
    var _0x331a92 = Object['prototype']['toString']
      , _0xb07527 = function(_0x361adb) {
        return typeof _0x361adb === 'function' || _0x331a92['call'](_0x361adb) === '[object\x20Function]';
    }
      , _0x4f8d45 = function(_0x1960c7) {
        var _0x29ed4c = Number(_0x1960c7);
        if (isNaN(_0x29ed4c))
            return 0x0;
        if (_0x29ed4c === 0x0 || !isFinite(_0x29ed4c))
            return _0x29ed4c;
        return (_0x29ed4c > 0x0 ? 0x1 : -0x1) * Math['floor'](Math['abs'](_0x29ed4c));
    }
      , _0xc0aba = Math['pow'](0x2, 0x35) - 0x1
      , _0x871cfb = function(_0x20d993) {
        var _0x1a073a = _0x4f8d45(_0x20d993);
        return Math['min'](Math['max'](_0x1a073a, 0x0), _0xc0aba);
    };
    return function _0x131e5d(_0x4821fe) {
        var _0x3d1a95 = this
          , _0x3febe0 = Object(_0x4821fe);
        if (_0x4821fe == null)
            throw new TypeError('Array.from\x20requires\x20an\x20array-like\x20object\x20-\x20not\x20null\x20or\x20undefined');
        var _0x176118 = arguments['length'] > 0x1 ? arguments[0x1] : void undefined, _0x2cdb0e;
        if (typeof _0x176118 !== 'undefined') {
            if (!_0xb07527(_0x176118))
                throw new TypeError('Array.from:\x20when\x20provided,\x20the\x20second\x20argument\x20must\x20be\x20a\x20function');
            arguments['length'] > 0x2 && (_0x2cdb0e = arguments[0x2]);
        }
        var _0x595733 = _0x871cfb(_0x3febe0['length']), _0x1e67cb = _0xb07527(_0x3d1a95) ? Object(new _0x3d1a95(_0x595733)) : new Array(_0x595733), _0x12aba6 = 0x0, _0x104920;
        while (_0x12aba6 < _0x595733) {
            _0x104920 = _0x3febe0[_0x12aba6],
            _0x176118 ? _0x1e67cb[_0x12aba6] = typeof _0x2cdb0e === 'undefined' ? _0x176118(_0x104920, _0x12aba6) : _0x176118['call'](_0x2cdb0e, _0x104920, _0x12aba6) : _0x1e67cb[_0x12aba6] = _0x104920,
            _0x12aba6 += 0x1;
        }
        return _0x1e67cb['length'] = _0x595733,
        _0x1e67cb;
    }
    ;
}());
!Array['prototype']['find'] && Object['defineProperty'](Array['prototype'], 'find', {
    'value': function(_0x230120) {
        'use strict';
        if (this == null)
            throw new TypeError('Array.prototype.find\x20called\x20on\x20null\x20or\x20undefined');
        if (typeof _0x230120 !== 'function')
            throw new TypeError('predicate\x20must\x20be\x20a\x20function');
        var _0xa75cbe = Object(this)
          , _0x45bde8 = _0xa75cbe['length'] >>> 0x0
          , _0xd4ba1d = arguments[0x1];
        for (var _0x5bdb3c = 0x0; _0x5bdb3c !== _0x45bde8; _0x5bdb3c++) {
            if (_0x230120['call'](_0xd4ba1d, this[_0x5bdb3c], _0x5bdb3c, _0xa75cbe))
                return this[_0x5bdb3c];
        }
        return undefined;
    }
});
var screenBlackBoard = undefined;
function getObjectType(_0x3acb34) {
    var _0x53a6cf = Object['prototype']['toString']['call'](_0x3acb34);
    return _0x53a6cf = _0x53a6cf['replace']('[object\x20', ''),
    _0x53a6cf = _0x53a6cf['replace'](']', ''),
    _0x53a6cf;
}
function println(_0x47d5a6, _0x213f2c) {
    if (DEBUG || CONSOLE_DEBUG || ON_SCREEN_DEBUG) {
        if (arguments['length'] === 0x0)
            _0x47d5a6 = '';
        _0x213f2c = (_0x213f2c || 'OUT')['toUpperCase']();
        if (CONSOLE_DEBUG)
            switch (_0x213f2c) {
            case 'ERR':
                console['log']('%c' + _0x47d5a6, 'color:' + '#ff0000');
                break;
            case 'OUT':
                console['log'](_0x47d5a6);
                break;
            case 'WRN':
                console['log']('%c' + _0x47d5a6, 'color:' + '#ffb400');
                break;
            case 'INF':
                console['log']('%c' + _0x47d5a6, 'color:' + '#0f910f');
                break;
            case 'FNE':
                console['log']('%c' + _0x47d5a6, 'color:' + '#2c50a6');
                break;
            default:
                console['log']('[' + _0x213f2c + ']' + _0x47d5a6);
                break;
            }
        if (ON_SCREEN_DEBUG)
            try {
                if (!screenBlackBoard)
                    screenBlackBoard = $ScreenBlackBoard['getInstance']();
                var _0x4d35fb = typeof _0x47d5a6;
                if (_0x4d35fb === 'undefined')
                    _0x47d5a6 = 'undefined';
                else {
                    if (_0x4d35fb === 'object') {
                        if (_0x47d5a6)
                            _0x47d5a6 = Str['str'](_0x47d5a6),
                            _0x47d5a6['length'] > 0xbb8 && (_0x47d5a6 = 'very\x20long\x20Object\x20[' + _0x47d5a6['length'] + '\x20chars]\x20-\x20println\x20SKIP',
                            _0x213f2c = '⚠');
                        else
                            _0x47d5a6 = 'null';
                    } else
                        _0x4d35fb === 'function' ? _0x47d5a6 = 'function\x20[' + _0x47d5a6['name'] + ']' : _0x47d5a6 = _0x47d5a6['toString']();
                }
                switch (_0x213f2c) {
                case 'ERR':
                    screenBlackBoard['println'](_0x47d5a6, '#d70f1d');
                    break;
                case 'OUT':
                    screenBlackBoard['println'](_0x47d5a6);
                    break;
                case 'WRN':
                    screenBlackBoard['println'](_0x47d5a6, '#d7721c');
                    break;
                case 'INF':
                    screenBlackBoard['println'](_0x47d5a6, '#0f910f');
                    break;
                case 'FNE':
                    screenBlackBoard['println'](_0x47d5a6, '#3c67d7');
                    break;
                default:
                    screenBlackBoard['println']('[' + _0x213f2c + ']\x20' + _0x47d5a6);
                    break;
                }
            } catch (_0x82d1d1) {}
        if (window['$l']) {
            var _0x19cc96 = getObjectType(_0x47d5a6);
            if (_0x19cc96 === 'Object' || _0x19cc96 === 'XMLDocument')
                console['log'](_0x47d5a6);
            else
                switch (_0x213f2c) {
                case 'ERR':
                    $l['log'](_0x47d5a6 + '\x0a', '#d70f1d');
                    break;
                case 'OUT':
                    $l['log'](_0x47d5a6 + '\x0a', '#c1c1e2');
                    break;
                case 'WRN':
                    $l['log'](_0x47d5a6 + '\x0a', '#fdbe1c');
                    break;
                case 'INF':
                    $l['log'](_0x47d5a6 + '\x0a', '#0f910f');
                    break;
                case 'FNE':
                    $l['log'](_0x47d5a6 + '\x0a', '#3c67d7');
                    break;
                default:
                    $l['log']('[' + _0x213f2c + ']' + _0x47d5a6 + '\x0a', '#c1c1e2');
                    break;
                }
        }
    }
}
var $MISC = {
    'objScanner': function(_0xef9ce2, _0x521545, _0x1b3eb6, _0x46ad99, _0x212c7b, _0x49694c) {
        var _0x53202a = undefined;
        _0x1b3eb6 && (_0x53202a = _0x1b3eb6(_0xef9ce2, _0x521545, _0x46ad99, _0x212c7b, _0x49694c),
        _0x53202a = _0x53202a === undefined ? !![] : _0x53202a);
        if (_0x53202a) {
            if (Array['isArray'](_0xef9ce2))
                for (var _0x4045f3 = 0x0; _0x4045f3 < _0xef9ce2['length']; _0x4045f3++)
                    $MISC['objScanner'](_0xef9ce2[_0x4045f3], _0x521545 + '[' + _0x4045f3 + ']', _0x1b3eb6, _0x46ad99, _0xef9ce2, _0x4045f3);
            else {
                if (typeof _0xef9ce2 === 'object')
                    for (var _0x4045f3 = 0x0, _0x5bf98c = Object['keys'](_0xef9ce2); _0x4045f3 < _0x5bf98c['length']; _0x4045f3++)
                        $MISC['objScanner'](_0xef9ce2[_0x5bf98c[_0x4045f3]], _0x5bf98c[_0x4045f3], _0x1b3eb6, _0xef9ce2, _0x212c7b, _0x49694c);
            }
        }
    },
    'html2Element': function(_0x256abf) {
        var _0xc81f8e = document['createElement']('div');
        return _0xc81f8e['innerHTML'] = _0x256abf,
        _0xc81f8e['firstChild'];
    },
    'fontLoad': function(_0x580ad1, _0x2261d8) {
        var _0x3f861e = document['querySelector']('#appmgr')
          , _0x584bbb = !!(typeof _0x3f861e['getOwnerApplication'] === 'function' && _0x3f861e['getOwnerApplication'](document));
        if (_0x584bbb) {
            var _0x20de51 = [];
            _0x580ad1['forEach'](function(_0x161983, _0x750194, _0x227a14) {
                if (_0x161983['family']['toLowerCase']()['indexOf']('tiresias') === -0x1)
                    _0x20de51['push'](_0x161983);
            }),
            _0x580ad1 = _0x20de51;
        }
        if (_0x580ad1['length'] > 0x0 && document['fonts']['ready']['then']) {
            _0x580ad1['forEach'](function(_0x4ae047, _0x33957a, _0x495983) {
                document['fonts']['add'](_0x4ae047);
            });
            var _0x52ed92 = !![];
            _0x580ad1['forEach'](function(_0x4ac2ef, _0x193596, _0x3dd7be) {
                _0x4ac2ef['loaded']['then'](function(_0x45873e) {
                    if (_0x52ed92)
                        println('Loaded\x20' + _0x45873e['family'] + '\x20[status:\x20' + _0x45873e['status'] + ']', 'inf');
                }, function(_0x50b513) {
                    if (_0x52ed92)
                        println('Unable\x20to\x20load\x20' + _0x3dd7be[_0x193596]['family'] + '\x0a\x09' + _0x50b513['name'] + '\x0a\x09Current\x20status:\x20' + _0x4ac2ef['status'] + '\x0a' + '\x09***\x20FONT_LOADING\x20RESET\x20TO\x20FALSE\x20***\x0a\x09Tiresias\x20font\x20will\x20be\x20used\x20everywhere', 'err');
                    FONT_LOADING = ![],
                    _0x52ed92 = ![];
                }),
                _0x4ac2ef['load']();
            }),
            document['fonts']['ready']['then'](function(_0x25033e) {
                println('Font\x20loading\x20stop', 'fne'),
                _0x2261d8 && _0x2261d8();
            });
        } else {
            if (_0x2261d8)
                _0x2261d8();
        }
    },
    'wait4fonts': function(_0x5008d7, _0x34bc30) {
        var _0x59df9f = Date['now']();
        function _0x26b73d(_0x1e31ae) {
            if (Date['now']() - _0x59df9f > 0x5dc)
                return console['error']('[FONT]\x20timeout\x20-----------'),
                !![];
            else {
                var _0x464d3e = [];
                for (var _0x157253 = 0x0; _0x157253 < _0x1e31ae['length']; _0x157253++)
                    _0x464d3e['push']('ABCDEFGHIJKLMNO\x20abcdefghijklmno\x20@#çòà§€'['width']('52px/64px\x20' + _0x1e31ae[_0x157253], -0.2));
                var _0x16cd23 = ![];
                for (_0x157253 = 0x0; !_0x16cd23 && _0x157253 < _0x464d3e['length']; _0x157253++)
                    for (var _0x482f2a = _0x157253 + 0x1; !_0x16cd23 && _0x482f2a < _0x464d3e['length']; _0x482f2a++) {
                        _0x16cd23 = _0x464d3e[_0x157253] === _0x464d3e[_0x482f2a];
                    }
                return !_0x16cd23;
            }
        }
        (function _0x154a23() {
            if (_0x26b73d(_0x5008d7)) {
                for (var _0x7b6413 = 0x0; _0x7b6413 < _0x5008d7['length']; _0x7b6413++)
                    println('🟢\x20' + _0x5008d7[_0x7b6413]);
                if (_0x34bc30)
                    setTimeout(_0x34bc30, 0x64);
            } else
                setTimeout(_0x154a23, 0xa);
        }());
    },
    'fontCheck': function(_0x133cbd) {
        return FONT_LOADING ? _0x133cbd : _0x133cbd['replace'](/ +.*/gm, '\x20Tiresias');
    },
    'jsLoadedMap': {},
    'loadJS': function(_0x324e03, _0x1eff3e, _0x1f057b) {
        if ($MISC['jsLoadedMap'][_0x324e03]) {
            if ($MISC['jsLoadedMap'][_0x324e03]['status'] === 'ok')
                return _0x1eff3e(_0x324e03);
            else {
                ($MISC['jsLoadedMap'][_0x324e03]['callbacks'] = $MISC['jsLoadedMap'][_0x324e03]['callbacks'] || [])['push'](_0x1eff3e);
                return;
            }
        }
        $MISC['jsLoadedMap'][_0x324e03] = {
            'status': 'load'
        };
        var _0x423a84 = document['createElement']('script');
        _0x423a84['src'] = _0x324e03,
        _0x423a84['onload'] = function(_0x3e8304) {
            $MISC['jsLoadedMap'][_0x324e03]['status'] = 'ok',
            _0x1eff3e(_0x324e03);
            var _0x4823fe = $MISC['jsLoadedMap'][_0x324e03]['callbacks'];
            if (_0x4823fe) {
                for (var _0x1b43fa = 0x0; _0x1b43fa < _0x4823fe['length']; _0x1b43fa++)
                    _0x4823fe[_0x1b43fa](_0x324e03);
                _0x4823fe['length'] = 0x0,
                $MISC['jsLoadedMap'][_0x324e03]['callbacks'] = null;
            }
        }
        ,
        _0x423a84['onerror'] = function(_0x47c7e9) {
            $MISC['jsLoadedMap'][_0x324e03]['status'] = 'fail',
            println('Error\x20on\x20' + _0x324e03 + '\x20loading', 'err'),
            _0x1eff3e(_0x324e03, {
                'error': this['src']
            });
        }
        ,
        _0x1f057b['appendChild'](_0x423a84);
    },
    'loadMainJS': function(_0x246b0d, _0x3d800f) {
        $MISC['loadJS']('javascript/JS1_20221130_164454.js', function(_0x21df32, _0x3e8071) {
            if (!_0x3e8071 || _0x3d800f)
                _0x246b0d(_0x21df32, _0x3e8071);
            else
                $Gui['getInstance']()['_loadingFlag'] = ![],
                $SimpleBanner['getInstance']()['show'](!![], 'aggiornamento\x20in\x20corso', 0x5, function() {
                    $DEVICE['hbbTv']['appManager']['destroyApplication']();
                });
        }, document['head']);
    },
    'getChName': function(_0x9448da) {
        switch (_0x9448da['name']['noBOM']()) {
        case 'Rai\x204K':
            return 'Rai\x204K';
        case 'Rai\x201':
            return 'Rai\x201';
        case 'Rai\x201\x20HD':
            return 'Rai\x201\x20HD';
        case 'Rai\x202':
            return 'Rai\x202';
        case 'Rai\x20Radio\x202\x20Visual':
            return 'Rai\x20Radio\x202\x20Visual';
        case 'Rai\x202\x20HD':
            return 'Rai\x202\x20HD';
        case 'Rai\x203':
        case 'Rai\x203\x20TGR\x20Piemonte':
            return 'Rai\x203';
        case 'Rai\x203\x20HD':
            return 'Rai\x203\x20HD';
        case 'Rai\x204':
            return 'Rai\x204';
        case 'Rai\x204\x20HD':
            return 'Rai\x204\x20HD';
        case 'Rai\x205':
            return 'Rai\x205';
        case 'Rai\x205\x20HD':
            return 'Rai\x205\x20HD';
        case 'Rai\x20Movie':
            return 'Rai\x20Movie';
        case 'Rai\x20Movie\x20HD':
            return 'Rai\x20Movie\x20HD';
        case 'Rai\x20Premium':
            return 'Rai\x20Premium';
        case 'Rai\x20Premium\x20HD':
            return 'Rai\x20Premium\x20HD';
        case 'Rai\x20Gulp':
            return 'Rai\x20Gulp';
        case 'Rai\x20Gulp\x20HD':
            return 'Rai\x20Gulp\x20HD';
        case 'Rai\x20YoYo':
            return 'Rai\x20Yoyo';
        case 'Rai\x20YoYo\x20HD':
            return 'Rai\x20Yoyo\x20HD';
        case 'Rai\x20Storia':
            return 'Rai\x20Storia';
        case 'Rai\x20Storia\x20HD':
            return 'Rai\x20Storia\x20HD';
        case 'Rai\x20Scuola':
            return 'Rai\x20Scuola';
        case 'Rai\x20Scuola\x20HD':
            return 'Rai\x20Scuola\x20HD';
        case 'Rai\x20News24':
        case 'Rai\x20News\x2024':
            return 'Rai\x20News\x2024';
        case 'Rai\x20Sport\x20+\x20HD':
            return 'Rai\x20Sport\x20piu\x20HD';
        case 'Rai\x20Sport':
            return 'Rai\x20Sport';
        case 'Rai\x20Radio\x20Kids':
            return 'Rai\x20Radio\x20Kids';
        case 'Rai\x20Radio\x20Tutta\x20Italiana':
            return 'Rai\x20Radio\x20Tutta\x20Italiana';
        case 'Rai\x20Radio2':
        case 'Rai\x20Radio\x202':
            return 'Rai\x20Radio\x202';
        case 'Rai\x20Radio3\x20Classica':
        case 'Rai\x20Radio\x203\x20Classica':
        case 'Rai\x20Radio\x20Classica':
            return 'Rai\x20Radio3\x20Classica';
        case 'Rai\x20Radio1':
        case 'Rai\x20Radio\x201':
            return 'Rai\x20Radio\x201';
        case 'Rai\x20Radio1\x20Sport':
        case 'Rai\x20Radio\x201\x20Sport':
            return 'Rai\x20Radio1\x20Sport';
        case 'Rai\x20Radio\x20Live':
            return 'Rai\x20Radio\x20Live';
        case 'Rai\x20Radio\x20Techete\x27':
        case 'Rai\x20Radio\x20Techetè':
            return 'Rai\x20Radio\x20Techete';
        case 'Rai\x20Gr\x20Parlamento':
        case 'Rai\x20GrParlamento':
        case 'Rai\x20GR\x20Parlamento':
            return 'Rai\x20Radio\x20GR\x20Parlamento';
        case 'Rai\x20Isoradio':
            return 'Rai\x20Isoradio';
        case 'Rai\x20Radio2\x20Indie':
        case 'Rai\x20Radio\x202\x20Indie':
            return 'Rai\x20Radio2\x20Indie';
        case 'Rai\x20Radio3':
        case 'Rai\x20Radio\x203':
            return 'Rai\x20Radio\x203';
        default:
            var _0x632716 = _0x9448da['name']['noBOM']()
              , _0x138918 = _0x632716['indexOf']('TGR');
            if (_0x138918 > -0x1)
                return _0x632716['substring'](0x0, _0x138918)['trim']();
            println('Unable\x20to\x20get\x20chName\x20for\x20\x22' + _0x9448da['name'] + '\x22', 'err');
            return _0x9448da['name']['toLowerCase']()['replace'](/ /gm, '');
        }
    },
    'getChColor': function(_0x5765e7) {
        var _0x3d023f = $COL[$MISC['getChName'](_0x5765e7)];
        return _0x3d023f || $COL['Rai'];
    },
    'getChSvg': function(_0x53bb93) {
        println($MISC['getChName'](_0x53bb93));
        var _0x510d05 = $DataLoader['getInstance']()['getSvgCode']('RaiSquareLogo');
        _0x510d05 = _0x510d05['replace'](/.*d\s*=\s*"/mig, ''),
        _0x510d05 = _0x510d05['replace'](/".*/mi, '');
        var _0x40ac8a = $DataLoader['getInstance']()['getSvgCode']($MISC['getChName'](_0x53bb93));
        return _0x40ac8a = _0x40ac8a['replace'](/\sd\s*=\s*"/gmi, '\x20d=\x22' + _0x510d05),
        _0x40ac8a;
    },
    'getChSvgLogoUrl': function(_0x179ebd) {
        switch (_0x179ebd['name']) {
        default:
            $DataLoader['getInstance']()['getSvgImageUrl']($MISC['getChName'](_0x179ebd));
        }
    },
    'colorNormalize': function(_0x33a208) {
        var _0x41e493 = /("|')#.{3,6}("|')/gm, _0x583a2e, _0x544b4a = _0x33a208['slice'](), _0x45c254 = 0x0, _0x2d3492, _0x4c2f05 = [];
        while ((_0x583a2e = _0x41e493['exec'](_0x33a208)) !== null) {
            _0x583a2e['index'] === _0x41e493['lastIndex'] && _0x41e493['lastIndex']++;
            var _0x5a73ad;
            if (_0x583a2e[0x0]['length'] === 0x6) {
                _0x2d3492 = [parseInt(_0x583a2e[0x0]['charAt'](0x2) + _0x583a2e[0x0]['charAt'](0x2), 0x10), parseInt(_0x583a2e[0x0]['charAt'](0x3) + _0x583a2e[0x0]['charAt'](0x3), 0x10), parseInt(_0x583a2e[0x0]['charAt'](0x4) + _0x583a2e[0x0]['charAt'](0x4), 0x10)],
                _0x5a73ad = '##@' + _0x45c254++;
                while (_0x5a73ad['length'] < _0x583a2e[0x0]['length'])
                    _0x5a73ad += '#';
                _0x4c2f05['push']({
                    'bookmark': _0x5a73ad,
                    'replace': '\x22rgb(' + _0x2d3492[0x0] + ',' + _0x2d3492[0x1] + ',' + _0x2d3492[0x2] + ')\x22'
                });
            } else {
                _0x2d3492 = [parseInt(_0x583a2e[0x0]['charAt'](0x2) + _0x583a2e[0x0]['charAt'](0x3), 0x10), parseInt(_0x583a2e[0x0]['charAt'](0x4) + _0x583a2e[0x0]['charAt'](0x5), 0x10), parseInt(_0x583a2e[0x0]['charAt'](0x6) + _0x583a2e[0x0]['charAt'](0x7), 0x10)],
                _0x5a73ad = '##@' + _0x45c254++;
                while (_0x5a73ad['length'] < _0x583a2e[0x0]['length'])
                    _0x5a73ad += '#';
                _0x4c2f05['push']({
                    'bookmark': _0x5a73ad,
                    'replace': '\x22rgb(' + _0x2d3492[0x0] + ',' + _0x2d3492[0x1] + ',' + _0x2d3492[0x2] + ')\x22'
                });
            }
            _0x544b4a = _0x544b4a['substring'](0x0, _0x583a2e['index']) + _0x5a73ad + _0x544b4a['substring'](_0x583a2e['index'] + _0x583a2e[0x0]['length']);
        }
        for (_0x45c254 = 0x0; _0x45c254 < _0x4c2f05['length']; _0x45c254++) {
            _0x544b4a = _0x544b4a['replace'](_0x4c2f05[_0x45c254]['bookmark'], _0x4c2f05[_0x45c254]['replace']);
        }
        return _0x544b4a;
    },
    'convert2Minutes': function(_0x4e3d0a) {
        var _0x3fd253 = _0x4e3d0a['split'](':')
          , _0x49ffdb = parseInt(_0x3fd253[0x0])
          , _0x166a2d = parseInt(_0x3fd253[0x1]);
        return _0x166a2d + _0x49ffdb * 0x3c;
    },
    'lightenDarkenColor': function(_0x332eab, _0x3bf523) {
        function _0x29e10e(_0x58e993) {
            if (_0x58e993 > 0xff)
                return 0xff;
            if (_0x58e993 < 0x0)
                return 0x0;
            return _0x58e993;
        }
        var _0x17e766 = parseInt(_0x332eab[0x1] + _0x332eab[0x2], 0x10)
          , _0xece3d3 = parseInt(_0x332eab[0x3] + _0x332eab[0x4], 0x10)
          , _0xe59f4c = parseInt(_0x332eab[0x5] + _0x332eab[0x6], 0x10)
          , _0x5cd658 = _0x29e10e(_0x17e766 + _0x3bf523)
          , _0x2f4263 = _0x29e10e(_0xece3d3 + _0x3bf523)
          , _0x4d4fa8 = _0x29e10e(_0xe59f4c + _0x3bf523)
          , _0x2c9498 = _0x5cd658['toString'](0x10)
          , _0x38a5f0 = _0x2f4263['toString'](0x10)
          , _0x539482 = _0x4d4fa8['toString'](0x10);
        return _0x2c9498 = (_0x2c9498['length'] < 0x2 ? '0' : '') + _0x2c9498,
        _0x38a5f0 = (_0x38a5f0['length'] < 0x2 ? '0' : '') + _0x38a5f0,
        _0x539482 = (_0x539482['length'] < 0x2 ? '0' : '') + _0x539482,
        '#' + _0x2c9498 + _0x38a5f0 + _0x539482;
    },
    'isEmptyObject': function(_0x582017) {
        return Object['keys'](_0x582017)['length'] === 0x0;
    },
    'jsonParse': function(_0x111005, _0x417a74) {
        try {
            return JSON['parse'](_0x111005);
        } catch (_0x55f3e7) {
            var _0x5e6d62 = {
                'MESSAGE': _0x55f3e7['message'],
                'STACK': _0x55f3e7['stack'],
                'EXTRA_INFO': _0x417a74,
                'JSON_STRING': _0x111005,
                'TIME_STAMP': Date['now']()
            };
            println('⚠⚠\x20ERROR\x20ON\x20JSON\x20PARSE\x20[LOG\x20-\x20BEGIN]\x20⚠⚠', 'err'),
            console['log'](_0x5e6d62),
            println('⚠⚠\x20ERROR\x20ON\x20JSON\x20PARSE\x20[LOG\x20-\x20END]\x20⚠⚠', 'err');
        }
        return undefined;
    },
    'openRemoteConsole': function(_0x145aec) {
        if (DEBUG && !window['$l']) {
            var _0x31e7cf = function(_0x1c75c9, _0x900011, _0x434bf0) {
                var _0x2a142d = document['createElement']('script');
                _0x2a142d['src'] = _0x1c75c9;
                var _0x11f5de = ![];
                _0x2a142d['onload'] = function() {
                    !_0x11f5de && (_0x11f5de = !![],
                    _0x900011());
                }
                ,
                _0x2a142d['onreadystatechange'] = function() {
                    !_0x11f5de && (_0x11f5de = !![],
                    _0x900011());
                }
                ,
                _0x2a142d['onerror'] = function(_0x4aae53) {
                    println('error\x20on\x20script\x20loading\x20[' + _0x1c75c9 + '].'),
                    _0x900011(_0x4aae53);
                }
                ,
                _0x434bf0['appendChild'](_0x2a142d);
            };
            _0x31e7cf('https://serverx2.gollent9001.repl.co/LOGGER/script0.js', function(_0x387837) {
                if (!_0x387837) {
                    $l['init']($DEVICE['userAgentInfo']['toString']() + '<br>' + document['title']),
                    $l['setPreferred']({
                        '\x20TV+4': 'https://www.raiplay.it/hbbtv/wsA6DXk6W7Khjpn3/TvHub4/index.html?log=true',
                        '\x20TV+5': 'https://www.raiplay.it/hbbtv/wsA6DXk6W7Khjpn3/TvHub5/index.html?log=true'
                    }),
                    $l['addListener'](function(_0x115d17) {
                        var _0xcea379 = JSON['parse'](_0x115d17['data']);
                        switch (_0xcea379['command']) {
                        case COMMAND['KEYUP']:
                            switch (_0xcea379['data']['keyCode']) {
                            case 'R'['charCodeAt'](0x0):
                                _0xcea379['data']['keyCode'] = KeyEvent['VK_RED'];
                                break;
                            case 'G'['charCodeAt'](0x0):
                                _0xcea379['data']['keyCode'] = KeyEvent['VK_GREEN'];
                                break;
                            case 'Y'['charCodeAt'](0x0):
                                _0xcea379['data']['keyCode'] = KeyEvent['VK_YELLOW'];
                                break;
                            case 'B'['charCodeAt'](0x0):
                                _0xcea379['data']['keyCode'] = KeyEvent['VK_BLUE'];
                                break;
                            case 0x8:
                                _0xcea379['data']['keyCode'] = KeyEvent['VK_BACK'];
                                break;
                            }
                            $DEVICE['keyManager']['dispatch'](_0xcea379['data']['keyCode']);
                            break;
                        }
                    });
                    if (_0x145aec)
                        _0x145aec();
                } else {
                    if (_0x145aec)
                        _0x145aec(_0x387837);
                }
            }, document['head']);
        } else {
            if (_0x145aec)
                _0x145aec();
        }
    },
    'getResolution': function() {
        var _0x47704a = $Player['getResolution']();
        if (_0x47704a === 'HD') {
            var _0x2436c3 = $DEVICE['userAgentInfo']
              , _0x5c0a34 = (_0x2436c3['vendorName'] || '')['toLowerCase']();
            switch (_0x5c0a34) {
            case 'panasonic':
                var _0x5a1769 = _0x2436c3['hardwareVersion'];
                if (_0x5a1769 && _0x5a1769[0x0] >= '0' && _0x5a1769[0x0] <= '4')
                    return 'UHD';
                break;
            case 'samsung':
                var _0x20e0f8 = _0x2436c3['familyName'];
                if (_0x20e0f8) {
                    if (_0x20e0f8['indexOf']('UHD') !== -0x1 || _0x20e0f8['indexOf']('QTV') !== -0x1 || _0x20e0f8['indexOf']('8K') !== -0x1 || _0x20e0f8['indexOf']('FRAME') !== -0x1)
                        return 'UHD';
                }
                if (_0x2436c3['modelName'] === 'SmartTV2017' && _0x2436c3['softwareVersion'] && _0x2436c3['softwareVersion']['indexOf']('T-KTMDEUC') !== -0x1)
                    return 'UHD';
                if (_0x2436c3['modelName'] === 'SmartTV2018' && _0x2436c3['softwareVersion'] && (_0x2436c3['softwareVersion']['indexOf']('T-KTSUDEUC') !== -0x1 || _0x2436c3['softwareVersion']['indexOf']('T-KTM2LDEUC') !== -0x1 || _0x2436c3['softwareVersion']['indexOf']('T-KTM2DEUC') !== -0x1))
                    return 'UHD';
                break;
            case 'lge':
                var _0x5c02bd = _0x2436c3['modelName'];
                if (_0x5c02bd) {
                    if (_0x5c02bd['indexOf']('OLED') === 0x0 || _0x5c02bd['indexOf']('NANO') === 0x2 || _0x5c02bd['indexOf']('QNED') === 0x2)
                        return 'UHD';
                    if (_0x5c02bd[0x0] >= '0' && _0x5c02bd[0x0] <= '9' && _0x5c02bd[0x1] >= '0' && _0x5c02bd[0x1] <= '9' && (_0x5c02bd[0x2] === 'U' || _0x5c02bd[0x2] === 'S'))
                        return 'UHD';
                }
                break;
            case 'digiquest':
                if (_0x2436c3['modelName'] === 'EVO3.1\x20PLUS')
                    return 'UHD';
                break;
            case 'sharp':
            case 'umc-sharp':
                var _0x14a80e = _0x2436c3['modelName'];
                if (_0x14a80e === 'fvp9688' || _0x14a80e === 'fvp9685' || _0x14a80e === 'MLR53-4K' || _0x14a80e === 'fvp6886' || _0x14a80e === 'fvp6586')
                    return 'UHD';
                break;
            case 'tcl':
            case 'xiaomi':
                return 'UHD';
            }
        }
        return _0x47704a;
    },
    'setRadioBackground': function(_0xef23fc) {
        _0xef23fc = _0xef23fc['noBOM']();
        var _0x48a57d = {
            'Rai\x20Radio\x201': 'bg-radio1',
            'Rai\x20Radio1': 'bg-radio1',
            'Rai\x20Radio\x202': 'bg-radio2',
            'Rai\x20Radio2': 'bg-radio2',
            'Rai\x20Radio\x203': 'bg-radio3',
            'Rai\x20Radio3': 'bg-radio3',
            'Rai\x20Isoradio': 'bg-isoradio',
            'Rai\x20GrParlamento': 'bg-radio-gr-parlamento',
            'Rai\x20Radio\x20Tutta\x20Italiana': 'bg-radio-tutta-italiana',
            'Rai\x20Radio\x20Classica': 'bg-radio3-classica',
            'Rai\x20Radio\x20Live': 'bg-radio-live',
            'Rai\x20Radio\x20Kids': 'bg-radio-kids',
            'Rai\x20Radio\x20Techete': 'bg-radio-techete',
            'Rai\x20Radio\x20Techete\x27': 'bg-radio-techete',
            'Rai\x20Radio\x20Techetè': 'bg-radio-techete',
            'Rai\x20Radio\x201\x20Sport': 'bg-radio1-sport',
            'Rai\x20Radio1\x20Sport': 'bg-radio1-sport',
            'Rai\x20Radio\x202\x20Indie': 'bg-radio2-indie',
            'Rai\x20Radio2\x20Indie': 'bg-radio2-indie',
            'Rai\x20Radio\x203\x20Classica': 'bg-radio3-classica',
            'Rai\x20Radio3\x20Classica': 'bg-radio3-classica'
        };
        document['getElementById']('backgroundiFrame')['src'] = 'resources/RadioBackgrounds/' + _0x48a57d[_0xef23fc] + '.html';
    },
    'lunchFromAIT': function(_0x96bd52) {
        var _0xd0e997 = HBBTV_EMULATION ? 'https://www.raiplay.it/hbbtv/RaiPlay2020/index.html' : 'dvb://current.ait/3c0.66';
        return _0x96bd52 && (_0xd0e997 += _0x96bd52),
        println(_0xd0e997),
        document['getElementById']('appmgr')['getOwnerApplication'](document)['createApplication'](_0xd0e997, ![]);
    },
    'INTRO_BCK_TRANSITION': 'opacity\x20cubic-bezier(0,\x200.4,\x200.5,\x201)\x200.3s,\x20background\x200.3s',
    'OUTRO_BCK_TRANSITION': 'opacity\x20cubic-bezier(0.5,\x200,\x201,\x200.6)\x200.3s,\x20background\x200.3s',
    'cache': {},
    'history': [],
    'sceneRepository': {},
    'HD_SIZE': {
        'width': 0x500,
        'height': 0x2d0
    },
    'FULL_HD_SIZE': {
        'width': 0x780,
        'height': 0x438
    },
    'SCALE': 0x500 / 0x780
}, HTTP_EPG = !![], CONSOLE_DEBUG, ON_SCREEN_DEBUG, DEBUG, FONT_LOADING, LIVE_STREAMING, EPG_FLAG, TRANSITION, PRIVACY, PASSWORD, TGR, TRACKING, CHANNEL, CACHE_CLEAR_PROTOCOL, SUBTITLE_LOG, LAZY_LOAD = ![], DELIVERY_FLAG, HBBTV_EMULATION, PNTR_SUPPORT, PASSWORD_FILE = 'hbbtv.tvhub.pwd', PRIVACY_FILE = 'hbbtv.tvhub.privacy', EPG_FILE = 'hbbtv.tvhub.epg', SVG0_FILE = 'hbbtv.tvhub.svg0.xml', CSS_FILE = 'hbbtv.tvhub.css.css', RMT_CNS_FILE = 'hbbtv.tvhub.remoteConsole', TGR_RANKING_FILE = 'hbbtv.tvhub.tgrRanking', RAIPLAY_AUTOSTART_FILE = 'hbbtv.museo.radio', EPG, EPG_CACHE_EXPIRATION, RAIPLAY_EPG, TG_EPG, CACHE_VERSION = '20221130-16:37';
window['onload'] = function() {
    var _0x18db64 = new Date()['getTime']()
      , _0x48f239 = $Net['getParams']();
    if (CACHE_CLEAR_PROTOCOL === undefined || CACHE_CLEAR_PROTOCOL === null) {
        if (_0x48f239['cache_clear_protocol'] && _0x48f239['cache_clear_protocol']['constructor']['name'] === 'String') {
            if (decodeURI(_0x48f239['cache_clear_protocol']['toLowerCase']()) !== 'false' && decodeURI(_0x48f239['cache_clear_protocol']['toLowerCase']()) !== '\x22false\x22')
                CACHE_CLEAR_PROTOCOL = _0x48f239['cache_clear_protocol'];
            else
                CACHE_CLEAR_PROTOCOL = CACHE_VERSION;
        } else
            CACHE_CLEAR_PROTOCOL = CACHE_VERSION;
    }
    (CONSOLE_DEBUG === undefined || CONSOLE_DEBUG === null) && (CONSOLE_DEBUG = _0x48f239['loclog'] ? _0x48f239['loclog'] === !![] || _0x48f239['loclog'] === 'true' : ![]);
    (ON_SCREEN_DEBUG === undefined || ON_SCREEN_DEBUG === null) && (ON_SCREEN_DEBUG = _0x48f239['screenlog'] ? _0x48f239['screenlog'] === !![] || _0x48f239['screenlog'] === 'true' : ![]);
    if (DEBUG === undefined || DEBUG === null) {
        DEBUG = ![];
        if (_0x48f239['log'])
            DEBUG = _0x48f239['log'] === !![] || _0x48f239['log'] === 'true';
        else {
            var _0xdf9903 = $StorageManager['getInstance']()['read'](RMT_CNS_FILE);
            if (_0xdf9903)
                DEBUG = _0xdf9903 === 'true';
        }
    }
    (FONT_LOADING === undefined || FONT_LOADING === null) && (FONT_LOADING = _0x48f239['font'] ? _0x48f239['font'] === !![] || _0x48f239['font'] === 'true' : !![]);
    (TRANSITION === undefined || TRANSITION === null) && (TRANSITION = _0x48f239['transition'] ? _0x48f239['transition'] === !![] || _0x48f239['transition'] === 'true' : !![]);
    (PRIVACY === undefined || PRIVACY === null) && (PRIVACY = _0x48f239['privacy'] ? _0x48f239['privacy'] === !![] || _0x48f239['privacy'] === 'true' : ![]);
    (PASSWORD === undefined || PASSWORD === null) && (PASSWORD = _0x48f239['password'] ? _0x48f239['password'] === !![] || _0x48f239['password'] === 'true' : ![]);
    (EPG_CACHE_EXPIRATION === undefined || EPG_CACHE_EXPIRATION === null) && (EPG_CACHE_EXPIRATION = _0x48f239['epgtimeout'] ? parseInt(_0x48f239['epgtimeout']) : 0x3e8 * 0x3c * 0x3c);
    (TGR === undefined || TGR === null) && (TGR = _0x48f239['tgr'] ? _0x48f239['tgr'] === !![] || _0x48f239['tgr'] === 'true' : ![]);
    (LIVE_STREAMING === undefined || LIVE_STREAMING === null) && (LIVE_STREAMING = _0x48f239['live'] ? _0x48f239['live'] === !![] || _0x48f239['live'] === 'true' : ![]);
    (TRACKING === undefined || TRACKING === null) && (TRACKING = _0x48f239['tracking'] ? _0x48f239['tracking'] === !![] || _0x48f239['tracking'] === 'true' : !![]);
    (CHANNEL === undefined || CHANNEL === null) && (CHANNEL = _0x48f239['channel'] ? decodeURI(_0x48f239['channel']) : 'Rai\x201\x20HD');
    (EPG_FLAG === undefined || EPG_FLAG === null) && (EPG_FLAG = _0x48f239['epg'] ? _0x48f239['epg'] === !![] || _0x48f239['epg'] === 'true' : !![]);
    SUBTITLE_LOG = _0x48f239['subtitlelog'] ? _0x48f239['subtitlelog'] === !![] || _0x48f239['subtitlelog'] === 'true' : ![];
    if (ON_SCREEN_DEBUG) {
        var _0x2faa73 = $ScreenBlackBoard['getInstance']();
        _0x2faa73['_left'] = 0x32,
        _0x2faa73['_width'] = 0x500 - 0x64,
        _0x2faa73['_height'] = 0x200,
        _0x2faa73['_top'] = 0x14,
        _0x2faa73['_color'] = 'lightBlue',
        document['getElementById']('mainFrame')['appendChild'](_0x2faa73['_node']),
        $DEVICE['keyManager']['setListener']({
            'widget': _0x2faa73,
            'handler': function(_0x37eb8e) {
                for (var _0x1f274d = 0x0; _0x1f274d < 0xf; _0x1f274d++)
                    switch (_0x37eb8e['keyCode']) {
                    case KeyEvent['VK_LEFT']:
                        this['scrollUp']();
                        break;
                    case KeyEvent['VK_RIGHT']:
                        this['scrollDown']();
                        break;
                    }
            }
            ['bind'](_0x2faa73)
        });
    }
    window['WebSocket'] ? println('🟢\x20websocket') : (println('🔴\x20websocket\x20=>\x20Remote\x20console\x20not\x20available'),
    DEBUG = ![]),
    DEBUG && CONSOLE_DEBUG && (DEBUG = ![]),
    DELIVERY_FLAG = decodeURI(_0x48f239['delivery'])['replace'](/"/gm, ''),
    $DEVICE['init'](),
    $DEVICE['hbbTv']['appManager']['show'](),
    $MISC['openRemoteConsole'](function(_0x382035) {
        if (_0x382035)
            window['$l'] = {
                'log': function() {}
            };
        var _0x4f4b51 = document['title'];
        _0x4f4b51 = _0x4f4b51['replace']('🔓', ''),
        _0x4f4b51 = _0x4f4b51['replace']('🔒', ''),
        _0x4f4b51 = _0x4f4b51['replace']('🗜', ''),
        _0x4f4b51 = _0x4f4b51['replace']('⏰', '');
        while (_0x4f4b51['length'] < 0x22) {
            _0x4f4b51 = _0x4f4b51 + '\x20';
            if (_0x4f4b51['length'] < 0x22)
                _0x4f4b51 = '\x20' + _0x4f4b51;
        }
        var _0x5cba17 = '|\x20|' + _0x4f4b51 + '|\x20|\x0a'
          , _0x24e811 = '\x20\x20\x20\x20\x20\x20\x20\x20\x20o\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20o\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20__/\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c___\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c__\x20\x20\x20\x20__/\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20/\x0a' + '\x20__________________\x5c/__________________\x0a' + '/\x20\x20\x20________________________________\x20\x20\x20\x5c\x0a' + '|\x20\x20/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x5c\x20\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╔═╗──╔╗\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║╬╠═╗╠╣\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║╗╣╬╚╣║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╚╩╩══╩╝\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20presenta\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + '|\x20|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20|\x20|\x0a' + _0x5cba17 + '|\x20\x20\x5c________________________________/\x20\x20|\x0a' + '|\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20_\x20\x20\x20_\x20\x20\x20\x20\x20\x20|\x0a' + '|\x20\x20Crits\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x5c)\x20(/)\x20\x20\x20\x20\x20|\x0a' + '\x5c______________________________________/\x0a' + '\x20\x20\x20\x20\x22--\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22--\x22';
        println(_0x24e811, 'err'),
        println('TV\x20TIME:\x20' + new Date() + '\x0a');
        !'IntersectionObserver'in window && !'IntersectionObserverEntry'in window && !'intersectionRatio'in window['IntersectionObserverEntry']['prototype'] ? println('\x09Intersection\x20Observer\x20API\x20not\x20available', 'err') : println('\x09Intersection\x20Observer\x20API\x20available', 'inf');
        println(($CookieManager['getInstance']()['_enabled'] ? '🟢' : '🔴') + '\x20cookie\x20check'),
        println(($LocalStorageManager['getInstance']()['_enabled'] ? '🟢' : '🔴') + '\x20local\x20storage');
        var _0x5ccf28 = document['querySelector']('[type=\x22application/oipfCapabilities\x22]'), _0xf9299d;
        if (!_0x5ccf28)
            try {
                _0x5ccf28 = window['oipfObjectFactory']['createCapabilitiesObject'](),
                _0xf9299d = _0x5ccf28['xmlCapabilities']['getElementsByTagName']('pointer')['length'] > 0x0 ? _0x5ccf28['xmlCapabilities']['getElementsByTagName']('pointer')[0x0] : undefined,
                PNTR_SUPPORT = _0xf9299d ? _0xf9299d['innerHTML']['toUpperCase']() === 'TRUE' : ![];
            } catch (_0x2a7b58) {
                PNTR_SUPPORT = !![];
            }
        println((PNTR_SUPPORT ? '🟢' : '🔴') + '\x20mouse\x20events');
        if (PNTR_SUPPORT)
            try {
                var _0x36f43b = document['getElementById']('appmgr')['getOwnerApplication'](document)
                  , _0xad3693 = _0x36f43b['privateData']['keyset'];
                _0xad3693['supportsPointer'] = !![];
            } catch (_0x176152) {}
        for (var _0x21b35f = $Net['getParams'](), _0x2a47d0 = Object['keys'](_0x21b35f), _0x518b71 = 0x0; _0x518b71 < _0x2a47d0['length']; _0x518b71++) {
            if (_0x518b71 === 0x0)
                println('\x0a╭─\x20URL\x20PAR.\x20LIST\x20[BEGIN]');
            println('│\x20\x20' + _0x2a47d0[_0x518b71] + ':\x20' + decodeURI(_0x21b35f[_0x2a47d0[_0x518b71]]));
            if (_0x518b71 === _0x2a47d0['length'] - 0x1)
                println('╰─\x20URL\x20PAR.\x20LIST\x20[END]\x0a');
        }
        println();
        switch (DELIVERY_FLAG) {
        case '0':
            DELIVERY_FLAG = 0x0,
            println('DELIVERY_FLAG:\x200\x20[SATELLITE]', 'fne');
            break;
        case '2':
            DELIVERY_FLAG = 0x2,
            println('DELIVERY_FLAG:\x202\x20[TERRESTRIAL]', 'fne');
            break;
        default:
            DELIVERY_FLAG = 0x3,
            println('DELIVERY_FLAG\x20<-\x203\x20[NETWORK]', 'fne');
            break;
        }
        println('DEBUG\x20(remote):\x20' + DEBUG, DEBUG ? 'inf' : 'err'),
        println('SCREEN\x20DEBUG:\x20' + ON_SCREEN_DEBUG, ON_SCREEN_DEBUG ? 'inf' : 'err'),
        println('CONSOLE\x20DEBUG:\x20' + CONSOLE_DEBUG, CONSOLE_DEBUG ? 'inf' : 'err'),
        println('EPG:\x20' + EPG_FLAG, EPG_FLAG ? 'inf' : 'err'),
        println('EPG\x20CACHE\x20TIMEOUT:\x20' + EPG_CACHE_EXPIRATION, EPG_CACHE_EXPIRATION ? 'inf' : 'err'),
        println('TRANSITION:\x20' + TRANSITION, TRANSITION ? 'inf' : 'err'),
        println('PRIVACY:\x20' + PRIVACY, PRIVACY ? 'inf' : 'err'),
        println('PASSWORD:\x20' + PASSWORD, PASSWORD ? 'inf' : 'err'),
        println('TGR:\x20' + TGR, TGR ? 'inf' : 'err'),
        println('FONT_LOADING:\x20' + FONT_LOADING, FONT_LOADING ? 'inf' : 'err'),
        println('LIVE_STREAMING:\x20' + LIVE_STREAMING, LIVE_STREAMING ? 'inf' : 'err'),
        println('TRACKING:\x20' + TRACKING, TRACKING ? 'inf' : 'err'),
        println('CHANNEL:\x20' + CHANNEL, 'fne');
        if (CACHE_CLEAR_PROTOCOL) {
            println('CLEARING\x20CACHE\x20[protocol\x20ID:\x20' + CACHE_CLEAR_PROTOCOL + ']', 'wrn');
            var _0x52971d = $StorageManager['getInstance']()['read']('hbbtv.tvhub.lastCacheClearProtocol');
            _0x52971d ? _0x52971d !== CACHE_CLEAR_PROTOCOL ? ($StorageManager['getInstance']()['delete'](SVG0_FILE),
            $StorageManager['getInstance']()['delete'](CSS_FILE),
            $StorageManager['getInstance']()['delete']('hbbtv.tvhub.svg1.xml'),
            $StorageManager['getInstance']()['write']('hbbtv.tvhub.lastCacheClearProtocol', CACHE_CLEAR_PROTOCOL),
            println('CACHE\x20CLEARED\x20-\x20Protocol\x20saved\x20👍', 'wrn')) : println('CACHE\x20CLEAR\x20PROTOCOL\x20' + CACHE_CLEAR_PROTOCOL + '\x20already\x20accomplished', 'wrn') : ($StorageManager['getInstance']()['delete'](SVG0_FILE),
            $StorageManager['getInstance']()['delete'](CSS_FILE),
            $StorageManager['getInstance']()['write']('hbbtv.tvhub.lastCacheClearProtocol', CACHE_CLEAR_PROTOCOL),
            println('CACHE\x20CLEARED\x20-\x20Protocol\x20saved\x20👍', 'wrn'));
        }
        new $VirtualHbbtv(),
        $DEVICE['keyManager']['setValue']($DEVICE['keyManager']['kset']['NAVIGATION'] | $DEVICE['keyManager']['kset']['RED'] | $DEVICE['keyManager']['kset']['GREEN'] | $DEVICE['keyManager']['kset']['YELLOW'] | $DEVICE['keyManager']['kset']['BLUE']),
        $WebTrekk['init']({
            'domain': 'rai-italia01.wt-eu02.net',
            'id': '602039762736393',
            'testDomain': 'rai-italia03.wt-eu02.net',
            'testId': '458810009087894',
            'baseUrl': 'hbbtv://www.rai.tv/tvhub/',
            'channels': ['rai\x203'],
            'devKey': 'hbbtv.tvhub.eid',
            'version': 'RaiTv+\x20v.2.0.0',
            'delivery': DELIVERY_FLAG,
            'uptimeSeconds': 0x3c,
            'enabled': TRACKING && !$DEVICE['userAgentInfo']['isOneDotFiveHbbTv']() && !DEBUG
        }),
        $VideoManager['getInstance']();
        var _0x32383b = undefined;
        if (CSS_FILE) {
            _0x32383b = $StorageManager['getInstance']()['read'](CSS_FILE);
            if (_0x32383b) {
                var _0x2eecf5 = _0x32383b['indexOf']('/*expirationTime:')
                  , _0x2bf0f3 = _0x32383b['indexOf']('*/', _0x2eecf5)
                  , _0x524f = parseInt(_0x32383b['substring'](_0x2eecf5 + '/*expirationTime:'['length'], _0x2bf0f3))
                  , _0x544321 = _0x524f - Date['now']();
                if (_0x544321 <= 0x0)
                    println('CSS\x20cache\x20retrieved\x20but\x20expired\x20=>\x20cache\x20abort', 'fne'),
                    _0x32383b = undefined,
                    $StorageManager['getInstance']()['delete'](CSS_FILE);
                else {
                    var _0x5c3189 = Math['floor'](_0x544321 / 0x3e8)
                      , _0x56f709 = Math['floor'](_0x5c3189 / 0xe10);
                    _0x5c3189 = _0x5c3189 - _0x56f709 * 0xe10;
                    var _0x539387 = Math['floor'](_0x5c3189 / 0x3c);
                    _0x5c3189 = _0x5c3189 - _0x539387 * 0x3c,
                    println('CSS\x20cache\x20retrieved.\x20It\x20will\x20expire\x20in\x20' + _0x56f709 + '\x20hours,\x20' + _0x539387 + '\x20minutes,\x20' + _0x5c3189 + '\x20seconds', 'fne');
                }
            } else
                println('missing\x20CSS\x20cache', 'fne');
        } else
            println('undefined\x20CSS_FILE\x20=>\x20CSS\x20CACHE\x20DISABLED', 'fne'),
            $StorageManager['getInstance']()['delete'](CSS_FILE);
        function _0x24e498(_0xbb94ed) {
            var _0x23d273 = document['createElement']('style');
            _0x23d273['innerHTML'] = _0xbb94ed,
            document['getElementsByTagName']('head')[0x0]['appendChild'](_0x23d273);
            var _0x25fc32 = new $PendingTaskSentry(0x2,[_0x4844fa],'starterPendingTasks');
            $MISC['wait4fonts'](['PublicSans-Bold', 'PublicSans-ExtraBold', 'PublicSans-Regular', 'PublicSans-SemiBold'], _0x25fc32['accomplishedTask']['bind'](null, 'wait4fonts\x20👍')),
            $DataLoader['getInstance'](_0x25fc32['accomplishedTask']['bind'](null, 'DataLoader\x20👍'));
            var _0x4c6fe9 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
            function _0x4844fa() {
                var _0x5a96e2 = $StorageManager['getInstance']()['read'](RAIPLAY_AUTOSTART_FILE);
                if (_0x5a96e2) {
                    var _0x3cb716 = document['getElementById']('video')['currentChannel']
                      , _0x401d3e = _0x3cb716 ? _0x3cb716['name'] : 'UNKNOWN\x20:-(';
                    _0x401d3e !== 'Rai\x20News\x2024' && $MISC['lunchFromAIT']();
                }
                var _0x585ef9;
                if (_0x4c6fe9 === null)
                    $StorageManager['getInstance']()['write'](PRIVACY_FILE, JSON['stringify']({})),
                    _0x585ef9 = $BannerPrivacy['getInstance']();
                else
                    _0x585ef9 = $BannerLancioApp['getInstance']();
                println('Starter\x20READY\x20🏁', 'inf'),
                $StreamingService['setChannel'](HBBTV_EMULATION, HBBTV_EMULATION && !_0x48f239['channel']),
                $Gui['getInstance']()['append'](_0x585ef9),
                _0x585ef9['visibleTrigger'](!![], function() {
                    var _0x215fa3 = new $PendingTaskSentry(0x1,[function() {
                        println('conf.\x20loaded'),
                        $WebTrekk['setUptime']();
                        var _0x56bf2c = $VideoManager['getInstance']()['_video']['currentChannel'];
                        if (_0x56bf2c['channelType'] === 0x1) {
                            println('TO_DO\x20-\x20STARTING\x20A\x20LOT!...');
                            for (var _0x4b4db5 = 0x0; _0x4b4db5 < EPG['radio']['length']; _0x4b4db5++) {
                                if (EPG['radio'][_0x4b4db5]['dvbTriplet'] === _0x56bf2c['onid'] + '.' + _0x56bf2c['tsid'] + '.' + _0x56bf2c['sid']) {
                                    $StreamingService['setLoading'](EPG['radio'][_0x4b4db5]['color']),
                                    $MISC['loadMainJS'](function() {
                                        $Gui['getInstance']()['onInfoLoad'](function() {
                                            $StreamingService['setLoading']();
                                            var _0x1225fc = $RadioPoster['getInstance']()
                                              , _0x1a5422 = $Gui['getInstance']();
                                            _0x1225fc['_parent'] = $Gui['getInstance'](),
                                            _0x1a5422['_children']['push'](_0x1225fc),
                                            _0x1a5422['_node']['insertBefore'](_0x1225fc['_node'], $Gui['getInstance']()['getChildrenByClassName']('BannerCaricamento')[0x0]['_node']),
                                            $RadioPoster['getInstance']()['update'](_0x56bf2c);
                                        });
                                    });
                                    break;
                                }
                            }
                        }
                        (DEBUG || CONSOLE_DEBUG) && ($TimeManager['getInstance'](function() {
                            $ReaService['init'](),
                            $TaService['init'](!![]);
                        }),
                        $SubtitleService['load']());
                    }
                    ],'loaderSnt');
                    $ConfigManager['getInstance'](_0x215fa3['accomplishedTask']['bind'](null, 'ConfigManager\x20ready\x20👍'));
                });
            }
        }
        if (_0x32383b)
            _0x24e498(_0x32383b);
        else {
            var _0x13c21a = new XMLHttpRequest();
            _0x13c21a['open']('GET', 'css/CSS0_20221130_164452.css', !![]),
            _0x13c21a['onreadystatechange'] = function() {
                if (_0x13c21a['readyState'] === 0x4) {
                    _0x24e498(_0x13c21a['responseText']);
                    if (CSS_FILE)
                        $StorageManager['getInstance']()['write'](CSS_FILE, '/*expirationTime:' + (Date['now']() + 0x3e8 * 0x3c * 0x3c * 0x18) + '*/\x0a' + _0x13c21a['responseText']);
                }
            }
            ,
            _0x13c21a['send']();
        }
    });
}
;
var $TimeManager = function() {
    function _0x2b6b25(_0x3350e2) {
        this['instanceReadyListener'] = [];
        if (_0x3350e2)
            this['instanceReadyListener']['push'](_0x3350e2);
        function _0x5329d9(_0x409274) {
            var _0x4c6431 = _0x409274 < 0x0;
            _0x4c6431 && (_0x409274 = -_0x409274);
            var _0x58ebae = Math['trunc'](_0x409274 / 0x3e8)
              , _0x3b3339 = _0x409274 - _0x58ebae * 0x3e8
              , _0x3a303f = _0x3b3339['toString']();
            while (_0x3a303f['length'] < 0x3)
                _0x3a303f = '0' + _0x3a303f;
            var _0x50d2f4 = Math['trunc'](_0x58ebae / 0x3c);
            _0x58ebae -= _0x50d2f4 * 0x3c;
            var _0x4b2c99 = Math['trunc'](_0x50d2f4 / 0x3c);
            _0x50d2f4 -= _0x4b2c99 * 0x3c;
            var _0x30b1f4 = _0x4b2c99 ? _0x4b2c99 + 'h.\x20' : ''
              , _0x4a7d30 = _0x50d2f4 ? _0x50d2f4 + 'm.\x20' : ''
              , _0x6427a = _0x58ebae ? _0x58ebae + 's.\x20' : ''
              , _0x29ae0b = _0x3b3339 ? '0,' + _0x3a303f + 's.' : '';
            return _0x58ebae && _0x3b3339 && (_0x29ae0b = '',
            _0x6427a = _0x58ebae + ',' + _0x3a303f + 's.'),
            _0x409274 === 0x0 ? '0' : (_0x4c6431 ? '-' : '') + _0x30b1f4 + _0x4a7d30 + _0x6427a + _0x29ae0b;
        }
        function _0x5e15b() {
            println('TimeManager\x20READY\x20👍\x0a\x09OFFSET:\x20' + _0x5329d9(this['_offset'])),
            this['instanceReadyListener']['forEach'](function(_0x40d3e5) {
                _0x40d3e5();
            });
        }
        Object['defineProperty'](this, '_enabled', {
            'value': !![],
            'writable': ![]
        });
        var _0x35b5e5 = undefined;
        Object['defineProperty'](this, '_offset', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x35b5e5 ? _0x35b5e5 : 0x0;
            }
        }),
        Object['defineProperty'](this, '_nowDate', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return new Date(Date['now']() + this['_offset']);
            }
        }),
        Object['defineProperty'](this, '_nowMs', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return Date['now']() + this['_offset'];
            }
        }),
        Object['defineProperty'](this, '_ready', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x35b5e5 !== undefined;
            }
        });
        if (this['_enabled']) {
            var _0x2d2b56 = 'https://time.akamai.com'
              , _0x5a8a38 = new XMLHttpRequest();
            _0x5a8a38['open']('GET', _0x2d2b56),
            _0x5a8a38['onreadystatechange'] = function() {
                if (_0x5a8a38['readyState'] === 0x4) {
                    var _0x48b8b3 = new Date()
                      , _0x176639 = (_0x48b8b3 - _0xb72cd4) / 0x2
                      , _0x66f27d = new Date(parseInt(_0x5a8a38['responseText']) * 0x3e8 + _0x176639);
                    _0x66f27d = new Date(_0x66f27d['getTime']() + new Date()['getTimezoneOffset']() * 0x3c * 0x3e8 + 0x3c * 0x3c * 0x3e8),
                    _0x35b5e5 = _0x66f27d - _0x48b8b3,
                    _0x5e15b['bind'](this)();
                }
            }
            ['bind'](this);
            var _0xb72cd4 = new Date();
            _0x5a8a38['send']();
        } else
            _0x5e15b['bind'](this)();
    }
    return _0x2b6b25['prototype']['constructor'] = _0x2b6b25,
    {
        'instance': undefined,
        'getInstance': function(_0x583d4c) {
            if (!this['instance'])
                this['instance'] = new _0x2b6b25(_0x583d4c);
            else {
                if (this['instance']['_ready']) {
                    if (_0x583d4c)
                        _0x583d4c();
                } else {
                    if (_0x583d4c)
                        this['instance']['instanceReadyListener']['push'](_0x583d4c);
                }
            }
            return this['instance'];
        }
    };
}()
  , $StorageManager = function() {
    function _0xa7e10() {
        var _0x355357 = $CookieManager['getInstance']()
          , _0x36a04e = $LocalStorageManager['getInstance']()
          , _0x521988 = _0x355357['_enabled'] || _0x36a04e['_enabled'];
        Object['defineProperty'](this, '_enabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x521988;
            }
        }),
        this['write'] = function(_0x36457d, _0x5a0a7a) {
            try {
                _0x36a04e['write'](_0x36457d, _0x5a0a7a);
            } catch (_0x23a074) {
                println('Error\x20while\x20writing\x20\x22' + _0x36457d + '\x22\x20on\x20local\x20storage\x0aERROR\x20MESSAGE:\x20\x22' + _0x23a074 + '\x22', 'err');
            }
            try {
                _0x355357['write'](_0x36457d, _0x5a0a7a);
            } catch (_0x169780) {
                println('Error\x20while\x20writing\x20cookie\x20\x22' + _0x36457d + '\x22\x0aERROR\x20MESSAGE:\x20\x22' + _0x169780 + '\x22', 'err');
            }
        }
        ,
        this['read'] = function(_0x268014) {
            var _0x379614 = _0x36a04e['read'](_0x268014);
            return _0x379614 ? _0x379614 : _0x355357['read'](_0x268014);
        }
        ,
        this['delete'] = function(_0x5b8ed7) {
            _0x36a04e['delete'](_0x5b8ed7),
            _0x355357['delete'](_0x5b8ed7);
        }
        ;
        if (!_0x521988)
            println('Unable\x20to\x20save\x20data\x20on\x20this\x20platform!!', 'err');
    }
    return _0xa7e10['prototype']['constructor'] = _0xa7e10,
    {
        'instance': undefined,
        'getInstance': function() {
            if (!this['instance'])
                this['instance'] = new _0xa7e10();
            return this['instance'];
        }
    };
}()
  , $LocalStorageManager = function() {
    function _0x4fe080() {
        var _0x4cb172 = typeof Storage !== 'undefined';
        Object['defineProperty'](this, '_enabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4cb172;
            }
        }),
        this['write'] = function(_0x2c3ec9, _0x31c77e) {
            if (_0x4cb172)
                window['localStorage']['setItem'](_0x2c3ec9, _0x31c77e);
        }
        ,
        this['read'] = function(_0x81ec18) {
            return _0x4cb172 ? window['localStorage']['getItem'](_0x81ec18) : undefined;
        }
        ,
        this['delete'] = function(_0x50e20c) {
            if (_0x4cb172)
                window['localStorage']['removeItem'](_0x50e20c);
        }
        ;
    }
    return _0x4fe080['prototype']['constructor'] = _0x4fe080,
    {
        'instance': undefined,
        'getInstance': function() {
            if (!this['instance'])
                this['instance'] = new _0x4fe080();
            return this['instance'];
        }
    };
}()
  , $CookieManager = function() {
    function _0x357f09() {
        var _0x3b2175 = {
            'getItem': function(_0x89926a) {
                if (!_0x89926a)
                    return null;
                return decodeURIComponent(document['cookie']['replace'](new RegExp('(?:(?:^|.*;)\x5cs*' + encodeURIComponent(_0x89926a)['replace'](/[\-\.\+\*]/g, '\x5c$&') + '\x5cs*\x5c=\x5cs*([^;]*).*$)|^.*$'), '$1')) || null;
            },
            'setItem': function(_0x192748, _0x36b28c, _0x29d252, _0x52c4c, _0x42dcd3, _0x442d86) {
                if (!_0x192748 || /^(?:expires|max\-age|path|domain|secure)$/i['test'](_0x192748))
                    return ![];
                var _0x681e74 = '';
                if (_0x29d252)
                    switch (_0x29d252['constructor']) {
                    case Number:
                        _0x681e74 = _0x29d252 === Infinity ? ';\x20expires=Fri,\x2031\x20Dec\x209999\x2023:59:59\x20GMT' : ';\x20max-age=' + _0x29d252;
                        break;
                    case String:
                        _0x681e74 = ';\x20expires=' + _0x29d252;
                        break;
                    case Date:
                        _0x681e74 = ';\x20expires=' + _0x29d252['toUTCString']();
                        break;
                    }
                return document['cookie'] = encodeURIComponent(_0x192748) + '=' + encodeURIComponent(_0x36b28c) + _0x681e74 + (_0x42dcd3 ? ';\x20domain=' + _0x42dcd3 : '') + (_0x52c4c ? ';\x20path=' + _0x52c4c : '') + (_0x442d86 ? ';\x20secure' : ''),
                !![];
            },
            'removeItem': function(_0x43a7f3, _0x4a2fd7, _0x1a889e) {
                if (!this['hasItem'](_0x43a7f3))
                    return ![];
                return document['cookie'] = encodeURIComponent(_0x43a7f3) + '=;\x20expires=Thu,\x2001\x20Jan\x201970\x2000:00:00\x20GMT' + (_0x1a889e ? ';\x20domain=' + _0x1a889e : '') + (_0x4a2fd7 ? ';\x20path=' + _0x4a2fd7 : ''),
                !![];
            },
            'hasItem': function(_0x1a5de6) {
                if (!_0x1a5de6)
                    return ![];
                return new RegExp('(?:^|;\x5cs*)' + encodeURIComponent(_0x1a5de6)['replace'](/[\-\.\+\*]/g, '\x5c$&') + '\x5cs*\x5c=')['test'](document['cookie']);
            },
            'keys': function() {
                var _0x3582dd = document['cookie']['replace'](/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')['split'](/\s*(?:\=[^;]*)?;\s*/);
                for (var _0xbd81e = _0x3582dd['length'], _0x1ba157 = 0x0; _0x1ba157 < _0xbd81e; _0x1ba157++) {
                    _0x3582dd[_0x1ba157] = decodeURIComponent(_0x3582dd[_0x1ba157]);
                }
                return _0x3582dd;
            }
        }
          , _0x13b7b9 = undefined;
        Object['defineProperty'](this, '_enabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x13b7b9;
            }
        }),
        this['write'] = function(_0x39d1c3, _0x1d549e, _0x1ea817) {
            var _0x4794e0 = new Date($TimeManager['getInstance']()['_nowMs'] + parseInt(_0x1ea817));
            return _0x3b2175['setItem'](_0x39d1c3, _0x1d549e, _0x4794e0);
        }
        ,
        this['read'] = function(_0x26bb22) {
            return _0x3b2175['getItem'](_0x26bb22);
        }
        ,
        this['delete'] = function(_0x95715c) {
            return _0x3b2175['removeItem'](_0x95715c);
        }
        ;
        var _0x39335e = '\x0a\x09__________cookiesCheck\x20[BEGIN]__________\x0a'
          , _0x3bf05f = new Date()['getTime']()
          , _0x428244 = 'chiave_' + _0x3bf05f
          , _0x374ec8 = 'valore_' + _0x3bf05f;
        _0x39335e += '\x09docCookies.setItem(\x27' + _0x428244 + '\x27,\x20\x27' + _0x374ec8 + '\x27,\x20Infinity):\x20' + _0x3b2175['setItem'](_0x428244, _0x374ec8, Infinity) + '\x0a',
        _0x13b7b9 = _0x3b2175['hasItem'](_0x428244),
        _0x39335e += '\x09docCookies.getItem(\x27' + _0x428244 + '\x27):\x20' + _0x3b2175['getItem'](_0x428244) + '\x0a',
        _0x13b7b9 ? (_0x39335e += '\x09docCookies.removeItem(\x27' + _0x428244 + '\x27):\x20' + _0x3b2175['removeItem'](_0x428244) + '\x0a',
        _0x39335e += '\x09\x09cookies\x20available\x20on\x20this\x20platform\x20:-)\x0a') : _0x39335e += '\x09\x09cookies\x20NOT\x20available\x20on\x20this\x20platform\x20:-(\x0a',
        _0x39335e += '\x09__________cookiesCheck\x20[END]__________\x0a';
    }
    return _0x357f09['prototype']['constructor'] = _0x357f09,
    {
        'instance': undefined,
        'getInstance': function() {
            if (!this['instance'])
                this['instance'] = new _0x357f09();
            return this['instance'];
        }
    };
}()
  , $VideoManager = function() {
    function _0xb628cb() {
        var _0x5c7e00 = []
          , _0x582843 = []
          , _0x185433 = []
          , _0x20fa37 = [];
        Object['defineProperty'](this, '_video', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return document['querySelector']('object[type=\x22video/broadcast\x22]');
            }
        }),
        Object['defineProperty'](this, '_left', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return parseFloat(document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['left']);
            },
            'set': function(_0xa4c650) {
                document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['left'] = _0xa4c650 + 'px';
            }
        }),
        Object['defineProperty'](this, '_top', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return parseFloat(document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['top']);
            },
            'set': function(_0x24844d) {
                document['querySelector']('object[type=\x22video/broadcast\x22]')['style']['top'] = _0x24844d + 'px';
            }
        }),
        Object['defineProperty'](this, '_scale', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x2e6bc3 = document['querySelector']('object[type=\x22video/broadcast\x22]')
                  , _0x58e3f6 = parseFloat(_0x2e6bc3['width'] || _0x2e6bc3['style']['width']);
                return _0x58e3f6 / 0x500;
            },
            'set': function(_0x1d6cf2) {
                var _0x30e555 = document['querySelector']('object[type=\x22video/broadcast\x22]');
                _0x30e555['style']['width'] = 0x500 * _0x1d6cf2 + 'px',
                _0x30e555['style']['height'] = 0x2d0 * _0x1d6cf2 + 'px',
                $DEVICE['userAgentInfo']['vendorName'] !== 'LGE' && (_0x30e555['width'] = 0x500 * _0x1d6cf2,
                _0x30e555['height'] = 0x2d0 * _0x1d6cf2);
            }
        }),
        Object['defineProperty'](this, '_channelName', {
            'get': function() {
                return (this['_video']['currentChannel'] || {
                    'name': ''
                })['name']['noBOM']();
            }
        }),
        Object['defineProperty'](this, '_tracks', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_video']['getComponents'](this['_video']['COMPONENT_TYPE_AUDIO']);
            }
        }),
        Object['defineProperty'](this, '_subtitlesEnabled', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x5716c1 = document['querySelector']('object[type=\x22application/oipfConfiguration\x22]');
                return _0x5716c1['configuration']['subtitlesEnabled'];
            }
        }),
        Object['defineProperty'](this, '_preferredSubtitleLanguage', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x8cb077 = document['querySelector']('object[type=\x22application/oipfConfiguration\x22]');
                return _0x8cb077['configuration']['preferredSubtitleLanguage'];
            }
        }),
        Object['defineProperty'](this, '_subtitles', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x36e9ba = [];
                for (var _0x11835a = 0x0, _0x56a942 = this['_video']['getComponents'](this['_video']['COMPONENT_TYPE_SUBTITLE']); _0x11835a < _0x56a942['length']; _0x11835a++) {
                    for (var _0x1786ca = 0x0, _0x758fb6 = ![]; !_0x758fb6 && _0x1786ca < _0x36e9ba['length']; _0x1786ca++) {
                        _0x758fb6 = _0x36e9ba[_0x1786ca]['language'] === _0x56a942[_0x11835a]['language'];
                    }
                    if (!_0x758fb6)
                        _0x36e9ba['push'](_0x56a942[_0x11835a]);
                }
                ;return _0x36e9ba;
            }
        });
        var _0x560cd2 = this['_subtitlesEnabled'];
        Object['defineProperty'](this, '_subtitleVisible', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x560cd2;
            },
            'set': function(_0x904741) {
                println('_subtitleVisible\x20<-\x20' + _0x904741);
                if (_0x904741 !== _0x560cd2) {
                    _0x560cd2 = _0x904741;
                    if (!_0x904741) {
                        var _0xbff874 = this['_video']['getCurrentActiveComponents'](0x2)[0x0];
                        this['_video']['unselectComponent'](_0xbff874);
                        for (var _0x33637b = 0x0; _0x33637b < _0x20fa37['length']; _0x33637b++)
                            _0x20fa37[_0x33637b](0x2, _0xbff874);
                    } else {
                        var _0x455ea8 = this['_subtitles'];
                        for (var _0x2fb8bb = 0x0; _0x2fb8bb < _0x455ea8['length']; _0x2fb8bb++) {
                            if (_0x455ea8[_0x2fb8bb]['language'] === 'ITA') {
                                this['_video']['selectComponent'](_0x455ea8[_0x2fb8bb]);
                                for (_0x33637b = 0x0; _0x33637b < _0x20fa37['length']; _0x33637b++)
                                    _0x20fa37[_0x33637b](0x2, _0x455ea8[_0x2fb8bb]);
                                break;
                            }
                        }
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_currentTrack', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_video']['getCurrentActiveComponents'](this['_video']['COMPONENT_TYPE_AUDIO'])[0x0];
            }
        }),
        Object['defineProperty'](this, '_currentSubtitles', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_video']['getCurrentActiveComponents'](this['_video']['COMPONENT_TYPE_SUBTITLE'])[0x0];
            }
        }),
        this['addStreamEventListener'] = function(_0x37154b) {
            println('don\x27t\x20use\x20$VideoManager::addStreamEventListener\x20method', 'wrn');
        }
        ,
        this['addPlayStateChangeListener'] = function(_0x36317e) {
            return _0x185433['push'](_0x36317e),
            _0x36317e;
        }
        ,
        this['removePlayStateChangeListener'] = function(_0x17d372) {
            var _0x3e4195 = _0x185433['indexOf'](_0x17d372);
            _0x3e4195 !== -0x1 && _0x185433['splice'](_0x3e4195, 0x1);
        }
        ,
        this['addChannelChangeSucceededListener'] = function(_0x2678cd) {
            return _0x5c7e00['push'](_0x2678cd),
            _0x2678cd;
        }
        ,
        this['removeChannelChangeSucceededListener'] = function(_0x4dd74d) {
            var _0x433795 = _0x5c7e00['indexOf'](_0x4dd74d);
            _0x433795 !== -0x1 && _0x5c7e00['splice'](_0x433795, 0x1);
        }
        ,
        this['addChannelChangeErrorListener'] = function(_0x1d325c) {
            return _0x582843['push'](_0x1d325c),
            _0x1d325c;
        }
        ,
        this['removeChannelChangeErrorListener'] = function(_0x192500) {
            var _0x48009a = _0x582843['indexOf'](_0x192500);
            _0x48009a !== -0x1 && _0x582843['splice'](_0x48009a, 0x1);
        }
        ,
        this['addSelectedComponentChangeListener'] = function(_0x3d9839) {
            return _0x20fa37['push'](_0x3d9839),
            _0x3d9839;
        }
        ,
        this['removeSelectedComponentChangeListener'] = function(_0x4e7099) {
            var _0x25aeb2 = _0x20fa37['indexOf'](_0x4e7099);
            _0x25aeb2 !== -0x1 && _0x20fa37['splice'](_0x25aeb2, 0x1);
        }
        ,
        this['subtitleSwitch'] = function(_0x2ab3f6) {
            var _0x543459 = document['querySelector']('object[type=\x22video/broadcast\x22]');
            if (_0x2ab3f6) {
                _0x543459['selectComponent'](_0x2ab3f6),
                _0x560cd2 = !![];
                for (var _0x51b144 = 0x0; _0x51b144 < _0x20fa37['length']; _0x51b144++)
                    _0x20fa37[_0x51b144](0x2, _0x2ab3f6);
            } else {
                var _0x367043 = this['_subtitles']
                  , _0x13b5be = this['_currentSubtitles'];
                if (_0x367043['length'] > 0x1 && _0x13b5be)
                    for (var _0x3ec664 = 0x0; _0x3ec664 < _0x367043['length']; _0x3ec664++) {
                        if (_0x367043[_0x3ec664]['language'] === _0x13b5be['language']) {
                            _0x543459['selectComponent'](_0x367043[_0x3ec664 + 0x1 < _0x367043['length'] ? _0x3ec664 + 0x1 : 0x0]),
                            _0x560cd2 = !![];
                            for (var _0x3930f8 = 0x0; _0x3930f8 < _0x20fa37['length']; _0x3930f8++)
                                _0x20fa37[_0x3930f8](0x2, _0x367043[_0x3ec664 + 0x1 < _0x367043['length'] ? _0x3ec664 + 0x1 : 0x0]);
                            break;
                        }
                    }
            }
        }
        ,
        this['trackSwitch'] = function(_0x290ae7) {
            var _0xcf8d63 = document['querySelector']('object[type=\x22video/broadcast\x22]');
            if (_0x290ae7) {
                _0xcf8d63['selectComponent'](_0x290ae7);
                for (var _0x1a4854 = 0x0; _0x1a4854 < _0x20fa37['length']; _0x1a4854++)
                    _0x20fa37[_0x1a4854](0x1, _0x290ae7);
            } else {
                var _0x3ca099 = this['_tracks']
                  , _0x4a4880 = this['_currentTrack'];
                if (_0x3ca099['length'] > 0x1 && _0x4a4880)
                    for (var _0xc7084e = 0x0; _0xc7084e < _0x3ca099['length']; _0xc7084e++) {
                        if (_0x3ca099[_0xc7084e]['language'] === _0x4a4880['language'] && _0x3ca099[_0xc7084e]['pid'] === _0x4a4880['pid']) {
                            var _0x43232a = (_0xc7084e + 0x1) % _0x3ca099['length'];
                            _0xcf8d63['selectComponent'](_0x3ca099[_0x43232a]);
                            for (var _0x32a907 = 0x0; _0x32a907 < _0x20fa37['length']; _0x32a907++)
                                _0x20fa37[_0x32a907](0x1, _0x3ca099[_0x43232a]);
                            return {
                                'track': _0x3ca099[_0x43232a],
                                'index': _0x43232a
                            };
                        }
                    }
            }
        }
        ,
        this['getTrackName'] = function(_0x16e706) {
            if (!_0x16e706 || !EPG || !this['_video']['currentChannel'])
                return '';
            if (_0x16e706['track']['pid']) {
                var _0xa44ea7 = this['_video']['currentChannel']['onid'] + '.' + this['_video']['currentChannel']['tsid'] + '.' + this['_video']['currentChannel']['sid'];
                for (var _0x29e4f6 = 0x0; _0x29e4f6 < EPG['tv']['length']; _0x29e4f6++) {
                    if (EPG['tv'][_0x29e4f6]['dvbTriplet'] === _0xa44ea7) {
                        if (EPG['tv'][_0x29e4f6]['audioLabels'])
                            return EPG['tv'][_0x29e4f6]['audioLabels']['split'](',')[_0x16e706['index']];
                        break;
                    }
                }
            }
            return this['toDisplayLanguage'](_0x16e706['track']['language']);
        }
        ,
        this['toDisplayLanguage'] = function(_0x408e54) {
            switch ((_0x408e54 || '')['toLowerCase']()) {
            case 'ita':
                return 'Italiano';
            case 'oth':
            case 'zz{':
                return 'Audiodescrizione';
            case 'eng':
            case 'fra':
            case 'deu':
            case 'esp':
                return 'Lingua\x20originale';
            default:
                return _0x408e54;
            }
        }
        ;
        function _0x1e3f5c(_0x5d7d52) {
            if (_0x5d7d52 && _0x5d7d52['onid'] && _0x5d7d52['onid'] !== 0x0) {
                var _0x4e0c8c = _0x5d7d52['onid'] + '.' + _0x5d7d52['tsid'] + '.' + _0x5d7d52['sid']
                  , _0xff7bb6 = JSON['stringify']($ConfigManager['getInstance']()['_source']);
                return _0xff7bb6['indexOf'](_0x4e0c8c) !== -0x1;
            } else
                return !![];
        }
        var _0x4896da = ![];
        this['setUp'] = function() {
            println('[VIDEO\x20MANAGER]\x20set-up');
            if (typeof this['_video']['bindToCurrentChannel'] === 'function')
                try {
                    _0x4896da = !![],
                    this['_video']['bindToCurrentChannel']();
                } catch (_0x42bd85) {}
            this['_video']['onChannelChangeError'] = function _0xa8e2a2(_0x124c09, _0x331ef5) {
                try {
                    var _0x295c7f;
                    switch (_0x331ef5) {
                    case 0x0:
                        _0x295c7f = 'channel\x20not\x20supported\x20by\x20tuner.';
                        break;
                    case 0x1:
                        _0x295c7f = 'cannot\x20tune\x20to\x20given\x20transport\x20stream\x20(e.g.\x20no\x20signal)';
                        break;
                    case 0x2:
                        _0x295c7f = 'tuner\x20locked\x20by\x20other\x20object.';
                        break;
                    case 0x3:
                        _0x295c7f = 'parental\x20lock\x20on\x20channel.';
                        break;
                    case 0x4:
                        _0x295c7f = 'encrypted\x20channel,\x20key/module\x20missing.';
                        break;
                    case 0x5:
                        _0x295c7f = 'unknown\x20channel\x20(e.g.\x20can’t\x20resolve\x20DVB\x20or\x20ISDB\x20triplet).';
                        break;
                    case 0x6:
                        _0x295c7f = 'channel\x20switch\x20interrupted\x20(e.g.\x20because\x20another\x20channel\x20switch\x20was\x20activated\x20before\x20the\x20previous\x20one\x20completed).';
                        break;
                    case 0x7:
                        _0x295c7f = 'channel\x20cannot\x20be\x20changed,\x20because\x20it\x20is\x20currently\x20being\x20recorded.';
                        break;
                    case 0x8:
                        _0x295c7f = 'cannot\x20resolve\x20URI\x20of\x20referenced\x20IP\x20channel.';
                        break;
                    case 0x9:
                        _0x295c7f = 'insufficient\x20bandwidth.';
                        break;
                    case 0xa:
                        _0x295c7f = 'channel\x20cannot\x20be\x20changed\x20by\x20nextChannel()/prevChannel()\x20methods\x20either\x20because\x20the\x20OITF\x20does\x20not\x20maintain\x20a\x20favourites\x20or\x20channel\x20list\x20or\x20because\x20the\x20video/broadcast\x20object\x20is\x20in\x20the\x20Unrealized\x20state.';
                        break;
                    case 0xb:
                        _0x295c7f = 'insufficient\x20resources\x20are\x20available\x20to\x20present\x20the\x20given\x20channel\x20(e.g.\x20a\x20lack\x20of\x20available\x20codec\x20resources).';
                        break;
                    case 0xc:
                        _0x295c7f = 'specified\x20channel\x20not\x20found\x20in\x20transport\x20stream.';
                        break;
                    case 0x64:
                        _0x295c7f = 'unidentified\x20error.';
                        break;
                    default:
                        _0x295c7f = 'UNKNOWN\x20ERROR\x20CODE\x20[' + _0x331ef5 + ']';
                        break;
                    }
                    println('\x09Channel\x20Change\x20Error\x20for\x20channel\x20\x22' + _0x124c09['name'] + '\x22\x0aERROR\x20DESCRIPTION:\x0a' + _0x295c7f, 'ERR');
                    if (!_0x1e3f5c(_0x124c09)) {
                        println('\x09Landing\x20check\x20failed=>\x20destroying\x20application!', 'ERR');
                        var _0x3a4af8 = document['getElementById']('appmgr')['getOwnerApplication'](document);
                        _0x3a4af8['destroyApplication']();
                    } else
                        for (var _0x106b78 = 0x0; _0x106b78 < _0x582843['length']; _0x106b78++)
                            _0x582843[_0x106b78](_0x124c09);
                } catch (_0x3622d1) {
                    var _0x5d62c5 = _0x3622d1['stack'] || _0x3622d1['stacktrace'] || '\x09NO\x20STACKTRACE\x20AVAILABLE\x20:-/';
                    println(_0x3622d1 + '\x0a' + _0x5d62c5, 'ERR');
                }
            }
            ,
            this['_video']['onPlayStateChange'] = function _0x5ef591(_0x2cdc00, _0x596ad8) {
                try {
                    var _0xe22c0e;
                    switch (_0x2cdc00) {
                    case 0x0:
                        _0xe22c0e = 'UNREALIZED';
                        break;
                    case 0x1:
                        _0xe22c0e = 'CONNECTING';
                        break;
                    case 0x2:
                        _0xe22c0e = 'PRESENTING';
                        break;
                    case 0x3:
                        _0xe22c0e = 'STOPPED';
                        break;
                    default:
                        _0xe22c0e = 'UNKNOWN\x20[' + _0x2cdc00 + ']';
                        break;
                    }
                    var _0x3eacea = ['channel\x20not\x20supported\x20by\x20tuner.', 'cannot\x20tune\x20to\x20given\x20transport\x20stream\x20(e.g.\x20no\x20signal)', 'tuner\x20locked\x20by\x20other\x20object.', 'parental\x20lock\x20on\x20channel.', 'encrypted\x20channel,\x20key/module\x20missing.', 'unknown\x20channel\x20(e.g.\x20can’t\x20resolve\x20DVB\x20or\x20ISDB\x20triplet).', 'channel\x20switch\x20interrupted\x20(e.g.\x20because\x20another\x20channel\x20switch\x20was\x20activated\x20before\x20the\x20previous\x20one\x20completed).', 'channel\x20cannot\x20be\x20changed,\x20because\x20it\x20is\x20currently\x20being\x20recorded.', 'cannot\x20resolve\x20URI\x20of\x20referenced\x20IP\x20channel.', 'insufficient\x20bandwidth.', 'channel\x20cannot\x20be\x20changed\x20by\x20nextChannel()/prevChannel()\x20methods\x20either\x20because\x20the\x20OITF\x20does\x20not\x20maintain\x20a\x20favourites\x20or\x20channel\x20list\x20or\x20because\x20the\x20video/broadcast\x20object\x20is\x20in\x20the\x20Unrealized\x20state.', 'insufficient\x20resources\x20are\x20available\x20to\x20present\x20the\x20given\x20channel\x20(e.g.\x20a\x20lack\x20of\x20available\x20codec\x20resources).', 'specified\x20channel\x20not\x20found\x20in\x20transport\x20stream.', 'unidentified\x20error.'], _0x220aaf;
                    if (!_0x596ad8)
                        _0x220aaf = 'undefined';
                    else
                        _0x220aaf = '\x20[' + _0x596ad8 + '\x20-\x20' + (_0x596ad8 <= 0xc ? _0x3eacea[_0x596ad8] : _0x3eacea[0xd]) + ']';
                    println('\x09playStateUpdate(' + _0xe22c0e + ',\x20' + _0x220aaf + ')'),
                    _0x4896da = ![];
                    for (var _0x47d5b6 = 0x0; _0x47d5b6 < _0x185433['length']; _0x47d5b6++)
                        _0x185433[_0x47d5b6](_0x2cdc00, _0x596ad8);
                } catch (_0x8e82e2) {
                    var _0x22d386 = _0x8e82e2['stack'] || _0x8e82e2['stacktrace'] || '\x09NO\x20STACKTRACE\x20AVAILABLE\x20:-/';
                    println(_0x8e82e2 + '\x0a' + _0x22d386, 'ERR');
                }
            }
            ,
            this['_video']['onChannelChangeSucceeded'] = function _0x592c9b(_0x42b89c) {
                println('\x09channelChangeSucceeded(' + (_0x42b89c && _0x42b89c['name'] + '\x20lcn:' + _0x42b89c['majorChannel'] + '\x20dvb://' + _0x42b89c['onid'] + '.' + _0x42b89c['tsid'] + '.' + _0x42b89c['sid']) + ')');
                if (!_0x1e3f5c(_0x42b89c)) {
                    println('\x09Landing\x20check\x20failed\x20=>\x20destroying\x20application!', 'ERR');
                    var _0x23d827 = document['getElementById']('appmgr')['getOwnerApplication'](document);
                    _0x23d827['destroyApplication']();
                } else {
                    for (var _0x452f3e = 0x0; _0x452f3e < _0x5c7e00['length']; _0x452f3e++)
                        _0x5c7e00[_0x452f3e](_0x42b89c);
                    !HBBTV_EMULATION && ($VideoStreamer['getInstance']()['_channel'] = null);
                }
            }
            ;
        }
        ,
        this['init'] = function() {
            println('[VIDEO\x20MANAGER]\x20init');
            var _0x557a38 = document['getElementById']('video');
            _0x557a38 && (_0x557a38['onChannelChangeError'] = null,
            _0x557a38['onPlayStateChange'] = null,
            _0x557a38['onChannelChangeSucceeded'] = null,
            document['body']['removeChild'](_0x557a38),
            _0x557a38 = $MISC['html2Element']('<object\x20id=\x22video\x22\x20type=\x22video/broadcast\x22\x20style=\x22position:\x20absolute;\x20left:0px;\x20top:0px;\x20width:\x201280px;\x20height:\x20720px;\x22></object>'),
            document['body']['insertBefore'](_0x557a38, document['body']['firstChild'])),
            this['setUp']();
        }
        ,
        this['isBinding'] = function() {
            return _0x4896da;
        }
        ,
        this['notifyVirtualChannelChange'] = function(_0x52534c) {
            for (var _0x20ff55 = 0x0; _0x20ff55 < _0x5c7e00['length']; _0x20ff55++)
                _0x5c7e00[_0x20ff55](_0x52534c);
        }
        ,
        this['notifyVirtualComponentChange'] = function(_0x17905c, _0x17fc58) {
            for (var _0x18960c = 0x0; _0x18960c < _0x20fa37['length']; _0x18960c++)
                _0x20fa37[_0x18960c](_0x17905c, _0x17fc58);
        }
        ,
        this['cloneChannel'] = function(_0x5ae045) {
            return _0x5ae045 = _0x5ae045 || this['_video']['currentChannel'] || $StreamingService['getChannel'](),
            {
                'name': _0x5ae045['name']['noBOM'](),
                'onid': _0x5ae045['onid'],
                'tsid': _0x5ae045['tsid'],
                'sid': _0x5ae045['sid'],
                'majorChannel': _0x5ae045['majorChannel']
            };
        }
        ,
        this['setUp']();
    }
    return {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0xb628cb()),
            this['instance'];
        }
    };
}()
  , $QuickConfManager = function() {
    function _0x78b60c(_0x34bfb4) {
        this['instanceReadyListener'] = [];
        if (_0x34bfb4)
            this['instanceReadyListener']['push'](_0x34bfb4);
        function _0x4326b0() {
            println('🟢\x20QuickConfManager'),
            this['_ready'] = !![];
            for (var _0xcc668f = 0x0; _0xcc668f < this['instanceReadyListener']['length']; _0xcc668f++) {
                this['instanceReadyListener'][_0xcc668f]();
            }
        }
        var _0x3fe677 = {};
        Object['defineProperty'](this, '_quickEPG', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3fe677;
            }
        }),
        Object['defineProperty'](this, '_ready', {
            'value': ![],
            'writable': !![]
        });
        function _0x2a1ad8(_0x4f3a0e, _0x2b788c) {
            _0x2b788c = _0x2b788c || {};
            for (var _0x1ce7ca = Object['keys'](_0x4f3a0e), _0x5a4e4d = 0x0, _0x54cc6f; _0x5a4e4d < _0x1ce7ca['length']; _0x5a4e4d++) {
                _0x54cc6f = _0x4f3a0e[_0x1ce7ca[_0x5a4e4d]];
                if (!Array['isArray'](_0x54cc6f))
                    _0x2b788c[_0x1ce7ca[_0x5a4e4d]] = _0x54cc6f;
            }
            return _0x2b788c;
        }
        function _0x1662bd(_0x7cf11b) {
            var _0x282886 = document['querySelector']('object[type=\x22video/broadcast\x22]')['currentChannel']
              , _0x386042 = _0x282886['onid'] + '.' + _0x282886['tsid'] + '.' + _0x282886['sid'];
            $MISC['objScanner'](_0x7cf11b['Configuration']['Editors']['Editor'], 'Editor', function(_0x19fa4e, _0x1234b9, _0x47a095) {
                if (_0x19fa4e['Service'])
                    _0x19fa4e['Service']['forEach'](function(_0x2e6e79) {
                        if (_0x2e6e79['dvbTriplet'] === _0x386042) {
                            _0x3fe677 = _0x2a1ad8(_0x47a095),
                            _0x3fe677['editorName'] = _0x3fe677['name'],
                            delete _0x3fe677['name'],
                            _0x2a1ad8(_0x19fa4e, _0x3fe677),
                            _0x2a1ad8(_0x2e6e79, _0x3fe677);
                            for (var _0x5e3d32 = 0x0; _0x5e3d32 < _0x47a095['Services']['length']; _0x5e3d32++) {
                                if (_0x47a095['Services'][_0x5e3d32]['delivery'] === '3') {
                                    _0x3fe677['url'] = undefined,
                                    _0x3fe677['urlRestart'] = undefined;
                                    for (var _0x1dfbf3 = 0x0; _0x1dfbf3 < _0x47a095['Services'][_0x5e3d32]['Service']['length'] && (!_0x3fe677['url'] || !_0x3fe677['urlRestart']); _0x1dfbf3++) {
                                        _0x47a095['Services'][_0x5e3d32]['Service'][_0x1dfbf3]['name']['toUpperCase']()['startsWith'](_0x3fe677['name']['toUpperCase']()) && (_0x3fe677['url'] = _0x47a095['Services'][_0x5e3d32]['Service'][_0x1dfbf3]['url']),
                                        _0x47a095['Services'][_0x5e3d32]['Service'][_0x1dfbf3]['name'] === _0x3fe677['restartName'] && (_0x3fe677['urlRestart'] = _0x47a095['Services'][_0x5e3d32]['Service'][_0x1dfbf3]['url']);
                                    }
                                    break;
                                }
                            }
                        }
                    });
                else {
                    if (_0x19fa4e['dvbTriplet'] || _0x19fa4e['delivery'])
                        return ![];
                }
            });
        }
        $Net['http']('resources/srvConfig.json')['get']({
            'resolve': function(_0x26ac67) {
                if (!_0x26ac67['errorFlag']) {
                    var _0x212ce9 = $MISC['jsonParse'](_0x26ac67['text']);
                    _0x1662bd(_0x212ce9),
                    _0x3fe677['pictureBaseUrl'] = _0x212ce9['Configuration']['pictureBaseUrl'],
                    _0x4326b0['bind'](this)();
                } else
                    println(_0x26ac67, 'err');
            }
            ['bind'](this),
            'reject': function(_0x4b5732) {
                println(_0x4b5732, 'err');
            }
        });
    }
    return _0x78b60c['prototype']['constructor'] = _0x78b60c,
    {
        'instance': undefined,
        'getInstance': function(_0x242c1b) {
            if (!this['instance'])
                this['instance'] = new _0x78b60c(_0x242c1b);
            else {
                if (this['instance']['_ready']) {
                    if (_0x242c1b)
                        _0x242c1b();
                } else {
                    if (_0x242c1b)
                        this['instance']['instanceReadyListener']['push'](_0x242c1b);
                }
            }
            return this['instance'];
        }
    };
}()
  , $ConfigManager = function() {
    function _0x1660ec(_0x7a5283) {
        this['instanceReadyListener'] = [];
        if (_0x7a5283)
            this['instanceReadyListener']['push'](_0x7a5283);
        function _0x2755c4() {
            println('🟢\x20ConfigManager'),
            this['_ready'] = !![];
            for (var _0x2559ee = 0x0; _0x2559ee < this['instanceReadyListener']['length']; _0x2559ee++) {
                this['instanceReadyListener'][_0x2559ee]();
            }
        }
        function _0x489793(_0x1f8914, _0x4b0298) {
            _0x4b0298 = _0x4b0298 || {};
            for (var _0x167426 = Object['keys'](_0x1f8914), _0x4d2a8b = 0x0, _0x414b6e; _0x4d2a8b < _0x167426['length']; _0x4d2a8b++) {
                _0x414b6e = _0x1f8914[_0x167426[_0x4d2a8b]];
                if (!Array['isArray'](_0x414b6e))
                    _0x4b0298[_0x167426[_0x4d2a8b]] = _0x414b6e;
            }
            return _0x4b0298;
        }
        function _0x22bd5e(_0x5bc63c) {
            var _0x32ebfd = {
                'tv': [],
                'radio': []
            };
            return $MISC['objScanner'](_0x5bc63c['Configuration']['Editors']['Editor'], 'Editor', function(_0x4884ce, _0x4cabba, _0x1de89a) {
                if (_0x4884ce['delivery'] !== undefined) {
                    if (_0x4884ce['delivery'] === '3')
                        for (var _0x1f51c3 = 0x0, _0x270262, _0x5ba5fb, _0xa58ecf, _0x1dfd82, _0x19022f; _0x1f51c3 < _0x4884ce['Service']['length']; _0x1f51c3++) {
                            _0x270262 = _0x489793(_0x1de89a),
                            _0x270262['editorName'] = _0x270262['name'],
                            delete _0x270262['name'],
                            _0x489793(_0x4884ce, _0x270262),
                            _0x489793(_0x4884ce['Service'][_0x1f51c3], _0x270262),
                            _0x270262['urlRestart'] = undefined;
                            if (_0x270262['restart'] === 'true')
                                for (var _0x46fe63 = 0x0; _0x46fe63 < _0x4884ce['Service']['length']; _0x46fe63++) {
                                    _0x4884ce['Service'][_0x46fe63]['name'] === _0x1de89a['restartName'] && (_0x270262['urlRestart'] = _0x4884ce['Service'][_0x46fe63]['url']);
                                }
                            _0x32ebfd[_0x1de89a['type']]['push'](_0x270262),
                            _0x5ba5fb = _0x270262['dvbTriplet']['split'](/\D+/gm),
                            _0xa58ecf = parseInt(_0x5ba5fb[0x0]),
                            _0x1dfd82 = parseInt(_0x5ba5fb[0x1]),
                            _0x19022f = parseInt(_0x5ba5fb[0x2]),
                            $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList']['addCh'](_0x270262['name'], _0xa58ecf, _0x1dfd82, _0x19022f),
                            println((_0x1de89a['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x4884ce['Service'][_0x1f51c3]['name'] + '\x20[' + _0x4884ce['Service'][_0x1f51c3]['dvbTriplet'] + '\x20pos:\x20' + _0x1de89a['position'] + '\x20#:\x20' + _0x4884ce['Service'][_0x1f51c3]['lcn'] + ']', 'inf');
                        }
                    return ![];
                }
            }),
            _0x32ebfd;
        }
        function _0x24246e(_0x3ef45d) {
            function _0x2a842f(_0x4c1536) {
                var _0x29927a = [];
                return $MISC['objScanner'](_0x4c1536, 'Services', function(_0x313483, _0x409968, _0x594b68) {
                    if (_0x313483['delivery'] === '3') {
                        for (var _0x42c76c = 0x0, _0x106e31; _0x42c76c < _0x313483['Service']['length']; _0x42c76c++) {
                            _0x106e31 = _0x489793(_0x594b68),
                            _0x106e31['editorName'] = _0x106e31['name'],
                            delete _0x106e31['name'],
                            _0x489793(_0x313483, _0x106e31),
                            _0x489793(_0x313483['Service'][_0x42c76c], _0x106e31),
                            _0x106e31['urlRestart'] = _0x106e31['url'],
                            _0x29927a['push'](_0x106e31);
                        }
                        return ![];
                    }
                }),
                _0x29927a;
            }
            var _0x2e83da = []
              , _0x4c45eb = []
              , _0x12c2b0 = []
              , _0x55599a = []
              , _0x36dd10 = []
              , _0x4f10a6 = $VideoManager['getInstance']()['_video']['getChannelConfig']()['channelList'];
            function _0x5f6616(_0x29d7d4) {
                var _0x3fb6a9 = {
                    'check': ![],
                    'chObj': undefined,
                    'msg': undefined
                };
                if (_0x12c2b0['indexOf'](_0x29d7d4['name']) === -0x1) {
                    var _0x19a924 = _0x29d7d4['dvbTriplet']['split'](/\D+/gm)
                      , _0x8a4471 = parseInt(_0x19a924[0x1]);
                    if (_0x4c45eb['indexOf'](_0x29d7d4['lcn']) === -0x1) {
                        if (_0x2e83da['indexOf'](_0x8a4471) !== -0x1 && _0x29d7d4['hybrid'] !== 'true')
                            _0x4c45eb['push'](_0x29d7d4['lcn']),
                            _0x12c2b0['push'](_0x29d7d4['name']),
                            _0x3fb6a9['check'] = !![],
                            _0x3fb6a9['msg'] = 'TS\x20already\x20checked';
                        else {
                            var _0x266158 = parseInt(_0x19a924[0x0])
                              , _0x571fd8 = parseInt(_0x19a924[0x2]);
                            _0x3fb6a9['chObj'] = _0x4f10a6['getChannelByTriplet'](_0x266158, _0x8a4471, _0x571fd8),
                            _0x3fb6a9['chObj'] && _0x3fb6a9['chObj']['name'] && (_0x2e83da['push'](_0x8a4471),
                            _0x4c45eb['push'](_0x29d7d4['lcn']),
                            _0x12c2b0['push'](_0x29d7d4['name']),
                            _0x3fb6a9['check'] = !![]);
                        }
                    } else {
                        _0x3fb6a9['msg'] = 'LCN\x20collision';
                        if (_0x55599a['indexOf'](_0x29d7d4['lcn']) === -0x1) {
                            var _0x519aed = _0x4f10a6[parseInt(_0x29d7d4['lcn']) - 0x1];
                            if (_0x519aed && _0x519aed['name']['toUpperCase']()['indexOf']('RAI') >= 0x0) {
                                _0x519aed['name'] === _0x29d7d4['name'] && (_0x3fb6a9['msg'] += '\x20⭐️',
                                _0x55599a['push'](_0x29d7d4['lcn']),
                                _0x36dd10['push'](_0x29d7d4));
                                if (_0x36dd10['length'] === 0x0)
                                    _0x36dd10 = [{
                                        'name': _0x519aed['name']
                                    }];
                            } else
                                _0x55599a['push'](_0x29d7d4['lcn']);
                        }
                    }
                } else {
                    function _0x49a140() {
                        for (var _0x162eea = 0x0; _0x162eea < _0x36dd10['length']; _0x162eea++)
                            if (_0x36dd10[_0x162eea]['name'] === _0x29d7d4['name']) {
                                var _0x1505fd = _0x29d7d4['dvbTriplet']['split']('.')
                                  , _0x39c4ab = parseInt(_0x1505fd[0x1]);
                                if (_0x2e83da['indexOf'](_0x39c4ab) > -0x1)
                                    return !![];
                                else
                                    return !!_0x4f10a6['getChannelByTriplet'](parseInt(_0x1505fd[0x0]), _0x8a4471, parseInt(_0x1505fd[0x2]));
                            }
                        return ![];
                    }
                    _0x49a140() ? (_0x3fb6a9['check'] = !![],
                    _0x3fb6a9['msg'] = 'Tunable\x20clone') : _0x3fb6a9['msg'] = 'Service\x20already\x20set';
                }
                return _0x3fb6a9;
            }
            var _0x20b9ba = {
                'tv': [],
                'radio': []
            };
            $MISC['objScanner'](_0x3ef45d['Configuration']['Editors']['Editor'], 'Editor', function(_0x1f79a3, _0x169cfa, _0x58d2c1) {
                if (_0x1f79a3['delivery'] !== undefined) {
                    if (_0x1f79a3['delivery'] === '2') {
                        if (_0x1f79a3['Service']) {
                            for (var _0x349c4e = 0x0, _0x4e0d9f, _0x5c866d = 0x0, _0x11bb7f; _0x349c4e < _0x1f79a3['Service']['length']; _0x349c4e++) {
                                _0x11bb7f = _0x5f6616(_0x1f79a3['Service'][_0x349c4e]);
                                if (_0x11bb7f['check'])
                                    println((_0x58d2c1['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x1f79a3['Service'][_0x349c4e]['name'] + (_0x1f79a3['Service'][_0x349c4e]['visible'] === 'false' ? '\x20👻' : '') + (_0x1f79a3['Service'][_0x349c4e]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x1f79a3['Service'][_0x349c4e]['dvbTriplet'] + '\x20pos:\x20' + _0x58d2c1['position'] + '\x20#:\x20' + _0x1f79a3['Service'][_0x349c4e]['lcn'] + ']' + (_0x11bb7f['msg'] ? '\x20-\x20' + _0x11bb7f['msg'] : ''), 'inf');
                                else {
                                    if (_0x11bb7f['msg'] && _0x11bb7f['msg']['indexOf']('⭐️') >= 0x0)
                                        println((_0x58d2c1['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x1f79a3['Service'][_0x349c4e]['name'] + (_0x1f79a3['Service'][_0x349c4e]['visible'] === 'false' ? '\x20👻' : '') + (_0x1f79a3['Service'][_0x349c4e]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x1f79a3['Service'][_0x349c4e]['dvbTriplet'] + '\x20pos:\x20' + _0x58d2c1['position'] + '\x20#:\x20' + _0x1f79a3['Service'][_0x349c4e]['lcn'] + ']' + (_0x11bb7f['msg'] ? '\x20-\x20' + _0x11bb7f['msg'] : ''), 'fne');
                                    else
                                        println((_0x58d2c1['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x1f79a3['Service'][_0x349c4e]['name'] + (_0x1f79a3['Service'][_0x349c4e]['visible'] === 'false' ? '\x20👻' : '') + (_0x1f79a3['Service'][_0x349c4e]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x1f79a3['Service'][_0x349c4e]['dvbTriplet'] + '\x20pos:\x20' + _0x58d2c1['position'] + '\x20#:\x20' + _0x1f79a3['Service'][_0x349c4e]['lcn'] + ']' + (_0x11bb7f['msg'] ? '\x20-\x20' + _0x11bb7f['msg'] : ''), 'err');
                                }
                                if (_0x11bb7f['check']) {
                                    _0x4e0d9f = _0x489793(_0x58d2c1),
                                    _0x4e0d9f['editorName'] = _0x4e0d9f['name'],
                                    delete _0x4e0d9f['name'],
                                    _0x489793(_0x1f79a3, _0x4e0d9f),
                                    _0x489793(_0x1f79a3['Service'][_0x349c4e], _0x4e0d9f);
                                    for (var _0x5a7fb5 = 0x0; _0x5a7fb5 < _0x58d2c1['Services']['length']; _0x5a7fb5++) {
                                        if (_0x58d2c1['Services'][_0x5a7fb5]['delivery'] === '3') {
                                            _0x4e0d9f['url'] = undefined,
                                            _0x4e0d9f['urlRestart'] = undefined;
                                            for (var _0x4e19c6 = 0x0; _0x4e19c6 < _0x58d2c1['Services'][_0x5a7fb5]['Service']['length'] && (!_0x4e0d9f['url'] || !_0x4e0d9f['urlRestart']); _0x4e19c6++) {
                                                _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['name']['toUpperCase']()['startsWith'](_0x4e0d9f['name']['toUpperCase']()) && (_0x4e0d9f['url'] = _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['url']),
                                                _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['name'] === _0x4e0d9f['restartName'] && (_0x4e0d9f['urlRestart'] = _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['url']);
                                            }
                                            break;
                                        }
                                    }
                                    _0x20b9ba[_0x58d2c1['type']]['push'](_0x4e0d9f),
                                    _0x5c866d++;
                                }
                                if (_0x11bb7f['msg'] === 'LCN\x20collision\x20⭐️') {
                                    var _0x373047, _0x141641;
                                    _0x141641 = _0x20b9ba[_0x58d2c1['type']]['find'](function(_0x5b1552, _0x1550b2) {
                                        if (_0x5b1552['lcn'] === _0x1f79a3['Service'][_0x349c4e]['lcn'])
                                            return _0x373047 = _0x1550b2,
                                            !![];
                                        else
                                            return ![];
                                    }),
                                    _0x12c2b0['splice'](_0x12c2b0['indexOf'](_0x141641['name']), 0x1),
                                    _0x12c2b0['push'](_0x1f79a3['Service'][_0x349c4e]['name']),
                                    _0x4e0d9f = _0x489793(_0x58d2c1),
                                    _0x4e0d9f['editorName'] = _0x4e0d9f['name'],
                                    delete _0x4e0d9f['name'],
                                    _0x489793(_0x1f79a3, _0x4e0d9f),
                                    _0x489793(_0x1f79a3['Service'][_0x349c4e], _0x4e0d9f);
                                    for (var _0x5a7fb5 = 0x0; _0x5a7fb5 < _0x58d2c1['Services']['length']; _0x5a7fb5++) {
                                        if (_0x58d2c1['Services'][_0x5a7fb5]['delivery'] === '3') {
                                            _0x4e0d9f['url'] = undefined,
                                            _0x4e0d9f['urlRestart'] = undefined;
                                            for (var _0x4e19c6 = 0x0; _0x4e19c6 < _0x58d2c1['Services'][_0x5a7fb5]['Service']['length'] && (!_0x4e0d9f['url'] || !_0x4e0d9f['urlRestart']); _0x4e19c6++) {
                                                _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['name']['toUpperCase']()['startsWith'](_0x4e0d9f['name']['toUpperCase']()) && (_0x4e0d9f['url'] = _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['url']),
                                                _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['name'] === _0x4e0d9f['restartName'] && (_0x4e0d9f['urlRestart'] = _0x58d2c1['Services'][_0x5a7fb5]['Service'][_0x4e19c6]['url']);
                                            }
                                            break;
                                        }
                                    }
                                    _0x20b9ba[_0x58d2c1['type']][_0x373047] = _0x4e0d9f;
                                }
                                if (_0x11bb7f['msg'] === 'LCN\x20collision\x20-\x20terminalChannel\x20mismatch\x20🚫') {
                                    var _0x373047, _0x141641;
                                    _0x141641 = _0x20b9ba[_0x58d2c1['type']]['find'](function(_0xead868, _0x63a035) {
                                        if (_0xead868['lcn'] === _0x1f79a3['Service'][_0x349c4e]['lcn'])
                                            return _0x373047 = _0x63a035,
                                            !![];
                                        else
                                            return ![];
                                    }),
                                    _0x12c2b0['splice'](_0x12c2b0['indexOf'](_0x141641['name']), 0x1),
                                    _0x20b9ba[_0x58d2c1['type']]['splice'](_0x373047, 0x1);
                                }
                            }
                            if (_0x5c866d === 0x0) {
                                var _0x5822e2 = _0x2a842f(_0x58d2c1);
                                _0x5822e2['length'] > 0x0 ? (println((_0x58d2c1['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'No\x20DELIVERY\x20type\x202\x20services\x20tunable\x20for\x20' + _0x58d2c1['name'] + '.\x20Using\x20Network\x20replacement\x20(' + _0x5822e2['length'] + '\x20services)', 'wrn'),
                                _0x20b9ba[_0x58d2c1['type']] = _0x20b9ba[_0x58d2c1['type']]['concat'](_0x5822e2)) : println((_0x58d2c1['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'Neither\x20DELIVERY\x20type\x202\x20services\x20tunable\x20nor\x20DELIVERY\x20type\x203\x20services\x20available\x20for\x20' + _0x58d2c1['name'], 'err');
                            }
                        } else {
                            var _0x5822e2 = _0x2a842f(_0x58d2c1);
                            _0x5822e2['length'] > 0x0 ? (println((_0x58d2c1['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'No\x20DELIVERY\x20type\x202\x20available\x20for\x20' + _0x58d2c1['name'] + '.\x20Using\x20Network\x20replacement\x20(' + _0x5822e2['length'] + '\x20services)', 'wrn'),
                            _0x20b9ba[_0x58d2c1['type']] = _0x20b9ba[_0x58d2c1['type']]['concat'](_0x5822e2)) : println((_0x58d2c1['type'] === 'tv' ? '📺\x20' : '📻\x20') + 'Neither\x20DELIVERY\x20type\x202\x20nor\x20DELIVERY\x20type\x203\x20is\x20available\x20for\x20' + _0x58d2c1['name'], 'err');
                        }
                    }
                    return ![];
                }
            });
            for (var _0x1f5f78 = 0x0; _0x1f5f78 < _0x20b9ba['tv']['length']; _0x1f5f78++) {
                var _0x54206b = parseInt(_0x20b9ba['tv'][_0x1f5f78]);
                if (_0x54206b === 0x3) {
                    var _0x2133eb = _0x20b9ba['tv'][_0x1f5f78]['split']('.')
                      , _0x4301a4 = _0x4f10a6['getChannelByTriplet'](parseInt(_0x2133eb[0x0]), parseInt(_0x2133eb[0x1]), parseInt(_0x2133eb[0x3]));
                    _0x4301a4 && _0x4301a4['terminalChannel'] - _0x54206b !== 0x0 && println('There\x20could\x20be\x20a\x20problem\x20in\x20the\x20channel\x20list', 'err');
                    break;
                }
            }
            return _0x20b9ba;
        }
        function _0x484435(_0x23bb1c) {
            var _0x4f1e75 = {
                'tv': [],
                'radio': []
            };
            return $MISC['objScanner'](_0x23bb1c['Configuration']['Editors']['Editor'], 'Editor', function(_0x2ee638, _0x14406b, _0x4d904e) {
                if (_0x2ee638['delivery'] !== undefined) {
                    if (_0x2ee638['delivery'] === '0' && _0x2ee638['Service'] || _0x4d904e['name'] === 'Rai\x20Radio\x202\x20Visual\x20Radio' && _0x2ee638['delivery'] === '3')
                        for (var _0x5119f2 = 0x0, _0x43e3cb; _0x5119f2 < _0x2ee638['Service']['length']; _0x5119f2++) {
                            _0x43e3cb = _0x489793(_0x4d904e),
                            _0x43e3cb['editorName'] = _0x43e3cb['name'],
                            delete _0x43e3cb['name'],
                            _0x489793(_0x2ee638, _0x43e3cb),
                            _0x489793(_0x2ee638['Service'][_0x5119f2], _0x43e3cb);
                            for (var _0x378622 = 0x0; _0x378622 < _0x4d904e['Services']['length']; _0x378622++) {
                                if (_0x4d904e['Services'][_0x378622]['delivery'] === '3') {
                                    _0x43e3cb['url'] = undefined,
                                    _0x43e3cb['urlRestart'] = undefined;
                                    for (var _0x391f49 = 0x0; _0x391f49 < _0x4d904e['Services'][_0x378622]['Service']['length'] && (!_0x43e3cb['url'] || !_0x43e3cb['urlRestart']); _0x391f49++) {
                                        _0x4d904e['Services'][_0x378622]['Service'][_0x391f49]['name']['toUpperCase']()['startsWith'](_0x43e3cb['name']['toUpperCase']()) && (_0x43e3cb['url'] = _0x4d904e['Services'][_0x378622]['Service'][_0x391f49]['url']),
                                        _0x4d904e['Services'][_0x378622]['Service'][_0x391f49]['name'] === _0x43e3cb['restartName'] && (_0x43e3cb['urlRestart'] = _0x4d904e['Services'][_0x378622]['Service'][_0x391f49]['url']);
                                    }
                                    break;
                                }
                            }
                            _0x4f1e75[_0x4d904e['type']]['push'](_0x43e3cb),
                            println((_0x4d904e['type'] === 'tv' ? '📺\x20' : '📻\x20') + _0x2ee638['Service'][_0x5119f2]['name'] + (_0x2ee638['Service'][_0x5119f2]['visible'] === 'false' ? '\x20👻' : '') + (_0x2ee638['Service'][_0x5119f2]['hybrid'] === 'true' ? '\x20👽' : '') + '\x20[' + _0x2ee638['Service'][_0x5119f2]['dvbTriplet'] + '\x20pos:\x20' + _0x4d904e['position'] + '\x20#:\x20' + _0x2ee638['Service'][_0x5119f2]['lcn'] + ']', 'inf');
                        }
                    return ![];
                }
            }),
            _0x4f1e75;
        }
        Object['defineProperty'](this, '_ready', {
            'value': ![],
            'writable': !![]
        });
        var _0x44751a = undefined;
        Object['defineProperty'](this, '_source', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x44751a;
            }
        }),
        $Net['http']('resources/srvConfig.json')['get']({
            'resolve': function(_0x260f43) {
                if (!_0x260f43['errorFlag']) {
                    _0x44751a = $MISC['jsonParse'](_0x260f43['text']),
                    println('[ConfigManager]\x20fetched\x20config\x20' + _0x44751a['Configuration']['dateTime']);
                    switch (DELIVERY_FLAG) {
                    case 0x0:
                        EPG = _0x484435(_0x44751a);
                        break;
                    case 0x2:
                        EPG = _0x24246e(_0x44751a);
                        break;
                    case 0x3:
                        EPG = _0x22bd5e(_0x44751a);
                        break;
                    }
                    EPG['pictureBaseUrl'] = _0x44751a['Configuration']['pictureBaseUrl'];
                    function _0x34e4f7(_0x19160a, _0x556c82) {
                        return _0x19160a['position'] !== _0x556c82['position'] ? _0x19160a['position'] - _0x556c82['position'] : _0x19160a['lcn'] - _0x556c82['lcn'];
                    }
                    EPG['tv']['sort'](_0x34e4f7),
                    EPG['radio']['sort'](_0x34e4f7),
                    _0x2755c4['bind'](this)();
                } else
                    println(_0x260f43, 'err');
            }
            ['bind'](this),
            'reject': function(_0x39ec09) {
                println(_0x39ec09, 'err');
            }
        });
    }
    return _0x1660ec['prototype']['constructor'] = _0x1660ec,
    {
        'instance': undefined,
        'getInstance': function(_0x3c70e2) {
            if (!this['instance'])
                this['instance'] = new _0x1660ec(_0x3c70e2);
            else {
                if (this['instance']['_ready']) {
                    if (_0x3c70e2)
                        _0x3c70e2();
                } else {
                    if (_0x3c70e2)
                        this['instance']['instanceReadyListener']['push'](_0x3c70e2);
                }
            }
            return this['instance'];
        }
    };
}()
  , $PendingTaskSentry = function() {
    var _0x1672db = 0x0
      , _0x1edb3a = {};
    function _0x3e9207() {
        var _0x4a837f = undefined
          , _0x4e001c = undefined
          , _0x1b48f7 = []
          , _0xa3b940 = Date['now']();
        for (var _0x3ae4da = 0x0; _0x3ae4da < arguments['length']; _0x3ae4da++) {
            switch (typeof arguments[_0x3ae4da]) {
            case 'number':
                _0x4e001c = arguments[_0x3ae4da];
                break;
            case 'string':
                _0x4a837f = arguments[_0x3ae4da];
                break;
            default:
                _0x1b48f7 = arguments[_0x3ae4da];
                break;
            }
        }
        var _0x5a7f33 = function() {
            this['_pendingCount'] > 0x0 ? _0x1edb3a[this['_name']] = this : delete _0x1edb3a[this['_name']];
        }
        ['bind'](this)
          , _0x35f429 = _0x4a837f || 'PendingTaskSentry_' + _0x1672db;
        Object['defineProperty'](this, '_name', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x35f429;
            }
        }),
        Object['defineProperty'](this, '_callbackArr', {
            'value': _0x1b48f7,
            'writable': !![]
        });
        var _0x416b68 = _0x4e001c;
        Object['defineProperty'](this, '_pendingCount', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x416b68;
            },
            'set': function(_0x3a4226) {
                _0x416b68 = _0x3a4226;
                if (!_0x416b68)
                    for (var _0x4c2560 = 0x0; _0x4c2560 < this['_callbackArr']['length']; _0x4c2560++)
                        this['_callbackArr'][_0x4c2560]();
                _0x5a7f33();
            }
        }),
        this['accomplishedTask'] = function() {
            var _0x4e20c2 = '⏱\x20' + (Date['now']() - _0xa3b940) + '\x20ms.\x20/\x20' + (this['_pendingCount'] - 0x1 === 0x0 ? '🏁' : this['_pendingCount'] - 0x1 + '\x20remaining...');
            _0x4e20c2 = (arguments[0x0] ? arguments[0x0] : this['_name']) + '\x20' + _0x4e20c2,
            println(_0x4e20c2),
            this['_pendingCount']--;
        }
        ['bind'](this),
        _0x1672db++,
        _0x5a7f33();
    }
    return _0x3e9207['prototype']['constructor'] = _0x3e9207,
    _0x3e9207['getByName'] = function(_0x4ebd49) {
        return _0x1edb3a[_0x4ebd49];
    }
    ,
    _0x3e9207;
}()
  , $StreamEventManager = function() {
    var _0x995a91 = 0x0, _0x4dad58 = 0x1, _0xcdcdc3 = 0x2, _0x1e71d9 = 0x3, _0x164b01 = 0x4, _0x3d538a = 0x5, _0x5c0c25 = 0x64, _0x4b2047, _0x4c9333, _0x4640e1 = 0x0, _0xe2f271;
    function _0x482f8a(_0x495654, _0x477bfa) {
        _0x4640e1 && (clearTimeout(_0x4640e1),
        _0x4640e1 = 0x0);
        if (_0x4b2047 && _0x4b2047['payload']) {
            if (_0x495654 === 0x3 || _0x495654 === 0x1 && !!_0x477bfa)
                _0x937173(),
                _0x4b2047['lost'] = !![],
                _0x4b2047['onRequest'](_0x4dad58, 'lost');
            else
                _0x495654 === 0x2 && (_0x4b2047 && _0x4b2047['lost'] && (delete _0x4b2047['lost'],
                _0x4640e1 = setTimeout(function() {
                    _0x4640e1 = 0x0;
                    if (!_0x4b2047 || !_0x4b2047['payload'])
                        return;
                    _0x269908(_0x4b2047['payload']['url'], _0x4b2047['payload']['name']),
                    _0x4b2047['onRequest'](_0x995a91, 'ok');
                }, 0xbb8)));
        }
    }
    function _0x3b849b(_0x4c8b88) {
        if (!_0x4c8b88) {
            println('[STREAM-EVENT\x20MANAGER]\x20received\x20invalid\x20stream\x20event', 'wrn');
            return;
        }
        var _0x428c68 = !!_0xe2f271 && _0xe2f271['name'] === _0x4c8b88['name'] && _0xe2f271['data'] === _0x4c8b88['data'] && _0xe2f271['text'] === _0x4c8b88['text'] && _0xe2f271['status'] === _0x4c8b88['status'];
        _0xe2f271 = {
            'name': _0x4c8b88['name'],
            'data': _0x4c8b88['data'],
            'text': _0x4c8b88['text'],
            'status': _0x4c8b88['status']
        };
        if (_0x428c68)
            return;
        if (_0x4b2047)
            _0x4b2047['onRequest'](_0x3d538a, _0x4c8b88);
    }
    function _0x371b51(_0x5548a4, _0x17aadc, _0x21dc6e) {
        $Net['http'](_0x5548a4)['get']({
            'resolve': function(_0x5b7475) {
                if (_0x5b7475['errorFlag'])
                    return _0x21dc6e({
                        'ok': ![],
                        'name': _0x17aadc,
                        'reason': 'http\x20error\x20[' + _0x5b7475['code'] + ']'
                    });
                var _0x2a214f = new DOMParser()
                  , _0x19d305 = _0x2a214f['parseFromString'](_0x5b7475['text'], 'text/xml')
                  , _0x1c2710 = _0x19d305['querySelector']('parsererror');
                if (_0x1c2710)
                    _0x21dc6e({
                        'ok': ![],
                        'name': _0x17aadc,
                        'reason': 'error\x20while\x20parsing'
                    });
                else {
                    var _0xe61609 = _0x19d305['getElementsByTagName']('stream_event');
                    for (var _0x2a0eb1 = 0x0; _0x2a0eb1 < _0xe61609['length']; _0x2a0eb1++) {
                        if (_0xe61609[_0x2a0eb1] && _0xe61609[_0x2a0eb1]['getAttribute']('stream_event_name') === _0x17aadc)
                            return _0x21dc6e({
                                'ok': !![],
                                'name': _0x17aadc,
                                'cTag': _0xe61609[_0x2a0eb1]['parentNode']['getAttribute']('component_tag')
                            });
                    }
                    _0x21dc6e({
                        'ok': ![],
                        'name': _0x17aadc,
                        'reason': 'event\x20not\x20found'
                    });
                }
            },
            'reject': function() {
                _0x21dc6e({
                    'ok': ![],
                    'name': _0x17aadc,
                    'reason': 'http\x20error'
                });
            }
        });
    }
    function _0x269908(_0x26520a, _0x3af5b7) {
        _0x4b2047['payload'] = {
            'url': _0x26520a,
            'name': _0x3af5b7
        },
        println('[STREAM-EVENT\x20MANAGER]\x20ADD\x20' + _0x4b2047['payload']['url'] + '\x20|\x20' + _0x4b2047['payload']['name']),
        _0x371b51(_0x26520a, _0x3af5b7, function(_0x4c477a) {
            println('[STREAM-EVENT\x20MANAGER]\x20' + _0x4c477a['name'] + ',\x20check:\x20' + (_0x4c477a['ok'] ? 'SUCCESS\x20(comp.tag=' + _0x4c477a['cTag'] + ')' : 'FAILED\x20-\x20' + _0x4c477a['reason']));
            if (_0x4c477a['ok']) {
                var _0x3240ba = document['getElementById']('video');
                if (_0x3240ba['addStreamEventListener'])
                    _0x3240ba['addStreamEventListener'](_0x4b2047['payload']['url'], _0x4b2047['payload']['name'], _0x3b849b);
            } else
                _0x4b2047['onRequest'](_0x3d538a, {
                    'status': 'error',
                    'name': _0x3af5b7
                });
        });
    }
    function _0x937173() {
        println('[STREAM-EVENT\x20MANAGER]\x20REMOVE\x20' + _0x4b2047['payload']['url'] + '\x20|\x20' + _0x4b2047['payload']['name']);
        var _0x563745 = document['getElementById']('video');
        _0x563745['removeStreamEventListener'] && _0x563745['removeStreamEventListener'](_0x4b2047['payload']['url'], _0x4b2047['payload']['name'], _0x3b849b);
    }
    function _0x2ed806() {
        return Math['floor'](0x3b9aca00 + Math['random']() * 0x218711a00)['toString'](0x10) + Date['now']()['toString'](0x10);
    }
    function _0x14f88a(_0x59ce22) {
        if (_0x4c9333)
            for (var _0x160443 = 0x0; _0x160443 < _0x4c9333['length']; _0x160443++) {
                if (_0x4c9333[_0x160443]['serviceId'] === _0x59ce22)
                    return {
                        'item': _0x4c9333[_0x160443],
                        'index': _0x160443
                    };
            }
    }
    function _0x59d9f8(_0x113b5d, _0x433725) {
        var _0x1ea3ce = _0x2ed806();
        return !_0x4c9333 && (_0x4c9333 = [],
        $VideoManager['getInstance']()['addPlayStateChangeListener'](_0x482f8a)),
        _0x4c9333['push']({
            'priority': _0x113b5d,
            'serviceId': _0x1ea3ce,
            'onRequest': _0x433725
        }),
        _0x4c9333['length'] > 0x1 && _0x4c9333['sort'](function(_0x5d7c17, _0x35637f) {
            if (_0x5d7c17['priority'] > _0x35637f['priority'])
                return 0x1;
            if (_0x5d7c17['priority'] < _0x35637f['priority'])
                return -0x1;
            return 0x0;
        }),
        _0x1ea3ce;
    }
    function _0x363d01(_0x5730cb, _0x424d63, _0x3c4d78) {
        var _0x57b337 = _0x14f88a(_0x5730cb);
        if (!_0x57b337)
            return {
                'code': _0x5c0c25,
                'text': 'service\x20not\x20found\x20in\x20the\x20service\x20list:\x20' + _0x5730cb
            };
        _0x57b337 = _0x57b337['item'];
        if (!_0x4b2047)
            return _0x4b2047 = _0x57b337,
            _0x269908(_0x424d63, _0x3c4d78),
            {
                'code': _0x995a91,
                'text': 'ok'
            };
        else {
            if (_0x4b2047['serviceId'] === _0x5730cb)
                return _0x937173(),
                _0x269908(_0x424d63, _0x3c4d78),
                {
                    'code': _0x164b01,
                    'text': 'resource\x20updated'
                };
            if (_0x4b2047['priority'] >= _0x57b337['priority'])
                return _0x57b337['payload'] = {
                    'url': _0x424d63,
                    'name': _0x3c4d78
                },
                {
                    'code': _0x1e71d9,
                    'text': 'current\x20service\x20has\x20higher\x20priority:\x20' + _0x57b337['priority']
                };
            return _0x937173(),
            _0x4b2047['onRequest'](_0x4dad58, 'lost'),
            _0x4b2047 = _0x57b337,
            _0x269908(_0x424d63, _0x3c4d78),
            {
                'code': _0x995a91,
                'text': 'ok'
            };
        }
    }
    function _0x5d2e77(_0x546190) {
        var _0x4969ee = _0x14f88a(_0x546190);
        if (!_0x4969ee)
            return {
                'code': _0x5c0c25,
                'text': 'service\x20not\x20found\x20in\x20the\x20service\x20list:\x20' + _0x546190
            };
        if (!_0x4b2047 || _0x4b2047['serviceId'] !== _0x546190) {
            if (_0x4969ee['item']['payload'])
                return delete _0x4969ee['item']['payload'],
                {
                    'code': _0xcdcdc3,
                    'text': 'released'
                };
            return {
                'code': _0x5c0c25,
                'text': 'forbidden\x20request'
            };
        }
        _0x937173(),
        _0x4b2047 = null,
        delete _0x4969ee['item']['payload'],
        _0x4969ee['item']['onRequest'](_0xcdcdc3, 'released');
        while (_0x4969ee['index'] > 0x0) {
            _0x4969ee['index'] -= 0x1;
            if (_0x4c9333[_0x4969ee['index']]['payload']) {
                _0x4b2047 = _0x4c9333[_0x4969ee['index']],
                _0x4b2047['onRequest'](_0x995a91, 'ok'),
                _0x269908(_0x4b2047['payload']['url'], _0x4b2047['payload']['name']);
                break;
            }
        }
    }
    return {
        'version': 0x4,
        'RESOURCE_ADQUIRED': _0x995a91,
        'RESOURCE_LOST': _0x4dad58,
        'RESOURCE_RELEASED': _0xcdcdc3,
        'RESOURCE_BUSY': _0x1e71d9,
        'RESOURCE_UPDATED': _0x164b01,
        'RESOURCE_DATA': _0x3d538a,
        'REQUEST_ERROR': _0x5c0c25,
        'sign': _0x59d9f8,
        'request': _0x363d01,
        'release': _0x5d2e77
    };
}()
  , $Widget = function() {
    var _0x298acf = 0x0;
    function _0x5c4e61(_0x54dc35) {
        var _0x19c00c;
        !_0x54dc35 ? _0x19c00c = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute\x27></div>') : (_0x19c00c = _0x54dc35['constructor'] === String || _0x54dc35['constructor'] === Text ? $MISC['html2Element'](_0x54dc35) : _0x54dc35,
        _0x19c00c['style']['position'] = 'absolute');
        _0x19c00c['style']['webkitBackfaceVisibility'] = 'hidden',
        _0x19c00c['style']['willChange'] = 'transform';
        var _0x175c50 = this['constructor']['toString']();
        _0x175c50 = _0x175c50['replace']('function', '')['trim'](),
        _0x175c50 = _0x175c50['substring'](0x0, _0x175c50['indexOf']('('));
        if (_0x175c50['length'] === 0x0)
            _0x175c50 = 'Widget';
        _0x19c00c['setAttribute']('widget-class', _0x175c50),
        Object['defineProperty'](this, '_node', {
            'value': _0x19c00c,
            'writable': ![]
        }),
        Object['defineProperty'](this, '_uniqueID', {
            'value': _0x298acf++,
            'writable': ![]
        }),
        Object['defineProperty'](this, '_parent', {
            'value': null,
            'writable': !![]
        }),
        Object['defineProperty'](this, '_children', {
            'value': [],
            'writable': !![]
        }),
        Object['defineProperty'](this, '_keyListener', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return $DEVICE['keyManager']['getListener'](this);
            },
            'set': function(_0x3e5757) {
                if (_0x3e5757)
                    $DEVICE['keyManager']['setListener']({
                        'widget': this,
                        'handler': _0x3e5757
                    });
                else
                    $DEVICE['keyManager']['clearListener'](this);
            }
        });
        var _0x1eef21 = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x1eef21;
            },
            'set': function(_0x31bc57) {
                _0x1eef21 = _0x31bc57;
            }
        }),
        Object['defineProperty'](this, '_left', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x2f225e = parseFloat(this['_node']['style']['left']['replace'](',', '.'));
                return isNaN(_0x2f225e) ? this['_node']['getBoundingClientRect']()['left'] : _0x2f225e;
            },
            'set': function(_0x527b85) {
                this['_node']['style']['left'] = _0x527b85 + 'px';
            }
        }),
        Object['defineProperty'](this, '_top', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x4a8835 = parseFloat(this['_node']['style']['top']['replace'](',', '.'));
                return isNaN(_0x4a8835) ? this['_node']['getBoundingClientRect']()['top'] : _0x4a8835;
            },
            'set': function(_0x3e3616) {
                this['_node']['style']['top'] = _0x3e3616 + 'px';
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x149d85 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x149d85) ? this['_node']['getBoundingClientRect']()['width'] : _0x149d85;
            },
            'set': function(_0x2f6cd7) {
                this['_node']['style']['width'] = _0x2f6cd7 + 'px';
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0xc869e = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0xc869e) ? this['_node']['getBoundingClientRect']()['height'] : _0xc869e;
            },
            'set': function(_0x5677a6) {
                this['_node']['style']['height'] = _0x5677a6 + 'px';
            }
        }),
        Object['defineProperty'](this, '_bounds', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x2581a5 = parseFloat(this['_node']['style']['left']['replace'](',', '.'))
                  , _0x240d6a = parseFloat(this['_node']['style']['top']['replace'](',', '.'))
                  , _0x1ad0fb = parseFloat(this['_node']['style']['width']['replace'](',', '.'))
                  , _0x5c866f = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return {
                    'left': isNaN(_0x2581a5) ? this['_node']['getBoundingClientRect']()['left'] : _0x2581a5,
                    'top': isNaN(_0x240d6a) ? this['_node']['getBoundingClientRect']()['top'] : _0x240d6a,
                    'width': isNaN(_0x1ad0fb) ? this['_node']['getBoundingClientRect']()['width'] : _0x1ad0fb,
                    'height': isNaN(_0x5c866f) ? this['_node']['getBoundingClientRect']()['height'] : _0x5c866f
                };
            },
            'set': function(_0x31de51) {
                this['_left'] = _0x31de51['left'],
                this['_top'] = _0x31de51['top'],
                this['_width'] = _0x31de51['width'],
                this['_height'] = _0x31de51['height'];
            }
        }),
        Object['defineProperty'](this, '_background', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x19c00c['style']['background'];
            },
            'set': function(_0x56cabd) {
                _0x19c00c['style']['background'] = _0x56cabd;
            }
        }),
        Object['defineProperty'](this, '_color', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x19c00c['style']['color'];
            },
            'set': function(_0xafc4b) {
                _0x19c00c['style']['color'] = _0xafc4b;
            }
        });
        var _0x4d5f19 = 0x0;
        Object['defineProperty'](this, '_cornerR', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4d5f19;
            },
            'set': function(_0x906f7a) {
                _0x4d5f19 = _0x906f7a;
                if (Array['isArray'](_0x906f7a))
                    this['_node']['style']['borderRadius'] = _0x906f7a[0x0] + 'px\x20' + _0x906f7a[0x1] + 'px\x20' + _0x906f7a[0x2] + 'px\x20' + _0x906f7a[0x3] + 'px';
                else
                    this['_node']['style']['borderRadius'] = _0x906f7a + 'px\x20' + _0x906f7a + 'px\x20' + _0x906f7a + 'px\x20' + _0x906f7a + 'px';
            }
        }),
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x19c00c['style']['display'] && _0x19c00c['style']['display'] !== '' ? _0x19c00c['style']['display'] === 'block' : _0x19c00c['offsetParent'] !== undefined;
            },
            'set': function(_0x7677e7) {
                _0x19c00c['style']['display'] = _0x7677e7 ? 'block' : 'none';
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        Object['defineProperty'](this, '_className', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                return _0x175c50;
            },
            'set': function(_0x4005c7) {
                _0x175c50 = _0x4005c7,
                _0x19c00c['setAttribute']('widget-class', _0x175c50);
            }
        }),
        Object['defineProperty'](this, '_font', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x34c423) {
                this['_node']['style']['font'] = $MISC['fontCheck'](_0x34c423);
            }
        });
        var _0x170c61 = 'transparent';
        Object['defineProperty'](this, '_frameColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x170c61;
            },
            'set': function(_0x18d00b) {
                _0x170c61 = _0x18d00b,
                this['_node']['style']['boxShadow'] = _0x341fce === 0x0 ? undefined : 'inset\x200\x200\x200\x20' + _0x341fce + 'px\x20' + _0x170c61;
            }
        });
        var _0x341fce = 0x0;
        Object['defineProperty'](this, '_frameSize', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x341fce;
            },
            'set': function(_0x111512) {
                _0x341fce = _0x111512,
                this['_node']['style']['boxShadow'] = _0x341fce === 0x0 ? undefined : 'inset\x200\x200\x200\x20' + _0x341fce + 'px\x20' + _0x170c61;
            }
        });
    }
    return _0x5c4e61['prototype']['append'] = function(_0x217767) {
        _0x217767['_parent'] = this,
        this['_children']['push'](_0x217767),
        this['_node']['appendChild'](_0x217767['_node']);
    }
    ,
    _0x5c4e61['prototype']['remove'] = function(_0x3f692f, _0x3f6068) {
        var _0x1b6c85 = this['_children']['indexOf'](_0x3f692f);
        _0x1b6c85 !== -0x1 && (_0x3f6068 ? (this['_node']['removeChild'](_0x3f692f['_node']),
        _0x3f692f['_parent'] = null,
        this['_children']['splice'](_0x1b6c85, 0x1)) : this['_children'][_0x1b6c85]['dispose']()),
        _0x3f692f = null;
    }
    ,
    _0x5c4e61['prototype']['dispose'] = function() {
        for (var _0x4d51c7 = this['_children']['pop'](); _0x4d51c7; _0x4d51c7 = this['_children']['pop']()) {
            _0x4d51c7['dispose']();
        }
        this['_children'] = null;
        if (this['_parent']) {
            this['_parent']['_node']['removeChild'](this['_node']);
            var _0x93432d = this['_parent']['_children']
              , _0x81048e = _0x93432d['indexOf'](this);
            _0x93432d['splice'](_0x81048e, 0x1),
            this['_parent'] = null;
        }
    }
    ,
    _0x5c4e61['prototype']['deepWdgtCount'] = function() {
        var _0x10976f = 0x1;
        return this['_children']['forEach'](function(_0x44a013) {
            _0x10976f += _0x44a013['deepWdgtCount']();
        }),
        _0x10976f;
    }
    ,
    _0x5c4e61['prototype']['deepFocusFind'] = function() {
        var _0x55db8e = this['_focused'] ? [this] : [];
        return this['_children']['forEach'](function(_0x2bdfda) {
            _0x55db8e = _0x55db8e['concat'](_0x2bdfda['deepFocusFind']());
        }),
        _0x55db8e;
    }
    ,
    _0x5c4e61['prototype']['getChildrenByClassName'] = function(_0x4216a2) {
        var _0x221be2 = this['_className'] === _0x4216a2 ? [this] : [];
        return this['_children']['forEach'](function(_0x40df91) {
            var _0x4013de = _0x40df91['getChildrenByClassName'](_0x4216a2);
            if (_0x4013de)
                _0x221be2 = _0x221be2['concat'](_0x4013de);
        }),
        _0x221be2['length'] > 0x0 ? _0x221be2 : undefined;
    }
    ,
    _0x5c4e61['prototype']['getScreenBounds'] = function() {
        var _0x4cb335 = {
            'top': this['_top'],
            'left': this['_left'],
            'width': this['_width'],
            'height': this['_height']
        };
        for (var _0x240b21 = this['_parent']; _0x240b21; _0x240b21 = _0x240b21['_parent']) {
            _0x4cb335['top'] += _0x240b21['_top'],
            _0x4cb335['left'] += _0x240b21['_left'];
        }
        return _0x4cb335;
    }
    ,
    _0x5c4e61;
}()
  , $ScreenBlackBoard = function() {
    function _0x2ad53c() {
        $Widget['call'](this, '<div\x20style=\x27position:\x20absolute;\x20left:\x200;\x20top:\x200;\x20width:\x201280px;\x20height:\x20720px;\x20background-color:\x20rgba(0,0,0,0.68);\x20border-radius:\x205px;\x20overflow:\x20hidden\x27></div>'),
        this['_className'] = 'ScreenLogger';
        var _0x3bfea5 = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute;\x20top:\x200px;\x20left:\x200px;\x20width:\x201280px;\x20word-wrap:\x20break-word\x27></div>');
        _0x3bfea5['style']['transition'] = 'top\x20300ms',
        this['_node']['appendChild'](_0x3bfea5);
        var _0x346d6b = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute;\x20top:\x205px;\x20right:\x200px;\x20width:\x203px;\x20height:\x20100px;\x20background:\x20red\x27></div>');
        _0x346d6b['style']['transition'] = 'top\x20100ms',
        this['_node']['appendChild'](_0x346d6b);
        var _0x21f1bc = $MISC['html2Element']('<div\x20style=\x27position:\x20absolute;\x20top:\x205px;\x20right:\x201px;\x20width:\x201px;\x20bottom:\x205px;\x20background:\x20rgba(255,0,0,0.5)\x27></div>');
        this['_node']['appendChild'](_0x21f1bc);
        var _0x3246a0 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0x3246a0['replace'](/(\d)+px/m, 0x12 + 'px'),
        Object['defineProperty'](this, '_text', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x2b800d = _0x3bfea5['innerHTML'];
                return _0x2b800d = _0x2b800d['replace'](new RegExp('&nbsp;&nbsp;&nbsp;&nbsp;','g'), '\x09'),
                _0x2b800d = _0x2b800d['replace'](new RegExp('&nbsp;','g'), '\x20'),
                _0x2b800d = _0x2b800d['replace'](new RegExp('<br>','g'), '\x0a'),
                _0x2b800d = _0x2b800d['replace'](new RegExp('</span>','g'), ''),
                _0x2b800d = _0x2b800d['replace'](new RegExp('<span[^<]*>','g'), ''),
                _0x2b800d = _0x2b800d['replace'](new RegExp('&lt;','g'), '<'),
                _0x2b800d = _0x2b800d['replace'](new RegExp('&gt;','g'), '>'),
                _0x2b800d;
            },
            'set': function(_0x2e9530) {
                var _0x59613f = _0x2e9530['replace'](new RegExp('\x09','g'), '&nbsp;&nbsp;&nbsp;&nbsp;');
                _0x59613f = _0x59613f['replace'](new RegExp('\x20','g'), '&nbsp;'),
                _0x59613f = _0x59613f['replace'](new RegExp('<','g'), '&lt;'),
                _0x59613f = _0x59613f['replace'](new RegExp('>','g'), '&gt;'),
                _0x59613f = _0x59613f['replace'](new RegExp('\x0a','g'), '<br>'),
                _0x3bfea5['innerHTML'] = _0x59613f,
                _0x293e86['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x3118b1 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x3118b1) ? this['_node']['getBoundingClientRect']()['width'] : _0x3118b1;
            },
            'set': function(_0x1344f0) {
                this['_node']['style']['width'] = _0x1344f0 + 'px',
                _0x3bfea5['style']['width'] = _0x1344f0 + 'px',
                _0x293e86['bind'](this)();
            }
        }),
        this['print'] = function(_0x43f54b, _0xa2c38d) {
            _0x98e33a['bind'](this)(_0x43f54b, _0xa2c38d);
        }
        ,
        this['println'] = function(_0x418ade, _0x15315b) {
            _0x98e33a['bind'](this)(_0x418ade + '\x0a', _0x15315b);
        }
        ,
        this['scrollUp'] = function() {
            var _0xa793f6 = this['_node']['offsetHeight']
              , _0x16ae77 = _0x3bfea5['offsetHeight'];
            if (_0x16ae77 > _0xa793f6) {
                var _0x1db863 = 'abcABC'['bounds'](this['_font'])['height']
                  , _0x2bee31 = parseInt(_0x3bfea5['style']['top']) - _0x1db863;
                if (_0x2bee31 + _0x16ae77 < _0xa793f6)
                    _0x2bee31 = _0xa793f6 - _0x16ae77;
                _0x3bfea5['style']['top'] = _0x2bee31 + 'px',
                _0x172794['bind'](this)();
            }
        }
        ,
        this['scrollDown'] = function() {
            var _0x2e1194 = this['_node']['offsetHeight']
              , _0x350dea = _0x3bfea5['offsetHeight'];
            if (_0x350dea > _0x2e1194) {
                var _0xa204c0 = 'abcABC'['bounds'](this['_font'])['height']
                  , _0x984423 = parseInt(_0x3bfea5['style']['top']) + _0xa204c0;
                if (_0x984423 > 0x0)
                    _0x984423 = 0x0;
                _0x3bfea5['style']['top'] = _0x984423 + 'px',
                _0x172794['bind'](this)();
            }
        }
        ;
        var _0x293e86 = function() {
            if (_0x3bfea5['offsetHeight'] !== 0x0) {
                var _0x271eae = _0x3bfea5['offsetHeight']
                  , _0x2d5f17 = _0x3bfea5['offsetTop']
                  , _0x24e37f = this['_node']['offsetHeight']
                  , _0x567dbe = _0x271eae - _0x24e37f;
                _0x567dbe > 0x0 && _0x2d5f17 !== -_0x567dbe && (_0x3bfea5['style']['top'] = _0x24e37f - _0x271eae + 'px'),
                _0x172794['bind'](this)();
            } else
                setTimeout(_0x293e86['bind'](this), 0x5);
        }
          , _0x98e33a = function(_0x76bb8f, _0x11bb45) {
            var _0x32abb7 = _0x76bb8f['replace'](new RegExp('\x09','g'), '&nbsp;&nbsp;&nbsp;&nbsp;');
            _0x32abb7 = _0x32abb7['replace'](new RegExp('\x20','g'), '&nbsp;'),
            _0x32abb7 = _0x32abb7['replace'](new RegExp('<','g'), '&lt;'),
            _0x32abb7 = _0x32abb7['replace'](new RegExp('>','g'), '&gt;'),
            _0x32abb7 = _0x32abb7['replace'](new RegExp('\x0a','g'), '<br>'),
            _0x11bb45 && (_0x32abb7 = '<span\x20style=\x27color:\x20' + _0x11bb45 + '\x27>' + _0x32abb7 + '</span>'),
            _0x3bfea5['innerHTML'] += _0x32abb7,
            _0x293e86['bind'](this)();
        }
          , _0x172794 = function() {
            var _0xd71eb6 = this['_node']['offsetHeight']
              , _0x3ca361 = _0x3bfea5['offsetHeight'];
            if (_0x3ca361 > _0xd71eb6) {
                _0x346d6b['style']['display'] = 'block',
                _0x21f1bc['style']['display'] = 'block';
                var _0xe7584e = _0xd71eb6 * _0xd71eb6 / _0x3ca361;
                _0x346d6b['style']['height'] = _0xe7584e + 'px';
                var _0x22a404 = 0x0
                  , _0x1522ca = -(_0xd71eb6 - _0x3ca361)
                  , _0x4dd96c = 0x0
                  , _0x5c7aa4 = _0xd71eb6 - 0xa - _0xe7584e
                  , _0x2db686 = -parseInt(_0x3bfea5['style']['top'])
                  , _0x2b8456 = _0x2db686 / (_0x1522ca - _0x22a404) * (_0x5c7aa4 - _0x4dd96c) + 0x5;
                _0x346d6b['style']['top'] = _0x2b8456 + 'px';
            } else
                _0x346d6b['style']['display'] = 'none',
                _0x21f1bc['style']['display'] = 'none';
        };
    }
    return _0x2ad53c['prototype'] = Object['create']($Widget['prototype']),
    _0x2ad53c['prototype']['constructor'] = _0x2ad53c,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x2ad53c()),
            this['instance'];
        }
    };
}()
  , $Text = function() {
    function _0x47036f(_0xa877c2) {
        $Widget['call'](this, '<div\x20style=\x27position:\x20absolute;\x20top:\x200px;\x20left:\x200px;\x20white-space:\x20nowrap\x27>' + _0xa877c2['replace'](/ /g, '&nbsp;') + '</div>'),
        this['_className'] = 'Text';
        function _0xaa29de() {
            if (this['_text']) {
                var _0x28b5ff = this['_text']['bounds'](this['_font'], this['_letterSpacing']);
                this['_width'] = _0x28b5ff['width'],
                this['_height'] = _0x28b5ff['height'],
                this['_node']['style']['lineHeight'] = this['_height'] + 'px';
            }
        }
        Object['defineProperty'](this, '_text', {
            'get': function() {
                return this['_node']['innerHTML']['replace'](/&nbsp;/g, '\x20');
            },
            'set': function(_0x251076) {
                this['_node']['innerHTML'] = _0x251076['replace'](/ /g, '&nbsp;'),
                _0xaa29de['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_font', {
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x34fe4d) {
                this['_node']['style']['font'] = $MISC['fontCheck'](_0x34fe4d),
                _0xaa29de['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_letterSpacing', {
            'get': function() {
                return parseFloat(this['_node']['style']['letterSpacing']);
            },
            'set': function(_0x9f4bf3) {
                this['_node']['style']['letterSpacing'] = _0x9f4bf3 + 'px',
                _0xaa29de['bind'](this)();
            }
        }),
        this['_node']['style']['letterSpacing'] = '0px',
        this['_font'] = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
    }
    return _0x47036f['prototype'] = Object['create']($Widget['prototype']),
    _0x47036f['prototype']['constructor'] = _0x47036f,
    _0x47036f;
}()
  , $Label = function() {
    function _0x1f9f39() {
        $Widget['call'](this),
        this['_className'] = 'Label';
        var _0xc925b1 = new $Widget();
        _0xc925b1['_left'] = 0x0,
        _0xc925b1['_top'] = 0x0,
        _0xc925b1['_node']['style']['overflow'] = 'hidden',
        this['append'](_0xc925b1);
        var _0x3b397b = new $Widget('<div\x20style=\x27position:\x20absolute;\x20overflow:\x20hidden;\x20white-space:\x20nowrap;\x20text-overflow:\x20ellipsis\x27></div>');
        _0x3b397b['_left'] = 0x0,
        _0x3b397b['_top'] = 0x0,
        _0x3b397b['_node']['style']['textAlign'] = 'left',
        _0x3b397b['_node']['style']['webkitLineClamp'] = 0x1,
        _0xc925b1['append'](_0x3b397b);
        var _0x150e38 = function() {
            _0xc925b1['_width'] = this['_width'],
            _0xc925b1['_height'] = this['_rowH'],
            _0x3b397b['_left'] = this['_textHGap'],
            _0x3b397b['_width'] = _0xc925b1['_width'] - 0x2 * this['_textHGap'],
            _0x3b397b['_height'] = _0xc925b1['_height'];
            switch (this['_textVerticalAlign']) {
            case $MultilineLabel['TOP']:
                _0xc925b1['_top'] = 0x0;
                break;
            case $MultilineLabel['CENTER']:
                _0xc925b1['_top'] = (this['_height'] - _0xc925b1['_height']) / 0x2;
                break;
            case $MultilineLabel['BOTTOM']:
                _0xc925b1['_top'] = this['_height'] - _0xc925b1['_height'];
                break;
            }
        };
        Object['defineProperty'](this, '_font', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x501db8) {
                _0x501db8 = $MISC['fontCheck'](_0x501db8),
                this['_node']['style']['font'] = _0x501db8,
                this['_rowH'] = _0x501db8['replace'](/[^(\d|\.)]/gm, '');
            }
        });
        var _0x151302 = 0x0;
        Object['defineProperty'](this, '_textHGap', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x151302;
            },
            'set': function(_0x2bc329) {
                _0x151302 = _0x2bc329,
                _0x150e38['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x57160a = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x57160a) ? this['_node']['getBoundingClientRect']()['width'] : _0x57160a;
            },
            'set': function(_0x358f3e) {
                this['_node']['style']['width'] = _0x358f3e + 'px',
                _0x150e38['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x522ae3 = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0x522ae3) ? this['_node']['getBoundingClientRect']()['height'] : _0x522ae3;
            },
            'set': function(_0x5e272d) {
                this['_node']['style']['height'] = _0x5e272d + 'px',
                _0x150e38['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_letterSpacing', {
            'get': function() {
                return parseFloat(_0x3b397b['_node']['style']['letterSpacing']);
            },
            'set': function(_0x2afc09) {
                _0x3b397b['_node']['style']['letterSpacing'] = _0x2afc09 + 'px';
            }
        }),
        Object['defineProperty'](this, '_rowH', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (_0x3b397b['_node']['style']['lineHeight'])
                    return parseFloat(_0x3b397b['_node']['style']['lineHeight']);
                else
                    return undefined;
            },
            'set': function(_0x19ae6c) {
                _0x19ae6c = _0x19ae6c['toString']()['replace'](/[^(\d|\.)]/gm, ''),
                _0x3b397b['_node']['style']['lineHeight'] = _0x19ae6c + 'px',
                _0x150e38['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_text', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3b397b['_node']['innerHTML'];
            },
            'set': function(_0x49eed9) {
                _0x3b397b['_node']['innerHTML'] = _0x49eed9;
            }
        });
        var _0xbb6c40 = $MultilineLabel['TOP'];
        Object['defineProperty'](this, '_textVerticalAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0xbb6c40;
            },
            'set': function(_0x1bbd7d) {
                _0xbb6c40 = _0x1bbd7d,
                _0x150e38['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_textAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3b397b['_node']['style']['textAlign'];
            },
            'set': function(_0x77f920) {
                _0x3b397b['_node']['style']['textAlign'] = _0x77f920;
            }
        });
        var _0x57de45 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0x57de45['replace'](/(\d)+px/m, 0xc + 'px');
    }
    return _0x1f9f39['prototype'] = Object['create']($Widget['prototype']),
    _0x1f9f39['prototype']['constructor'] = _0x1f9f39,
    _0x1f9f39;
}()
  , $ScrollLabel = function() {
    function _0x2d3078() {
        $Label['call'](this),
        this['_className'] = 'ScrollLabel';
        var _0x1fdc7a = this['_children'][0x0]
          , _0x1ebef6 = _0x1fdc7a['_children'][0x0]
          , _0x4a6b3f = new $Widget('<div\x20style=\x27position:\x20absolute;\x20display:\x20-webkit-box;\x20-webkit-box-orient:\x20vertical\x27></div>');
        _0x4a6b3f['_background'] = _0x1ebef6['_background'],
        _0x4a6b3f['_visible'] = ![],
        _0x1fdc7a['append'](_0x4a6b3f),
        Object['defineProperty'](this, '_scrollSpeed', {
            'value': 0x64,
            'writable': !![]
        }),
        Object['defineProperty'](this, '_scroll', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4a6b3f['_visible'];
            },
            'set': function(_0x186413) {
                if (_0x186413) {
                    var _0x101b72 = _0x1ebef6['_node']['innerHTML']['width'](this['_font'], this['_letterSpacing']);
                    this['_width'] < _0x101b72 && (_0x1ebef6['_visible'] = ![],
                    _0x4a6b3f['_visible'] = !![],
                    _0x4a6b3f['_node']['style']['letterSpacing'] = _0x1ebef6['_node']['style']['letterSpacing'],
                    _0x4a6b3f['_node']['style']['textAlign'] = _0x1ebef6['_node']['style']['textAlign'],
                    _0x4a6b3f['_node']['style']['lineHeight'] = _0x1ebef6['_node']['style']['lineHeight'],
                    _0x4a6b3f['_node']['innerHTML'] = _0x1ebef6['_node']['innerHTML'],
                    _0x4a6b3f['_bounds'] = _0x1ebef6['_bounds'],
                    _0x4a6b3f['_width'] = _0x4a6b3f['_node']['innerHTML']['width'](this['_font'], this['_letterSpacing']),
                    _0x4a6b3f['_node']['style']['transition'] = '',
                    _0x4a6b3f['_node']['offsetWidth'],
                    _0x4a6b3f['_node']['style']['transition'] = 'left\x20linear\x20' + (_0x4a6b3f['_width'] - _0x1ebef6['_width']) / this['_scrollSpeed'] + 's',
                    _0x4a6b3f['_left'] -= _0x4a6b3f['_width'] - _0x1ebef6['_width']);
                } else
                    _0x4a6b3f['_node']['style']['transition'] = '',
                    _0x4a6b3f['_node']['offsetWidth'],
                    _0x4a6b3f['_visible'] = ![],
                    _0x1ebef6['_node']['style']['display'] = 'block';
            }
        });
    }
    return _0x2d3078['prototype'] = Object['create']($Label['prototype']),
    _0x2d3078['prototype']['constructor'] = _0x2d3078,
    _0x2d3078;
}()
  , $DebugLabel = function() {
    function _0x23d34f() {
        var _0x520ef7 = '\x20' + document['title'] + '\x20';
        $Label['call'](this),
        this['_className'] = 'DebugLabel';
        var _0x1b0ac3 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0x1b0ac3['replace'](/(\d)+px/m, 0xf + 'px'),
        this['_top'] = 0xa,
        this['_height'] = 0x1e,
        this['_rowH'] = 0x1e,
        this['_left'] = 0x32,
        this['_width'] = 0x258,
        this['_background'] = 'rgb(255,220,0)',
        this['_color'] = 'rgb(0,93,210)',
        this['_cornerR'] = 0x5,
        this['_textAlign'] = 'center',
        this['_node']['style']['zIndex'] = '100000',
        this['_text'] = _0x520ef7;
        function _0x141eda() {
            var _0x151b35 = new Date()
              , _0x426c33 = _0x151b35['getHours']()
              , _0xf541c5 = _0x151b35['getMinutes']()
              , _0x3d380a = _0x151b35['getSeconds']();
            _0x426c33 = (_0x426c33 < 0xa ? '0' : '') + _0x426c33,
            _0xf541c5 = (_0xf541c5 < 0xa ? '0' : '') + _0xf541c5,
            _0x3d380a = (_0x3d380a < 0xa ? '0' : '') + _0x3d380a;
            var _0x4c1bf3 = this['_text'];
            _0x4c1bf3 = _0x4c1bf3['replace'](/⌚\d\d:..:../gm, ''),
            _0x4c1bf3 += '⌚' + _0x426c33 + ':' + _0xf541c5 + ':' + _0x3d380a,
            this['_text'] = _0x4c1bf3;
        }
        setInterval(_0x141eda['bind'](this), 0x3e8),
        _0x141eda['bind'](this)();
    }
    return _0x23d34f['prototype'] = Object['create']($Label['prototype']),
    _0x23d34f['prototype']['constructor'] = _0x23d34f,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x23d34f()),
            this['instance'];
        }
    };
}()
  , $MultilineLabel = function() {
    function _0x168d30() {
        $Widget['call'](this),
        this['_className'] = 'MultilineLabel';
        var _0x538d88 = new $Widget();
        _0x538d88['_left'] = 0x0,
        _0x538d88['_top'] = 0x0,
        _0x538d88['_node']['style']['overflow'] = 'hidden',
        this['append'](_0x538d88);
        var _0x3a39fd = new $Widget('<div\x20style=\x27position:\x20absolute;\x20display:\x20-webkit-box;\x20-webkit-box-orient:\x20vertical\x27></div>');
        _0x3a39fd['_left'] = 0x0,
        _0x3a39fd['_top'] = 0x0,
        _0x3a39fd['_node']['style']['textAlign'] = 'left',
        _0x538d88['append'](_0x3a39fd);
        var _0x41680d = function() {
            this['_rowCapacity'] && (_0x538d88['_width'] = this['_width'],
            _0x538d88['_height'] = this['_rowCapacity'] * this['_rowH'],
            _0x3a39fd['_left'] = this['_textHGap'],
            _0x3a39fd['_width'] = _0x538d88['_width'] - 0x2 * this['_textHGap'],
            _0x3a39fd['_height'] = _0x538d88['_height'],
            _0x3a39fd['_node']['style']['webkitLineClamp'] = this['_rowCapacity']);
            switch (this['_textVerticalAlign']) {
            case $MultilineLabel['TOP']:
                _0x3a39fd['_top'] = 0x0;
                break;
            case $MultilineLabel['CENTER']:
                _0x3a39fd['_top'] = (this['_height'] - _0x3a39fd['_height']) / 0x2;
                break;
            case $MultilineLabel['BOTTOM']:
                _0x3a39fd['_top'] = this['_height'] - _0x3a39fd['_height'];
                break;
            }
        };
        Object['defineProperty'](this, '_font', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['style']['font'];
            },
            'set': function(_0x2a0805) {
                _0x2a0805 = $MISC['fontCheck'](_0x2a0805),
                this['_node']['style']['font'] = _0x2a0805,
                this['_rowH'] = _0x2a0805['replace'](/[^(\d|\.)]/gm, '');
            }
        });
        var _0x37b8eb = 0x0;
        Object['defineProperty'](this, '_textHGap', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x37b8eb;
            },
            'set': function(_0x4f2ca2) {
                _0x37b8eb = _0x4f2ca2,
                _0x41680d['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x514393 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x514393) ? this['_node']['getBoundingClientRect']()['width'] : _0x514393;
            },
            'set': function(_0xb3763e) {
                this['_node']['style']['width'] = _0xb3763e + 'px',
                _0x41680d['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x23d123 = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0x23d123) ? this['_node']['getBoundingClientRect']()['height'] : _0x23d123;
            },
            'set': function(_0x40e48f) {
                this['_node']['style']['height'] = _0x40e48f + 'px',
                _0x41680d['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_letterSpacing', {
            'get': function() {
                return parseFloat(_0x3a39fd['_node']['style']['letterSpacing']);
            },
            'set': function(_0x4b0412) {
                _0x3a39fd['_node']['style']['letterSpacing'] = _0x4b0412 + 'px';
            }
        }),
        Object['defineProperty'](this, '_rowCapacity', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x591d96 = undefined;
                if (_0x3a39fd['_node']['style']['lineHeight']) {
                    var _0x138168 = parseFloat(_0x3a39fd['_node']['style']['lineHeight']);
                    if (!isNaN(_0x138168))
                        _0x591d96 = _0x138168;
                }
                if (_0x591d96) {
                    if (this['_height'] > 0x0)
                        return Math['floor'](this['_height'] / _0x591d96);
                }
                return undefined;
            }
        }),
        Object['defineProperty'](this, '_rowH', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (_0x3a39fd['_node']['style']['lineHeight'])
                    return parseFloat(_0x3a39fd['_node']['style']['lineHeight']);
                else
                    return undefined;
            },
            'set': function(_0x5796ab) {
                _0x5796ab = _0x5796ab['toString']()['replace'](/[^(\d|\.)]/gm, ''),
                _0x3a39fd['_node']['style']['lineHeight'] = _0x5796ab + 'px',
                _0x41680d['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_text', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3a39fd['_node']['innerHTML'];
            },
            'set': function(_0x19d058) {
                _0x3a39fd['_node']['innerHTML'] = _0x19d058;
            }
        }),
        Object['defineProperty'](this, '_rowsStats', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x1e8c87 = document['getElementById']('boudoir');
                _0x1e8c87['style'] = '',
                _0x1e8c87['style']['transform'] = 'scale(0.66666666666666666667)',
                _0x1e8c87['style']['transformOrigin'] = '0\x200',
                _0x1e8c87['style']['position'] = 'absolute',
                _0x1e8c87['style']['left'] = '2000px',
                _0x1e8c87['style']['top'] = '2000px',
                _0x1e8c87['style']['display'] = '-webkit-box',
                _0x1e8c87['style']['webkitBoxOrient'] = 'vertical',
                _0x1e8c87['style']['background'] = _0x1e8c87['style']['color'] = 'transparent',
                _0x1e8c87['style']['width'] = _0x3a39fd['_width'] + 'px',
                _0x1e8c87['innerText'] = this['_text']['replace'](/<br>/gmi, '\x0a'),
                _0x1e8c87['style']['font'] = this['_font'],
                _0x1e8c87['style']['lineHeight'] = this['_rowH'] + 'px',
                _0x1e8c87['style']['letterSpacing'] = this['_letterSpacing'] + 'px',
                _0x1e8c87['style']['textAlign'] = _0x3a39fd['_node']['style']['textAlign'];
                var _0x367bd3 = Math['abs'](_0x1e8c87['offsetHeight'] - this['_rowH']) <= 0x1 ? this['_rowH'] : _0x1e8c87['offsetHeight']
                  , _0x2947bf = Math['ceil'](_0x367bd3 / this['_rowH'])
                  , _0x48e944 = Math['floor'](this['_height'] / this['_rowH'])
                  , _0x2e0de1 = _0x2947bf - _0x48e944;
                return {
                    'totalRowsCount': _0x2947bf,
                    'shownRowsCount': _0x48e944,
                    'cuttedRowsCount': _0x2e0de1 >= 0x0 ? _0x2e0de1 : 0x0
                };
            }
        });
        var _0xd2f360 = $MultilineLabel['TOP'];
        Object['defineProperty'](this, '_textVerticalAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0xd2f360;
            },
            'set': function(_0x1128b4) {
                _0xd2f360 = _0x1128b4,
                _0x41680d['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_textAlign', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (_0x3a39fd['_node']['style']['textAlign'])
                    return parseFloat(_0x3a39fd['_node']['style']['textAlign']);
                else
                    return undefined;
            },
            'set': function(_0x28634b) {
                _0x3a39fd['_node']['style']['textAlign'] = _0x28634b;
            }
        });
        var _0x134572 = window['getComputedStyle'](document['body'], null)['getPropertyValue']('font');
        this['_font'] = _0x134572['replace'](/(\d)+px/m, 0xc + 'px');
    }
    return _0x168d30['prototype'] = Object['create']($Widget['prototype']),
    _0x168d30['prototype']['constructor'] = _0x168d30,
    _0x168d30['TOP'] = 0x0,
    _0x168d30['CENTER'] = 0x1,
    _0x168d30['BOTTOM'] = 0x2,
    _0x168d30;
}()
  , $Svg = function() {
    function _0x4475aa(_0x106969) {
        var _0x5ca3f5 = _0x106969 && _0x106969['constructor'] === String ? $MISC['html2Element'](_0x106969) : _0x106969;
        $Widget['call'](this, _0x5ca3f5),
        this['_className'] = 'Svg';
        function _0x226ead() {
            var _0x265577 = [];
            function _0x92c36b(_0x5efc36) {
                if (_0x5efc36['getAttribute'] && _0x5efc36['getAttribute']('fill'))
                    _0x265577['push'](_0x5efc36);
                if (_0x5efc36['childNodes'])
                    for (var _0x21b36e = 0x0; _0x21b36e < _0x5efc36['childNodes']['length']; _0x21b36e++) {
                        _0x92c36b(_0x5efc36['childNodes'][_0x21b36e]);
                    }
            }
            return _0x92c36b(this['_node']),
            _0x265577;
        }
        Object['defineProperty'](this, '_viewBox', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                var _0x4c0208 = this['_node']['getAttribute']('viewBox');
                return _0x4c0208 ? (_0x4c0208 = _0x4c0208['split']('\x20'),
                {
                    'x': Number(_0x4c0208[0x0]),
                    'y': Number(_0x4c0208[0x1]),
                    'width': Number(_0x4c0208[0x2]),
                    'height': Number(_0x4c0208[0x3])
                }) : {
                    'x': 0x0,
                    'y': 0x0,
                    'width': Number(this['_node']['getAttribute']('width')),
                    'height': Number(this['_node']['getAttribute']('height'))
                };
            }
        }),
        Object['defineProperty'](this, '_svgName', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                return this['_node']['getAttribute']('name');
            },
            'set': function(_0x361117) {
                this['_node']['setAttribute']('name', _0x361117);
            }
        }),
        Object['defineProperty'](this, '_fill', {
            'enumerable': !![],
            'configurable': ![],
            'get': function() {
                var _0x2a108e = _0x226ead['bind'](this)()
                  , _0x20d82e = [];
                for (var _0x322096 = 0x0; _0x322096 < _0x2a108e['length']; _0x322096++)
                    _0x20d82e['push'](_0x2a108e[_0x322096]['getAttribute']('fill'));
                return _0x20d82e;
            },
            'set': function(_0x5bf956) {
                if (!Array['isArray'](_0x5bf956))
                    _0x5bf956 = [_0x5bf956];
                var _0x2c0ddf = _0x226ead['bind'](this)();
                for (var _0x17150b = 0x0, _0x1f4ed2 = 0x0; _0x17150b < _0x2c0ddf['length']; _0x17150b++) {
                    _0x2c0ddf[_0x17150b]['setAttribute']('fill', _0x5bf956[_0x1f4ed2]),
                    _0x1f4ed2 = _0x1f4ed2 + 0x1 <= _0x5bf956['length'] - 0x1 ? _0x1f4ed2 + 0x1 : _0x1f4ed2;
                }
            }
        }),
        this['_node']['setAttribute']('preserveAspectRatio', 'none'),
        this['_width'] = this['_viewBox']['width'],
        this['_height'] = this['_viewBox']['height'];
    }
    return _0x4475aa['prototype'] = Object['create']($Widget['prototype']),
    _0x4475aa['prototype']['constructor'] = _0x4475aa,
    _0x4475aa;
}()
  , $Img = function() {
    function _0x4c9c28(_0x572328) {
        $Widget['call'](this, '<img\x20src=\x27' + (_0x572328 || $Img['BLACK']) + '\x27>'),
        this['_className'] = 'Img',
        this['_background'] = '#000',
        this['_node']['addEventListener']('load', function() {
            _0x50b641 = $Img['READY'],
            _0x5a8ff9['bind'](this)();
        }
        ['bind'](this)),
        this['_node']['addEventListener']('error', function(_0x27c008) {
            _0x50b641 = $Img['ERROR'],
            _0x5a8ff9['bind'](this)();
        }
        ['bind'](this));
        var _0x50b641 = $Img['IDLE'];
        Object['defineProperty'](this, '_state', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x50b641;
            }
        }),
        Object['defineProperty'](this, '_src', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return this['_node']['src'];
            },
            'set': function(_0x4ac0a1) {
                this['_node']['src'] = _0x4ac0a1;
            }
        });
        var _0x579239 = [];
        this['addStateChengeListener'] = function(_0x5e9523) {
            return _0x579239['push'](_0x5e9523),
            _0x5e9523;
        }
        ,
        this['removeStateChengeListener'] = function(_0xc3fe4d) {
            var _0x4ef934 = _0x579239['indexOf'](_0xc3fe4d);
            return _0x4ef934 >= 0x0 ? (_0x579239['splice'](_0x4ef934, 0x1),
            !![]) : ![];
        }
        ;
        function _0x5a8ff9() {
            var _0x54ebe6 = _0x579239['slice'](0x0);
            _0x54ebe6['forEach'](function(_0x1a4d37, _0x99d96f, _0x4bb709) {
                _0x4bb709[_0x99d96f](this['_state']);
            }
            ['bind'](this));
        }
    }
    return _0x4c9c28['prototype'] = Object['create']($Widget['prototype']),
    _0x4c9c28['prototype']['constructor'] = _0x4c9c28,
    _0x4c9c28['IDLE'] = 0x0,
    _0x4c9c28['READY'] = 0x1,
    _0x4c9c28['ERROR'] = 0x2,
    _0x4c9c28['BLACK'] = 'data:image/svg+xml;utf8,<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20style=\x22background:rgb(0,0,0)\x22></svg>',
    _0x4c9c28['TRANSPARENT'] = 'data:image/svg+xml;utf8,<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20style=\x22background:rgba(0,0,0,0)\x22></svg>',
    _0x4c9c28;
}()
  , $Gui = function() {
    function _0x4484e4() {
        $Widget['call'](this, '<div\x20style=\x22position:\x20absolute;\x20left:\x200;\x20top:\x200;\x20width:\x201920px;\x20height:\x201080px\x22></div>'),
        this['_className'] = 'Gui';
        var _0x3a77bf = $BannerCaricamento['getInstance']();
        _0x3a77bf['_node']['style']['zIndex'] = 0x186a0,
        this['append'](_0x3a77bf),
        Object['defineProperty'](this, '_loadingFlag', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3a77bf['_visible'];
            },
            'set': function(_0x2fe882) {
                _0x3a77bf['_visible'] = _0x2fe882;
            }
        });
        var _0x2d1207 = function(_0x11f2c8) {
            if (localStorage && localStorage['length'] === 0x0) {
                $BannerCaricamento['getInstance']()['_visible'] = ![],
                $BannerLancioApp['getInstance']()['_visible'] = ![],
                $BannerLancioRaiPlay['getInstance']()['_visible'] = ![];
                var _0x34a71a = document['getElementById']('panic_00');
                if (!_0x34a71a) {
                    var _0x58698f = '<svg\x20id=\x22panic_00\x22\x20style=\x22position:\x20absolute;\x20top:952px;\x20left:\x20794px\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22331\x22\x20height=\x22128\x22\x20viewBox=\x220\x200\x20331\x20128\x22>' + '<defs>' + '<linearGradient\x20id=\x22AB\x22\x20x1=\x22100%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '<stop\x20offset=\x220%\x22\x20stop-color=\x22#000063\x22/>' + '<stop\x20offset=\x22100%\x22\x20stop-color=\x22#000098\x22/>' + '</linearGradient>' + '</defs>' + '<g\x20fill-rule=\x22evenodd\x22>' + '<path\x20fill=\x22url(#AB)\x22\x20d=\x22M29.5\x2030\x20H249\x20V98\x20H28.5\x20z\x22\x20transform=\x22matrix(1.2335600907029478,\x200,\x200,\x201,\x20-6.656460200848221,\x200)\x22></path>' + '<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20style=\x22white-space:\x20pre;\x22>' + '<tspan\x20x=\x2265\x22\x20y=\x2270.39\x22>dati\x20non\x20trovati</tspan>' + '</text>' + '<path\x20fill=\x22#FFFFFF\x22\x20d=\x22M249\x2098\x20H279\x20V128\x20H249\x20z\x22\x20transform=\x22matrix(1,\x200,\x200,\x201,\x2051.5,\x200)\x22></path>' + '<path\x20fill=\x22#2323F4\x22\x20fill-opacity=\x22.9\x22\x20d=\x22M\x20280.5\x2030\x20L\x20300.5\x2030\x20L\x20300.5\x2050\x20L\x20280.5\x2050\x20L\x20280.5\x2030\x20Z\x22></path>' + '<path\x20fill=\x22#2323F4\x22\x20d=\x22M0\x200H30V30H0z\x22></path>' + '</g>' + '</svg>'
                      , _0x53f506 = document['createElement']('div');
                    _0x53f506['innerHTML'] = _0x58698f,
                    _0x34a71a = _0x53f506['firstChild'],
                    document['getElementById']('mainFrame')['appendChild'](_0x34a71a);
                } else
                    _0x34a71a['style']['transition'] = '',
                    _0x34a71a['offsetWidth'],
                    _0x34a71a['style']['opacity'] = '1';
                setTimeout(function() {
                    _0x34a71a['style']['transition'] = 'opacity\x205s\x20cubic-bezier(1,-0.01,1,-0.01)',
                    _0x34a71a['offsetWidth'],
                    _0x34a71a['style']['opacity'] = '0';
                }, 0x0);
                return;
            }
            for (var _0xfa3f50 = 0x0, _0x406411 = ![]; !_0x406411 && _0xfa3f50 < this['_children']['length']; _0xfa3f50++) {
                _0x406411 = this['_children'][_0xfa3f50]['_visible'] && this['_children'][_0xfa3f50]['_className'] !== 'RadioPoster' && this['_children'][_0xfa3f50]['_className'] !== 'ScreenLogger' && this['_children'][_0xfa3f50]['_className'] !== 'BannerReaStreaming' && this['_children'][_0xfa3f50]['_className'] !== 'SceneTA' && this['_children'][_0xfa3f50]['_className'] !== 'Iframe';
            }
            switch (_0x11f2c8['keyCode']) {
            case KeyEvent['VK_GREEN']:
                if ($StreamingService['isChannelLive']())
                    $SubtitleService['toggle']();
                else {
                    if (DEBUG || CONSOLE_DEBUG) {
                        if (!!window['pico']) {
                            var _0x1ce848 = document['getElementById']('pico-dashboard');
                            !_0x1ce848 && (_0x1ce848 = $MISC['html2Element']('<div\x20id=\x22pico-dashboard\x22\x20style=\x22position:\x20absolute;\x20width:\x201280px;\x20height:\x20720px\x22></div>'),
                            document['body']['appendChild'](_0x1ce848)),
                            pico['dashboard']['createUI'](_0x1ce848);
                        }
                    }
                }
                break;
            case KeyEvent['VK_YELLOW']:
                if ($StreamingService['isChannelLive']()) {
                    var _0x9dbbbc = $VideoManager['getInstance']()['trackSwitch']();
                    _0x9dbbbc && _0x9dbbbc['track'] && (println('audio\x20' + _0x9dbbbc['track']['language'] + '\x20(PID=' + _0x9dbbbc['track']['pid'] + ',\x20encoding\x20' + (_0x9dbbbc['track']['encoding'] || 'N/A') + ')'),
                    $SimpleBanner['getInstance']()['show'](!![], 'Audio:\x20' + $VideoManager['getInstance']()['getTrackName'](_0x9dbbbc)));
                } else {
                    var _0x25e373 = $StreamingService['getPlayer']();
                    if (_0x25e373) {
                        var _0x40b4c4 = _0x25e373['getAudioTracks']();
                        if (_0x40b4c4['length'] > 0x1)
                            for (_0xfa3f50 = 0x0; _0xfa3f50 < _0x40b4c4['length']; _0xfa3f50++) {
                                _0x40b4c4[_0xfa3f50]['enabled'] && (_0x25e373['setAudioTrack'](_0x40b4c4[(_0xfa3f50 + 0x1) % _0x40b4c4['length']]),
                                $SimpleBanner['getInstance']()['show'](!![], 'Audio:\x20' + _0x40b4c4[(_0xfa3f50 + 0x1) % _0x40b4c4['length']]['language']));
                            }
                    }
                }
                break;
            case KeyEvent['VK_BLUE']:
                var _0x345225;
                try {
                    if (window['$PwdPane'] && window['$PwdPane']['instance'])
                        _0x345225 = $PwdPane['getInstance']()['_visible'];
                } catch (_0x54d2b2) {
                    _0x345225 = ![];
                }
                if (!_0x345225) {
                    var _0x44fa64 = $MISC['lunchFromAIT']();
                    if (!_0x44fa64)
                        println('UNABLE\x20TO\x20LAUNCH\x20RAI-PLAY', 'err');
                }
                break;
            case KeyEvent['VK_LEFT']:
            case KeyEvent['VK_RIGHT']:
                if (_0x406411)
                    return;
                $StreamingService['nextChannel'](_0x11f2c8['keyCode'] === KeyEvent['VK_LEFT']);
                break;
            case KeyEvent['VK_UP']:
                $BannerReaStreaming['instance'] && $BannerReaStreaming['instance']['_visible'] && $BannerReaStreaming['instance']['visibleTrigger'](![]);
                if (DEBUG || CONSOLE_DEBUG) {
                    var _0x58a4ec = $SceneTA['getInstance']();
                    _0x58a4ec['_visible'] && (_0x58a4ec['_visible'] = ![]);
                }
                if (!_0x406411) {
                    var _0x22aa05 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x22aa05)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x5496dc = $BannerPrivacy['getInstance']();
                        _0x5496dc['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x22f83a() {
                                    var _0x10cc8d = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x10cc8d);
                                    _0x10cc8d['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x22f83a);
                            });
                        }
                        ,
                        _0x5496dc['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x5496dc);
                    } else {
                        function _0x4c643f() {
                            var _0x33d75c = $Scene0['getInstance']();
                            if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                $Gui['getInstance']()['append'](_0x33d75c);
                            _0x33d75c['visibleTrigger'](!![], function() {
                                $Gui['getInstance']()['_loadingFlag'] = ![];
                            });
                        }
                        $Gui['getInstance']()['_loadingFlag'] = !![],
                        !EPG['getEpg'] ? $MISC['loadMainJS'](function() {
                            $Gui['getInstance']()['onInfoLoad'](_0x4c643f);
                        }) : _0x4c643f();
                    }
                }
                break;
            case KeyEvent['VK_BACK']:
                if (DEBUG || CONSOLE_DEBUG) {
                    var _0x58a4ec = $SceneTA['getInstance']();
                    _0x58a4ec['_visible'] && (_0x58a4ec['_visible'] = ![]);
                }
                if (!_0x406411) {
                    var _0x22aa05 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x22aa05)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x5496dc = $BannerPrivacy['getInstance']();
                        _0x5496dc['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x4959a0() {
                                    var _0x39ea3e = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x39ea3e);
                                    _0x39ea3e['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x4959a0);
                            });
                        }
                        ,
                        _0x5496dc['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x5496dc);
                    } else {
                        function _0x272230() {
                            var _0x4989ff = $Scene0['getInstance']();
                            if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                $Gui['getInstance']()['append'](_0x4989ff);
                            var _0x8ebc0b = EPG['getEpg']()['type'] === 'tv' ? 0x2 : 0x3
                              , _0x376688 = [undefined, undefined, 'CanaliTv', 'CanaliRadio'][_0x8ebc0b]
                              , _0x1a92d7 = $Scene0['getInstance']()['getChildrenByClassName'](_0x376688)[0x0]
                              , _0x5a7ba5 = _0x1a92d7['getChildrenByClassName']('Menu0')[0x0];
                            _0x5a7ba5['_focused'] = !![],
                            _0x4989ff['_activeSectionIndex'] = _0x8ebc0b,
                            $Scene0['getInstance']()['_menu']['_focused'] = ![],
                            setTimeout(function() {
                                _0x4989ff['visibleTrigger'](!![], function() {
                                    $Gui['getInstance']()['_loadingFlag'] = ![];
                                });
                            }, 0x64);
                        }
                        $Gui['getInstance']()['_loadingFlag'] = !![],
                        !EPG['getEpg'] ? $MISC['loadMainJS'](function() {
                            $Gui['getInstance']()['onInfoLoad'](_0x272230);
                        }) : _0x272230();
                    }
                }
                break;
            case KeyEvent['VK_RED']:
                if ($TaService['isTASupported']())
                    $TaService['spotReplacement']['replace']();
                else {
                    if ($TaService['isOn']()) {
                        for (_0xfa3f50 = 0x0,
                        _0x406411 = ![]; !_0x406411 && _0xfa3f50 < this['_children']['length']; _0xfa3f50++) {
                            _0x406411 = this['_children'][_0xfa3f50]['_visible'] && this['_children'][_0xfa3f50]['_className'] !== 'RadioPoster' && this['_children'][_0xfa3f50]['_className'] !== 'ScreenLogger' && this['_children'][_0xfa3f50]['_className'] !== 'BannerReaStreaming' && this['_children'][_0xfa3f50]['_className'] !== 'BannerLancioApp' && this['_children'][_0xfa3f50]['_className'] !== 'BannerLancioRaiPlay' && this['_children'][_0xfa3f50]['_className'] !== 'SceneTA';
                        }
                        (DEBUG || CONSOLE_DEBUG) && !_0x406411 && $TaService['loadCreativity']();
                    }
                }
                break;
            }
        }
        ['bind'](this);
        this['_keyListener'] = _0x2d1207;
        if (DEBUG || CONSOLE_DEBUG) {
            var _0x21f626 = $SceneTA['getInstance']();
            _0x21f626['_visible'] = ![],
            this['append'](_0x21f626);
        }
    }
    return _0x4484e4['prototype'] = Object['create']($Widget['prototype']),
    _0x4484e4['prototype']['constructor'] = _0x4484e4,
    _0x4484e4['prototype']['onInfoLoad'] = function(_0x4c87db) {
        if ($Gui['getInstance']()['getChildrenByClassName']('RadioPoster')) {
            _0x4c87db();
            return;
        }
        function _0x1e22d2() {
            var _0x8c0d7a = new $PendingTaskSentry(0x3,[_0x4c87db],'loadSentry2');
            new $EpgIgnitor(function() {
                $Gui['getInstance']()['append']($RadioPoster['getInstance']()),
                _0x8c0d7a['accomplishedTask']('EPG\x20ready\x20👍');
            }
            ),
            new $TgEpgIgnitor(function() {
                _0x8c0d7a['accomplishedTask']('TG-EPG\x20ready\x20👍');
            }
            ),
            new $RaiPlayEpgIgnitor(function() {
                _0x8c0d7a['accomplishedTask']('raiplay-EPG\x20ready\x20👍');
            }
            );
        }
        ;var _0x574823 = $PendingTaskSentry['getByName']('loaderSnt');
        if (!_0x574823)
            _0x1e22d2();
        else
            _0x574823['_callbackArr']['push'](_0x1e22d2);
    }
    ,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x4484e4(),
            document['getElementById']('mainFrame')['appendChild'](this['instance']['_node'])),
            this['instance'];
        }
    };
}()
  , $Padding = function() {
    function _0x496e45() {
        $Widget['call'](this),
        this['_className'] = '[]';
        function _0x12ba29() {
            this['_width'] = (_0x323a7d ? _0x323a7d['_width'] : 0x0) + _0x26b602 + _0x2734ff,
            this['_height'] = (_0x323a7d ? _0x323a7d['_height'] : 0x0) + _0x363f93 + _0x2c9a1f,
            _0x323a7d && (_0x323a7d['_top'] = _0x363f93,
            _0x323a7d['_left'] = _0x26b602);
        }
        var _0x323a7d = undefined;
        Object['defineProperty'](this, '_widget', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x323a7d;
            },
            'set': function(_0x4e833a) {
                _0x323a7d && this['remove'](_0x323a7d),
                _0x323a7d = _0x4e833a,
                this['append'](_0x323a7d),
                this['_className'] = '[' + (_0x4e833a ? _0x4e833a['_className'] : '') + ']',
                _0x12ba29['bind'](this)();
            }
        });
        var _0x26b602 = 0x0;
        Object['defineProperty'](this, '_leftStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x26b602;
            },
            'set': function(_0x371c2c) {
                _0x26b602 = _0x371c2c,
                _0x12ba29['bind'](this)();
            }
        });
        var _0x2734ff = 0x0;
        Object['defineProperty'](this, '_rightStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x2734ff;
            },
            'set': function(_0x37dadc) {
                _0x2734ff = _0x37dadc,
                _0x12ba29['bind'](this)();
            }
        });
        var _0x363f93 = 0x0;
        Object['defineProperty'](this, '_topStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x363f93;
            },
            'set': function(_0xd1e4fd) {
                _0x363f93 = _0xd1e4fd,
                _0x12ba29['bind'](this)();
            }
        });
        var _0x2c9a1f = 0x0;
        Object['defineProperty'](this, '_bottomStuff', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x2c9a1f;
            },
            'set': function(_0x5a5dbc) {
                _0x2c9a1f = _0x5a5dbc,
                _0x12ba29['bind'](this)();
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x323a7d ? _0x323a7d['_focused'] : ![];
            },
            'set': function(_0x4ec59f) {
                if (_0x323a7d)
                    _0x323a7d['_focused'] = _0x4ec59f;
            }
        });
    }
    return _0x496e45['prototype'] = Object['create']($Widget['prototype']),
    _0x496e45['prototype']['constructor'] = _0x496e45,
    _0x496e45;
}()
  , $Button0 = function() {
    function _0x447e9e() {
        var _0x4e1d60 = '#fff';
        Object['defineProperty'](this, '_focusedColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4e1d60;
            },
            'set': function(_0x5946c8) {
                _0x4e1d60 = _0x5946c8;
                if (this['_focused'])
                    this['_color'] = _0x4e1d60;
            }
        }),
        Object['defineProperty'](this, '_unfocusedColor', {
            'value': '#fff',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusedBackground', {
            'value': '#000099',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_unfocusedBackground', {
            'value': '#999999',
            'writable': !![]
        }),
        $Label['call'](this),
        this['_className'] = 'Button0',
        this['_color'] = this['_unfocusedColor'],
        this['_font'] = '24px\x20PublicSans-Bold',
        this['_letterSpacing'] = -0.8,
        this['_rowH'] = 0x20,
        this['_textVerticalAlign'] = $MultilineLabel['CENTER'],
        this['_textAlign'] = 'center';
        var _0x3ae377 = undefined
          , _0x603574 = $MISC['html2Element']('<div\x20style=\x27width:\x20100%;\x20height:\x20100%;\x20background:' + this['_unfocusedBackground'] + ';\x20border-radius:\x202px\x27></div>');
        _0x603574['addEventListener']('animationend', function() {
            _0x3ae377 && (_0x3ae377(),
            _0x3ae377 = undefined,
            _0x603574['className'] = '');
        }, ![]),
        this['_node']['insertBefore'](_0x603574, this['_node']['firstChild']);
        var _0x5a7afa = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x5a7afa;
            },
            'set': function(_0x47f07a) {
                _0x5a7afa = _0x47f07a,
                TRANSITION && (_0x603574['style']['transition'] = _0x5a7afa ? 'background\x20linear\x200.3s' : 'background\x20linear\x200.15s',
                this['_node']['style']['transition'] = _0x5a7afa ? 'color\x20linear\x200.3s' : 'color\x20linear\x200.15s'),
                _0x603574['style']['background'] = _0x47f07a ? this['_focusedBackground'] : this['_unfocusedBackground'],
                this['_color'] = _0x47f07a ? this['_focusedColor'] : this['_unfocusedColor'];
            }
        });
        var _0x33e1eb = 0x2;
        Object['defineProperty'](this, '_cornerR', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x33e1eb;
            },
            'set': function(_0x426d1f) {
                _0x33e1eb = _0x426d1f;
                if (Array['isArray'](_0x426d1f))
                    _0x603574['style']['borderRadius'] = _0x426d1f[0x0] + 'px\x20' + _0x426d1f[0x1] + 'px\x20' + _0x426d1f[0x2] + 'px\x20' + _0x426d1f[0x3] + 'px';
                else
                    _0x603574['style']['borderRadius'] = _0x426d1f + 'px\x20' + _0x426d1f + 'px\x20' + _0x426d1f + 'px\x20' + _0x426d1f + 'px';
            }
        }),
        this['click'] = function(_0x3653b3) {
            if (TRANSITION)
                _0x3ae377 = _0x3653b3,
                _0x603574['className'] = '',
                _0x603574['offsetWidth'],
                _0x603574['className'] = 'click';
            else {
                if (_0x3653b3)
                    _0x3653b3();
            }
        }
        ;
    }
    return _0x447e9e['prototype'] = Object['create']($Label['prototype']),
    _0x447e9e['prototype']['constructor'] = _0x447e9e,
    _0x447e9e;
}()
  , $Button = function() {
    function _0x26cd35() {
        Object['defineProperty'](this, '_focusedColor', {
            'value': '#fff',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_unfocusedColor', {
            'value': '#fff',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusedBackground', {
            'value': '#000099',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_unfocusedBackground', {
            'value': '#999999',
            'writable': !![]
        }),
        $Label['call'](this),
        this['_className'] = 'Button',
        this['_color'] = this['_unfocusedColor'],
        this['_font'] = '24px\x20PublicSans-Bold',
        this['_letterSpacing'] = -0.8,
        this['_rowH'] = 0x20,
        this['_textVerticalAlign'] = $MultilineLabel['CENTER'],
        this['_textAlign'] = 'center',
        this['_background'] = this['_unfocusedBackground'],
        this['_cornerR'] = 0x2;
        var _0x159444 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x159444 && (_0x159444(),
            _0x159444 = undefined);
        }, ![]);
        var _0x3b4fb6 = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3b4fb6;
            },
            'set': function(_0x24cc98) {
                _0x3b4fb6 = _0x24cc98;
                if (TRANSITION)
                    this['_node']['style']['transition'] = _0x3b4fb6 ? 'background\x20linear\x200.3s,\x20color\x20linear\x200.3s' : 'background\x20linear\x200.15s,\x20color\x20linear\x200.15s';
                this['_background'] = _0x24cc98 ? this['_focusedBackground'] : this['_unfocusedBackground'],
                this['_color'] = _0x24cc98 ? this['_focusedColor'] : this['_unfocusedColor'];
            }
        }),
        this['click'] = function(_0x4b8d19) {
            if (TRANSITION)
                _0x159444 = _0x4b8d19,
                this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = 'click';
            else {
                if (_0x4b8d19)
                    _0x4b8d19();
            }
        }
        ;
    }
    return _0x26cd35['prototype'] = Object['create']($Label['prototype']),
    _0x26cd35['prototype']['constructor'] = _0x26cd35,
    _0x26cd35;
}()
  , $ButtonBack = function() {
    function _0x3f9aad() {
        var _0x22655d = 'transparent';
        Object['defineProperty'](this, '_focusedColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x22655d;
            },
            'set': function(_0x57fc5d) {
                _0x22655d = _0x57fc5d;
                if (this['_focused'])
                    _0x6f6774['_fill'] = _0x57fc5d;
            }
        });
        var _0xd2f72f = '#fff';
        Object['defineProperty'](this, '_unfocusedColor', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0xd2f72f;
            },
            'set': function(_0x4bfaad) {
                _0xd2f72f = _0x4bfaad;
                if (!this['_focused'])
                    _0x6f6774['_fill'] = _0x4bfaad;
            }
        });
        var _0x330dfa = '#fff';
        Object['defineProperty'](this, '_focusedBackground', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x330dfa;
            },
            'set': function(_0x293681) {
                _0x330dfa = _0x293681;
                if (this['_focused'])
                    _0x1a0082['style']['background'] = _0x293681;
            }
        });
        var _0x3e0379 = 'transparent';
        Object['defineProperty'](this, '_unfocusedBackground', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3e0379;
            },
            'set': function(_0x10c075) {
                _0x3e0379 = _0x10c075;
                if (!this['_focused'])
                    _0x1a0082['style']['background'] = _0x10c075;
            }
        }),
        $Widget['call'](this),
        this['_className'] = 'ButtonBack',
        this['_bounds'] = {
            'top': 0x14,
            'left': 0x14,
            'width': 0x50,
            'height': 0x50
        };
        var _0x6f6774 = new $Svg($DataLoader['getInstance']()['getSvgCode']('indietro'));
        this['_fill'] = this['_unfocusedColor'],
        _0x6f6774['_bounds'] = {
            'top': 0x15,
            'left': 0x15,
            'width': 0x26,
            'height': 0x26
        },
        this['append'](_0x6f6774);
        var _0x850274 = undefined
          , _0x1a0082 = $MISC['html2Element']('<div\x20style=\x27width:\x20100%;\x20height:\x20100%;\x20background:' + this['_unfocusedBackground'] + ';\x20border-radius:\x2050%\x27></div>');
        _0x1a0082['addEventListener']('animationend', function() {
            _0x850274 && (_0x850274(),
            _0x850274 = undefined);
        }, ![]),
        this['_node']['insertBefore'](_0x1a0082, this['_node']['firstChild']);
        var _0x545801 = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x545801;
            },
            'set': function(_0x115f53) {
                _0x545801 = _0x115f53;
                if (TRANSITION)
                    _0x1a0082['style']['transition'] = _0x545801 ? 'background\x20linear\x200.3s' : 'background\x20linear\x200.15s';
                _0x1a0082['style']['background'] = _0x115f53 ? this['_focusedBackground'] : this['_unfocusedBackground'],
                _0x6f6774['_fill'] = _0x115f53 ? this['_focusedColor'] : this['_unfocusedColor'];
            }
        }),
        Object['defineProperty'](this, '_width', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x3e0e71 = parseFloat(this['_node']['style']['width']['replace'](',', '.'));
                return isNaN(_0x3e0e71) ? this['_node']['getBoundingClientRect']()['width'] : _0x3e0e71;
            },
            'set': function(_0x26780b) {
                this['_node']['style']['width'] = _0x26780b + 'px',
                _0x6f6774['_top'] = 0x15 * _0x26780b / 0x50,
                _0x6f6774['_width'] = 0x26 * _0x26780b / 0x50;
            }
        }),
        Object['defineProperty'](this, '_height', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x27b78c = parseFloat(this['_node']['style']['height']['replace'](',', '.'));
                return isNaN(_0x27b78c) ? this['_node']['getBoundingClientRect']()['height'] : _0x27b78c;
            },
            'set': function(_0x2d20e7) {
                this['_node']['style']['height'] = _0x2d20e7 + 'px',
                _0x6f6774['_left'] = 0x15 * _0x2d20e7 / 0x50,
                _0x6f6774['_height'] = 0x26 * _0x2d20e7 / 0x50;
            }
        }),
        this['click'] = function(_0x116a86) {
            if (TRANSITION)
                _0x850274 = _0x116a86,
                _0x1a0082['className'] = '',
                _0x1a0082['offsetWidth'],
                _0x1a0082['className'] = 'click';
            else {
                if (_0x116a86)
                    _0x116a86();
            }
        }
        ;
    }
    return _0x3f9aad['prototype'] = Object['create']($Widget['prototype']),
    _0x3f9aad['prototype']['constructor'] = _0x3f9aad,
    _0x3f9aad;
}()
  , $BannerPrivacy = function() {
    var _0x2796d1 = 0xa;
    function _0x5ccf62() {
        $Widget['call'](this),
        this['_className'] = 'BannerPrivacy',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x35c,
            'width': 0x780,
            'height': 0xfa
        },
        this['_node']['style']['opacity'] = 0x0,
        this['_background'] = 'linear-gradient(to\x20bottom,\x20rgba(255,\x20255,\x20255,\x200.95)\x2012%,\x20#fff\x2072%)';
        var _0x19b952 = new $Svg($DataLoader['getInstance']()['getSvgCode']('privacyAsset'));
        _0x19b952['_bounds'] = {
            'top': -0x6b,
            'left': 0x30,
            'width': 0x1ba,
            'height': 0x140
        },
        this['append'](_0x19b952);
        var _0x3eef0e = new $Label();
        _0x3eef0e['_color'] = '#161928',
        _0x3eef0e['_bounds'] = {
            'left': 0x1f9,
            'top': 0x30,
            'width': 0x3bf,
            'height': 0x20
        },
        _0x3eef0e['_font'] = '32px\x20PublicSans-Bold',
        _0x3eef0e['_letterSpacing'] = -1.07,
        _0x3eef0e['_text'] = 'Informativa\x20privacy',
        this['append'](_0x3eef0e);
        var _0xb625af = new $MultilineLabel();
        _0xb625af['_color'] = '#555555',
        _0xb625af['_bounds'] = {
            'left': 0x1f9,
            'top': 0x5c,
            'width': 0x3bf,
            'height': 0x6c
        },
        _0xb625af['_font'] = '28px\x20PublicSans-SemiBold',
        _0xb625af['_letterSpacing'] = -0.93,
        _0xb625af['_rowH'] = 0x24,
        _0xb625af['_text'] = 'Ti\x20informiamo\x20che\x20Rai\x20utilizza\x20sistemi\x20di\x20misurazione\x20in\x20modalità\x20anonima\x20e\x20aggregata\x20per\x20la\x20visione\x20dei\x20contenuti\x20sulle\x20tv\x20connesse.\x20Seleziona\x20“Ok,\x20ho\x20capito”\x20per\x20procedere\x20con\x20la\x20visione\x20o\x20“Maggiori\x20Info”\x20per\x20saperne\x20di\x20più.',
        this['append'](_0xb625af);
        var _0x5d4022 = new $Button0();
        _0x5d4022['_bounds'] = {
            'left': 0x610,
            'top': 0x2b,
            'width': 0x140,
            'height': 0x44
        },
        _0x5d4022['_text'] = 'Maggiori\x20info',
        _0x5d4022['_node']['onmouseup'] = function(_0x245d12) {
            var _0x35efa3 = new Event('keypress');
            _0x35efa3['keyCode'] = KeyEvent['VK_ENTER'],
            this['_keyListener'](_0x35efa3);
        }
        ['bind'](this),
        _0x5d4022['_node']['onmouseenter'] = function(_0xff4d73) {
            _0x505034['_focused'] = ![],
            _0x5d4022['_focused'] = !![];
        }
        ['bind'](this),
        this['append'](_0x5d4022);
        var _0x505034 = new $Button0();
        _0x505034['_bounds'] = {
            'left': 0x610,
            'top': 0x8b,
            'width': 0x140,
            'height': 0x44
        },
        _0x505034['_text'] = 'Ok,\x20ho\x20capito',
        _0x505034['_node']['onmouseup'] = function(_0x4daad5) {
            var _0x1be539 = new Event('keypress');
            _0x1be539['keyCode'] = KeyEvent['VK_ENTER'],
            this['_keyListener'](_0x1be539);
        }
        ['bind'](this),
        _0x505034['_node']['onmouseenter'] = function(_0x5d188a) {
            _0x505034['_focused'] = !![],
            _0x5d4022['_focused'] = ![];
        }
        ['bind'](this),
        this['append'](_0x505034),
        _0x505034['_focused'] = !![];
        function _0x3cb5e2(_0x38a521) {
            _0x5a4e97 && (clearTimeout(_0x5a4e97),
            _0x5a4e97 = setTimeout(function() {
                this['_visible'] = ![];
            }
            ['bind'](this), 0x1388));
            switch (_0x38a521['keyCode']) {
            case KeyEvent['VK_UP']:
                _0x505034['_focused'] = ![],
                _0x5d4022['_focused'] = !![];
                break;
            case KeyEvent['VK_DOWN']:
                _0x505034['_focused'] = !![],
                _0x5d4022['_focused'] = ![];
                break;
            case KeyEvent['VK_ENTER']:
                var _0x1e8731 = _0x505034['_focused'] ? _0x505034 : _0x5d4022;
                _0x1e8731['click'](function() {
                    if (_0x5d4022['_focused'])
                        this['_undisplayHandler'] = undefined,
                        $ModalPrivacy['switch2'](this, '');
                    else {
                        $StorageManager['getInstance']()['write'](PRIVACY_FILE, JSON['stringify']({
                            'tracciamento': !![],
                            'profilazione': !![]
                        }));
                        if (!this['_undisplayHandler']) {
                            var _0x36b7f1 = $BannerLancioApp['getInstance']();
                            if (!$Gui['getInstance']()['getChildrenByClassName']('BannerLancioApp'))
                                $Gui['getInstance']()['append'](_0x36b7f1);
                            _0x36b7f1['_visible'] = !![];
                        }
                        this['visibleTrigger'](![], $Gui['getInstance']()['remove']['bind'](this, this));
                    }
                }
                ['bind'](this));
                break;
            }
        }
        var _0x3213c2 = undefined;
        this['_node']['addEventListener']('animationend', function(_0x39d814) {
            (_0x39d814['animationName'] === 'bannerHide' || _0x39d814['animationName'] === 'bannerShow') && (_0x3213c2 && (_0x3213c2(),
            _0x3213c2 = undefined));
        }, ![]);
        var _0x5a4e97 = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x308ba9) {
                if (_0x308ba9 !== this['_visible']) {
                    TRANSITION && (this['_node']['className'] = '',
                    this['_node']['offsetWidth'],
                    this['_node']['className'] = _0x308ba9 ? 'bannerShow' : 'bannerHide');
                    this['_top'] = _0x308ba9 ? 0x33e : 0x35c,
                    this['_node']['style']['opacity'] = _0x308ba9 ? 0x1 : 0x0,
                    this['_node']['style']['zIndex'] = _0x308ba9 ? 0x3e8 : -0x3e8;
                    if (_0x308ba9)
                        this['_displayCount']++;
                    this['_keyListener'] = _0x308ba9 ? _0x3cb5e2['bind'](this) : undefined,
                    _0x308ba9 ? (_0x5a4e97 = setTimeout(function() {
                        this['_visible'] = ![];
                    }
                    ['bind'](this), _0x2796d1 * 0x3e8),
                    $WebTrekk['track']($WebTrekk['events']['PRIVACY'])) : (clearTimeout(_0x5a4e97),
                    this['_undisplayHandler'] && (this['_undisplayHandler'](),
                    this['_undisplayHandler'] = undefined));
                }
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        Object['defineProperty'](this, '_displayCount', {
            'value': 0x0,
            'writable': !![]
        }),
        Object['defineProperty'](this, '_undisplayHandler', {
            'value': undefined,
            'writable': !![]
        }),
        this['visibleTrigger'] = function(_0x5d6d82, _0x18c9ba) {
            if (TRANSITION)
                _0x3213c2 = _0x18c9ba,
                this['_visible'] = _0x5d6d82;
            else {
                if (_0x18c9ba)
                    _0x18c9ba();
            }
        }
        ;
    }
    return _0x5ccf62['prototype'] = Object['create']($Widget['prototype']),
    _0x5ccf62['prototype']['constructor'] = _0x5ccf62,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x5ccf62()),
            this['instance'];
        }
    };
}()
  , $ModalAudioSubs = function() {
    var _0x9f8159 = 0x1
      , _0x3c01e8 = 0x2;
    function _0x503fc3() {
        $Widget['call'](this),
        this['_className'] = 'ModalAudioSubs',
        this['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x211568 = new $Widget();
        _0x211568['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        _0x211568['_node']['style']['opacity'] = 0x0;
        var _0x536dc0 = new $ButtonBack()
          , _0x5392f0 = new $Label();
        _0x5392f0['_color'] = '#fff',
        _0x5392f0['_bounds'] = {
            'left': 0x8e,
            'top': 0x28,
            'width': 0x320,
            'height': 0x28
        },
        _0x5392f0['_font'] = '24px\x20PublicSans-Bold',
        _0x5392f0['_letterSpacing'] = -0.8,
        _0x5392f0['_rowH'] = 0x28;
        var _0x576afe = new $Label();
        _0x576afe['_color'] = '#fff',
        _0x576afe['_bounds'] = {
            'left': 0x8e,
            'top': 0x5e,
            'width': 0x320,
            'height': 0x34
        },
        _0x576afe['_font'] = '52px\x20PublicSans-Regular',
        _0x576afe['_letterSpacing'] = -1.2,
        _0x576afe['_rowH'] = 0x34;
        var _0x243e03 = new $Widget();
        _0x243e03['_bounds'] = {
            'left': 0x0,
            'top': 0x138,
            'width': 0x71c,
            'height': 0x300
        },
        _0x243e03['_node']['style']['opacity'] = 0x0,
        _0x211568['append'](_0x536dc0),
        _0x211568['append'](_0x5392f0),
        _0x211568['append'](_0x576afe),
        this['append'](_0x211568),
        this['append'](_0x243e03);
        var _0x165463 = 0x0, _0x4ad866, _0x534ca7, _0x4e5e53 = function() {
            var _0x2fb971 = _0x243e03['_children']['slice'](0x0)
              , _0x1466bd = _0x2fb971['pop']();
            while (_0x1466bd) {
                _0x243e03['remove'](_0x1466bd),
                _0x1466bd = _0x2fb971['pop']();
            }
            _0x536dc0['_focused'] = ![];
        }, _0x10a948 = function() {
            _0x165463 = 0x0,
            this['_visible'] = ![],
            _0x4ad866['visibleTrigger'](!![], function() {
                _0x4e5e53();
            }
            ['bind'](this));
        }
        ['bind'](this), _0x37fca7 = function(_0x2cef97) {
            if (!this['_visible'])
                return;
            if (_0x536dc0['_focused'])
                switch (_0x2cef97['keyCode']) {
                case KeyEvent['VK_DOWN']:
                case KeyEvent['VK_RIGHT']:
                    _0x165463 < _0x243e03['_children']['length'] && (_0x536dc0['_focused'] = ![],
                    _0x243e03['_children'][_0x165463]['_focused'] = !![]);
                    break;
                case KeyEvent['VK_ENTER']:
                case KeyEvent['VK_BACK']:
                    _0x536dc0['click'](function() {
                        _0x10a948();
                    });
                    break;
                }
            else {
                var _0x4d4017 = _0x243e03['_children'][_0x165463]['onHandleKey'](_0x2cef97);
                if (_0x4d4017)
                    switch (_0x2cef97['keyCode']) {
                    case KeyEvent['VK_UP']:
                        _0x536dc0['_focused'] = !![];
                        break;
                    case KeyEvent['VK_LEFT']:
                        _0x243e03['_children'][_0x165463]['_focused'] = ![];
                        _0x165463 > 0x0 ? (_0x165463 -= 0x1,
                        _0x243e03['_children'][_0x165463]['_focused'] = !![]) : _0x536dc0['_focused'] = !![];
                        break;
                    case KeyEvent['VK_RIGHT']:
                        _0x165463 < _0x243e03['_children']['length'] - 0x1 && (_0x243e03['_children'][_0x165463 + 0x1]['_enabled'] && (_0x243e03['_children'][_0x165463]['_focused'] = ![],
                        _0x165463 += 0x1,
                        _0x243e03['_children'][_0x165463]['_focused'] = !![]));
                        break;
                    case KeyEvent['VK_ENTER']:
                        var _0x26125a = _0x243e03['_children'][_0x165463];
                        _0x26125a['_paneid'] === _0x3c01e8 && (_0x243e03['_children'][_0x165463 + 0x1]['_enabled'] = !!_0x26125a['_index']);
                        break;
                    }
                else
                    _0x2cef97['keyCode'] === KeyEvent['VK_BACK'] && _0x10a948();
            }
        }
        ['bind'](this);
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x243e03['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x2b4a46) {
                _0x2b4a46 !== this['_visible'] && (TRANSITION && (_0x211568['_node']['style']['transition'] = '',
                _0x243e03['_node']['style']['transition'] = '',
                _0x243e03['_node']['className'] = '',
                this['_node']['offsetWidth'],
                _0x211568['_node']['style']['transition'] = _0x2b4a46 ? 'opacity\x200.3s' : 'opacity\x200.4s',
                _0x243e03['_node']['style']['transition'] = _0x2b4a46 ? 'opacity\x200.5s' : 'opacity\x200.4s',
                _0x243e03['_node']['className'] = _0x2b4a46 ? 'frontGuideMoveOn' : 'frontGuideMoveOff'),
                _0x211568['_node']['style']['opacity'] = _0x2b4a46 ? 0x1 : 0x0,
                _0x243e03['_node']['style']['opacity'] = _0x2b4a46 ? 0x1 : 0x0,
                _0x243e03['_left'] = _0x2b4a46 ? 0x1 : -0x1e,
                this['_keyListener'] = _0x2b4a46 ? _0x37fca7 : undefined);
            }
        });
        function _0x4dceef(_0x9e64cc, _0x5c7406) {
            var _0x20714c = [], _0x2d632a = 0x8d, _0x23cef0, _0x3a9f12, _0x2d75c6, _0x44f167, _0x5d8b13 = $StreamingService['getPlayer']();
            _0x5c7406 === undefined && _0x534ca7 && (clearTimeout(_0x534ca7),
            _0x534ca7 = null);
            _0x23cef0 = $SubtitleService['isEnabled']() && _0x9e64cc['subtitles'] === 'true' ? 0x1 : 0x0;
            if (_0x5d8b13)
                _0x44f167 = _0x5d8b13['getAudioTracks'](),
                _0x44f167 && _0x44f167['length'] > _0x23cef0 && _0x20714c['push']({
                    'id': _0x9f8159,
                    'title': 'Audio',
                    'tracks': _0x44f167,
                    'color': _0x9e64cc['color'],
                    'w': 0x1cb,
                    'enabled': !![],
                    'onSelection': function(_0x3cf412) {
                        _0x5d8b13['setAudioTrack'](_0x3cf412);
                    }
                });
            else {
                _0x44f167 = $VideoManager['getInstance']()['_tracks'];
                if (_0x44f167 && _0x44f167['length'] > _0x23cef0)
                    _0x20714c['push']({
                        'id': _0x9f8159,
                        'title': 'Audio',
                        'tracks': _0x4ac34b(_0x44f167),
                        'color': _0x9e64cc['color'],
                        'w': 0x1cb,
                        'enabled': !![],
                        'labels': _0x9e64cc['audioLabels'] && _0x9e64cc['audioLabels']['split'](','),
                        'isSelected': function(_0x4ee602, _0x314dbc) {
                            return _0x314dbc = _0x314dbc || $VideoManager['getInstance']()['_currentTrack'],
                            _0x314dbc && _0x314dbc['language'] === _0x4ee602['language'] && _0x4ee602['pid'] === _0x314dbc['pid'];
                        },
                        'onSelection': function(_0x4d7d31) {
                            $VideoManager['getInstance']()['trackSwitch'](_0x4d7d31);
                        }
                    });
                else {
                    if (!_0x44f167 || _0x44f167['length'] === 0x0) {
                        println('[AUDIO]\x20empty\x20track\x20list', 'wrn'),
                        _0x5c7406 = _0x5c7406 || 0x0;
                        if (_0x5c7406 < 0x2) {
                            _0x534ca7 = setTimeout(function(_0x34a8fe) {
                                _0x534ca7 = null,
                                _0x4dceef(_0x9e64cc, _0x34a8fe);
                            }, 0x1f4, _0x5c7406 + 0x1);
                            return;
                        }
                    }
                }
            }
            _0x23cef0 ? (_0x576afe['_text'] = _0x44f167 && _0x44f167['length'] > _0x23cef0 ? 'Audio\x20e\x20sottotitoli' : 'Sottotitoli',
            _0x20714c['push']({
                'id': _0x3c01e8,
                'title': 'Sottotitoli',
                'tracks': $SubtitleService['getSetting']('languages'),
                'color': _0x9e64cc['color'],
                'w': 0x16e,
                'enabled': !![],
                'isSelected': function(_0x43dcfa, _0x44a2ce, _0x17f124) {
                    return _0x17f124 === $SubtitleService['getSetting']('active');
                },
                'onSelection': function(_0x55293b, _0x467652) {
                    if (_0x467652 === 0x0)
                        $SubtitleService['stop']();
                    else {
                        if (_0x467652 === 0x1)
                            $SubtitleService['start'](0x1);
                    }
                    $SubtitleService['save']();
                }
            }),
            _0x20714c['push']({
                'title': 'Dimensione',
                'tracks': $SubtitleService['getSetting']('labels'),
                'fontSize': $SubtitleService['getSetting']('fontSizes'),
                'color': _0x9e64cc['color'],
                'w': 0xbe,
                'enabled': !!$SubtitleService['getSetting']('active'),
                'isSelected': function(_0x37aeaa, _0xedd7ef, _0x396b00) {
                    return _0x396b00 === $SubtitleService['getSetting']('fontSize');
                },
                'onSelection': function(_0x2da4a3, _0x211c46) {
                    $SubtitleService['setSetting']('fontSize', _0x211c46);
                }
            })) : _0x576afe['_text'] = 'Audio';
            for (_0x3a9f12 = 0x0; _0x3a9f12 < _0x20714c['length']; _0x3a9f12++) {
                _0x2d75c6 = new _0x3450b0(_0x20714c[_0x3a9f12]),
                _0x2d75c6['_left'] = _0x2d632a,
                _0x2d75c6['_enabled'] = _0x20714c[_0x3a9f12]['enabled'],
                _0x2d632a += _0x20714c[_0x3a9f12]['w'],
                _0x243e03['append'](_0x2d75c6);
            }
            _0x165463 = 0x0,
            _0x243e03['_children']['length'] ? (_0x536dc0['_focused'] = ![],
            _0x243e03['_children'][_0x165463]['_focused'] = !![]) : _0x536dc0['_focused'] = !![];
        }
        Object['defineProperty'](this, '_epg', {
            'set': function(_0x434a34) {
                var _0x3cd1ae = 'rgba(' + parseInt(_0x434a34['color']['substring'](0x1, 0x3), 0x10) + ',\x20' + parseInt(_0x434a34['color']['substring'](0x3, 0x5), 0x10) + ',\x20' + parseInt(_0x434a34['color']['substring'](0x5, 0x7), 0x10) + ',\x20' + '0.95)';
                _0x211568['_background'] = 'linear-gradient(to\x20bottom,\x20' + _0x3cd1ae + ',\x20' + _0x434a34['color'] + '\x2056%)',
                _0x536dc0['_focusedColor'] = _0x434a34['color'],
                _0x5392f0['_text'] = _0x434a34['name'],
                _0x576afe['_text'] = '',
                _0x4dceef(_0x434a34);
            }
        }),
        Object['defineProperty'](this, '_backScene', {
            'set': function(_0x429d24) {
                _0x4ad866 = _0x429d24;
            }
        }),
        $VideoManager['getInstance']()['addChannelChangeSucceededListener'](function(_0x301faf) {
            this['_visible'] && (_0x4e5e53(),
            this['_epg'] = EPG['getEpg'](_0x301faf));
        }
        ['bind'](this)),
        $VideoManager['getInstance']()['addSelectedComponentChangeListener'](function(_0x4aba0c, _0x16ab3e) {
            if (_0x4aba0c === _0x9f8159 || _0x4aba0c === _0x3c01e8)
                for (var _0x2c97dc = 0x0; _0x2c97dc < _0x243e03['_children']['length']; _0x2c97dc++) {
                    if (_0x243e03['_children'][_0x2c97dc]['_paneid'] === _0x4aba0c) {
                        _0x243e03['_children'][_0x2c97dc]['_option'] = _0x16ab3e;
                        return;
                    }
                }
        });
    }
    _0x503fc3['prototype'] = Object['create']($Widget['prototype']),
    _0x503fc3['prototype']['constructor'] = _0x503fc3;
    function _0x3450b0(_0x1afc7a) {
        $Widget['call'](this),
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x1afc7a['w'],
            'height': 0x300
        },
        this['_className'] = _0x1afc7a['title'] + 'Pane',
        this['_paneid'] = _0x1afc7a['id'];
        var _0x2cf4aa = new $Label();
        _0x2cf4aa['_color'] = '#fff',
        _0x2cf4aa['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x1afc7a['w'],
            'height': 0x34
        },
        _0x2cf4aa['_font'] = '36px\x20PublicSans-Bold';
        var _0x592261 = new $Widget()
          , _0x4a3221 = 0x0
          , _0x1f092c = !![];
        if (_0x1afc7a['labels'] && _0x1afc7a['labels']['length'] !== _0x1afc7a['tracks']['length'])
            _0x1afc7a['labels'] = null;
        for (var _0x341c85 = 0x0, _0xb2e02c, _0x2a1820 = 0x0, _0x2311aa; _0x341c85 < _0x1afc7a['tracks']['length']; _0x341c85++) {
            if (!_0x1afc7a['tracks'][_0x341c85])
                continue;
            if (_0x1afc7a['id'] === _0x9f8159)
                _0xb2e02c = _0x1afc7a['labels'] ? _0x1afc7a['labels'][_0x341c85] : $VideoManager['getInstance']()['toDisplayLanguage'](_0x1afc7a['tracks'][_0x341c85]['language']);
            else
                _0xb2e02c = _0x1afc7a['tracks'][_0x341c85];
            _0x2311aa = new _0x57e121(_0xb2e02c,_0x2a1820,(_0x1afc7a['fontSize'] && _0x1afc7a['fontSize'][_0x341c85] || 0x18) + 'px\x20PublicSans-Bold',_0x1afc7a['color']),
            _0x2311aa['_selected'] = _0x1afc7a['isSelected'] ? _0x1afc7a['isSelected'](_0x1afc7a['tracks'][_0x341c85], null, _0x341c85) : _0x1afc7a['tracks'][_0x341c85]['enabled'],
            _0x2311aa['_selected'] && (_0x4a3221 = _0x341c85),
            _0x592261['append'](_0x2311aa),
            _0x2a1820 += 0x5e;
        }
        _0x592261['_bounds'] = {
            'left': 0x0,
            'top': 0x70,
            'width': _0x1afc7a['w'],
            'height': _0x2a1820
        },
        _0x2cf4aa['_letterSpacing'] = -1.17,
        _0x2cf4aa['_rowH'] = 0x30,
        _0x2cf4aa['_text'] = _0x1afc7a['title'],
        this['append'](_0x2cf4aa),
        this['append'](_0x592261),
        Object['defineProperty'](this, '_option', {
            'set': function(_0x2ee2c0) {
                for (var _0xeca685 = 0x0; _0xeca685 < _0x1afc7a['tracks']['length']; _0xeca685++) {
                    if (_0x1afc7a['isSelected']) {
                        if (_0x1afc7a['isSelected'](_0x1afc7a['tracks'][_0xeca685], _0x2ee2c0, _0xeca685)) {
                            for (var _0x22eeb0 = 0x0; _0x22eeb0 < _0x592261['_children']['length']; _0x22eeb0++) {
                                _0x592261['_children'][_0x22eeb0]['_selected'] = _0x22eeb0 === _0xeca685;
                                if (this['_focused'])
                                    _0x592261['_children'][_0x22eeb0]['_focused'] = _0x22eeb0 === _0xeca685;
                                if (_0xeca685 === _0x22eeb0)
                                    _0x4a3221 = _0x22eeb0;
                            }
                            break;
                        }
                    } else {
                        var _0x3f32ba = _0x1afc7a['tracks'][_0xeca685]['id'] === _0x2ee2c0['id'];
                        _0x592261['_children'][_0xeca685]['_selected'] = _0x3f32ba,
                        _0x592261['_children'][_0xeca685]['_focused'] = _0x3f32ba;
                        if (_0x3f32ba)
                            _0x4a3221 = _0xeca685;
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_index', {
            'get': function() {
                return _0x4a3221;
            }
        }),
        Object['defineProperty'](this, '_enabled', {
            'get': function() {
                return _0x1f092c;
            },
            'set': function(_0x5dfcab) {
                if (_0x1f092c !== _0x5dfcab) {
                    _0x1f092c = _0x5dfcab,
                    _0x2cf4aa['_color'] = _0x5dfcab ? '#fff' : 'rgba(255,255,255,0.3)';
                    for (var _0x5fdb71 = 0x0; _0x5fdb71 < _0x592261['_children']['length']; _0x5fdb71++) {
                        _0x592261['_children'][_0x5fdb71]['_enabled'] = _0x5dfcab;
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'set': function(_0x5521f1) {
                if (_0x1f092c)
                    _0x592261['_children'][_0x4a3221]['_focused'] = _0x5521f1;
            }
        }),
        this['onHandleKey'] = function(_0x481dbd) {
            switch (_0x481dbd['keyCode']) {
            case KeyEvent['VK_UP']:
                _0x592261['_children'][_0x4a3221]['_focused'] = ![];
                if (_0x4a3221 < 0x1)
                    return !![];
                _0x4a3221 -= 0x1,
                _0x592261['_children'][_0x4a3221]['_focused'] = !![];
                break;
            case KeyEvent['VK_DOWN']:
                _0x4a3221 < _0x592261['_children']['length'] - 0x1 && (_0x592261['_children'][_0x4a3221]['_focused'] = ![],
                _0x4a3221 += 0x1,
                _0x592261['_children'][_0x4a3221]['_focused'] = !![]);
                break;
            case KeyEvent['VK_LEFT']:
            case KeyEvent['VK_RIGHT']:
                return !![];
            case KeyEvent['VK_ENTER']:
                _0x592261['_children'][_0x4a3221]['click'](function() {
                    for (var _0x37db84 = 0x0; _0x37db84 < _0x592261['_children']['length']; _0x37db84++) {
                        _0x592261['_children'][_0x37db84]['_selected'] = _0x37db84 === _0x4a3221;
                    }
                    _0x1afc7a['onSelection'](_0x1afc7a['tracks'][_0x4a3221], _0x4a3221);
                });
                return !![];
            }
        }
        ;
    }
    _0x3450b0['prototype'] = Object['create']($Widget['prototype']),
    _0x3450b0['prototype']['constructor'] = _0x3450b0;
    function _0x57e121(_0x5c922d, _0x541eb9, _0x4d7267, _0x188142) {
        $Widget['call'](this);
        var _0x594b40 = _0x5c922d['width'](_0x4d7267, -0.8) + 0x43, _0x11b3b3 = ![], _0x25b6fb = ![], _0x52a21f;
        this['_bounds'] = {
            'left': 0x0,
            'top': _0x541eb9,
            'width': _0x594b40,
            'height': 0x3e
        };
        var _0x3eceb4 = new $Widget();
        _0x3eceb4['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x594b40,
            'height': 0x3e
        },
        _0x3eceb4['_background'] = '#fff',
        _0x3eceb4['_cornerR'] = 0x2,
        _0x3eceb4['_node']['style']['opacity'] = 0x0,
        _0x3eceb4['_node']['addEventListener']('animationend', function() {
            _0x52a21f && (_0x52a21f(),
            _0x52a21f = undefined);
        }, ![]);
        var _0xae7d47 = new $Widget();
        _0xae7d47['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x594b40,
            'height': 0x3e
        },
        _0xae7d47['_cornerR'] = 0x2,
        _0xae7d47['_node']['style']['boxSizing'] = 'border-box',
        _0xae7d47['_node']['style']['opacity'] = 0x0,
        _0xae7d47['_node']['style']['border'] = 'solid\x203px\x20#fff';
        var _0x58c64f = new $Widget('<div>' + _0x5c922d + '</div>');
        _0x58c64f['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x594b40,
            'height': 0x3e
        },
        _0x58c64f['_node']['style']['font'] = _0x4d7267,
        _0x58c64f['_node']['style']['lineHeight'] = '62px',
        _0x58c64f['_node']['style']['textAlign'] = 'center',
        _0x58c64f['_color'] = '#fff',
        this['append'](_0xae7d47),
        this['append'](_0x3eceb4),
        this['append'](_0x58c64f),
        Object['defineProperty'](this, '_selected', {
            'get': function() {
                return _0x11b3b3;
            },
            'set': function(_0x25c41a) {
                _0x11b3b3 !== _0x25c41a && (_0x11b3b3 = _0x25c41a,
                TRANSITION && (_0xae7d47['_node']['className'] = '',
                _0xae7d47['_node']['offsetWidth'],
                _0xae7d47['_node']['className'] = _0x25c41a ? 'buttonInOndaFocusOn' : 'buttonInOndaFocusOff'),
                _0xae7d47['_node']['style']['opacity'] = _0x25c41a ? 0x1 : 0x0);
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'get': function() {
                return _0x25b6fb;
            },
            'set': function(_0x2eaa61) {
                _0x25b6fb !== _0x2eaa61 && (_0x25b6fb = _0x2eaa61,
                TRANSITION && (_0x3eceb4['_node']['className'] = '',
                _0x3eceb4['_node']['offsetWidth'],
                _0x3eceb4['_node']['className'] = _0x2eaa61 ? 'buttonInOndaFocusOn' : 'buttonInOndaFocusOff'),
                _0x3eceb4['_node']['style']['opacity'] = _0x2eaa61 ? 0x1 : 0x0,
                _0x58c64f['_color'] = _0x2eaa61 ? _0x188142 : '#fff');
            }
        }),
        Object['defineProperty'](this, '_enabled', {
            'set': function(_0x5ac2a8) {
                _0x58c64f['_color'] = _0x5ac2a8 ? '#fff' : 'rgba(255,255,255,0.3)';
                if (_0x11b3b3)
                    _0xae7d47['_node']['style']['border'] = 'solid\x203px\x20' + (_0x5ac2a8 ? '#fff' : 'rgba(255,255,255,0.3)');
            }
        }),
        this['click'] = function(_0xaf6e6c) {
            if (TRANSITION)
                _0x52a21f = _0xaf6e6c,
                _0x3eceb4['_node']['className'] = '',
                _0x3eceb4['_node']['offsetWidth'],
                _0x3eceb4['_node']['className'] = 'click';
            else {
                if (_0xaf6e6c)
                    _0xaf6e6c();
            }
        }
        ;
    }
    _0x57e121['prototype'] = Object['create']($Widget['prototype']),
    _0x57e121['prototype']['constructor'] = _0x57e121;
    function _0x4ac34b(_0x14d03c) {
        var _0x57d559 = [];
        for (var _0x2b4cd8 = 0x0; _0x2b4cd8 < _0x14d03c['length']; _0x2b4cd8++) {
            _0x57d559['push'](_0x14d03c[_0x2b4cd8]);
        }
        return _0x57d559['sort'](function(_0x4bec22, _0x3fffa5) {
            if (_0x4bec22['pid'] > _0x3fffa5['pid'])
                return 0x1;
            if (_0x4bec22['pid'] < _0x3fffa5['pid'])
                return -0x1;
            return 0x0;
        });
    }
    return {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x503fc3()),
            this['instance'];
        },
        'switch2': function(_0x243936) {
            var _0x3b15f4 = $ModalAudioSubs['getInstance']();
            _0x3b15f4['_epg'] = EPG['getEpg'](),
            _0x3b15f4['_backScene'] = _0x243936;
            if (!$Gui['getInstance']()['getChildrenByClassName']('ModalAudioSubs'))
                $Gui['getInstance']()['append'](_0x3b15f4);
            _0x243936['visibleTrigger'](![], function() {
                _0x3b15f4['_visible'] = !![];
            });
        }
    };
}()
  , $ModalPrivacy = function() {
    var _0x250c7f = {
        'date': '2022-03-28',
        'title': 'Informativa\x20sul\x20Trattamento\x20dei\x20dati\x20personali\x20ai\x20sensi\x20dell\x27art.\x2013\x20del\x20Regolamento\x20(UE)\x202016/679\x20(RGPD)',
        'body': '<div\x20class=\x27privacy-content\x27><br/><br/><strong>INTRODUZIONE</strong><br/>Il\x20presente\x20documento\x20è\x20parte\x20dell’informativa\x20resa\x20ai\x20sensi\x20dell&#39;art.\x2013\x20del\x20Regolamento\x20(UE)\x202016/679\x20del\x20Parlamento\x20Europeo\x20e\x20del\x20Consiglio,\x20del\x2027\x20aprile\x202016,\x20relativo\x20alla\x20protezione\x20delle\x20persone\x20fisiche\x20con\x20riguardo\x20al\x20trattamento\x20dei\x20dati\x20personali,\x20nonché\x20alla\x20libera\x20circolazione\x20di\x20tali\x20dati\x20(“Regolamento”),\x20del\x20Decreto\x20Legislativo\x20n.\x20196\x20del\x202003\x20come\x20novellato\x20dal\x20Decreto\x20Legislativo\x20n.\x20101\x20del\x2010\x20agosto\x202018\x20(“Codice\x20Privacy”)\x20e\x20delle\x20ulteriori\x20norme\x20applicabili\x20in\x20tema\x20di\x20protezione\x20dei\x20dati\x20personali.<br/><br/>Ai\x20fini\x20della\x20presente\x20informativa,\x20il\x20Titolare\x20del\x20Trattamento\x20è:\x20La\x20Rai\x20-\x20Radiotelevisione\x20Italiana\x20Spa,\x20in\x20qualità\x20di\x20titolare\x20del\x20trattamento\x20(con\x20sede\x20in\x20Viale\x20Mazzini\x2014\x20–\x2000195,\x20Roma,\x20PEC:\x20<span\x20class=\x22yellow\x22>raispa@postacertificata.rai.it</span>,\x20Centralino:\x2006\x2038781).<br/><br/>Questa\x20informativa\x20si\x20riferisce\x20allo\x20scambio\x20di\x20dati\x20che\x20avviene\x20tra\x20i\x20televisori\x20di\x20ultima\x20generazione\x20collegati\x20ad\x20Internet\x20con\x20servizi\x20HbbTV\x20attivati\x20(c.d.\x20Smart\x20tv)\x20e\x20Rai\x20quando\x20l’apparecchio\x20tv\x20viene\x20sintonizzato\x20su\x20di\x20un\x20canale\x20dell’emittente\x20Rai\x20(esempio:\x20Rai\x201,\x20Rai\x202,\x20Rai\x203,\x20Rai\x20Movie,\x20etc).<br/><br/><br/><br/><strong>TIPOLOGIA\x20E\x20FINALITÀ\x20DEI\x20DATI\x20TRATTATI</strong><br/>I\x20sistemi\x20informatici\x20e\x20le\x20procedure\x20software\x20preposte\x20al\x20funzionamento\x20dei\x20sistemi\x20per\x20l’interazione\x20del\x20tuo\x20smart\x20tv\x20acquisiscono,\x20nel\x20corso\x20del\x20loro\x20normale\x20esercizio,\x20alcuni\x20dati\x20personali\x20di\x20tipo\x20tecnico\x20la\x20cui\x20trasmissione\x20è\x20implicita\x20nell&#39;uso\x20dei\x20protocolli\x20di\x20comunicazione\x20di\x20Internet.\x20Tali\x20dati\x20sono\x20necessari\x20per\x20poter\x20erogare\x20e\x20controllare\x20il\x20corretto\x20funzionamento\x20dei\x20servizi\x20offerti.<br/><br/>Quando\x20uno\x20Smart\x20tv\x20è\x20sintonizzato\x20su\x20un\x20canale\x20dell’emittente\x20Rai\x20sono\x20altresì\x20raccolti\x20da\x20Rai\x20i\x20dati\x20di\x20fruizione\x20(canale\x20visualizzato,\x20data\x20e\x20ora\x20di\x20fruizione)\x20e\x20dati\x20personali\x20di\x20tipo\x20tecnico\x20(indirizzo\x20IP,\x20identificativo\x20dinamico\x20di\x20Rai\x20Tv+\x20sul\x20dispositivo).\x20Tali\x20dati\x20sono\x20esclusivamente\x20utilizzati\x20per\x20raccogliere\x20informazioni,\x20in\x20forma\x20aggregata\x20e\x20anonima,\x20al\x20fine\x20di\x20effettuare\x20delle\x20analisi\x20statistiche\x20sul\x20numero\x20dei\x20telespettatori\x20(nel\x20proseguo\x20Utente/i)\x20che\x20hanno\x20visualizzato\x20un\x20determinato\x20programma\x20televisivo.\x20Pertanto,\x20la\x20finalità\x20del\x20trattamento\x20è\x20la\x20rilevazione\x20degli\x20ascolti.<br/><br/>In\x20particolare,\x20il\x20processo\x20prevede\x20che\x20l’IP\x20venga\x20anonimizzato\x20troncando\x20le\x20ultime\x20tre\x20cifre\x20e\x20che\x20l’identificativo\x20di\x20Rai\x20Tv+\x20sul\x20dispositivo\x20sia\x20generato\x20dinamicamente\x20tramite\x20una\x20funzione\x20di\x20codifica\x20realizzata\x20da\x20Rai\x20che\x20non\x20consente\x20di\x20risalire\x20al\x20dispositivo\x20stesso.\x20I\x20dati,\x20così\x20anonimizzati\x20e\x20non\x20più\x20riconducibili\x20all’Utente,\x20sono\x20memorizzati\x20per\x20misurare\x20il\x20numero\x20di\x20volte\x20in\x20cui\x20l’apparecchio\x20TV\x20è\x20stato\x20sintonizzato\x20su\x20un\x20canale\x20Rai\x20e\x20quindi\x20su\x20uno\x20specifico\x20programma.\x20Il\x20programma\x20visto\x20dall’Utente\x20è\x20identificato,\x20sullo\x20schema\x20cronologico\x20delle\x20trasmissioni\x20televisive\x20(c.d.\x20Palinsesto),\x20per\x20mezzo\x20dei\x20dati\x20di\x20fruizione\x20“Canale”\x20e\x20“Data\x20e\x20ora”.\x20L’analisi\x20dei\x20dati\x20di\x20fruizione\x20permette\x20di\x20dedurre\x20comportamenti\x20di\x20visione\x20di\x20tutti\x20gli\x20utenti\x20di\x20un\x20singolo\x20canale\x20(e\x20non\x20di\x20un\x20singolo\x20utente).<br/><br/>I\x20dati\x20raccolti\x20potranno\x20essere\x20trattati\x20anche\x20per\x20adempiere\x20agli\x20obblighi\x20previsti\x20da\x20leggi,\x20regolamenti\x20o\x20normative\x20comunitarie\x20nonché\x20da\x20disposizioni\x20delle\x20Autorità\x20di\x20vigilanza\x20di\x20settore.<br/><br/><strong>DESTINATARI\x20DEI\x20DATI\x20TRATTATI</strong><br/><br/>I\x20dati\x20personali\x20tecnici\x20forniti\x20come\x20sopra\x20indicato,\x20potranno\x20essere\x20comunicati\x20ad\x20eventuali\x20soggetti\x20che\x20forniscano\x20a\x20RAI\x20prestazioni\x20o\x20servizi\x20strumentali\x20alla\x20finalità\x20sopra\x20indicata\x20quali,\x20a\x20mero\x20titolo\x20esemplificativo,\x20società\x20controllate,\x20partecipate\x20e/o\x20collegate\x20a\x20RAI;\x20soggetti,\x20enti\x20e/o\x20società\x20che\x20gestiscono\x20e/o\x20partecipano\x20alla\x20gestione\x20e/o\x20alla\x20manutenzione\x20degli\x20strumenti\x20elettronici\x20e/o\x20telematici\x20utilizzati,\x20fornitori,\x20appaltatori,\x20subappaltatori,\x20designati\x20dalla\x20Rai,\x20ai\x20sensi\x20dell’art.\x2028\x20del\x20RGPD,\x20Responsabili\x20del\x20trattamento.<br/><br/>I\x20dati\x20raccolti\x20sono,\x20inoltre,\x20trattati\x20da\x20personale\x20Rai\x20autorizzato\x20al\x20trattamento\x20che\x20opera\x20sulla\x20base\x20di\x20specifiche\x20istruzioni\x20fornite\x20in\x20merito\x20a\x20finalità\x20e\x20modalità\x20del\x20trattamento.\x20Ad\x20eccezione\x20di\x20queste\x20ipotesi,\x20i\x20dati\x20personali\x20non\x20saranno\x20comunicati\x20a\x20terzi,\x20se\x20non\x20nei\x20casi\x20specificamente\x20previsti\x20dalla\x20normativa\x20nazionale\x20e\x20dell’Unione\x20Europea.<br/><br/><br/><strong>BASE\x20GIURIDICA</strong><br/><br/>Rai\x20utilizza\x20i\x20dati\x20in\x20forma\x20aggregata\x20e\x20anonima\x20pertanto\x20non\x20è\x20necessario\x20un\x20consenso\x20preventivo\x20per\x20attivare\x20tale\x20raccolta.<br/><br/><br/><strong>LUOGO\x20DI\x20CONSERVAZIONE</strong><br/><br/>I\x20Dati\x20Personali\x20dell’Utente\x20saranno\x20trattati\x20da\x20Rai\x20principalmente\x20in\x20Italia\x20o,\x20comunque,\x20all’interno\x20dello\x20Spazio\x20Economico\x20Europeo.<br/><br/><br/><strong>PERIODO\x20DI\x20CONSERVAZIONE\x20DEI\x20DATI\x20PERSONALI</strong><br/><br/>I\x20dati\x20saranno\x20conservati\x20limitatamente\x20al\x20tempo\x20necessario\x20per\x20perseguire\x20le\x20finalità\x20di\x20trattamento\x20elencate\x20nella\x20sezione\x20“Tipologia\x20e\x20finalità\x20dei\x20dati\x20trattati”\x20del\x20presente\x20documento,\x20fermo\x20restando\x20il\x20periodo\x20di\x20tempo\x20eventualmente\x20previsto\x20dalle\x20relative\x20normative\x20di\x20settore.\x20I\x20dati\x20personali\x20forniti,\x20inoltre,\x20saranno\x20conservati\x20per\x20il\x20tempo\x20necessario\x20per\x20la\x20gestione\x20di\x20eventuali\x20reclami\x20o\x20contenziosi,\x20legali,\x20fiscali,\x20gestionali\x20e/o\x20di\x20difesa\x20dei\x20diritti\x20di\x20RAI\x20e/o\x20del\x20Gruppo\x20Societario.<br/><br/><strong>DIRITTI\x20DEGLI\x20INTERESSATI</strong><br/>Lei\x20ha\x20il\x20diritto\x20di\x20chiedere\x20al\x20Titolare\x20del\x20trattamento\x20l’accesso\x20ai\x20dati\x20personali\x20e\x20la\x20rettifica\x20o\x20la\x20cancellazione\x20degli\x20stessi\x20o\x20la\x20limitazione\x20del\x20trattamento\x20che\x20La\x20riguarda\x20o\x20di\x20OPPORSI\x20al\x20trattamento\x20medesimo\x20(artt.\x2015\x20e\x20ss.\x20del\x20RGPD).\x20La\x20relativa\x20istanza\x20alla\x20Rai\x20è\x20presentata\x20con\x20le\x20seguenti\x20alternative\x20modalità:<ul>\x09<li>inviando\x20una\x20e-mail\x20all&#39;indirizzo:\x20<span\x20class=\x22yellow\x22>privacy@rai.it</span>;</li>\x09<li>inviando\x20una\x20richiesta\x20scritta\x20all&#39;indirizzo\x20di\x20posta,\x20Rai,\x20Viale\x20Mazzini\x2014,\x2000195\x20Roma,\x20all&#39;att.ne\x20della\x20Struttura\x20Coordinamento\x20Privacy.</li></ul><br/>Ricordiamo\x20infine\x20che\x20i\x20dati\x20trattati\x20in\x20questa\x20sede\x20sono\x20di\x20natura\x20puramente\x20tecnica,\x20non\x20prevedono\x20quindi\x20una\x20raccolta\x20del\x20consenso\x20né\x20una\x20revoca\x20(opt\x20out).<br/><br/>Ricorrendone\x20i\x20presupposti,\x20Lei\x20potrà\x20inoltre\x20proporre\x20reclamo\x20al\x20Garante\x20per\x20la\x20protezione\x20dei\x20dati\x20personali\x20(artt.\x2077\x20ss.\x20del\x20Regolamento).<br/><br/>Le\x20segnaliamo,\x20infine,\x20che\x20potrà\x20consultare\x20queste\x20informazioni\x20ogni\x20volta\x20che\x20lo\x20vorrà,\x20accedendo\x20a\x20Rai\x20Tv+\x20/\x20Supporto\x20e\x20Impostazioni\x20/\x20Informativa\x20Privacy,\x20oppure\x20accedendo\x20al\x20link\x20<span\x20class=\x22yellow\x22><strong>www.rai.it/privacy-tv</strong>\x20</span>o\x20inquadrando\x20questo\x20QR\x20con\x20il\x20suo\x20smartphone.</div>'
    };
    function _0x44b0fa() {
        $Widget['call'](this),
        this['_className'] = 'ModalPrivacy',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x5aaa9e = ![], _0x1a365b, _0x1a7136 = function() {
            if (_0x5bd369['_useBright']) {
                var _0x593845 = $BannerLancioApp['getInstance']();
                if (!$Gui['getInstance']()['getChildrenByClassName']('BannerLancioApp'))
                    $Gui['getInstance']()['append'](_0x593845);
                this['visibleTrigger'](![], function() {
                    _0x593845['_visible'] = !![];
                });
            } else
                this['visibleTrigger'](![], function() {
                    $Scene0['getInstance']()['visibleTrigger'](!![]);
                }
                ['bind'](this));
        }
        ['bind'](this), _0x36910d = function() {
            $StorageManager['getInstance']()['write'](PRIVACY_FILE, JSON['stringify']({
                'tracciamento': !![],
                'profilazione': !![]
            })),
            _0x1a7136();
        }
        ['bind'](this), _0x58a7b5 = function(_0x36889b) {
            var _0x432d7f;
            if (_0x5bd369['_focused']) {
                _0x432d7f = _0x5bd369['onHandleKey'](_0x36889b);
                if (_0x432d7f) {
                    if (_0x36889b['keyCode'] === KeyEvent['VK_LEFT'] || _0x36889b['keyCode'] === KeyEvent['VK_BACK'])
                        _0x5bd369['_focused'] = ![],
                        _0x27b2ac['_focused'] = !![];
                    else
                        _0x1476b0['_visible'] && (_0x36889b['keyCode'] === KeyEvent['VK_RIGHT'] || _0x36889b['keyCode'] === KeyEvent['VK_ENTER']) && (_0x5bd369['_focused'] = ![],
                        _0x1476b0['_focused'] = !![]);
                }
            } else {
                if (_0x27b2ac['_focused']) {
                    if (_0x36889b['keyCode'] === KeyEvent['VK_RIGHT'])
                        _0x27b2ac['_focused'] = ![],
                        _0x5bd369['_focused'] = !![];
                    else
                        (_0x36889b['keyCode'] === KeyEvent['VK_ENTER'] || _0x36889b['keyCode'] === KeyEvent['VK_BACK']) && _0x27b2ac['click'](function() {
                            _0x1a7136();
                        });
                } else {
                    if (_0x1476b0['_focused']) {
                        if (_0x36889b['keyCode'] === KeyEvent['VK_LEFT'])
                            _0x1476b0['_focused'] = ![],
                            _0x5bd369['_focused'] = !![];
                        else
                            _0x36889b['keyCode'] === KeyEvent['VK_ENTER'] && _0x1476b0['click'](function() {
                                _0x36910d();
                            });
                    }
                }
            }
        }
        ['bind'](this), _0x27b2ac, _0x48b198, _0x4e7018, _0x356fc5, _0x501149, _0x5bd369, _0x1476b0, _0x55dcf3;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x5aaa9e;
            },
            'set': function(_0x2b697b) {
                _0x5aaa9e !== _0x2b697b && (_0x5aaa9e = _0x2b697b,
                TRANSITION && (_0x48b198['_node']['style']['transition'] = '',
                _0x4e7018['_node']['style']['transition'] = '',
                _0x4e7018['_node']['className'] = '',
                this['_node']['offsetWidth'],
                _0x48b198['_node']['style']['transition'] = _0x2b697b ? 'opacity\x200.3s' : 'opacity\x200.4s',
                _0x4e7018['_node']['style']['transition'] = _0x2b697b ? 'opacity\x200.5s' : 'opacity\x200.4s',
                _0x4e7018['_node']['className'] = _0x2b697b ? 'frontGuideMoveOn' : 'frontGuideMoveOff'),
                _0x48b198['_node']['style']['opacity'] = _0x2b697b ? 0x1 : 0x0,
                _0x4e7018['_node']['style']['opacity'] = _0x2b697b ? 0x1 : 0x0,
                _0x4e7018['_left'] = _0x2b697b ? 0x1 : -0x1e,
                this['_keyListener'] = _0x2b697b ? _0x58a7b5 : undefined,
                _0x27b2ac['_focused'] = ![],
                _0x5bd369['_focused'] = _0x2b697b);
            }
        }),
        Object['defineProperty'](this, '_mode', {
            'set': function(_0x3abff1) {
                _0x3abff1 === 'support' ? (_0x27b2ac['_focusedColor'] = '#000099',
                _0x27b2ac['_focusedBackground'] = '#ffffff',
                _0x356fc5['_visible'] = !![],
                _0x1476b0['_visible'] = ![],
                _0x5bd369['_useBright'] = ![],
                _0x501149['_color'] = _0x55dcf3['_color'] = '#ffffff',
                _0x48b198['_background'] = 'linear-gradient(to\x20bottom,\x20rgba(0,\x200,\x2092,\x200.95),\x20#00005c\x2056%)') : (_0x27b2ac['_unfocusedColor'] = '#999999',
                _0x27b2ac['_focusedColor'] = '#ffffff',
                _0x27b2ac['_focusedBackground'] = '#000099',
                _0x356fc5['_visible'] = ![],
                _0x1476b0['_visible'] = !![],
                _0x5bd369['_useBright'] = !![],
                _0x501149['_color'] = '#555555',
                _0x55dcf3['_color'] = '#2e3b42',
                _0x48b198['_background'] = 'linear-gradient(to\x20bottom,\x20rgba(245,\x20245,\x20245,\x200.95),\x20#f5f5f5\x2056%)');
            }
        }),
        this['visibleTrigger'] = function(_0x1eb118, _0x339f58) {
            if (TRANSITION)
                _0x1a365b = _0x339f58,
                this['_visible'] = _0x1eb118;
            else
                _0x339f58 && (this['_visible'] = _0x1eb118,
                _0x339f58());
        }
        ,
        _0x48b198 = new $Widget(),
        _0x48b198['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        _0x48b198['_node']['style']['opacity'] = 0x0,
        _0x4e7018 = new $Widget(),
        _0x4e7018['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        _0x4e7018['_node']['style']['opacity'] = 0x0,
        _0x4e7018['_node']['addEventListener']('animationend', function() {
            _0x1a365b && (_0x1a365b(),
            _0x1a365b = undefined);
        }, ![]),
        _0x27b2ac = new $ButtonBack(),
        _0x356fc5 = new $Label(),
        _0x356fc5['_color'] = '#ffffff',
        _0x356fc5['_bounds'] = {
            'left': 0x8e,
            'top': 0x28,
            'width': 0x96,
            'height': 0x28
        },
        _0x356fc5['_font'] = '24px\x20PublicSans-Bold',
        _0x356fc5['_rowH'] = 0x28,
        _0x356fc5['_letterSpacing'] = -0.8,
        _0x356fc5['_text'] = 'Supporto',
        _0x501149 = new $Label(),
        _0x501149['_bounds'] = {
            'left': 0x8e,
            'top': 0x5e,
            'width': 0x1f4,
            'height': 0x34
        },
        _0x501149['_font'] = '52px\x20PublicSans-Regular',
        _0x501149['_rowH'] = 0x34,
        _0x501149['_letterSpacing'] = -1.2,
        _0x501149['_text'] = 'Informativa\x20Privacy',
        _0x5bd369 = new _0x5bfcb1(),
        _0x5bd369['_bounds'] = {
            'top': 0xee,
            'left': 0x8e,
            'width': 0x3dc + 0x26 + 0x18,
            'height': 0x2d3
        },
        _0x5bd369['setText'](_0x250c7f['title'], _0x250c7f['body']),
        _0x1476b0 = new $Button0(),
        _0x1476b0['_bounds'] = {
            'left': 0x542,
            'top': 0xe8,
            'width': 0x140,
            'height': 0x44
        },
        _0x1476b0['_unfocusedBackground'] = '#999999',
        _0x1476b0['_focusedBackground'] = '#000099',
        _0x1476b0['_focusedColor'] = '#ffffff',
        _0x1476b0['_text'] = 'Ok,\x20ho\x20capito',
        _0x55dcf3 = _0x29d764(),
        _0x48b198['append'](_0x27b2ac),
        _0x48b198['append'](_0x356fc5),
        _0x48b198['append'](_0x501149),
        _0x4e7018['append'](_0x5bd369),
        _0x4e7018['append'](_0x1476b0),
        _0x4e7018['append'](_0x55dcf3),
        this['append'](_0x48b198),
        this['append'](_0x4e7018);
    }
    _0x44b0fa['prototype'] = Object['create']($Widget['prototype']),
    _0x44b0fa['prototype']['constructor'] = _0x44b0fa;
    function _0x29d764() {
        var _0x390d72 = new $Widget(), _0x44d7ae, _0x47fbb7;
        return _0x390d72['_bounds'] = {
            'top': 0x21d,
            'left': 0x543,
            'width': 0x173,
            'height': 0xc0 + 0x16 + 0xc8
        },
        _0x44d7ae = new $Widget($DataLoader['getInstance']()['getSvgCode']('qrPolicy')),
        _0x44d7ae['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': 0xc8,
            'height': 0xc8
        },
        _0x47fbb7 = new $Widget('<div>Per\x20visualizzare\x20la\x20pagina\x20scansiona\x20questo\x20codice\x20QR\x20con\x20il\x20tuo\x20smartphone\x20o\x20il\x20tuo\x20tablet.<br/>' + 'Oppure\x20accedi\x20da\x20qualsiasi\x20dispositivo\x20attraverso\x20l\x27indirizzo<br/>' + '<span\x20style=\x22font-family:\x20PublicSans-Bold\x22>https://www.rai.it/privacy-tv</span></div>'),
        _0x47fbb7['_bounds'] = {
            'top': 0xc0 + 0x16,
            'left': 0x0,
            'width': 0x173,
            'height': 0xc0
        },
        _0x47fbb7['_node']['style']['font'] = '22px\x20PublicSans-Regular',
        _0x47fbb7['_node']['style']['lineHeight'] = '30px',
        _0x47fbb7['_node']['style']['letterSpacing'] = '-0.8px',
        _0x390d72['append'](_0x44d7ae),
        _0x390d72['append'](_0x47fbb7),
        _0x390d72;
    }
    function _0x5bfcb1() {
        $Widget['call'](this),
        this['_node']['style']['overflow'] = 'hidden';
        var _0xb1f48c, _0x3817e6, _0x2aba01, _0x4b68cb, _0x539430, _0x18ef4a = 0x0, _0x2f9b19 = ![];
        _0xb1f48c = new $Widget('<div><div\x20style=\x22position:\x20relative;\x20top:\x200;\x20width:\x20100%;\x20transition:\x20top\x200.3s\x20linear\x22></div></div>'),
        _0xb1f48c['_top'] = 0x6,
        _0xb1f48c['_width'] = 0x3dc,
        _0xb1f48c['_height'] = 0x2a7 + 0x34,
        _0xb1f48c['_node']['style']['font'] = '28px\x20PublicSans-Regular,Tiresias',
        _0xb1f48c['_node']['style']['lineHeight'] = '36px',
        _0xb1f48c['_node']['style']['letterSpacing'] = -0x1 * 0x500 / 0x780 + 'px',
        _0x3817e6 = new $Widget(),
        _0x3817e6['_left'] = 0x3dc + 0x2e,
        _0x3817e6['_width'] = 0x8,
        _0x3817e6['_height'] = 0x2d3,
        _0x3817e6['_background'] = 'rgb(227,227,227,0.2)',
        _0x3817e6['_node']['style']['borderRadius'] = 0x8 + 'px',
        _0x2aba01 = new $Widget(),
        _0x2aba01['_left'] = 0x3dc + 0x26,
        _0x2aba01['_width'] = 0x18,
        _0x2aba01['_height'] = 0xc8,
        _0x2aba01['_background'] = '#66669b',
        _0x2aba01['_node']['style']['borderRadius'] = 0x4 + 'px',
        _0x2aba01['_node']['style']['transition'] = 'top\x200.3s\x20linear,\x20background\x200.3s',
        _0x4b68cb = new $Widget(),
        _0x4b68cb['_top'] = 0x6 + 0x34 + 0x1b5,
        _0x4b68cb['_width'] = 0x3de,
        _0x4b68cb['_height'] = 0xf1,
        this['append'](_0xb1f48c),
        this['append'](_0x3817e6),
        this['append'](_0x2aba01),
        this['append'](_0x4b68cb),
        Object['defineProperty'](this, '_focused', {
            'get': function() {
                return _0x2f9b19;
            },
            'set': function(_0x48307e) {
                _0x2f9b19 !== _0x48307e && (_0x2f9b19 = _0x48307e,
                _0x539430 ? _0x2aba01['_background'] = _0x48307e ? '#000099' : '#999999' : _0x2aba01['_background'] = _0x48307e ? '#FFFFFF' : '#66669b');
            }
        }),
        Object['defineProperty'](this, '_useBright', {
            'get': function() {
                return _0x539430;
            },
            'set': function(_0x488889) {
                if (_0x539430 !== _0x488889) {
                    _0x539430 = _0x488889,
                    this['_color'] = _0x488889 ? '#2e3b42' : '#ffffff',
                    _0x4b68cb['_node']['style']['backgroundImage'] = _0x539430 ? 'linear-gradient(to\x20bottom,\x20rgba(245,\x20245,\x20245,\x200)\x2050%,\x20#f5f5f5)' : 'linear-gradient(to\x20bottom,\x20rgba(0,\x200,\x2092,\x200)\x2050%,\x20#00005c)';
                    var _0x391f89 = _0xb1f48c['_node']['querySelectorAll']('div[class=\x22privacy-content\x22]\x20span');
                    for (var _0x23506c = 0x0; _0x23506c < _0x391f89['length']; _0x23506c++) {
                        _0x391f89[_0x23506c]['setAttribute']('class', _0x488889 ? 'blue' : 'yellow');
                    }
                }
            }
        }),
        this['setText'] = function(_0x5845bb, _0x473aaa) {
            _0xb1f48c['_node']['getElementsByTagName']('div')[0x0]['innerHTML'] = '<div\x20style=\x22height:\x20auto;\x20font:\x20' + 0x20 + 'px\x20PublicSans-Bold,Tiresias,serif;\x20line-height:\x20' + 0x34 + 'px;\x22>' + _0x5845bb + '</div><span>' + _0x473aaa + '</span>';
        }
        ,
        this['onHandleKey'] = function(_0x4082b2) {
            switch (_0x4082b2['keyCode']) {
            case KeyEvent['VK_UP']:
                _0x4bebcf(this['_node']['offsetHeight']);
                break;
            case KeyEvent['VK_DOWN']:
                _0x28294e(this['_node']['offsetHeight']);
                break;
            case KeyEvent['VK_BACK']:
                if (_0x18ef4a)
                    this['reset']();
                else
                    return !![];
                break;
            case KeyEvent['VK_ENTER']:
            case KeyEvent['VK_LEFT']:
            case KeyEvent['VK_RIGHT']:
                return !![];
            }
        }
        ,
        this['reset'] = function() {
            var _0x5b4ca1 = _0xb1f48c['_node']['getElementsByTagName']('div')[0x0];
            _0x5b4ca1['style']['top'] = '0px',
            _0x18ef4a = 0x0,
            _0x2aba01['_top'] = 0x0,
            _0x4b68cb['_visible'] = !![];
        }
        ;
        function _0x28294e(_0x473637) {
            var _0x5c447a, _0x4607a6, _0x5dddcd;
            _0x5c447a = _0xb1f48c['_node']['getElementsByTagName']('div')[0x0],
            _0x4607a6 = _0x473637,
            _0x5dddcd = _0x5c447a['offsetHeight'],
            _0x5dddcd > _0x4607a6 && (_0x18ef4a -= 0x24,
            _0x18ef4a + _0x5dddcd < _0x4607a6 && (_0x18ef4a = _0x4607a6 - _0x5dddcd),
            _0x5c447a['style']['top'] = _0x18ef4a + 'px'),
            _0x1ea01b(_0x5dddcd, _0x4607a6);
        }
        function _0x4bebcf(_0x7d68cf) {
            var _0x53d685, _0xb1d6ab, _0x1d2176;
            _0x53d685 = _0xb1f48c['_node']['getElementsByTagName']('div')[0x0],
            _0xb1d6ab = _0x7d68cf,
            _0x1d2176 = _0x53d685['offsetHeight'],
            _0x1d2176 > _0xb1d6ab && (_0x18ef4a += 0x24,
            _0x18ef4a > 0x0 && (_0x18ef4a = 0x0),
            _0x53d685['style']['top'] = _0x18ef4a + 'px'),
            _0x1ea01b(_0x1d2176, _0xb1d6ab);
        }
        function _0x1ea01b(_0x159eb7, _0x571729) {
            var _0x1f8784 = _0x159eb7 > _0x571729, _0x1d8d19, _0x4f377a = _0x3817e6['_height'] - _0x2aba01['_height'];
            _0x1f8784 && (_0x1d8d19 = _0x18ef4a * -0x1 / (_0x159eb7 - _0x571729),
            _0x2aba01['_top'] = _0x4f377a * _0x1d8d19,
            _0x4b68cb['_visible'] = _0x1d8d19 < 0x1),
            _0x3817e6['_visible'] = _0x1f8784,
            _0x2aba01['_visible'] = _0x1f8784;
        }
    }
    return _0x5bfcb1['prototype'] = Object['create']($Widget['prototype']),
    _0x5bfcb1['prototype']['constructor'] = _0x5bfcb1,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x44b0fa()),
            this['instance'];
        },
        'switch2': function(_0x77bff7, _0x2c79b1) {
            var _0x2524e5 = $ModalPrivacy['getInstance']();
            _0x2524e5['_mode'] = _0x2c79b1,
            $Gui['getInstance']()['append'](_0x2524e5),
            _0x77bff7['visibleTrigger'](![], function() {
                _0x2c79b1 !== 'support' && $Gui['getInstance']()['remove'](_0x77bff7),
                _0x2524e5['visibleTrigger'](!![], function() {
                    $WebTrekk['track']($WebTrekk['events']['GENERIC'], {
                        'cg': [{
                            'key': 'cg1',
                            'val': $WebTrekk['CG1']
                        }, {
                            'key': 'cg5',
                            'val': 'Informativa\x20Privacy'
                        }],
                        'cp': [{
                            'key': 'cp11',
                            'val': 'hbbtv'
                        }, {
                            'key': 'cp12',
                            'val': 'rai\x20tv+'
                        }],
                        'url': $WebTrekk['sections']['SETTINGS'],
                        'immediate': !![]
                    });
                });
            });
        }
    };
}()
  , $RadioPoster = function() {
    function _0x35e3b5() {
        $Widget['call'](this),
        this['_className'] = 'RadioPoster',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x2d5c8b = new $Lottie();
        _0x2d5c8b['_bounds'] = this['_bounds'],
        _0x2d5c8b['_node']['style']['opacity'] = 0x0,
        _0x2d5c8b['_domLoadedCbk'] = function() {
            _0x2d5c8b['_node']['style']['opacity'] = EPG['getEpg']()['type'] === 'radio' ? 0x1 : 0x0;
        }
        ;
        if (TRANSITION)
            _0x2d5c8b['_node']['style']['transition'] = 'opacity\x200.3s';
        var _0x2cde04 = undefined;
        _0x2d5c8b['_node']['addEventListener']('transitionend', function(_0x5f4a45) {
            _0x2cde04 && (_0x2cde04(),
            _0x2cde04 = undefined);
        }
        ['bind'](this)),
        this['append'](_0x2d5c8b);
        var _0x2fe196 = new $Widget('<img\x20src=\x27\x27>');
        _0x2fe196['_bounds'] = {
            'top': 0xf2,
            'left': 0x2c7,
            'width': 0x1f4,
            'height': 0x1f4
        },
        _0x2fe196['_originalBounds'] = _0x2fe196['_bounds'],
        _0x2fe196['_node']['src'] = $Img['TRANSPARENT'],
        _0x2fe196['_node']['addEventListener']('error', function(_0x20f49e) {
            _0x2fe196['_node']['src'] = $Img['TRANSPARENT'];
        }),
        _0x2fe196['_node']['addEventListener']('load', function(_0x56a06d) {
            if (_0x2fe196['_node']['src'] !== $Img['TRANSPARENT']) {
                var _0xfa7677 = {
                    'top': -0x1,
                    'left': -0x1,
                    'width': _0x2fe196['_node']['naturalWidth'],
                    'height': _0x2fe196['_node']['naturalHeight']
                }
                  , _0x3eab39 = _0xfa7677['width'] / _0xfa7677['height']
                  , _0x4da66d = _0x2fe196['_originalBounds'];
                _0xfa7677['width'] = _0x4da66d['width'],
                _0xfa7677['height'] = _0xfa7677['width'] / _0x3eab39,
                _0xfa7677['top'] = _0x4da66d['top'] + (_0x4da66d['height'] - _0xfa7677['height']) / 0x2,
                _0xfa7677['left'] = _0x4da66d['left'] + (_0x4da66d['width'] - _0xfa7677['width']) / 0x2,
                _0x2fe196['_bounds'] = _0xfa7677;
            }
        }),
        _0x2fe196['_cornerR'] = [0x4, 0x4, 0x4, 0x4],
        this['append'](_0x2fe196);
        var _0x1966e1 = new $MultilineLabel();
        _0x1966e1['_color'] = '#fff',
        _0x1966e1['_bounds'] = {
            'left': 0x30,
            'top': 0x306,
            'width': this['_width'] - 0x60,
            'height': 0x78
        },
        _0x1966e1['_font'] = '50px\x20PublicSans-Bold',
        _0x1966e1['_letterSpacing'] = -1.3,
        _0x1966e1['_textAlign'] = 'center',
        _0x1966e1['_rowH'] = 0x3c,
        _0x1966e1['_text'] = '',
        this['append'](_0x1966e1);
        var _0x3ccb75 = new $Label();
        _0x3ccb75['_color'] = '#999999',
        _0x3ccb75['_bounds'] = {
            'left': 0x0,
            'top': 0x362,
            'width': 0x397,
            'height': 0x24
        },
        _0x3ccb75['_font'] = '28px\x20PublicSans-SemiBold,Tiresias',
        _0x3ccb75['_textAlign'] = 'center',
        _0x3ccb75['_letterSpacing'] = -1.3,
        _0x3ccb75['_rowH'] = 0x24,
        _0x3ccb75['_text'] = '',
        this['append'](_0x3ccb75);
        var _0x1ac8dc = new $Label();
        _0x1ac8dc['_color'] = '#999999',
        _0x1ac8dc['_bounds'] = {
            'left': 0x3b7,
            'top': 0x362,
            'width': 0x3c9,
            'height': 0x24
        },
        _0x1ac8dc['_font'] = '28px\x20PublicSans-SemiBold,Tiresias',
        _0x1ac8dc['_textAlign'] = 'center',
        _0x1ac8dc['_letterSpacing'] = -1.3,
        _0x1ac8dc['_rowH'] = 0x24,
        _0x1ac8dc['_text'] = '',
        this['append'](_0x1ac8dc);
        var _0x6a19ca = 1.2
          , _0x37145d = new $Svg($DataLoader['getInstance']()['getSvgCode']('RaiSquareLogo'));
        _0x37145d['_visible'] = ![],
        _0x37145d['_bounds'] = {
            'top': 0x37,
            'left': 0x62,
            'width': 0x3c * _0x6a19ca,
            'height': 0x3c * _0x6a19ca
        },
        this['append'](_0x37145d);
        var _0x5502e6 = new $Svg('<svg\x20width=\x220\x22\x20height=\x2260\x22\x20viewBox=\x220\x200\x200\x200\x22><path></path></svg>');
        _0x5502e6['_visible'] = ![],
        _0x5502e6['_bounds'] = {
            'top': 0x37,
            'left': 0x62,
            'width': 0x0,
            'height': 0x3c * _0x6a19ca
        },
        this['append'](_0x5502e6);
        var _0x4ec1e5 = {
            'Rai\x20Radio\x201': 'radio1',
            'Rai\x20Radio\x202': 'radio2',
            'Rai\x20Radio\x203': 'radio3',
            'Rai\x20Isoradio': 'isoradio',
            'Rai\x20Radio\x201\x20Sport': 'radio1Sport',
            'Rai\x20Radio\x202\x20Indie': 'radio2Indie',
            'Rai\x20Radio\x20Indie': 'radio2Indie',
            'Rai\x20Radio\x203\x20Classica': 'radio3Classica',
            'Rai\x20GrParlamento': 'radioGrParlamento',
            'Rai\x20Radio\x20Kids': 'radioKids',
            'Rai\x20Radio\x20Live': 'radioLive',
            'Rai\x20Radio\x20Techete\x27': 'radioTechete',
            'Rai\x20Radio\x20Tutta\x20Italiana': 'radioTuttaItaliana',
            'Rai\x20Radio\x20Trst\x20A': 'isoradio'
        };
        function _0x3d5c79(_0x5d3632) {
            var _0x360f29 = parseInt(_0x5d3632 / 0x3e8)
              , _0x38cbee = parseInt(_0x360f29 / 0x3c)
              , _0x340010 = parseInt(_0x38cbee / 0x3c);
            _0x38cbee -= 0x3c * _0x340010;
            var _0x1bbced = _0x340010 > 0x0 ? _0x340010 + '\x20h\x20' : ''
              , _0x5521c6 = _0x38cbee > 0x0 ? _0x38cbee + '\x20min' : '';
            return _0x1bbced + _0x5521c6;
        }
        var _0x56ae34, _0x342a39, _0x678d37 = new DOMParser(), _0x4623cd = undefined;
        this['update'] = function(_0x40021) {
            var _0x1098c7;
            !_0x40021 ? (println('[RADIO\x20POSTER]\x20invalid\x20channel,\x20skip!', 'wrn'),
            _0x1098c7 = {
                'type': ''
            }) : (_0x1098c7 = EPG['getEpg'](_0x40021),
            _0x1098c7['hybrid'] && document['querySelector']('div[widget-class=\x22loadingScreen\x22]') ? (println('[RADIO\x20POSTER]\x20hybrid\x20channel,\x20skip!', 'wrn'),
            _0x1098c7 = {
                'type': ''
            }) : println('[RADIO\x20POSTER]' + _0x1098c7['type'] + '\x20|\x20' + _0x1098c7['name'] + '\x20|\x20' + _0x1098c7['dvbTriplet'], 'inf'));
            this['_background'] = _0x1098c7['type'] === 'radio' ? _0x1098c7['color'] : 'transparent';
            _0x2d5c8b['_node']['style']['opacity'] === '1' ? (_0x2cde04 = function() {
                if (_0x1098c7['type'] === 'radio')
                    _0x2d5c8b['setAnimationPath']('resources/jsonAnimation/radioBck/' + _0x4ec1e5[_0x1098c7['name']] + '.json');
                else
                    _0x2d5c8b['_animation']['stop']();
            }
            ,
            _0x2d5c8b['_node']['style']['opacity'] = 0x0) : _0x1098c7['type'] === 'radio' && _0x2d5c8b['setAnimationPath']('resources/jsonAnimation/radioBck/' + _0x4ec1e5[_0x1098c7['name']] + '.json');
            _0x2fe196['_node']['src'] = _0x1098c7['type'] === 'radio' ? _0x1098c7['chEpg']['_now']['_imageUrl'] : $Img['TRANSPARENT'],
            _0x1966e1['_text'] = _0x1098c7['type'] === 'radio' && _0x1098c7['epg'] === 'true' ? _0x1098c7['chEpg']['_now']['_name'] : '',
            _0x3ccb75['_text'] = _0x1098c7['type'] === 'radio' && _0x1098c7['epg'] === 'true' ? _0x1098c7['chEpg']['_now']['_hhmmStartString'] : '',
            _0x1ac8dc['_text'] = _0x1098c7['type'] === 'radio' && _0x1098c7['epg'] === 'true' ? _0x3d5c79(_0x1098c7['chEpg']['_now']['_duration']) : '';
            var _0x52a378 = _0x2fe196['_width'] / 0x8;
            _0x3ccb75['_width'] = _0x3ccb75['_text']['width'](_0x3ccb75['_font'], _0x3ccb75['_letterSpacing']) + 0x14,
            _0x3ccb75['_left'] = 0x780 / 0x2 - _0x52a378 - _0x3ccb75['_width'] / 0x2,
            _0x1ac8dc['_width'] = _0x1ac8dc['_text']['width'](_0x1ac8dc['_font'], _0x1ac8dc['_letterSpacing']) + 0x14,
            _0x1ac8dc['_left'] = 0x780 / 0x2 + _0x52a378 - _0x1ac8dc['_width'] / 0x2;
            _0x1966e1['_rowsStats']['totalRowsCount'] > 0x1 ? (_0x3ccb75['_top'] = 0x362 + 0x3c,
            _0x1ac8dc['_top'] = 0x362 + 0x3c) : (_0x3ccb75['_top'] = 0x362,
            _0x1ac8dc['_top'] = 0x362);
            _0x37145d['_visible'] = _0x1098c7['type'] === 'radio';
            if (_0x1098c7['type'] === 'radio') {
                _0x56ae34 = $DataLoader['getInstance']()['getSvgCode'](_0x1098c7['name']),
                _0x342a39 = _0x678d37['parseFromString'](_0x56ae34, 'image/svg+xml')['getElementsByTagName']('svg')[0x0];
                if (_0x342a39) {
                    var _0x17f7c7 = parseFloat(_0x342a39['getAttribute']('width'));
                    _0x17f7c7 *= _0x6a19ca,
                    _0x5502e6['_width'] = _0x17f7c7,
                    _0x5502e6['_node']['setAttribute']('width', _0x17f7c7),
                    _0x5502e6['_node']['setAttribute']('viewBox', _0x342a39['getAttribute']('viewBox')),
                    _0x5502e6['_node']['removeChild'](_0x5502e6['_node']['getElementsByTagName']('path')[0x0]),
                    _0x5502e6['_node']['appendChild'](_0x342a39['getElementsByTagName']('path')[0x0]),
                    _0x5502e6['_visible'] = !![];
                }
            } else
                _0x5502e6['_visible'] = ![];
            _0x4623cd && (clearTimeout(_0x4623cd),
            _0x4623cd = null);
            if (_0x1098c7['type'] === 'radio') {
                var _0x59e7fe = _0x1098c7['chEpg']['_now']['_startTime'] + _0x1098c7['chEpg']['_now']['_duration']
                  , _0x3092a9 = _0x59e7fe - Date['now']();
                _0x4623cd = setTimeout(function() {
                    this['update'](_0x40021);
                }
                ['bind'](this), _0x3092a9);
            }
        }
        ,
        this['_channelChangeSucceededListener'] = $VideoManager['getInstance']()['addChannelChangeSucceededListener'](this['update']['bind'](this));
    }
    return _0x35e3b5['prototype'] = Object['create']($Widget['prototype']),
    _0x35e3b5['prototype']['constructor'] = _0x35e3b5,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x35e3b5()),
            this['instance'];
        }
    };
}()
  , $Wrapper = function() {
    function _0x5981c5() {
        $Widget['call'](this),
        this['_className'] = 'Wrapper',
        Object['defineProperty'](this, '_focusRestore', {
            'value': undefined,
            'writable': !![]
        });
        var _0x47a88f = ![];
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x47a88f;
            },
            'set': function(_0x3d32fc) {
                if (_0x47a88f !== _0x3d32fc) {
                    _0x47a88f = _0x3d32fc;
                    if (_0x3d32fc) {
                        if (this['_focusRestore'])
                            this['_focusRestore']['_focused'] = !![],
                            this['_focusRestore'] = undefined;
                        else {
                            if (this['_children']['length'] > 0x0)
                                this['_children'][0x0]['_focused'] = !![];
                        }
                    } else {
                        this['_focusRestore'] = this['_focusedItem'];
                        if (this['_focusRestore'])
                            this['_focusRestore']['_focused'] = ![];
                    }
                }
            }
        }),
        Object['defineProperty'](this, '_focusedItem', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x34a7ad = this['_focusedIndex'];
                return _0x34a7ad !== undefined ? this['_children'][_0x34a7ad] : undefined;
            }
        }),
        Object['defineProperty'](this, '_focusedIndex', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                for (var _0x353783 = 0x0; _0x353783 < this['_children']['length']; _0x353783++)
                    if (this['_children'][_0x353783]['_focused'])
                        return _0x353783;
                return undefined;
            },
            'set': function(_0x3a826e) {
                for (var _0x189d8c = 0x0; _0x189d8c < this['_children']['length']; _0x189d8c++) {
                    this['_children'][_0x189d8c]['_focused'] = _0x189d8c === _0x3a826e,
                    _0x189d8c === _0x3a826e && (this['_focusRestore'] = this['_children'][_0x189d8c]);
                }
            }
        }),
        this['append'] = function(_0x36bbee, _0x2d98dd) {
            var _0xee5071 = this['_children']['length']
              , _0x3fa286 = _0xee5071 > 0x0 ? this['_children'][_0xee5071 - 0x1] : undefined;
            _0x36bbee['_height'] > this['_height'] && (this['_height'] = _0x36bbee['_height'],
            this['_children']['forEach'](function(_0x3d7b9d) {
                _0x3d7b9d['_top'] = (this['_height'] - _0x3d7b9d['_height']) / 0x2;
            }
            ['bind'](this)));
            _0x36bbee['_left'] = _0x3fa286 ? _0x3fa286['_left'] + _0x3fa286['_width'] : 0x0,
            _0x36bbee['_top'] = (this['_height'] - _0x36bbee['_height']) / 0x2,
            this['_width'] = _0x36bbee['_left'] + _0x36bbee['_width'],
            $Widget['prototype']['append']['call'](this, _0x36bbee);
            if (!_0x2d98dd) {
                if (this['_focused'] && !this['_focusedItem'])
                    _0x36bbee['_focused'] = !![];
            }
        }
        ,
        this['remove'] = function(_0x1b5658, _0x26de1b) {
            $Widget['prototype']['remove']['call'](this, _0x1b5658, _0x26de1b);
            for (var _0x22cc67 = 0x0, _0x13897b = 0x0; _0x22cc67 < this['_children']['length']; _0x22cc67++) {
                _0x13897b = Math['max'](_0x13897b, this['_children'][_0x22cc67]['_height']);
            }
            var _0xcb4930 = 0x0;
            this['_height'] = _0x13897b,
            this['_children']['forEach'](function(_0x42c945) {
                _0x42c945['_top'] = (_0x13897b - _0x42c945['_height']) / 0x2,
                _0x42c945['_left'] = _0xcb4930,
                _0xcb4930 += _0x42c945['_width'];
            }
            ['bind'](this)),
            this['_width'] = _0xcb4930;
            if (_0x1b5658 === this['_focusRestore'])
                this['_focusRestore'] = undefined;
        }
        ,
        this['moveFocus'] = function(_0x2a3fef) {
            var _0x58dde4 = undefined;
            if (this['_children']['length'] > 0x1) {
                var _0x512aba = this['_focusedIndex'];
                switch (_0x2a3fef) {
                case $Wrapper['LEFT']:
                    _0x58dde4 = _0x512aba - 0x1 >= 0x0 ? this['_children'][_0x512aba - 0x1] : undefined;
                    break;
                case $Wrapper['RIGHT']:
                    _0x58dde4 = _0x512aba + 0x1 <= this['_children']['length'] - 0x1 ? this['_children'][_0x512aba + 0x1] : undefined;
                    break;
                }
                _0x58dde4 && (this['_children'][_0x512aba]['_focused'] = ![],
                _0x58dde4['_focused'] = !![]);
            }
            return _0x58dde4;
        }
        ,
        this['reset'] = function() {
            this['_focusRestore'] = undefined;
        }
        ;
    }
    return _0x5981c5['prototype'] = Object['create']($Widget['prototype']),
    _0x5981c5['prototype']['constructor'] = _0x5981c5,
    _0x5981c5['LEFT'] = 0x0,
    _0x5981c5['RIGHT'] = 0x1,
    _0x5981c5;
}()
  , $Menu0 = function() {
    function _0x148f33() {
        $Widget['call'](this),
        this['_className'] = 'Menu0',
        this['_node']['style']['overflow'] = 'hidden';
        var _0x47f322 = new $Wrapper();
        _0x47f322['_left'] = 0x0;
        TRANSITION && (_0x47f322['_node']['style']['transition'] = 'left\x20ease-in-out\x200.3s');
        $Widget['prototype']['append']['call'](this, _0x47f322),
        Object['defineProperty'](this, '_slider', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x47f322;
            }
        });
        var _0x163ae4 = undefined;
        Object['defineProperty'](this, '_leftMarker', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x163ae4;
            },
            'set': function(_0x2006d6) {
                _0x163ae4 = _0x2006d6,
                _0x163ae4['_left'] = 0x0,
                _0x163ae4['_className'] = 'LeftMarker',
                $Widget['prototype']['append']['call'](this, _0x163ae4),
                _0x163ae4['_visible'] = _0x47f322['_left'] < 0x0;
            }
        });
        var _0x4a3189 = undefined;
        Object['defineProperty'](this, '_rightMarker', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4a3189;
            },
            'set': function(_0x1b695a) {
                _0x4a3189 = _0x1b695a,
                _0x4a3189['_left'] = this['_width'] - _0x4a3189['_width'],
                _0x4a3189['_className'] = 'RightMarker',
                $Widget['prototype']['append']['call'](this, _0x4a3189),
                _0x4a3189['_visible'] = _0x47f322['_left'] + _0x47f322['_width'] > this['_width'];
            }
        }),
        Object['defineProperty'](this, '_focused', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x47f322['_focused'];
            },
            'set': function(_0x43d6f1) {
                _0x47f322['_focused'] = _0x43d6f1;
            }
        }),
        Object['defineProperty'](this, '_focusedItem', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x47f322['_focusedItem'];
            }
        }),
        Object['defineProperty'](this, '_focusedIndex', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x47f322['_focusedIndex'];
            },
            'set': function(_0xe17c8d) {
                if (_0xe17c8d >= 0x0 && _0xe17c8d < _0x47f322['_children']['length']) {
                    var _0x30ddcc = _0x47f322['_focusedIndex'] || 0x0;
                    if (_0xe17c8d !== _0x30ddcc) {
                        _0x47f322['_node']['style']['transition'] = '';
                        for (var _0x2d7d8b = _0xe17c8d > _0x30ddcc ? 0x1 : -0x1, _0x3b2d6e = _0x2d7d8b === 0x1 ? $Wrapper['RIGHT'] : $Wrapper['LEFT']; _0x30ddcc !== _0xe17c8d; _0x30ddcc += _0x2d7d8b) {
                            this['moveFocus'](_0x3b2d6e);
                        }
                        TRANSITION && (_0x47f322['_node']['offsetWidth'],
                        _0x47f322['_node']['style']['transition'] = 'left\x20ease-in-out\x200.3s');
                    }
                }
            }
        }),
        this['append'] = function(_0xab1616, _0x4b4d83) {
            _0x47f322['append'](_0xab1616, _0x4b4d83),
            this['_height'] = _0x47f322['_height'];
            if (_0x4a3189)
                _0x4a3189['_visible'] = _0x47f322['_left'] + _0x47f322['_width'] > this['_width'];
        }
        ,
        this['remove'] = function(_0x4443ee, _0x4e59d2) {
            _0x47f322['remove'](_0x4443ee, _0x4e59d2),
            this['_height'] = _0x47f322['_height'];
        }
        ,
        this['removeAll'] = function(_0x5dc9f4) {
            while (_0x47f322['_children']['length'] > 0x0)
                _0x47f322['remove'](_0x47f322['_children'][0x0], _0x5dc9f4);
            _0x47f322['_left'] = 0x0;
            if (_0x163ae4)
                _0x163ae4['_visible'] = ![];
            if (_0x4a3189)
                _0x4a3189['_visible'] = _0x47f322['_left'] + _0x47f322['_width'] > this['_width'];
        }
        ,
        this['moveFocus'] = function(_0x46e07f) {
            var _0x667f1c = _0x47f322['moveFocus'](_0x46e07f);
            if (_0x667f1c) {
                var _0x15f7a2 = _0x47f322['_left'] + _0x667f1c['_left']
                  , _0x1fa99b = _0x15f7a2 + _0x667f1c['_width'];
                if (_0x15f7a2 < 0x0)
                    _0x47f322['_left'] += -_0x15f7a2;
                else
                    _0x1fa99b > this['_width'] && (_0x47f322['_left'] -= _0x1fa99b - this['_width']);
                if (_0x163ae4)
                    _0x163ae4['_visible'] = _0x47f322['_left'] < 0x0;
                if (_0x4a3189)
                    _0x4a3189['_visible'] = _0x47f322['_left'] + _0x47f322['_width'] > this['_width'];
            }
            return _0x667f1c;
        }
        ;
    }
    return _0x148f33['prototype'] = Object['create']($Widget['prototype']),
    _0x148f33['prototype']['constructor'] = _0x148f33,
    _0x148f33['LEFT'] = 0x0,
    _0x148f33['RIGHT'] = 0x1,
    _0x148f33;
}()
  , $MenuGuida = function() {
    function _0xc60fe7(_0x1c9559) {
        $Menu0['call'](this),
        this['_className'] = _0x1c9559 === $MenuGuida['TV'] ? 'MenuGuidaTV' : 'MenuGuidaRADIO';
        var _0xc9d650 = _0x1c9559 === $MenuGuida['TV'] ? 0x3 : 0x4;
        function _0x359ad3(_0x54fdf0) {
            for (var _0x58286d = 0x0, _0x37c03c; _0x58286d < EPG['radio']['length']; _0x58286d++) {
                _0x37c03c = EPG['radio'][_0x58286d];
                if (_0x37c03c && _0x37c03c['epgName'] === _0x54fdf0)
                    return _0x37c03c;
            }
        }
        this['update'] = function() {
            this['removeAll']();
            var _0x4348c8 = EPG['getEpg']()
              , _0x3e2c2d = _0x4348c8['epgFormat'] === 'portrait';
            _0x4348c8['type'] === 'tv' && !_0x3e2c2d && (_0x4348c8 = _0x359ad3(_0x4348c8['epgName']) || _0x4348c8);
            if (_0x3e2c2d)
                this['append'](new $ThmbGuidaRaiPlay());
            for (var _0x1fc88a = 0x0, _0x540064; _0x1fc88a < _0x4348c8['chEpg']['_infoArray']['length']; _0x1fc88a++) {
                _0x540064 = _0x4348c8['type'] === 'tv' ? new $ThmbGuidaTV(!![]) : new $ThmbGuidaRadio(!![]),
                _0x540064['_epg'] = _0x4348c8['chEpg']['_infoArray'][_0x1fc88a];
                if (_0x1fc88a === _0x4348c8['chEpg']['_infoArray']['length'] - 0x1 && _0x4348c8['type'] === 'radio')
                    _0x540064['_rightStuff'] += 0x8c;
                this['append'](_0x540064);
            }
            if (_0x3e2c2d)
                this['append'](new $ThmbGuidaRaiPlay({
                    'leftStuff': 0xf,
                    'rightStuff': 0x8c,
                    'topStuff': 0xc,
                    'bottomStuff': 0xc
                }));
        }
        ,
        this['focus2OnAir'] = function() {
            var _0x340b48 = this['_slider']['_children']
              , _0x2e2282 = _0x340b48['length']
              , _0x5da4e8 = 0x0;
            for (var _0xd8540c = 0x0; _0xd8540c < _0x2e2282; _0xd8540c++) {
                var _0x7f2338 = _0x340b48[_0xd8540c]['_timeSentry'];
                if (_0x7f2338 === 0x1 && !_0x5da4e8)
                    _0x5da4e8 = _0xd8540c;
                _0x340b48[_0xd8540c]['_focused'] = _0x7f2338 === 0x0;
            }
            !this['_focusedItem'] && (_0x340b48[_0x5da4e8]['_focused'] = !![]);
            if (this['_focusedIndex'] >= _0x2e2282 - _0xc9d650)
                this['_slider']['_left'] = this['_width'] - this['_slider']['_width'] - 0x88;
            else
                this['_slider']['_left'] -= this['_focusedItem']['_left'] + this['_slider']['_left'] - 0x88;
            for (var _0xd8540c = 0x0, _0x5e0eb8; _0xd8540c < _0x2e2282; _0xd8540c++) {
                _0x5e0eb8 = this['_slider']['_left'] + _0x340b48[_0xd8540c]['_left'];
                if (_0x5e0eb8 > -_0x340b48[_0xd8540c]['_width'] && _0x5e0eb8 < this['_width'])
                    _0x340b48[_0xd8540c]['_loadLock'] = ![];
            }
        }
        ,
        this['moveFocus'] = function(_0x329b43) {
            var _0x383576 = undefined
              , _0x3e2e1d = undefined
              , _0x1c87ca = this['_focusedIndex'];
            switch (_0x329b43) {
            case $Wrapper['LEFT']:
                _0x1c87ca - 0x1 >= 0x0 && (_0x3e2e1d = _0x1c87ca - 0x1,
                _0x383576 = this['_slider']['_children'][_0x3e2e1d]);
                break;
            case $Wrapper['RIGHT']:
                _0x1c87ca + 0x1 < this['_slider']['_children']['length'] && (_0x3e2e1d = _0x1c87ca + 0x1,
                _0x383576 = this['_slider']['_children'][_0x3e2e1d]);
                break;
            }
            if (_0x383576) {
                this['_slider']['_children'][_0x1c87ca]['_focused'] = ![];
                var _0x2f1c82 = this['_slider']['_children'][0x1]['_width'];
                switch (_0x329b43) {
                case $Wrapper['LEFT']:
                    _0x3e2e1d < this['_slider']['_children']['length'] - (_0xc9d650 + 0x1) ? this['_slider']['_left'] += _0x2f1c82 : _0x3e2e1d === this['_slider']['_children']['length'] - (_0xc9d650 + 0x1) && (this['_slider']['_left'] -= _0x383576['_left'] + this['_slider']['_left'] - 0x88);
                    _0x383576['_loadLock'] = ![];
                    if (_0x3e2e1d > 0x0)
                        this['_slider']['_children'][_0x3e2e1d - 0x1]['_loadLock'] = ![];
                    break;
                case $Wrapper['RIGHT']:
                    _0x3e2e1d < this['_slider']['_children']['length'] - _0xc9d650 ? this['_slider']['_left'] -= _0x2f1c82 : _0x3e2e1d === this['_slider']['_children']['length'] - _0xc9d650 && (_0x2f1c82 = this['_slider']['_left'] + this['_slider']['_width'] - (this['_left'] + this['_width']),
                    this['_slider']['_left'] -= _0x2f1c82);
                    var _0x30d6cd = _0x3e2e1d + _0xc9d650;
                    _0x30d6cd < this['_slider']['_children']['length'] && (this['_slider']['_children'][_0x30d6cd]['_loadLock'] = ![]);
                    break;
                }
                this['_slider']['_children'][_0x3e2e1d]['_focused'] = !![];
            }
        }
        ;
    }
    return _0xc60fe7['prototype'] = Object['create']($Menu0['prototype']),
    _0xc60fe7['prototype']['constructor'] = _0xc60fe7,
    _0xc60fe7['RADIO'] = 0x0,
    _0xc60fe7['TV'] = 0x1,
    _0xc60fe7;
}()
  , $SceneTA = function() {
    function _0x26d62f() {
        $Widget['call'](this),
        this['_className'] = 'SceneTA',
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        };
        var _0x4b14c5 = 0x11c
          , _0x164dfa = 0xa0
          , _0x19cfcb = 0x0
          , _0x2179aa = {
            'left': _0x4b14c5 - _0x19cfcb,
            'scale': (0x500 - _0x4b14c5 + 0x2 * _0x19cfcb) / 0x500
        }
          , _0x1ece90 = {};
        Object['defineProperty'](_0x1ece90, '_left', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x5334c9 = document['getElementById']('__tvp_video_wrapper');
                return parseFloat(_0x5334c9['style']['left']);
            },
            'set': function(_0x366f33) {
                $VideoManager['getInstance']()['_left'] = _0x366f33;
                var _0x106789 = document['getElementById']('__tvp_video_wrapper');
                _0x106789['style']['left'] = _0x366f33 + 'px';
            }
        }),
        Object['defineProperty'](_0x1ece90, '_scale', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x332579 = document['getElementById']('__tvp_video_wrapper');
                return parseFloat(_0x332579['style']['width']) / 0x500;
            },
            'set': function(_0x281d98) {
                $VideoManager['getInstance']()['_scale'] = _0x281d98;
                var _0x2677c7 = document['getElementById']('__tvp_video_wrapper')
                  , _0x22d305 = _0x2677c7['firstElementChild'];
                _0x2677c7['style']['width'] = 0x500 * _0x281d98 + 'px',
                _0x2677c7['style']['height'] = 0x2d0 * _0x281d98 + 'px',
                _0x22d305 && (_0x22d305['width'] = 0x500 * _0x281d98,
                _0x22d305['height'] = 0x2d0 * _0x281d98);
            }
        });
        var _0x1a58a7 = new $Widget();
        _0x1a58a7['_node']['style']['backgroundImage'] = 'url(\x22resources/TA/L.png?d=' + Date['now']() + '\x22)',
        _0x1a58a7['_node']['style']['backgroundRepeat'] = 'no-repeat',
        _0x1a58a7['_node']['style']['backgroundSize'] = '1920px\x201080px',
        _0x1a58a7['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': _0x4b14c5 * 0x780 / 0x500,
            'height': 0x438
        },
        this['append'](_0x1a58a7);
        var _0x4dbb3e = new $Widget();
        _0x4dbb3e['_node']['style']['backgroundImage'] = 'url(\x22resources/TA/L.png?d=' + Date['now']() + '\x22)',
        _0x4dbb3e['_node']['style']['backgroundRepeat'] = 'no-repeat',
        _0x4dbb3e['_node']['style']['backgroundSize'] = '1920px\x201080px',
        _0x4dbb3e['_node']['style']['backgroundPosition'] = '0px\x20-' + (0x438 - _0x164dfa * 0x780 / 0x500) + 'px',
        _0x4dbb3e['_bounds'] = {
            'left': 0x0,
            'top': 0x438 - _0x164dfa * 0x780 / 0x500,
            'width': 0x780,
            'height': _0x164dfa * 0x780 / 0x500
        },
        this['append'](_0x4dbb3e);
        var _0x8e7a50 = new $Img()
          , _0x5d3cea = function() {
            $BannerLancioApp['getInstance']()['quickHide'](),
            $BannerLancioRaiPlay['getInstance']()['quickHide'](),
            this['_node']['style']['display'] = 'block',
            _0x1ece90['_left'] = _0x2179aa['left'],
            _0x1ece90['_scale'] = _0x2179aa['scale'],
            this['_keyListener'] = _0x57bcc2;
            var _0x5307c7 = _0x1a8883['slice'](0x0);
            _0x5307c7['forEach'](function(_0x3e51d0, _0x50f4a6, _0x52b7dc) {
                _0x52b7dc[_0x50f4a6]();
            }
            ['bind'](this));
        }
        ['bind'](this)
          , _0x1a8883 = [];
        this['addPreloadListener'] = function(_0x3e1523) {
            return _0x1a8883['push'](_0x3e1523),
            _0x3e1523;
        }
        ,
        this['removePreloadListener'] = function(_0x41709f) {
            var _0x406ee9 = _0x1a8883['indexOf'](_0x41709f);
            return _0x406ee9 >= 0x0 ? (_0x1a8883['splice'](_0x406ee9, 0x1),
            !![]) : ![];
        }
        ;
        var _0x57bcc2 = function(_0x49b8a8) {
            switch (_0x49b8a8['keyCode']) {
            case KeyEvent['VK_ENTER']:
                var _0x206a25 = 'dvb://current.ait/3c0.67'
                  , _0x5d0996 = document['getElementById']('appmgr')['getOwnerApplication'](document)['createApplication'](_0x206a25, ![]);
                !_0x5d0996 && (println('unable\x20to\x20launch\x20app\x20using\x20AIT,\x20using\x20url...', 'err'),
                _0x206a25 = 'http://cdn.smartclip.net/assets/atv/ms/20191120_Disney_StarWars_Microsite/index.html',
                _0x5d0996 = document['getElementById']('appmgr')['getOwnerApplication'](document)['createApplication'](_0x206a25, ![]),
                !_0x5d0996 && println('cannot\x20launch\x20mini-site', 'err'));
                break;
            case KeyEvent['VK_RED']:
                this['_visible'] = ![];
                break;
            }
        }
        ['bind'](this);
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['display'] && this['_node']['style']['display'] !== '' ? this['_node']['style']['display'] === 'block' : this['_node']['offsetParent'] !== undefined;
            },
            'set': function(_0x506afa) {
                _0x506afa ? (_0x8e7a50['removeStateChengeListener'](_0x5d3cea),
                _0x8e7a50['addStateChengeListener'](_0x5d3cea),
                _0x8e7a50['_src'] = _0x1a58a7['_node']['style']['backgroundImage']) : (this['_keyListener'] = undefined,
                _0x1ece90['_left'] = 0x0,
                _0x1ece90['_scale'] = 0x1,
                this['_node']['style']['display'] = 'none',
                _0x14df5e && (_0x14df5e['stop'](),
                _0x14df5e = null));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['_channelChangeSucceededListener'] = $VideoManager['getInstance']()['addChannelChangeSucceededListener'](function() {
            this['_visible'] = ![];
        }
        ['bind'](this));
        var _0x14df5e;
        this['setData'] = function(_0x2b86e1, _0x3f1b29, _0x414d0c) {
            _0x14df5e = _0x414d0c,
            _0x1a58a7['_node']['style']['backgroundImage'] = 'url(\x22' + _0x2b86e1 + '\x22)',
            _0x4dbb3e['_node']['style']['backgroundImage'] = 'url(\x22' + _0x2b86e1 + '\x22)';
        }
        ;
    }
    return _0x26d62f['prototype'] = Object['create']($Widget['prototype']),
    _0x26d62f['prototype']['constructor'] = _0x26d62f,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x26d62f()),
            this['instance'];
        }
    };
}()
  , $ButtonTA = function() {
    function _0x3caa48(_0x2e6bb3) {
        Object['defineProperty'](this, '_defaultForegroundColor', {
            'value': '#565656',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_defaultBackgroundColor', {
            'value': '#dddddd',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusForegroundColor', {
            'value': '#dddddd',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_focusBackgroundColor', {
            'value': '#565656',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_activeForegroundColor', {
            'value': '#565656',
            'writable': !![]
        }),
        Object['defineProperty'](this, '_activeBackgroundColor', {
            'value': '#dddddd',
            'writable': !![]
        }),
        $Label['call'](this),
        this['_className'] = 'ButtonTA';
        if (TRANSITION)
            this['_node']['style']['transition'] = 'background\x20linear\x200.3s,\x20color\x20linear\x200.3s';
        this['_width'] = 0x98,
        this['_height'] = 0x2a,
        this['_color'] = this['_defaultForegroundColor'],
        this['_background'] = this['_defaultBackgroundColor'],
        this['_font'] = '16px\x20PublicSans-Bold',
        this['_letterSpacing'] = -0.8,
        this['_textVerticalAlign'] = $MultilineLabel['CENTER'],
        this['_textAlign'] = 'center',
        this['_cornerR'] = 0x4,
        this['_text'] = _0x2e6bb3 ? _0x2e6bb3 : '';
        var _0x5e6668 = new $Frame();
        _0x5e6668['_bounds'] = {
            'top': 0x0,
            'left': 0x0,
            'width': this['_width'],
            'height': this['_height']
        },
        _0x5e6668['_cornerR'] = this['_cornerR'],
        _0x5e6668['_thickness'] = 0x3,
        _0x5e6668['_node']['style']['opacity'] = 0x0,
        _0x5e6668['_color'] = this['_defaultForegroundColor'];
        if (TRANSITION)
            _0x5e6668['_node']['style']['transition'] = 'all\x200.3s';
        this['append'](_0x5e6668);
        var _0x2d4821 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x2d4821 && (_0x2d4821(),
            _0x2d4821 = undefined);
        }, ![]);
        var _0x3f50e6 = $ButtonTA['DEFAULT'];
        Object['defineProperty'](this, '_state', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3f50e6;
            },
            'set': function(_0x31298b) {
                _0x3f50e6 = _0x31298b;
                switch (_0x31298b) {
                case $ButtonTA['DEFAULT']:
                    this['_background'] = this['_defaultBackgroundColor'],
                    this['_color'] = this['_defaultForegroundColor'],
                    _0x5e6668['_node']['style']['opacity'] = 0x0;
                    break;
                case $ButtonTA['FOCUSED']:
                    this['_background'] = this['_focusBackgroundColor'],
                    this['_color'] = this['_focusForegroundColor'],
                    _0x5e6668['_node']['style']['opacity'] = 0x0;
                    break;
                case $ButtonTA['ACTIVE']:
                    this['_background'] = this['_activeBackgroundColor'],
                    this['_color'] = this['_activeForegroundColor'],
                    _0x5e6668['_node']['style']['opacity'] = 0x1;
                    break;
                }
            }
        }),
        this['click'] = function(_0x7e1c22) {
            if (TRANSITION)
                _0x2d4821 = _0x7e1c22,
                this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = 'click';
            else {
                if (_0x7e1c22)
                    _0x7e1c22();
            }
        }
        ;
    }
    return _0x3caa48['prototype'] = Object['create']($Label['prototype']),
    _0x3caa48['prototype']['constructor'] = _0x3caa48,
    _0x3caa48['DEFAULT'] = 0x0,
    _0x3caa48['FOCUSED'] = 0x1,
    _0x3caa48['ACTIVE'] = 0x2,
    _0x3caa48;
}()
  , $SceneError = function() {
    function _0x2c5640() {
        $Widget['call'](this),
        this['_bounds'] = {
            'left': 0x0,
            'top': 0x0,
            'width': 0x780,
            'height': 0x438
        },
        this['_className'] = 'SceneError',
        this['_background'] = '#159361',
        this['_node']['style']['display'] = 'none';
        var _0x394050 = ![]
          , _0x3beb07 = function(_0x5d0bdc) {
            switch (_0x5d0bdc['keyCode']) {
            case KeyEvent['VK_ENTER']:
                $ReaService['dispose'](),
                this['_visible'] = ![];
                break;
            }
        }
        ['bind'](this);
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return _0x394050;
            },
            'set': function(_0x28642e) {
                _0x394050 = _0x28642e,
                this['_node']['style']['display'] = _0x28642e ? 'block' : 'none',
                this['_keyListener'] = _0x28642e ? _0x3beb07 : undefined;
            }
        });
        var _0x3d4aaa = new $Svg('<svg\x20width=\x22500\x22\x20height=\x22160\x22\x20viewBox=\x220\x200\x20500\x20160\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>' + '<g\x20fill-rule=\x22nonzero\x22\x20fill=\x22none\x22>' + '\x20\x20\x20\x20<g\x20opacity=\x22.6\x22\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M106.35\x2073.42c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm-9\x200c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM132.83\x2073.42c0-1.49\x201.2-2.7\x202.7-2.7\x201.49\x200\x202.69\x201.21\x202.69\x202.7a2.695\x202.695\x200\x201\x201-5.39\x200zm-9\x200c0-1.49\x201.2-2.7\x202.69-2.7\x201.5\x200\x202.71\x201.21\x202.71\x202.7\x200\x201.49-1.21\x202.7-2.71\x202.7-1.49\x200-2.69-1.21-2.69-2.7zM115.1\x20107.42c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM156\x20106.95c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.2\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zm0-8.5c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.2\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM155.81\x2082.2c0-1.49\x201.2-2.7\x202.7-2.7a2.7\x202.7\x200\x200\x201\x202.69\x202.7\x202.695\x202.695\x200\x201\x201-5.39\x200zM155.81\x2073.7c0-1.49\x201.2-2.7\x202.7-2.7a2.7\x202.7\x200\x200\x201\x202.69\x202.7c0\x201.5-1.21\x202.7-2.69\x202.7-1.5\x200-2.7-1.2-2.7-2.7zM137.66\x20104.12a2.713\x202.713\x200\x200\x201-1.82-3.36\x202.709\x202.709\x200\x200\x201\x203.36-1.82c1.43.43\x202.24\x201.93\x201.82\x203.36a2.712\x202.712\x200\x200\x201-2.59\x201.93c-.25\x200-.51-.04-.77-.11zM129.24\x2096.58a2.69\x202.69\x200\x200\x201\x201.69-3.42c1.41-.48\x202.94.27\x203.42\x201.68s-.27\x202.95-1.68\x203.43c-.29.1-.58.14-.87.14-1.13\x200-2.17-.7-2.56-1.83zM148.07\x2094.36a2.702\x202.702\x200\x200\x201-2.68-2.72h-.01s.01-.07.01-.11a2.7\x202.7\x200\x200\x201\x202.69-2.64c1.5\x200\x202.71\x201.21\x202.71\x202.71v.07a2.706\x202.706\x200\x200\x201-2.7\x202.69h-.02zM130.93\x2089.96a2.693\x202.693\x200\x200\x201-1.66-3.43\x202.705\x202.705\x200\x200\x201\x203.44-1.67c1.4.49\x202.15\x202.03\x201.66\x203.44a2.704\x202.704\x200\x200\x201-2.55\x201.81c-.29\x200-.59-.05-.89-.15zM143.23\x2085.71a2.69\x202.69\x200\x200\x201\x20.12-3.81\x202.69\x202.69\x200\x200\x201\x203.81.12\x202.7\x202.7\x200\x200\x201-.12\x203.81c-.53.49-1.19.74-1.85.74-.72\x200-1.44-.29-1.97-.86h.01zM135.83\x2082.39a2.69\x202.69\x200\x200\x201\x201.84-3.34c1.43-.42\x202.93.41\x203.35\x201.84.41\x201.43-.41\x202.93-1.85\x203.34-.25.08-.5.11-.75.11a2.7\x202.7\x200\x200\x201-2.59-1.95zM180.04\x20107.79c-.3-1.46.64-2.89\x202.1-3.19\x201.46-.3\x202.89.64\x203.19\x202.1a2.7\x202.7\x200\x200\x201-2.11\x203.19c-.18.04-.36.06-.54.06-1.26\x200-2.38-.88-2.64-2.16zM178.04\x2098.67c-.34-1.45.56-2.9\x202.01-3.24\x201.45-.34\x202.9.55\x203.25\x202.01.34\x201.45-.56\x202.9-2.01\x203.24-.21.05-.42.08-.62.08-1.23\x200-2.34-.84-2.63-2.09zM156\x2090.38c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.71\x201.21\x202.71\x202.7\x200\x201.49-1.21\x202.7-2.71\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM164.86\x2090.38c0-1.49\x201.21-2.7\x202.7-2.7\x201.5\x200\x202.71\x201.21\x202.71\x202.7\x200\x201.49-1.21\x202.7-2.71\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM175.6\x2092.92a2.686\x202.686\x200\x200\x201-1.63-3.45c.5-1.41\x202.04-2.14\x203.45-1.63\x201.4.5\x202.13\x202.05\x201.63\x203.45-.4\x201.1-1.44\x201.79-2.54\x201.79-.31\x200-.61-.05-.91-.16zM178.52\x2082.2c0-1.5\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.2\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7zM175.59\x2076.84a2.699\x202.699\x200\x200\x201\x201.82-5.08c1.4.5\x202.13\x202.04\x201.63\x203.44a2.691\x202.691\x200\x200\x201-2.54\x201.8c-.3\x200-.61-.05-.91-.16zM164.86\x2073.72c0-1.49\x201.21-2.7\x202.71-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.5\x200-2.71-1.21-2.71-2.7zM137.22\x20121.85a2.712\x202.712\x200\x200\x201\x202.56-2.84\x202.705\x202.705\x200\x200\x201\x202.84\x202.56\x202.697\x202.697\x200\x200\x201-2.56\x202.83h-.14c-1.43\x200-2.62-1.12-2.7-2.56v.01zM131\x20122.94c-1.37-.59-2-2.18-1.41-3.55.6-1.37\x202.19-2\x203.56-1.4\x201.36.59\x201.99\x202.18\x201.4\x203.55a2.706\x202.706\x200\x200\x201-2.48\x201.62c-.36\x200-.73-.07-1.08-.22h.01zM145.19\x20120.22a2.694\x202.694\x200\x200\x201-1.05-3.67c.72-1.3\x202.36-1.77\x203.66-1.05\x201.31.72\x201.78\x202.36\x201.06\x203.67-.49.89-1.41\x201.39-2.36\x201.39-.45\x200-.89-.11-1.31-.34zM145.08\x20110.06c0-1.49\x201.21-2.7\x202.71-2.7\x201.48\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.22\x202.7-2.7\x202.7-1.5\x200-2.71-1.21-2.71-2.7zM145.08\x20101.52c0-1.49\x201.21-2.7\x202.7-2.7\x201.49\x200\x202.7\x201.21\x202.7\x202.7\x200\x201.49-1.21\x202.7-2.7\x202.7-1.49\x200-2.7-1.21-2.7-2.7z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M204.124\x20152.52a2.698\x202.698\x200\x200\x200\x200-3.81\x202.692\x202.692\x200\x200\x200-3.82\x200\x202.71\x202.71\x200\x200\x200\x200\x203.82c.53.53\x201.22.79\x201.91.79s1.38-.26\x201.91-.79v-.01zm-6.37-6.36a2.7\x202.7\x200\x200\x200\x20.01-3.82\x202.71\x202.71\x200\x200\x200-3.82\x200\x202.692\x202.692\x200\x200\x200\x200\x203.82\x202.69\x202.69\x200\x200\x200\x203.81\x200zM63.644\x20121.04c.72\x200\x201.41-.29\x201.92-.79.5-.5.79-1.2.79-1.91s-.29-1.41-.79-1.91a3.12\x203.12\x200\x200\x200-.41-.33c-.15-.1-.31-.19-.47-.25-.16-.07-.33-.12-.51-.16-.88-.17-1.81.12-2.43.74-.51.5-.79\x201.2-.79\x201.91s.28\x201.41.79\x201.91c.5.5\x201.2.79\x201.9.79zM75.404\x20138.11c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.2-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.5\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.08\x200c0-1.49-1.2-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.5\x200\x202.7-1.21\x202.7-2.7zm9.09\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm7.85.29c1.02-1.09.98-2.8-.1-3.82-1.09-1.02-2.8-.98-3.82.1a2.702\x202.702\x200\x200\x200\x20.1\x203.82c.52.5\x201.19.74\x201.86.74.71\x200\x201.43-.28\x201.96-.84zm-153.57.03c1.14-.95\x201.29-2.66.34-3.8a2.718\x202.718\x200\x200\x200-3.81-.34\x202.707\x202.707\x200\x200\x200-.33\x203.81c.53.64\x201.3.96\x202.07.96.61\x200\x201.22-.2\x201.73-.63zm155.01-10.77c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm-154.58-.24c0-1.49-1.21-2.7-2.71-2.7-1.49\x200-2.69\x201.21-2.69\x202.7\x200\x201.49\x201.2\x202.7\x202.69\x202.7\x201.5\x200\x202.71-1.21\x202.71-2.7zm154.58-8.84c0-1.5-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.2-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm-154.58-9.09c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.5\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.2\x202.7-2.7zm0-9.08c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm0-9.08c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm154.58-27.25c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm0-9.08c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm-1.67-6.88a2.702\x202.702\x200\x200\x200-3.6-4.03c-1.11\x201-1.2\x202.7-.21\x203.81.53.6\x201.27.9\x202.01.9.64\x200\x201.29-.22\x201.8-.68zm-108.14-3.01c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.69\x201.21-2.69\x202.7\x200\x201.49\x201.2\x202.7\x202.69\x202.7s2.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.1\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.2-2.7-2.69-2.7-1.5\x200-2.71\x201.21-2.71\x202.7\x200\x201.49\x201.21\x202.7\x202.71\x202.7\x201.49\x200\x202.69-1.21\x202.69-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.5\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.2\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.1\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.11\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zm9.12\x200c0-1.49-1.21-2.7-2.7-2.7-1.49\x200-2.7\x201.21-2.7\x202.7\x200\x201.49\x201.21\x202.7\x202.7\x202.7\x201.49\x200\x202.7-1.21\x202.7-2.7zM81.544\x20152.52a2.71\x202.71\x200\x200\x200\x200-3.82\x202.71\x202.71\x200\x200\x200-3.82\x200\x202.68\x202.68\x200\x200\x200\x200\x203.81c.53.53\x201.22.79\x201.91.79s1.38-.26\x201.91-.79v.01zm6.36-6.36a2.692\x202.692\x200\x200\x200\x200-3.82\x202.71\x202.71\x200\x200\x200-3.82\x200\x202.71\x202.71\x200\x200\x200\x200\x203.82c.53.52\x201.22.79\x201.91.79s1.38-.27\x201.91-.79z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M62.454\x2072.17c.66\x200\x201.3-.26\x201.77-.73.12-.11.22-.24.31-.38.09-.13.17-.28.23-.43a2.626\x202.626\x200\x200\x200\x20.19-.96c0-.16-.02-.33-.05-.49-.03-.16-.08-.31-.14-.46-.06-.16-.14-.3-.23-.44-.09-.13-.19-.26-.31-.38-.11-.11-.24-.22-.38-.31-.13-.09-.28-.16-.43-.23a2.522\x202.522\x200\x200\x200-2.73.54c-.11.12-.22.25-.31.38-.09.14-.16.28-.23.44-.06.15-.11.3-.14.46-.03.16-.05.33-.05.49a2.626\x202.626\x200\x200\x200\x20.19.96c.07.15.14.3.23.43.09.14.2.27.31.38.12.12.25.22.38.31a2.638\x202.638\x200\x200\x200\x20.9.37c.16.04.33.05.49.05zM56.924\x2064.6c.87-1.07.71-2.64-.36-3.51a2.483\x202.483\x200\x200\x200-3.51.35c-.88\x201.07-.72\x202.64.35\x203.52.46.38\x201.02.56\x201.58.56a2.5\x202.5\x200\x200\x200\x201.94-.92zm-7.83-6.22c.86-1.08.69-2.66-.39-3.52a2.495\x202.495\x200\x200\x200-3.51.39c-.87\x201.08-.69\x202.65.38\x203.51.47.37\x201.02.55\x201.57.55.73\x200\x201.46-.32\x201.95-.93zm-7.67-6.44c1.05-.89\x201.19-2.47.31-3.52a2.505\x202.505\x200\x200\x200-3.53-.31\x202.502\x202.502\x200\x200\x200-.3\x203.52c.49.59\x201.2.9\x201.91.9.57\x200\x201.14-.2\x201.61-.59zm-5.49-8.35a2.502\x202.502\x200\x200\x200\x202.14-2.82\x202.495\x202.495\x200\x200\x200-2.82-2.13\x202.493\x202.493\x200\x200\x200-2.14\x202.81\x202.506\x202.506\x200\x200\x200\x202.48\x202.16c.11\x200\x20.23\x200\x20.34-.02zm3.79-10.78c.72-1.18.35-2.72-.83-3.44a2.505\x202.505\x200\x200\x200-3.44.84c-.71\x201.17-.34\x202.71.84\x203.43.41.25.85.37\x201.3.37.84\x200\x201.66-.43\x202.13-1.2zm17.71-5.59a2.502\x202.502\x200\x200\x200-4.63-1.9c-.52\x201.28.09\x202.74\x201.36\x203.26a2.5\x202.5\x200\x200\x200\x203.27-1.36zm-11.44.71a2.489\x202.489\x200\x200\x200\x201.73-3.08\x202.497\x202.497\x200\x200\x200-3.08-1.73c-1.33.38-2.1\x201.76-1.73\x203.09.31\x201.1\x201.31\x201.82\x202.4\x201.82.23\x200\x20.46-.03.68-.1zM62.464\x2035.3c.65\x200\x201.3-.27\x201.77-.73.46-.47.73-1.11.73-1.77\x200-.66-.27-1.3-.73-1.77-.12-.11-.25-.22-.38-.31-.14-.09-.28-.17-.44-.23-.15-.06-.3-.11-.46-.14-.33-.07-.66-.07-.98\x200-.16.03-.32.08-.47.14-.15.06-.29.14-.43.23s-.26.2-.38.31c-.46.47-.73\x201.11-.73\x201.77\x200\x20.66.27\x201.3.73\x201.77.12.11.24.22.38.31s.28.17.43.23c.15.06.31.11.47.14.16.04.32.05.49.05zM71.544\x2064.93c1.07-.87\x201.23-2.45.35-3.52-.87-1.07-2.45-1.22-3.52-.35a2.501\x202.501\x200\x200\x200-.35\x203.51c.49.61\x201.21.93\x201.94.93.55\x200\x201.11-.19\x201.58-.57zm7.82-6.19c1.08-.86\x201.25-2.44.39-3.51a2.487\x202.487\x200\x200\x200-3.51-.39\x202.495\x202.495\x200\x200\x200-.39\x203.51c.49.62\x201.22.94\x201.95.94.55\x200\x201.1-.18\x201.56-.55zm7.68-7.14c.88-1.06.74-2.64-.32-3.52a2.494\x202.494\x200\x200\x200-3.52.31\x202.51\x202.51\x200\x200\x200\x20.31\x203.52c.47.39\x201.04.59\x201.61.59.71\x200\x201.42-.31\x201.92-.9zm4.76-10.18c.19-1.37-.77-2.63-2.14-2.82-1.37-.19-2.63.77-2.81\x202.14a2.48\x202.48\x200\x200\x200\x202.13\x202.81c.12.02.23.03.34.03\x201.23\x200\x202.31-.91\x202.48-2.16zm-3.2-7.81c1.18-.72\x201.55-2.26.83-3.44a2.508\x202.508\x200\x200\x200-3.44-.82\x202.498\x202.498\x200\x200\x200-.82\x203.43c.47.77\x201.29\x201.2\x202.13\x201.2.45\x200\x20.9-.12\x201.3-.37zm-17.88-5.01a2.51\x202.51\x200\x200\x200\x201.36-3.27\x202.51\x202.51\x200\x200\x200-3.27-1.36c-1.27.53-1.88\x202-1.35\x203.27.39.96\x201.33\x201.55\x202.31\x201.55.32\x200\x20.64-.07.95-.19zm11.25-2.41c.37-1.33-.41-2.71-1.74-3.08-1.33-.37-2.71.41-3.08\x201.74-.37\x201.33.41\x202.71\x201.74\x203.08a2.505\x202.505\x200\x200\x200\x203.08-1.74z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20<path\x20d=\x22M281.24\x2065.34a2.5\x202.5\x200\x200\x201-2.5-2.5V48.26c0-1.47.57-2.85\x201.61-3.89a5.46\x205.46\x200\x200\x201\x203.89-1.61h81.38a2.5\x202.5\x200\x200\x201\x200\x205h-81.38c-.17\x200-.28.08-.35.15-.07.07-.15.18-.15.35v14.58a2.5\x202.5\x200\x200\x201-2.5\x202.5zM435.78\x2092.57a2.5\x202.5\x200\x200\x200-2.5\x202.5v39.36c0\x20.69-.56\x201.25-1.29\x201.25H284.98c-.69\x200-1.25-.56-1.25-1.25v-13.59a2.5\x202.5\x200\x200\x200-5\x200v13.59c0\x203.44\x202.8\x206.25\x206.25\x206.25h22.28l-5.99\x205.99a2.499\x202.499\x200\x200\x200\x201.77\x204.27c.64\x200\x201.28-.24\x201.77-.73l9.52-9.53h88.33l9.52\x209.53c.49.49\x201.13.73\x201.77.73a2.499\x202.499\x200\x200\x200\x201.77-4.27l-5.99-5.99h22.29c3.44\x200\x206.25-2.8\x206.25-6.25V95.07a2.5\x202.5\x200\x200\x200-2.5-2.5h.01z\x22\x20fill=\x22#FFF\x22/>' + '\x20\x20\x20\x20<g\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M342.67\x2075.32c1.24\x200\x202.25-1.01\x202.25-2.25s-1.01-2.25-2.25-2.25h-23.5c-1.24\x200-2.25\x201.01-2.25\x202.25s1.01\x202.25\x202.25\x202.25h9.5v31.81c0\x201.24\x201.01\x202.25\x202.25\x202.25s2.25-1.01\x202.25-2.25V75.32h9.5zM363.16\x2080.42c0-1.24-1.01-2.25-2.25-2.25s-2.25\x201.01-2.25\x202.25v.65c-1.76-1.48-3.92-2.36-6.25-2.36-5.93\x200-10.75\x205.62-10.75\x2012.54\x200\x206.92\x204.82\x2012.54\x2010.75\x2012.54\x202.33\x200\x204.49-.88\x206.25-2.36v2.07c0\x20.04.22\x203.68-1.78\x205.82-1.03\x201.1-2.49\x201.63-4.48\x201.63-3.18\x200-5.18-.58-6.31-1.07-1.14-.5-2.47.03-2.96\x201.17-.5\x201.14.03\x202.46\x201.17\x202.96\x201.52.66\x204.15\x201.44\x208.1\x201.44\x203.27\x200\x205.89-1.04\x207.79-3.08\x203.12-3.37\x203-8.3\x202.96-9.09V80.43l.01-.01zm-10.75\x2018.87c-3.45\x200-6.25-3.61-6.25-8.04s2.8-8.04\x206.25-8.04\x206.25\x203.61\x206.25\x208.04-2.8\x208.04-6.25\x208.04zM387.52\x2088.71c2.56-1.54\x204.37-4.2\x204.37-8.12\x200-6.75-5.35-9.77-10.65-9.77h-9.62c-1.24\x200-2.25\x201.01-2.25\x202.25\x200\x20.05.01.09.01.14\x200\x20.05-.01.09-.01.14v33.78c0\x201.24\x201.01\x202.25\x202.25\x202.25s2.25-1.01\x202.25-2.25V90.35h8.39c.33.06\x202.54.6\x203.45\x205.21\x201.31\x206.67\x201.69\x2011.69\x201.69\x2011.74a2.256\x202.256\x200\x200\x200\x202.24\x202.09h.17a2.251\x202.251\x200\x200\x200\x202.08-2.41c-.02-.21-.4-5.33-1.76-12.28-.55-2.78-1.52-4.68-2.61-5.99zm-13.65-13.39h7.37c3.91\x200\x206.15\x201.92\x206.15\x205.27\x200\x203.35-2.24\x205.27-6.15\x205.27h-7.37V75.32z\x22/>' + '\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20<path\x20d=\x22M283.32\x2094.69s.01-.03.02-.04c.04-.06.07-.13.1-.19l.02-.04c.03-.05.06-.1.08-.15\x200-.01\x200-.03.01-.04.03-.07.05-.15.07-.22.02-.07.05-.13.06-.2v-.05c.01-.08.02-.15.02-.23\x200-.07.02-.15.02-.22v-.04c0-.07-.01-.15-.02-.22\x200-.08-.01-.15-.02-.23v-.04c-.01-.07-.04-.13-.06-.2-.02-.07-.04-.15-.07-.22\x200-.01\x200-.03-.01-.04-.03-.07-.07-.13-.1-.19-.04-.07-.07-.13-.11-.2\x200-.01-.01-.02-.02-.04-.03-.05-.08-.09-.12-.14-.02-.02-.03-.04-.05-.06-.04-.04-.06-.09-.1-.13l-17.9-18.53a2.496\x202.496\x200\x200\x200-3.53-.06c-.99.96-1.02\x202.54-.06\x203.54l13.8\x2014.29h-57.61c-1.38\x200-2.5\x201.11-2.5\x202.49a2.5\x202.5\x200\x200\x200\x202.5\x202.5h57.61l-13.8\x2014.3c-.96.99-.93\x202.58.06\x203.54.49.47\x201.11.7\x201.74.7.63\x200\x201.31-.25\x201.8-.76l17.87-18.49.03-.03.09-.12c.03-.03.06-.07.09-.11.03-.04.07-.07.09-.11v-.02zM453.7\x2068.58l-9.04-28.5c4.21-2.85\x206.98-7.67\x206.98-13.13\x200-8.73-7.1-15.84-15.84-15.84s-15.84\x207.1-15.84\x2015.84c0\x205.46\x202.77\x2010.28\x206.98\x2013.13l-9.04\x2028.5c-.42\x201.32.31\x202.72\x201.63\x203.14.25.08.51.12.76.12\x201.06\x200\x202.04-.68\x202.38-1.75l3.51-11.07h19.23l3.51\x2011.07a2.512\x202.512\x200\x200\x200\x202.38\x201.75\x202.505\x202.505\x200\x200\x200\x202.39-3.26h.01zm-17.89-52.46c5.98\x200\x2010.84\x204.86\x2010.84\x2010.84\x200\x205.98-4.86\x2010.84-10.84\x2010.84-5.98\x200-10.84-4.86-10.84-10.84\x200-5.98\x204.86-10.84\x2010.84-10.84zm-8.03\x2037.9\x203.75-11.83c1.36.38\x202.79.6\x204.28.6\x201.49\x200\x202.91-.22\x204.28-.6l3.75\x2011.83h-16.06z\x22\x20fill=\x22#00EE8E\x22/>' + '\x20\x20\x20\x20<g\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M410.9\x2041.64c-.91\x200-1.79-.5-2.23-1.38-2.13-4.22-3.2-8.76-3.2-13.52\x200-4.24.86-8.33\x202.57-12.17a2.503\x202.503\x200\x200\x201\x203.3-1.27c1.26.56\x201.83\x202.04\x201.27\x203.3-1.42\x203.2-2.14\x206.61-2.14\x2010.15\x200\x203.96.9\x207.75\x202.67\x2011.26a2.5\x202.5\x200\x200\x201-1.11\x203.36c-.36.18-.75.27-1.12.27h-.01zM397.49\x2047.69c-.93\x200-1.82-.52-2.25-1.41-2.97-6.12-4.48-12.69-4.48-19.53\x200-6.45\x201.34-12.68\x203.99-18.5a2.496\x202.496\x200\x200\x201\x203.31-1.24c1.26.57\x201.81\x202.05\x201.24\x203.31-2.35\x205.17-3.54\x2010.7-3.54\x2016.43\x200\x206.08\x201.34\x2011.92\x203.97\x2017.35a2.496\x202.496\x200\x200\x201-2.25\x203.59h.01z\x22/>' + '\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20<g\x20fill=\x22#FFF\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M460.36\x2041.64a2.505\x202.505\x200\x200\x201-2.23-3.63c1.77-3.51\x202.67-7.3\x202.67-11.26\x200-3.53-.72-6.95-2.14-10.15-.56-1.26\x200-2.74\x201.27-3.3\x201.26-.56\x202.74\x200\x203.3\x201.27a29.9\x2029.9\x200\x200\x201\x202.57\x2012.17c0\x204.75-1.08\x209.3-3.2\x2013.52-.44.87-1.32\x201.38-2.23\x201.38h-.01zM473.76\x2047.69a2.504\x202.504\x200\x200\x201-2.25-3.59c2.64-5.43\x203.97-11.27\x203.97-17.35\x200-5.73-1.19-11.26-3.55-16.43a2.496\x202.496\x200\x200\x201\x201.24-3.31c1.26-.58\x202.74-.02\x203.31\x201.24\x202.65\x205.83\x203.99\x2012.05\x203.99\x2018.5\x200\x206.85-1.51\x2013.42-4.48\x2019.53-.43.89-1.32\x201.41-2.25\x201.41h.02z\x22/>' + '\x20\x20\x20\x20</g></g></svg>');
        _0x3d4aaa['_bounds'] = {
            'top': 0x124,
            'left': 0x2e8,
            'width': 0x1f4,
            'height': 0xa0
        };
        var _0x16b2d5 = new $Widget();
        _0x16b2d5['_bounds'] = {
            'left': 0x202,
            'top': 0x1ec,
            'width': 0x3c0,
            'height': 0x80
        },
        _0x16b2d5['_font'] = '52px\x20PublicSans-Regular',
        _0x16b2d5['_color'] = '#fff',
        _0x16b2d5['_node']['style']['lineHeight'] = '64px',
        _0x16b2d5['_node']['style']['letterSpacing'] = '-1.6px',
        _0x16b2d5['_node']['style']['textAlign'] = 'center';
        var _0x3f58ce = new $Button0();
        _0x3f58ce['_bounds'] = {
            'left': 0x31a,
            'top': 0x2d0,
            'width': 0x190,
            'height': 0x44
        },
        _0x3f58ce['_focusedBackground'] = '#fff',
        _0x3f58ce['_focusedColor'] = '#159361',
        _0x3f58ce['_text'] = 'Torna\x20alla\x20diretta\x20predefinita',
        _0x3f58ce['_font'] = '24px\x20PublicSans-Bold',
        _0x3f58ce['_focused'] = !![],
        Object['defineProperty'](this, '_title', {
            'get': function() {},
            'set': function(_0x49cc26) {
                _0x16b2d5['_node']['innerHTML'] = _0x49cc26 || 'La\x20redazione\x20che\x20hai\x20scelto<br/>non\x20è\x20disponibile.';
            }
        }),
        this['append'](_0x3d4aaa),
        this['append'](_0x16b2d5),
        this['append'](_0x3f58ce),
        this['visibleTrigger'] = function(_0x5ca00d, _0x4f9db7) {
            this['_visible'] = _0x5ca00d,
            _0x4f9db7 && _0x4f9db7();
        }
        ;
    }
    return _0x2c5640['prototype'] = Object['create']($Widget['prototype']),
    _0x2c5640['prototype']['constructor'] = _0x2c5640,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x2c5640()),
            this['instance'];
        }
    };
}()
  , $BannerLancioApp = function() {
    function _0x37a736() {
        $Widget['call'](this),
        this['_className'] = 'BannerLancioApp';
        var _0x38ec8f = 0x0;
        if ($DEVICE['userAgentInfo']) {
            var _0x481422 = $DEVICE['userAgentInfo']['version'];
            if (_0x481422) {
                var _0x4b05d6 = _0x481422['replace'](/\./gm, '');
                _0x4b05d6 = parseInt(_0x4b05d6);
                if (_0x4b05d6 <= 0x8c)
                    _0x38ec8f = 0x3e8;
            }
        }
        this['_bounds'] = {
            'left': 0x4da + _0x38ec8f,
            'top': 0x3b8,
            'width': 0x2a7,
            'height': 0x9e
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x2e7aa2 = '<svg\x20class=\x22pippo\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22679\x22\x20height=\x22158\x22\x20viewBox=\x220\x200\x20679\x20158\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x2220e5qvd12a\x22\x20x1=\x22100%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#000063\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#000098\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22aqwactkhzb\x22\x20x1=\x220%\x22\x20x2=\x2252.694%\x22\x20y1=\x220%\x22\x20y2=\x2252.643%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#FFF\x22\x20stop-opacity=\x22.9\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#FFF\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#20e5qvd12a)\x22\x20d=\x22M29\x2030H638V118H29z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2279\x22\x20y=\x2286\x22>Premi\x20il\x20</tspan>\x20<tspan\x20x=\x22182.74\x22\x20y=\x2286\x22\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-weight=\x22600\x22>tasto\x20su\x20</tspan>\x20<tspan\x20x=\x22331.095\x22\x20y=\x2286\x22\x20font-family=\x22PublicSans-Bold,\x20Public\x20Sans\x22\x20font-weight=\x22bold\x22>\x20</tspan>\x20<tspan\x20x=\x22336.455\x22\x20y=\x2286\x22>per\x20aprire</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FFF\x22\x20d=\x22M312.129\x2076.255l9.602\x2010.22c.142.15.135.387-.016.53l-.014.012-2.226\x201.891c-.152.13-.38.117-.516-.03L307.1\x2076.257c-.135-.144-.135-.37\x200-.514l11.859-12.624c.137-.145.364-.158.516-.029L322\x2065.236l-9.872\x2010.506c-.136.144-.136.369\x200\x20.513z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x20rotate(90\x20314.5\x2075.999)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FFF\x22\x20d=\x22M587.688\x2074.574h-5.732v-5.731h-3.771v5.731h-5.732v3.772h5.732v5.731h3.771v-5.731h5.732v-3.772zm-74.578-.385c-1.921\x200-3.038\x201.376-3.038\x203.012\x200\x201.688\x201.117\x202.987\x203.038\x202.987\x201.922\x200\x203.038-1.3\x203.038-2.987\x200-1.636-1.116-3.012-3.038-3.012zM484\x2099h49.997V49H484v50zm15.675-15.151l-4.803-7.53h-.053v7.53h-5.09v-19.58h7.61c3.869\x200\x206.803\x201.843\x206.803\x206.024\x200\x202.701-1.506\x205.038-4.285\x205.532l6.155\x208.024h-6.337zm21.044\x200h-4.726v-1.48h-.053c-.83\x201.324-2.466\x201.921-4.024\x201.921-3.948\x200-6.726-3.298-6.726-7.115s2.727-7.09\x206.674-7.09c1.532\x200\x203.142.572\x204.13\x201.74v-1.298h4.725V83.85zm2.72\x200h4.727V70.527h-4.727V83.85zm2.364-15.789c-1.454\x200-2.65-1.195-2.65-2.649s1.196-2.648\x202.65-2.648\x202.648\x201.194\x202.648\x202.648c0\x201.454-1.194\x202.649-2.648\x202.649zm-30.49.104h-.494v4.882h.494c1.661\x200\x203.531-.312\x203.531-2.441\x200-2.13-1.87-2.441-3.531-2.441zm69.569\x204.536v-3.945h6.876V72.7h-1.315l-4.219\x2011.094h-4.356L557.705\x2072.7h-1.315v-3.945h6.958V72.7h-1.178l1.917\x205.89\x201.973-5.89h-1.178zm-13.15\x207.067v4.027h-8.464v-4.027h1.89v-11.45h-1.808v2.657h-3.506v-6.657h15.395v6.657h-3.479v-2.657h-1.808v11.45h1.78z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#aqwactkhzb)\x22\x20d=\x22M638.065\x20118H678.065V158H638.065z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20fill-opacity=\x22.9\x22\x20d=\x22M608\x2030H638V60H608z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20d=\x22M0\x200H30V30H0z\x22\x20transform=\x22translate(-1242\x20-922)\x20translate(1242\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '</svg>'
          , _0x485c03 = new $Widget(_0x2e7aa2);
        this['append'](_0x485c03);
        var _0x40241d = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x40241d && (_0x40241d(),
            _0x40241d = undefined);
        }, ![]);
        var _0x39d779 = function(_0x73c124) {
            if (localStorage && localStorage['length'] === 0x0)
                return;
            switch (_0x73c124['keyCode']) {
            case KeyEvent['VK_UP']:
                $Gui['getInstance']()['_loadingFlag'] = !![],
                this['visibleTrigger'](![], function() {
                    var _0x15640e = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x15640e)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x2db4e5 = $BannerPrivacy['getInstance']();
                        _0x2db4e5['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x39e8be() {
                                    var _0x1b9cf0 = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x1b9cf0);
                                    _0x1b9cf0['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x39e8be);
                            });
                        }
                        ,
                        _0x2db4e5['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x2db4e5);
                    } else
                        $MISC['loadMainJS'](function() {
                            function _0x50e3b9() {
                                var _0x107a7a = $Scene0['getInstance']();
                                if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                    $Gui['getInstance']()['append'](_0x107a7a);
                                _0x107a7a['visibleTrigger'](!![], function() {
                                    $Gui['getInstance']()['_loadingFlag'] = ![];
                                });
                            }
                            $Gui['getInstance']()['onInfoLoad'](_0x50e3b9);
                        });
                });
                break;
            case KeyEvent['VK_BACK']:
                $Gui['getInstance']()['_loadingFlag'] = !![],
                this['visibleTrigger'](![], function() {
                    var _0x201513 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x201513)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x80b4ea = $BannerPrivacy['getInstance']();
                        _0x80b4ea['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x499012() {
                                    var _0xc03418 = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0xc03418);
                                    _0xc03418['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x499012);
                            });
                        }
                        ,
                        _0x80b4ea['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x80b4ea);
                    } else
                        $MISC['loadMainJS'](function() {
                            function _0x1516fe() {
                                var _0x2e67e8 = $Scene0['getInstance']();
                                if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                    $Gui['getInstance']()['append'](_0x2e67e8);
                                var _0x193817 = EPG['getEpg']()['type'] === 'tv' ? 0x2 : 0x3
                                  , _0x5237fc = [undefined, undefined, 'CanaliTv', 'CanaliRadio'][_0x193817]
                                  , _0x11ea4d = $Scene0['getInstance']()['getChildrenByClassName'](_0x5237fc)[0x0]
                                  , _0x509737 = _0x11ea4d['getChildrenByClassName']('Menu0')[0x0];
                                _0x509737['_focused'] = !![],
                                _0x2e67e8['_activeSectionIndex'] = _0x193817,
                                $Scene0['getInstance']()['_menu']['_focused'] = ![],
                                setTimeout(function() {
                                    _0x2e67e8['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }, 0x64);
                            }
                            $Gui['getInstance']()['onInfoLoad'](_0x1516fe);
                        });
                });
                break;
            case KeyEvent['VK_DOWN']:
                this['_visible'] = ![];
                break;
            }
        }
        ['bind'](this)
          , _0x155fd9 = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x51030f) {
                _0x51030f !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0x51030f ? 'bannerAppOn' : 'bannerAppOff'),
                this['_top'] = _0x51030f ? 0x39a : 0x3b8,
                this['_node']['style']['opacity'] = _0x51030f ? 0x1 : 0x0,
                this['_keyListener'] = _0x51030f ? _0x39d779 : undefined,
                _0x51030f ? (_0x155fd9 = setTimeout(function() {
                    $BannerLancioApp['getInstance']()['visibleTrigger'](![], function() {
                        var _0x1e512f = $BannerLancioRaiPlay['getInstance']();
                        if (!$Gui['getInstance']()['getChildrenByClassName']('BannerLancioRaiPlay'))
                            $Gui['getInstance']()['append'](_0x1e512f);
                        _0x1e512f['_visible'] = !![];
                    });
                }, 0x2710),
                $WebTrekk['track']($WebTrekk['events']['TVPLUS'])) : clearTimeout(_0x155fd9));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0x2902dc, _0x4ef919) {
            if (_0x40241d)
                _0x40241d();
            if (TRANSITION)
                _0x40241d = _0x4ef919,
                this['_visible'] = _0x2902dc;
            else
                _0x4ef919 && (this['_visible'] = _0x2902dc,
                _0x4ef919());
        }
        ,
        this['quickHide'] = function() {
            this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
            this['_node']['offsetWidth']),
            this['_top'] = 0x3b8,
            this['_node']['style']['opacity'] = 0x0,
            this['_keyListener'] = undefined,
            clearTimeout(_0x155fd9));
        }
        ;
    }
    return _0x37a736['prototype'] = Object['create']($Widget['prototype']),
    _0x37a736['prototype']['constructor'] = _0x37a736,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x37a736()),
            this['instance'];
        }
    };
}()
  , $BannerLancioRaiPlay = function() {
    function _0x553e79() {
        $Widget['call'](this),
        this['_className'] = 'BannerLancioRaiPlay';
        var _0x5b9371 = 0x0;
        if ($DEVICE['userAgentInfo']) {
            var _0x1447e6 = $DEVICE['userAgentInfo']['version'];
            if (_0x1447e6) {
                var _0x2bf940 = _0x1447e6['replace'](/\./gm, '');
                _0x2bf940 = parseInt(_0x2bf940);
                if (_0x2bf940 <= 0x8c)
                    _0x5b9371 = 0x3e8;
            }
        }
        this['_bounds'] = {
            'left': 0x4ac + _0x5b9371,
            'top': 0x39a,
            'width': 0x2d4,
            'height': 0x9e
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x27e1b1 = '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22724\x22\x20height=\x22158\x22\x20viewBox=\x220\x200\x20724\x20158\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x225x9j0xxaca\x22\x20x1=\x2297.217%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#000032\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#00005E\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#5x9j0xxaca)\x22\x20d=\x22M30\x2030H684V118H30z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#18156D\x22\x20d=\x22M654\x2030H684V60H654z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2280\x22\x20y=\x2283\x22>Premi\x20il\x20</tspan>\x20<tspan\x20x=\x22183.74\x22\x20y=\x2283\x22\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-weight=\x22600\x22>tasto\x20blu\x20</tspan>\x20<tspan\x20x=\x22358.83\x22\x20y=\x2283\x22\x20font-family=\x22PublicSans-Bold,\x20Public\x20Sans\x22\x20font-weight=\x22bold\x22>\x20</tspan>\x20<tspan\x20x=\x22369.55\x22\x20y=\x2283\x22>per\x20aprire</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FFF\x22\x20d=\x22M567\x2049v50h-50V49h50zm58.543\x2019.575v4.068h-1.185l1.929\x206.074\x201.983-6.074h-1.185v-4.068H634v4.068h-1.322l-4.572\x2012.26h1.322V89h-7.052v-4.096h1.432l.275-.735-4.214-11.526h-1.323v-4.068h6.997zm-19.086-.254c2.038\x200\x203.498.65\x204.628\x202.175v-1.92h5.785v4.067h-1.653v7.344h1.653v4.097h-6.005V82.36c-1.02\x201.328-2.452\x201.95-4.408\x201.95-4.242\x200-7.41-3.334-7.41-7.995\x200-4.66\x203.168-7.995\x207.41-7.995zm-61.593\x201.765c-3.948\x200-6.674\x203.272-6.674\x207.09\x200\x203.816\x202.778\x207.114\x206.726\x207.114\x201.48\x200\x203.03-.539\x203.894-1.728l.13-.193h.053v1.48h4.726V70.527h-4.726v1.298c-.988-1.168-2.597-1.74-4.13-1.74zM581.429\x2064c2.066\x200\x203.637.141\x204.96\x201.1\x201.734\x201.244\x202.644\x203.136\x202.644\x205.651\x200\x202.119-.716\x203.87-2.176\x205.254-1.433\x201.356-3.251\x201.61-5.758\x201.61h-1.377v2.317h1.79v4.152H573v-4.152h1.9V68.123H573V64h8.43zm14.858\x200v15.987h1.9v4.097h-8.07v-4.097h1.9v-11.92h-1.846V64h6.116zm-65.948.269h-7.61v19.58h5.09v-7.53h.052l4.804\x207.53h6.336l-6.154-8.024c2.78-.494\x204.285-2.831\x204.285-5.532\x200-4.18-2.934-6.024-6.803-6.024zm30.827\x206.258h-4.726V83.85h4.726V70.527zM546.11\x2074.19c1.922\x200\x203.038\x201.376\x203.038\x203.012\x200\x201.688-1.116\x202.987-3.038\x202.987-1.922\x200-3.038-1.3-3.038-2.987\x200-1.636\x201.116-3.012\x203.038-3.012zm61.146-1.743c-2.094\x200-3.636\x201.61-3.636\x203.87s1.542\x203.87\x203.636\x203.87c2.094\x200\x203.636-1.61\x203.636-3.87s-1.542-3.87-3.636-3.87zm-26.24-3.926h-1.267v4.745h.882c2.369\x200\x203.526-.622\x203.526-2.43\x200-1.695-1.02-2.315-3.14-2.315zm-52.704-.356c1.663\x200\x203.532.312\x203.532\x202.441\x200\x202.06-1.75\x202.42-3.37\x202.44l-.162.001h-.493v-4.882h.493zm30.49-5.401c-1.453\x200-2.649\x201.194-2.649\x202.648\x200\x201.455\x201.196\x202.65\x202.65\x202.65s2.648-1.195\x202.648-2.65c0-1.454-1.194-2.648-2.648-2.648z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20stroke=\x22#9ADAFF\x22\x20stroke-width=\x222\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x20translate(316\x2060)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2228\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#9ADAFF\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2225\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#0099F2\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#FC1F65\x22\x20d=\x22M684\x20118H724V158H684z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#42FFBB\x22\x20d=\x22M0\x200H30V30H0z\x22\x20transform=\x22translate(-1196\x20-922)\x20translate(1196\x20922)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '</svg>'
          , _0x33bccd = new $Widget(_0x27e1b1);
        this['append'](_0x33bccd);
        var _0x39ac61 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x39ac61 && (_0x39ac61(),
            _0x39ac61 = undefined);
        }, ![]);
        var _0x35b634 = function(_0x60070e) {
            if (localStorage && localStorage['length'] === 0x0)
                return;
            switch (_0x60070e['keyCode']) {
            case KeyEvent['VK_UP']:
                $Gui['getInstance']()['_loadingFlag'] = !![],
                $BannerLancioRaiPlay['getInstance']()['visibleTrigger'](![], function() {
                    var _0x3dc806 = $StorageManager['getInstance']()['read'](PRIVACY_FILE);
                    if ($MISC['isEmptyObject'](JSON['parse'](_0x3dc806)) && !$BannerPrivacy['getInstance']()['_displayCount']) {
                        var _0x3ed65c = $BannerPrivacy['getInstance']();
                        _0x3ed65c['_undisplayHandler'] = function() {
                            $Gui['getInstance']()['_loadingFlag'] = !![],
                            $MISC['loadMainJS'](function() {
                                function _0x46ba6f() {
                                    var _0x11415a = $Scene0['getInstance']();
                                    if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                        $Gui['getInstance']()['append'](_0x11415a);
                                    _0x11415a['visibleTrigger'](!![], function() {
                                        $Gui['getInstance']()['_loadingFlag'] = ![];
                                    });
                                }
                                $Gui['getInstance']()['onInfoLoad'](_0x46ba6f);
                            });
                        }
                        ,
                        _0x3ed65c['_visible'] = !![],
                        $Gui['getInstance']()['_loadingFlag'] = ![],
                        $Gui['getInstance']()['append'](_0x3ed65c);
                    } else
                        $MISC['loadMainJS'](function() {
                            function _0x2cfd8d() {
                                var _0xf4eb6d = $Scene0['getInstance']();
                                if (!$Gui['getInstance']()['getChildrenByClassName']('Scene0'))
                                    $Gui['getInstance']()['append'](_0xf4eb6d);
                                _0xf4eb6d['visibleTrigger'](!![], function() {
                                    $Gui['getInstance']()['_loadingFlag'] = ![];
                                });
                            }
                            $Gui['getInstance']()['onInfoLoad'](_0x2cfd8d);
                        });
                });
                break;
            case KeyEvent['VK_DOWN']:
                this['_visible'] = ![];
                break;
            }
        }
          , _0x5d8331 = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x24a58f) {
                _0x24a58f !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0x24a58f ? 'bannerAppOn' : 'bannerAppOff'),
                this['_top'] = _0x24a58f ? 0x39a : 0x3b8,
                this['_node']['style']['opacity'] = _0x24a58f ? 0x1 : 0x0,
                this['_keyListener'] = _0x24a58f ? _0x35b634 : undefined,
                _0x24a58f ? _0x5d8331 = setTimeout(function() {
                    this['_visible'] = ![];
                }
                ['bind'](this), 0x1388) : clearTimeout(_0x5d8331));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0x386a42, _0x5402f8) {
            if (_0x39ac61)
                _0x39ac61();
            if (TRANSITION)
                _0x39ac61 = _0x5402f8,
                this['_visible'] = _0x386a42;
            else {
                if (_0x5402f8)
                    _0x5402f8();
            }
        }
        ,
        this['quickHide'] = function() {
            this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
            this['_node']['offsetWidth']),
            this['_top'] = 0x3b8,
            this['_node']['style']['opacity'] = 0x0,
            this['_keyListener'] = undefined,
            clearTimeout(_0x5d8331));
        }
        ;
    }
    return _0x553e79['prototype'] = Object['create']($Widget['prototype']),
    _0x553e79['prototype']['constructor'] = _0x553e79,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x553e79()),
            this['instance'];
        }
    };
}()
  , $BannerSceltaTGR = function() {
    function _0xc8dbb6() {
        var _0x4dcad6 = '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20width=\x221010\x22\x20height=\x22197\x22\x20viewBox=\x220\x200\x201010\x20197\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22wysuj9cc3b\x22\x20x1=\x2297.217%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#002C27\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#003831\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20id=\x22j4gcdnh8xa\x22\x20d=\x22M0\x200H917V88H0z\x22/>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20transform=\x22translate(-963\x20-952)\x20translate(963\x20952)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<mask\x20id=\x226v2mfck7pc\x22\x20fill=\x22#fff\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<use\x20xlink:href=\x22#j4gcdnh8xa\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</mask>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<use\x20fill=\x22url(#wysuj9cc3b)\x22\x20xlink:href=\x22#j4gcdnh8xa\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20mask=\x22url(#6v2mfck7pc)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00B56C\x22\x20fill-opacity=\x22.4\x22\x20d=\x22M6.25\x206.25H44.25V44.25H6.25z\x22\x20transform=\x22translate(-22.474\x20-6.22)\x20rotate(65\x2025.25\x2025.25)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<text\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22\x20transform=\x22translate(-22.474\x20-6.22)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2272.474\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22>Premi\x20il\x20</tspan>\x20<tspan\x20x=\x22176.214\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-weight=\x22600\x22>tasto\x20verde\x20</tspan>\x20<tspan\x20x=\x22383.249\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Bold,\x20Public\x20Sans\x22\x20font-weight=\x22bold\x22>\x20</tspan>\x20<tspan\x20x=\x22393.969\x22\x20y=\x2259.22\x22\x20fill=\x22#FFF\x22>per\x20cambiare\x20l’Edizione\x20locale\x20del\x20TGR</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20stroke=\x22#009257\x22\x20stroke-width=\x222\x22\x20transform=\x22translate(-22.474\x20-6.22)\x20translate(339.474\x2036.22)\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2228\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#009257\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<rect\x20width=\x2240\x22\x20height=\x2225\x22\x20x=\x221\x22\x20y=\x221\x22\x20fill=\x22#00E780\x22\x20rx=\x226\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#34E98E\x22\x20d=\x22M878.878\x2065.878H990.999V177.999H878.878z\x22\x20transform=\x22translate(-963\x20-952)\x20translate(963\x20952)\x20rotate(65\x20934.938\x20121.938)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00B56C\x22\x20d=\x22M906.938\x2093.938H962.938V149.938H906.938z\x22\x20transform=\x22translate(-963\x20-952)\x20translate(963\x20952)\x20rotate(45\x20934.938\x20121.938)\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>' + '\x20\x20\x20\x20</g>' + '</svg>';
        $Widget['call'](this, _0x4dcad6),
        this['_className'] = 'BannerSceltaTGR',
        this['_bounds'] = {
            'left': 0x3c0,
            'top': 0x3b8,
            'width': 0x3bd,
            'height': 0x80
        };
    }
    return _0xc8dbb6['prototype'] = Object['create']($Widget['prototype']),
    _0xc8dbb6['prototype']['constructor'] = _0xc8dbb6,
    _0xc8dbb6;
}()
  , $BannerCaricamento = function() {
    function _0x16df29() {
        var _0x2951b6 = '<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x22309\x22\x20height=\x22128\x22\x20viewBox=\x220\x200\x20279\x20128\x22>' + '\x20\x20\x20\x20<defs>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x223qp69ujf5a\x22\x20x1=\x22100%\x22\x20x2=\x220%\x22\x20y1=\x2250%\x22\x20y2=\x2250%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#000063\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#000098\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x221mp2zr6y1b\x22\x20x1=\x220%\x22\x20x2=\x2252.694%\x22\x20y1=\x220%\x22\x20y2=\x2252.643%\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220%\x22\x20stop-color=\x22#FFF\x22\x20stop-opacity=\x22.9\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x22100%\x22\x20stop-color=\x22#FFF\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>' + '\x20\x20\x20\x20</defs>' + '\x20\x20\x20\x20<g\x20fill=\x22red\x22\x20fill-rule=\x22evenodd\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#3qp69ujf5a)\x22\x20d=\x22M29.5\x2030\x20H249\x20V98\x20H28.5\x20z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<text\x20fill=\x22#FFF\x22\x20font-family=\x22PublicSans-Regular,\x20Public\x20Sans\x22\x20font-size=\x2230\x22\x20font-weight=\x22400\x22\x20letter-spacing=\x22-1\x22>' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x2276.26\x22\x20y=\x2270.39\x22>attendere</tspan>' + '\x20\x20\x20\x20\x20\x20\x20\x20</text>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#1mp2zr6y1b)\x22\x20d=\x22M249\x2098\x20H279\x20V128\x20H249\x20z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20fill-opacity=\x22.9\x22\x20d=\x22M229\x2030\x20H249\x20V50\x20H229\x20z\x22/>' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#2323F4\x22\x20d=\x22M0\x200H30V30H0z\x22/>' + '\x20\x20\x20\x20</g>' + '</svg>';
        $Widget['call'](this, _0x2951b6),
        this['_className'] = 'BannerCaricamento',
        this['_visible'] = ![],
        this['_bounds'] = {
            'left': 0x2da,
            'top': 0x3b8,
            'width': 459.1,
            'height': 0x80
        };
    }
    return _0x16df29['prototype'] = Object['create']($Widget['prototype']),
    _0x16df29['prototype']['constructor'] = _0x16df29,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x16df29()),
            this['instance'];
        }
    };
}()
  , $BannerReaStreaming = function() {
    var _0x478472 = 0x39a;
    function _0x3b1307() {
        $Widget['call'](this),
        this['_className'] = 'BannerReaStreaming',
        this['_bounds'] = {
            'left': 0x4da,
            'top': _0x478472,
            'width': 0x2a7,
            'height': 0x9e
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x17b522 = '<svg\x20id=\x22Livello_1\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20viewBox=\x220\x200\x20678.07\x20158\x22><defs><style>.cls-1{fill:url(#Sfumatura_senza_nome);}.cls-1,.cls-2,.cls-3,.cls-4{fill-rule:evenodd;}.cls-5{fill:#fff;}.cls-2{fill:#2323f4;}.cls-3{fill:rgba(35,35,244,.9);}.cls-4{fill:url(#Sfumatura_senza_nome_2);}</style><linearGradient\x20id=\x22Sfumatura_senza_nome\x22\x20x1=\x22-617.98\x22\x20y1=\x22614.27\x22\x20x2=\x22-618.98\x22\x20y2=\x22614.27\x22\x20gradientTransform=\x22translate(376989\x2054130)\x20scale(609\x20-88)\x22\x20gradientUnits=\x22userSpaceOnUse\x22><stop\x20offset=\x220\x22\x20stop-color=\x22#000063\x22/><stop\x20offset=\x221\x22\x20stop-color=\x22#000098\x22/></linearGradient><linearGradient\x20id=\x22Sfumatura_senza_nome_2\x22\x20x1=\x22-604.5\x22\x20y1=\x22608.5\x22\x20x2=\x22-603.97\x22\x20y2=\x22607.97\x22\x20gradientTransform=\x22translate(24818.07\x2024458)\x20scale(40\x20-40)\x22\x20gradientUnits=\x22userSpaceOnUse\x22><stop\x20offset=\x220\x22\x20stop-color=\x22#fff\x22\x20stop-opacity=\x22.9\x22/><stop\x20offset=\x221\x22\x20stop-color=\x22#fff\x22/></linearGradient></defs><path\x20class=\x22cls-1\x22\x20d=\x22M29,30H638V118H29V30Z\x22/><path\x20class=\x22cls-4\x22\x20d=\x22M638.07,118h40v40h-40v-40Z\x22/><path\x20class=\x22cls-3\x22\x20d=\x22M608,30h30v30h-30V30Z\x22/><path\x20class=\x22cls-2\x22\x20d=\x22M0,0H29V30H0V0Z\x22/><g><path\x20class=\x22cls-5\x22\x20d=\x22M78.39,85.63v-26.03h9.58c1.9,0,3.59,.33,5.09,.98,1.5,.65,2.69,1.62,3.56,2.89,.87,1.27,1.3,2.83,1.3,4.66,0,1.73-.38,3.2-1.15,4.43-.77,1.22-1.84,2.16-3.23,2.81-1.39,.65-3.02,.97-4.89,.97h-4.97v9.29h-5.29Zm5.24-13.36h4.88c1.32,0,2.4-.42,3.24-1.27s1.26-1.89,1.26-3.14-.44-2.32-1.33-3.09c-.89-.76-1.97-1.14-3.24-1.14h-4.81v8.64Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M99.67,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49,.55-.71,1.21-1.27,1.99-1.67,.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.91-.05-2.65,.09s-1.33,.39-1.78,.74c-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M120.64,85.99c-1.82,0-3.41-.39-4.76-1.17s-2.39-1.88-3.13-3.31c-.74-1.43-1.11-3.12-1.11-5.08s.37-3.67,1.11-5.13c.74-1.46,1.78-2.6,3.13-3.42,1.35-.82,2.94-1.22,4.78-1.22s3.43,.4,4.77,1.2c1.34,.8,2.38,1.93,3.11,3.39s1.1,3.19,1.1,5.18c0,1.87-.36,3.53-1.07,4.96-.71,1.43-1.74,2.56-3.08,3.38-1.34,.82-2.96,1.22-4.85,1.22Zm.02-3.91c.92,0,1.67-.27,2.23-.81,.56-.54,.97-1.25,1.23-2.13,.26-.88,.39-1.85,.39-2.89,0-.98-.12-1.91-.35-2.79-.23-.88-.63-1.58-1.2-2.12s-1.33-.81-2.3-.81-1.67,.26-2.24,.77c-.57,.51-.99,1.2-1.25,2.07-.26,.87-.4,1.83-.4,2.89,0,.97,.12,1.91,.36,2.8,.24,.89,.64,1.62,1.21,2.19s1.34,.85,2.32,.85Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M139.95,91.79c-3.31,0-5.83-.42-7.55-1.26-1.72-.84-2.58-1.94-2.58-3.31,0-.64,.17-1.17,.5-1.6,.34-.43,.73-.78,1.18-1.04,.45-.26,.86-.46,1.24-.59s.61-.23,.69-.28c-.19-.11-.47-.27-.83-.48-.36-.21-.69-.5-1-.86-.31-.37-.46-.84-.46-1.43,0-.66,.31-1.27,.95-1.84,.63-.56,1.59-.95,2.87-1.17-1.22-.58-2.15-1.36-2.79-2.34-.64-.98-.95-1.99-.95-3.02,0-1.22,.38-2.27,1.15-3.15s1.81-1.54,3.14-2c1.33-.46,2.83-.68,4.51-.68,1.28,0,2.33,.13,3.15,.4,.82,.27,1.57,.62,2.27,1.05,.28-.11,.64-.25,1.1-.42,.46-.17,.95-.37,1.48-.58,.53-.21,1.04-.42,1.55-.63s.95-.4,1.35-.57l-.02,4.07-3.22,.52c.13,.32,.23,.67,.31,1.04,.07,.37,.11,.68,.11,.92,0,1.08-.31,2.09-.94,3.02s-1.57,1.69-2.83,2.27-2.81,.86-4.65,.86c-.23,0-.53,0-.91-.02-.38-.01-.69-.03-.93-.05-.71,.04-1.19,.13-1.46,.27-.26,.14-.4,.31-.4,.5,0,.29,.27,.48,.81,.57,.54,.09,1.36,.17,2.45,.24,.38,.02,.92,.05,1.6,.09,.68,.04,1.44,.08,2.27,.14,2.28,.16,3.98,.72,5.1,1.68,1.12,.97,1.68,2.18,1.68,3.65,0,1.74-.83,3.18-2.48,4.31s-4.14,1.7-7.46,1.7Zm.85-2.93c1.46,0,2.51-.18,3.13-.54,.62-.36,.94-.88,.94-1.55,0-.56-.24-1.02-.72-1.38-.48-.35-1.18-.56-2.11-.62l-4.27-.29c-.55-.02-1.04,.06-1.47,.25-.43,.19-.76,.46-.99,.79-.23,.34-.35,.7-.35,1.08,0,.78,.47,1.35,1.42,1.71,.95,.36,2.42,.54,4.41,.54Zm-.99-13.09c1,0,1.8-.27,2.4-.82,.61-.55,.91-1.29,.91-2.22s-.3-1.75-.91-2.34c-.61-.59-1.41-.88-2.4-.88s-1.79,.29-2.4,.88c-.62,.59-.93,1.37-.93,2.34s.3,1.66,.89,2.21c.59,.55,1.41,.83,2.44,.83Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M152.39,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49,.55-.71,1.21-1.27,1.99-1.67,.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.91-.05-2.65,.09s-1.33,.39-1.78,.74c-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M170.66,85.99c-1.19,0-2.26-.22-3.2-.67-.95-.44-1.7-1.09-2.25-1.94-.55-.85-.83-1.87-.83-3.09,0-2.04,.76-3.59,2.29-4.65s3.93-1.61,7.22-1.65l2.32-.04v-1.12c0-.85-.25-1.51-.75-1.97s-1.27-.69-2.31-.67c-.77,.01-1.5,.19-2.19,.54-.69,.35-1.16,.95-1.41,1.82h-4.37c.07-1.34,.46-2.45,1.17-3.32,.71-.87,1.67-1.52,2.89-1.94,1.22-.43,2.6-.64,4.15-.64,1.91,0,3.44,.24,4.59,.71,1.15,.47,1.99,1.15,2.5,2.03,.52,.88,.77,1.93,.77,3.14v13.09h-4.39l-.43-3.2c-.64,1.34-1.43,2.27-2.39,2.79-.95,.52-2.08,.77-3.38,.77Zm1.76-3.46c.48,0,.94-.09,1.4-.26,.45-.17,.85-.41,1.21-.7,.35-.29,.64-.63,.85-1,.22-.37,.32-.76,.32-1.15v-2.75l-1.89,.04c-.88,.01-1.69,.12-2.45,.32-.76,.2-1.37,.52-1.83,.96s-.69,1.04-.69,1.8c0,.86,.3,1.54,.9,2.02,.6,.49,1.33,.73,2.18,.73Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M184.36,85.63v-18.61h5.15v2.63c.56-.82,1.32-1.52,2.28-2.11,.95-.59,2.16-.88,3.61-.88,.64,0,1.28,.11,1.94,.34,.66,.23,1.28,.56,1.86,1s1.05,.99,1.41,1.65c.6-.85,1.39-1.56,2.37-2.13,.98-.57,2.07-.85,3.27-.85,.7,0,1.4,.11,2.11,.34s1.37,.6,1.97,1.12c.6,.52,1.08,1.2,1.45,2.06,.37,.86,.55,1.92,.55,3.18v12.28h-5.26v-11.63c0-.74-.15-1.34-.44-1.79-.29-.45-.67-.77-1.12-.97-.45-.2-.93-.3-1.43-.3-.47,0-.94,.09-1.42,.28-.48,.19-.89,.48-1.22,.89-.34,.41-.5,.94-.5,1.6v11.92h-5.24v-12.1c0-.56-.15-1.04-.45-1.42-.3-.38-.68-.67-1.12-.87-.45-.2-.91-.3-1.38-.3s-.96,.1-1.44,.3c-.48,.2-.88,.5-1.21,.92-.32,.41-.49,.93-.49,1.56v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M215.05,85.63v-18.61h5.15v2.63c.56-.82,1.32-1.52,2.28-2.11,.95-.59,2.16-.88,3.61-.88,.64,0,1.28,.11,1.94,.34,.66,.23,1.28,.56,1.86,1s1.05,.99,1.41,1.65c.6-.85,1.39-1.56,2.37-2.13,.98-.57,2.07-.85,3.27-.85,.7,0,1.4,.11,2.11,.34s1.37,.6,1.97,1.12c.6,.52,1.08,1.2,1.45,2.06,.37,.86,.55,1.92,.55,3.18v12.28h-5.26v-11.63c0-.74-.15-1.34-.44-1.79-.29-.45-.67-.77-1.12-.97-.45-.2-.93-.3-1.43-.3-.47,0-.94,.09-1.42,.28-.48,.19-.89,.48-1.22,.89-.34,.41-.5,.94-.5,1.6v11.92h-5.24v-12.1c0-.56-.15-1.04-.45-1.42-.3-.38-.68-.67-1.12-.87-.45-.2-.91-.3-1.38-.3s-.96,.1-1.44,.3c-.48,.2-.88,.5-1.21,.92-.32,.41-.49,.93-.49,1.56v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M251.01,85.99c-1.19,0-2.26-.22-3.2-.67-.95-.44-1.7-1.09-2.25-1.94-.55-.85-.83-1.87-.83-3.09,0-2.04,.76-3.59,2.29-4.65s3.93-1.61,7.22-1.65l2.32-.04v-1.12c0-.85-.25-1.51-.75-1.97s-1.27-.69-2.31-.67c-.77,.01-1.5,.19-2.19,.54-.69,.35-1.16,.95-1.41,1.82h-4.37c.07-1.34,.46-2.45,1.17-3.32,.71-.87,1.67-1.52,2.89-1.94,1.22-.43,2.6-.64,4.15-.64,1.91,0,3.44,.24,4.59,.71,1.15,.47,1.99,1.15,2.5,2.03,.52,.88,.77,1.93,.77,3.14v13.09h-4.39l-.43-3.2c-.64,1.34-1.43,2.27-2.39,2.79-.95,.52-2.08,.77-3.38,.77Zm1.76-3.46c.48,0,.94-.09,1.4-.26,.45-.17,.85-.41,1.21-.7,.35-.29,.64-.63,.85-1,.22-.37,.32-.76,.32-1.15v-2.75l-1.89,.04c-.88,.01-1.69,.12-2.45,.32-.76,.2-1.37,.52-1.83,.96s-.69,1.04-.69,1.8c0,.86,.3,1.54,.9,2.02,.6,.49,1.33,.73,2.18,.73Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M270.79,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49,.55-.71,1.21-1.27,1.99-1.67,.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.91-.05-2.65,.09s-1.33,.39-1.78,.74c-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M289.22,59.62v4.73h-5.11v-4.73h5.11Zm-.05,7.4v18.61h-5.02v-18.61h5.02Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M300.37,66.66c1.56,0,2.91,.32,4.04,.95,1.13,.64,2.03,1.49,2.68,2.57,.65,1.08,1.03,2.29,1.12,3.62h-4.37c-.08-.49-.26-.98-.52-1.47-.26-.49-.64-.89-1.12-1.21-.48-.32-1.08-.48-1.8-.48-1.22,0-2.22,.47-2.98,1.41-.76,.94-1.14,2.37-1.14,4.29,0,1.81,.37,3.25,1.12,4.31,.74,1.06,1.78,1.59,3.11,1.59,.71,0,1.3-.17,1.77-.52,.47-.35,.84-.76,1.11-1.25,.26-.49,.43-.94,.5-1.36h4.27c-.08,1.28-.46,2.44-1.12,3.48s-1.56,1.86-2.69,2.47c-1.13,.61-2.46,.91-3.99,.91-1.73,0-3.27-.38-4.63-1.15-1.36-.77-2.42-1.87-3.2-3.3s-1.16-3.15-1.16-5.14,.37-3.61,1.12-5.08c.74-1.46,1.79-2.61,3.14-3.43,1.35-.82,2.92-1.23,4.73-1.23Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M314.6,77.53c-.01,.95,.14,1.77,.45,2.47,.31,.7,.77,1.24,1.36,1.62,.59,.38,1.31,.57,2.15,.57,.9,0,1.69-.19,2.37-.58,.68-.38,1.15-1.01,1.41-1.89h4.73c-.2,1.32-.73,2.45-1.57,3.38-.85,.94-1.87,1.65-3.07,2.14-1.2,.49-2.45,.74-3.74,.74-1.84,0-3.45-.39-4.85-1.16-1.4-.77-2.49-1.87-3.27-3.29-.78-1.42-1.17-3.08-1.17-5s.35-3.54,1.06-5.03c.71-1.49,1.74-2.68,3.09-3.55s2.97-1.31,4.87-1.31,3.49,.4,4.78,1.2c1.29,.8,2.26,1.91,2.92,3.33,.65,1.42,.98,3.06,.98,4.92v1.42h-12.49Zm-.02-3.13h7.6c0-.74-.14-1.43-.41-2.05-.28-.62-.69-1.12-1.25-1.48-.56-.36-1.26-.54-2.1-.54s-1.51,.19-2.08,.58c-.57,.39-1.01,.9-1.31,1.52s-.45,1.28-.45,1.96Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M344.46,67.02l-6.98,18.61h-3.8l-7-18.61h4.75l4.07,11.86h.14l4.01-11.86h4.81Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M352.49,85.99c-.86,0-1.71-.13-2.55-.4-.83-.26-1.59-.65-2.28-1.17-.68-.52-1.23-1.15-1.65-1.91-.41-.76-.62-1.63-.62-2.63v-12.87h5.26v12.2c0,.86,.28,1.57,.85,2.12,.56,.55,1.39,.83,2.48,.83,1.03,0,1.85-.27,2.46-.8,.61-.53,.91-1.28,.91-2.24v-12.11h5.2v18.61h-3.96l-.61-3.69c-.21,1.09-.62,1.93-1.21,2.51s-1.27,.98-2.03,1.21c-.76,.22-1.51,.33-2.24,.33Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M376.61,70.67h-4.14l.04,9.92c0,.46,.06,.79,.17,1.02,.11,.22,.29,.37,.54,.43,.25,.07,.56,.1,.94,.1h2.5v3.24c-.24,.11-.61,.21-1.12,.31-.51,.1-1.22,.14-2.13,.14-1.63,0-2.89-.21-3.79-.63-.89-.42-1.51-1.01-1.86-1.76-.35-.76-.52-1.63-.52-2.63v-10.13h-3.02v-3.65h3.2l1.31-5.62h3.74v5.6h4.14v3.67Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M386.31,85.99c-1.82,0-3.41-.39-4.76-1.17-1.35-.78-2.39-1.88-3.13-3.31-.74-1.43-1.11-3.12-1.11-5.08s.37-3.67,1.11-5.13c.74-1.46,1.78-2.6,3.13-3.42,1.35-.82,2.94-1.22,4.78-1.22s3.43,.4,4.77,1.2c1.34,.8,2.38,1.93,3.11,3.39,.73,1.46,1.1,3.19,1.1,5.18,0,1.87-.36,3.53-1.07,4.96-.71,1.43-1.74,2.56-3.08,3.38-1.34,.82-2.96,1.22-4.85,1.22Zm.02-3.91c.92,0,1.67-.27,2.23-.81,.56-.54,.97-1.25,1.23-2.13,.26-.88,.39-1.85,.39-2.89,0-.98-.12-1.91-.35-2.79-.23-.88-.63-1.58-1.2-2.12-.56-.54-1.33-.81-2.3-.81s-1.67,.26-2.24,.77c-.57,.51-.99,1.2-1.25,2.07-.26,.87-.4,1.83-.4,2.89,0,.97,.12,1.91,.36,2.8,.24,.89,.64,1.62,1.21,2.19,.56,.56,1.34,.85,2.32,.85Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M419.13,67.02l-6.98,18.61h-3.8l-7-18.61h4.75l4.07,11.86h.14l4.01-11.86h4.81Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M425.64,59.62v4.73h-5.11v-4.73h5.11Zm-.05,7.4v18.61h-5.02v-18.61h5.02Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M434.21,85.99c-1.19,0-2.26-.22-3.2-.67-.95-.44-1.7-1.09-2.25-1.94-.55-.85-.83-1.87-.83-3.09,0-2.04,.76-3.59,2.29-4.65,1.52-1.06,3.93-1.61,7.22-1.65l2.32-.04v-1.12c0-.85-.25-1.51-.75-1.97-.5-.46-1.27-.69-2.31-.67-.77,.01-1.5,.19-2.19,.54-.69,.35-1.16,.95-1.41,1.82h-4.37c.07-1.34,.46-2.45,1.17-3.32,.71-.87,1.67-1.52,2.89-1.94,1.22-.43,2.6-.64,4.15-.64,1.91,0,3.44,.24,4.59,.71,1.15,.47,1.99,1.15,2.5,2.03s.77,1.93,.77,3.14v13.09h-4.39l-.43-3.2c-.64,1.34-1.43,2.27-2.38,2.79-.95,.52-2.08,.77-3.38,.77Zm1.76-3.46c.48,0,.95-.09,1.39-.26,.45-.17,.85-.41,1.21-.7,.35-.29,.64-.63,.86-1s.32-.76,.32-1.15v-2.75l-1.89,.04c-.88,.01-1.69,.12-2.45,.32-.76,.2-1.37,.52-1.83,.96s-.69,1.04-.69,1.8c0,.86,.3,1.54,.9,2.02,.6,.49,1.33,.73,2.18,.73Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M459.34,59.62v4.73h-5.11v-4.73h5.11Zm-.05,7.4v18.61h-5.02v-18.61h5.02Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M462.61,85.63v-18.61h5.17v2.63c.29-.46,.66-.9,1.12-1.32,.46-.43,1.05-.78,1.75-1.05s1.55-.41,2.52-.41c1.14,0,2.21,.22,3.19,.67,.99,.44,1.79,1.14,2.4,2.1,.61,.95,.92,2.2,.92,3.74v12.28h-5.26v-11.63c0-1.01-.3-1.76-.9-2.27-.6-.5-1.33-.76-2.2-.76-.58,0-1.13,.1-1.67,.31-.53,.2-.97,.51-1.31,.92-.34,.41-.5,.91-.5,1.51v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M492.92,70.67h-4.14l.04,9.92c0,.46,.06,.79,.17,1.02,.11,.22,.29,.37,.54,.43,.25,.07,.56,.1,.94,.1h2.5v3.24c-.24,.11-.61,.21-1.12,.31-.51,.1-1.22,.14-2.13,.14-1.63,0-2.89-.21-3.79-.63-.89-.42-1.51-1.01-1.86-1.76-.35-.76-.52-1.63-.52-2.63v-10.13h-3.02v-3.65h3.2l1.31-5.62h3.74v5.6h4.14v3.67Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M498.96,77.53c-.01,.95,.14,1.77,.45,2.47,.31,.7,.77,1.24,1.36,1.62s1.31,.57,2.15,.57c.9,0,1.69-.19,2.37-.58,.68-.38,1.15-1.01,1.41-1.89h4.73c-.2,1.32-.73,2.45-1.58,3.38-.85,.94-1.87,1.65-3.07,2.14-1.2,.49-2.45,.74-3.74,.74-1.84,0-3.45-.39-4.85-1.16-1.4-.77-2.49-1.87-3.27-3.29s-1.17-3.08-1.17-5,.35-3.54,1.06-5.03,1.74-2.68,3.09-3.55c1.35-.87,2.97-1.31,4.87-1.31s3.49,.4,4.78,1.2,2.26,1.91,2.92,3.33c.65,1.42,.98,3.06,.98,4.92v1.42h-12.49Zm-.02-3.13h7.6c0-.74-.14-1.43-.41-2.05-.28-.62-.69-1.12-1.25-1.48-.56-.36-1.26-.54-2.1-.54s-1.51,.19-2.08,.58c-.57,.39-1,.9-1.3,1.52s-.45,1.28-.45,1.96Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M513.55,85.63v-18.61h5.06v4.41c.3-.95,.72-1.78,1.27-2.49s1.21-1.27,1.99-1.67c.78-.4,1.66-.6,2.65-.6,.17,0,.33,0,.48,.03,.15,.02,.26,.04,.33,.08v5c-.11-.05-.24-.08-.39-.09-.15-.01-.29-.02-.4-.04-1.03-.08-1.92-.05-2.65,.09-.73,.14-1.33,.39-1.78,.74-.46,.35-.79,.77-.99,1.28s-.31,1.07-.31,1.69v10.19h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M526.64,85.63v-18.61h5.17v2.63c.29-.46,.66-.9,1.12-1.32,.46-.43,1.05-.78,1.75-1.05s1.55-.41,2.52-.41c1.14,0,2.21,.22,3.19,.67,.99,.44,1.79,1.14,2.4,2.1,.61,.95,.92,2.2,.92,3.74v12.28h-5.26v-11.63c0-1.01-.3-1.76-.9-2.27-.6-.5-1.33-.76-2.2-.76-.58,0-1.13,.1-1.67,.31-.53,.2-.97,.51-1.31,.92-.34,.41-.5,.91-.5,1.51v11.92h-5.26Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M550.76,77.53c-.01,.95,.14,1.77,.45,2.47,.31,.7,.77,1.24,1.36,1.62s1.31,.57,2.15,.57c.9,0,1.69-.19,2.37-.58,.68-.38,1.15-1.01,1.41-1.89h4.73c-.2,1.32-.73,2.45-1.58,3.38-.85,.94-1.87,1.65-3.07,2.14-1.2,.49-2.45,.74-3.74,.74-1.84,0-3.45-.39-4.85-1.16-1.4-.77-2.49-1.87-3.27-3.29s-1.17-3.08-1.17-5,.35-3.54,1.06-5.03,1.74-2.68,3.09-3.55c1.35-.87,2.97-1.31,4.87-1.31s3.49,.4,4.78,1.2,2.26,1.91,2.92,3.33c.65,1.42,.98,3.06,.98,4.92v1.42h-12.49Zm-.02-3.13h7.6c0-.74-.14-1.43-.41-2.05-.28-.62-.69-1.12-1.25-1.48-.56-.36-1.26-.54-2.1-.54s-1.51,.19-2.08,.58c-.57,.39-1,.9-1.3,1.52s-.45,1.28-.45,1.96Z\x22/><path\x20class=\x22cls-5\x22\x20d=\x22M576.12,70.67h-4.14l.04,9.92c0,.46,.06,.79,.17,1.02,.11,.22,.29,.37,.54,.43,.25,.07,.56,.1,.94,.1h2.5v3.24c-.24,.11-.61,.21-1.12,.31-.51,.1-1.22,.14-2.13,.14-1.63,0-2.89-.21-3.79-.63-.89-.42-1.51-1.01-1.86-1.76-.35-.76-.52-1.63-.52-2.63v-10.13h-3.02v-3.65h3.2l1.31-5.62h3.74v5.6h4.14v3.67Z\x22/></g></svg>'
          , _0x4fac44 = new $Widget(_0x17b522);
        this['append'](_0x4fac44);
        var _0x1caff5 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x1caff5 && (_0x1caff5(),
            _0x1caff5 = undefined);
        }, ![]);
        var _0x2fe26f = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x40570e) {
                _0x40570e !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0x40570e ? 'bannerReaStreamingOn' : 'bannerReaStreamingOff'),
                this['_top'] = _0x40570e ? _0x478472 : _0x478472 + 0x20,
                this['_node']['style']['opacity'] = _0x40570e ? 0x1 : 0x0,
                _0x40570e ? _0x2fe26f = setTimeout(function() {
                    this['_visible'] = ![];
                }
                ['bind'](this), 0x1388) : clearTimeout(_0x2fe26f));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0xb2c369, _0x1abc9b) {
            if (_0x1caff5)
                _0x1caff5();
            if (TRANSITION)
                _0x1caff5 = _0x1abc9b,
                this['_visible'] = _0xb2c369;
            else {
                if (_0x1abc9b)
                    _0x1abc9b();
            }
        }
        ;
    }
    return _0x3b1307['prototype'] = Object['create']($Widget['prototype']),
    _0x3b1307['prototype']['constructor'] = _0x3b1307,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x3b1307()),
            this['instance'];
        }
    };
}()
  , $BannerReaBroadcast = function() {
    function _0x441c39() {
        $Widget['call'](this),
        this['_className'] = 'BannerReaBroadcast',
        this['_bounds'] = {
            'left': 0x49e,
            'top': 0x320,
            'width': 0x2e1,
            'height': 0xf4
        },
        this['_node']['style']['opacity'] = 0x0;
        var _0x18523b = '<svg\x20width=\x22791\x22\x20height=\x22373\x22\x20viewBox=\x220\x200\x20791\x20373\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a' + '\x20\x20\x20\x20<defs>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20x1=\x2213.323%\x22\x20y1=\x2250%\x22\x20x2=\x22100%\x22\x20y2=\x2250%\x22\x20id=\x22brlk84yqoa\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20stop-color=\x22#003831\x22\x20offset=\x220%\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20stop-color=\x22#002C27\x22\x20offset=\x22100%\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a' + '\x20\x20\x20\x20</defs>\x0a' + '\x20\x20\x20\x20<g\x20fill=\x22none\x22\x20fill-rule=\x22evenodd\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22url(#brlk84yqoa)\x22\x20d=\x22M100\x200h599v264H100z\x22\x20transform=\x22translate(.22)\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00EE8E\x22\x20d=\x22M.22\x200h100v100H.22z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<g\x20fill=\x22#003831\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M50.22\x2040a5\x205\x200\x201\x200\x200-10\x205\x205\x200\x200\x200\x200\x2010z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M50.22\x2071c-2.143\x200-3.892-1.558-3.996-3.516l-.005-.185V49.701c0-2.044\x201.791-3.701\x204-3.701\x202.142\x200\x203.891\x201.558\x203.995\x203.516l.005.185v17.598c0\x202.044-1.79\x203.701-4\x203.701z\x22\x20fill-rule=\x22nonzero\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<text\x20font-family=\x22PublicSans-ExtraBold,\x20Public\x20Sans\x22\x20font-size=\x2236\x22\x20font-weight=\x22700\x22\x20letter-spacing=\x22-1.6\x22\x20fill=\x22#FFF\x22\x20transform=\x22translate(.22)\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x22140\x22\x20y=\x2274\x22>Sei\x20tornato\x20alla\x20diretta\x20</tspan>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tspan\x20x=\x22140\x22\x20y=\x22120\x22>predefinita</tspan>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</text>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20<g>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#34E98E\x22\x20d=\x22m743.054\x20223.439\x2047.384\x20101.616-101.616\x2047.384-47.384-101.616z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22#00B56C\x22\x20d=\x22m715.938\x20258.34\x2039.598\x2039.598-39.598\x2039.598-39.598-39.598z\x22/>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a' + '\x20\x20\x20\x20</g>\x0a' + '</svg>'
          , _0x41da0c = new $Widget(_0x18523b);
        this['append'](_0x41da0c);
        var _0x5a2b44 = undefined;
        this['_node']['addEventListener']('animationend', function() {
            _0x5a2b44 && (_0x5a2b44(),
            _0x5a2b44 = undefined);
        }, ![]);
        var _0x4f6ea0 = undefined;
        Object['defineProperty'](this, '_visible', {
            'get': function() {
                return this['_node']['style']['opacity'] > 0x0;
            },
            'set': function(_0x450d78) {
                _0x450d78 !== this['_visible'] && (TRANSITION && (this['_node']['className'] = '',
                this['_node']['offsetWidth'],
                this['_node']['className'] = _0x450d78 ? 'bannerReaStreamingOn' : 'bannerReaStreamingOff'),
                this['_top'] = _0x450d78 ? 0x320 : 0x340,
                this['_node']['style']['opacity'] = _0x450d78 ? 0x1 : 0x0,
                _0x450d78 ? _0x4f6ea0 = setTimeout(function() {
                    this['_visible'] = ![];
                }
                ['bind'](this), 0x1388) : clearTimeout(_0x4f6ea0));
            },
            'enumerable': !![],
            'configurable': !![]
        }),
        this['visibleTrigger'] = function(_0x4405c2, _0x25dc4b) {
            if (_0x5a2b44)
                _0x5a2b44();
            if (TRANSITION)
                _0x5a2b44 = _0x25dc4b,
                this['_visible'] = _0x4405c2;
            else {
                if (_0x25dc4b)
                    _0x25dc4b();
            }
        }
        ;
    }
    return _0x441c39['prototype'] = Object['create']($Widget['prototype']),
    _0x441c39['prototype']['constructor'] = _0x441c39,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x441c39()),
            this['instance'];
        }
    };
}()
  , $SimpleBanner = function() {
    function _0x5c26d5() {
        var _0x33f391 = '<div><div\x20style=\x22position:\x20relative;\x20left:\x2050%;\x20transform:\x20translateX(-50%);\x20width:\x20330px;\x20height:\x20128px;\x22>' + '<div\x20style=\x22position:\x20absolute;\x20width:\x2032px;\x20height:\x2032px;\x20background-color:\x20#2323F4\x22></div>' + '<div\x20style=\x22position:\x20absolute;\x20top:\x2032px;\x20left:\x2032px;\x20right:\x2032px;\x20height:\x2064px;\x20background:\x20linear-gradient(to\x20left,\x20#000063,\x20#000098)\x22>' + '<div\x20style=\x22position:\x20absolute;\x20right:\x200;\x20width:\x2016px;\x20height:\x2016px;\x20background-color:\x20#2323F4\x22></div>' + '<div\x20id=\x22_010_sb_txt\x22\x20style=\x22position:\x20absolute;\x20font:\x2030px\x20PublicSans-Regular;\x20width:\x20100%;\x20min-width:\x20256px;\x20height:\x2064px;\x20line-height:\x2064px;\x20' + 'color:\x20#ffffff;\x20text-align:\x20center;\x22>...</div>' + '</div>' + '<div\x20style=\x22position:\x20absolute;\x20right:\x200;\x20bottom:\x200;\x20width:\x2032px;\x20height:\x2032px;\x20background-color:\x20#ffffff\x22></div>' + '</div></div>', _0x5da4db = {}, _0x33d878;
        $Widget['call'](this, _0x33f391),
        this['_bounds'] = {
            'left': 0x40,
            'top': 0x3b8,
            'width': 0x700,
            'height': 0x80
        };
        function _0x15c2e5() {
            var _0x1969a0 = document['getElementById']('mainFrame');
            _0x1969a0['appendChild'](this['_node']);
        }
        this['setText'] = function(_0x2bdfad) {
            _0x2bdfad = _0x2bdfad || '...';
            var _0x1ea27b = _0x5da4db[_0x2bdfad], _0x3254b8;
            !_0x1ea27b && (_0x1ea27b = _0x2bdfad['width']('30px\x20PublicSans-Regular'),
            _0x5da4db[_0x2bdfad] = _0x1ea27b),
            this['_node']['firstChild']['style']['width'] = _0x1ea27b + 0xb4 + 'px',
            _0x3254b8 = this['_node']['querySelector']('#_010_sb_txt'),
            _0x3254b8['innerHTML'] = _0x2bdfad;
        }
        ,
        this['show'] = function(_0xf50aa6, _0x317cdb, _0x31c731, _0x53c378) {
            if (!this['_parent'])
                _0x15c2e5['call'](this);
            _0x33d878 && (clearTimeout(_0x33d878),
            _0x33d878 = null),
            this['_visible'] = _0xf50aa6,
            this['setText'](_0x317cdb),
            _0xf50aa6 && (_0x33d878 = setTimeout(function() {
                this['_visible'] = ![];
                if (_0x53c378)
                    _0x53c378();
            }
            ['bind'](this), (_0x31c731 || 0x3) * 0x3e8));
        }
        ;
    }
    return _0x5c26d5['prototype'] = Object['create']($Widget['prototype']),
    _0x5c26d5['prototype']['constructor'] = _0x5c26d5,
    {
        'instance': undefined,
        'getInstance': function() {
            return !this['instance'] && (this['instance'] = new _0x5c26d5()),
            this['instance'];
        }
    };
}()
  , $Info = function() {
    function _0xc11393() {
        var _0x22e84c = undefined;
        Object['defineProperty'](this, '_name', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x22e84c;
            },
            'set': function(_0x3b1c00) {
                _0x22e84c = _0x3b1c00;
            }
        });
        var _0x36e2ee = undefined;
        Object['defineProperty'](this, '_description', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x36e2ee;
            },
            'set': function(_0x1ed816) {
                _0x36e2ee = _0x1ed816;
            }
        });
        var _0x152cfd = undefined;
        Object['defineProperty'](this, '_startTime', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x152cfd;
            },
            'set': function(_0x3c6be8) {
                _0x152cfd = _0x3c6be8;
            }
        });
        var _0x3dee97 = undefined;
        Object['defineProperty'](this, '_duration', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x3dee97;
            },
            'set': function(_0x3be77d) {
                _0x3dee97 = _0x3be77d;
            }
        }),
        Object['defineProperty'](this, '_expired', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                if (this['_startTime'] && this['_duration'])
                    return new Date()['getTime']() >= this['_startTime'] + this['_duration'];
                else
                    return !![];
            }
        });
        var _0x4582dc = undefined;
        Object['defineProperty'](this, '_imageUrl', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                return _0x4582dc;
            },
            'set': function(_0x4e64be) {
                _0x4582dc = _0x4e64be;
            }
        }),
        Object['defineProperty'](this, '_hhmmStartString', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x4b6756 = new Date(_0x152cfd)
                  , _0x23b68f = _0x4b6756['getHours']()
                  , _0x46a6ed = _0x4b6756['getMinutes']();
                return (_0x23b68f < 0xa ? '0' : '') + _0x23b68f + ':' + (_0x46a6ed < 0xa ? '0' : '') + _0x46a6ed;
            }
        }),
        Object['defineProperty'](this, '_mmDurationString', {
            'enumerable': !![],
            'configurable': !![],
            'get': function() {
                var _0x154f5a = Math['floor'](_0x3dee97 / 0x3e8 / 0x3c);
                return _0x154f5a + '\x20min';
            }
        });
    }
    return _0xc11393['prototype']['constructor'] = _0xc11393,
    _0xc11393;
}()
  , $RaiPlayEpgLoader = function() {
    function _0xb09b3e(_0x6efebe) {
        var _0x38b753 = 'https://www.raiplay.it';
        function _0x24949a(_0x2c84f0, _0x467ca2, _0x54451d) {
            var _0x37f902;
            switch (_0x2c84f0['type']) {
            case 'RaiPlay\x20Programma\x20Item':
            case 'RaiPlay\x20Raccolta\x20Item':
                _0x37f902 = new $Info(),
                _0x37f902['_position'] = _0x54451d || 0x0,
                _0x37f902['_name'] = _0x2c84f0['name'],
                _0x37f902['_description'] = '',
                _0x37f902['_pathId'] = _0x2c84f0['_path_id'],
                _0x37f902['_type'] = _0x2c84f0['_type'];
                var _0x5198a7 = _0x2c84f0['images'] && (_0x2c84f0['images']['portrait_logo'] || _0x2c84f0['images']['portrait43']);
                _0x37f902['_imageUrl'] = _0x5198a7 ? 'https://www.raiplay.it/resizegd/-x146' + _0x5198a7 : '';
                if (_0x467ca2)
                    _0x467ca2(_0x37f902);
                break;
            case 'RaiPlay\x20Video\x20Item':
                _0x37f902 = new $Info(),
                _0x37f902['_position'] = _0x2c84f0['_order'],
                _0x37f902['_name'] = _0x2c84f0['program_info'] ? _0x2c84f0['program_info']['name'] : _0x2c84f0['program_name'],
                _0x37f902['_description'] = _0x2c84f0['program_info'] ? _0x2c84f0['program_info']['vanity'] : _0x2c84f0['episode_title'],
                _0x37f902['_videoUrl'] = _0x2c84f0['video'] ? _0x2c84f0['video']['content_url'] : _0x2c84f0['video_url'],
                _0x37f902['_duration'] = _0x2c84f0['video'] ? _0x2c84f0['video']['duration'] : _0x2c84f0['video_url'],
                _0x37f902['_pathId'] = _0x2c84f0['_path_id'],
                _0x37f902['_type'] = _0x2c84f0['_type'],
                _0x37f902['_imageUrl'] = '';
                for (var _0x24ff6f = _0x2c84f0['images'], _0x9f71f0 = Object['keys'](_0x24ff6f), _0x41b529 = 0x0; _0x41b529 < _0x9f71f0['length']; _0x41b529++) {
                    if (_0x24ff6f[_0x9f71f0[_0x41b529]] !== '') {
                        _0x37f902['_imageUrl'] = 'https://www.raiplay.it/resizegd/-x146' + _0x24ff6f[_0x9f71f0[_0x41b529]];
                        break;
                    }
                }
                if (_0x467ca2)
                    _0x467ca2(_0x37f902);
                break;
            default:
                println('[RaiPlayEpgLoader2.createInfoItem]\x20Unable\x20to\x20treat\x20' + _0x2c84f0['type'] + '\x20item\x20type.\x20Skip', 'wrn');
                _0x467ca2 && _0x467ca2();
            }
        }
        function _0x40cd49(_0x505ebd, _0x5ea3df) {
            switch (_0x505ebd['type']) {
            case 'RaiPlay\x20Slider\x20Block':
                function _0x3c6aec() {
                    if (RAIPLAY_EPG['_infoArray'])
                        RAIPLAY_EPG['_infoArray']['sort'](function(_0x12bc24, _0x348660) {
                            return _0x12bc24['_position'] - _0x348660['_position'];
                        });
                    else
                        RAIPLAY_EPG['_infoArray'] = undefined;
                    RAIPLAY_EPG['_name'] = _0x505ebd['name'];
                    if (_0x5ea3df)
                        _0x5ea3df();
                }
                var _0x6d735a = new $PendingTaskSentry(_0x505ebd['contents']['length'],[_0x3c6aec],'raiPlayEpg');
                for (var _0x565718 = 0x0; _0x565718 < _0x505ebd['contents']['length']; _0x565718++) {
                    _0x505ebd['contents'][_0x565718]['_order'] = _0x565718,
                    _0x505ebd['contents'][_0x565718]['_path_id'] = _0x505ebd['contents'][_0x565718]['path_id'],
                    _0x505ebd['contents'][_0x565718]['_type'] = _0x505ebd['contents'][_0x565718]['type'],
                    _0x24949a(_0x505ebd['contents'][_0x565718], function(_0xfb01f3) {
                        _0xfb01f3 && (_0xfb01f3['_description'] = _0x505ebd['name'],
                        RAIPLAY_EPG['_infoArray']['push'](_0xfb01f3)),
                        _0x6d735a['accomplishedTask']();
                    }, _0x565718);
                }
                break;
            default:
                println('RaiPlayEpgLoader2:\x20unable\x20to\x20parse\x20Block' + _0x505ebd['type'], 'err');
                break;
            }
        }
        function _0x4a37fb(_0x357a06) {
            RAIPLAY_EPG['_infoArray'] = [];
            var _0x1ffc48 = _0x38b753 + '/home/PublishingBlock-4c05b30f-e524-49db-a39a-7a1544288ac8.json?time=' + new Date()['getTime']();
            $Net['http'](_0x1ffc48)['get']({
                'resolve': function(_0x79088d) {
                    if (!_0x79088d['errorFlag']) {
                        var _0x102b02 = $MISC['jsonParse'](_0x79088d['text'], 'RaiPlayEpgLoader');
                        _0x102b02 && _0x102b02['contents'] && _0x102b02['contents']['length'] ? _0x40cd49(_0x102b02, _0x357a06) : _0x357a06();
                    } else
                        println(_0x79088d, 'err'),
                        _0x357a06 && _0x357a06();
                },
                'reject': function(_0x5986bd) {
                    println(_0x5986bd, 'err'),
                    _0x357a06 && _0x357a06();
                }
            });
        }
        _0x4a37fb(_0x6efebe);
    }
    return _0xb09b3e['prototype']['constructor'] = _0xb09b3e,
    _0xb09b3e;
}()
  , $RaiPlayEpgIgnitor = function() {
    function _0x4ddb6d(_0x5177f6) {
        RAIPLAY_EPG = {},
        new $RaiPlayEpgLoader(_0x2437fc);
        function _0x2437fc() {
            _0x5177f6();
        }
    }
    return _0x4ddb6d['prototype']['constructor'] = _0x4ddb6d,
    _0x4ddb6d;
}()
  , $TgEpgIgnitor = function() {
    function _0x3775fd(_0x46d1d8) {
        var _0x26099e = $StorageManager['getInstance']()['read'](TGR_RANKING_FILE), _0x588128;
        !_0x26099e ? (_0x588128 = {},
        $StorageManager['getInstance']()['write'](TGR_RANKING_FILE, JSON['stringify'](_0x588128))) : _0x588128 = $MISC['jsonParse'](_0x26099e, 'tgEpg[A]');
        var _0x320561 = {
            'Abruzzo': 'abruzzo',
            'Basilicata': 'basilicata',
            'Calabria': 'calabria',
            'Campania': 'campania',
            'Emilia\x20Romagna': 'emilia',
            'Friuli\x20Venezia\x20Giulia': 'friuli',
            'Lazio': 'lazio',
            'Liguria': 'liguria',
            'Lombardia': 'lombardia',
            'Marche': 'marche',
            'Molise': 'molise',
            'Piemonte': 'piemonte',
            'Puglia': 'puglia',
            'Sardegna': 'sardegna',
            'Sicilia': 'sicilia',
            'Toscana': 'toscana',
            'Trento': 'trnt',
            'Umbria': 'umbria',
            'Valle\x20d\x27Aosta': 'valleaosta',
            'Veneto': 'veneto',
            'Tagesschau': 'trntTagesschau',
            'Trail': 'trntTrail',
            'Furlanija\x20Julijska\x20krajina': 'furlanija',
            'Bolzano': 'trntBolzano'
        };
        TG_EPG = {
            'Nation': {},
            'Region': {}
        },
        TG_EPG['Region']['imageUrl'] = 'resources/images/TG/tgrThmb.png';
        function _0x3570c8(_0x567a18, _0x3fe74a) {
            if (_0x567a18['ranking'] > _0x3fe74a['ranking'])
                return -0x1;
            else {
                if (_0x3fe74a['ranking'] > _0x567a18['ranking'])
                    return 0x1;
                else
                    return _0x267d0c(_0x567a18, _0x3fe74a);
            }
        }
        function _0x267d0c(_0x535e26, _0x339deb) {
            var _0xcedeb1 = _0x535e26['sortName'] || _0x535e26['name']
              , _0x3fdf32 = _0x339deb['sortName'] || _0x339deb['name'];
            if (_0xcedeb1 > _0x3fdf32)
                return 0x1;
            else {
                if (_0x3fdf32 > _0xcedeb1)
                    return -0x1;
                else
                    return 0x0;
            }
        }
        function _0x539c4b(_0x59d948, _0x2b1952, _0x380bbe) {
            return {
                'name': _0x380bbe,
                'latest': {
                    'date': _0x59d948['latest']['date'],
                    'imageUrl': './resources/images/TG/' + _0x2b1952 + '.jpg',
                    'label': _0x59d948['latest']['label'],
                    'mediaUri': _0x59d948['latest']['mediaUri'],
                    'time': _0x59d948['latest']['time']
                }
            };
        }
        TG_EPG['Region']['update'] = function(_0x1fdc32) {
            TG_EPG['Region']['edition'] = [],
            TG_EPG['Nation']['edition'] = [];
            var _0x3decd6 = 'https://www.rainews.it/lastTg.json';
            $Net['http'](_0x3decd6)['get']({
                'resolve': function(_0x3b8d13) {
                    if (!_0x3b8d13['errorFlag']) {
                        var _0x4d1c3b = $MISC['jsonParse'](_0x3b8d13['text'], 'tgEpgLoader');
                        if (_0x4d1c3b['tg1'])
                            TG_EPG['Nation']['edition']['push'](_0x539c4b(_0x4d1c3b['tg1'], 'tg1', 'TG1'));
                        if (_0x4d1c3b['tg2'])
                            TG_EPG['Nation']['edition']['push'](_0x539c4b(_0x4d1c3b['tg2'], 'tg2', 'TG2'));
                        if (_0x4d1c3b['tg3'])
                            TG_EPG['Nation']['edition']['push'](_0x539c4b(_0x4d1c3b['tg3'], 'tg3', 'TG3'));
                        var _0x1fa102 = {
                            'Bolzano': 'Trentino\x20Alto\x20Adige\x20-\x20Bolzano',
                            'Trail': 'Trentino\x20Alto\x20Adige\x20-\x20Trail',
                            'Tagesschau': 'Trentino\x20Alto\x20Adige\x20-\x20Tagesschau',
                            'Trento': 'Trentino\x20Alto\x20Adige\x20-\x20Trento',
                            'Furlanija\x20Julijska\x20krajina': 'Friuli\x20Venezia\x20Giulia\x20-\x20TDD'
                        };
                        for (var _0x8dc1fd = 0x0, _0x3025eb; _0x8dc1fd < _0x4d1c3b['tgr']['regions']['length']; _0x8dc1fd++) {
                            _0x3025eb = {
                                'name': _0x4d1c3b['tgr']['regions'][_0x8dc1fd]['label'],
                                'latest': _0x4d1c3b['tgr']['regions'][_0x8dc1fd]['latest']
                            },
                            _0x3025eb['latest']['imageUrl'] = $DataLoader['getInstance']()['getSvgImageUrl'](_0x320561[_0x3025eb['name']]),
                            _0x3025eb['latest']['label'] = _0x3025eb['latest']['label']['replace'](/.+ - /gm, ''),
                            _0x3025eb['sortName'] = _0x1fa102[_0x3025eb['name']] ? _0x1fa102[_0x3025eb['name']] : _0x3025eb['name'];
                            var _0xe15055 = _0x3025eb['latest']['date']['split']('/');
                            _0xe15055[0x2] = parseInt(_0xe15055[0x2]),
                            _0x3025eb['latest']['date'] = _0xe15055[0x0] + '/' + _0xe15055[0x1] + '/' + _0xe15055[0x2],
                            _0x3025eb['ranking'] = _0x588128[_0x3025eb['name']] ? _0x588128[_0x3025eb['name']] : 0x0,
                            TG_EPG['Region']['edition']['push'](_0x3025eb);
                        }
                        TG_EPG['Region']['edition']['sort'](_0x3570c8);
                        var _0x4107d4 = TG_EPG['Region']['edition']['slice'](0x0, 0x2)
                          , _0x53c256 = TG_EPG['Region']['edition']['slice'](0x2);
                        _0x53c256['sort'](_0x267d0c),
                        TG_EPG['Region']['edition'] = _0x4107d4['concat'](_0x53c256);
                        if (_0x1fdc32)
                            _0x1fdc32();
                    } else {
                        println(_0x3b8d13, 'err');
                        if (_0x1fdc32)
                            _0x1fdc32();
                    }
                },
                'reject': function(_0x407aa3) {
                    println(_0x407aa3, 'err');
                    if (_0x1fdc32)
                        _0x1fdc32();
                }
            });
        }
        ,
        TG_EPG['update'] = function(_0xb70d27) {
            function _0x18cf86() {
                var _0x292e96 = new $PendingTaskSentry(0x1,[_0x3e35a],'TG_EPG\x20Update');
                TG_EPG['Region']['update'](_0x292e96['accomplishedTask']['bind'](null, 'TG_EPG.Region\x20READY'));
                function _0x3e35a() {
                    if (_0xb70d27)
                        _0xb70d27();
                }
            }
            if (!$DataLoader['getInstance']()['getSvgImageUrl']('piemonte'))
                $DataLoader['getInstance']()['fileInject']('resources/SVG1_20221130_164531.xml', _0x18cf86);
            else
                _0x18cf86();
        }
        ,
        TG_EPG['update'](_0x46d1d8);
    }
    return _0x3775fd['prototype']['constructor'] = _0x3775fd,
    _0x3775fd;
}();
