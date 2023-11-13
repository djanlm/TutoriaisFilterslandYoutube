import Scene from "Scene";
import Diagnostics from "Diagnostics";
import Textures from "Textures";
import NativeUI from "NativeUI";
import Materials from "Materials";
import Patches from "Patches";
(async function () {
  // Enables async/await in JS [part 1]

  const [buttonsTextures, faceMaterial] = await Promise.all([
    Textures.findUsingPattern("numbers*"),
    Materials.findFirst("faceMaterial"),
  ]);

  const picker = NativeUI.picker;
  //Diagnostics.log(buttonsTextures[0]);
  const buttonsArray = [];
  for (let i = 0; i < 30; i++) {
    buttonsArray.push({ image_texture: buttonsTextures[i] });
  }
  const configuration = {
    selectedIndex: 0,
    items: buttonsArray,
  };

  picker.configure(configuration);
  picker.visible = true;

  picker.selectedIndex.monitor().subscribe(function (index) {
    faceMaterial.diffuse = configuration.items[index.newValue].image_texture;
    Patches.inputs.setScalar("selectedIndex", index.newValue);
  });
})(); // Enables async/await in JS [part 2]
