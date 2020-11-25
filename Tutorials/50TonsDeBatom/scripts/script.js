/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Develop by Djanilson Martins, for more hints subscribe to my channel on youtube: 
// and follow my instagram page: www.instagram.com/filters.land
//==============================================================================

//required modules
const Scene = require('Scene');
const Materials = require('Materials');
const NativeUI = require('NativeUI');
const Textures = require('Textures');


const texture_name = 'filtersland'; // name of your texture
const material_name = 'batom_mat';  // your material names

/** Fetches the assets and objects we need */
Promise.all([
  Textures.findFirst(texture_name+' (50)'),
  Textures.findFirst(texture_name+' (49)'),
  Textures.findFirst(texture_name+' (48)'),
  Textures.findFirst(texture_name+' (47)'),
  Textures.findFirst(texture_name+' (46)'),
  Textures.findFirst(texture_name+' (45)'),
  Textures.findFirst(texture_name+' (44)'),
  Textures.findFirst(texture_name+' (43)'),
  Textures.findFirst(texture_name+' (42)'),
  Textures.findFirst(texture_name+' (41)'),
  Textures.findFirst(texture_name+' (40)'),
  Textures.findFirst(texture_name+' (39)'),
  Textures.findFirst(texture_name+' (38)'),
  Textures.findFirst(texture_name+' (37)'),
  Textures.findFirst(texture_name+' (36)'),
  Textures.findFirst(texture_name+' (35)'),
  Textures.findFirst(texture_name+' (34)'),
  Textures.findFirst(texture_name+' (33)'),
  Textures.findFirst(texture_name+' (32)'),
  Textures.findFirst(texture_name+' (31)'),
  Textures.findFirst(texture_name+' (30)'),
  Textures.findFirst(texture_name+' (29)'),
  Textures.findFirst(texture_name+' (28)'),
  Textures.findFirst(texture_name+' (27)'),
  Textures.findFirst(texture_name+' (26)'),
  Textures.findFirst(texture_name+' (25)'),
  Textures.findFirst(texture_name+' (24)'),
  Textures.findFirst(texture_name+' (23)'),
  Textures.findFirst(texture_name+' (22)'),
  Textures.findFirst(texture_name+' (21)'),
  Textures.findFirst(texture_name+' (20)'),
  Textures.findFirst(texture_name+' (19)'),
  Textures.findFirst(texture_name+' (18)'),
  Textures.findFirst(texture_name+' (17)'),
  Textures.findFirst(texture_name+' (16)'),
  Textures.findFirst(texture_name+' (15)'),
  Textures.findFirst(texture_name+' (14)'),
  Textures.findFirst(texture_name+' (13)'),
  Textures.findFirst(texture_name+' (12)'),
  Textures.findFirst(texture_name+' (11)'),
  Textures.findFirst(texture_name+' (10)'),
  Textures.findFirst(texture_name+' (9)'),
  Textures.findFirst(texture_name+' (8)'),
  Textures.findFirst(texture_name+' (7)'),
  Textures.findFirst(texture_name+' (6)'),
  Textures.findFirst(texture_name+' (5)'),
  Textures.findFirst(texture_name+' (4)'),
  Textures.findFirst(texture_name+' (3)'),
  Textures.findFirst(texture_name+' (2)'),
  Textures.findFirst(texture_name+' (1)'),

  Materials.findFirst(material_name+'0'),
  Materials.findFirst(material_name+'1'),
  Materials.findFirst(material_name+'2'),
  Materials.findFirst(material_name+'3'),
  Materials.findFirst(material_name+'4'),
  Materials.findFirst(material_name+'5'),
  Materials.findFirst(material_name+'6'),
  Materials.findFirst(material_name+'7'),
  Materials.findFirst(material_name+'8'),
  Materials.findFirst(material_name+'9'),
  Materials.findFirst(material_name+'10'),
  Materials.findFirst(material_name+'11'),
  Materials.findFirst(material_name+'12'),
  Materials.findFirst(material_name+'13'),
  Materials.findFirst(material_name+'14'),
  Materials.findFirst(material_name+'15'),
  Materials.findFirst(material_name+'16'),
  Materials.findFirst(material_name+'17'),
  Materials.findFirst(material_name+'18'),
  Materials.findFirst(material_name+'19'),
  Materials.findFirst(material_name+'20'),
  Materials.findFirst(material_name+'21'),
  Materials.findFirst(material_name+'22'),
  Materials.findFirst(material_name+'23'),
  Materials.findFirst(material_name+'24'),
  Materials.findFirst(material_name+'25'),
  Materials.findFirst(material_name+'26'),
  Materials.findFirst(material_name+'27'),
  Materials.findFirst(material_name+'28'),
  Materials.findFirst(material_name+'29'),
  Materials.findFirst(material_name+'30'),
  Materials.findFirst(material_name+'31'),
  Materials.findFirst(material_name+'32'),
  Materials.findFirst(material_name+'33'),
  Materials.findFirst(material_name+'34'),
  Materials.findFirst(material_name+'35'),
  Materials.findFirst(material_name+'36'),
  Materials.findFirst(material_name+'37'),
  Materials.findFirst(material_name+'38'),
  Materials.findFirst(material_name+'39'),
  Materials.findFirst(material_name+'40'),
  Materials.findFirst(material_name+'41'),
  Materials.findFirst(material_name+'42'),
  Materials.findFirst(material_name+'43'),
  Materials.findFirst(material_name+'44'),
  Materials.findFirst(material_name+'45'),
  Materials.findFirst(material_name+'46'),
  Materials.findFirst(material_name+'47'),
  Materials.findFirst(material_name+'48'),
  Materials.findFirst(material_name+'49'),

  Scene.root.findFirst('faceMesh_batom'),

]).then(main);


function main(assets) {

    const texture0 = assets[0];
    const texture1 = assets[1];
    const texture2 = assets[2];
    const texture3 = assets[3];
    const texture4 = assets[4];
    const texture5 = assets[5];
    const texture6 = assets[6];
    const texture7 = assets[7];
    const texture8 = assets[8];
    const texture9 = assets[9];
    const texture10 = assets[10];
    const texture11 = assets[11];
    const texture12 = assets[12];
    const texture13 = assets[13];
    const texture14 = assets[14];
    const texture15 = assets[15];
    const texture16 = assets[16];
    const texture17 = assets[17];
    const texture18 = assets[18];
    const texture19 = assets[19];
    const texture20 = assets[20];
    const texture21 = assets[21];
    const texture22 = assets[22];
    const texture23 = assets[23];
    const texture24 = assets[24];
    const texture25 = assets[25];
    const texture26 = assets[26];
    const texture27 = assets[27];
    const texture28 = assets[28];
    const texture29 = assets[29];
    const texture30 = assets[30];
    const texture31 = assets[31];
    const texture32 = assets[32];
    const texture33 = assets[33];
    const texture34 = assets[34];
    const texture35 = assets[35];
    const texture36 = assets[36];
    const texture37 = assets[37];
    const texture38 = assets[38];
    const texture39 = assets[39];
    const texture40 = assets[40];
    const texture41 = assets[41];
    const texture42 = assets[42];
    const texture43 = assets[43];
    const texture44 = assets[44];
    const texture45 = assets[45];
    const texture46 = assets[46];
    const texture47 = assets[47];
    const texture48 = assets[48];
    const texture49 = assets[49];

    const material0 = assets[50];
    const material1 = assets[51];
    const material2 = assets[52];
    const material3 = assets[53];
    const material4 = assets[54];
    const material5 = assets[55];
    const material6 = assets[56];
    const material7 = assets[57];
    const material8 = assets[58];
    const material9 = assets[59];
    const material10 = assets[60];
    const material11 = assets[61];
    const material12 = assets[62];
    const material13 = assets[63];
    const material14 = assets[64];
    const material15 = assets[65];
    const material16 = assets[66];
    const material17 = assets[67];
    const material18 = assets[68];
    const material19 = assets[69];
    const material20 = assets[70];
    const material21 = assets[71];
    const material22 = assets[72];
    const material23 = assets[73];
    const material24 = assets[74];
    const material25 = assets[75];
    const material26 = assets[76];
    const material27 = assets[77];
    const material28 = assets[78];
    const material29 = assets[79];
    const material30 = assets[80];
    const material31 = assets[81];
    const material32 = assets[82];
    const material33 = assets[83];
    const material34 = assets[84];
    const material35 = assets[85];
    const material36 = assets[86];
    const material37 = assets[87];
    const material38 = assets[88];
    const material39 = assets[89];
    const material40 = assets[90];
    const material41 = assets[91];
    const material42 = assets[92];
    const material43 = assets[93];
    const material44 = assets[94];
    const material45 = assets[95];
    const material46 = assets[96];
    const material47 = assets[97];
    const material48 = assets[98];
    const material49 = assets[99];

    const faceMesh = assets[100];


    const picker = NativeUI.picker;

    const index = 0;
    const selection = 0;  

    const configuration = {

      selectedIndex: index,

      items: [
        {image_texture: texture0},
        {image_texture: texture1},
        {image_texture: texture2},
        {image_texture: texture3},
        {image_texture: texture4},
        {image_texture: texture5},
        {image_texture: texture6},
        {image_texture: texture7},
        {image_texture: texture8},
        {image_texture: texture9},
        {image_texture: texture10},
        {image_texture: texture11},
        {image_texture: texture12},
        {image_texture: texture13},
        {image_texture: texture14},
        {image_texture: texture15},
        {image_texture: texture16},
        {image_texture: texture17},
        {image_texture: texture18},
        {image_texture: texture19},
        {image_texture: texture20},
        {image_texture: texture21},
        {image_texture: texture22},
        {image_texture: texture23},
        {image_texture: texture24},
        {image_texture: texture25},
        {image_texture: texture26},
        {image_texture: texture27},
        {image_texture: texture28},
        {image_texture: texture29},
        {image_texture: texture30},
        {image_texture: texture31},
        {image_texture: texture32},
        {image_texture: texture33},
        {image_texture: texture34},
        {image_texture: texture35},
        {image_texture: texture36},
        {image_texture: texture37},
        {image_texture: texture38},
        {image_texture: texture39},
        {image_texture: texture40},
        {image_texture: texture41},
        {image_texture: texture42},
        {image_texture: texture43},
        {image_texture: texture44},
        {image_texture: texture45},
        {image_texture: texture46},
        {image_texture: texture47},
        {image_texture: texture48},
        {image_texture: texture49},
        
      ],

    mats: [
      {material: material0},
      {material: material1},
      {material: material2},
      {material: material3},
      {material: material4},
      {material: material5},
      {material: material6},
      {material: material7},
      {material: material8},
      {material: material9},
      {material: material10},
      {material: material11},
      {material: material12},
      {material: material13},
      {material: material14},
      {material: material15},
      {material: material16},
      {material: material17},
      {material: material18},
      {material: material19},
      {material: material20},
      {material: material21},
      {material: material22},
      {material: material23},
      {material: material24},
      {material: material25},
      {material: material26},
      {material: material27},
      {material: material28},
      {material: material29},
      {material: material30},
      {material: material31},
      {material: material32},
      {material: material33},
      {material: material34},
      {material: material35},
      {material: material36},
      {material: material37},
      {material: material38},
      {material: material39},
      {material: material40},
      {material: material41},
      {material: material42},
      {material: material43},
      {material: material44},
      {material: material45},
      {material: material46},
      {material: material47},
      {material: material48},
      {material: material49},
    ]


    };

    picker.configure(configuration);
    picker.visible = true; 

    picker.selectedIndex.monitor().subscribe(function(index) {
      faceMesh.material = configuration.mats[index.newValue].material; // add selected material to faceMesh
      //Patches.inputs.setScalar('selection', index.newValue);
    });
   
}