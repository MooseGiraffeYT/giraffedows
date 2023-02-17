gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDYellowButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDYellowButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "night-in-kyoto-avbe-main-version-21302-01-57.mp3", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.Untitled_32sceneCode.GDYellowButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDYellowButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDYellowButtonObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDYellowButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYellowButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewBitmapTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
