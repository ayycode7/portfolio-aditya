import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Princess of the Desert",
      category: "Feature Script",
      description: "A 40-year epic following a Rajasthani mother and son from 1980 onward. A meditation on patriarchy, intimacy, and how systemic violence fractures the closest bonds.",
      fullDescription: `A film spanning 1980 to 2020+, shot in three distinct tonal registers: realist, psychological, and surrealist.

In a remote Rajasthani village, a widow raises her son alone after her husband dies in political violence. Through childhood, she's his world—his teacher, his shelter, his first understanding of love and inequality. At adolescence, their bond intensifies but becomes fractured with the violence of puberty and social conditioning. By twenty, away in college, the son discovers another world and another woman. Distance hardens into estrangement.

Years pass. Corporate work. A planned marriage. Upon returning home for the wedding, the son discovers a rumor: his mother has taken a male companion. Betrayed by a story he only half-understands, he ruptures the relationship entirely. On the way to his new life, a fatal car accident kills his bride. The son survives but broken.

What follows is a descent into the surreal—a winter dreamscape where he returns to find his mother aging rapidly, losing her mind to dementia. In her final moments, lucid and devastating, she speaks: he chose to be a man over being her son. He chose the system. In choosing the world of corporate greed, masculine ambition, and patriarchal structures, he chose his own death.

The film ends where the accident began.

A portrait of how patriarchy destroys not just women, but the men it claims to serve. How love becomes collateral damage to ideology.`,
      media: {
        type: "text",
        content: "Full script available upon request with NDA"
      }
    },
    {
      id: 2,
      title: "Film Criticism: On Denis Villeneuve's Maelstrom (2000)",
      category: "Writing",
      description: "An essay exploring how Villeneuve traces grandeur through visual language—from dams to scattered ashes—and structures narrative as fever dream. On guilt, choice, and the relentless weight of consequence.",
      fullDescription: `There is a certain delight in tracing back on a director's filmography and finding out that the baby steps were in alignment with the present ones. Denis Villeneuve has always been an auteur with the same thematic fascination he now meticulously uses to mesmerize the modern sci-fi-loving audience - grandiose. Everything that Villeneuve chooses to film is grand, be it a magnificent dam, two humans reluctantly making out, or the scattered ashes of a person (Some other examples of this from the rest of his films are - the spider from Enemy, the close-ups of Jake and Hugh in Prisoners, the spaceship in Arrival, the arid landscapes in Dune and Incendies, and literally everything in BR 2049). And he shows us this grandeur with a lingering sense of dread and amazement. How can there exist a natural or man-made structure with seemingly no beginning or end, at least to the relatively infinitesimal observer, Villeneuve asks. The answer lies within the films' characters but Denis refuses to give an explicit answer by never letting them get to the conclusion.

Maelstrom was Denis's second feature film and possibly the best one from his early French-Canadian phase. He's bursting with ideas on this one, touching on themes of guilt, death, entitlement, and choice. The cinematography is really, really pretty and the sound design is exquisite. The film is structured to feel like a fever dream, a puzzle broken into pieces and attached haphazardly. A surreal version of Nolan's Momento. In parts this film presents you with basic hedonistic theories about life but as a whole this is a cautionary tale against the same. People should be more responsible for the 'accidents' that happen to them and the ones that they cause. Overall I felt that the film is entirely about abortion (that's how the film starts) and the relentless guilt that follows with it on the person that had it done. It was a bit too on the nose really, with its obvious parallels and talking fishes. The pacing of this film is continuous and by the time it ends, with a very cheerful "Good Morning Starshine", we see an outstanding example of cinema.`,
      media: {
        type: "text",
        content: "Originally published on Letterboxd"
      },
      link: "https://letterboxd.com/adityachoudhary/film/maelstrom/"
    },
    {
      id: 3,
      title: "प्रतिबिम्ब (Reflection)",
      category: "Short Story",
      description: "A philosophical narrative in Hindi exploring identity through the metaphor of shadow and reflection. How do we construct ourselves across multiple contexts? What is authentic when we are always mirrors to others?",
      fullDescription: `प्रतिबिम्ब

दोपहर की कड़ी धूप में एक पथिक अपनी ही परछाई को अपना इकलौता मित्र माने चल पड़ता है और प्यास व पैरों तले चुभती गर्म रेत की मार को बीच-बीच में भूलाने के लिए उस परछाई को देखता जाता है। जैसे जैसे समय बीतता है, वैसे ही परछाई अपना क़द बदलती जाती है और पथिक असमंजस में पड़ जाता है कि आख़िर ऐसा क्यूँ हो रहा है। वही सूरज जिसकी तीक्ष्ण रेखाएँ मेरे मस्तक के आर पार जा रही हैं वह मेरी परछाई को भी सताकर उसे मेरे पीछे छिपने को मजबूर कर रहा है। पर मैं ऐसे मित्र का क्या करूँ जो मेरा ही फ़ायदा उठा ले और ज़रूरत पड़ने पर मेरे साथ सटकर खड़ा ना हो? जिस लम्बाई के साथ ये परछाई साथ चलने लगी थी तब तो लगा कि मेरे हिस्से की एक दो आपत्तियाँ भी शायद ये अपने अंदर समेट ले पर मित्रगण तो हर घड़ी अपना रूप बदलता गया, सबसे मुश्किल समय में तो जैसे कि ग़ायब ही हो गया हो और जब साँझ ढलने को आयी तो वापस विराट रूप धारण कर लिया। पथिक को ऐसे कपटी जीव को अपने मित्र का सम्बोधन देना उचित नहीं लगा और उसने फ़ैसला किया की आगे से वह अपने प्रतिबिम्ब को सिर्फ़ एक मनोरंजन के श्रोत की तरह ही देखेगा। पथिक ने इस विचार के साथ अपनी हफ़्ते भर लम्बी यात्रा के पहले दिन को समाप्त किया।

एक मशहूर लेखक ने अपने कई सालों बाद मिले कॉलेज के घनिस्ठ मित्र से कहा - "जापान में एक प्राचीन कथन के अनुसार हर मनुष्य के तीन चेहरे होते हैं। पहला जो वो दुनिया को दिखाते हैं जिसमें उनका व्यक्तित्व झलकता है। दूसरा चेहरा जो वह अपने करीबी दोस्त ऐंव परिवार को दिखाते है जिनसे उनका अपनत्व बयान पड़ता है। और तीसरा जो स्वयं के अलावा किसी को दिखायी नहीं पड़ता और वो इंसान का असली प्रतिबिम्ब होता है। मेरे प्रिय मित्र, मैं इन चेहरों के बीच में हर दूसरे पल अदला-बदली करके थक चुका हूँ। में चाहता हूँ कि मेरा सिर्फ़ एक ही चेहरा रहे पर मैं ये दुविधा में हूँ की आख़िर कौनसे नक़ाब को चुनूँ। मेरा व्यक्तित्व जीवन के इस अध्याय पर पहुँचते हुए काफ़ी पैठ बांध चुका है और मुझे इस वजह से काफ़ी बार तारीफ़ भी मिल चुकी है पर असलियत में मुझे अपने इस चेहरे से घृणा है। ना ही ये चेहरा मेरे बचपन के दौरान कभी था, ना ही इस चेहरे से मैंने अपने जीवन साथी को पाया और एकांत के क्षणों में अपने आप को इस चेहरे से सबसे दूर पाता हूँ। अपनत्व वाला मुखौटा जितना मुझे अपने परिवार और दोस्तों से जोड़े रखता है उतना ही तोड़ता भी है। इस चेहरे के भीतर मैंने तुम सबसे आशाएँ बना रखी है जो पूरी नहीं होते हुए दिखने पर मुझे पीड़ा पहुँचाती हैं। और मैं अपने असली प्रतिबिम्ब को तो कभी चाहते हुए भी बाहर नहीं ला सकता। जैसे विचार मेरे एक दिन में ही प्रकट होकर अदृश्य हो जाते हैं वो अगर कभी समाज के सामने निकल आए तो मेरा करियर तो दूर की बात, मुझ खुद को ही बर्खास्त किया जा सकता है।"
"मुझे ये सब सुनकर विश्वास नहीं हो रहा कि तुम जो अपनी मंडली के सबसे बुद्धिमान थे वह अब इन आसान से सांसारिक पैंतरों में उलझ रखे हो।" मित्र ने लेखक के कमरे में छान-बिन करते हुए कहा। "तुम्हारे इस सवाल का जवाब तुमने खुद ही दे दिया पर तुम पहचानने से रह गए।"
"क्या मतलब है तुम्हारा?" लेखक ने पूछा।
मित्र ने उत्तर दिया - "तुम्हें याद है जब हम पाँचो पहली बार दीवार फाँद कर शिवगंगा के अंदर पहुँच गए थे और वापस आते समय हमें खुद चीफ़ वॉर्डन ने ही पकड़ लिया था? तब तुम्हारे हिसाब से कोनसा चेहरा इस्तेमाल किया होगा तुमने? अंदर से तुम्हें एक आवाज़ चिल्ला कर कह रही थी की अंधेरे में शकल तो दिख नहीं रही, भागने में भलाई है। दूसरा चेहरा सोच रहा था की इन चारों को छोड़ कर मैं कहीं नहीं जाने वाला क्यूँकि हर घड़ी में साथ रहना ही मित्रता की पहचान है। तीसरा चेहरा सोच रहा था कि वॉर्डन के सामने गिड़गिड़ा कर, भोला सा चेहरा बनाकर और झूठ बोलकर इस संकट से सस्ते में निजात पालूँ। कौनसा चेहरा इस्तेमाल किया फिर तुमने?"
लेखक ने हंसते हुए कहा - "जहां तक मुझे याद है मैंने तो सारे चेहरे ही एक के बाद एक इस्तेमाल कर लिए होंगे। कॉलेज से निरस्त होने के डर में मुझसे तो 5 मिनट तक कोई शब्द ही नहीं निकले। जैसे सब एक जुट होकर बोल रहे थे वैसे ही मैं हाँ में हाँ मिलाता गया।"
"और ये रहा आपका जवाब। ये तीनों चेहरे एक दूसरे से अलग नहीं है। तुम स्वयं ही इस कथन के अर्थ का विश्लेषण किए बिना हम सबको को तीन भागो में बाँट दिए। जब तुमने कॉलेज में अपना पहला कदम रखा तब तुम्हारा ना ही कोई दोस्त था और ना ही किसी तरह का सामाजिक उठना बैठना। तुम एक छोटे बच्चे की तरह थे जिसने अभी अभी चलना सीखा हो। उस घड़े की तरह जिसपर से कलाकार का हाथ अभी तक नहीं हटा। पर तुम 5000 अजनबियों के बीच में भी उन्ही लोगों के साथ रहे जो तुम्हें खुद के प्रतिबिम्ब लगे। तुम्हारा खुद को दिखने वाला चेहरा ही तुम्हें हम तक खींचकर लाया है। लोग जब व्यक्तित्व की बात करते हैं तब वह ये भूल जाते हैं कि उनकी पर्सनालिटी वो खुद नहीं बनाते बल्कि उनका बाक़ी लोगों से पारस्परिक प्रभाव उनके लिए ये काम करके देती है। अंतरिक्ष सम्बन्धी चीजों में रुचि रखने वाले को सबसे पहले ऐस्ट्रो क्लब का भाग बनने का सुझाव दिया जाता है। यूँही समान भाषा बोलने वालों का अलग समुदाय बन जाता है।कॉलेज में हॉस्टल शुरू में बिना पूछे मिलता है और बिना पूछे ही विंग बन जाती है। पर तुम फिर भी नहीं रुकते। अगर तुम ये चेहरों के बीच उलझे रहते तो शायद कभी अपनी विंग से बाहर निकलते ही नहीं पर तुम अपने ही प्रतिबिंब की तलाश में उन लोगों को ढूँढ लिए जिनसे सबसे ज़्यादा तुम्हें अपनापन व उलास्स मिला। अपनी मंडली को ही देखलो। सयोंग से हमें तो विंग के बाहर देखना ही नहीं पड़ा। ग्रूप में कोई छोटू कहलाया जाता था तो कोई बिग बूटी। किसी से तुमने रुबिक्स क्यूब सुलझाना सीखा तो किसी ने तुम्हारी परीक्षा से एक हफ़्ते पहले विषय समझने में मदद करी। पर तुम सबसे वही हुनर सीखे जो तुम्हें सही लगा। शीशे के सामने हम खुद को इसलिए देख पाते है क्यूँकि लाइट की किरणें अलग अलग कोनों से मिलकर तुम तक पहुँचती है। उसी तरह इंसान का चेहरा, उसका प्रतिबिम्ब अलग अलग जगहों से आए हुए पर एक जगह एकजुट हुए उसके दोस्तों और परिवार से बनता है।"

पथिक को यात्रा करते हुए 5 दिन होने को आए। उसको अपनी परछाई से अब लगाव हो चुका था। उसे हर समय बदलती अपनी परछाई की काया का अंदाज़ा लग चुका था और वो राह में चलते हुए उससे बार बार बातचीत भी कर लेता। पथिक ने जान लिया था की वो अपनी निकट से निकट वस्तु को भी बदलने से रोक नहीं सकता पर उसे अब परवाह नहीं थी क्यूँकि उसे अब अपने मित्र से मनोरंजन नहीं बल्कि सफ़र में साथ की ही ज़रूरत थी जो की उसे अपनी परछाई के संग मिल रही थी। पथिक ने ये भी जाना की रात के समय जब परछाई चली जाती है तब वह उसे अकेला नहीं छोड़ रही। दिन के हर अध्याय में साथ होने से ज़्यादा मायने ये रखता है की नए दिन के लिए भी एक समय ऐसा हो जब वह मित्र हमारे पास हो । समय के अनंत चक्र और ज़िंदगी की नश्वर रेखा के बीच में ये साथ ही हमें आगे बढ़ते हुए रखता है। यही मित्रता है, यही साथ है, यही प्रेम है और यही हमारा प्रतिबिम्ब है।`,
      media: {
        type: "text",
        content: "Written for college Hindi club. A philosophical narrative exploring identity, reflection, and the construction of self across multiple contexts."
      }
    }
  ];

  const posters = [
    '/posters/1681402596229915.jpg',
    '/posters/1681749598307518.jpg',
    '/posters/1681749635190430.jpg',
    '/posters/1681964878637828.jpg',
    '/posters/1683799859709386.jpg',
    '/posters/1684707157434522.jpg',
    '/posters/1699416656195630.jpg',
    '/posters/1756123360524930.jpg',
    '/posters/MV5BMjllYmQ2OGQtN2IxZC00ODJiLWI4NjQtYmNlZjYzNzUzYjkyXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg'
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">Aditya Choudhary</h1>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-gray-300 transition">About</a>
            <a href="#work" className="hover:text-gray-300 transition">Work</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero with Large Poster Background */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Large backdrop posters */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/70 to-black z-10"></div>
          <div className="absolute top-0 right-[10%] h-96 w-64 rotate-6 opacity-40">
            <img src={posters[0]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
          </div>
          <div className="absolute top-20 left-[5%] h-80 w-56 -rotate-12 opacity-35">
            <img src={posters[1]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
          </div>
          <div className="absolute bottom-0 right-[30%] h-72 w-48 rotate-3 opacity-30">
            <img src={posters[2]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-20">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Aditya Choudhary
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Aspiring Writer & Director. I work across screenplays, essays, strategy, design. Good at figuring things out and executing. Driven by arthouse cinema and unafraid of ambitious ideas.
              </p>
              <div className="pt-4">
                <a href="#work" className="inline-flex items-center gap-2 text-sm border border-white px-6 py-3 hover:bg-white hover:text-black transition">
                  View My Work
                  <ChevronDown size={16} />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-64 rounded-lg overflow-hidden border-2 border-gray-700 shadow-2xl">
                <img src="/profile.jpeg" alt="Aditya Choudhary" className="w-full h-auto" />
              </div>
              <div className="text-center border border-gray-700 py-3 px-4 bg-gray-900/50">
                <p className="text-lg font-bold text-white tracking-wide">BITS Pilani</p>
                <p className="text-sm text-gray-400">BE Mechanical Engineering '22</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
        {/* Large visible posters */}
        <div className="absolute top-0 right-0 h-full w-80 opacity-60 -z-0 hidden lg:block">
          <img src={posters[3]} alt="" className="h-full w-full object-cover border-l-4 border-r-4 border-gray-700 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="absolute top-32 left-[15%] h-48 w-32 opacity-40 -z-0 hidden xl:block">
          <img src={posters[4]} alt="" className="h-full w-full object-cover border-3 border-gray-700 shadow-xl -rotate-6" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold mb-8">About</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-300">
              <p>
                I write. I write screenplays, essays, strategy docs, whatever needs to be written. I can work in registers from the cerebral to the populist, and I'm comfortable with both. The work is what matters.
              </p>
              <p>
                I'm influenced by filmmakers who know what they're doing—Malick, Tarkovsky, Lynch, Noé. I watch a lot. I think about form and structure constantly. I believe in doing things properly or not at all.
              </p>
              <p>
                Right now I'm developing Princess of the Desert, a 40-year feature that interrogates patriarchy and systems through an intimate story. Beyond that—writing, thinking, building whatever comes next.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-white mb-3">Cinematic Influences</h4>
              <div className="text-gray-400 text-sm space-y-3">
                <p><strong>Visual Architects:</strong> Terrence Malick, Stanley Kubrick, Michael Haneke, Andrei Tarkovsky, Michelangelo Antonioni</p>
                <p><strong>Narrative Interrogators:</strong> Paul Thomas Anderson, Denis Villeneuve, Gaspar Noé, Nicholas Roeg, Lars von Trier</p>
                <p><strong>Character & Nuance:</strong> Mike Leigh, Abbas Kiarostami, Edward Yang, Aki Kaurismäki, Jim Jarmusch</p>
                <p><strong>Genre Subversors:</strong> Coen Brothers, Ari Aster, Safdie Brothers, David Lynch, Terry Gilliam</p>
                <p><strong>Foundational:</strong> Satyajit Ray, Akira Kurosawa, Ingmar Bergman, Frederico Fellini, Nagisa Oshima, Werner Herzog</p>
                <p><strong>Experimental & Transcendent:</strong> Alejandro Jodorowsky, Godfrey Reggio, Satoshi Kon, Agnes Varda, Claire Denis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20 px-6 relative overflow-hidden">
        {/* Poster Grid Header */}
        <div className="absolute top-0 left-0 right-0 h-56 -z-10 hidden md:flex justify-center gap-6 opacity-45">
          <div className="h-full w-auto -rotate-3">
            <img src={posters[5]} alt="" className="h-full w-auto object-cover border-4 border-gray-700 shadow-2xl" />
          </div>
          <div className="h-full w-auto rotate-2">
            <img src={posters[6]} alt="" className="h-full w-auto object-cover border-4 border-gray-700 shadow-2xl" />
          </div>
          <div className="h-full w-auto -rotate-1">
            <img src={posters[7]} alt="" className="h-full w-auto object-cover border-4 border-gray-700 shadow-2xl" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        {/* Side posters */}
        <div className="absolute top-60 left-[-50px] h-72 w-48 opacity-60 rotate-6 -z-10 hidden xl:block">
          <img src={posters[0]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
        </div>
        <div className="absolute bottom-40 right-[-50px] h-80 w-52 opacity-60 -rotate-6 -z-10 hidden xl:block">
          <img src={posters[8]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
        </div>
        <div className="absolute bottom-10 left-[8%] h-56 w-40 opacity-35 rotate-12 -z-10 hidden lg:block">
          <img src={posters[1]} alt="" className="h-full w-full object-cover border-3 border-gray-700 shadow-xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold mb-12 pt-12">Portfolio</h3>

          <div className="space-y-6">
            {projects.map((project) => (
            <div key={project.id} className="border border-gray-800 hover:border-gray-600 transition">
              <button
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                className="w-full p-6 flex justify-between items-start md:items-center hover:bg-gray-950 transition"
              >
                <div className="text-left">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{project.category}</p>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 ml-4 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`}
                />
              </button>

              {expandedProject === project.id && (
                <div className="border-t border-gray-800 p-6 bg-gray-950">
                  <p className="text-gray-300 mb-6 whitespace-pre-line">{project.fullDescription}</p>

                  {project.media.type === 'video' && (
                    <div className="aspect-video bg-black rounded mb-6">
                      <iframe
                        width="100%"
                        height="100%"
                        src={project.media.url}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded"
                      />
                    </div>
                  )}

                  {project.media.type === 'text' && (
                    <p className="text-gray-400 italic mb-6 border-l-2 border-gray-600 pl-4">
                      {project.media.content}
                    </p>
                  )}

                  {project.image && !project.media.url && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded mb-6"
                    />
                  )}

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm border border-gray-600 px-4 py-2 inline-flex items-center gap-2 hover:border-white transition">
                      Read Full Review <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </section>

      {/* Background */}
      <section className="py-20 px-6 border-t border-gray-800 relative overflow-hidden">
        {/* Large poster background */}
        <div className="absolute bottom-0 left-[10%] h-96 w-64 opacity-50 rotate-[-8deg] -z-10 hidden lg:block">
          <img src={posters[2]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
        </div>
        <div className="absolute top-10 right-[5%] h-80 w-56 opacity-45 rotate-12 -z-10 hidden xl:block">
          <img src={posters[3]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
        </div>
        <div className="absolute bottom-32 right-[25%] h-52 w-36 opacity-35 rotate-3 -z-10 hidden lg:block">
          <img src={posters[4]} alt="" className="h-full w-full object-cover border-3 border-gray-700 shadow-xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold mb-12">Background</h3>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Work */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Professional</h4>
            <div className="space-y-6 text-gray-400 text-sm">
              <div>
                <p className="font-bold text-white">Product Manager</p>
                <p className="text-xs text-gray-500">MyGate, Bangalore</p>
                <p className="text-xs text-gray-500">Oct 2024 – Present</p>
              </div>
              <div>
                <p className="font-bold text-white">Program Manager</p>
                <p className="text-xs text-gray-500">Ampyr Energy, New Delhi</p>
                <p className="text-xs text-gray-500">Dec 2023 – Aug 2024</p>
              </div>
              <div>
                <p className="font-bold text-white">Associate Product Manager</p>
                <p className="text-xs text-gray-500">AasaanWill, Hyderabad</p>
                <p className="text-xs text-gray-500">Nov 2022 – Dec 2023</p>
              </div>
              <div>
                <p className="font-bold text-white">Startups & Early Work</p>
                <p className="text-xs text-gray-500">Turtle Learn (caricature/design)</p>
                <p className="text-xs text-gray-500">Elixar Systems (AR for NCERT)</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Education</h4>
            <div className="space-y-6 text-gray-400 text-sm">
              <div>
                <p className="font-bold text-white">BITS Pilani</p>
                <p className="text-xs text-gray-500">BE Mechanical Engineering</p>
                <p className="text-xs text-gray-500">2018 – 2022</p>
              </div>
              <div>
                <p className="font-bold text-white text-xs">Thesis:</p>
                <p className="text-xs text-gray-500">Computational Fluid Dynamics of Cerebral Blood Arteries</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Hindi Press Club</p>
                <p className="text-xs text-gray-400">Freelunch Literary Magazine</p>
                <p className="text-xs text-gray-400">TEDx BITS Pilani</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Skills & Practice</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div>
                <p className="text-xs font-bold text-gray-300 mb-2">Creative</p>
                <p className="text-xs">Sketching & illustration • Music production • Photography & videography • Photo/video editing</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-300 mb-2">Technical</p>
                <p className="text-xs">Python • SQL • Figma • Data visualization • Product thinking</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-300 mb-2">Writing</p>
                <p className="text-xs">Screenwriting • Essay • Critique • Cross-register narratives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
        {/* Large dramatic poster */}
        <div className="absolute top-0 right-0 h-full w-96 opacity-50 -z-0 hidden lg:block">
          <img src={posters[5]} alt="" className="h-full w-full object-cover border-l-4 border-r-4 border-gray-700 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
        </div>
        <div className="absolute bottom-10 left-[5%] h-72 w-48 opacity-40 rotate-6 -z-0 hidden md:block">
          <img src={posters[6]} alt="" className="h-full w-full object-cover border-4 border-gray-700 shadow-2xl" />
        </div>
        <div className="absolute top-20 left-[25%] h-56 w-40 opacity-30 -rotate-12 -z-0 hidden xl:block">
          <img src={posters[7]} alt="" className="h-full w-full object-cover border-3 border-gray-700 shadow-xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <div className="max-w-2xl">
            <p className="text-gray-400 mb-6">
              Open to conversations about cinema, script feedback, collaboration opportunities, or discussions about arthouse film. Reach out.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="mailto:adityachoudhary7ac@gmail.com" className="inline-flex items-center gap-3 text-lg border border-white px-8 py-4 hover:bg-white hover:text-black transition font-bold">
                <Mail size={20} />
                adityachoudhary7ac@gmail.com
              </a>
              <a href="tel:+918239904243" className="inline-flex items-center gap-3 text-lg border border-white px-8 py-4 hover:bg-white hover:text-black transition font-bold">
                <Phone size={20} />
                +91 8239904243
              </a>
            </div>
            <div className="mt-8 flex gap-6 text-sm">
              <a href="https://letterboxd.com/adityachoudhary/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Letterboxd</a>
              <a href="https://www.instagram.com/ayy.tone/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-600 text-sm">
        <p>© 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}
