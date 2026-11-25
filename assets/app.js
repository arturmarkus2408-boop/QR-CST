(function () {
  'use strict';

  var SITE_URL = 'https://arturmarkus2408-boop.github.io/QR-CST/';

  var I18N = {
    ru: {
      'doc.title': 'Cotton Stalk Technology — шпон, фанера, плиты и панели · Ташкент',
      'hero.eyebrow': 'Ташкент · Узбекистан',
      'hero.title': 'Шпон, фанера,<br><em>плиты и панели</em>',
      'hero.lead': 'Cotton Stalk Technology — производственная компания из Ташкента. Свяжитесь с нами, чтобы обсудить сотрудничество.',
      'cta.call': 'Позвонить',
      'cta.mail': 'Написать',
      'cta.save': 'В контакты',
      'cta.saveLong': 'Сохранить контакт в телефон',
      'meta.inn': 'ИНН',
      'meta.oked': 'ОКЭД',
      'meta.since': 'С',

      'act.kicker': 'Деятельность',
      'act.title': 'Чем мы <em>занимаемся</em>',
      'act.lead': 'Основной вид деятельности по ОКЭД 16.21.0 — производство шпона, фанеры, плит и панелей из древесины.',
      'act.p1': 'Шпон',
      'act.p1d': 'Тонкие листы древесины для облицовки и склейки',
      'act.p2': 'Фанера',
      'act.p2d': 'Многослойный материал из склеенного шпона',
      'act.p3': 'Плиты и панели',
      'act.p3d': 'Листовые материалы для мебели и строительства',

      'co.kicker': 'Компания',
      'co.title': 'Сведения <em>о компании</em>',
      'co.name': 'Полное наименование',
      'co.nameV': 'ООО «COTTON STALK TECHNOLODGY»',
      'co.inn': 'ИНН',
      'co.reg': 'Дата регистрации',
      'co.oked': 'ОКЭД',
      'co.okedV': 'производство шпона, фанеры, плит и панелей из древесины',
      'co.dir': 'Директор',
      'co.dirV': 'Погодаев Алексей Евгеньевич',
      'co.founder': 'Учредитель',
      'co.founderV': 'Al Guzara Holding L.L.C.-FZ (резидент ОАЭ), доля в уставном фонде — 100%',
      'co.addr': 'Юридический адрес',
      'co.cad': 'Кадастровый №',
      'addr': 'г. Ташкент, Мирзо-Улугбекский район, МСГ Навнихол, ул. Дурмон йули, д. 1',

      'bank.kicker': 'Реквизиты',
      'bank.title': 'Банковские <em>реквизиты</em>',
      'bank.copyAll': 'Скопировать всё',
      'bank.bank': 'Банк',
      'bank.bankV': 'ЦБУ «Операционный» Единый филиал АКБ «Капиталбанк»',
      'bank.acUZS': 'Расчётный счёт (UZS)',
      'bank.acUSD': 'Расчётный счёт (USD)',
      'bank.mfo': 'МФО',
      'bank.bankInn': 'ИНН банка',
      'bank.inn': 'ИНН компании',

      'docs.kicker': 'Документы',
      'docs.title': 'Свидетельство <em>о регистрации</em>',
      'docs.lead': 'Свидетельство о государственной регистрации юридического лица на трёх языках.',

      'ct.kicker': 'Контакты',
      'ct.title': 'Будем <em>на связи</em>',

      'qr.title': 'Визитка в один скан',
      'qr.text': 'Наведите камеру телефона на код — откроется эта страница.',
      'qr.copy': 'Скопировать ссылку',
      'qr.share': 'Поделиться',
      'qr.download': 'Скачать QR',

      'toast.copied': 'Скопировано',
      'toast.allCopied': 'Реквизиты скопированы',
      'toast.link': 'Ссылка скопирована',
      'map.yandex': 'Яндекс Карты ↗'
    },

    uz: {
      'doc.title': 'Cotton Stalk Technology — shpon, fanera, plita va panellar · Toshkent',
      'hero.eyebrow': 'Toshkent · O‘zbekiston',
      'hero.title': 'Shpon, fanera,<br><em>plita va panellar</em>',
      'hero.lead': 'Cotton Stalk Technology — Toshkentdagi ishlab chiqarish kompaniyasi. Hamkorlikni muhokama qilish uchun biz bilan bog‘laning.',
      'cta.call': 'Qo‘ng‘iroq qilish',
      'cta.mail': 'Yozish',
      'cta.save': 'Kontaktga saqlash',
      'cta.saveLong': 'Kontaktni telefonga saqlash',
      'meta.inn': 'STIR',
      'meta.oked': 'IFUT',
      'meta.since': '',

      'act.kicker': 'Faoliyat',
      'act.title': 'Biz nima <em>bilan shug‘ullanamiz</em>',
      'act.lead': 'IFUT 16.21.0 bo‘yicha asosiy faoliyat turi — yog‘ochdan shpon, fanera, plita va panellar ishlab chiqarish.',
      'act.p1': 'Shpon',
      'act.p1d': 'Qoplash va yelimlash uchun yupqa yog‘och varaqlar',
      'act.p2': 'Fanera',
      'act.p2d': 'Yelimlangan shpondan tayyorlangan ko‘p qatlamli material',
      'act.p3': 'Plita va panellar',
      'act.p3d': 'Mebel va qurilish uchun list materiallar',

      'co.kicker': 'Kompaniya',
      'co.title': 'Kompaniya <em>haqida</em>',
      'co.name': 'To‘liq nomi',
      'co.nameV': '«COTTON STALK TECHNOLODGY» MCHJ',
      'co.inn': 'STIR',
      'co.reg': 'Ro‘yxatdan o‘tgan sana',
      'co.oked': 'IFUT',
      'co.okedV': 'yog‘ochdan shpon, fanera, plita va panellar ishlab chiqarish',
      'co.dir': 'Direktor',
      'co.dirV': 'Pogodaev Aleksey Evgenievich',
      'co.founder': 'Ta’sischi',
      'co.founderV': 'Al Guzara Holding L.L.C.-FZ (BAA rezidenti), ustav fondidagi ulushi — 100%',
      'co.addr': 'Yuridik manzil',
      'co.cad': 'Kadastr raqami',
      'addr': 'Toshkent shahri, Mirzo Ulug‘bek tumani, Navnihol MFY, Do‘rmon yo‘li ko‘chasi, 1‑uy',

      'bank.kicker': 'Rekvizitlar',
      'bank.title': 'Bank <em>rekvizitlari</em>',
      'bank.copyAll': 'Hammasini nusxalash',
      'bank.bank': 'Bank',
      'bank.bankV': 'AKB «Kapitalbank» Yagona filiali «Operatsion» BXM',
      'bank.acUZS': 'Hisob raqami (UZS)',
      'bank.acUSD': 'Hisob raqami (USD)',
      'bank.mfo': 'MFO',
      'bank.bankInn': 'Bank STIR',
      'bank.inn': 'Kompaniya STIR',

      'docs.kicker': 'Hujjatlar',
      'docs.title': 'Ro‘yxatdan o‘tganlik <em>guvohnomasi</em>',
      'docs.lead': 'Yuridik shaxsni davlat ro‘yxatidan o‘tkazilganligi to‘g‘risidagi guvohnoma — uch tilda.',

      'ct.kicker': 'Kontaktlar',
      'ct.title': 'Biz bilan <em>bog‘laning</em>',

      'qr.title': 'Bir skanerda vizitka',
      'qr.text': 'Telefon kamerasini kodga qarating — shu sahifa ochiladi.',
      'qr.copy': 'Havolani nusxalash',
      'qr.share': 'Ulashish',
      'qr.download': 'QR yuklab olish',

      'toast.copied': 'Nusxalandi',
      'toast.allCopied': 'Rekvizitlar nusxalandi',
      'toast.link': 'Havola nusxalandi',
      'map.yandex': 'Yandex Xaritalar ↗'
    },

    en: {
      'doc.title': 'Cotton Stalk Technology — veneer, plywood, boards & panels · Tashkent',
      'hero.eyebrow': 'Tashkent · Uzbekistan',
      'hero.title': 'Veneer, plywood,<br><em>boards &amp; panels</em>',
      'hero.lead': 'Cotton Stalk Technology is a manufacturing company based in Tashkent. Get in touch to discuss cooperation.',
      'cta.call': 'Call',
      'cta.mail': 'Email',
      'cta.save': 'Save contact',
      'cta.saveLong': 'Save contact to phone',
      'meta.inn': 'TIN',
      'meta.oked': 'OKED',
      'meta.since': 'Since',

      'act.kicker': 'Activity',
      'act.title': 'What <em>we do</em>',
      'act.lead': 'Principal activity under OKED 16.21.0: manufacture of veneer, plywood, boards and panels of wood.',
      'act.p1': 'Veneer',
      'act.p1d': 'Thin sheets of wood for facing and lamination',
      'act.p2': 'Plywood',
      'act.p2d': 'Multi-layer material made of bonded veneer',
      'act.p3': 'Boards & panels',
      'act.p3d': 'Sheet materials for furniture and construction',

      'co.kicker': 'Company',
      'co.title': 'Company <em>details</em>',
      'co.name': 'Full legal name',
      'co.nameV': '“COTTON STALK TECHNOLODGY” LLC',
      'co.inn': 'TIN',
      'co.reg': 'Registered on',
      'co.oked': 'OKED',
      'co.okedV': 'manufacture of veneer, plywood, boards and panels of wood',
      'co.dir': 'Director',
      'co.dirV': 'Aleksei Pogodaev',
      'co.founder': 'Founder',
      'co.founderV': 'Al Guzara Holding L.L.C.-FZ (UAE resident), 100% of the charter capital',
      'co.addr': 'Registered address',
      'co.cad': 'Cadastral no.',
      'addr': '1 Do‘rmon Yo‘li St., Navnihol MCA, Mirzo Ulugbek District, Tashkent, Uzbekistan',

      'bank.kicker': 'Bank details',
      'bank.title': 'Bank <em>details</em>',
      'bank.copyAll': 'Copy all',
      'bank.bank': 'Bank',
      'bank.bankV': 'JSCB “Kapitalbank”, Single Branch, “Operational” Banking Services Centre',
      'bank.acUZS': 'Account (UZS)',
      'bank.acUSD': 'Account (USD)',
      'bank.mfo': 'MFO (bank code)',
      'bank.bankInn': 'Bank TIN',
      'bank.inn': 'Company TIN',

      'docs.kicker': 'Documents',
      'docs.title': 'Registration <em>certificate</em>',
      'docs.lead': 'Certificate of state registration of the legal entity, in three languages.',

      'ct.kicker': 'Contacts',
      'ct.title': 'Let’s <em>talk</em>',

      'qr.title': 'Business card in one scan',
      'qr.text': 'Point your phone camera at the code to open this page.',
      'qr.copy': 'Copy link',
      'qr.share': 'Share',
      'qr.download': 'Download QR',

      'toast.copied': 'Copied',
      'toast.allCopied': 'Bank details copied',
      'toast.link': 'Link copied',
      'map.yandex': 'Yandex Maps ↗'
    }
  };

  var LANGS = ['ru', 'uz', 'en'];
  var current = 'ru';

  function t(key) {
    var d = I18N[current] || I18N.ru;
    return d[key] != null ? d[key] : (I18N.ru[key] || '');
  }

  function storageGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  function detectLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = storageGet('cst-lang');
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'ru';
    nav = nav.toLowerCase();
    if (nav.indexOf('uz') === 0) return 'uz';
    if (/^(ru|kk|ky|tg|be|uk)/.test(nav)) return 'ru';
    return 'en';
  }

  function applyLang(lang) {
    current = lang;
    document.documentElement.lang = lang;
    document.title = t('doc.title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  /* ---------- toast + clipboard ---------- */
  var toastEl = document.getElementById('toast');
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 1800);
  }

  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '0';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, text.length);
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  // Clipboard API first, then the legacy path (in-app browsers often block the API),
  // and as a last resort show the text so it can be copied by hand.
  function copyText(text) {
    var api = (navigator.clipboard && window.isSecureContext)
      ? navigator.clipboard.writeText(text)
      : Promise.reject(new Error('no clipboard api'));
    return api.catch(function () {
      if (legacyCopy(text)) return;
      window.prompt('', text);
    });
  }

  function requisitesText() {
    var lines = [
      t('co.nameV'),
      t('co.inn') + ': 313442297',
      t('co.oked') + ': 16.21.0',
      t('co.addr') + ': ' + t('addr'),
      t('bank.bank') + ': ' + t('bank.bankV') + ' (' + t('bank.bankInn') + ' 207275139)',
      t('bank.mfo') + ': 01158',
      t('bank.acUZS') + ': 20208000007562692001',
      t('bank.acUSD') + ': 20208840207562692001',
      'SWIFT: KACHUZ22',
      t('co.dir') + ': ' + t('co.dirV'),
      '+998 90 754 07 19 · Alexeypogodaev@gmail.com'
    ];
    return lines.join('\n');
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.copy');
    if (btn) {
      copyText(btn.getAttribute('data-copy')).then(function () {
        btn.classList.add('is-done');
        setTimeout(function () { btn.classList.remove('is-done'); }, 1400);
        toast(t('toast.copied'));
      });
      return;
    }
    var lb = e.target.closest('.lang button');
    if (lb) {
      var lang = lb.getAttribute('data-lang');
      applyLang(lang);
      storageSet('cst-lang', lang);
    }
  });

  var copyAll = document.getElementById('copyAll');
  copyAll.addEventListener('click', function () {
    copyText(requisitesText()).then(function () { toast(t('toast.allCopied')); });
  });

  document.getElementById('copyLink').addEventListener('click', function () {
    copyText(SITE_URL).then(function () { toast(t('toast.link')); });
  });

  var shareBtn = document.getElementById('shareBtn');
  if (navigator.share) {
    shareBtn.hidden = false;
    shareBtn.addEventListener('click', function () {
      navigator.share({ title: 'Cotton Stalk Technology', text: t('hero.lead'), url: SITE_URL }).catch(function () {});
    });
  }

  /* ---------- topbar on scroll ---------- */
  var bar = document.getElementById('topbar');
  function onScroll() { bar.classList.toggle('is-solid', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- reveal on scroll ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = ((i % 4) * 70) + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  applyLang(detectLang());
})();
