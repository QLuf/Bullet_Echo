
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/Constant');
require('./assets/script/Game');
require('./assets/script/JoyStick');
require('./assets/script/PH_17/Game17');
require('./assets/script/PH_21/Game21');
require('./assets/script/PH_21/arrow');
require('./assets/script/Skill');
require('./assets/script/anim');
require('./assets/script/bar');
require('./assets/script/box/popHero');
require('./assets/script/btnHero');
require('./assets/script/bullet');
require('./assets/script/card/cardRR');
require('./assets/script/charMap');
require('./assets/script/chest');
require('./assets/script/chest/Chest');
require('./assets/script/chest/ChestListener');
require('./assets/script/common/AdManager');
require('./assets/script/common/PlatformBrandIcon');
require('./assets/script/effect');
require('./assets/script/enemy');
require('./assets/script/enemyListener');
require('./assets/script/enemy/bulletEnemyListener');
require('./assets/script/enemy/chimera');
require('./assets/script/enemy/darkOctopus');
require('./assets/script/enemy/dragon');
require('./assets/script/enemy/enemySkillListener');
require('./assets/script/enemy/eventBossListener');
require('./assets/script/enemy/giantRock');
require('./assets/script/enemy/rangeEnemyListener');
require('./assets/script/enemy/rangeTargetEnemy');
require('./assets/script/gamePlay');
require('./assets/script/gem');
require('./assets/script/hand');
require('./assets/script/heroListener');
require('./assets/script/hero/Arthur');
require('./assets/script/hero/Circle');
require('./assets/script/hero/EventHeroListener');
require('./assets/script/hero/Goku');
require('./assets/script/hero/Mako');
require('./assets/script/hero/Wukong');
require('./assets/script/hero/bulletHeroListener');
require('./assets/script/hero/hero');
require('./assets/script/house/house');
require('./assets/script/kaboom');
require('./assets/script/laser');
require('./assets/script/listener/skillListener');
require('./assets/script/listener/treeListener');
require('./assets/script/rangeHeroListener');
require('./assets/script/status');
require('./assets/script/tree');
require('./assets/script/updateBar');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();