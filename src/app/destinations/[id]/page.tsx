'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const destinationsData = [
  {
    id: 1,
    title: 'Maasai Mara National Reserve',
    description: 'Experience the legendary Great Migration and witness the dramatic river crossings of millions of wildebeest and zebras in one of Africa\'s most spectacular ecosystems.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop',
    fullDescription: 'The Maasai Mara National Reserve is one of Africa\'s most iconic wildlife destinations. Spanning approximately 1,500 square kilometers in southwestern Kenya, this reserve is renowned for hosting the largest terrestrial mammal migration on Earth. Every year, millions of wildebeest, zebras, and gazelles undertake an epic 1,800-mile journey from Tanzania\'s Serengeti to the Mara and back, creating one of nature\'s most spectacular events. Beyond the migration, the Mara is home to the Big Five (lions, African elephants, Cape buffalo, African leopards, and rhinoceros), along with countless other species including hyenas, cheetahs, and over 450 bird species. The diverse ecosystems within the reserve range from savanna plains to riverine forests, providing varied habitats for wildlife. Visitors can enjoy thrilling game drives, hot air balloon safaris at sunrise, and guided nature walks led by experienced rangers who share fascinating insights about the ecosystem and animal behavior.',
  },
  {
    id: 2,
    title: 'Amboseli National Park',
    description: 'Stand beneath the snow-capped Mount Kilimanjaro and encounter massive herds of African elephants roaming the vast Amboseli plains with pristine views.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&h=600&fit=crop',
    fullDescription: 'Amboseli National Park, located in southeastern Kenya near the Tanzania border, is famous for offering the most spectacular views of Mount Kilimanjaro - Africa\'s highest mountain. The park covers approximately 392 square kilometers and is a haven for elephant lovers, with one of the largest concentrations of African elephants in the world. The landscape is characterized by vast plains, seasonal swamps, and sparse acacia trees. Despite its arid appearance, Amboseli supports remarkable wildlife diversity including lions, leopards, cheetahs, buffalo, giraffes, zebras, and numerous bird species. The park has several observation points where visitors can photograph elephants with the iconic snow-capped Kilimanjaro in the background - a photographer\'s dream. Amboseli is also known for its long-term elephant research programs, and visitors often encounter habituated elephant herds that tolerate vehicle approaches. The best time to visit is during the dry seasons (June-October and January-February) when wildlife congregates around water sources.',
  },
  {
    id: 3,
    title: 'Lake Nakuru National Park',
    description: 'Marvel at the stunning spectacle of thousands of pink flamingos flocking around Lake Nakuru\'s alkaline waters, surrounded by diverse wildlife.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop',
    fullDescription: 'Lake Nakuru National Park is one of Kenya\'s most scenic parks, centered around the stunning alkaline Lake Nakuru. Historically famous for hosting millions of lesser flamingos that would turn the lake pink, the park remains a bird-watcher\'s paradise with over 450 bird species recorded. The lake\'s salinity supports unique algae blooms that attract vast flocks of flamingos, though numbers vary with rainfall. Beyond the flamingos, Lake Nakuru is home to an impressive array of wildlife including lions, African buffalo, zebras, giraffes, warthogs, and the endangered Rothschild\'s giraffe. The park features several scenic viewpoints, walking trails through acacia woodland, and a picturesque waterfall. The alkaline lake itself is surrounded by rocky outcrops and lush vegetation, creating diverse habitats for wildlife. The park is easily accessible from Nairobi and can be visited as a day trip or longer safari. Visit during the wet season (March-May) for the best chance of seeing large flamingo populations.',
  },
  {
    id: 4,
    title: 'Tsavo East & West National Parks',
    description: 'Explore one of the world\'s largest national parks, famous for its red elephant herds, stunning volcanic landscapes, and the dramatic Mzima Springs.',
    image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34533?w=1200&h=600&fit=crop',
    fullDescription: 'Tsavo is one of the world\'s largest national parks, encompassing approximately 22,000 square kilometers of pristine wilderness split into Tsavo East and Tsavo West. The parks are famous for their large herds of African elephants, which are known for their distinctive reddish coloring due to the red volcanic soil in the region. Tsavo\'s landscape is incredibly diverse, featuring volcanic calderas, rocky outcrops, semi-arid plains, and riverine forests. The Galana and Tsavo rivers cut through the parks, creating life-giving corridors for wildlife. Mzima Springs, a major attraction in Tsavo West, is a series of freshwater springs that support dense vegetation and attract large concentrations of wildlife. The underwater viewing chamber at Mzima Springs offers a unique opportunity to observe hippos, crocodiles, and fish in their natural habitat beneath the water. Tsavo is home to the Big Five and numerous other species. The remote nature of Tsavo makes it less crowded than other parks, offering a more authentic safari experience. Both parks offer excellent game drives, hiking opportunities, and camping experiences.',
  },
  {
    id: 5,
    title: 'Samburu National Reserve',
    description: 'Discover unique wildlife adapted to arid landscapes including the Samburu zebra, reticulated giraffe, and gerenuk in this remote northern reserve.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop',
    fullDescription: 'Samburu National Reserve is a remote and pristine wilderness in northern Kenya, offering a unique safari experience distinct from more crowded southern parks. The reserve spans approximately 165 square kilometers and is characterized by semi-arid terrain with acacia forests and rocky outcrops. What makes Samburu special is its endemic wildlife species found nowhere else in Kenya - including the Samburu zebra (with narrow stripes), reticulated giraffe, gerenuk (a unique antelope that stands on hind legs), and the arid-adapted fringe-eared oryx. Samburu also hosts the Big Five, wild dogs, cheetahs, and numerous bird species. The Ewaso Nyiro River is the lifeblood of the reserve, creating a dramatic contrast with its surrounding arid landscape and attracting wildlife seeking water. The reserve is home to several Samburu warrior communities, and cultural visits provide authentic insights into traditional pastoral life. Due to its remoteness, Samburu remains less touristy than southern parks, offering a more intimate safari experience. The landscape\'s dramatic beauty, combined with unique wildlife and cultural opportunities, makes Samburu a must-visit destination for experienced safari enthusiasts.',
  },
  {
    id: 6,
    title: 'Lake Naivasha',
    description: 'Relax beside this serene freshwater lake surrounded by lush forests and abundant birdlife. Perfect for boat safaris and wildlife encounters.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    fullDescription: 'Lake Naivasha is one of Kenya\'s largest freshwater lakes, located in the Great Rift Valley approximately 60 kilometers northwest of Nairobi. Unlike other Rift Valley lakes, Naivasha\'s freshwater makes it uniquely suited for a variety of recreational activities and wildlife viewing. The lake is surrounded by lush, green vegetation including acacia woodlands and papyrus swamps, creating a scenic and biologically rich environment. Lake Naivasha is a haven for birdwatchers, with over 450 bird species recorded including fish eagles, pelicans, cormorants, and countless waterfowl. The lake is also home to hippos, Nile crocodiles, giraffes, zebras, and other wildlife. Boat safaris on the lake offer excellent opportunities to observe hippos and birds up close, while visits to the scenic islands (particularly Crescent Island and Sopa Island) provide wildlife viewing and walking opportunities. The area surrounding the lake features numerous lodges and resorts, making it an excellent base for relaxation between safari activities. Lake Naivasha is also known as a flower-growing hub, and many lodges feature stunning gardens. The lake can be visited during any season, with warm, pleasant weather throughout the year.',
  },
  {
    id: 7,
    title: 'Hell\'s Gate National Park',
    description: 'Hike through dramatic red cliffs and encounter wildlife roaming freely. This unique park offers adventure activities and geothermal wonders.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop',
    fullDescription: 'Hell\'s Gate National Park is a unique destination that combines stunning geological features with adventure activities and wildlife encounters. Located in the Great Rift Valley, the park is named for its narrow gorge with towering 300-meter-high red rock cliffs. What sets Hell\'s Gate apart from other Kenyan parks is the opportunity to hike and walk freely among the wildlife - visitors can trek on foot or by bike through the reserve, creating an intimate connection with nature. The park features dramatic geothermal features including hot springs, geysers, and steaming vents, visible as part of the crater landscape. Hell\'s Gate is home to diverse wildlife including buffalo, zebras, antelopes, hyenas, and over 60 bird species including the majestic lammergeier (bearded vulture). The park\'s geological formations are spectacular, with hiking trails offering breathtaking views of the gorge. Adventure activities available include rock climbing on designated cliffs, paragliding over the valley, and hot air balloon rides. The combination of geological drama, adventure opportunities, and unique wildlife access makes Hell\'s Gate an unforgettable destination.',
  },
  {
    id: 8,
    title: 'Diani Beach (Mombasa Coast)',
    description: 'Unwind on pristine white-sand beaches with crystal-clear turquoise waters. Perfect for snorkeling, diving, and experiencing coastal Swahili culture.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    fullDescription: 'Diani Beach is one of Kenya\'s most popular coastal destinations, renowned for its stunning white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs. Located south of Mombasa, Diani stretches for kilometers along the Indian Ocean, offering a tropical paradise for beach lovers and water sports enthusiasts. The beach is backed by lush coconut groves, traditional Swahili villages, and modern beach resorts. The offshore coral reefs make Diani an exceptional destination for snorkeling and scuba diving, with abundant marine life including colorful fish, sea turtles, and rays. The calm, warm waters are perfect for swimming, paddleboarding, and kayaking. Beyond water activities, Diani offers opportunities to explore Swahili culture, visit local markets, and enjoy fresh seafood at beachfront restaurants. The nearby Shimba Hills National Reserve provides wildlife viewing opportunities within easy reach of the beach. Diani is also known for its excellent beach resorts offering spa services, water sports, and cultural experiences. The area enjoys warm weather year-round, making it suitable for visits during any season, though the driest periods (July-September) are most popular.',
  },
  {
    id: 9,
    title: 'Lamu Island',
    description: 'Step back in time on this UNESCO World Heritage Site with narrow streets, historic architecture, and traditional dhow sailing experiences.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    fullDescription: 'Lamu Island is a UNESCO World Heritage Site representing an exceptional example of Swahili coastal culture and architecture. Located off the coast of northeastern Kenya, Lamu has been a major trading hub since the 14th century, and much of its historic character has been preserved. The narrow streets of Lamu Town are lined with beautifully restored coral stone buildings featuring intricate wooden doors and balconies, creating a charming and photogenic environment. The island is a car-free zone, with transportation by foot, donkey, or traditional dhow boats, preserving its timeless character. Visitors can explore the fascinating history at the Lamu National Museum, visit the Friday Mosque (one of the oldest in East Africa), and enjoy traditional Swahili cuisine at waterfront restaurants. The island\'s beaches offer pristine settings for relaxation and water activities. Traditional dhow sailing excursions provide opportunities to explore nearby islands and experience authentic maritime culture. The annual Lamu Cultural Festival celebrates the island\'s heritage through music, dance, and traditional sports. Despite tourism development, Lamu retains an authentic atmosphere that transports visitors back in time. The island offers a unique cultural experience distinct from typical safari tourism.',
  },
  {
    id: 10,
    title: 'Watamu & Malindi',
    description: 'Explore charming coastal towns with beautiful beaches, vibrant coral reefs, marine parks, and rich Swahili heritage blended with modern amenities.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop',
    fullDescription: 'Watamu and Malindi are charming coastal towns located on Kenya\'s north coast, offering a perfect blend of beautiful beaches, vibrant marine ecosystems, and cultural experiences. Watamu is known for its pristine beaches, excellent snorkeling and diving opportunities, and the Watamu Marine National Park, which protects an area of exceptional coral biodiversity. The park features three coral reefs perfect for snorkeling, with opportunities to see sea turtles, dolphins, and countless fish species. Malindi, located just north of Watamu, is a larger coastal town with a more developed tourist infrastructure. Malindi\'s attractions include its historic Old Town with Portuguese colonial architecture, the fascinating Malindi Marine Park, and excellent beaches. Both towns offer water sports including sailing, windsurfing, and sport fishing. The area is famous for its sailfish and marlin fishing. The coastal communities maintain strong Swahili traditions, evident in local cuisine featuring fresh seafood, traditional architecture, and cultural sites. The Gedi Ruins, an ancient Swahili settlement, can be visited from either town. The combination of excellent marine biodiversity, cultural heritage, and beach relaxation makes Watamu and Malindi ideal for diverse travel experiences.',
  },
  {
    id: 11,
    title: 'Mount Kenya',
    description: 'Challenge yourself to climb Africa\'s second-highest peak with breathtaking alpine scenery, diverse ecosystems, and an unforgettable adventure.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
    fullDescription: 'Mount Kenya is Africa\'s second-highest mountain at 5,199 meters (17,057 feet), offering world-class mountaineering opportunities and stunning alpine scenery. Unlike Mount Kilimanjaro, Mount Kenya presents technical climbing challenges requiring mountaineering skills and experience. The mountain features two main peaks - Batian (5,199m) and Nelion (5,188m) - with several climbing routes of varying difficulty. Point Lenana (4,985m) offers a non-technical trekking route accessible to fit hikers without climbing experience, still providing breathtaking views and genuine wilderness experience. Mount Kenya is surrounded by a national park protecting diverse ecosystems ranging from bamboo forests at lower elevations to alpine meadows and rocky alpine terrain. The diverse habitats support unique wildlife including buffalo, elephants, leopards, and numerous endemic bird species. The mountain\'s ecological zones change dramatically with elevation, providing distinct experiences at different altitudes. Multiple acclimatization routes (Naro Moru, Sirimon, Chogoria) accommodate different fitness levels and preferences. The clear air at higher elevations provides spectacular views across Kenya\'s highlands. Climbs typically take 4-5 days, with comfortable mountain huts available on established routes. Mount Kenya remains one of Africa\'s most rewarding mountaineering experiences.',
  },
  {
    id: 12,
    title: 'Nairobi National Park',
    description: 'Discover wildlife viewing just minutes from Kenya\'s capital city. See lions, rhinos, giraffes, and buffalo against Nairobi\'s unique skyline backdrop.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop',
    fullDescription: 'Nairobi National Park is a unique wildlife destination located just kilometers from Kenya\'s bustling capital city. Established in 1944, it was Kenya\'s first national park and remains one of the world\'s most unusual parks, where animals roam freely against a backdrop of the city\'s skyline. The park covers approximately 117 square kilometers and is home to all of Kenya\'s major wildlife species including the Big Five (lions, African elephants, Cape buffalo, African leopards, and rhinoceros). The park is particularly important for black rhino conservation, hosting one of East Africa\'s largest populations. Beyond the Big Five, visitors can see giraffes, zebras, wildebeest, warthogs, cheetahs, and over 400 bird species. The park features diverse habitats including open plains, acacia woodlands, and riverine forests along the Nairobi River. The David Sheldrick Wildlife Trust is located adjacent to the park, offering opportunities to see orphaned baby elephants and rhinos. The park offers excellent game drives from Nairobi, making it ideal for visitors with limited time. Multiple viewpoints provide panoramic vistas across the savanna. Nairobi National Park remains one of Africa\'s most accessible wildlife experiences while maintaining authentic safari atmosphere. Early morning game drives offer the best wildlife viewing opportunities.',
  },
  {
    id: 13,
    title: 'Ol Pejeta Conservancy',
    description: 'Visit a world-leading conservation center home to the last northern white rhinos, chimpanzees, and other endangered species in a community-based reserve.',
    image: 'https://images.unsplash.com/photo-1504681869696-d977e3a34533?w=1200&h=600&fit=crop',
    fullDescription: 'Ol Pejeta Conservancy is a privately-managed wildlife reserve of approximately 35,000 acres located in central Kenya\'s Laikipia region. Far more than just a tourism destination, Ol Pejeta is one of the world\'s leading wildlife conservation facilities, dedicated to protecting Africa\'s most endangered species. The conservancy is globally significant as the home of the last two northern white rhinos, making it a critical conservation facility for this nearly-extinct subspecies. Beyond rhinos, Ol Pejeta protects the Big Five and numerous other species in a richly diverse ecosystem spanning various habitats from open grasslands to riverine forests. The conservancy is renowned for its chimpanzee sanctuary, providing refuge for rescued chimpanzees in a spacious, naturalistic habitat where they can exhibit natural behaviors. Ol Pejeta engages in extensive wildlife research and community education initiatives, with local Maasai communities being key conservation partners. The conservancy offers excellent game drives with professional guides, guided nature walks, and educational programs about conservation efforts. Visitors can participate in conservation activities and learn about efforts to protect endangered species. The combination of exceptional wildlife viewing, critical conservation work, and educational opportunities makes Ol Pejeta a unique and meaningful destination. All tourism revenue directly supports ongoing conservation efforts, making visitor dollars directly impact endangered species protection.',
  },
];

export default function DestinationDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const destination = destinationsData.find((d) => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <Link href="/#destinations" className="text-green-600 hover:text-green-700">
            ← Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="pt-6 px-6 md:px-16">
        <Link
          href="/#destinations"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Destinations
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
          {destination.title}
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {destination.description}
        </p>

        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-8">
            {destination.fullDescription}
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Ready to Explore?</h2>
          <p className="text-gray-700 mb-6">
            Book your trip to {destination.title} with Craydel Africa Travel and experience unforgettable adventures.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded transition-colors">
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>
  );
}
