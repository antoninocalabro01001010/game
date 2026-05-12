gdjs.Scena_32senza_32titoloCode = {};
gdjs.Scena_32senza_32titoloCode.localVariables = [];
gdjs.Scena_32senza_32titoloCode.idToCallbackMap = new Map();
gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1= [];
gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects2= [];
gdjs.Scena_32senza_32titoloCode.GDSharkObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDSharkObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDFish_95953Objects1= [];
gdjs.Scena_32senza_32titoloCode.GDFish_95953Objects2= [];
gdjs.Scena_32senza_32titoloCode.GDAlpacaObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDAlpacaObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDWhaleObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDWhaleObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDManta_9595RayObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDManta_9595RayObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDDolphinObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDDolphinObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDFish_95951Objects1= [];
gdjs.Scena_32senza_32titoloCode.GDFish_95951Objects2= [];
gdjs.Scena_32senza_32titoloCode.GDCowObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDCowObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDDeerObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDDeerObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDFoxObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDFoxObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDShibaInuObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDShibaInuObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDBullObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDBullObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDStagObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDStagObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDWolfObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDWolfObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDDonkeyObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDDonkeyObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDHuskyObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDHuskyObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDHorse_9595WhiteObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDHorse_9595WhiteObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDHorseObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDHorseObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDNewTiledSpriteObjects1= [];
gdjs.Scena_32senza_32titoloCode.GDNewTiledSpriteObjects2= [];
gdjs.Scena_32senza_32titoloCode.GDNewTiledSprite2Objects1= [];
gdjs.Scena_32senza_32titoloCode.GDNewTiledSprite2Objects2= [];


gdjs.Scena_32senza_32titoloCode.mapOfGDgdjs_9546Scena_959532senza_959532titoloCode_9546GDFish_959595952Objects1Objects = Hashtable.newFrom({"Fish_2": gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1});
gdjs.Scena_32senza_32titoloCode.mapOfGDgdjs_9546Scena_959532senza_959532titoloCode_9546GDFish_959595952Objects1Objects = Hashtable.newFrom({"Fish_2": gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1});
gdjs.Scena_32senza_32titoloCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Animali");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Animali") >= gdjs.randomInRange(3, 10);
if (isConditionTrue_0) {
gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Scena_32senza_32titoloCode.mapOfGDgdjs_9546Scena_959532senza_959532titoloCode_9546GDFish_959595952Objects1Objects, gdjs.random(1000), gdjs.random(1000), "");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Animali");
}
{for(var i = 0, len = gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1.length ;i < len;++i) {
    gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1[i].getBehavior("Object3D").turnAroundX(90);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish_2"), gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Scena_32senza_32titoloCode.mapOfGDgdjs_9546Scena_959532senza_959532titoloCode_9546GDFish_959595952Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1 */
{for(var i = 0, len = gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1.length ;i < len;++i) {
    gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.Scena_32senza_32titoloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDSharkObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDSharkObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95953Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95953Objects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDAlpacaObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDAlpacaObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWhaleObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWhaleObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDManta_9595RayObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDManta_9595RayObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDolphinObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDolphinObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95951Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95951Objects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDCowObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDCowObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDeerObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDeerObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFoxObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFoxObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDShibaInuObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDShibaInuObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDBullObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDBullObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDStagObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDStagObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWolfObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWolfObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDonkeyObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDonkeyObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHuskyObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHuskyObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorse_9595WhiteObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorse_9595WhiteObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorseObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorseObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSprite2Objects2.length = 0;

gdjs.Scena_32senza_32titoloCode.eventsList0(runtimeScene);
gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95952Objects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDSharkObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDSharkObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95953Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95953Objects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDAlpacaObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDAlpacaObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWhaleObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWhaleObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDManta_9595RayObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDManta_9595RayObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDolphinObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDolphinObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95951Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFish_95951Objects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDCowObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDCowObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDeerObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDeerObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFoxObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDFoxObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDShibaInuObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDShibaInuObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDBullObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDBullObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDStagObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDStagObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWolfObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDWolfObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDonkeyObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDDonkeyObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHuskyObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHuskyObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorse_9595WhiteObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorse_9595WhiteObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorseObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDHorseObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Scena_32senza_32titoloCode.GDNewTiledSprite2Objects2.length = 0;


return;

}

gdjs['Scena_32senza_32titoloCode'] = gdjs.Scena_32senza_32titoloCode;
