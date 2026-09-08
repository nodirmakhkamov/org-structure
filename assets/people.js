/* =========================================================================
   Rahmat · единый источник данных о людях и блоках
   Читается обеими страницами. Подключается обычным <script> (не модуль),
   объявляет window.BLOCKS и window.PEOPLE — сайт открывается двойным кликом.

   Модель человека:
     name        строка, кириллица, формат «Фамилия Имя»
     nameLat     исходное написание латиницей (для справки и поиска)
     role        должность (версия для сотрудников, страница «Команда»)
     roleInternal (опц.) внутренняя/юридическая формулировка для /manage
     desc        зона ответственности (участвует в поиске)
     block       ключ блока из BLOCKS (или null, если не определён)
     type        'staff' | 'consultant'  — нужно /manage; на «Команде» НЕ показывается
     leads       (опц.) ключ блока, которым человек руководит (уровень выше в «Схеме»)
     companyLead (опц.) true — руководитель компании (верх схемы, красная рамка)
     ini         инициалы для аватарки-заглушки
     photoFile   имя файла в photos/ или null
     posOverride / photoContain / photoBg — тонкая настройка кадрирования фото
     tg / phone  (опц.) контакты
     needsReview (опц.) true — данные требуют уточнения
     review      (опц.) что именно уточнить
   ========================================================================= */

window.BLOCKS = {
  manage:   { label: 'Управление',   color: 'var(--blk-manage)'  },
  it:       { label: 'IT и ИБ',      color: 'var(--blk-it)'      },
  finance:  { label: 'Финансы',      color: 'var(--blk-finance)' },
  control:  { label: 'Контроль и HR',color: 'var(--blk-control)' },
  commerce: { label: 'Коммерция',    color: 'var(--blk-commerce)'},
  products: { label: 'Продукты',     color: 'var(--blk-products)'},
  adm:      { label: 'АХО',          color: 'var(--blk-adm)'     },
};

window.PEOPLE = [

  /* ── Управление ─────────────────────────────────────────── */
  { name:'Идиев Ильхом', nameLat:'Ilxom Idiyev',
    role:'Директор ООО «RAHMAT TECH» / Председатель Набсовета АО «MULTICARD PAYMENT»',
    desc:'Стратегическое развитие и общее управление группы компаний',
    block:'manage', type:'staff', companyLead:true, ini:'ИИ',
    photoFile:'Idiyev Ilxom Aminovich.png', posOverride:'center center', photoContain:true, photoBg:'#f5f5f5',
    tg:'@idv2601', phone:'+998 90 990 39 29' },
  { name:'Бозоров Алишер', nameLat:'Alisher Bozorov',
    role:'Член Набсовета АО «MULTICARD PAYMENT»',
    desc:'Финансовое планирование группы компаний',
    block:'manage', type:'staff', ini:'БА',
    photoFile:'Bozorov Alisher.png' },
  { name:'Муталов Аваз', nameLat:'Avaz Mutalov',
    role:'Генеральный директор АО «MULTICARD PAYMENT»',
    desc:'Управление АО «MULTICARD PAYMENT»',
    block:'manage', type:'staff', ini:'МА',
    photoFile:'Mutalov Avaz.png' },

  /* ── IT и ИБ ────────────────────────────────────────────── */
  { name:'Маркинг Евгений', nameLat:'Marking Yevgeniy',
    role:'Руководитель блока IT и ИБ',
    roleInternal:'Консультант по ИТ и информационной безопасности',
    desc:'Разработка, инфраструктура и информационная безопасность',
    block:'it', type:'consultant', leads:'it', ini:'МЕ',
    photoFile:'Marking Yevgeniy.png', tg:'@em85g' },
  { name:'Сидоров Андрей', nameLat:'Andrey Sidorov',
    role:'Директор по IT ООО «FINTECH PLATFORMS»',
    desc:'Сопровождение серверной архитектуры, внутренних ИТ систем (Jira и др.)',
    block:'it', type:'staff', ini:'СА',
    photoFile:'Sidorov Andrey.png' },
  { name:'Орловский Алексей', nameLat:'Aleksey Orlovskiy',
    role:'Технический директор ООО «RAHMAT TECH»',
    desc:'Руководство техническим отделом ООО «RAHMAT TECH»',
    block:'it', type:'staff', ini:'ОА',
    photoFile:'Orlovskiy Aleksey.png', tg:'@OrlovskiyAlekseyUZ', phone:'+998 50 505 23 31' },
  { name:'Муминов Дмитрий', nameLat:'Dmitriy Muminov',
    role:'Директор по информационной безопасности ООО «RAHMAT TECH»',
    desc:'Информационная безопасность, защита данных, контроль доступов',
    block:'it', type:'staff', ini:'МД',
    photoFile:null },
  { name:'Миразизов Козим', nameLat:'Kozim Mirazizov',
    role:'Team lead',
    desc:'Руководство командой, координация задач',
    block:'it', type:'staff', ini:'МК',
    photoFile:'MIRAZIZOV KOZIM ADILOVICH.jpg', posOverride:'center 20%' },
  { name:'Векслер Александр', nameLat:'Aleksandr Veksler',
    role:'Team lead',
    desc:'Руководство командой, координация задач',
    block:'it', type:'staff', ini:'ВА',
    photoFile:'VEKSLER ALEKSANDR ALEKSANDROVICH.jpg', posOverride:'center 40%' },

  /* ── Финансы ────────────────────────────────────────────── */
  { name:'Шоикромов Шорасул', nameLat:'Shorasul Shoikromov',
    role:'Финансовый директор ООО «RAHMAT TECH» / Директор ООО МФО «MULTIFINANCE»',
    desc:'Финансовое управление группы компаний и руководство деятельностью ООО МФО «MULTIFINANCE»',
    block:'finance', type:'staff', ini:'ШШ',
    photoFile:'Shoikromov Shorasul.png', phone:'+998 90 933 77 79' },
  { name:'Исмаилова Мукаррам', nameLat:'Mukarram Ismailova',
    role:'Главный бухгалтер',
    desc:'Главный бухгалтер ООО «RAHMAT TECH»',
    block:'finance', type:'staff', ini:'ИМ',
    photoFile:'MUKARRAM ISMAILOVA.png', phone:'+998 90 980 43 16' },
  { name:'Набиева Барно', nameLat:'Barno Nabiyeva',
    role:'Главный бухгалтер',
    desc:'Главный бухгалтер АО «MULTICARD PAYMENT»',
    block:'finance', type:'staff', ini:'НБ',
    photoFile:'BARNO NABIYEVA.png' },

  /* ── Контроль и HR ──────────────────────────────────────── */
  { name:'Закиров Рустам', nameLat:'Rustam Zakirov',
    role:'Начальник юридического отдела',
    desc:'Юридические вопросы, договорная база и координация отдела по работе с персоналом',
    block:'control', type:'staff', ini:'ЗР',
    photoFile:'Zakirov Rustam.png', tg:'@zakirov_r', phone:'+998 90 982 23 11' },
  { name:'Нурханов Азиз', nameLat:'Aziz Nurkhanov',
    role:'Менеджер по внутреннему контролю АО «MULTICARD PAYMENT»',
    desc:'Вопросы AML/CFT и контроль соблюдения требований законодательства по внутреннему контролю',
    block:'control', type:'staff', ini:'НА',
    photoFile:'Nurkhanov Aziz.png' },
  { name:'Тугушева Динара', nameLat:'Dinara Tugusheva',
    role:'Специалист по кадровому администрированию',
    desc:'Кадровое администрирование: приём и увольнение, оформление отпусков, кадровый учёт',
    block:'control', type:'staff', ini:'ТД',
    photoFile:null },
  { name:'Махкамов Нодир', nameLat:'Nodir Makhkamov',
    role:'IT-рекрутер',
    desc:'Подбор IT-специалистов и сопровождение новых работников при найме',
    block:'control', type:'staff', ini:'МН',
    photoFile:'Makhkamov Nodir.jpeg' },

  /* ── Коммерция ──────────────────────────────────────────── */
  { name:'Векслер Виктор', nameLat:'Veksler Viktor',
    role:'Руководитель коммерческого блока',
    roleInternal:'Консультант по кассовым направлениям',
    desc:'Продажи, операционный отдел, маркетинг и контакт-центр',
    block:'commerce', type:'consultant', leads:'commerce', ini:'ВВ',
    photoFile:'Veksler Viktor.png', tg:'@viktor_veksler', phone:'+998 90 370 92 72' },
  { name:'Зиновьев Константин', nameLat:'Konstantin Zinoviev',
    role:'Начальник операционного отдела',
    desc:'Поддержка и подключение POS-терминалов',
    block:'commerce', type:'staff', ini:'ЗК',
    photoFile:'Zinovev Konstantin.png', tg:'@konstantinZ1981', phone:'+998 91 791 22 88' },
  { name:'Пазилов Сардор', nameLat:'Sardor Pazilov',
    role:'Начальник отдела маркетинга',
    desc:'Маркетинговая стратегия, продвижение продуктов, бренд',
    block:'commerce', type:'staff', ini:'ПС',
    photoFile:'Pazilov Sardor.png', tg:'@arkenakasaki', phone:'+998 91 130 03 66' },
  { name:'Шоназаров Аброржон', nameLat:'Abrorjon Shonazarov',
    role:'Начальник коммерческого управления',
    desc:'Операционное направление и продажи коммерческого блока',
    block:'commerce', type:'staff', ini:'ША',
    photoFile:null },
  { name:'Кагай Луиза', nameLat:'Luiza Kagay',
    role:'Старший специалист по подключению',
    desc:'Подключение партнёров, сопровождение процессов подключения',
    block:'commerce', type:'staff', ini:'КЛ',
    photoFile:'KAGAY LUIZA RUSTAMOVNA.jpg', posOverride:'center 25%' },
  { name:'Таштанбеков Сардорбек', nameLat:'Sardorbek Tashtanbekov',
    role:'Team lead контакт-центра',
    desc:'Руководство контакт-центром, контроль качества обслуживания',
    block:'commerce', type:'staff', ini:'ТС',
    photoFile:'TASHTANBEKOV SARDORBEK BAXODIR O‘G‘LI.jpg', posOverride:'center 20%' },

  /* ── Продукты ───────────────────────────────────────────── */
  { name:'Аглямова Эльвира', nameLat:'Elvira Aglyamova',
    role:'Начальник отдела развития кредитных продуктов ООО «RAHMAT TECH»',
    desc:'Координация ИТ проектов по кредитным продуктам ООО МФО «MULTIFINANCE»',
    block:'products', type:'staff', ini:'АЭ',
    photoFile:'Aglyamova Elvira.png', tg:'@Elya_Ag', phone:'+998 99 872 40 90' },
  { name:'Насиров Бахтиёр', nameLat:'Baxtiyor Nasirov',
    role:'Начальник отдела Multidriver',
    desc:'Развитие Multidriver, партнёрства с WB Taxi, Yandex Go, Uklon',
    block:'products', type:'staff', ini:'НБ',
    photoFile:'Nasirov Baxtiyor.png' },
  { name:'Манюров Тимур', nameLat:'Timur Manyurov',
    role:'Начальник отдела Horeca',
    desc:'Horeca, Rahmat Rest, агрегация доставок, iiko, R-keeper',
    block:'products', type:'staff', ini:'МТ',
    photoFile:'Manyurov Timur.png', tg:'@Sk8racer', phone:'+998 20 007 85 75' },
  { name:'Бурханов Тимур', nameLat:'Timur Burxanov',
    role:'Начальник отдела развития кассовых решений',
    desc:'Развитие и сопровождение виртуальной кассы, онлайн-ККМ',
    block:'products', type:'staff', ini:'БТ',
    photoFile:'Burxanov Timur.png', tg:'@ne_privlekatelnyy', phone:'+998 90 560 14 49' },
  { name:'Махмудов Абдусамадхон', nameLat:'Abdusamadxon Maxmudov',
    role:'Начальник отдела развития эквайринга',
    desc:'Развитие интернет-эквайринга, подключение партнёров',
    block:'products', type:'staff', ini:'МА',
    photoFile:'Maxmudov Abdusamadxon.png' },
  { name:'Рахматуллаев Азамат', nameLat:'Azamat Rakhmatullayev',
    role:'Начальник отдела развития партнерской сети',
    desc:'Работа с крупными партнерами и сетями, включая АЗС, аптеки и др.',
    block:'products', type:'staff', ini:'РА',
    photoFile:null },
  { name:'Бахриддинов Хумоюн', nameLat:'Humoyun Bahriddinov',
    role:'Продуктолог',
    desc:'Работа с банками и крупными партнёрами',
    block:'products', type:'staff', ini:'БХ',
    photoFile:'Bahriddinov Humoyun.png' },

  /* ── АХО ────────────────────────────────────────────────── */
  { name:'Турсунов Ботир', nameLat:'Botir Tursunov',
    role:'Управляющий делами',
    desc:'Административно-хозяйственное обеспечение, организация офиса',
    block:'adm', type:'staff', ini:'ТБ',
    photoFile:'Tursunov Botir Baxtiyorovich.png', phone:'+998 33 847 11 11' },
  { name:'Ташматова Севара', nameLat:'Sevara Tashmatova',
    role:'Офис-менеджер',
    desc:'Встреча гостей, документооборот офиса, организационная поддержка',
    block:'adm', type:'staff', ini:'ТС',
    photoFile:null },

];

/* Стабильный уникальный id из латинского написания (уникально для каждого).
   Люди НИГДЕ не матчатся по фамилии — только по id. Два Векслера получают
   разные id: 'aleksandr-veksler' и 'veksler-viktor'. */
window.PEOPLE.forEach(function(p){
  if(!p.id) p.id = p.nameLat.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
});
