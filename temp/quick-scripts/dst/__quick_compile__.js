
(function () {
var scripts = [{"deps":{"./assets/script/PH_21/arrow":1,"./assets/script/JoyStick":2,"./assets/script/card/cardRR":4,"./assets/script/chest/ChestListener":5,"./assets/script/box/popHero":6,"./assets/script/common/PlatformBrandIcon":7,"./assets/script/house/house":10,"./assets/script/listener/treeListener":11,"./assets/script/bullet":12,"./assets/script/bar":13,"./assets/script/charMap":14,"./assets/script/effect":16,"./assets/script/anim":17,"./assets/script/btnHero":18,"./assets/script/gem":19,"./assets/script/chest":20,"./assets/script/enemy":21,"./assets/script/hand":22,"./assets/script/enemyListener":23,"./assets/script/heroListener":24,"./assets/script/laser":27,"./assets/script/status":28,"./assets/script/tree":30,"./assets/script/updateBar":31,"./assets/script/Constant":33,"./assets/script/common/AdManager":34,"./assets/script/enemy/enemySkillListener":37,"./assets/script/enemy/eventBossListener":38,"./assets/script/enemy/rangeTargetEnemy":42,"./assets/script/chest/Chest":43,"./assets/script/hero/EventHeroListener":45,"./assets/script/Game":47,"./assets/script/listener/skillListener":51,"./assets/script/Skill":15,"./assets/script/gamePlay":25,"./assets/script/kaboom":26,"./assets/script/rangeHeroListener":29,"./assets/script/PH_17/Game17":3,"./assets/script/enemy/darkOctopus":8,"./assets/script/hero/Circle":9,"./assets/script/PH_21/Game21":32,"./assets/script/enemy/chimera":35,"./assets/script/enemy/dragon":36,"./assets/script/enemy/rangeEnemyListener":39,"./assets/script/enemy/bulletEnemyListener":41,"./assets/script/enemy/giantRock":40,"./assets/script/hero/Goku":44,"./assets/script/hero/Wukong":46,"./assets/script/hero/Mako":48,"./assets/script/hero/Arthur":49,"./assets/script/hero/bulletHeroListener":50,"./assets/script/hero/hero":52},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/script/PH_21/arrow.js"},{"deps":{},"path":"preview-scripts/assets/script/JoyStick.js"},{"deps":{"../hero/hero":52},"path":"preview-scripts/assets/script/PH_17/Game17.js"},{"deps":{},"path":"preview-scripts/assets/script/card/cardRR.js"},{"deps":{},"path":"preview-scripts/assets/script/chest/ChestListener.js"},{"deps":{},"path":"preview-scripts/assets/script/box/popHero.js"},{"deps":{},"path":"preview-scripts/assets/script/common/PlatformBrandIcon.js"},{"deps":{"../enemy":21},"path":"preview-scripts/assets/script/enemy/darkOctopus.js"},{"deps":{"./hero":52},"path":"preview-scripts/assets/script/hero/Circle.js"},{"deps":{},"path":"preview-scripts/assets/script/house/house.js"},{"deps":{},"path":"preview-scripts/assets/script/listener/treeListener.js"},{"deps":{},"path":"preview-scripts/assets/script/bullet.js"},{"deps":{},"path":"preview-scripts/assets/script/bar.js"},{"deps":{},"path":"preview-scripts/assets/script/charMap.js"},{"deps":{"./enemyListener":23},"path":"preview-scripts/assets/script/Skill.js"},{"deps":{},"path":"preview-scripts/assets/script/effect.js"},{"deps":{},"path":"preview-scripts/assets/script/anim.js"},{"deps":{},"path":"preview-scripts/assets/script/btnHero.js"},{"deps":{},"path":"preview-scripts/assets/script/gem.js"},{"deps":{},"path":"preview-scripts/assets/script/chest.js"},{"deps":{},"path":"preview-scripts/assets/script/enemy.js"},{"deps":{},"path":"preview-scripts/assets/script/hand.js"},{"deps":{},"path":"preview-scripts/assets/script/enemyListener.js"},{"deps":{},"path":"preview-scripts/assets/script/heroListener.js"},{"deps":{"./hero/hero":52},"path":"preview-scripts/assets/script/gamePlay.js"},{"deps":{"./Constant":33},"path":"preview-scripts/assets/script/kaboom.js"},{"deps":{},"path":"preview-scripts/assets/script/laser.js"},{"deps":{},"path":"preview-scripts/assets/script/status.js"},{"deps":{"./hero/hero":52,"./enemyListener":23},"path":"preview-scripts/assets/script/rangeHeroListener.js"},{"deps":{},"path":"preview-scripts/assets/script/tree.js"},{"deps":{},"path":"preview-scripts/assets/script/updateBar.js"},{"deps":{"../hero/hero":52},"path":"preview-scripts/assets/script/PH_21/Game21.js"},{"deps":{},"path":"preview-scripts/assets/script/Constant.js"},{"deps":{},"path":"preview-scripts/assets/script/common/AdManager.js"},{"deps":{"../enemy":21},"path":"preview-scripts/assets/script/enemy/chimera.js"},{"deps":{"../enemy":21},"path":"preview-scripts/assets/script/enemy/dragon.js"},{"deps":{},"path":"preview-scripts/assets/script/enemy/enemySkillListener.js"},{"deps":{},"path":"preview-scripts/assets/script/enemy/eventBossListener.js"},{"deps":{"../hero/hero":52,"../enemy":21},"path":"preview-scripts/assets/script/enemy/rangeEnemyListener.js"},{"deps":{"../enemy":21},"path":"preview-scripts/assets/script/enemy/giantRock.js"},{"deps":{"../bullet":12},"path":"preview-scripts/assets/script/enemy/bulletEnemyListener.js"},{"deps":{},"path":"preview-scripts/assets/script/enemy/rangeTargetEnemy.js"},{"deps":{},"path":"preview-scripts/assets/script/chest/Chest.js"},{"deps":{"./hero":52},"path":"preview-scripts/assets/script/hero/Goku.js"},{"deps":{},"path":"preview-scripts/assets/script/hero/EventHeroListener.js"},{"deps":{"./hero":52},"path":"preview-scripts/assets/script/hero/Wukong.js"},{"deps":{},"path":"preview-scripts/assets/script/Game.js"},{"deps":{"./hero":52},"path":"preview-scripts/assets/script/hero/Mako.js"},{"deps":{"../enemy":21,"./hero":52},"path":"preview-scripts/assets/script/hero/Arthur.js"},{"deps":{"../bullet":12},"path":"preview-scripts/assets/script/hero/bulletHeroListener.js"},{"deps":{},"path":"preview-scripts/assets/script/listener/skillListener.js"},{"deps":{"../enemy":21},"path":"preview-scripts/assets/script/hero/hero.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    