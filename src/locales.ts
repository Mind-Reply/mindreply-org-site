export type MindReplyLocale = {
  code: "en" | "es" | "pt-BR" | "de" | "fr" | "ar" | "tr" | "nl";
  path: string;
  flag: string;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
  copy: {
    navLeak: string;
    navMatch: string;
    navOperators: string;
    navSprint: string;
    navStatus: string;
    audit: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    packages: string;
    handoffEyebrow: string;
    handoffTitle: string;
    handoffVisitor: string;
    handoffAi: string;
    handoffAction: string;
    languageLabel: string;
    languageHelp: string;
    chatGreeting: string;
    chatPlaceholder: string;
  };
};

export const locales: MindReplyLocale[] = [
  { code: "en", path: "/", flag: "🇺🇸", label: "English", nativeLabel: "English · United States", dir: "ltr", copy: { navLeak: "The leak", navMatch: "Operator match", navOperators: "Operators", navSprint: "Setup sprint", navStatus: "Status", audit: "Request Leak Audit", heroEyebrow: "Website Leak Audit + WebChat Operator Setup", heroTitle: "Your website is leaking customers while <em>nobody answers.</em>", heroDescription: "MindReply installs Website Chat Operators that capture, qualify, and route warm visitors before attention disappears.", packages: "See operator packages", handoffEyebrow: "AI-assisted response route", handoffTitle: "From visitor intent to a qualified next step.", handoffVisitor: "Visitor signals intent", handoffAi: "MindReply AI operator guides the conversation", handoffAction: "Your team receives a clear next action", languageLabel: "Choose language", languageHelp: "Your browser language is available below. MindReply never forces a language redirect.", chatGreeting: "Tell me your business type or where visitors stop converting. I will point you to the right next step.", chatPlaceholder: "Ask about leads, operators, or the audit…" } },
  { code: "es", path: "/es/", flag: "🇪🇸", label: "Spanish", nativeLabel: "Español · España", dir: "ltr", copy: { navLeak: "La fuga", navMatch: "Elegir operador", navOperators: "Operadores", navSprint: "Sprint de activación", navStatus: "Estado", audit: "Solicitar auditoría", heroEyebrow: "Auditoría de fugas web + operador de chat", heroTitle: "Tu sitio web pierde clientes mientras <em>nadie responde.</em>", heroDescription: "MindReply instala operadores web que captan, califican y dirigen a los visitantes con intención antes de que su atención desaparezca.", packages: "Ver paquetes de operadores", handoffEyebrow: "Ruta de respuesta con IA", handoffTitle: "De la intención del visitante al siguiente paso cualificado.", handoffVisitor: "El visitante muestra intención", handoffAi: "El operador de IA de MindReply guía la conversación", handoffAction: "Tu equipo recibe una acción clara", languageLabel: "Elegir idioma", languageHelp: "Tu idioma de navegador está disponible abajo. MindReply nunca fuerza una redirección de idioma.", chatGreeting: "Cuéntame tu tipo de negocio o dónde dejan de convertir los visitantes. Te indicaré el siguiente paso.", chatPlaceholder: "Pregunta sobre leads, operadores o la auditoría…" } },
  { code: "pt-BR", path: "/pt-br/", flag: "🇧🇷", label: "Portuguese", nativeLabel: "Português · Brasil", dir: "ltr", copy: { navLeak: "O vazamento", navMatch: "Escolher operador", navOperators: "Operadores", navSprint: "Sprint de implementação", navStatus: "Status", audit: "Solicitar auditoria", heroEyebrow: "Auditoria de perdas no site + operador de chat", heroTitle: "Seu site está perdendo clientes enquanto <em>ninguém responde.</em>", heroDescription: "A MindReply instala operadores web que capturam, qualificam e encaminham visitantes interessados antes que a atenção desapareça.", packages: "Ver pacotes de operadores", handoffEyebrow: "Rota de resposta com IA", handoffTitle: "Da intenção do visitante ao próximo passo qualificado.", handoffVisitor: "O visitante sinaliza intenção", handoffAi: "O operador de IA da MindReply orienta a conversa", handoffAction: "Sua equipe recebe uma próxima ação clara", languageLabel: "Escolher idioma", languageHelp: "O idioma do seu navegador está disponível abaixo. A MindReply nunca força redirecionamento de idioma.", chatGreeting: "Conte seu tipo de negócio ou onde os visitantes param de converter. Vou indicar o melhor próximo passo.", chatPlaceholder: "Pergunte sobre leads, operadores ou auditoria…" } },
  { code: "de", path: "/de/", flag: "🇩🇪", label: "German", nativeLabel: "Deutsch · Deutschland", dir: "ltr", copy: { navLeak: "Die Lücke", navMatch: "Operator wählen", navOperators: "Operatoren", navSprint: "Einrichtungs-Sprint", navStatus: "Status", audit: "Audit anfragen", heroEyebrow: "Website-Leak-Audit + Chat-Operator", heroTitle: "Ihre Website verliert Kunden, während <em>niemand antwortet.</em>", heroDescription: "MindReply installiert Website-Chat-Operatoren, die interessierte Besucher erfassen, qualifizieren und weiterleiten, bevor die Aufmerksamkeit verschwindet.", packages: "Operator-Pakete ansehen", handoffEyebrow: "KI-gestützte Antwortstrecke", handoffTitle: "Von Besucherabsicht zum qualifizierten nächsten Schritt.", handoffVisitor: "Besucher signalisiert Interesse", handoffAi: "MindReply KI-Operator führt das Gespräch", handoffAction: "Ihr Team erhält eine klare nächste Aktion", languageLabel: "Sprache wählen", languageHelp: "Ihre Browsersprache ist unten verfügbar. MindReply erzwingt keine Sprachumleitung.", chatGreeting: "Nennen Sie Ihren Geschäftstyp oder den Punkt, an dem Besucher nicht konvertieren. Ich zeige den besten nächsten Schritt.", chatPlaceholder: "Fragen Sie nach Leads, Operatoren oder dem Audit…" } },
  { code: "fr", path: "/fr/", flag: "🇫🇷", label: "French", nativeLabel: "Français · France", dir: "ltr", copy: { navLeak: "La fuite", navMatch: "Choisir un opérateur", navOperators: "Opérateurs", navSprint: "Sprint de configuration", navStatus: "Statut", audit: "Demander un audit", heroEyebrow: "Audit de fuite web + opérateur de chat", heroTitle: "Votre site perd des clients pendant que <em>personne ne répond.</em>", heroDescription: "MindReply installe des opérateurs web qui captent, qualifient et orientent les visiteurs engagés avant que leur attention ne disparaisse.", packages: "Voir les offres opérateur", handoffEyebrow: "Parcours de réponse assisté par IA", handoffTitle: "De l’intention du visiteur à une prochaine action qualifiée.", handoffVisitor: "Le visiteur signale son intention", handoffAi: "L’opérateur IA MindReply guide la conversation", handoffAction: "Votre équipe reçoit une action claire", languageLabel: "Choisir la langue", languageHelp: "La langue de votre navigateur est disponible ci-dessous. MindReply ne force jamais une redirection de langue.", chatGreeting: "Indiquez votre activité ou l’endroit où les visiteurs cessent de convertir. Je vous orienterai vers la prochaine étape.", chatPlaceholder: "Posez une question sur les leads, opérateurs ou l’audit…" } },
  { code: "ar", path: "/ar/", flag: "🇦🇪", label: "Arabic", nativeLabel: "العربية · الإمارات", dir: "rtl", copy: { navLeak: "نقطة التسرب", navMatch: "اختيار المشغّل", navOperators: "المشغّلات", navSprint: "سباق الإعداد", navStatus: "الحالة", audit: "اطلب تدقيقاً", heroEyebrow: "تدقيق تسرب الموقع + مشغّل دردشة", heroTitle: "موقعك يخسر العملاء بينما <em>لا أحد يرد.</em>", heroDescription: "تُثبّت MindReply مشغّلات مواقع تلتقط الزوار المهتمين وتؤهلهم وتوجههم قبل أن يختفي اهتمامهم.", packages: "عرض باقات المشغّلات", handoffEyebrow: "مسار استجابة مدعوم بالذكاء الاصطناعي", handoffTitle: "من نية الزائر إلى الخطوة التالية المؤهلة.", handoffVisitor: "الزائر يوضح نيته", handoffAi: "مشغّل MindReply الذكي يوجه المحادثة", handoffAction: "يتلقى فريقك إجراءً تالياً واضحاً", languageLabel: "اختر اللغة", languageHelp: "لغة متصفحك متاحة أدناه. لا تفرض MindReply إعادة توجيه للغة.", chatGreeting: "أخبرني بنوع عملك أو أين يتوقف الزوار عن التحويل. سأرشدك إلى الخطوة التالية.", chatPlaceholder: "اسأل عن العملاء المحتملين أو المشغّلات أو التدقيق…" } },
  { code: "tr", path: "/tr/", flag: "🇹🇷", label: "Turkish", nativeLabel: "Türkçe · Türkiye", dir: "ltr", copy: { navLeak: "Kayıp noktası", navMatch: "Operatör seç", navOperators: "Operatörler", navSprint: "Kurulum sprinti", navStatus: "Durum", audit: "Denetim iste", heroEyebrow: "Web sitesi kayıp denetimi + sohbet operatörü", heroTitle: "Web siteniz müşterileri kaybediyor çünkü <em>kimse yanıt vermiyor.</em>", heroDescription: "MindReply, ilgi gösteren ziyaretçileri dikkatleri kaybolmadan önce yakalayan, niteleyen ve yönlendiren web operatörleri kurar.", packages: "Operatör paketlerini incele", handoffEyebrow: "Yapay zekâ destekli yanıt rotası", handoffTitle: "Ziyaretçi niyetinden nitelikli sonraki adıma.", handoffVisitor: "Ziyaretçi niyetini gösterir", handoffAi: "MindReply yapay zekâ operatörü konuşmayı yönlendirir", handoffAction: "Ekibiniz net bir sonraki adımı alır", languageLabel: "Dil seç", languageHelp: "Tarayıcı diliniz aşağıda mevcuttur. MindReply zorunlu dil yönlendirmesi yapmaz.", chatGreeting: "İş türünüzü veya ziyaretçilerin dönüşümden nerede çıktığını söyleyin. En iyi sonraki adımı göstereceğim.", chatPlaceholder: "Potansiyel müşteriler, operatörler veya denetim hakkında sorun…" } },
  { code: "nl", path: "/nl/", flag: "🇳🇱", label: "Dutch", nativeLabel: "Nederlands · Nederland", dir: "ltr", copy: { navLeak: "Het lek", navMatch: "Operator kiezen", navOperators: "Operators", navSprint: "Implementatiesprint", navStatus: "Status", audit: "Audit aanvragen", heroEyebrow: "Website-lek-audit + chatoperator", heroTitle: "Uw website verliest klanten terwijl <em>niemand antwoordt.</em>", heroDescription: "MindReply installeert weboperators die geïnteresseerde bezoekers vastleggen, kwalificeren en doorsturen voordat hun aandacht verdwijnt.", packages: "Bekijk operatorpakketten", handoffEyebrow: "AI-gestuurde responsroute", handoffTitle: "Van bezoekersintentie naar een gekwalificeerde volgende stap.", handoffVisitor: "Bezoeker toont intentie", handoffAi: "MindReply AI-operator begeleidt het gesprek", handoffAction: "Uw team ontvangt een duidelijke volgende actie", languageLabel: "Kies taal", languageHelp: "Uw browsert taal is hieronder beschikbaar. MindReply forceert nooit een taalomleiding.", chatGreeting: "Vertel uw bedrijfstype of waar bezoekers stoppen met converteren. Ik wijs de beste volgende stap aan.", chatPlaceholder: "Vraag naar leads, operators of de audit…" } },
];

export const defaultLocale = locales[0];
export const getLocale = (code: string | undefined) => locales.find((locale) => locale.code === code) ?? defaultLocale;
const countryLocaleMap: Record<string, MindReplyLocale["code"]> = {
  US: "en", GB: "en", AU: "en", NZ: "en",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es",
  BR: "pt-BR",
  DE: "de", AT: "de", CH: "de",
  FR: "fr", LU: "fr",
  AE: "ar", SA: "ar", QA: "ar", KW: "ar", BH: "ar", OM: "ar", EG: "ar",
  TR: "tr",
  NL: "nl",
};

export const suggestedLocale = (browserLanguages: readonly string[]) => {
  const countryMatch = browserLanguages.map((language) => language.split("-")[1]?.toUpperCase()).find((country) => country && countryLocaleMap[country]);
  if (countryMatch) return getLocale(countryLocaleMap[countryMatch]);
  return locales.find((locale) => browserLanguages.some((language) => language.toLowerCase().startsWith(locale.code.toLowerCase().split("-")[0]))) ?? defaultLocale;
};
