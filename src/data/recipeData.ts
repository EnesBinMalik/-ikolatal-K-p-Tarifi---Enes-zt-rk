import { Ingredient, Step, NutritionFact, RecipeMeta, Review } from '../types';

export const RECIPE_META: RecipeMeta = {
  title: 'Çikolatalı Küp Tarifi',
  subtitle: 'Yoğun bitter çikolata, taze tereyağı ve çıtır yemişlerle hazırlanan, içi yumuşacık lokmalık çikolata şöleni.',
  author: {
    name: 'Enes Öztürk',
    role: 'Web Geliştirici & Mutfak Meraklısı',
    course: 'Frontend Web Geliştirme Eğitimi',
    assignment: 'Ödev 1: HTML Etiketleri ile Sevilen Yemek/Tatlı Web Sayfası',
    bio: 'Merhaba! Ben Enes Öztürk. Bu web projesinde hem mutfaktaki favori tatlım olan "Çikolatalı Küp" tarifini hem de HTML5 semantik etiketlerinin standartlara uygun doğru kullanımını bir araya getirdim.'
  },
  prepTimeMinutes: 15,
  cookTimeMinutes: 25,
  restTimeMinutes: 20,
  baseServings: 8,
  difficulty: 'Kolay',
  caloriesPerServing: 285,
  ratingAverage: 4.9,
  reviewCount: 48
};

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'chocolate',
    name: 'Kaliteli Bitter Çikolata',
    baseQuantity: 200,
    unit: 'gr',
    note: 'En az %60-%70 kakao oranına sahip olmalı',
    category: 'cikolata',
    htmlTagExplanation: '<ul> listesi içinde <li> elemanı ve miktarı vurgulamak için <strong> etiketi kullanılır.'
  },
  {
    id: 'butter',
    name: 'Tuzsuz Tereyağı',
    baseQuantity: 120,
    unit: 'gr',
    note: 'Küp şeklinde doğranmış',
    category: 'sivi',
    htmlTagExplanation: '<ul> listesi içinde <li> ve <strong> etiketi.'
  },
  {
    id: 'eggs',
    name: 'Taze Yumurta',
    baseQuantity: 3,
    unit: 'adet',
    note: 'Oda sıcaklığında bekletilmiş olmalı',
    category: 'sivi',
    htmlTagExplanation: 'Malzeme listelemesinde sırasız liste standardı <ul> etiketi uygulanır.'
  },
  {
    id: 'sugar',
    name: 'Toz Şeker',
    baseQuantity: 150,
    unit: 'gr',
    note: 'İsteğe bağlı 1 su bardağı esmer şekerle harmanlanabilir',
    category: 'kuru',
    htmlTagExplanation: 'Metin biçimlendirmede ölçü birimleri ve açıklamalar semantik inline etiketlerle sarmalanır.'
  },
  {
    id: 'flour',
    name: 'Elenmiş Beyaz Un',
    baseQuantity: 75,
    unit: 'gr',
    note: 'Kek gibi kabarmaması ve nemli kalması için az un kullanılır',
    category: 'kuru',
    htmlTagExplanation: 'Malzemenin kritik ölçüsü <strong> etiketiyle belirginleştirilir.'
  },
  {
    id: 'cocoa',
    name: 'Doğal Kakao Tozu',
    baseQuantity: 30,
    unit: 'gr',
    note: 'Yaklaşık 2 tepeleme yemek kaşığı',
    category: 'kuru',
    htmlTagExplanation: 'Miktar ve birim ayrımı <strong> ve düz metin ile ayrılır.'
  },
  {
    id: 'vanilla',
    name: 'Vanilya Özütü veya Şekerli Vanilin',
    baseQuantity: 1,
    unit: 'paket',
    note: '5 gramlık standart paket',
    category: 'ekstra',
    htmlTagExplanation: 'Aroma verici bileşen sırasız malzeme listesine eklenir.'
  },
  {
    id: 'salt',
    name: 'Deniz Tuzu',
    baseQuantity: 1,
    unit: 'çimdik',
    note: 'Çikolatanın derin lezzetini ortaya çıkarır',
    category: 'ekstra',
    htmlTagExplanation: 'İnce püf noktaları <em> (italik vurgu) veya parantez içinde sunulur.'
  },
  {
    id: 'nuts',
    name: 'İri Kırılmış Ceviz veya Fındık İçi',
    baseQuantity: 80,
    unit: 'gr',
    note: 'İsteğe bağlı, hafif kavrulmuş tercih edilir',
    category: 'ekstra',
    htmlTagExplanation: 'Opsiyonel malzemeler liste maddesi <li> içinde belirtilir.'
  }
];

export const STEPS: Step[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Fırını ve Pişirme Kalıbını Hazırlayın',
    description: 'Fırınınızı önceden 175°C (alt-üst fansız ayar) sıcaklığa ayarlayın. 20x20 cm boyutlarında kare bir borcam veya kek kalıbının tabanını ve kenarlarını pişirme kağıdı ile kaplayın (kağıdın kenarlardan hafif taşması küpleri kalıptan çıkarmayı kolaylaştıracaktır).',
    durationMinutes: 5,
    tip: 'Pişirme kağıdını kalıba yapıştırmak için kalıbın köşelerine ufacık tereyağı sürebilirsiniz.',
    htmlTagExplanation: 'Sıralı adımlar için HTML5 standardında <ol> (ordered list) ve her aşama için <li> etiketi kullanılır.'
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Benmari Usulü Çikolata & Tereyağı Eritme',
    description: 'Isıya dayanıklı cam veya çelik bir kaba küp doğranmış tereyağını ve küçük parçalara bölünmüş bitter çikolatayı koyun. İçi az miktarda kaynayan su dolu tencerenin üzerine kabı oturtun (kabın tabanı kaynar suya değmemelidir). Karışım tamamen pürüzsüz ve parlak olana dek spatulayla karıştırın, ardından ocaktan alıp ılıklaşması için 5-7 dakika kenara bırakın.',
    durationMinutes: 8,
    tip: 'Çikolatanın içine kesinlikle tek bir damla dahi su kaçmamasına özen gösterin.',
    htmlTagExplanation: 'Başlık için <h3>, açıklama paragrafı için <p>, önemli kısımlar için <strong> kullanılır.'
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Yumurta ve Şekeri Çırpın',
    description: 'Ayrı ve geniş bir çırpma kabına oda sıcaklığındaki yumurtaları ve toz şekeri ekleyin. Mikser yardımıyla orta-yüksek devirde, karışım açık sarı renge dönüp hacim kazanana kadar yaklaşık 3-4 dakika çırpın.',
    durationMinutes: 4,
    tip: 'Soğuk yumurta ılık çikolatayı şoka sokup katılaştırabilir; yumurtalar mutlaka oda ısısında olmalıdır.',
    htmlTagExplanation: 'Kronolojik sırayı belirten <ol> liste yapısı devam eder.'
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Ilık Çikolata ile Birleştirme',
    description: 'Ilımış olan çikolata-tereyağı karışımını, kabarmış yumurtalı karışıma ip gibi ince bir akışla yavaşça ilave edin. Bu esnada mikser yerine silikon spatula kullanarak alttan üste doğru nazik dairesel hareketlerle (katlama yöntemiyle) homojen olana kadar karıştırın.',
    durationMinutes: 3,
    tip: 'Aşırı hızlı çırparsanız hava kabarcıkları söner, nazik davranın.',
    htmlTagExplanation: 'Katlama gibi teknik terimler <em> etiketiyle vurgulanabilir.'
  },
  {
    id: 'step-5',
    stepNumber: 5,
    title: 'Kuru Malzemeleri Eleyerek Ekleyin',
    description: 'Bir süzgeç veya un eleği yardımıyla un, kakao tozu, vanilin ve bir çimdik deniz tuzunu çikolatalı harcın üzerine eleyin. Spatula ile un topakları kaybolana dek sadece karışana kadar katlayın (asla mikserle fazla çırpmayın). Eğer kullanıyorsanız iri çekilmiş cevizleri bu aşamada ekleyip bir-iki tur karıştırın.',
    durationMinutes: 3,
    tip: 'Unu fazla çırpmamak, çikolatalı küplerin fudge kıvamında ıslak ve yumuşak kalmasını sağlar.',
    htmlTagExplanation: 'Önemli uyarılar semantik olarak <p> içinde <strong> veya <em> ile verilir.'
  },
  {
    id: 'step-6',
    stepNumber: 6,
    title: 'Kalıba Dökme ve Fırınlama',
    description: 'Hazırladığınız harcı yağlı kağıt serili fırın kalıbına dökün. Üzerini spatula yardımıyla düzleştirin. Kalıbı tezgaha bir iki kez hafifçe vurarak hava boşluklarını yok edin. Önceden ısıtılmış 175°C fırının orta rafında tam 22-25 dakika pişirin.',
    durationMinutes: 25,
    tip: 'Kürdan testi yaptığınızda kürdan kupkuru değil, üzerinde hafif nemli çikolata kırıntılarıyla çıkmalıdır.',
    htmlTagExplanation: 'Pişirme süresi için dahili sayaç (timer) tetikleme özelliği sunulur.'
  },
  {
    id: 'step-7',
    stepNumber: 7,
    title: 'Kalıptan Çıkarma, Dinlendirme ve Küp Dilimleme',
    description: 'Fırından çıkan tepsiyi oda sıcaklığına gelene kadar yaklaşık 20 dakika tezgahta bekletin. Ardından kalıbıyla birlikte en az 20 dakika buzdolabına alın (soğuyan çikolata sertleşir ve pürüzsüz kesilir). Pişirme kağıdının kenarlarından tutarak keki bir kesme tahtasına aktarın. Keskin bir şef bıçağını sıcak suya batırıp kuruladıktan sonra eşit 3x3 cm boyutlarında lokmalık küpler halinde dilimleyin.',
    durationMinutes: 20,
    tip: 'Bıçağı her kesimden sonra kağıt havluyla silip sıcak suya batırırsanız jilet gibi pürüzsüz kenarlar elde edersiniz.',
    htmlTagExplanation: 'Dilimleme talimatı sıralı listenin son işlem aşamasıdır.'
  },
  {
    id: 'step-8',
    stepNumber: 8,
    title: 'Süsleme ve Servis: Afiyet Olsun!',
    description: 'Çikolatalı küplerinizi şık bir servis tabağına dizin. Üzerlerine çay süzgeci ile hafifçe bitter kakao serpin. Yanına taze nane yaprakları veya frambuaz yerleştirerek kahve ya da çay eşliğinde servis edin. Afiyet olsun!',
    durationMinutes: 2,
    tip: 'Hava almayan kapalı bir kapta oda sıcaklığında 3 gün, buzdolabında 5 gün tazeliğini korur.',
    htmlTagExplanation: 'Tarif sonu tebrik ve sunum notu <p><strong>Afiyet olsun!</strong></p> etiketiyle belirtilir.'
  }
];

export const NUTRITION_FACTS: NutritionFact[] = [
  { label: 'Kalori', valuePerServing: 285, unit: 'kcal', dailyValuePercentage: 14 },
  { label: 'Toplam Yağ', valuePerServing: 16.5, unit: 'g', dailyValuePercentage: 21 },
  { label: 'Doymuş Yağ', valuePerServing: 9.8, unit: 'g', dailyValuePercentage: 49 },
  { label: 'Karbonhidrat', valuePerServing: 31.0, unit: 'g', dailyValuePercentage: 11 },
  { label: 'Şeker', valuePerServing: 22.4, unit: 'g', dailyValuePercentage: 25 },
  { label: 'Protein', valuePerServing: 4.2, unit: 'g', dailyValuePercentage: 8 },
  { label: 'Diyet Lifi', valuePerServing: 2.8, unit: 'g', dailyValuePercentage: 10 },
  { label: 'Sodyum / Tuz', valuePerServing: 75, unit: 'mg', dailyValuePercentage: 3 }
];

export const CHEF_TIPS = [
  {
    title: 'Kusursuz Islak Doku (Fudge Effect)',
    text: 'Çikolatalı küpün sırrı asla kek gibi kuru olmamasıdır. Fırından alırken ortası hafif sallanıyor gibi gelebilir, fırından çıktıktan sonra dinlenirken ideal kıvamına oturur.'
  },
  {
    title: 'Çikolata Kalitesi Önemlidir',
    text: 'Bu tarifte şeker oranı dengeli tutulmuştur. Damak zevkinize göre en az %60 kakao içeren kuvertür veya kaliteli tablet bitter çikolatalar derin kakao tadını yaşatır.'
  },
  {
    title: 'Bıçak Tekniği ile Jilet Kesim',
    text: 'Küp tatlıların estetik görünümü muntazam kesimden geçer. Dilimlemeden önce buzdolabında sertleştirin ve bıçağınızı her hamlede kaynar suda ısıtıp kurulayın.'
  },
  {
    title: 'Saklama Koşulları',
    text: 'Hava geçirmez cam kapta oda sıcaklığında 3 gün boyunca yumuşacık kalır. Yaz aylarında buzdolabında saklayıp yemeden 15 dakika önce oda sıcaklığına çıkarabilirsiniz.'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Zeynep Aktaş',
    date: '14 Ekim 2026',
    rating: 5,
    comment: 'Enes Bey tarifiniz tam tuttu! Özellikle bıçağı sıcak suya batırma tüyosu sayesinde pastanelerde satılanlar gibi kusursuz kare küpler elde ettim. İçi nemli ve enfes.',
    verifiedCook: true
  },
  {
    id: 'rev-2',
    author: 'Burak Demir',
    date: '12 Ekim 2026',
    rating: 5,
    comment: 'Web geliştirme ödevi için hazırlanan bir tarifin bu kadar profesyonel ve lezzetli olması harika. HTML etiketlerini inceleme özelliği de kodlama öğrenenler için çok faydalı!',
    verifiedCook: true
  },
  {
    id: 'rev-3',
    author: 'Selin Yılmaz',
    date: '9 Ekim 2026',
    rating: 5,
    comment: 'Kahve yanında ikram ettim, misafirlerim tarifini istedi. Porsiyon hesaplayıcıyı kullanarak 12 kişilik yaptım, ölçüler gramı gramına tuttu. Teşekkürler Enes Öztürk!',
    verifiedCook: true
  }
];

export const RAW_SEMANTIC_HTML_CODE = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Çikolatalı Küp Tarifi - Enes Öztürk</title>
</head>
<body>

  <!-- ==============================================
       BAŞLIK & GİRİŞ BÖLÜMÜ (HEADER)
       ============================================== -->
  <header>
    <h1>Çikolatalı Küp Tarifi</h1>
    <p>
      <em>Yoğun bitter çikolata ve tereyağının kusursuz uyumuyla hazırlanan, 
      içi yumuşak, dışı hafif kıtır lokmalık enfes bir tatlı.</em>
    </p>
    <p><strong>Hazırlayan:</strong> Enes Öztürk</p>
    <hr>
  </header>

  <main>
    <!-- ==============================================
         TARİF METADATA & BİLGİ ALANI
         ============================================== -->
    <section>
      <h2>Tarif Bilgileri</h2>
      <ul>
        <li><strong>Kaç Kişilik:</strong> 8 Kişilik (Yaklaşık 24 adet küp)</li>
        <li><strong>Hazırlama Süresi:</strong> 15 Dakika</li>
        <li><strong>Pişirme Süresi:</strong> 25 Dakika</li>
        <li><strong>Dinlenme Süresi:</strong> 20 Dakika</li>
        <li><strong>Zorluk Seviyesi:</strong> Kolay</li>
      </ul>
      <hr>
    </section>

    <!-- ==============================================
         GÖRSEL ALANI
         ============================================== -->
    <section>
      <h2>Tarif Görseli</h2>
      <img src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800" 
           alt="Kare kesilmiş nefis çikolatalı küpler" 
           width="600" 
           height="400">
      <hr>
    </section>

    <!-- ==============================================
         MALZEMELER (UL - UNORDERED LIST)
         ============================================== -->
    <section>
      <h2>Gerekli Malzemeler</h2>
      <p>Çikolatalı küp tatlımız için gerekli malzeme listesi aşağıdadır:</p>
      <ul>
        <li><strong>200 gram</strong> kaliteli bitter çikolata (%60-%70 kakao)</li>
        <li><strong>120 gram</strong> tuzsuz tereyağı</li>
        <li><strong>3 adet</strong> oda sıcaklığında taze yumurta</li>
        <li><strong>150 gram</strong> toz şeker (yaklaşık 1 su bardağı)</li>
        <li><strong>75 gram</strong> elenmiş un (yaklaşık 3/4 su bardağı)</li>
        <li><strong>30 gram</strong> kaliteli kakao tozu (2 yemek kaşığı)</li>
        <li><strong>1 paket</strong> şekerli vanilin (veya 1 çay kaşığı vanilya özütü)</li>
        <li><strong>1 çimdik</strong> deniz tuzu (lezzeti derinleştirmek için)</li>
        <li><strong>80 gram</strong> iri kıyılmış ceviz veya fındık <em>(isteğe bağlı)</em></li>
      </ul>
      <hr>
    </section>

    <!-- ==============================================
         HAZIRLANIŞI (OL - ORDERED LIST)
         ============================================== -->
    <section>
      <h2>Çikolatalı Küp Nasıl Yapılır?</h2>
      <p>Aşağıdaki adımları sırasıyla takip ederek tatlınızı hazırlayabilirsiniz:</p>
      <ol>
        <li>
          <strong>Fırını Isıtın ve Kalıbı Hazırlayın:</strong> 
          Fırını 175°C dereceye ayarlayın. 20x20 cm boyutundaki kare fırın tepsisine pişirme kağıdı serin.
        </li>
        <li>
          <strong>Çikolata ve Tereyağını Eritin:</strong> 
          Bitter çikolata ve tereyağını benmari usulü pürüzsüz kıvama gelene dek eritin ve ılımaya bırakın.
        </li>
        <li>
          <strong>Yumurta ve Şekeri Çırpın:</strong> 
          Ayrı bir kapta yumurtalar ve şekeri mikserle rengi açılıp kremsi olana kadar 3-4 dakika çırpın.
        </li>
        <li>
          <strong>Çikolatayı Ekleyin:</strong> 
          Ilıyan çikolatalı karışımı yavaşça yumurtalı karışıma dökün ve spatula ile alttan üste doğru katlayarak karıştırın.
        </li>
        <li>
          <strong>Kuru Malzemeleri Eleyin:</strong> 
          Un, kakao, vanilin ve tuzu eleyerek karışıma ekleyin. Spatula ile topak kalmayana dek karıştırın. Cevizleri ekleyin.
        </li>
        <li>
          <strong>Pişirin:</strong> 
          Harcı kare fırın kalıbına dökün. Önceden ısıtılmış 175°C fırında 22-25 dakika pişirin.
        </li>
        <li>
          <strong>Dinlendirin ve Küp Doğrayın:</strong> 
          Fırından çıkardıktan sonra oda sıcaklığına gelene dek bekletin, buzdolabında 20 dakika sertleştirin ve sıcak bıçakla 3x3 cm boyutlarında küpler halinde kesin.
        </li>
        <li>
          <strong>Servis Edin:</strong> 
          Üzerine kakao eleyerek servis yapın. Afiyet olsun!
        </li>
      </ol>
      <p><strong><em>Afiyet olsun!</em></strong></p>
      <hr>
    </section>

    <!-- ==============================================
         BESİN DEĞERLERİ TABLOSU (TABLE)
         ============================================== -->
    <section>
      <h2>Besin Değerleri (1 Porsiyon / ~3 Küp İçin)</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Besin Öğesi</th>
            <th>Miktar</th>
            <th>Günlük Değer (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Kalori</td><td>285 kcal</td><td>%14</td></tr>
          <tr><td>Toplam Yağ</td><td>16.5 g</td><td>%21</td></tr>
          <tr><td>Doymuş Yağ</td><td>9.8 g</td><td>%49</td></tr>
          <tr><td>Karbonhidrat</td><td>31.0 g</td><td>%11</td></tr>
          <tr><td>Şeker</td><td>22.4 g</td><td>%25</td></tr>
          <tr><td>Protein</td><td>4.2 g</td><td>%8</td></tr>
        </tbody>
      </table>
      <hr>
    </section>

    <!-- ==============================================
         PÜF NOKTALARI
         ============================================== -->
    <section>
      <h2>Önemli Püf Noktaları</h2>
      <ul>
        <li>Yumurtaların oda sıcaklığında olması çikolatanın katılaşmasını önler.</li>
        <li>Kürdan hafif nemli çıkmalıdır; fazla pişirmek kekin kurulaşmasına neden olur.</li>
        <li>Kusursuz küp kesim için bıçağınızı her seferinde sıcak suya batırıp kurulayınız.</li>
      </ul>
      <hr>
    </section>
  </main>

  <!-- ==============================================
       ALT BİLGİ (FOOTER)
       ============================================== -->
  <footer>
    <p>&copy; 2026 <strong>Enes Öztürk</strong> - HTML & Web Geliştirme Ödevi.</p>
    <p>Bu web sayfası temel ve semantik HTML etiketleri kullanılarak özenle tasarlanmıştır.</p>
  </footer>

</body>
</html>`;
