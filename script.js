const weatherInfo = document.getElementById('weather-info');
        const fruitsContainer = document.getElementById('fruits');
        const vegetablesContainer = document.getElementById('vegetables');
        const flowersContainer = document.getElementById('flowers');
        const searchBtn = document.getElementById('search-btn');
        const locationInput = document.getElementById('location-input');

        const APIKey = '1822eedca103e9202cccb7f7d6b00fb7';

        // Expanded crop database with additional details
        const cropDatabase = {
           
    fruits: [
        {
            name: 'Apple',
            image: 'apples.jpg',
            climate: 'cool',
            soil: 'Well-drained, loamy soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (10-10-10), applied in early spring and mid-summer',
            chemicals: 'Fungicides for apple scab and powdery mildew, insecticides for codling moth and apple maggot as needed',
            harvestTime: '100-200 days after bloom, depending on variety'
        },
        {
            name: 'Orange',
            image: 'orange.jpg',
            climate: 'warm',
            soil: 'Well-drained, slightly acidic soil with pH 6.0-7.5',
            fertilizer: 'Citrus-specific fertilizer (12-6-6), applied 3 times a year',
            chemicals: 'Insecticidal soap for pest control, copper fungicide for citrus canker as needed',
            harvestTime: '6-8 months after bloom'
        },
        {
            name: 'Banana',
            image: 'Banana.jpg',
            climate: 'tropical',
            soil: 'Rich, well-drained soil with pH 5.5-6.5',
            fertilizer: 'High-potassium fertilizer (13-8-20), applied monthly',
            chemicals: 'Fungicides for Sigatoka disease, nematicides as needed',
            harvestTime: '9-12 months after planting'
        },
        {
            name: 'Strawberry',
            image: 'Strawberry.jpg',
            climate: 'moderate',
            soil: 'Well-drained, sandy loam with pH 5.5-6.5',
            fertilizer: 'Balanced NPK (10-10-10) before planting, then high-nitrogen fertilizer during growing season',
            chemicals: 'Fungicides for leaf spot and fruit rot, insecticides for spider mites as needed',
            harvestTime: '60-80 days after planting'
        },
        {
            name: 'Mango',
            image: 'Mango.jpg',
            climate: 'tropical',
            soil: 'Well-drained, deep soil with pH 5.5-7.5',
            fertilizer: 'Balanced NPK (10-10-10) with additional potassium during fruit development',
            chemicals: 'Fungicides for anthracnose, insecticides for fruit flies as needed',
            harvestTime: '100-150 days after flowering'
        },
        {
            name: 'Grape',
            image: 'grapes.jpg',
            climate: 'warm',
            soil: 'Well-drained, deep soil with pH 6.0-6.8',
            fertilizer: 'Balanced NPK (10-10-10) in early spring, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for powdery mildew and black rot, insecticides for grape berry moth as needed',
            harvestTime: '120-150 days after bloom'
        },
        {
            name: 'Pineapple',
            image: 'Pineapple.jpg',
            climate: 'tropical',
            soil: 'Well-drained, sandy loam with pH 4.5-6.5',
            fertilizer: 'Balanced NPK (10-10-10) every 2-3 months',
            chemicals: 'Fungicides for heart rot, insecticides for mealybugs as needed',
            harvestTime: '18-24 months after planting'
        },
        {
            name: 'Blueberry',
            image: 'BlueBerry.jpg',
            climate: 'cool',
            soil: 'Well-drained, acidic soil with pH 4.5-5.5',
            fertilizer: 'Acid-forming fertilizer (12-4-8) in early spring and mid-summer',
            chemicals: 'Fungicides for mummy berry and botrytis blight, insecticides for blueberry maggot as needed',
            harvestTime: '60-80 days after bloom'
        },
        {
            name: 'Peach',
            image: 'Peach.jpg',
            climate: 'warm',
            soil: 'Well-drained, sandy loam with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (10-10-10) in early spring, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for brown rot and peach leaf curl, insecticides for peach tree borer as needed',
            harvestTime: '90-150 days after bloom'
        },
        {
            name: 'Kiwi',
            image: 'Kiwi.jpg',
            climate: 'moderate',
            soil: 'Well-drained, slightly acidic soil with pH 5.5-6.5',
            fertilizer: 'Balanced NPK (10-10-10) in early spring, then calcium nitrate during fruit development',
            chemicals: 'Fungicides for botrytis rot, insecticides for leafrollers as needed',
            harvestTime: '25-30 weeks after flowering'
        },
        {
            name: 'Watermelon',
            image: 'watermelon.jpg',
            climate: 'warm',
            soil: 'Well-drained, sandy loam with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (5-10-10) before planting, then high-potassium fertilizer during fruit development',
            chemicals: 'Fungicides for powdery mildew and gummy stem blight, insecticides for cucumber beetles as needed',
            harvestTime: '70-100 days after planting'
        },
        {
            name: 'Pomegranate',
            image: 'Pomegranate.jpg',
            climate: 'warm',
            soil: 'Well-drained soil with pH 5.5-7.0',
            fertilizer: 'Balanced NPK (10-10-10) in early spring, then high-potassium fertilizer during fruit development',
            chemicals: 'Fungicides for fruit rot, insecticides for aphids and whiteflies as needed',
            harvestTime: '6-7 months after flowering'
        },
        {
            name: 'Lemon',
            image: 'Lemon.jpg',
            climate: 'warm',
            soil: 'Well-drained, slightly acidic soil with pH 5.5-6.5',
            fertilizer: 'Citrus-specific fertilizer (6-6-6) applied 3 times a year',
            chemicals: 'Insecticidal soap for pest control, copper fungicide for citrus canker as needed',
            harvestTime: '6-9 months after bloom'
        },
        {
            name: 'Cherry',
            image: 'Cherry.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (10-10-10) in early spring, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for brown rot and leaf spot, insecticides for cherry fruit fly as needed',
            harvestTime: '60-90 days after bloom'
        },
        {
            name: 'Papaya',
            image: 'papaya.jpg',
            climate: 'tropical',
            soil: 'Well-drained, rich soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (14-14-14) every 2 months',
            chemicals: 'Fungicides for anthracnose and powdery mildew, insecticides for fruit flies as needed',
            harvestTime: '9-11 months after planting'
        },
        {
            name: 'Avocado',
            image: 'avocado.jpg',
            climate: 'tropical',
            soil: 'Well-drained, slightly acidic soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (10-10-10) with additional zinc and boron, applied 3-4 times a year',
            chemicals: 'Fungicides for root rot, insecticides for avocado thrips as needed',
            harvestTime: '12-18 months after flowering'
        },
        {
            name: 'Plum',
            image: 'plum.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (10-10-10) in early spring, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for brown rot and black knot, insecticides for plum curculio as needed',
            harvestTime: '3-5 months after bloom'
        },
        {
            name: 'Raspberry',
            image: 'rasberry.jpg',
            climate: 'cool',
            soil: 'Well-drained, rich soil with pH 5.5-6.5',
            fertilizer: 'Balanced NPK (10-10-10) in early spring, then nitrogen-rich fertilizer',
            chemicals: 'Fungicides for cane blight and spur blight, insecticides for raspberry beetle as needed',
            harvestTime: '60-70 days after bloom'
        },
        {
            name: 'Coconut',
            image: 'coconut.jpg',
            climate: 'tropical',
            soil: 'Well-drained, sandy soil with pH 5.5-7.0',
            fertilizer: 'Balanced NPK (13-7-20) applied 2-3 times a year',
            chemicals: 'Fungicides for bud rot, insecticides for rhinoceros beetle as needed',
            harvestTime: '12 months after flowering'
        },
        {
            name: 'Fig',
            image: 'fig.jpg',
            climate: 'warm',
            soil: 'Well-drained, loamy soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (8-8-8) in early spring, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for fig rust and leaf blight, insecticides for fig scale as needed',
            harvestTime: '3-4 months after fruit set'
        }
    ],
    vegetables: [
        {
            name: 'Tomato',
            image: 'Tomato.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-6.8',
            fertilizer: 'Balanced NPK (5-10-5) before planting, then calcium nitrate during fruit development',
            chemicals: 'Fungicides for early blight and late blight, insecticides for tomato hornworm as needed',
            harvestTime: '60-80 days after planting'
        },
        {
            name: 'Carrot',
            image: 'Carrot.jpg',
            climate: 'cool',
            soil: 'Deep, loose, well-drained soil with pH 6.0-6.8',
            fertilizer: 'Low-nitrogen, high-potassium fertilizer (5-15-15) before planting',
            chemicals: 'Minimal chemical use, neem oil for pest control if needed',
            harvestTime: '70-80 days after planting'
        },
        {
            name: 'Lettuce',
            image: 'Lettuce.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (5-5-5) before planting, then nitrogen-rich fertilizer',
            chemicals: 'Fungicides for downy mildew, insecticides for aphids as needed',
            harvestTime: '30-60 days after planting, depending on variety'
        },
        {
            name: 'Pepper',
            image: 'Pepper.jpeg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-6.8',
            fertilizer: 'Balanced NPK (5-10-10) before planting, then calcium nitrate during fruit development',
            chemicals: 'Fungicides for bacterial spot, insecticides for pepper weevil as needed',
            harvestTime: '60-90 days after planting'
        },
        {
            name: 'Broccoli',
            image: 'Broccoli.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (10-10-10) before planting, then nitrogen-rich fertilizer',
            chemicals: 'Fungicides for clubroot, insecticides for cabbage worms as needed',
            harvestTime: '50-70 days after planting'
        },
        {
            name: 'Eggplant',
            image: 'Eggplant.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 5.5-6.5',
            fertilizer: 'Balanced NPK (5-10-5) before planting, then calcium nitrate during fruit development',
            chemicals: 'Fungicides for verticillium wilt, insecticides for flea beetles as needed',
            harvestTime: '65-80 days after planting'
        },
        {
            name: 'Cucumber',
            image: 'cucumber.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (5-10-10) before planting, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for powdery mildew, insecticides for cucumber beetles as needed',
            harvestTime: '50-70 days after planting'
        },
        {
            name: 'Spinach',
            image: 'Spinach.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (5-10-10) before planting, then nitrogen-rich fertilizer',
            chemicals: 'Fungicides for downy mildew, insecticides for leafminers as needed',
            harvestTime: '40-50 days after planting'
        },
        {
            name: 'Potato',
            image: 'potatoes.jpg',
            climate: 'cool',
            soil: 'Well-drained, loose soil with pH 5.0-6.5',
            fertilizer: 'Balanced NPK (5-10-10) before planting, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for late blight, insecticides for Colorado potato beetle as needed',
            harvestTime: '70-120 days after planting, depending on variety'
        },
        {
            name: 'Onion',
            image: 'onion.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.0-6.8',
            fertilizer: 'High-nitrogen fertilizer (21-0-0) early in the season, then balanced NPK',      
        },
        {
            name: 'Garlic',
            image: 'garlic.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (10-10-10) before planting, then nitrogen-rich fertilizer in spring',
            chemicals: 'Fungicides for white rot, minimal insecticide use',
            harvestTime: '240-270 days after planting'
        },
        {
            name: 'Cabbage',
            image: 'Cabbage.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.5-7.0',
            fertilizer: 'Balanced NPK (10-10-10) before planting, then nitrogen-rich fertilizer',
            chemicals: 'Fungicides for clubroot, insecticides for cabbage worms as needed',
            harvestTime: '70-100 days after planting'
        },
        {
            name: 'Cauliflower',
            image: 'Cauliflower.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (10-10-10) before planting, then nitrogen-rich fertilizer',
            chemicals: 'Fungicides for downy mildew, insecticides for aphids as needed',
            harvestTime: '55-100 days after planting'
        },
        {
            name: 'Peas',
            image: 'Peas.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Low-nitrogen fertilizer (5-10-10) before planting',
            chemicals: 'Minimal chemical use, fungicides for powdery mildew if needed',
            harvestTime: '60-70 days after planting'
        },
        {
            name: 'Beans',
            image: 'Beans.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (10-10-10) before planting',
            chemicals: 'Fungicides for rust and blight, insecticides for bean beetles as needed',
            harvestTime: '50-60 days for bush beans, 60-70 days for pole beans'
        },
        {
            name: 'Squash',
            image: 'squash.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-6.8',
            fertilizer: 'Balanced NPK (5-10-10) before planting, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for powdery mildew, insecticides for squash bugs as needed',
            harvestTime: '50-65 days for summer squash, 80-120 days for winter squash'
        },
        {
            name: 'Zucchini',
            image: 'Zuchinni.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-7.5',
            fertilizer: 'Balanced NPK (5-10-10) before planting, then low-nitrogen fertilizer',
            chemicals: 'Fungicides for powdery mildew, insecticides for squash vine borers as needed',
            harvestTime: '45-55 days after planting'
        },
        {
            name: 'Radish',
            image: 'radish.jpeg',
            climate: 'cool',
            soil: 'Well-drained, loose soil with pH 6.0-7.0',
            fertilizer: 'Low-nitrogen fertilizer (5-10-10) before planting',
            chemicals: 'Minimal chemical use, neem oil for pest control if needed',
            harvestTime: '22-30 days after planting'
        },
        {
            name: 'Kale',
            image: 'kale.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-7.5',
            fertilizer: 'Balanced NPK (10-10-10) before planting, then nitrogen-rich fertilizer',
            chemicals: 'Fungicides for downy mildew, insecticides for aphids as needed',
            harvestTime: '50-65 days after planting'
        },
        {
            name: 'Asparagus',
            image: 'Asparagus.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.5-7.0',
            fertilizer: 'Balanced NPK (10-10-10) in early spring and after harvest',
            chemicals: 'Fungicides for rust, minimal insecticide use',
            harvestTime: '2-3 years after planting for first harvest, then annual harvests'
        }
    ],
    flowers: [
        {
            name: 'Rose',
            image: 'Rose.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (5-10-5) in early spring and mid-summer',
            chemicals: 'Fungicides for black spot and powdery mildew, insecticides for aphids as needed',
            harvestTime: 'Blooms throughout growing season, prune in late winter or early spring'
        },
        {
            name: 'Sunflower',
            image: 'Sunflower.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-7.5',
            fertilizer: 'Low-nitrogen, high-phosphorus fertilizer (5-10-5) before planting',
            chemicals: 'Minimal chemical use, insecticides for stem weevils if needed',
            harvestTime: '80-120 days after planting'
        },
        {
            name: 'Tulip',
            image: 'tulip.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (5-10-5) in fall when planting bulbs',
            chemicals: 'Fungicides for botrytis blight, minimal insecticide use',
            harvestTime: 'Blooms in spring, lift bulbs after foliage dies back'
        },
        {
            name: 'Orchid',
            image: 'orchid.jpg',
            climate: 'tropical',
            soil: 'Well-draining orchid mix, pH 5.5-6.5',
            fertilizer: 'Balanced, water-soluble fertilizer (20-20-20) weekly at 1/4 strength',
            chemicals: 'Fungicides for root rot, insecticides for scale and mealybugs as needed',
            harvestTime: 'Varies by species, typically blooms once or twice a year'
        },
        {
            name: 'Daisy',
            image: 'daisy.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.0-8.0',
            fertilizer: 'Balanced NPK (10-10-10) in spring and mid-summer',
            chemicals: 'Minimal chemical use, insecticides for aphids if needed',
            harvestTime: 'Blooms throughout summer, deadhead for continuous flowering'
        },
        {
            name: 'Lavender',
            image: 'Lavender.jpg',
            climate: 'warm',
            soil: 'Well-drained, sandy soil with pH 6.5-7.5',
            fertilizer: 'Low-nitrogen fertilizer (5-10-5) in spring',
            chemicals: 'Minimal chemical use, fungicides for root rot in humid conditions',
            harvestTime: 'Harvest when flowers have just opened, typically in mid-summer'
        },
        {
            name: 'Lily',
            image: 'lily.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (5-10-5) in spring and after flowering',
            chemicals: 'Fungicides for botrytis blight, insecticides for lily beetles as needed',
            harvestTime: 'Blooms in summer, cut flowers when buds are about to open'
        },
        {
            name: 'Marigold',
            image: 'marigold.jpg',
            climate: 'warm',
            soil: 'Well-drained soil with pH 6.0-7.5',
            fertilizer: 'Balanced NPK (5-10-5) monthly during growing season',
            chemicals: 'Minimal chemical use, insecticides for spider mites if needed',
            harvestTime: 'Blooms throughout summer and fall, deadhead for continuous flowering'
        },
        {
            name: 'Peony',
            image: 'peony.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.5-7.0',
            fertilizer: 'Low-nitrogen fertilizer (5-10-5) in spring and after flowering',
            chemicals: 'Fungicides for botrytis blight, minimal insecticide use',
            harvestTime: 'Blooms in late spring to early summer, cut when buds are soft and showing color'
        },
        {
            name: 'Hibiscus',
            image: 'hibiscus.jpg',
            climate: 'tropical',
            soil: 'Well-drained, fertile soil with pH 6.5-7.0',
            fertilizer: 'Balanced NPK (10-10-10) monthly during growing season',
            chemicals: 'Insecticides for aphids and whiteflies, fungicides for leaf spot as needed',
            harvestTime: 'Blooms throughout warm months, prune in early spring'
        },
        {
            name: 'Chrysanthemum',
            image: 'chrysanthemum.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.5-7.0',
            fertilizer: 'Balanced NPK (5-10-5) every 2-3 weeks during growing season',
            chemicals: 'Fungicides for rust and powdery mildew, insecticides for aphids as needed',
            harvestTime: 'Blooms in fall, pinch back in summer for bushier plants'
        },
        {
            name: 'Dahlia',
            image: 'dahlia.jpg',
            climate: 'moderate',
            soil: 'Well-drained, fertile soil with pH 6.5-7.0',
            fertilizer: 'Low-nitrogen fertilizer (5-10-10) monthly during growing season',
            chemicals: 'Fungicides for powdery mildew, insecticides for earwigs as needed',
            harvestTime: 'Blooms from midsummer to fall, dig up tubers after first frost'
        },
        {
            name: 'Carnation',
            image: 'carnation.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (10-10-10) every 2-3 weeks during growing season',
            chemicals: 'Fungicides for rust and wilt, insecticides for thrips as needed',
            harvestTime: 'Blooms throughout summer, harvest when flowers are almost fully open'
        },
        {
            name: 'Geranium',
            image: 'Geranium.jpg',
            climate: 'warm',
            soil: 'Well-drained soil with pH 6.0-6.5',
            fertilizer: 'Balanced NPK (10-10-10) every 2 weeks during growing season',
            chemicals: 'Fungicides for botrytis blight, insecticides for whiteflies as needed',
            harvestTime: 'Blooms throughout warm months, pinch back for bushier plants'
        },
        {
            name: 'Jasmine',
            image: 'jasmine.jpg',
            climate: 'warm',
            soil: 'Well-drained, fertile soil with pH 6.0-7.0',
            fertilizer: 'Balanced NPK (7-9-5) every 2-3 weeks during growing season',
            chemicals: 'Minimal chemical use, insecticides for spider mites if needed',
            harvestTime: 'Blooms in spring and summer, prune after flowering'
        },
        {
            name: 'Iris',
            image: 'Iris.jpg',
            climate: 'cool',
            soil: 'Well-drained soil with pH 6.0-7.0',
            fertilizer: 'Low-nitrogen fertilizer (5-10-10) in early spring and after blooming',
            chemicals: 'Fungicides for leaf spot, minimal insecticide use',
            harvestTime: 'Blooms in spring or early summer, divide rhizomes every 3-4 years'
        },
        {
            name: 'Azalea',
            image: 'azalea.jpg',
            climate: 'moderate',
            soil: 'Well-drained, acidic soil with pH 4.5-6.0',
            fertilizer: 'Acid-forming fertilizer (3-1-2) in spring after flowering',
            chemicals: 'Fungicides for petal blight, insecticides for lace bugs as needed',
            harvestTime: 'Blooms in spring, prune soon after flowering'
        },
        {
            name: 'Pansy',
            image: 'pansy.jpg',
            climate: 'cool',
            soil: 'Well-drained, fertile soil with pH 5.5-6.5',
            fertilizer: 'Balanced NPK (10-10-10) every 2 weeks during growing season',
            chemicals: 'Fungicides for downy mildew, insecticides for aphids as needed',
            harvestTime: 'Blooms in spring and fall, remove faded flowers for continuous blooming'
        },
        {
        name: 'Begonia',
        image: 'Begonia.jpg',
        climate: 'warm',
        soil: 'Well-draining, rich, loamy soil with pH 5.5-6.5',
        fertilizer: 'Balanced, water-soluble fertilizer (10-10-10) every 2-4 weeks during growing season',
        chemicals: 'Fungicides for powdery mildew and botrytis; insecticides for mealybugs and thrips as needed',
        harvestTime: 'Blooms throughout the growing season, typically spring to fall. Remove spent flowers to encourage more blooms'
    },
    {
        name: 'Camellia',
        image: 'Camellias.jpg',
        climate: 'moderate',
        soil: 'Well-draining, slightly acidic soil with pH 5.5-6.5, rich in organic matter',
        fertilizer: 'Acid-forming, balanced fertilizer (4-8-8) in spring after flowering and again in mid-summer',
        chemicals: 'Fungicides for petal blight and leaf gall; insecticides for scale insects and spider mites if necessary',
        harvestTime: 'Blooms typically in late fall to early spring, depending on variety. No need to deadhead, flowers will fall naturally'
    }
                // Add more flowers with detailed information
            ]
        };

        const getClimate = (temperature) => {
            if (temperature < 10) return 'cool';
            if (temperature < 20) return 'moderate';
            if (temperature < 30) return 'warm';
            return 'tropical';
        };

        const suggestCrops = (climate) => {
            const suggestions = {};
            for (const [category, crops] of Object.entries(cropDatabase)) {
                suggestions[category] = crops.filter(crop => crop.climate === climate || crop.climate === 'moderate');
            }
            return suggestions;
        };

        const displayCrops = (suggestions) => {
            for (const [category, crops] of Object.entries(suggestions)) {
                const container = document.getElementById(category);
                container.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
                const cropGrid = document.createElement('div');
                cropGrid.classList.add('crop-grid');
                
                crops.forEach(crop => {
                    const cropCard = document.createElement('div');
                    cropCard.classList.add('crop-card');
                    cropCard.innerHTML = `
                        <img src="${crop.image}" alt="${crop.name}" class="crop-image">
                        <h3>${crop.name}</h3>
                        <div class="crop-details">
                            <h4>Soil Type:</h4>
                            <p>${crop.soil}</p>
                            <h4>Fertilizer:</h4>
                            <p>${crop.fertilizer}</p>
                            <h4>Chemical Usage:</h4>
                            <p>${crop.chemicals}</p>
                            <h4>Harvest Time:</h4>
                            <p>${crop.harvestTime}</p>
                        </div>
                    `;
                    cropGrid.appendChild(cropCard);
                });
                
                container.appendChild(cropGrid);
            }
        };

        searchBtn.addEventListener('click', () => {
            const city = locationInput.value;

            if (city === '') return;

            weatherInfo.innerHTML = 'Loading...';
            fruitsContainer.innerHTML = '';
            vegetablesContainer.innerHTML = '';
            flowersContainer.innerHTML = '';

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('City not found');
                    }
                    return response.json();
                })
                .then(data => {
                    const temperature = data.main.temp;
                    const humidity = data.main.humidity;
                    const description = data.weather[0].description;

                    weatherInfo.innerHTML = `
                        <h2>Weather in ${city}</h2>
                        <p>Temperature: ${temperature.toFixed(1)}°C</p>
                        <p>Humidity: ${humidity}%</p>
                        <p>Conditions: ${description}</p>
                    `;

                    const climate = getClimate(temperature);
                    const suggestions = suggestCrops(climate);
                    displayCrops(suggestions);
                })
                .catch(error => {
                    weatherInfo.innerHTML = `Error: ${error.message}. Please try again.`;
                });
        });