//*** Developed by FiltersLand ***//

import Scene from 'Scene'; // Com o módulo de Scene conseguimos importar os objetos presentes no painel scene do Spark AR
import Animation from 'Animation'; // O módulo Animation é usado aqui para criarmos os samplers (scalar samplers e um color sampler)

(async function () {  // Enables async/await in JS [part 1]

    /** Nessa promise, importamos os emissores de partículas presentes em nossa cena, é possível adicionar quantos emitters vcs queiram */
    const [particles0, particles1] = await Promise.all([
        Scene.root.findFirst('emitter0') as Promise<ParticleSystem>,
        Scene.root.findFirst('emitter1') as Promise<ParticleSystem>
    ]);

    /** Criamos os samplers pra cada canal HSVA, precisamos desses samplers para criamos o ColorSampler a seguir */
    const hueSampler = Animation.samplers.linear(0, 1);
    const saturationSampler = Animation.samplers.linear(0, 10);
    const valueSampler = Animation.samplers.constant(1);
    const alphaSampler = Animation.samplers.easeInCubic(1, 0);

    /** Criamos o color sampler aqui para ser aplicado no modificador de cor das partículas */
    const colorSampler = Animation.samplers.HSVA([
        hueSampler,
        saturationSampler,
        valueSampler,
        alphaSampler,
    ])

    /** Aplicamos o colorSampler nos dois sistemas de partículas presentes na cena */
    particles0.hsvaColorModulationModifier = colorSampler;
    particles1.hsvaColorModulationModifier = colorSampler;

    particles0.sizeModifier = Animation.samplers.linear(0.01, 0.1);

})();
