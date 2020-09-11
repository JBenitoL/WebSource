export default {
    data() {
        return {
            intro: [
                'After almost 5 years of research, I defended my thesis on January 2020. Here, I will make a brief summary of my project and a list of the publications during my research time. If you are interested on the whole manuscript, click the cover image to download a copy.',
                'The title of the manuscript is "Vortex lattices under stress: Visualizing the superconducting vortex lattice in presence of disorder and magnetism" supervised by H. Suderow and I. Guillamón at the',
                'Low Temperatures Laboratory',
                'of the Universidad Autonoma de Madrid.'
            ],
            tesisIntro1: 'More than 100 years after its discovery, superconductivity is still a very promising and current phenomena. Superconductors materials have two main properties:',
            tesisIntro2: [
                'Electric current flows through the material with zero electric resistance.',
                'In most of the superconductors (type-II), the magnetic field penetrates the material as quantized magnetic fluxes called vortices. Inside the core of the vortex the material is in normal state. Usually, vortices form a triangular lattice because they repeal each other. Depending on the internal defects of the material, the lattice can be more or less distorted.'
            ],
            tesisIntro3: 'Furthermore, superconducting state is only possible under some conditions of:',
            tesisIntro4: [
                'Temperature',
                'Magnetic field',
                'Electrical current'
            ],
            tesisIntro5: 'If any of these quantities are above a critical value, the superconducting state dissapears and the material goes to normal state.',
            challenges: [
                'There are already numerous applications',
                'as NMR machines in hospitals, the levitating train of Japan, or a superconducting cable joining two high voltage stations in Essen (Germany). But,',
                'to take fully advantage of superconductivity, increasing critical temperature and electrical current is indispensable.',
                'To enhance critical temperature, is crucial to understand the origin of superconductivity.',
                'In conventional superconductors, the origin is well understood using BCS theory but, usually, these materials have very low critical temperatures. On the other hand,',
                'in high critical temperature superconductors (HCTS) the origin remains unknown.',
                'What we do know is that, as opposed to conventional superconductors, superconductivity and magnetism are very related. Comprehending this relation is fundamental to understand the origin of the superconductivity in HCTS.',
                'The problem of increasing critical current is related to the superconducting vortices',
                '. When an electrical current is applied, vortices move along the sample dissipating heat and this eventually destroys superconductivity. Hence,',
                'to increase critical current is important to understand how the vortex lattice is arranged',
                'inside the material and to mantained them as fixed as possible when the electric current flows.'
            ],
            captions: [
                'Superconducting levitation due to the repulsion of magnetic field',
                'Atomic resolution image in the left and superconducting vortices (yellow) in the right',
                'The scanning tunneling microscope I built'
            ],
            whatIDid: [
                'During my thesis I focused on both problems.',
                'I analyzed images of superconducting vortices of different materials finding new lattice arrangements.',
                'This findings could help to a better understanding of how vortices interact among them and its media at differents magnetic fields.',
                'Futhermore, I measured a HCTS that was discovered only two years ago.',
                'The most important result that I found is how internal magnetism and superconductivity coexist with each other.'
            ],
            howIDidIt: [
                'In order to obtain my results,',
                'I developed a scanning tunneling microscope from scratch to perform at low temperatures (~150 mK) and high magnetic fields (~15 T)',
                '. This microscope was invented in 1981 and allows us to obtain topographic images at the atomic level, as well as the electronical properties of the material we are measuring. For example, we can obtain vortex images by measuring the electronic properties locally. I designed and built the microscope and also help in the development of the mechanical apparatus, electronics and computer comunications required to perform the experiments.',
                'Another very important part of my thesis was the data analysis.',
                'With the microscope, I obtained files of several Gb per measurement. Thus, in order to do faster analysis, I developed a software in Matlab. We are able to open, manage and clean raw data from the microscope in seconds/minutes. Most of the funcionalities are for image analysis, For example:'
            ],
            howList: [
                '2D-Fast fourier transformations and filteringsli',
                'Automatic vortex detection in images',
                'Analysis of vortex movement in movies',
                'Fractal analysis',
                'Hyperuniform detection in real and reciprocal space'
            ],
            papers: [
                {
                    title: 'Superconducting density of states and vortex lattice in the spin-vortex state of Ni-doped',
                    autores: 'J. Benito-Llorens, E.Herrera, V.Barrena, H.Suderow, I.Guillamón, W.R. Meier, S. Bud’ko, P.C. Canfield, V Borisov and R.Valentí',
                    publication: 'In preparation, (2020)',
                },
                {
                    title: 'Superconductivity in a disordered metal with Coulomb interactions',
                    autores: 'Svetlana V. Postolova, Alexey Yu. Mironov, Víctor Barrena,Jose Benito-Llorens,Jose Gabriel Rodrigo, Hermann Suderow, Mikhail R. Baklanov, Tatyana I. Baturina, and Valerii M. Vinokur',
                    publication: 'Phys. Rev. Research 2, 033307, (2020)',
                    link: 'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033307'
                },
                {
                    title: 'Disordered hyperuniformity in superconducting vortex lattices',
                    autores: 'J. Benito-Llorens, R. Córdoba, J.M. De Teresa, R. Ibarra, S. Vieira, I. Guillamón, M. Ortuño, and H. Suderow',
                    publication: 'Phys. Rev. Research 2, 013329, (2020)',
                    link: 'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.013329'
                },
                {
                    title: 'Observation of a gel of quantum vortices in a superconductor at very low magnetic fields',
                    autores: 'J. Benito-Llorens, Lior Embon, Alexandre Correa, Jesés David González, Edwin Herrera, Isabel Guillamón, Roberto F. Luccas, Jon Azpeitia, Federico J. Mompeán, Mar García-Hernández, Carmen Munuera, Jazmín Aragón Sánchez, Yanina Fasano, Milorad V. Milosevic, Hermann Suderow, Yonathan Anahory',
                    publication: 'Phys. Rev. Research 2, 013329, (2020)',
                    link: 'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.013329'
                },
                {
                    title: 'Thermal creep induced by cooling a superconducting vortex lattice',
                    autores: 'R. Willa and J.A. Galvis, J. Benito-Llorens, E. Herrera, I. Guillamon and H. Suderow',
                    publication: 'Phys. Rev. Research 2, 013125 (2020)',
                    link: 'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.013125'
                }
            ],
            ultimoPaper: {
                title: 'Vortex creep at very low temperatures in single crystals of the extreme type-II superconductor',
                autores: 'E. Herrera-Vasco, J. Benito-Llorens, Udhara S. Kaluarachchi, S.L. Bud’ko, P. C. Canfield, I. Guillamón, H. Suderow',
                publication: 'Phys. Rev. B 95, 134505 (2017)',
                link: 'https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.134505'
            }
        }
    }
}
