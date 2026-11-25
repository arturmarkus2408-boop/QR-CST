(function () {
  'use strict';

  var I18N = {
    ru: {
      'doc.title': 'Cotton Stalk Technology — Ташкент',
      'intro.sub': 'Производство шпона, фанеры, плит и панелей\u00A0·\u00A0Ташкент',
      'cta.call': 'Позвонить',
      'cta.mail': 'Написать',
      'cta.save': 'В контакты',
      'ct.title': 'Контакты',
      'ct.dir': 'Директор',
      'ct.phone': 'Телефон',
      'ct.email': 'Эл. почта',
      'ct.addr': 'Адрес',
      'addr': 'г. Ташкент, Мирзо-Улугбекский район, МСГ Навнихол, ул. Дурмон йули, д. 1',
      'map.yandex': 'Яндекс Карты',
      'req.title': 'Реквизиты',
      'req.copyAll': 'Скопировать все',
      'req.copied': 'Скопировано',
      'co.name': 'Наименование',
      'co.nameV': 'ООО «COTTON STALK TECHNOLODGY»',
      'co.inn': 'ИНН',
      'co.oked': 'ОКЭД',
      'co.dirV': 'Погодаев Алексей Евгеньевич',
      'co.founder': 'Учредитель',
      'co.founderV': 'Al Guzara Holding L.L.C.-FZ (ОАЭ), 100%',
      'co.reg': 'Дата регистрации',
      'bank.bank': 'Банк',
      'bank.bankV': 'ЦБУ «Операционный» Единый филиал АКБ «Капиталбанк»',
      'bank.mfo': 'МФО',
      'bank.acUZS': 'Р/с (UZS)',
      'bank.acUSD': 'Р/с (USD)',
      'docs.title': 'Документы',
      'docs.text': 'Свидетельство о государственной регистрации'
    },
    uz: {
      'doc.title': 'Cotton Stalk Technology — Toshkent',
      'intro.sub': 'Shpon, fanera, plita va panellar ishlab chiqarish\u00A0·\u00A0Toshkent',
      'cta.call': 'Qo‘ng‘iroq',
      'cta.mail': 'Yozish',
      'cta.save': 'Kontaktga',
      'ct.title': 'Kontaktlar',
      'ct.dir': 'Direktor',
      'ct.phone': 'Telefon',
      'ct.email': 'E-pochta',
      'ct.addr': 'Manzil',
      'addr': 'Toshkent shahri, Mirzo Ulug‘bek tumani, Navnihol MFY, Do‘rmon yo‘li ko‘chasi, 1‑uy',
      'map.yandex': 'Yandex Xaritalar',
      'req.title': 'Rekvizitlar',
      'req.copyAll': 'Hammasini nusxalash',
      'req.copied': 'Nusxalandi',
      'co.name': 'Nomi',
      'co.nameV': '«COTTON STALK TECHNOLODGY» MCHJ',
      'co.inn': 'STIR',
      'co.oked': 'IFUT',
      'co.dirV': 'Pogodaev Aleksey Evgenievich',
      'co.founder': 'Ta’sischi',
      'co.founderV': 'Al Guzara Holding L.L.C.-FZ (BAA), 100%',
      'co.reg': 'Ro‘yxatdan o‘tgan sana',
      'bank.bank': 'Bank',
      'bank.bankV': 'AKB «Kapitalbank» Yagona filiali «Operatsion» BXM',
      'bank.mfo': 'MFO',
      'bank.acUZS': 'H/r (UZS)',
      'bank.acUSD': 'H/r (USD)',
      'docs.title': 'Hujjatlar',
      'docs.text': 'Davlat ro‘yxatidan o‘tkazilganlik to‘g‘risidagi guvohnoma'
    },
    en: {
      'doc.title': 'Cotton Stalk Technology — Tashkent',
      'intro.sub': 'Veneer, plywood, boards and panels manufacturing\u00A0·\u00A0Tashkent',
      'cta.call': 'Call',
      'cta.mail': 'Email',
      'cta.save': 'Save contact',
      'ct.title': 'Contacts',
      'ct.dir': 'Director',
      'ct.phone': 'Phone',
      'ct.email': 'Email',
      'ct.addr': 'Address',
      'addr': '1 Do‘rmon Yo‘li St., Navnihol MCA, Mirzo Ulugbek District, Tashkent, Uzbekistan',
      'map.yandex': 'Yandex Maps',
      'req.title': 'Company details',
      'req.copyAll': 'Copy all',
      'req.copied': 'Copied',
      'co.name': 'Legal name',
      'co.nameV': '“COTTON STALK TECHNOLODGY” LLC',
      'co.inn': 'TIN',
      'co.oked': 'OKED',
      'co.dirV': 'Aleksei Pogodaev',
      'co.founder': 'Founder',
      'co.founderV': 'Al Guzara Holding L.L.C.-FZ (UAE), 100%',
      'co.reg': 'Registered',
      'bank.bank': 'Bank',
      'bank.bankV': 'JSCB “Kapitalbank”, Single Branch, “Operational” Banking Services Centre',
      'bank.mfo': 'MFO (bank code)',
      'bank.acUZS': 'Account (UZS)',
      'bank.acUSD': 'Account (USD)',
      'docs.title': 'Documents',
      'docs.text': 'Certificate of state registration'
    }
  };

  var LANGS = ['ru', 'uz', 'en'];
  var current = 'ru';

  function t(key) {
    var d = I18N[current];
    return d[key] != null ? d[key] : I18N.ru[key];
  }

  function storageGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function storageSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  function detectLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(q) > -1) return q;
    var saved = storageGet('cst-lang');
    if (LANGS.indexOf(saved) > -1) return saved;
    var nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'ru').toLowerCase();
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
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  /* ---------- clipboard ---------- */
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
    return [
      t('co.nameV'),
      t('co.inn') + ': 313442297',
      t('co.oked') + ': 16.21.0',
      t('ct.addr') + ': ' + t('addr'),
      t('bank.bank') + ': ' + t('bank.bankV') + ' (' + t('co.inn') + ' 207275139)',
      t('bank.mfo') + ': 01158',
      t('bank.acUZS') + ': 20208000007562692001',
      t('bank.acUSD') + ': 20208840207562692001',
      'SWIFT: KACHUZ22',
      t('ct.dir') + ': ' + t('co.dirV'),
      t('ct.phone') + ': +998 90 754 07 19',
      t('ct.email') + ': Alexeypogodaev@gmail.com'
    ].join('\n');
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.copy');
    if (btn) {
      copyText(btn.getAttribute('data-copy')).then(function () {
        btn.classList.add('is-done');
        setTimeout(function () { btn.classList.remove('is-done'); }, 1400);
      });
      return;
    }
    if (e.target.id === 'copyAll') {
      var all = e.target;
      copyText(requisitesText()).then(function () {
        all.textContent = t('req.copied');
        setTimeout(function () { all.textContent = t('req.copyAll'); }, 1600);
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

  document.getElementById('year').textContent = new Date().getFullYear();
  applyLang(detectLang());
})();
