let lists = [
  {
    name: "html(基础)",
    test: "前端面试题汇总",
    visible: false,
    subject: [
      {
        question: `你做的页面在哪些流览器测试过？这些浏览器的内核分别是什么?`,
        answer: `IE: trident 内核
Firefox：gecko 内核
Safari:webkit 内核
Opera:以前是 presto 内核，Opera 现已改用 Google Chrome 的 Blink 内核
Chrome:Blink(基于 webkit，Google 与 Opera Software 共同开发)`,
        score: 1,
      },
      {
        question: `每个 HTML 文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？`,
        answer: `⻚⾯被加载的时， link 会同时被加载，⽽ @imort ⻚⾯被加载的时， link 会同时被加载，⽽ @import 引⽤的 CSS 会等到⻚⾯被加载完再加载 import 只在 IE5 以上才能识别，⽽ link 是 XHTML 标签，⽆兼容问题 link ⽅式的样式的权重 ⾼于 @import 的权重
<!DOCTYPE> 声明位于⽂档中的最前⾯，处于 <html> 标签之前。告知浏览器的解析器， ⽤什么⽂档类型 规范来解析这个⽂档严格模式的排版和 JS 运作模式是 以该浏览器⽀持的最⾼标准运⾏在混杂模式中，⻚⾯以宽松的向后兼容的⽅式显示。模拟⽼式浏览器的⾏为以防⽌站点⽆法⼯作。 DOCTYPE 不存在或格式不正确会导致⽂档以混杂模式呈现`,
        score: 1,
      },
      {
        question: `啥是域名？`,
        answer: `域名，就类似com/cn/net 一类的，域名（英语：Domain Name），又称网域，是由一串用点分隔的名字组成的互联网上某一台计算机或计算机组的名称，用于在数据传输时对计算机的定位标识（有时也指地理位置）`,
        score: 1,
      },
      {
        question: `为什么利用多个域名来存储网站资源会更有效？`,
        answer: `CDN 缓存更方便
突破浏览器并发限制
节约 cookie 带宽
节约主域名的连接数，优化页面响应速度
防止不必要的安全问题`,
        score: 1,
      },
      {
        question: `请描述一下 cookies，sessionStorage 和 localStorage 的区别？`,
        answer: `sessionStorage （session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储。而 localStorage 用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
web storage 和 cookie 的区别
Web Storage 的概念和 cookie 相似，区别是它是为了更大容量存储设计的。Cookie 的大小是受限的，并且每次你请求一个新的页面的时候 Cookie 都会被发送过去，这样无形中浪费了带宽，另外 cookie 还需要指定作用域，不可以跨域调用。
除此之外，Web Storage 拥有 setItem,getItem,removeItem,clear 等方法，不像 cookie需要前端开发者自己封装 setCookie，getCookie。但是 Cookie 也是不可以或缺的：Cookie的作用是与服务器进行交互，作为 HTTP 规范的一部分而存在 ，而 Web Storage 仅仅是为了在本地“存储”数据而生。`,
        score: 2,
      },
      {
        question: `简述一下 src 与 href 的区别`,
        answer: `src 用于替换当前元素，href 用于在当前文档和引用资源之间确立联系。
src 是 source 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。<script src =”js.js”></script>
当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js 脚本放在底部而不是头部。
href 是 Hypertext Reference 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加<link href=”common.css” rel=”stylesheet”/>那么浏览器会识别该文档为 css 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式来加载 css，而不是使用@import 方式。`,
        score: 1,
      },
      {
        question: `如何进⾏⽹站性能优化`,
        answer: `content ⽅⾯
减少 HTTP 请求：合并⽂件、 CSS 精灵、 inline Image
减少 DNS 查询： DNS 缓存、将资源分布到恰当数量的主机名
减少 DOM 元素数量

Server ⽅⾯
使⽤ CDN
配置 ETag
对组件使⽤ Gzip 压缩

Cookie ⽅⾯
减⼩ cookie ⼤⼩

css ⽅⾯
将样式表放到⻚⾯顶部
不使⽤ CSS 表达式
使⽤ <link> 不使⽤ @import

Javascript ⽅⾯
将脚本放到⻚⾯底部
将 javascript 和 css 从外部引⼊
压缩 javascript 和 css
删除不需要的脚本
减少 DOM 访问

图⽚⽅⾯
优化图⽚：根据实际颜⾊需要选择⾊深、压缩
优化 css 精灵
不要在 HTML 中拉伸图⽚`,
        score: 5,
      },
    ],
  },
  {
    name: "css(基础)",
    test: "前端面试题汇总",
    visible: false,
    subject: [
      {
        question: `div+css 的布局较 table 布局有什么优点？`,
        answer: `改版的时候更方便 只要改 css 文件。
页面加载速度更快、结构化清晰、页面显示简洁。
表现与结构相分离。
易于优化（seo）搜索引擎更友好，排名更容易靠前。`,
        score: 1,
      },
      {
        question: `img 的 alt 与 title 有何异同？ strong 与 em 的异同？`,
        answer: `a:alt(alt text):为不能显示图像、窗体或 applets 的用户代理（UA），alt 属性用来指定替换文字。替换文字的语言由 lang 属性指定。(在 IE 浏览器下会在没有 title 时把 alt当成 tool tip 显示)
title(tool tip):该属性为设置该属性的元素提供建议性的信息。
strong:粗体强调标签，强调，表示内容的重要性
em:斜体强调标签，更强烈强调，表示内容的强调点`,
        score: 2,
      },
      {
        question: `有哪项方式可以对一个 DOM 设置它的 CSS 样式？`,
        answer: `外部样式表，引入一个外部 css 文件
内部样式表，将 css 代码放在 <head> 标签内部
内联样式，将 css 样式直接定义在 HTML 元素内部`,
        score: 1,
      },
      {
        question: `CSS 都有哪些选择器？`,
        answer: `派生选择器（用 HTML 标签申明）
id 选择器（用 DOM 的 ID 申明）
类选择器（用一个样式类名申明）
属性选择器（用 DOM 的属性申明，属于 CSS2，IE6 不支持，不常用，不知道就算了）
除了前 3 种基本选择器，还有一些扩展选择器，包括
后代选择器（利用空格间隔，比如 div .a{ }）
群组选择器（利用逗号间隔，比如 p,div,#a{ }）`,
        score: 1,
      },
    ],
  },
  {
    name: "html(体验，扩展)",
    test: "更好的用户体验",
    visible: false,
    subject: [
      {
        question: `你能描述一下渐进增强和优雅降级之间的不同吗?`,
        answer: `渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
        区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。
        “优雅降级”观点
        “优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。
        在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。你可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。
        “渐进增强”观点
        “渐进增强”观点则认为应关注于内容本身。内容是我们建立网站的诱因。有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被 Yahoo! 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。`,
        score: 3,
      },
    ],
  },
  {
    name: "js数据类型概述",
    test: "不包含ES6",
    visible: false,
    subject: [
      {
        question: `JavaScript 的数据类型有哪些？`,
        answer: `数值（number）：整数和小数（比如1和3.14）。
        字符串（string）：文本（比如Hello World）。
        布尔值（boolean）：表示真伪的两个特殊值，即true（真）和false（假）。
        undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值。
        null：表示空值，即此处的值为空。
        对象（object）：各种值组成的集合。
        通常，数值、字符串、布尔值这三种类型，合称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。对象则称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于undefined和null，一般将它们看成两个特殊值。
        原始数据类型 - 栈类型
        引用数据类型 - 堆类型

        原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
        引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
        
        ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它属于 JavaScript 语言的原生数据类型之一，其他数据类型是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、大整数（BigInt）、对象（Object）。`,
        score: 2,
      },
      {
        question: `对象是最复杂的数据类型，又可以分为哪些？`,
        answer: `狭义的对象（object）
        数组（array）
        函数（function）`,
        score: 1,
      },
      {
        question: `typeof一个没有声明的变量，会返回什么？`,
        answer: `undefined`,
        score: 1,
      },
      {
        question: `typeof 一个空对象、空数组、空函数、window对象，null，undefined 分别返回什么？`,
        answer: `空对象 object；空数组 object；空函数 function；window对象 object；null object; undefined undefined
        
        typeof null 返回object是一个历史遗留问题，在 js 最初设计时，null 被当作一个空对象指针。为了与其他对象类型区分开， typeof null 返回了 "object"
        实际上， null 是一个表示空值的特殊值，它不是对象，也不是任何对象的实例。虽然 typeof null 返回了 "object" ，但这并不表示 null 是对象的一种类型。
        由于这个历史遗留问题，判断一个值是否为 null 通常需要使用 value === null 进行比较，而不是依赖 typeof 运算符的结果。 `,
        score: 2,
      },
      {
        question: `为什么js中要加上undefined？`,
        answer: `一开始的js中不包含错误处理机制，如果只返回空值，很难发现错误。`,
        score: 1,
      },
      {
        question: `null和undefined的区别？`,
        answer: `null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。
        undefined表示“未定义”`,
        score: 3,
      },
      {
        question: `条件式中，哪些返回结果会被判定为false？`,
        answer: `undefined
        null
        false
        0
        NaN
        ""或''（空字符串）`,
        score: 2,
      },
    ],
  },
  {
    name: "js 数值",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `JavaScript 内部，为什么1和1.0这两个数是相同的?`,
        answer: `JavaScript 内部，所有数字都是以64位浮点数形式储存，即使整数也是如此。所以，1与1.0是相同的，是同一个数。
        也就是说，JavaScript 语言的底层根本没有整数，所有数字都是小数（64位浮点数）。容易造成混淆的是，某些运算只有整数才能完成，此时 JavaScript 会自动把64位浮点数，转成32位整数，然后再进行运算。
        由于浮点数不是精确的值，所以涉及小数的比较和运算要特别小心。`,
        score: 1,
      },
      {
        question: `js的浮点数是怎样组成的?`,
        answer: `根据国际标准 IEEE 754，JavaScript 浮点数的64个二进制位，从最左边开始，是这样组成的。

        第1位：符号位，0表示正数，1表示负数
        第2位到第12位（共11位）：指数部分
        第13位到第64位（共52位）：小数部分（即有效数字）
        符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。
        指数部分一共有11个二进制位，因此大小范围就是0到2047。IEEE 754 规定，如果指数部分的值在0到2047之间（不含两个端点），那么有效数字的第一位默认总是1，不保存在64位浮点数之中。也就是说，有效数字这时总是1.xx...xx的形式，其中xx..xx的部分保存在64位浮点数之中，最长可能为52位。因此，JavaScript 提供的有效数字最长为53个二进制位。
        精度最多只能到53个二进制位，这意味着，绝对值小于2的53次方的整数，都可以精确表示。`,
        score: 1,
      },
      {
        question: `js的数值范围是多少?`,
        answer: `根据标准，64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（2的11次方减1）。也就是说，64位浮点数的指数部分的值最大为2047，分出一半表示负数，则 JavaScript 能够表示的数值范围为2^1024到2^-1023（开区间），超出这个范围的数无法表示。`,
        score: 1,
      },
      {
        question: `在什么条件下，js的数值会发生溢出?`,
        answer: `如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回Infinity。
        如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。
        JavaScript 提供Number对象的MAX_VALUE和MIN_VALUE属性，返回可以表示的具体的最大值和最小值。`,
        score: 1,
      },
      {
        question: `在什么情况下，数值会采用科学计数法表示?`,
        answer: `（1）小数点前的数字多于21位。
        （2）小数点后的零多于5个。`,
        score: 1,
      },
      {
        question: `数值的进制用什么表示?`,
        answer: `十进制：没有前导0的数值。
        八进制：有前缀0o或0O的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
        十六进制：有前缀0x或0X的数值。
        二进制：有前缀0b或0B的数值。
        默认情况下，JavaScript 内部会自动将八进制、十六进制、二进制转为十进制。如果八进制、十六进制、二进制的数值里面，出现不属于该进制的数字，就会报错。`,
        score: 1,
      },
      {
        question: `js都有哪些特殊数值?`,
        answer: `正零和负零
        NaN
        Infinity`,
        score: 1,
      },
      {
        question: `正零和负零在什么情况下是不相等的?`,
        answer: `(1 / +0) === (1 / -0) // false
        上面的代码之所以出现这样结果，是因为除以正零得到+Infinity，除以负零得到-Infinity，这两者是不相等的`,
        score: 1,
      },
      {
        question: `NaN是怎样产生的?`,
        answer: `NaN是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错、或计算出错（0/0 NaN）的场合。NaN与任何数（包括它自己）的运算，得到的都是NaN。`,
        score: 2,
      },
      {
        question: `Infinity的含义?`,
        answer: `Infinity表示“无穷”，用来表示两种场景。一种是一个正的数值太大，或一个负的数值太小，无法表示；另一种是非0数值除以0，得到Infinity。`,
        score: 2,
      },
      {
        question: `Infinity与null计算时，会发生什么?`,
        answer: `Infinity与null计算时，null会转成0，等同于与0的计算。
        null * Infinity // NaN
null / Infinity // 0
Infinity / null // Infinity`,
        score: 1,
      },
      {
        question: `Infinity与undefined计算时，会发生什么?`,
        answer: `返回的都是NaN`,
        score: 1,
      },
      {
        question: `parseInt('   81')?parseInt('12**')?parseInt('abc123')?parseInt('15e2')?`,
        answer: `parseInt('   81')=81
        parseInt('12**')=12
        parseInt('abc123')=NaN
        parseInt('15e2')=15`,
        score: 1,
      },
      {
        question: `parseInt如何转换成十进制?`,
        answer: `parseInt('数字'，需要转换的进数)
        如parseInt('1000', 8) // 512`,
        score: 1,
      },
      {
        question: `parseInt括号里面写入需要转换成科学计数法的数字，会发生什么?`,
        answer: `parseInt会先将这些数字转换为科学计数法，然后再转换为字符串，再进行进一步提取
        parseInt(1000000000000000000000.5) // 1
// 等同于
parseInt('1e+21') // 1

parseInt(0.0000008) // 8
// 等同于
parseInt('8e-7') // 8`,
        score: 1,
      },
      {
        question: `parseInt括号里面写入布尔值，会发生什么?`,
        answer: `会输出NaN`,
        score: 1,
      },
      {
        question: `如何判断一个值是NaN？`,
        answer: `通过isNaN方法可以用来判断一个值是否为NaN。        `,
        score: 1,
      },
      {
        question: `如何判断一个值是正常的值？哪些值是正常的值？`,
        answer: `isFinite方法返回一个布尔值，表示某个值是否为正常的数值。
        除了Infinity、-Infinity、NaN和undefined这几个值会返回false，isFinite对于其他的数值都会返回true。
        isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true`,
        score: 1,
      },
    ],
  },
  {
    name: "js 字符串",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `字符串如需多行表示，有什么方法？`,
        answer: `1、使用\`\`
        2、在""或''的字符串需要换行的地方使用\\
        3、使用\\n`,
        score: 1,
      },
      {
        question: `换页符、换行符、回车符、制表符、垂直制表符分别如何展示，有什么作用？`,
        answer: `
        换页符 \\f 它表示在打印时创建一个新的页面。在屏幕上显示时，换页符不会产生可见的效果，但在打印时它会起到分页的作用。
        换行符 \\n js的\\n基本上等同于执行了换行+回车
        回车符 \\r 光标回到本行开头，在js中基本上没什么作用
        制表符 \\t 用于表示水平制表，连接文本行
        垂直制表符 \\v 用于表示垂直制表（vertical tab）`,
        score: 2,
      },
      {
        question: `在哪些情况下，反斜杠还可以用于输出特殊字符？`,
        answer: `
        （1）\\HHH
反斜杠后面紧跟三个八进制数（000到377），代表一个字符。HHH对应该字符的 Unicode 码点，比如\\251表示版权符号。显然，这种方法只能输出256种字符。
（2）\\xHH
\\x后面紧跟两个十六进制数（00到FF），代表一个字符。HH对应该字符的 Unicode 码点，比如\\xA9表示版权符号。这种方法也只能输出256种字符。
（3）\\uXXXX
\\u后面紧跟四个十六进制数（0000到FFFF），代表一个字符。XXXX对应该字符的 Unicode 码点，比如\\u00A9表示版权符号。`,
        score: 1,
      },
      {
        question: `如果想要对数字进行字符串转换，可以使用字符串的哪种方法？`,
        answer: `toString，比方说转16进制，就可以使用 data.toString(16)`,
        score: 1,
      },
    ],
  },
  {
    name: "js 对象基础",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `什么是 DOM 和 BOM？`,
        answer: `DOM 指的是文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。
BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。BOM的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。`,
        score: 1,
      },
      {
        question: `
        var o1 = {};
        var o2 = o1;
        o1.a = 1;
        o2.a=？
        
        var x = 1;
        var y = x;
        x = 2;
        y=？`,
        answer: `o2.a=1 y=1`,
        score: 1,
      },
      {
        question: `
        var o1 = {};
        var o2 = o1;
        o1 = 1;
        o2 = ？`,
        answer: `{}
        上面代码中，o1和o2指向同一个对象，然后o1的值变为1，这时不会对o2产生影响，o2还是指向原来的那个对象。这种引用只局限于对象。`,
        score: 1,
      },
      {
        question: `对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？
        { foo: 123 }`,
        answer: `JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含foo属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签foo，指向表达式123。
        为了避免这种歧义，JavaScript 引擎的做法是，如果遇到无法确定是对象还是代码块的情况，一律解释为代码块。`,
        score: 1,
      },
      {
        question: `var foo = 'bar';

        var obj = {
          foo: 1,
          bar: 2,
          12: 'hello world'
        };
        
        obj.foo=？
        obj[foo]=？
        obj[12]=?`,
        answer: `obj.foo=1
        obj[foo]=obj['bar']=2
        obj[12]="hello world"
        上面代码中，引用对象obj的foo属性时，如果使用点运算符，或者在使用方括号运算符时加上引号，foo就是字符串；如果使用方括号运算符，但是不使用引号，那么foo就是一个变量，指向字符串bar。`,
        score: 1,
      },
      {
        question: `查看对象的属性，可以Object类中的使用什么方法？`,
        answer: `Object.keys(obj)
Object.getOwnPropertyNames(obj)`,
        score: 1,
      },
      {
        question: `var obj = { p: 1 };
        
        分别打印下面五条语句，他们的返回结果是什么？
        Object.keys(obj)
        delete obj.p
        obj.p
        delete obj.p
        Object.keys(obj)`,
        answer: `Object.keys(obj) // ["p"]
        delete obj.p // true
        obj.p // undefined
        delete obj.p // true
        Object.keys(obj) // []
        注意，删除一个不存在的属性，delete不报错，而且返回true。`,
        score: 2,
      },
      {
        question: `判断某个对象的属性是否存在，可以使用什么方法？这些方法有什么区别？`,
        answer: `in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。它的左边是一个字符串，表示属性名，右边是一个对象。
        var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true

in运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。就像上面代码中，对象obj本身并没有toString属性，但是in运算符会返回true，因为这个属性是继承的。
这时，可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性。

hasOwnProperty(属于自己的财产)
in(家族的财产)

var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}

如果想遍历所有属性，可用for---in循环`,
        score: 4,
      },
    ],
  },
  {
    name: "js 数组基础",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `数组的本质`,
        answer: `本质上，数组属于一种特殊的对象。数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串。`,
        score: 0,
      },
      {
        question: `var arr = [ 'a', 'b', 'c' ];
        arr.length = 2;
        arr=?`,
        answer: `["a", "b"]`,
        score: 1,
      },
      {
        question: `当length属性设为大于数组个数时，读取新增的位置都会返回什么？`,
        answer: `undefined`,
        score: 1,
      },
      {
        question: `数组添加除合法数字以外的其他属性，会发生什么？`,
        answer: `该属性会保留，但数组length不变`,
        score: 1,
      },
      {
        question: `var arr = [ 'a', 'b', 'c' ];
        2 in arr
        4 in arr
        最后分别返回什么？`,
        answer: `true false`,
        score: 1,
      },
      {
        question: `遍历数组推荐使用什么方式，为什么？`,
        answer: `推荐使用forEach循环，
        而不是使用for...in...因为这种方式不仅会遍历数组所有的数字键（除空位），还会遍历非数字键。
        使用一般的for循环或while循环，会把空位给遍历到`,
        score: 2,
      },
      {
        question: `使用delete删除数组中的一个位置，会发生什么？`,
        answer: `删除的这个位置就形成了空位，这个空位可以读取（值是undefined），但是对length属性没有影响。也就是说，length属性不过滤空位。
        
var a = [, , ,];
a[1] // undefined`,
        score: 2,
      },
      {
        question: `1、var a = [, , ,];
a.forEach(function (x, i) {
  console.log(i + '. ' + x);
})

2、var a = [undefined, undefined, undefined];
a.forEach(function (x, i) {
  console.log(i + '. ' + x);
});

这两个输出结果是多少？`,
        answer: `第一个不会有任何输出结果
        第二个：
        0. undefined
1. undefined
2. undefined

也就是说，空位就是数组没有这个元素，所以不会被遍历到，而undefined则表示数组有这个元素，值是undefined，所以遍历不会跳过。`,
        score: 2,
      },
    ],
  },
  {
    name: "js 函数基础",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `函数表达式声明加上函数名，可以调用吗？`,
        answer: `采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。
        var print = function x(){
          console.log(typeof x); //可以调用
        };
        
        x
        // ReferenceError: x is not defined
        
        print()
        // function
        
        print.name = "x"`,
        score: 2,
      },
      {
        question: `var a = 1;
        var x = function () {
          console.log(a);
        };
        
        function f() {
          var a = 2;
          x();
        }
        
        f();
        运行结果是什么？`,
        answer: `
        打印 1
        函数本身也是一个值，也有自己的作用域。函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。
        var a = 1是全局变量，下面的a=2是只针对f函数的局部变量，f函数里面的x函数，作用域也不会受影响`,
        score: 2,
      },
      {
        question: `一个函数有多个参数，如果想省略前面的参数，该怎么写？`,
        answer: `没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入undefined。

        function f(a, b) {
          return a;
        }
        
        f( , 1) // SyntaxError: Unexpected token ,(…)
        f(undefined, 1) // undefined`,
        score: 1,
      },
      {
        question: `arguments 对象的作用？`,
        answer: `在非严格模式下可以使用，严格模式下，arguments对象与函数参数不具有联动关系。
        由于 JavaScript 允许函数有不定数目的参数，所以需要一种机制，可以在函数体内部读取所有参数。这就是arguments对象的由来。
        arguments不仅可以判断函数传的参数（第几个位置传什么参），还可以通过arguments对象的length属性，可以判断函数调用时到底带几个参数。`,
        score: 2,
      },
      {
        question: `arguments 对象与数组的关系？`,
        answer: `虽然arguments很像数组，但它是一个对象。数组专有的方法（比如slice和forEach），不能在arguments对象上直接使用。

        如果要让arguments对象使用数组方法，真正的解决方法是将arguments转为真正的数组。下面是两种常用的转换方法：slice方法和逐一填入新数组。
        
        var args = Array.prototype.slice.call(arguments);
        
        // 或者
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }`,
        score: 2,
      },
      {
        question: `对类数组对象的理解，如何转化为数组？`,
        answer: `常见的类数组转换为数组的方法有这样几种：

通过 call 调用数组的 slice 方法来实现转换
Array.prototype.slice.call(arrayLike);
通过 call 调用数组的 splice 方法来实现转换
Array.prototype.splice.call(arrayLike, 0);
通过 apply 调用数组的 concat 方法来实现转换
Array.prototype.concat.apply([], arrayLike);
通过 Array.from 方法来实现转换
Array.from(arrayLike);`,
        score: 2,
      },
      {
        question: `什么是闭包？`,
        answer: `闭包即能够读取其他函数内部变量的函数。由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数，也可以看作是函数内部作用域的一个接口。”。

        更直白地说，闭包不一定有 return，但闭包的内层一定有一个可以读取函数内部的函数。之所以我们看到的闭包大多数都有 return，是因为外部函数如果想使用闭包变量的话，就一定要用到闭包的 return。
        
        function f1() {
          var n = 999;
          function f2() {
            console.log(n);
          }
          return f2;
        }
        
        var result = f1();
        result(); // 999
        这里的闭包就是f2`,
        score: 4,
        img: "闭包.png"
      },
      {
        question: `闭包的作用？`,
        answer: `闭包的最大用处有两个，一个是可以读取外层函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。除此之外，闭包还可以封装对象私有属性和私有方法，外界无法直接获取。请看下面的例子，闭包使得内部变量记住上一次调用时的运算结果。
        
        function createIncrementor(start) {
          return function () {
            return start++;
          };
        }
        
        var inc = createIncrementor(5);
        
        inc() // 5
        inc() // 6
        inc() // 7`,
        score: 4,
      },
      {
        question: `为什么闭包能够返回外层函数的内部变量？`,
        answer: `原因是闭包（下例的inc）用到了外层变量（start），导致外层函数（createIncrementor）不能从内存释放。只要闭包没有被垃圾回收机制清除，外层函数提供的运行环境也不会被清除，它的内部变量就始终保存着当前值，供闭包读取。
        
        function createIncrementor(start) {
          return function () {
            return start++;
          };
        }
        
        var inc = createIncrementor(5);
        
        inc() // 5
        inc() // 6
        inc() // 7`,
        score: 3,
      },
      {
        question: `为什么不能滥用闭包？`,
        answer: `外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。`,
        score: 3,
      },
      {
        question: `立即执行的函数表达式作用？`,
        answer: `一是不必为函数命名，避免了污染全局变量；二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。
        (function () {
          var tmp = newData;
          processData(tmp);
          storeData(tmp);
        }());`,
        score: 3,
      },
      {
        question: `eval作用？`,
        answer: `eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。
        eval('var a = 1;');`,
        score: 1,
      },
      {
        question: `eval有什么安全风险？`,
        answer: `eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。总之，eval的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，一般不推荐使用。通常情况下，eval最常见的场合是解析 JSON 数据的字符串，不过正确的做法应该是使用原生的JSON.parse方法。`,
        score: 2,
      },
      {
        question: `var a = 1;

        function f() {
          var a = 2;
          var e = eval;
          e('console.log(a)');
        }
        
        f()`,
        answer: `打印数字1
        为了保证eval的别名不影响代码优化，JavaScript 的标准规定，凡是使用别名执行eval，eval内部一律是全局作用域。
        上面代码中，eval是别名调用，所以即使它是在函数中，它的作用域还是全局作用域，因此输出的a为全局变量。这样的话，引擎就能确认e()不会对当前的函数作用域产生影响，优化的时候就可以把这一行排除掉。

eval的别名调用的形式五花八门，只要不是直接调用，都属于别名调用，因为引擎只能分辨eval()这一种形式是直接调用。

eval.call(null, '...')
window.eval('...')
(1, eval)('...')
(eval, eval)('...')`,
        score: 2,
      },
    ],
  },
  {
    name: "js 算术运算符",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `指数运算符怎么表示？`,
        answer: `x ** y，x 的 y 次方`,
        score: 1,
      },
      {
        question: `2 ** 3 ** 2 = ？`,
        answer: `注意，指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。
        2 ** (3 ** 2) = 2 ** 9 = 512`,
        score: 1,
      },
      {
        question: `如何获取余数值才更精准？`,
        answer: `需要注意的是，运算结果的正负号由第一个运算子的正负号决定。

-1 % 2 // -1
1 % -2 // 1
所以，为了得到负数的正确余数值，可以先使用绝对值函数。

// 错误的写法
function isOdd(n) {
  return n % 2 === 1;
}
isOdd(-5) // false
isOdd(-4) // false

// 正确的写法
function isOdd(n) {
  return Math.abs(n % 2) === 1;
}
isOdd(-5) // true
isOdd(-4) // false`,
        score: 2,
      },
      {
        question: `非相等运算符的字符串是如何比较的？`,
        answer: `字符串按照字典顺序进行比较。
'cat' > 'dog' // false
'cat' > 'catalog' // false

'cat' > 'Cat' // true'
上面代码中，小写的c的 Unicode 码点（99）大于大写的C的 Unicode 码点（67），所以返回true。

由于所有字符都有 Unicode 码点，因此汉字也可以比较。

'大' > '小' // false
上面代码中，“大”的 Unicode 码点是22823，“小”是23567，因此返回false。`,
        score: 1,
      },
      {
        question: `如果对象转换为原始类型（字符串），是怎么转换的？`,
        answer: `先调用 valueOf 方法（返回自身值），然后再调用 toString 方法（转成字符串）`,
        score: 1,
      },
      {
        question: `var x = [2];
        x > '11'
        返回结果是什么（true/false）？`,
        answer: `// 等同于 [2].valueOf().toString() > '11'
        // 即 '2' > '11'
        // true
        // 请注意，单纯字符串，而非数字的比较，字符串是不会转换为数字比的，而是直接根据code码比较的`,
        score: 1,
      },
      {
        question: `({ x: 2 }) >= ({ x: 1 })
        返回结果是什么（true/false）？`,
        answer: `// 等同于 ({ x: 2 }).valueOf().toString() >= ({ x: 1 }).valueOf().toString()
        // 即 '[object Object]' >= '[object Object]'`,
        score: 1,
      },
      {
        question: `严格相等运算符和相等运算符的区别？`,
        answer: `简单说，它们的区别是相等运算符（==）比较两个值是否相等，严格相等运算符（===）比较它们是否为“同一个值”。如果两个值不是同一类型，严格相等运算符（===）直接返回false，而相等运算符（==）会将它们转换成同一个类型，再用严格相等运算符进行比较。`,
        score: 1,
      },
      {
        question: `undefined === undefined
        null === null
        返回什么？`,
        answer: `都是true，自身严格相等`,
        score: 1,
      },
      {
        question: `1 == true
        0 == false
        2 == true
        2 == false
        'true' == true
        '' == 0
        '' == false
        '1' == true
        '\\n  123  \\t' == 123
        [1, 2] == '1,2'
        undefined == null
        0 == null
        0 == undefined`,
        answer: `1 == true // true
        // 等同于 1 === Number(true)
        
        0 == false // true
        // 等同于 0 === Number(false)
        
        2 == true // false
        // 等同于 2 === Number(true)
        
        2 == false // false
        // 等同于 2 === Number(false)
        
        'true' == true // false
        // 等同于 Number('true') === Number(true)
        // 等同于 NaN === 1
        
        '' == 0 // true
        // 等同于 Number('') === 0
        // 等同于 0 === 0
        
        '' == false  // true
        // 等同于 Number('') === Number(false)
        // 等同于 0 === 0
        
        '1' == true  // true
        // 等同于 Number('1') === Number(true)
        // 等同于 1 === 1
        
        '\\n  123  \\t' == 123 // true
        // 因为字符串转为数字时，省略前置和后置的空格
        
        [1, 2] == '1,2' // true
        // [1,2].valueOf().toString() = '1,2'
        和同类型比，也就是字符串，所以这俩相等

        undefined == null // true
        // null被转换为一个数值时，其值为0。‌undefined转换为一个数值时，其值为NaN。由于undefined和null在布尔上下文中都被视为false，因此它们在比较时会被转化为相同的布尔值，导致undefined == null的结果为true。这是因为JavaScript在比较这两个值时，会先将它们转换为布尔值，然后再进行比较。‌
        
        0 == null // false，null 做相等判断时，不进行转型，0>=null 返回 true
        0 == undefined // false, undefined 做相等判断时，不进行转型`,
        score: 5,
      },
      {
        question: `相等运算符的缺点？`,
        answer: `相等运算符隐藏的类型转换，会带来一些违反直觉的结果。

        0 == ''             // true
        0 == '0'            // true
        
        2 == true           // false
        2 == false          // false
        
        false == 'false'    // false
        false == '0'        // true
        
        false == undefined  // false
        false == null       // false
        null == undefined   // true
        
        ' \\t\\r\\n ' == 0     // true
        上面这些表达式都不同于直觉，很容易出错。因此建议不要使用相等运算符（==），最好只使用严格相等运算符（===）。`,
        score: 3,
      },
    ],
  },
  {
    name: "js 布尔值运算符",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `'t' && '' // 
        't' && 'f' // 
        't' && (1 + 2) // 
        '' && 'f' // 
        '' && '' // 
        
        var x = 1;
        (1 - 1) && ( x += 1) // 
        x // 
        返回值？`,
        answer: `'t' && '' // ""
't' && 'f' // "f"
't' && (1 + 2) // 3
'' && 'f' // ""
'' && '' // ""

var x = 1;
(1 - 1) && ( x += 1) // 0
x // 1 （前面是0，后面的语句不执行了）

且运算符（&&）往往用于多个表达式的求值。

它的运算规则是：如果第一个运算子的布尔值为true，则返回第二个运算子的值（注意是值，不是布尔值）；如果第一个运算子的布尔值为false，则直接返回第一个运算子的值，且不再对第二个运算子求值。`,
        score: 3,
      },
      {
        question: `true && 'foo' && '' && 4 && 'foo' && true
        1 && 2 && 3
        返回值？`,
        answer: `true && 'foo' && '' && 4 && 'foo' && true
        // ''
        
        1 && 2 && 3
        // 3`,
        score: 1,
      },
      {
        question: `'t' || ''
        't' || 'f'
        '' || 'f'
        返回值？`,
        answer: `'t' || '' // "t"
        't' || 'f' // "t"
        '' || 'f' // "f"`,
        score: 1,
      },
    ],
  },
  {
    name: "js 位运算符",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `位运算符有什么特点？`,
        answer: `这些位运算符直接处理每一个比特位（bit），所以是非常底层的运算，好处是速度极快，缺点是很不直观，许多场合不能使用它们，否则会使代码难以理解和查错。
有一点需要特别注意，位运算符只对整数起作用，如果一个运算子不是整数，会自动转为整数后再执行。另外，虽然在 JavaScript 内部，数值都是以64位浮点数的形式储存，但是做位运算的时候，是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数。
平时的数值运算，其实是要先转换成二进制再进行运算的，位运算是二进制运算。`,
        score: 4,
      },
      {
        question: `二进制或运算符是怎么计算的？`,
        answer: `二进制或运算符（|）逐位比较两个运算子，两个二进制位之中只要有一个为1，就返回1，否则返回0。
比如下面的例子 0|3
0 对应 ...0000
3 对应 ...0011
按规矩 ...0011(3)

2|3
2 对应 ...0010
3 对应 ...0011
按规矩 ...0011(3)

位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。需要注意的是，这种取整方法不适用超过32位整数最大值2147483647（2^31）的数。
`,
        score: 2,
      },
      {
        question: `如何通过二进制运算符转换为整数？`,
        answer: `function toInt32(x) {
  // return x | 0; //方法1
  // return x ^ 0; //方法2 （任何数与0进行异或计算都是它本身）
  return x >> 0;
  return x << 0;
}`,
        score: 2,
      },
      {
        question: `二进制与运算符是怎么计算的？`,
        answer: `二进制与运算符（&）逐位比较两个运算子，两个二进制位之中全部都是1，就返回1，否则返回0。
比如下面的例子 0&3
0 对应 ...0000
3 对应 ...0011
按规矩 ...0000(0)

2&3
2 对应 ...0010
3 对应 ...0011
按规矩 ...0010(2)

位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。需要注意的是，这种取整方法不适用超过32位整数最大值2147483647（2^31）的数。
`,
        score: 2,
      },
      {
        question: `什么是反码和补码？`,
        answer: `正数的反码与原码相同，如：10 反码为 0000 1010
负数的反码为除符号位，按位取反，即0变1，1变0。
在JavaScript中，负数是通过补码形式表示的。
对负数的二进制形式进行取反（0变为1，1变为0），得到反码。
反码加一，符号位取反，得到补码。
例如，我们要查看-4在JavaScript内部是如何表示的：

-4的二进制形式是1...100（实际32位），反码得到0...011。再加一，取反，得到1...100，这就是-4在JavaScript中的补码表示。
`,
        score: 2,
      },
      {
        question: `二进制否运算符是怎么计算的？`,
        answer: `二进制否运算符（~）将每个二进制位都变为相反值（0变为1，1变为0）。它的返回结果有时比较难理解，因为涉及到计算机内部的数值表示机制。
~ 3 // -4
上面表达式对3进行二进制否运算，得到-4。之所以会有这样的结果，是因为位运算时，JavaScript 内部将所有的运算子都转为32位的二进制整数再进行运算。

3的32位整数形式是00000000000000000000000000000011，二进制否运算以后得到11111111111111111111111111111100。由于第一位（符号位）是1，所以这个数是一个负数。JavaScript 内部采用补码形式表示负数，即需要将这个数减去1，再取一次反，然后加上负号，才能得到这个负数对应的10进制值。这个数减去1等于11111111111111111111111111111011，再取一次反得到00000000000000000000000000000100，再加上负号就是-4。考虑到这样的过程比较麻烦，可以简单记忆成，一个数与自身的取反值相加，等于-1。

~ -3 // 2
上面表达式可以这样算，-3的取反值等于-1减去-3，结果为2。

对一个整数连续两次二进制否运算，得到它自身。

~~3 // 3
`,
        score: 3,
      },
      {
        question: `~[]？~NaN？~null？`,
        answer: `// 相当于 ~Number([])
~[] // -1

// 相当于 ~Number(NaN)
~NaN // -1

// 相当于 ~Number(null)
~null // -1
`,
        score: 2,
      },
      {
        question: `二进制异或运算符是怎么计算的？`,
        answer: `二进制异或运算符（^）逐位比较两个运算子，在两个二进制位不同时返回1，相同时返回0。
比如下面的例子 0^3
0 对应 ...0000
3 对应 ...0011
按规矩 ...0011(3)

2^3
2 对应 ...0010
3 对应 ...0011
按规矩 ...0001(1)

位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。需要注意的是，这种取整方法不适用超过32位整数最大值2147483647的数。
`,
        score: 2,
      },
      {
        question: `异或运算是如何交换两个数的值的？`,
        answer: `“异或运算”有一个特殊运用，连续对两个数a和b进行三次异或运算，a^=b; b^=a; a^=b;，可以互换它们的值。这意味着，使用“异或运算”可以在不引入临时变量的前提下，互换两个变量的值。
        这是互换两个变量的值的最快方法。

a^=b  a=a^b
3^5
0011
0101
0110 ———— a=6(b还是5)

b^=a
5^6
0110
0101
0011 ———— b=3（与a交换成功）

a^=b
6^3
0110
0011
0101 ———— a=5（与b交换成功）

当然除此之外，也可以用乘除法实现不引入临时变量交换的这一目的
a=a*b=15
b=a/b=3
a=a/b=5

        var a = 10;
        var b = 99;
        
        a ^= b, b ^= a, a ^= b;
        
        a // 99
        b // 10
`,
        score: 3,
      },
      {
        question: `二进制左移运算符是怎么计算的？`,
        answer: `左移运算符（<<）表示将一个数的二进制值向左移动指定的位数，尾部补0，即乘以2的指定次方。向左移动的时候，最高位的符号位是一起移动的。

// 4 的二进制形式为100，
// 左移一位为1000（即十进制的8）
// 相当于乘以2的1次方
4 << 1
// 8

-4 << 1
// -8
上面代码中，-4左移一位得到-8，是因为-4的二进制形式是11111111111111111111111111111100，左移一位后得到11111111111111111111111111111000，该数转为十进制（减去1后取反，再加上负号）即为-8。

如果左移0位，就相当于将该数值转为32位整数，等同于取整，对于正数和负数都有效。

13.5 << 0
// 13

-13.5 << 0
// -13
左移运算符用于二进制数值非常方便。

var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)的作用为保证结果是6位数
var rgb2hex = function(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16) // 先转成十六进制，然后返回字符串
    .substr(1);   // 去除字符串的最高位，返回后面六个字符串
}

rgb2hex(color.r, color.g, color.b)
// "#bada55"
上面代码使用左移运算符，将颜色的 RGB 值转为 HEX 值。`,
        score: 3,
      },
      {
        question: `二进制右移运算符是怎么计算的？`,
        answer: `右移运算符（>>）表示将一个数的二进制值向右移动指定的位数。如果是正数，头部全部补0；如果是负数，头部全部补1。右移运算符基本上相当于除以2的指定次方（最高位即符号位参与移动）。

4 >> 1
// 2
/*
// 因为4的二进制形式为 00000000000000000000000000000100，
// 右移一位得到 00000000000000000000000000000010，
// 即为十进制的2
*/

-4 >> 1
// -2
/*
// 因为-4的二进制形式为 11111111111111111111111111111100，
// 右移一位，头部补1，得到 11111111111111111111111111111110,
// 即为十进制的-2
*/
右移运算可以模拟 2 的整除运算。

5 >> 1
// 2
// 相当于 5 / 2 = 2

21 >> 2
// 5
// 相当于 21 / 4 = 5

21 >> 3
// 2
// 相当于 21 / 8 = 2

21 >> 4
// 1
// 相当于 21 / 16 = 1`,
        score: 3,
      },
      {
        question: `头部补零的右移运算符与右移运算符有什么区别？`,
        answer: `头部补零的右移运算符（>>>）与右移运算符（>>）只有一个差别，就是一个数的二进制形式向右移动时，头部一律补零，而不考虑符号位。所以，该运算总是得到正值。对于正数，该运算的结果与右移运算符（>>）完全一致，区别主要在于负数。

4 >>> 1
// 2

-4 >>> 1
// 2147483646
/*
// 因为-4的二进制形式为11111111111111111111111111111100，
// 带符号位的右移一位，得到01111111111111111111111111111110，
// 即为十进制的2147483646。
*/
这个运算实际上将一个值转为32位无符号整数。

查看一个负整数在计算机内部的储存形式，最快的方法就是使用这个运算符。

-1 >>> 0 // 4294967295
上面代码表示，-1作为32位整数时，内部的储存形式使用无符号整数格式解读，值为 4294967295（即(2^32)-1，等于11111111111111111111111111111111）。`,
        score: 3,
      },
    ],
  },
  {
    name: "js 其他运算符",
    test: "js基础",
    visible: false,
    subject: [
      {
        question: `void 运算符有什么特点？`,
        answer: `void 运算符不返回任何值（或返回undefined），但是可以在void里面写表达式，代码会执行里面的表达式
下面是一个更实际的例子，用户点击链接提交表单，但是不产生页面跳转。

<a href="javascript: void(document.form.submit())">
  提交
</a>`,
        score: 1,
      },
      {
        question: `逗号运算符有什么特点？`,
        answer: `逗号运算符用于对两个表达式求值，并返回后一个表达式的值。

'a', 'b' // "b"

var x = 0;
var y = (x++, 10);
x // 1
y // 10
上面代码中，逗号运算符返回后一个表达式的值。

逗号运算符的一个用途是，在返回一个值之前，进行一些辅助操作。

var value = (console.log('Hi!'), true);
// Hi!

value // true
上面代码中，先执行逗号之前的操作，然后返回逗号后面的值。`,
        score: 1,
      },
      {
        question: `哪些运算符是“右结合”？`,
        answer: `将右侧两个运算数结合在一起，这样的运算符称为“右结合”运算符（right-to-left associativity）。
其中最主要的是赋值运算符（=）和三元条件运算符（?:）。

w = x = y = z;
q = a ? b : c ? d : e ? f : g;
上面代码的解释方式如下。

w = (x = (y = z));
q = a ? b : (c ? d : (e ? f : g));
上面的两行代码，都是右侧的运算数结合在一起。

另外，指数运算符（**）也是右结合。

2 ** 3 ** 2
// 相当于 2 ** (3 ** 2)
// 512`,
        score: 2,
      },
    ],
  },
  {
    name: "js 数据类型的转换",
    test: "js语法",
    visible: false,
    subject: [
      {
        question: `'4'+'3'=? '4'-'3'=？`,
        answer: `4'+'3'=43    '4'-'3'=1
虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的。如果运算符发现，运算子的类型与预期不符，就会自动转换类型。比如，减法运算符预期左右两侧的运算子应该是数值，如果不是，就会自动将它们转为数值。`,
        score: 1,
      },
      {
        question: `Number(324)
Number('324')
Number('324abc')
Number('')
Number(true)
Number(false)
Number(undefined) 
Number(null)
Number('\\t\\v\\r12.34\\n')`,
        answer: `Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0

// parseInt和Number函数都会自动过滤一个字符串前导和后缀的空格。
Number('\t\v\r12.34\n') // 12.34`,
        score: 3,
      },
      {
        question: `String({a: 1})
String([1, 2, 3])`,
        answer: `String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
        
String方法背后的转换规则，与Number方法基本相同，只是互换了valueOf方法和toString方法的执行顺序。
先调用对象自身的toString方法。如果返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
如果toString方法返回的是对象，再调用原对象的valueOf方法。如果valueOf方法返回原始类型的值，则对该值使用String函数，不再进行以下步骤。
如果valueOf方法返回的是对象，就报错。`,
        score: 1,
      },
      {
        question: `Boolean方法转换哪些值返回false？`,
        answer: `Boolean()函数可以将任意类型的值转为布尔值。

它的转换规则相对简单：除了以下五个值的转换结果为false，其他的值全部为true。
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
Boolean(false) // false

请注意，所有对象的布尔值都是true
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true`,
        score: 2,
      },
      {
        question: `在什么情况下，JavaScript 会自动转换数据类型，即转换是自动完成的，用户不可见？`,
        answer: `第一种情况，不同类型的数据互相运算。
123 + 'abc' // "123abc"

第二种情况，对非布尔值类型的数据求布尔值。
if ('abc') {
  console.log('hello')
}  // "hello"

第三种情况，对非数值类型的值使用一元运算符（+ 和 -，只需要一个操作符就能运算的运算符）或二元运算符（需要两个操作数运算的运算符）。
+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN
'3' - '2' = 1
'2' * '4' = 8
……`,
        score: 3,
      },
      {
        question: `'5' + 1
'5' + true
'5' + false
'5' + {}
'5' + []
'5' + function (){}
'5' + undefined
'5' + null`,
        answer: `'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"`,
        score: 2,
      },
      {
        question: `'5' - '2'
'5' * '2'
true - 1 
false - 1
'1' - 1 
'5' * [] 
false / '5'
'abc' - 1
null + 1
undefined + 1
+'abc'
-'abc'
+true
-false`,
        answer: `'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN
+'abc' // NaN
-'abc' // NaN
+true // 1
-false // 0`,
        score: 5,
      },
    ],
  },
  {
    name: "js 错误处理机制",
    test: "js语法",
    visible: false,
    subject: [
      {
        question: `如何手动抛出定义的错误？`,
        answer: `throw new Error(...);
throw语句的作用是手动中断程序执行，抛出一个错误。

除此之外，还可以手动抛出js提供的六种错误，甚至可以定义自己的错误对象。

function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
上面代码自定义一个错误对象UserError，让它继承Error对象。然后，就可以生成这种自定义类型的错误了。`,
        score: 3,
      },
      {
        question: `定义的错误有什么属性？`,
        answer: `message：错误提示信息
name：错误名称（非标准属性）
stack：错误的堆栈（非标准属性）

例子：
try {
  throw err;
} catch(e) {
  console.log(e.message)
  console.log(e.name)
  console.log(e.stack)
}

返回结果：
Msg is error
Error
Error: Msg is error
    at 数据类型.html:55:13`,
        score: 1,
      },
      {
        question: `SyntaxError 对象作用？`,
        answer: `SyntaxError对象是解析代码时发生的语法错误。
*Syntax 句法，句式结构

// 变量名错误
var 1a;
// Uncaught SyntaxError: Invalid or unexpected token

// 缺少括号
console.log 'hello');
// Uncaught SyntaxError: Unexpected string
上面代码的错误，都是在语法解析阶段就可以发现，所以会抛出SyntaxError。第一个错误提示是“token 非法”，第二个错误提示是“字符串不符合要求”。`,
        score: 1,
      },
      {
        question: `ReferenceError 对象作用？`,
        answer: `ReferenceError对象是引用一个不存在的变量时发生的错误。
*Reference，参考，查询

// 使用一个不存在的变量
unknownVariable
// Uncaught ReferenceError: unknownVariable is not defined
另一种触发场景是，将一个值分配给无法分配的对象，比如对函数的运行结果赋值。

// 等号左侧不是变量
console.log() = 1
// Uncaught ReferenceError: Invalid left-hand side in assignment
上面代码对函数console.log的运行结果赋值，结果引发了ReferenceError错误。`,
        score: 1,
      },
      {
        question: `RangeError 对象作用？`,
        answer: `RangeError对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。

// 数组长度不得为负数
new Array(-1)
// Uncaught RangeError: Invalid array length`,
        score: 1,
      },
      {
        question: `TypeError 对象作用？`,
        answer: `TypeError对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。

new 123
// Uncaught TypeError: 123 is not a constructor

var obj = {};
obj.unknownMethod()
// Uncaught TypeError: obj.unknownMethod is not a function
上面代码的第二种情况，调用对象不存在的方法，也会抛出TypeError错误，因为obj.unknownMethod的值是undefined，而不是一个函数。`,
        score: 1,
      },
      {
        question: `URIError 对象作用？`,
        answer: `URIError对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
URI是Uniform Resource Identifier的缩写，意为统一资源标识符。它是一个用于标识某一互联网资源名称的字符串，该种标识允许用户对任何（包括本地和互联网）的资源通过特定的协议进行交互操作。

decodeURI('%2')
// URIError: URI malformed`,
        score: 1,
      },
      {
        question: `EvalError 对象作用？`,
        answer: `eval函数没有被正确执行时，会抛出EvalError错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。`,
        score: 1,
      },
    ],
  },
  {
    name: "js Object对象",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `什么是构造函数？`,
        answer: `所谓”构造函数”，就是专门用来生成实例对象的函数。它就是对象的模板，描述实例对象的基本结构。一个构造函数，可以生成多个实例对象，这些实例对象都有相同的结构。

构造函数就是一个普通的函数，但具有自己的特征和用法。

var Vehicle = function () {
  this.price = 1000;
};
上面代码中，Vehicle就是构造函数。为了与普通函数区别，构造函数名字的第一个字母通常大写。

构造函数的特点有两个。

函数体内部使用了this关键字，代表了所要生成的对象实例。
生成对象的时候，必须使用new命令。`,
        score: 1,
        img: "5ff3355f2c8244668e1173e5a73b820b.png",
      },
      {
        question: `new的作用？`,
        answer: `new命令的作用，就是执行构造函数，返回一个实例对象。

var Vehicle = function () {
  this.price = 1000;
};

var v = new Vehicle();
v.price // 1000
上面代码通过new命令，让构造函数Vehicle生成一个实例对象，保存在变量v中。这个新生成的实例对象，从构造函数Vehicle得到了price属性。new命令执行时，构造函数内部的this，就代表了新生成的实例对象，this.price表示实例对象有一个price属性，值是1000。

使用new命令时，根据需要，构造函数也可以接受参数。

var Vehicle = function (p) {
  this.price = p;
};

var v = new Vehicle(500);`,
        score: 2,
      },
      {
        question: `使用构造函数时，如果忘了使用new命令，直接调用构造函数会发生什么事？`,
        answer: `这种情况下，构造函数就变成了普通函数，并不会生成实例对象。而且由于后面会说到的原因，this这时代表全局对象，将造成一些意想不到的结果。

var Vehicle = function (){
  this.price = 1000;
};

var v = Vehicle();
v // undefined
price // 1000

上面代码中，调用Vehicle构造函数时，忘了加上new命令。结果，变量v变成了undefined，而price属性变成了全局变量。因此，应该非常小心，避免不使用new命令、直接调用构造函数。`,
        score: 2,
      },
      {
        question: `new 命令的工作原理？`,
        answer: `使用new命令时，它后面的函数依次执行下面的步骤。

创建一个空对象，作为将要返回的对象实例。
将这个空对象的原型，指向构造函数的prototype属性。
将这个空对象赋值给函数内部的this关键字。
开始执行构造函数内部的代码。

也就是说，构造函数内部，this指的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。构造函数之所以叫“构造函数”，就是说这个函数的目的，就是操作一个空对象（即this对象），将其“构造”为需要的样子。`,
        score: 4,
      },
      {
        question: `function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg //
typeof msg //`,
        answer: `function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "object"

如果对普通函数（内部没有this关键字的函数）使用new命令，则会返回一个空对象。
上面代码中，getMessage是一个普通函数，返回一个字符串。对它使用new命令，会得到一个空对象。这是因为new命令总是返回一个对象，要么是实例对象，要么是return语句指定的对象。本例中，return语句返回的是字符串，所以new命令就忽略了该语句。
`,
        score: 2,
      },
      {
        question: `this关键字有什么用？`,
        answer: `this就是属性或方法“当前”所在的对象。`,
        score: 2,
      },
      {
        question: `为什么要有this关键字？`,
        answer: `由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。`,
        score: 2,
      },
      {
        question: `var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var B = {
  name: '李四'
};

B.describe = A.describe;
B.describe() //`,
        answer: `"姓名：李四"`,
        score: 2,
      },
      {
        question: `var A = {
  name: '张三',
  describe: function () {
    return '姓名：'+ this.name;
  }
};

var name = '李四';
var f = A.describe;
f() //`,
        answer: `"姓名：李四"
上面代码中，A.describe被赋值给变量f，内部的this就会指向f运行时所在的对象（本例是顶层对象）。`,
        score: 2,
      },
      {
        question: `原始对象是以什么形式保存的？`,
        answer: `原始的对象以字典结构保存，每一个属性名都对应一个属性描述对象。举例来说，上面例子的foo属性，实际上是以下面的形式保存的。
{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}
注意，foo属性的值保存在属性描述对象的value属性里面。

这样的结构是很清晰的，问题在于属性的值可能是一个函数。

var obj = { foo: function () {} };
这时，引擎会将函数单独保存在内存中，然后再将函数的地址赋值给foo属性的value属性。

{
  foo: {
    [[value]]: 函数的地址
    ...
  }
}
由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。

var f = function () {};
var obj = { f: f };

// 单独执行
f()

// obj 环境执行
obj.f()
JavaScript 允许在函数体内部，引用当前环境的其他变量。

var f = function () {
  console.log(x);
};
上面代码中，函数体里面使用了变量x。该变量由运行环境提供。`,
        score: 2,
      },
      {
        question: `var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};

var hello = a.b.m;
hello() //`,
        answer: `undefined (指向全局window)
        
上面代码中，m是多层对象内部的一个方法。为求简便，将其赋值给hello变量，结果调用时，this指向了顶层对象。为了避免这个问题，可以只将m所在的对象赋值给hello，这样调用时，this的指向就不会变。

var hello = a.b;
hello.m() // Hello`,
        score: 2,
      },
      {
        question: `使用this关键字有什么注意事项？`,
        answer: `1、避免多层 this。由于this的指向是不确定的，所以切勿在函数中包含多层的this。
在第一层函数中使用this时，如果想在其他层使用当前所指代的对象时，可以使用一个变量（如that）固定内部函数的值。

2、避免数组处理方法中的 this。
因为数组方法（如forEach）指向的其实是window，可以使用中间值固定指向对象。

3、避免回调函数中的 this。
回调函数中的this往往会改变指向，最好避免使用。`,
        score: 2,
      },
      {
        question: `call方法有什么用？`,
        answer: `☆ 函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。
call方法的参数，应该是一个对象。如果参数为空、null和undefined，则默认传入全局对象。

var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456


☆ call方法还可以接受多个参数。

func.call(thisValue, arg1, arg2, ...)
call的第一个参数就是this所要指向的那个对象，后面的参数则是函数调用时所需的参数。

function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
上面代码中，call方法指定函数add内部的this绑定当前环境（对象），并且参数为1和2，因此函数add运行后得到3。


☆ call方法的一个应用是调用对象的原生方法。

var obj = {};
obj.hasOwnProperty('toString') // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true

Object.prototype.hasOwnProperty.call(obj, 'toString') // false
上面代码中，hasOwnProperty是obj对象继承的方法，如果这个方法一旦被覆盖，就不会得到正确结果。call方法可以解决这个问题，它将hasOwnProperty方法的原始定义放到obj对象上执行，这样无论obj上有没有同名方法，都不会影响结果。`,
        score: 5,
      },
      {
        question: `apply 与 call 有什么区别？`,
        answer: `apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。

func.apply(thisValue, [arg1, arg2, ...])
apply方法的第一个参数也是this所要指向的那个对象，如果设为null或undefined，则等同于指定全局对象。第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。原函数的参数，在call方法中必须一个个添加，但是在apply方法中，必须以数组形式添加。`,
        score: 3,
      },
      {
        question: `bind方法的作用？`,
        answer: `bind()方法用于将函数体内的this绑定到某个对象，然后返回一个【新函数】。

var d = new Date();
d.getTime() // 1481869925657

var print = d.getTime;
print() // Uncaught TypeError: this is not a Date object.
上面代码中，我们将d.getTime()方法赋给变量print，然后调用print()就报错了。这是因为getTime()方法内部的this，绑定Date对象的实例，赋给变量print以后，内部的this已经不指向Date对象的实例了。

bind()方法可以解决这个问题。

var print = d.getTime.bind(d);
print() // 1481869925657
上面代码中，bind()方法将getTime()方法内部的this绑定到d对象，这时就可以安全地将这个方法赋值给其他变量了。`,
        score: 3,
      },
      {
        question: `bind方法与call和apply有什么不同？`,
        answer: `bind()方法会返回一个【新函数】。这个新函数不会立即执行，需要手动调用。如果这个新函数作为构造函数被调用，那它就不会指向bind的第一个参数（因为已经执行过了），而是构造函数所生成的实例对象`,
        score: 3,
      },
      {
        question: `Object方法是如何判定里面的值是对象的？`,
        answer: `如果参数是原始类型的值，Object方法将其转为对应的包装对象的实例（它既是原有的类型，也是一个对象）。

var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo');
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true
上面代码中，Object函数的参数是各种原始类型的值，转换成对象就是原始类型值对应的包装对象。

如果Object方法的参数是一个对象，它就不用转换。

var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true


利用这一点，可以写一个判断变量是否为对象的函数。

function isObject(value) {
  return value === Object(value);
}

isObject([]) // true
isObject(true) // false`,
        score: 3,
      },
      {
        question: `Object(value)与new Object(value)区别？`,
        answer: `虽然用法相似，但是Object(value)与new Object(value)两者的语义是不同的，Object(value)表示将value转成一个对象，new Object(value)则表示新生成一个对象，它的值是value。`,
        score: 2,
      },
      {
        question: `Object哪两个方法可以遍历对象的属性，有什么不同？`,
        answer: `Object.keys方法和Object.getOwnPropertyNames方法都用来遍历对象的属性。

对于一般的对象来说，Object.keys()和Object.getOwnPropertyNames()返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。Object.keys方法只返回可枚举的属性（详见《对象属性的描述对象》一章），Object.getOwnPropertyNames方法还返回不可枚举的属性名。
var a = ['Hello', 'World'];

Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]`,
        score: 2,
      },
    ],
  },
  {
    name: "js 对象的继承",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `构造函数有什么缺点？`,
        answer: `通过构造函数为实例对象定义属性，虽然很方便，但是有一个缺点。同一个构造函数的多个实例之间，无法共享属性，从而造成对系统资源的浪费。
        
function Cat(name, color) {
  this.name = name;
  this.color = color;
  this.meow = function () {
    console.log('喵喵');
  };
}

var cat1 = new Cat('大毛', '白色');
var cat2 = new Cat('二毛', '黑色');

cat1.meow === cat2.meow
// false
上面代码中，cat1和cat2是同一个构造函数的两个实例，它们都具有meow方法。由于meow方法是生成在每个实例对象上面，所以两个实例就生成了两次。也就是说，每新建一个实例，就会新建一个meow方法。这既没有必要，又浪费系统资源，因为所有meow方法都是同样的行为，完全应该共享。

这个问题的解决方法，就是 JavaScript 的原型对象（prototype）。`,
        score: 1,
        img: "5ff3355f2c8244668e1173e5a73b820b.png",
      },
      {
        question: `构造函数prototype属性的作用？`,
        answer: `JavaScript 规定，每个函数都有一个prototype属性，指向一个对象。

function f() {}
typeof f.prototype // "object"
上面代码中，函数f默认具有prototype属性，指向一个对象。

对于普通函数来说，该属性基本无用。但是，对于构造函数来说，生成实例的时候，该属性会自动成为实例对象的原型。

function Animal(name) {
  this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');

cat1.color // 'white'
cat2.color // 'white'
上面代码中，构造函数Animal的prototype属性，就是实例对象cat1和cat2的原型对象。原型对象上添加一个color属性，结果，实例对象都共享了该属性。

如果实例对象自身就有某个属性或方法，它就不会再去原型对象寻找这个属性或方法。

----------------------

cat1.color = 'black'; // 只把cat1的属性改了，其他对象的属性不会变

cat1.color // 'black'
cat2.color // 'yellow'
Animal.prototype.color // 'yellow';`,
        score: 3,
      },
      {
        question: `什么是原型链？`,
        answer: `一方面，任何一个对象，都可以充当其他对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”（prototype chain）：对象到原型，再到原型的原型……`,
        score: 3,
        img: "原型链.png",
      },
      {
        question: `所有对象的原型是什么？`,
        answer: `那么，Object.prototype对象有没有它的原型呢？回答是Object.prototype的原型是null。null没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是null。

Object.getPrototypeOf(Object.prototype)
// null
上面代码表示，Object.prototype对象的原型是null，由于null没有任何属性，所以原型链到此为止。`,
        score: 3,
      },
      {
        question: `什么是constructor属性？`,
        answer: `prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数。

function P() {}
P.prototype.constructor === P // true`,
        score: 3,
      },
      {
        question: `constructor属性有什么作用？`,
        answer: `可以得知某个实例对象，到底是哪一个构造函数产生的。另一方面，有了constructor属性，就可以从一个实例对象新建另一个实例。
        
function F() {};
var f = new F();

f.constructor === F // true
f.constructor === RegExp // false


function Constr() {}
var x = new Constr();

var y = new x.constructor();
y instanceof Constr // true

当然，构造函数与原型对象息息相关，如果原型对象被修改了，那么这个原型对象就不再指向对应的构造函数。
所以，修改原型对象时，一般要同时修改constructor属性的指向。

所以，修改原型对象时，一般要同时修改constructor属性的指向。

// 坏的写法
C.prototype = {
  method1: function (...) { ... },
  // ...
};

// 好的写法
C.prototype = {
  constructor: C,
  method1: function (...) { ... },
  // ...
};

// 更好的写法
C.prototype.method1 = function (...) { ... };
上面代码中，要么将constructor属性重新指向原来的构造函数，要么只在原型对象上添加方法，这样可以保证instanceof运算符不会失真。`,
        score: 2,
      },
      {
        question: `如果不能确定constructor属性是什么名称，可以通过什么办法？`,
        answer: `通过name属性，从实例得到构造函数的名称。

function Foo() {}
var f = new Foo();
f.constructor.name // "Foo"`,
        score: 1,
      },
      {
        question: `instanceof的作用是什么？`,
        answer: `instanceof运算符返回一个布尔值，表示对象是否为某个【构造函数】的实例（不是原型对象）。
由于instanceof检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回true。

instanceof运算符的一个用处，是判断值的类型。

var x = [1, 2, 3];
var y = {};
typeof Array // function
x instanceof Array // true
y instanceof Object // true`,
        score: 4,
      },
      {
        question: `undefined instanceof Object
null instanceof Object`,
        answer: `undefined instanceof Object // false
null instanceof Object // false`,
        score: 1,
      },
      {
        question: `如何让子类的构造函数继承父类构造函数？`,
        answer: `举例来说，下面是一个Shape构造函数。

function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};
我们需要让Rectangle构造函数继承Shape。

// 第一步，子类继承父类的实例
function Rectangle() {
  Shape.call(this); // 调用父类构造函数
}
// 另一种写法
function Rectangle() {
  this.base = Shape;
  this.base();
}

// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
采用这样的写法以后，instanceof运算符会对子类和父类的构造函数，都返回true。

var rect = new Rectangle();

rect instanceof Rectangle  // true
rect instanceof Shape  // true
上面代码中，子类是整体继承父类。有时只需要单个方法的继承，这时可以采用下面的写法。

ClassB.prototype.print = function() {
  ClassA.prototype.print.call(this);
  // some code
}
上面代码中，子类B的print方法先调用父类A的print方法，再部署自己的代码。这就等于继承了父类A的print方法。`,
        score: 4,
        img: "子类父类构造函数.png",
      },
    ],
  },
  {
    name: "js Object 方法",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `getPrototypeOf方法有什么用？`,
        answer: `Object.getPrototypeOf方法返回参数对象的原型。这是获取原型对象的标准方法（只局限于父子对象）。
这个方法直接返回是看不出来的，必须用比较的方式获取

var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype // true
上面代码中，实例对象f的原型是F.prototype。

下面是几种特殊对象的原型。

// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true

// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null // true

// 函数的原型是 Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype // true`,
        score: 1,
        img: "继承认爹.png",
      },
      {
        question: `setPrototypeOf方法有什么用？`,
        answer: `Object.setPrototypeOf方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。

var a = {};
var b = {x: 1};
Object.setPrototypeOf(a, b);

Object.getPrototypeOf(a) === b // true
a.x // 1
上面代码中，Object.setPrototypeOf方法将对象a的原型，设置为对象b，因此a可以共享b的属性。

new命令可以使用Object.setPrototypeOf方法模拟。

var F = function () {
  this.foo = 'bar';
};

var f = new F();
// 等同于
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
上面代码中，new命令新建实例对象，其实可以分成两步。第一步，将一个空对象的原型设为构造函数的prototype属性（上例是F.prototype）；第二步，将构造函数内部的this绑定这个空对象，然后执行构造函数，使得定义在this上面的方法和属性（上例是this.foo），都转移到这个空对象上。`,
        score: 1,
      },
      {
        question: `Object.create()方法有什么用？`,
        answer: `生成实例对象的常用方法是，使用new命令让构造函数返回一个实例。但是很多时候，只能拿到一个实例对象，它可能根本不是由构建函数生成的，那么能不能从一个实例对象，生成另一个实例对象呢？

JavaScript 提供了Object.create()方法，用来满足这种需求。该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

// 原型对象
var A = {
  print: function () {
    console.log('hello');
  }
};

// 实例对象
var B = Object.create(A);

Object.getPrototypeOf(B) === A // true
B.print() // hello
B.print === A.print // true
上面代码中，Object.create()方法以A对象为原型，生成了B对象。B继承了A的所有属性和方法。

实际上，Object.create()方法可以用下面的代码代替。

if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
上面代码表明，Object.create()方法的实质是新建一个空的构造函数F，然后让F.prototype属性指向参数对象obj，最后返回一个F的实例，从而实现让该实例继承obj的属性。`,
        score: 3,
      },
      {
        question: `如果想创建一个不继承任何属性的对象，可以将Object.create设为什么值？`,
        answer: `如果想要生成一个不继承任何属性（比如没有toString()和valueOf()方法）的对象，可以将Object.create()的参数设为null。

var obj = Object.create(null);

obj.valueOf()
// TypeError: Object [object Object] has no method 'valueOf'
上面代码中，对象obj的原型是null，它就不具备一些定义在Object.prototype对象上面的属性，比如valueOf()方法。

使用Object.create()方法的时候，必须提供对象原型，即参数不能为空，或者不是对象，否则会报错。

Object.create()
// TypeError: Object prototype may only be an Object or null
Object.create(123)
// TypeError: Object prototype may only be an Object or null`,
        score: 1,
      },
      {
        question: `Object.create的第二个参数有什么用？`,
        answer: `除了对象的原型，Object.create()方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。

var obj = Object.create({}, {
  p1: {
    value: 123,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  p2: {
    value: 'abc',
    enumerable: true,
    configurable: true,
    writable: true,
  }
});

// 等同于
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';
Object.create()方法生成的对象，继承了它的原型对象的构造函数。

function A() {}
var a = new A();
var b = Object.create(a);

b.constructor === A // true
b instanceof A // true
上面代码中，b对象的原型是a对象，因此继承了a对象的构造函数A。`,
        score: 1,
      },
      {
        question: `判断原型对象，可以用实例对象的什么方法？`,
        answer: `实例对象的isPrototypeOf方法，用来判断该对象是否为参数对象的原型（可以隔代）。

var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3) // true
o1.isPrototypeOf(o3) // true
上面代码中，o1和o2都是o3的原型。这表明只要实例对象处在参数对象的原型链上，isPrototypeOf方法都返回true。

Object.prototype.isPrototypeOf({}) // true
Object.prototype.isPrototypeOf([]) // true
Object.prototype.isPrototypeOf(/xyz/) // true
Object.prototype.isPrototypeOf(Object.create(null)) // false
上面代码中，由于Object.prototype处于原型链的最顶端，所以对各种实例都返回true，只有直接继承自null的对象除外。`,
        score: 2,
      },
      {
        question: `__proto__作用？`,
        answer: `实例对象的__proto__属性（前后各两个下划线），返回该对象的原型。该属性可读写。

var obj = {};
var p = {};

obj.__proto__ = p;
Object.getPrototypeOf(obj) === p // true
上面代码通过__proto__属性，将p对象设为obj对象的原型。

根据语言标准，__proto__属性只有浏览器才需要部署，其他环境可以没有这个属性。它前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。因此，应该尽量少用这个属性，而是用Object.getPrototypeOf()和Object.setPrototypeOf()，进行原型对象的读写操作。

原型链可以用__proto__很直观地表示。

var A = {
  name: '张三'
};
var B = {
  name: '李四'
};

var proto = {
  print: function () {
    console.log(this.name);
  }
};

A.__proto__ = proto;
B.__proto__ = proto;

A.print() // 张三
B.print() // 李四

A.print === B.print // true
A.print === proto.print // true
B.print === proto.print // true
上面代码中，A对象和B对象的原型都是proto对象，它们都共享proto对象的print方法。也就是说，A和B的print方法，都是在调用proto对象的print方法。`,
        score: 2,
      },
      {
        question: `getOwnPropertyNames()和keys()方法有什么区别？`,
        answer: `对象本身的属性之中，有的是可以遍历的（enumerable），有的是不可以遍历的。Object.getOwnPropertyNames方法返回所有键名，不管是否可以遍历。只获取那些可以遍历的属性，使用Object.keys方法。
        
Object.getOwnPropertyNames(Date)
// ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]

Object.keys(Date) // []`,
        score: 2,
      },
      {
        question: `hasOwnProperty和in...方法有什么区别？`,
        answer: `hasOwnProperty方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。
获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用for...in循环。

Date.hasOwnProperty('length') // true
Date.hasOwnProperty('toString') // false

'length' in Date // true
'toString' in Date // true`,
        score: 2,
      },
      {
        question: `如何利用Object里的方法实现对象的拷贝？`,
        answer: `如果要拷贝一个对象，需要做到下面两件事情。

确保拷贝后的对象，与原对象具有同样的原型。
确保拷贝后的对象，与原对象具有同样的实例属性。
下面就是根据上面两点，实现的对象拷贝函数。

function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig));
  copyOwnPropertiesFrom(copy, orig);
  return copy;
}

function copyOwnPropertiesFrom(target, source) {
  Object
    .getOwnPropertyNames(source)
    .forEach(function (propKey) {
      var desc = Object.getOwnPropertyDescriptor(source, propKey);
      Object.defineProperty(target, propKey, desc);
    });
  return target;
}
另一种更简单的写法，是利用 ES2017 才引入标准的Object.getOwnPropertyDescriptors方法。

function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}`,
        score: 1,
      },
    ],
  },
  {
    name: "js 严格模式",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `设计严格模式的目的？`,
        answer: `早期的 JavaScript 语言有很多设计不合理的地方，但是为了兼容以前的代码，又不能改变老的语法，只能不断添加新的语法，引导程序员使用新语法。

严格模式是从 ES5 进入标准的，主要目的有以下几个。

明确禁止一些不合理、不严谨的语法，减少 JavaScript 语言的一些怪异行为。
增加更多报错的场合，消除代码运行的一些不安全之处，保证代码运行的安全。
提高编译器效率，提升运行速度。
为未来新版本的 JavaScript 语法做好铺垫。
总之，严格模式体现了 JavaScript 更合理、更安全、更严谨的发展方向。`,
        score: 1,
      },
    ],
  },
  {
    name: "js 属性描述对象",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `属性描述对象提供了哪6个元属性，有什么用？`,
        answer: `（1）value
value是该属性的属性值，默认为undefined。

（2）writable
writable是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为true。

（3）enumerable
enumerable是一个布尔值，表示该属性是否可遍历，默认为true。如果设为false，会使得某些操作（比如for...in循环、Object.keys()）跳过该属性。

（4）configurable
configurable是一个布尔值，表示属性的可配置性，默认为true。如果设为false，将阻止某些操作改写属性描述对象，比如无法删除该属性，也不得改变各种元属性（value属性除外）。也就是说，configurable属性控制了属性描述对象的可写性。

（5）get
get是一个函数，表示该属性的取值函数（getter），默认为undefined。

（6）set
set是一个函数，表示该属性的存值函数（setter），默认为undefined。`,
        score: 5,
      },
      {
        question: `Object.defineProperty()，Object.defineProperties()的使用方法？`,
        answer: `Object.defineProperty()方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象，它的用法如下。

Object.defineProperty(object, propertyName, attributesObject)
Object.defineProperty方法接受三个参数，依次如下。

object：属性所在的对象
propertyName：字符串，表示属性名
attributesObject：属性描述对象

举例来说，定义obj.p可以写成下面这样。

var obj = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.p // 123

obj.p = 246;
obj.p // 123

如果一次性定义或修改多个属性，可以使用Object.defineProperties()方法。

var obj = Object.defineProperties({}, {
  p1: { value: 123, enumerable: true },
  p2: { value: 'abc', enumerable: true },
  p3: { get: function () { return this.p1 + this.p2 },
    enumerable:true,
    configurable:true
  }
});

obj.p1 // 123
obj.p2 // "abc"
obj.p3 // "123abc"

上面代码中，Object.defineProperties()同时定义了obj对象的三个属性。其中，p3属性定义了取值函数get，即每次读取该属性，都会调用这个取值函数。

注意，一旦定义了取值函数get（或存值函数set），就不能将writable属性设为true，或者同时定义value属性，否则会报错。

var obj = {};

Object.defineProperty(obj, 'p', {
  value: 123,
  get: function() { return 456; }
});
// TypeError: Invalid property.
// A property cannot both have accessors and be writable or have a value

Object.defineProperty(obj, 'p', {
  writable: true,
  get: function() { return 456; }
});
// TypeError: Invalid property descriptor.
// Cannot both specify accessors and a value or writable attribute
上面代码中，同时定义了get属性和value属性，以及将writable属性设为true，就会报错。

Object.defineProperty()和Object.defineProperties()参数里面的属性描述对象，writable、configurable、enumerable这三个属性的默认值都为false。`,
        score: 3,
      },
      {
        question: `Object.getOwnPropertyDescriptor()的使用方法？`,
        answer: `Object.getOwnPropertyDescriptor()方法可以获取属性描述对象。它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。

var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
上面代码中，Object.getOwnPropertyDescriptor()方法获取obj.p的属性描述对象。

注意，Object.getOwnPropertyDescriptor()方法只能用于对象自身的属性，不能用于继承的属性。

var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'toString')
// undefined
上面代码中，toString是obj对象继承的属性，Object.getOwnPropertyDescriptor()无法获取。

var obj = {};
Object.defineProperty(obj, 'foo', {});
Object.getOwnPropertyDescriptor(obj, 'foo')
// {
//   value: undefined,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
上面代码中，定义obj.foo时用了一个空的属性描述对象，就可以看到各个元属性的默认值。`,
        score: 3,
      },
      {
        question: `Object哪个方法可以判断属性是否可以遍历？`,
        answer: `Object.prototype.propertyIsEnumerable()
        实例对象的propertyIsEnumerable()方法返回一个布尔值，用来判断某个属性是否可遍历。注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回false。

var obj = {};
obj.p = 123;

obj.propertyIsEnumerable('p') // true
obj.propertyIsEnumerable('toString') // false
上面代码中，obj.p是可遍历的，而obj.toString是继承的属性。`,
        score: 2,
      },
      {
        question: `在什么情况下（只改变属性描述对象），value值不能做修改？`,
        answer: `只要writable和configurable有一个为true，就允许改动value。
需要两者都为false才行。`,
        score: 2,
      },
      {
        question: `存取器有哪些不同写法？`,
        answer: `var obj = Object.defineProperty({}, 'p', {
  get: function () {
    return 'getter';
  },
  set: function (value) {
    console.log('setter: ' + value);
  }
});

obj.p // "getter"
obj.p = 123 // "setter: 123"
上面代码中，obj.p定义了get和set属性。obj.p取值时，就会调用get；赋值时，就会调用set。
使用这种方法不能再将writeable设为true，或者给value赋值，否则会报错

JavaScript 还提供了存取器的另一种写法。

// 写法二
var obj = {
  get p() {
    return 'getter';
  },
  set p(value) {
    console.log('setter: ' + value);
  }
};
上面两种写法，虽然属性p的读取和赋值行为是一样的，但是有一些细微的区别。第一种写法，属性p的configurable和enumerable都为false，从而导致属性p是不可遍历的；第二种写法，属性p的configurable和enumerable都为true，因此属性p是可遍历的。实际开发中，写法二更常用。`,
        score: 1,
      },
      {
        question: `控制对象有什么方法，分别有什么用，可以通过什么方法去识别？`,
        answer: `Object.preventExtensions()
Object.preventExtensions方法可以使得一个对象无法再添加新的属性。

Object.seal()
Object.seal方法（密封）使得一个对象既无法添加新属性，也无法删除旧属性。

Object.freeze()
Object.freeze方法（冻结）可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量。

识别方式分别为：Object.isExtensible()（返回false说明无法添加新属性），Object.isSealed()（返回true说明无法增删旧属性），Object.isFrozen()（返回true说明已冻结）`,
        score: 10,
      },
      {
        question: `使用冻结对象有什么局限性？`,
        answer: `如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容（浅冻结）。

var obj = {
  foo: 1,
  bar: ['a', 'b']
};
Object.freeze(obj);

obj.bar.push('c');
obj.bar // ["a", "b", "c"]
上面代码中，obj.bar属性指向一个数组，obj对象被冻结以后，这个指向无法改变，即无法指向其他值，但是所指向的数组是可以改变的。


除此之外，它可以改变该对象原型的属性或方法。
let obj1 = {
  name: "123",
};
let obj2 = {
  age: 18,
};
Object.setPrototypeOf(obj2, obj1);
// obj2 = Object.create(obj1);
Object.freeze(obj2);
obj1.name = "sss";
obj2.age = 22;
console.log(obj2.name); // 'sss'`,
        score: 2,
      },
    ],
  },
  {
    name: "js Array 对象",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `Array()
new Array()

new Array(1)
new Array(2)

new Array(3.2)
new Array(-3)

new Array('abc')
new Array([1])

new Array(1, 2)
new Array('a', 'b', 'c')`,
        answer: `Array()构造函数有一个很大的缺陷，不同的参数个数会导致不一致的行为。

// 无参数时，返回一个空数组。如果没有使用new关键字，运行结果也是一样的。
Array() // []
new Array() // []

// 单个正整数参数，表示返回的新数组的长度(空位)
new Array(1) // [ empty ]
new Array(2) // [ empty x 2 ]

// 非正整数的数值作为参数，会报错
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 单个非数值（比如字符串、布尔值、对象等）作为参数，
// 则该参数是返回的新数组的成员
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]  [[1]]

// 多参数时，所有参数都是返回的新数组的成员
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']

可以看到，Array()作为构造函数，行为很不一致。因此，不建议使用它生成新数组，直接使用数组字面量是更好的做法。

// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];`,
        score: 3,
      },
      {
        question: `Array对象的哪个方法可以表示参数是否是数组？`,
        answer: `Array.isArray方法返回一个布尔值，表示参数是否为数组。它可以弥补typeof运算符的不足。

var arr = [1, 2, 3];

typeof arr // "object"
Array.isArray(arr) // true
上面代码中，typeof运算符只能显示数组的类型是Object，而Array.isArray方法可以识别数组。`,
        score: 1,
      },
      {
        question: `var arr = [1, 2, 3]
arr.valueOf()
arr.toString()`,
        answer: `arr.valueOf() // [1, 2, 3]
arr.toString() // "1,2,3"`,
        score: 1,
      },
      {
        question: `var arr = [];

arr.push(1) // 
arr.push('a') // 
arr.push(true, {}) // 
arr // `,
        answer: `push方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度
var arr = [];

arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {}) // 4
arr // [1, 'a', true, {}]`,
        score: 2,
      },
      {
        question: `var arr = ['a', 'b', 'c'];

arr.pop() // 
arr // 
[].pop() // `,
        answer: `arr.pop() // 'c'
arr // ['a', 'b']
[].pop() // undefined`,
        score: 2,
      },
      {
        question: `concat（）方法作用`,
        answer: `concat方法用于多个数组的合并。 它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，原数组不变。

['hello'].concat(['world'])
// ["hello", "world"]

['hello'].concat(['world'], ['!'])
// ["hello", "world", "!"]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[2].concat({a: 1})
// [2, {a: 1}]`,
        score: 1,
      },
      {
        question: `reverse（）方法作用`,
        answer: `reverse方法用于颠倒排列数组元素，返回改变后的数组。 注意，该方法将改变原数组。

var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]`,
        score: 1,
      },
      {
        question: `[undefined, null].join('#')
//

['a',, 'b'].join('-')
// `,
        answer: `如果数组成员是undefined或null或空位，会被转成空字符串。

[undefined, null].join('#')
// '#'

['a',, 'b'].join('-')
// 'a--b'`,
        score: 1,
      },
      {
        question: `slice()方法作用（正的，负的，返回的）？`,
        answer: `slice()方法（切片）用于提取目标数组的一部分，返回一个新数组，原数组不变。

arr.slice(start, end);
它的第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。 如果省略第二个参数，则一直返回到原数组的最后一个成员。

var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]
上面代码中，最后一个例子没有参数，实际上等于返回一个原数组的拷贝。slice()

如果方法的参数是负数，则表示倒数计算的位置。slice()

var a = ['a', 'b', 'c'];
a.slice(-2) // ["b", "c"]
a.slice(-2, -1) // ["b"]
上面代码中，表示倒数计算的第二个位置，表示倒数计算的第一个位置。-2-1

如果第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。

var a = ['a', 'b', 'c'];
a.slice(4) // []
a.slice(2, 1) // []
slice()方法的一个重要应用，是将类似数组的对象转为真正的数组。

Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);
上面代码的参数都不是数组，但是通过方法，在它们上面调用方法，就可以把它们转为真正的数组。callslice()`,
        score: 4,
      },
      {
        question: `splice()方法作用（正的，负的，返回的）？`,
        answer: `splice()方法（拼接）用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。 注意，该方法会改变原数组。

arr.splice(start, count, addElement1, addElement2, ...);
splice的第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数。 如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。

var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]
上面代码从原数组4号位置，删除了两个数组成员。

var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]
上面代码除了删除成员，还插入了两个新成员。

起始位置如果是负数，就表示从倒数位置开始删除。

var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(-4, 2) // ["c", "d"]
上面代码表示，从倒数第四个位置开始删除两个成员。c

如果只是单纯地插入元素，方法的第二个参数可以设为。splice0

var a = [1, 1, 1];

a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
如果只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。

var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]`,
        score: 4,
      },
      {
        question: `sort方法默认是按什么顺序排序？`,
        answer: `sort方法对数组成员进行排序，默认是按照字典顺序排序。 排序后，原数组将被改变。

['d', 'c', 'b', 'a'].sort()
// ['a', 'b', 'c', 'd']

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]`,
        score: 1,
      },
      {
        question: `sort方法传入回调函数，是如何进行排序的？`,
        answer: `如果想让方法按照自定义方式排序，可以传入一个函数作为参数。sort

[10111, 1101, 111].sort(function (a, b) {
  return a - b; // 从小到大
})
// [111, 1101, 10111]
上面代码中，的参数函数本身接受两个参数，表示进行比较的两个数组成员。 如果该函数的返回值大于，表示第一个成员排在第二个成员后面； 其他情况下，都是第一个元素排在第二个元素前面。`,
        score: 3,
      },
      {
        question: `map方法的作用？`,
        answer: `map()方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回。
如果数组有空位，方法的回调函数在这个位置不会执行，会跳过数组的空位。
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
上面代码中，数组的所有成员依次执行参数函数，运行结果组成一个新数组返回，原数组numbers没有变化。

map()方法接受一个函数作为参数。 该函数调用时，map()方法向它传入三个参数：当前成员、当前位置和数组本身。

[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
上面代码中，方法的回调函数有三个参数，为当前成员的值，为当前成员的位置，为原数组（）。`,
        score: 4,
      },
      {
        question: `forEach方法的作用？`,
        answer: `forEach()方法与map()方法很相似，也是对数组的所有成员依次执行参数函数。 但是，forEach()方法不返回值，只用来操作数据。因此，如果想获取新的返回值，就使用map()方法，否则就用forEach()方法
如果数组有空位，方法的回调函数在这个位置不会执行，会跳过数组的空位。        
forEach()的用法与map()方法一致，参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。

function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9`,
        score: 4,
      },
      {
        question: `filter方法的作用？`,
        answer: `filter()方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。 该方法不会改变原数组。
filter()方法的参数函数可以接受三个参数：当前成员，当前位置和整个数组。`,
        score: 4,
      },
      {
        question: `some和every方法的作用？`,
        answer: `some方法是只要一个成员的返回值是true，则整个方法的返回值就是true，否则返回false。
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true

every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false`,
        score: 4,
      },
      {
        question: `reduce()方法和reduceRight()方法的作用，参数都有哪些？`,
        answer: `reduce()方法和reduceRight()方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce()是从左到右处理（从第一个成员到最后一个成员），reduceRight()则是从右到左（从最后一个成员到第一个成员），其他完全一样。

reduce()方法和reduceRight()方法的第一个参数都是一个函数。该函数接受以下四个参数。

累积变量。第一次执行时，默认为数组的第一个成员；以后每次执行时，都是上一轮的返回值。
当前变量。第一次执行时，默认为数组的第二个成员；以后每次执行时，都是下一个成员。
当前位置。一个整数，表示第二个参数（当前变量）的位置，默认为1。
原数组。
这四个参数之中，只有前两个是必须的，后两个则是可选的。

[1, 2, 3, 4, 5].reduce(function (
  a,   // 累积变量，必须
  b,   // 当前变量，必须
  i,   // 当前位置，可选
  arr  // 原数组，可选
) {
  // ... ...
如果要对累积变量指定初值，可以把它放在reduce()方法和reduceRight()方法的第二个参数。

[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
上面代码指定参数a的初值为10，所以数组从10开始累加，最终结果为25。注意，这时b是从数组的第一个成员开始遍历，参数函数会执行5次。

建议总是加上第二个参数，这样比较符合直觉，每个数组成员都会依次执行reduce()方法的参数函数。另外，第二个参数可以防止空数组报错(currentIndex默认是1)。`,
        score: 6,
      },
      {
        question: `indexOf()，lastIndexOf()方法的作用？`,
        answer: `indexOf方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。

var a = ['a', 'b', 'c'];

a.indexOf('b') // 1
a.indexOf('y') // -1
indexOf方法还可以接受第二个参数，表示搜索的开始位置。

['a', 'b', 'c'].indexOf('a', 1) // -1
上面代码从1号位置开始搜索字符a，结果为-1，表示没有搜索到。

lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

var a = [2, 5, 9, 2];
a.lastIndexOf(2) // 3
a.lastIndexOf(7) // -1
注意，这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN。

[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
这是因为这两个方法内部，使用严格相等运算符（===）进行比较，而NaN是唯一一个不等于自身的值。`,
        score: 5,
      },
    ],
  },
  {
    name: "js 包装对象",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `什么是包装对象？`,
        answer: `所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。

var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);

typeof v1 // "object"
typeof v2 // "object"
typeof v3 // "object"

v1 === 123 // false
v2 === 'abc' // false
v3 === true // false`,
        score: 2,
      },
      {
        question: `为什么要有包装对象？`,
        answer: `包装对象的设计目的，首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法。

Number、String和Boolean这三个原生对象，如果不作为构造函数调用（即调用时不加new），而是作为普通函数调用，常常用于将任意类型的值转为数值、字符串和布尔值。

// 字符串转为数值
Number('123') // 123

// 数值转为字符串
String(123) // "123"

// 数值转为布尔值
Boolean(123) // true`,
        score: 2,
      },
      {
        question: `为什么字符串可以调用length属性？`,
        answer: `某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。这时，JavaScript 引擎会自动将原始类型的值转为包装对象实例，并在使用后立刻销毁实例。

比如，字符串可以调用length属性，返回字符串的长度。

'abc'.length // 3
上面代码中，abc是一个字符串，本身不是对象，不能调用length属性。JavaScript 引擎自动将其转为包装对象，在这个对象上调用length属性。调用结束后，这个临时对象就会被销毁。这就叫原始类型与实例对象的自动转换。

var str = 'abc';
str.length // 3

// 等同于
var strObj = new String(str)
// String {
//   0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"
// }
strObj.length // 3
上面代码中，字符串abc的包装对象提供了多个属性，length只是其中之一。

自动转换生成的包装对象是只读的，无法修改。所以，字符串无法添加新属性。

var s = 'Hello World';
s.x = 123;
s.x // undefined
上面代码为字符串s添加了一个x属性，结果无效，总是返回undefined。

另一方面，调用结束后，包装对象实例会自动销毁。这意味着，下一次调用字符串的属性时，实际是调用一个新生成的对象，而不是上一次调用时生成的那个对象，所以取不到赋值在上一个对象的属性。如果要为字符串添加属性，只有在它的原型对象String.prototype上定义（参见《面向对象编程》章节）。`,
        score: 2,
      },
      {
        question: `Boolean(undefined) // 
Boolean(null) // 
Boolean(0) // 
Boolean('') // 
Boolean(NaN) // 

Boolean(1) // 
Boolean('false') // 
Boolean([]) // 
Boolean({}) // 
Boolean(function () {}) // 
Boolean(/foo/) // 
new Boolean(false) // `,
        answer: `Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true
new Boolean(false) // true`,
        score: 4,
      },
      {
        question: `如果需要返回包装实例对象的原始值，需要怎么做？`,
        answer: `使用实例的valueOf()方法`,
        score: 1,
      },
      {
        question: `下面这几个分别表示什么？
Number.POSITIVE_INFINITY：
Number.NEGATIVE_INFINITY：
Number.NaN：
Number.MIN_VALUE：
Number.MAX_SAFE_INTEGER：
Number.MIN_SAFE_INTEGER：`,
        answer: `Number.POSITIVE_INFINITY：正的无限，指向Infinity。
Number.NEGATIVE_INFINITY：负的无限，指向-Infinity。
Number.NaN：表示非数值，指向NaN。
Number.MIN_VALUE：表示最小的正数（即最接近0的正数，在64位浮点数体系中为5e-324），相应的，最接近0的负数为-Number.MIN_VALUE。
Number.MAX_SAFE_INTEGER：表示能够精确表示的最大整数，即9007199254740991。
Number.MIN_SAFE_INTEGER：表示能够精确表示的最小整数，即-9007199254740991。`,
        score: 2,
      },
      {
        question: `Number.prototype.toFixed()作用`,
        answer: `toFixed()方法先将一个数转为指定位数的小数，然后返回这个小数对应的字符串。

(10).toFixed(2) // "10.00"
10.005.toFixed(2) // "10.01"
上面代码中，10和10.005先转成2位小数，然后转成字符串。其中10必须放在括号里，否则后面的点会被处理成小数点。

toFixed()方法的参数为小数位数，有效范围为0到100，超出这个范围将抛出 RangeError 错误。

由于浮点数的原因，小数5的四舍五入是不确定的，使用的时候必须小心。

(10.055).toFixed(2) // 10.05
(10.005).toFixed(2) // 10.01`,
        score: 4,
      },
      {
        question: `Number.prototype.toExponential()作用`,
        answer: `toExponential方法用于将一个数转为科学计数法形式。

(10).toExponential()  // "1e+1"
(10).toExponential(1) // "1.0e+1"
(10).toExponential(2) // "1.00e+1"

(1234).toExponential()  // "1.234e+3"
(1234).toExponential(1) // "1.2e+3"
(1234).toExponential(2) // "1.23e+3"
toExponential方法的参数是小数点后有效数字的位数，范围为0到100，超出这个范围，会抛出一个 RangeError 错误。`,
        score: 1,
      },
      {
        question: `Number.prototype.toPrecision()作用`,
        answer: `Number.prototype.toPrecision()方法用于将一个数转为指定位数的有效数字。

(12.34).toPrecision(1) // "1e+1"
(12.34).toPrecision(2) // "12"
(12.34).toPrecision(3) // "12.3"
(12.34).toPrecision(4) // "12.34"
(12.34).toPrecision(5) // "12.340"
该方法的参数为有效数字的位数，范围是1到100，超出这个范围会抛出 RangeError 错误。

该方法用于四舍五入时不太可靠，跟浮点数不是精确储存有关。

(12.35).toPrecision(3) // "12.3"
(12.25).toPrecision(3) // "12.3"
(12.15).toPrecision(3) // "12.2"
(12.45).toPrecision(3) // "12.4"`,
        score: 1,
      },
      {
        question: `Number.prototype.toLocaleString()作用`,
        answer: `Number.prototype.toLocaleString()方法接受一个地区码作为参数，返回一个字符串，表示当前数字在该地区的当地书写形式。

(123).toLocaleString('zh-Hans-CN-u-nu-hanidec')
// "一二三"
该方法还可以接受第二个参数配置对象，用来定制指定用途的返回字符串。该对象的style属性指定输出样式，默认值是decimal，表示输出十进制形式。如果值为percent，表示输出百分数。

(123).toLocaleString('zh-Hans-CN', { style: 'percent' })
// "12,300%"
如果style属性的值为currency，则可以搭配currency属性，输出指定格式的货币字符串形式。

(123).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' })
// "￥123.00"

(123).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
// "123,00 €"

(123).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
// "$123.00"
如果Number.prototype.toLocaleString()省略了参数，则由浏览器自行决定如何处理，通常会使用操作系统的地区设定。比方说数字会转为带千分位的字符串。
注意，该方法如果使用浏览器不认识的地区码，会抛出一个错误。

(123).toLocaleString('123') // 出错`,
        score: 1,
      },
      {
        question: `String.fromCharCode()作用`,
        answer: `String对象提供的静态方法（即定义在对象本身，而不是定义在对象实例的方法），主要是String.fromCharCode()。该方法的参数是一个或多个数值，代表 Unicode 码点，返回值是这些码点组成的字符串。
String.fromCharCode() // ""
String.fromCharCode(97) // "a"
String.fromCharCode(104, 101, 108, 108, 111)
// "hello"
上面代码中，String.fromCharCode方法的参数为空，就返回空字符串；否则，返回参数对应的 Unicode 字符串。`,
        score: 1,
      },
      {
        question: `String.prototype.charAt()作用`,
        answer: `charAt方法返回指定位置的字符，参数是从0开始编号的位置。

var s = new String('abc');

s.charAt(1) // "b"
s.charAt(s.length - 1) // "c"
这个方法完全可以用数组下标替代。

'abc'.charAt(1) // "b"
'abc'[1] // "b"
如果参数为负数，或大于等于字符串的长度，charAt返回空字符串。

'abc'.charAt(-1) // ""
'abc'.charAt(3) // ""`,
        score: 3,
      },
      {
        question: `String.prototype.charCodeAt()作用`,
        answer: `charCodeAt()方法返回字符串指定位置的 Unicode 码点（十进制表示），相当于String.fromCharCode()的逆操作。

'abc'.charCodeAt(1) // 98
上面代码中，abc的1号位置的字符是b，它的 Unicode 码点是98。

如果没有任何参数，charCodeAt返回首字符的 Unicode 码点。

'abc'.charCodeAt() // 97
如果参数为负数，或大于等于字符串的长度，charCodeAt返回NaN。

'abc'.charCodeAt(-1) // NaN
'abc'.charCodeAt(4) // NaN
注意，charCodeAt方法返回的 Unicode 码点不会大于65536（0xFFFF），也就是说，只返回两个字节的字符的码点。如果遇到码点大于 65536 的字符（四个字节的字符），必须连续使用两次charCodeAt，不仅读入charCodeAt(i)，还要读入charCodeAt(i+1)，将两个值放在一起，才能得到准确的字符。`,
        score: 2,
      },
      {
        question: `String.prototype.concat()作用`,
        answer: `concat方法用于连接两个字符串，返回一个新字符串，不改变原字符串。

var s1 = 'abc';
var s2 = 'def';

s1.concat(s2) // "abcdef"
s1 // "abc"
该方法可以接受多个参数。

'a'.concat('b', 'c') // "abc"
如果参数不是字符串，concat方法会将其先转为字符串，然后再连接。

var one = 1;
var two = 2;
var three = '3';

''.concat(one, two, three) // "123"
one + two + three // "33"
上面代码中，concat方法将参数先转成字符串再连接，所以返回的是一个三个字符的字符串。作为对比，加号运算符在两个运算数都是数值时，不会转换类型，所以返回的是一个两个字符的字符串。`,
        score: 1,
      },
      {
        question: `String.prototype.slice()作用`,
        answer: `slice()方法用于从原字符串取出子字符串并返回，不改变原字符串。它的第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。

'JavaScript'.slice(0, 4) // "Java"
如果省略第二个参数，则表示子字符串一直到原字符串结束。

'JavaScript'.slice(4) // "Script"
如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。

'JavaScript'.slice(-6) // "Script"
'JavaScript'.slice(0, -6) // "Java"
'JavaScript'.slice(-2, -1) // "p"
如果第一个参数大于第二个参数（正数情况下），slice()方法返回一个空字符串。

'JavaScript'.slice(2, 1) // ""`,
        score: 2,
      },
      {
        question: `String.prototype.substring()作用`,
        answer: `substring方法用于从原字符串取出子字符串并返回，不改变原字符串，跟slice方法很相像。它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）。

'JavaScript'.substring(0, 4) // "Java"
如果省略第二个参数，则表示子字符串一直到原字符串的结束。

'JavaScript'.substring(4) // "Script"
如果第一个参数大于第二个参数，substring方法会自动更换两个参数的位置。

'JavaScript'.substring(10, 4) // "Script"
// 等同于
'JavaScript'.substring(4, 10) // "Script"
上面代码中，调换substring方法的两个参数，都得到同样的结果。

如果参数是负数，substring方法会自动将负数转为0。

'JavaScript'.substring(-3) // "JavaScript"
'JavaScript'.substring(4, -3) // "Java"
上面代码中，第二个例子的参数-3会自动变成0，等同于'JavaScript'.substring(4, 0)。由于第二个参数小于第一个参数，会自动互换位置，所以返回Java。

由于这些规则违反直觉，因此不建议使用substring方法，应该优先使用slice。`,
        score: 1,
      },
      {
        question: `String.prototype.substr()作用`,
        answer: `substr方法用于从原字符串取出子字符串并返回，不改变原字符串，跟slice和substring方法的作用相同。

substr方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度。

'JavaScript'.substr(4, 6) // "Script"
如果省略第二个参数，则表示子字符串一直到原字符串的结束。

'JavaScript'.substr(4) // "Script"
如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。

'JavaScript'.substr(-6) // "Script"
'JavaScript'.substr(4, -1) // ""
上面代码中，第二个例子的参数-1自动转为0，表示子字符串长度为0，所以返回空字符串。`,
        score: 2,
      },
      {
        question: `String.prototype.indexOf()，String.prototype.lastIndexOf()作用`,
        answer: `indexOf方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回-1，就表示不匹配。

'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
indexOf方法还可以接受第二个参数，表示从该位置开始向后匹配。

'hello world'.indexOf('o', 6) // 7
lastIndexOf方法的用法跟indexOf方法一致，主要的区别是lastIndexOf从尾部开始匹配，indexOf则是从头部开始匹配。

'hello world'.lastIndexOf('o') // 7
另外，lastIndexOf的第二个参数表示从该位置起向前匹配。

'hello world'.lastIndexOf('o', 6) // 4`,
        score: 2,
      },
      {
        question: `String.prototype.trim()作用`,
        answer: `trim方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串。

'  hello world  '.trim()
// "hello world"
该方法去除的不仅是空格，还包括制表符（\\t、\\v）、换行符（\\n）和回车符（\\r）。

'\\r\\nabc \\t'.trim() // 'abc'`,
        score: 2,
      },
      {
        question: `全部转大小写需要用什么方法`,
        answer: `toLowerCase方法用于将一个字符串全部转为小写，toUpperCase则是全部转为大写。它们都返回一个新字符串，不改变原字符串。

'Hello World'.toLowerCase()
// "hello world"

'Hello World'.toUpperCase()
// "HELLO WORLD"`,
        score: 2,
      },
      {
        question: `String.prototype.split()作用`,
        answer: `split方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。

'a|b|c'.split('|') // ["a", "b", "c"]`,
        score: 3,
      },
      {
        question: `String.prototype.localeCompare()作用`,
        answer: `localeCompare方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。

'apple'.localeCompare('banana') // -1
'apple'.localeCompare('apple') // 0
该方法的最大特点，就是会考虑自然语言的顺序。举例来说，正常情况下，大写的英文字母小于小写字母。

'B' > 'a' // false
上面代码中，字母B小于字母a。因为 JavaScript 采用的是 Unicode 码点比较，B的码点是66，而a的码点是97。

但是，localeCompare方法会考虑自然语言的排序情况，将B排在a的前面。

'B'.localeCompare('a') // 1
上面代码中，localeCompare方法返回整数1，表示B较大。

localeCompare还可以有第二个参数，指定所使用的语言（默认是英语），然后根据该语言的规则进行比较。

'ä'.localeCompare('z', 'de') // -1
'ä'.localeCompare('z', 'sv') // 1
上面代码中，de表示德语，sv表示瑞典语。德语中，ä小于z，所以返回-1；瑞典语中，ä大于z，所以返回1。`,
        score: 1,
      },
    ],
  },
  {
    name: "js 其他对象",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `常数π怎么表示？`,
        answer: `Math.PI // 3.141592653589793`,
        score: 1,
      },
      {
        question: `Math.abs()：
Math.ceil()：
Math.floor()：
Math.max()：
Math.min()：
Math.pow()：
Math.sqrt()：
Math.log()：
Math.exp()：
Math.round()：
Math.random()：`,
        answer: `Math.abs()：绝对值
Math.ceil()：向上取整
Math.floor()：向下取整
Math.max()：最大值
Math.min()：最小值

Math.pow()：幂运算 Math.pow方法返回以第一个参数为底数、第二个参数为指数的幂运算值。
// 等同于 2 ** 3
Math.pow(2, 3) // 8

Math.sqrt()：平方根
Math.sqrt(4) // 2
Math.sqrt(-4) // NaN

Math.log()：自然对数
Math.exp()：e的指数
Math.round()：四舍五入
Math.random()：返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。

Math对象还提供一系列三角函数方法。

Math.sin()：返回参数的正弦（参数为弧度值）
Math.cos()：返回参数的余弦（参数为弧度值）
Math.tan()：返回参数的正切（参数为弧度值）
Math.asin()：返回参数的反正弦（返回值为弧度值）
Math.acos()：返回参数的反余弦（返回值为弧度值）
Math.atan()：返回参数的反正切（返回值为弧度值）`,
        score: 5,
      },
      {
        question: `如果不写new实例化Date对象，会发生什么？`,
        answer: `返回当前时间的字符串，给该对象传参无效
console.log(Date(2023,1,1))  // Sat Jun 15 2024 22:33:42 GMT+0800 (中国标准时间)
console.log(new Date(2023,1,1)) // Wed Feb 01 2023 00:00:00 GMT+0800 (中国标准时间)`,
        score: 1,
      },
      {
        question: `为什么Date实例返回的是一段字符串，代表实例对应的时间？`,
        answer: `Date实例有一个独特的地方。其他对象求值的时候，都是默认调用.valueOf()方法，但是Date实例求值的时候，默认调用的是toString()方法。这导致对Date实例求值，返回的是一个字符串，代表该实例对应的时间。直接求值等同于调用toString方法。

作为构造函数时，Date对象可以接受多种格式的参数，返回一个该参数对应的时间实例。

// 参数为时间零点开始计算的毫秒数
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 参数为日期字符串
new Date('January 6, 2013');
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// 参数为多个整数，
// 代表年、月、日、小时、分钟、秒、毫秒
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)`,
        score: 1,
      },
      {
        question: `Date日期运算有什么特点？`,
        answer: `类型自动转换时，Date实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期实例对象进行减法运算时，返回的是它们间隔的毫秒数；进行加法运算时，返回的是两个字符串连接而成的新字符串。

var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, 3, 1);

d2 - d1
// 2678400000
d2 + d1
// "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)"`,
        score: 3,
      },
      {
        question: `Date.now()，Date.parse()，Date.UTC()各自有什么用？`,
        answer: `Date.now()
Date.now方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000。
Date.now() // 1364026285194


Date.parse()
Date.parse方法用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数。

日期字符串应该符合 RFC 2822 和 ISO 8061 这两个标准，即YYYY-MM-DDTHH:mm:ss.sssZ格式，其中最后的Z表示时区。但是，其他格式也可以被解析，请看下面的例子。

Date.parse('Aug 9, 1995')
Date.parse('January 26, 2011 13:51:50')
Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
Date.parse('Mon, 25 Dec 1995 13:30:00 +0430')
Date.parse('2011-10-10')
Date.parse('2011-10-10T14:48:00')
上面的日期字符串都可以解析。

如果解析失败，返回NaN。

Date.parse('xxx') // NaN


Date.UTC()
Date.UTC方法接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。

// 格式
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// 用法
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567
该方法的参数用法与Date构造函数完全一致，比如月从0开始计算，日期从1开始计算。区别在于Date.UTC方法的参数，会被解释为 UTC 时间（世界标准时间），Date构造函数的参数会被解释为当前时区的时间。`,
        score: 5,
      },
      {
        question: `Date.prototype.valueOf()作用？`,
        answer: `valueOf方法返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于getTime方法。

var d = new Date();

d.valueOf() // 1362790014817
d.getTime() // 1362790014817
预期为数值的场合，Date实例会自动调用该方法，所以可以用下面的方法计算时间的间隔。

var start = new Date();
// ...
var end = new Date();
var elapsed = end - start;`,
        score: 1,
      },
      {
        question: `getTime()：
getDate()：
getDay()：
getFullYear()：
getMonth()：
getHours()：
getMilliseconds()：
getMinutes()：
getSeconds()：
getTimezoneOffset()：`,
        answer: `getTime()：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
getDate()：返回实例对象对应每个月的几号（从1开始）。
getDay()：返回星期几，星期日为0，星期一为1，以此类推。
getFullYear()：返回四位的年份。
getMonth()：返回月份（0表示1月，11表示12月）。
getHours()：返回小时（0-23）。
getMilliseconds()：返回毫秒（0-999）。
getMinutes()：返回分钟（0-59）。
getSeconds()：返回秒（0-59）。
getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。

所有这些get*方法返回的都是整数，不同方法返回值的范围不一样。

分钟和秒：0 到 59
小时：0 到 23
星期：0（星期天）到 6（星期六）
日期：1 到 31
月份：0（一月）到 11（十二月）`,
        score: 4,
      },
      {
        question: `使用set类的日期函数设置时间时，如果setDate()的天数超过当月天数，会发生什么？`,
        answer: `set*方法的参数都会自动折算。以setDate()为例，如果参数超过当月的最大天数，则向下一个月顺延，如果参数是负数，表示从上个月的最后一天开始减去的天数。

var d1 = new Date('January 6, 2013');

d1.setDate(32) // 1359648000000
d1 // Fri Feb 01 2013 00:00:00 GMT+0800 (CST)

var d2 = new Date ('January 6, 2013');

d2.setDate(-1) // 1356796800000
d2 // Sun Dec 30 2012 00:00:00 GMT+0800 (CST)`,
        score: 1,
      },
      {
        question: `设置1000天后的日期，设置6个月后的日期，分别要怎么设置？`,
        answer: `var d = new Date();

// 将日期向后推1000天
d.setDate(d.getDate() + 1000);
// 将时间设为6小时后
d.setHours(d.getHours() + 6);`,
        score: 3,
      },
      {
        question: `什么叫JSON？`,
        answer: `JSON 格式（JavaScript Object Notation 的缩写）是一种用于数据交换的文本格式，2001年由 Douglas Crockford 提出，目的是取代繁琐笨重的 XML 格式。

相比 XML 格式，JSON 格式有两个显著的优点：书写简单，一目了然；符合 JavaScript 原生语法，可以由解释引擎直接处理，不用另外添加解析代码。所以，JSON 迅速被接受，已经成为各大网站交换数据的标准格式，并被写入标准。

每个 JSON 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。总之，只能是一个值，不能是两个或更多的值。

JSON 对值的类型和格式有严格的规定。

复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。

原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和null（不能使用NaN, Infinity, -Infinity和undefined）。

字符串必须使用双引号表示，不能使用单引号。

对象的键名必须放在双引号里面。

数组或对象最后一个成员的后面，不能加逗号。`,
        score: 1,
      },
      {
        question: `如果需要将一个值转换为JSON字符串，需要怎么做？`,
        answer: `JSON.stringify()方法用于将一个值转为 JSON 字符串。该字符串符合 JSON 格式，并且可以被JSON.parse()方法还原。
注意：JSON.stringify()方法会忽略对象的不可遍历的属性。`,
        score: 2,
      },
      {
        question: `toJSON() 方法作用？`,
        answer: `如果参数对象有自定义的toJSON()方法，那么JSON.stringify()会使用这个方法的返回值作为参数，而忽略原对象的其他属性。
        
现在，为这个对象加上toJSON()方法。

var user = {
  firstName: '三',
  lastName: '张',

  get fullName(){
    return this.lastName + this.firstName;
  },

  toJSON: function () {
    return {
      name: this.lastName + this.firstName
    };
  }
};

JSON.stringify(user)
// "{"name":"张三"}"
上面代码中，JSON.stringify()发现参数对象有toJSON()方法，就直接使用这个方法的返回值作为参数，而忽略原对象的其他参数。

Date对象就有一个自己的toJSON()方法。

var date = new Date('2015-01-01');
date.toJSON() // "2015-01-01T00:00:00.000Z"
JSON.stringify(date) // ""2015-01-01T00:00:00.000Z""
上面代码中，JSON.stringify()发现处理的是Date对象实例，就会调用这个实例对象的toJSON()方法，将该方法的返回值作为参数。

toJSON()方法的一个应用是，将正则对象自动转为字符串。因为JSON.stringify()默认不能转换正则对象，但是设置了toJSON()方法以后，就可以转换正则对象了。

var obj = {
  reg: /foo/
};

// 不设置 toJSON 方法时
JSON.stringify(obj) // "{"reg":{}}"

// 设置 toJSON 方法时
RegExp.prototype.toJSON = RegExp.prototype.toString;
JSON.stringify(/foo/) // ""/foo/""
上面代码在正则对象的原型上面部署了toJSON()方法，将其指向toString()方法，因此转换成 JSON 格式时，正则对象就先调用toJSON()方法转为字符串，然后再被JSON.stringify()方法处理。`,
        score: 2,
      },
      {
        question: `如果需要将 JSON 字符串转换成对应的值，需要怎么做？`,
        answer: `JSON.parse()`,
        score: 2,
      },
      {
        question: `用JSON提供的方法如何实现对象的深拷贝，这种深拷贝有什么限制条件？`,
        answer: `JSON.parse()和JSON.stringify()可以结合使用，像下面这样写，实现对象的深拷贝。

JSON.parse(JSON.stringify(obj))
上面这种写法，可以深度克隆一个对象。

这种方法的基本原理是将JavaScript对象转换为JSON字符串，然后再将该字符串解析回对象。这个过程可以避免引用问题，从而实现深拷贝。具体来说，通过JSON.stringify()将对象转换为JSON字符串，然后使用JSON.parse()将该字符串解析回对象，从而得到一个新的独立对象。这种方法对于大多数情况是有效的，因为它能够处理大多数数据类型，包括数组和对象。然而，这种方法也有其局限性，例如无法处理函数、undefined值以及循环引用的情况。此外，如果原对象包含特殊的数据类型或结构，如日期对象或正则表达式，这些数据在转换过程中可能会丢失‌。
尽管存在这些限制，JSON.parse(JSON.stringify(obj))仍然是一种简单且在某些情况下可行的深拷贝方法。对于需要快速实现深拷贝且对象结构相对简单的场景，这种方法是一个不错的选择。然而，对于更复杂的数据结构或需要处理特殊数据类型的场景，可能需要考虑使用其他深拷贝方法或库来实现更健壮的深拷贝功能‌。`,
        score: 6,
      },
    ],
  },
  {
    name: "js RegExp 对象",
    test: "js面向对象编程",
    visible: false,
    subject: [
      {
        question: `新建正则表达式有哪两种方法？`,
        answer: `一种是使用字面量，以斜杠表示开始和结束。

var regex = /xyz/;
另一种是使用RegExp构造函数。

var regex = new RegExp('xyz');
上面两种写法是等价的，都新建了一个内容为xyz的正则表达式对象。它们的主要区别是，第一种方法在引擎编译代码时，就会新建正则表达式，第二种方法在运行时新建正则表达式，所以前者的效率较高。而且，前者比较便利和直观，所以实际应用中，基本上都采用字面量定义正则表达式。`,
        score: 1,
      },
      {
        question: `正则表达式有哪些修饰符，作用是什么？`,
        answer: `RegExp.prototype.ignoreCase：返回一个布尔值，表示是否设置了i修饰符。（忽略大小写）
RegExp.prototype.global：返回一个布尔值，表示是否设置了g修饰符。（全局匹配）
RegExp.prototype.multiline：返回一个布尔值，表示是否设置了m修饰符。（多行匹配）
RegExp.prototype.flags：返回一个字符串，包含了已经设置的所有修饰符，按字母排序。
上面四个属性都是只读的。

var r = /abc/igm;

r.ignoreCase // true
r.global // true
r.multiline // true
r.flags // 'gim'`,
        score: 3,
      },
      {
        question: `正则表达式的lastIndex和source属性有什么用？`,
        answer: `RegExp.prototype.lastIndex：返回一个整数，表示下一次开始搜索的位置。该属性可读写，但是只在进行连续搜索时有意义。
RegExp.prototype.source：返回正则表达式的字符串形式（不包括反斜杠），该属性只读。`,
        score: 2,
      },
      {
        question: `RegExp.prototype.test()作用是什么？`,
        answer: `正则实例对象的test方法返回一个布尔值，表示当前模式是否能匹配参数字符串。

/cat/.test('cats and dogs') // true

如果正则表达式带有g修饰符，则每一次test方法都从上一次结束的位置开始向后匹配。

var r = /x/g;
var s = '_x_x';

r.lastIndex // 0
r.test(s) // true

r.lastIndex // 2
r.test(s) // true

r.lastIndex // 4
r.test(s) // false

上面代码指定从字符串的第五个位置开始搜索，这个位置为空，所以返回false。同时，lastIndex属性重置为0，所以第二次执行r.test(s)会返回true。
r.lastIndex // 0
r.test(s) // true`,
        score: 3,
      },
      {
        question: `var count = 0;
while (/a/g.test('babaa')) count++;
执行结果是什么？`,
        answer: `lastIndex属性只对同一个正则表达式有效，所以下面这样写是错误的。

var count = 0;
while (/a/g.test('babaa')) count++;
上面代码会导致无限循环，因为while循环的每次匹配条件都是一个新的正则表达式，导致lastIndex属性总是等于0。`,
        score: 3,
      },
      {
        question: `RegExp.prototype.exec()作用？`,
        answer: `lastIndex属性只对同一个正则表达式有效，所以下面这样写是错误的。

var count = 0;
while (/a/g.test('babaa')) count++;
上面代码会导致无限循环，因为while循环的每次匹配条件都是一个新的正则表达式，导致lastIndex属性总是等于0。

exec()方法的返回数组还包含以下两个属性：

input：整个原字符串。
index：模式匹配成功的开始位置（从0开始计数）。

var r = /a(b+)a/;
var arr = r.exec('_abbba_aba_');

arr // ["abbba", "bbb"]

arr.index // 1
arr.input // "_abbba_aba_"

上面代码的exec()方法，返回一个数组。第一个成员是整个匹配的结果(a(b+)a)，第二个成员是圆括号匹配的结果(b+)。
上面代码中的index属性等于1，是因为从原字符串的第二个位置开始匹配成功。`,
        score: 3,
      },
      {
        question: `var reg = /a/g;
var str = 'abc_abc_abc'

while(true) {
  var match = reg.exec(str);
  if (!match) break;
  console.log('#' + match.index + ':' + match[0]);
}
输出结果？`,
        answer: `// #0:a
// #4:a
// #8:a
上面代码中，只要exec()方法不返回null，就会一直循环下去，每次输出匹配的位置和匹配的文本。`,
        score: 5,
      },
      {
        question: `match和exec方法有什么不同？`,
        answer: `如果正则表达式带有g修饰符，则match方法与正则对象的exec方法行为不同，会一次性返回所有匹配成功的结果。

var s = 'abba';
var r = /a/g;

s.match(r) // ["a", "a"]
r.exec(s) // ["a"]

因此，设置正则表达式的lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始。

search、replace设置lastIndex也是无效的`,
        score: 3,
      },
      {
        question: `String.prototype.search()用法？`,
        answer: `字符串对象的search方法，返回第一个满足条件的匹配结果在整个字符串中的位置。如果没有任何匹配，则返回-1。

'_x_x'.search(/x/)
// 1
上面代码中，第一个匹配结果出现在字符串的1号位置。`,
        score: 3,
      },
      {
        question: `String.prototype.replace()用法？`,
        answer: `字符串对象的replace方法可以替换匹配的值。它接受两个参数，第一个是正则表达式，表示搜索模式，第二个是替换的内容。

str.replace(search, replacement)
正则表达式如果不加g修饰符，就替换第一个匹配成功的值，否则替换所有匹配成功的值。

'aaa'.replace('a', 'b') // "baa"
'aaa'.replace(/a/, 'b') // "baa"
'aaa'.replace(/a/g, 'b') // "bbb"
上面代码中，最后一个正则表达式使用了g修饰符，导致所有的a都被替换掉了。

replace方法的一个应用，就是消除字符串首尾两端的空格。

var str = '  #id div.class  ';

str.replace(/^\\s+|\\s+$/g, '')
// "#id div.class"
replace方法的第二个参数可以使用美元符号$，用来指代所替换的内容。

$&：匹配的子字符串。
$\`\`：匹配结果前面的文本。
$'：匹配结果后面的文本。
$n：匹配成功的第n组内容，n是从1开始的自然数。
$$：指代美元符号$。
'hello world'.replace(/(\\w+)\\s(\\w+)/, '$2 $1')
// "world hello"

'abc'.replace('b', '[$\`-$&-$\\']')
// "a[a-b-c]c"
上面代码中，第一个例子是将匹配的组互换位置，第二个例子是改写匹配的值。`,
        score: 5,
      },
      {
        question: `String.prototype.replace()如果用上回调函数，改变字符串（3 and 5）中的数字，可以怎么做？`,
        answer: `replace方法的第二个参数还可以是一个函数，将每一个匹配内容替换为函数返回值。

'3 and 5'.replace(/[0-9]+/g, function (match) {
  return 2 * match;
})
// "6 and 10"`,
        score: 3,
      },
      {
        question: `'a,  b,c, d' 按逗号分隔，并去除多余的空格，可以怎么做？`,
        answer: `// 正则分隔，去除多余的空格
'a,  b,c, d'.split(/, */)
// [ 'a', 'b', 'c', 'd' ]`,
        score: 2,
      },
      {
        question: `正则匹配中，点字符匹配什么？`,
        answer: `点字符（.）匹配除回车（\\r）、换行(\\n) 、行分隔符（\\u2028）和段分隔符（\\u2029）以外的所有字符。注意，对于码点大于0xFFFF字符，点字符不能正确匹配，会认为这是两个字符。`,
        score: 2,
      },
      {
        question: `正则匹配中，位字符^ $匹配什么？`,
        answer: `位置字符用来提示字符所处的位置，主要有两个字符。

^ 表示字符串的开始位置
$ 表示字符串的结束位置
// test必须出现在开始位置
/^test/.test('test123') // true

// test必须出现在结束位置
/test$/.test('new test') // true

// 从开始位置到结束位置只有test
/^test$/.test('test') // true
/^test$/.test('test test') // false`,
        score: 2,
      },
      {
        question: `正则匹配中，竖线符号（|）在正则表达式中表示什么？`,
        answer: `竖线符号（|）在正则表达式中表示“或关系”（OR），即cat|dog表示匹配cat或dog。

/11|22/.test('911') // true
上面代码中，正则表达式指定必须匹配11或22。`,
        score: 2,
      },
      {
        question: `正则表达式中，需要反斜杠转义的有哪些，在RegExp中反斜杠需要怎么写？`,
        answer: `需要反斜杠转义的，一共有12个字符：^、.、[、$、(、)、|、*、+、?、{和\\。需要特别注意的是，如果使用RegExp方法生成正则对象，转义需要使用两个斜杠，因为字符串内部会先转义一次。

(new RegExp('1\\+1')).test('1+1')
// false

(new RegExp('1\\\\+1')).test('1+1')
// true`,
        score: 4,
      },
      {
        question: `正则表达式对一些不能打印的特殊字符，提供了表达方法，都有什么用？

        \\cX 
        [\\b] 
        \\n 
        \\r 
        \\t 
        \\v 
        \\f 
        \\0 
        \\xhh 
        \\uhhhh `,
        answer: `正则表达式对一些不能打印的特殊字符，提供了表达方法。

\\cX 表示Ctrl-[X]，其中的X是A-Z之中任一个英文字母，用来匹配控制字符。
[\\b] 匹配退格键(U+0008)，不要与\\b混淆。
\\n 匹配换行键。
\\r 匹配回车键。
\\t 匹配制表符 tab（U+0009）。
\\v 匹配垂直制表符（U+000B）。
\\f 匹配换页符（U+000C）。
\\0 匹配null字符（U+0000）。
\\xhh 匹配一个以两位十六进制数（\\x00-\\xFF）表示的字符。
\\uhhhh 匹配一个以四位十六进制数（\\u0000-\\uFFFF）表示的 Unicode 字符。`,
        score: 4,
      },
      {
        question: `所有可供选择的字符都放在方括号内，比如[xyz] 表示什么？`,
        answer: `[xyz] 表示x、y、z之中任选一个匹配。

/[abc]/.test('hello world') // false
/[abc]/.test('apple') // true
上面代码中，字符串hello world不包含a、b、c这三个字母中的任一个，所以返回false；字符串apple包含字母a，所以返回true。`,
        score: 2,
      },
      {
        question: `方括号内写 ^ 或者 - 分别有什么用？`,
        answer: `（1）脱字符（^）

如果方括号内的第一个字符是[^]，则表示除了字符类之中的字符，其他字符都可以匹配。比如，[^xyz]表示除了x、y、z之外都可以匹配。

/[^abc]/.test('bbc news') // true
/[^abc]/.test('bbc') // false
上面代码中，字符串bbc news包含a、b、c以外的其他字符，所以返回true；字符串bbc不包含a、b、c以外的其他字符，所以返回false。

如果方括号内没有其他字符，即只有[^]，就表示匹配一切字符，其中包括换行符。相比之下，点号作为元字符（.）是不包括换行符的。

var s = 'Please yes\\nmake my day!';

s.match(/yes.*day/) // null
s.match(/yes[^]*day/) // [ 'yes\\nmake my day']
上面代码中，字符串s含有一个换行符，点号不包括换行符，所以第一个正则表达式匹配失败；第二个正则表达式[^]包含一切字符，所以匹配成功。

注意，脱字符只有在字符类的第一个位置才有特殊含义，否则就是字面含义。

（2）连字符（-）

某些情况下，对于连续序列的字符，连字符（-）用来提供简写形式，表示字符的连续范围。比如，[abc]可以写成[a-c]，[0123456789]可以写成[0-9]，同理[A-Z]表示26个大写字母。

/a-z/.test('b') // false
/[a-z]/.test('b') // true
上面代码中，当连字号（dash）不出现在方括号之中，就不具备简写的作用，只代表字面的含义，所以不匹配字符b。只有当连字号用在方括号之中，才表示连续的字符序列。

以下都是合法的字符类简写形式。

[0-9.,]
[0-9a-fA-F]
[a-zA-Z0-9-]
[1-31]
上面代码中最后一个字符类[1-31]，不代表1到31，只代表1到3。

连字符还可以用来指定 Unicode 字符的范围。

var str = "\\u0130\\u0131\\u0132";
/[\\u0128-\\uFFFF]/.test(str)
// true
上面代码中，\\u0128-\\uFFFF表示匹配码点在0128到FFFF之间的所有字符。

另外，不要过分使用连字符，设定一个很大的范围，否则很可能选中意料之外的字符。最典型的例子就是[A-z]，表面上它是选中从大写的A到小写的z之间52个字母，但是由于在 ASCII 编码之中，大写字母与小写字母之间还有其他字符，结果就会出现意料之外的结果。

/[A-z]/.test('\\\\') // true
上面代码中，由于反斜杠（'\\'）的ASCII码在大写字母与小写字母之间，结果会被选中。`,
        score: 3,
      },
      {
        question: `预定义模式指的是某些常见模式的简写方式。这些代表什么？

\\d 
\\D 
\\w 
\\W 
\\s 
\\S 
\\b 
\\B `,
        answer: `\\d 匹配0-9之间的任一数字，相当于[0-9]。
\\D 匹配所有0-9以外的字符，相当于[^0-9]。
\\w 匹配任意的字母、数字和下划线，相当于[A-Za-z0-9_]。
\\W 除所有字母、数字和下划线以外的字符，相当于[^A-Za-z0-9_]。
\\s 匹配空格（包括换行符、制表符、空格符等），相等于[ \\t\\r\\n\\v\\f]。
\\S 匹配非空格的字符，相当于[^ \\t\\r\\n\\v\\f]。
\\b 匹配词的边界。
\\B 匹配非词边界，即在词的内部。


// \\b 的例子
/\\bworld/.test('hello world') // true
/\\bworld/.test('hello-world') // true
/\\bworld/.test('helloworld') // false

// \\B 的例子
/\\Bworld/.test('hello-world') // false
/\\Bworld/.test('helloworld') // true

\\b表示词的边界，所以world的词首必须独立（词尾是否独立未指定），才会匹配。同理，\\B表示非词的边界，只有world的词首不独立，才会匹配。`,
        score: 4,
      },
      {
        question: `重复类怎么表示？`,
        answer: `模式的精确匹配次数，使用大括号（{}）表示。{n}表示恰好重复n次，{n,}表示至少重复n次，{n,m}表示重复不少于n次，不多于m次。

/lo{2}k/.test('look') // true
/lo{2,5}k/.test('looook') // true
上面代码中，第一个模式指定o连续出现2次，第二个模式指定o连续出现2次到5次之间。`,
        score: 2,
      },
      {
        question: `量词符 * + ? 有什么作用？`,
        answer: `? 问号表示某个模式出现0次或1次，等同于{0, 1}。
* 星号表示某个模式出现0次或多次，等同于{0,}。
+ 加号表示某个模式出现1次或多次，等同于{1,}。`,
        score: 2,
      },
      {
        question: `这些量词符的作用？
+?：
*?：
??：`,
        answer: `+?：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
*?：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
??：表格某个模式出现0次或1次，匹配时采用非贪婪模式。`,
        score: 2,
      },
    ],
  },
  {
    name: "js 异步操作基础",
    test: "js异步操作",
    visible: false,
    subject: [
      {
        question: `js内部实现机制是什么，可以说一说吗？`,
        answer: `是事件循环机制。
        
单线程模型指的是，JavaScript 只在一个线程上运行。也就是说，JavaScript 同时只能执行一个任务，其他任务都必须在后面排队等待。
注意，JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。
JavaScript 之所以采用单线程，而不是多线程，跟历史有关系。JavaScript 从诞生起就是单线程，原因是不想让浏览器变得太复杂，因为多线程需要共享资源、且有可能修改彼此的运行结果，对于一种网页脚本语言来说，这就太复杂了。如果 JavaScript 同时有两个线程，一个线程在网页 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？是不是还要有锁机制？所以，为了避免复杂性，JavaScript 一开始就是单线程，这已经成了这门语言的核心特征，将来也不会改变。
这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段 JavaScript 代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。JavaScript 语言本身并不慢，慢的是读写外部数据，比如等待 Ajax 请求返回结果。这个时候，如果对方服务器迟迟没有响应，或者网络不通畅，就会导致脚本的长时间停滞。
如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 IO 操作（输入输出）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。JavaScript 语言的设计者意识到，这时 CPU 完全可以不管 IO 操作，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 操作返回了结果，再回过头，把挂起的任务继续执行下去。这种机制就是 JavaScript 内部采用的“事件循环”机制（Event Loop）。
单线程模型虽然对 JavaScript 构成了很大的限制，但也因此使它具备了其他语言不具备的优势。如果用得好，JavaScript 程序是不会出现堵塞的，这就是 Node.js 可以用很少的资源，应付大流量访问的原因。
为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。`,
        score: 4,
      },
      {
        question: `程序中的同步任务和异步任务分别是什么？`,
        answer: `程序里面所有的任务，可以分成两类：同步任务（synchronous）和异步任务（asynchronous）。

同步任务是那些没有被引擎挂起、在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。
异步任务是那些被引擎放在一边，不进入主线程、而进入任务队列的任务。异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生（如鼠标事件）。只有引擎认为某个异步任务可以执行了（比如 Ajax 操作从服务器得到了结果），该任务（采用回调函数的形式）才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行，也就是说，异步任务不具有“堵塞”效应。
举例来说，Ajax 操作可以当作同步任务处理，也可以当作异步任务处理，由开发者决定。如果是同步任务，主线程就等着 Ajax 操作返回结果，再往下执行；如果是异步任务，主线程在发出 Ajax 请求以后，就直接往下执行，等到 Ajax 操作有了结果，主线程再执行对应的回调函数。`,
        score: 4,
      },
      {
        question: `同步任务和异步任务是怎么执行的？`,
        answer: `首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。
任务队列（task queue），里面是各种需要当前程序处理的异步任务。`,
        score: 4,
      },
      {
        question: `回调函数的优缺点？`,
        answer: `回调函数的优点主要包括提高代码的复用性和灵活性、解耦合、以及可以异步执行。

提高代码的复用性和灵活性：回调函数允许将一个函数作为参数传递给另一个函数，从而实现模块化编程。这种方式可以提高代码的复用性和灵活性，因为相同的代码可以在不同的上下文中以不同的方式被多次调用，通过更改回调函数的实现来实现不同的功能，而不需要更改调用它的函数。
解耦合：回调函数可以将不同模块之间的关系解耦，使得代码更易于维护和扩展。通过将特定的事件或条件响应的逻辑封装在回调函数中，可以减少模块之间的直接依赖，提高代码的可维护性和可扩展性。
可以异步执行：回调函数可以在异步操作完成后被执行，避免了阻塞线程，从而提高应用程序的效率。这种特性在处理耗时操作时尤其有用，如网络请求或文件读写，可以通过回调函数实现异步操作，而不必等待操作完成。

回调函数的缺点主要包括代码复杂性增加、可读性差、以及可能造成竞态条件。

代码复杂性增加：使用回调函数时，需要维护多个函数之间的关系，逻辑变得复杂。如果回调函数嵌套层数过多，代码会变得非常复杂，难以维护。
可读性差：回调函数将逻辑分散在多个函数中，使得代码的可读性变差。特别是当回调函数的实现与调用代码相隔较远时，很难理解代码的整体逻辑。
可能造成竞态条件：如果回调函数中有共享资源访问，容易出现竞态条件，导致程序出错。这是因为多个回调函数可能同时访问和修改共享资源，如果没有适当的同步机制，就可能导致数据不一致或程序错误。

综上所述，回调函数虽然提供了灵活性和异步执行的能力，但也带来了代码复杂性和可读性的挑战，以及可能引入竞态条件的风险。`,
        score: 3,
      },
      {
        question: `异步函数串行与并行执行的优缺点？`,
        answer: `一个任务完成以后，再执行另一个。这就叫串行执行。
流程控制函数也可以是并行执行，即所有异步任务同时执行，等到全部完成以后，才执行final函数。
并行执行的效率较高，比起串行执行一次只能执行一个任务，较为节约时间。但是问题在于如果并行的任务较多，很容易耗尽系统资源，拖慢运行速度。因此有了第三种流程控制方式。并行与串行的结合。也就是限制并行数，达到效率最高化`,
        score: 2,
      },
      {
        question: `setTimeout和setInterval函数，都返回什么？`,
        answer: `返回一个整数值，表示计数器编号。将该整数传入clearTimeout和clearInterval函数，就可以取消对应的定时器。
        
function f() {}
console.log(setTimeout(f, 1000)) // 1
console.log(setTimeout(f, 1000)) // 2`,
        score: 1,
      },
      {
        question: `Promise 对象作用？`,
        answer: `Promise 对象是 JavaScript 的异步操作解决方案，为异步操作提供统一接口。它起到代理作用（proxy），充当异步操作与回调函数之间的中介，使得异步操作具备同步操作的接口。Promise 可以让异步操作写起来，就像在写同步操作的流程，而不必一层层地嵌套回调函数。
Promise 的设计思想是，所有异步任务都返回一个 Promise 实例。Promise 实例有一个then方法，用来指定下一步的回调函数。
总的来说，传统的回调函数写法使得代码混成一团，变得横向发展而不是向下发展。Promise 就是解决这个问题，使得异步流程可以写成同步流程。
Promise 原本只是社区提出的一个构想，一些函数库率先实现了这个功能。ECMAScript 6 将其写入语言标准，目前 JavaScript 原生支持 Promise 对象。`,
        score: 3,
      },
      {
        question: `Promise 有哪些状态？`,
        answer: `Promise 对象通过自身的状态，来控制异步操作。Promise 实例具有三种状态。

异步操作未完成（pending）
异步操作成功（fulfilled）
异步操作失败（rejected）
上面三种状态里面，fulfilled和rejected合在一起称为resolved（已定型）。

这三种的状态的变化途径只有两种。

从“未完成”到“成功”
从“未完成”到“失败”
一旦状态发生变化，就凝固了，不会再有新的状态变化。这也是 Promise 这个名字的由来，它的英语意思是“承诺”，一旦承诺成效，就不得再改变了。这也意味着，Promise 实例的状态变化只可能发生一次。

因此，Promise 的最终结果只有两种。

异步操作成功，Promise 实例传回一个值（value），状态变为fulfilled。
异步操作失败，Promise 实例抛出一个错误（error），状态变为rejected。`,
        score: 3,
      },
      {
        question: `如果我想让Promise在执行过程中判定成功或者失败，需要怎么做？`,
        answer: `JavaScript 提供原生的Promise构造函数，用来生成 Promise 实例。

var promise = new Promise(function (resolve, reject) {
  // ...

  if (/* 异步操作成功 */){
    resolve(value);
  } else { /* 异步操作失败 */
    reject(new Error());
  }
});
上面代码中，Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己实现。

resolve函数的作用是，将Promise实例的状态从“未完成”变为“成功”（即从pending变为fulfilled），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。reject函数的作用是，将Promise实例的状态从“未完成”变为“失败”（即从pending变为rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。`,
        score: 3,
      },
      {
        question: `Promise优缺点？`,
        answer: `Promise 的优点在于，让回调函数变成了规范的链式写法，程序流程可以看得很清楚。它有一整套接口，可以实现许多强大的功能，比如同时执行多个异步操作，等到它们的状态都改变以后，再执行一个回调函数；再比如，为多个回调函数中抛出的错误，统一指定处理方法等等。
而且，Promise 还有一个传统写法没有的好处：它的状态一旦改变，无论何时查询，都能得到这个状态。这意味着，无论何时为 Promise 实例添加回调函数，该函数都能正确执行。所以，你不用担心是否错过了某个事件或信号。如果是传统写法，通过监听事件来执行回调函数，一旦错过了事件，再添加回调函数是不会执行的。
Promise 的缺点是，编写的难度比传统写法高，而且阅读代码也不是一眼可以看懂。你只会看到一堆then，必须自己在then的回调函数里面理清逻辑。`,
        score: 1,
      },
      {
        question: `setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  console.log(4);
  resolve(2);
}).then(console.log);

console.log(3);`,
        answer: `Promise 的回调函数不是正常的异步任务，而是微任务（microtask）。它们的区别在于，正常任务追加到下一轮事件循环，微任务追加到本轮事件循环。这意味着，微任务的执行时间一定早于正常任务。
请注意，promise.then才算一个微任务，promise回调函数里面的不算！！！


setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  console.log(4);
  resolve(2);
}).then(console.log);

console.log(3);
// 4
// 3
// 2
// 1`,
        score: 1,
      },
    ],
  },
  {
    name: "js DOM基础",
    test: "js DOM操作，因为vue是mvvm模型，所以这里不会多讲",
    visible: false,
    subject: [
      {
        question: `什么是DOM？`,
        answer: `DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。
浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。
DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。`,
        score: 4,
      },
      {
        question: `DOM的最小组成单位是？`,
        answer: `DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。

节点的类型有七种。

Document：整个文档树的顶层节点
DocumentType：doctype标签（比如<!DOCTYPE html>）
Element：网页的各种HTML标签（比如<body>、<a>等）
Attr：网页元素的属性（比如class="right"）
Text：标签之间或标签包含的文本
Comment：注释
DocumentFragment：文档的片段
浏览器提供一个原生的节点对象Node，上面这七种节点都继承了Node，因此具有一些共同的属性和方法。`,
        score: 2,
      },
      {
        question: `什么是节点树？`,
        answer: `一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，又像一棵树。

浏览器原生提供document节点，代表整个文档。

document
// 整个文档树
文档的第一层有两个节点，第一个是文档类型节点（<!doctype html>），第二个是 HTML 网页的顶层容器标签<html>。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。

除了根节点，其他节点都有三种层级关系。

父节点关系（parentNode）：直接的那个上级节点
子节点关系（childNodes）：直接的下级节点
同级节点关系（sibling）：拥有同一个父节点的节点
DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括firstChild（第一个子节点）和lastChild（最后一个子节点）等属性，同级节点接口包括nextSibling（紧邻在后的那个同级节点）和previousSibling（紧邻在前的那个同级节点）属性。`,
        score: 2,
      },
      {
        question: `NodeList是什么？`,
        answer: `NodeList实例是一个类似数组的对象，它的成员是节点对象。
通过以下方法可以得到NodeList实例。

Node.childNodes
document.querySelectorAll()等节点搜索方法
document.body.childNodes instanceof NodeList // true`,
        score: 1,
      },
      {
        question: `HTMLCollection是什么？`,
        answer: `HTMLCollection是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与NodeList接口不同，HTMLCollection没有forEach方法，只能使用for循环遍历。

返回HTMLCollection实例的，主要是一些Document对象的集合属性，比如document.links、document.forms、document.images等。

document.links instanceof HTMLCollection // true`,
        score: 1,
      },
      {
        question: `简单说下document节点对象？`,
        answer: `document节点对象代表整个文档，每张网页都有自己的document对象。window.document属性就指向这个对象。只要浏览器开始载入 HTML 文档，该对象就存在了，可以直接使用。

document对象有不同的办法可以获取。

正常的网页，直接使用document或window.document。
iframe框架里面的网页，使用iframe节点的contentDocument属性。
Ajax 操作返回的文档，使用XMLHttpRequest对象的responseXML属性。
内部节点的ownerDocument属性。
document对象继承了EventTarget接口和Node接口，并且混入（mixin）了ParentNode接口。这意味着，这些接口的方法都可以在document对象上调用。除此之外，document对象还有很多自己的属性和方法。`,
        score: 2,
      },
      {
        question: `简单说下Element节点对象？`,
        answer: `Element节点对象对应网页的 HTML 元素。每一个 HTML 元素，在 DOM 树上都会转化成一个Element节点对象（以下简称元素节点）。

元素节点的nodeType属性都是1。

var p = document.querySelector('p');
p.nodeName // "P"
p.nodeType // 1
Element对象继承了Node接口，因此Node的属性和方法在Element对象都存在。

此外，不同的 HTML 元素对应的元素节点是不一样的，浏览器使用不同的构造函数，生成不同的元素节点，比如<a>元素的构造函数是HTMLAnchorElement()，<button>是HTMLButtonElement()。因此，元素节点不是一种对象，而是许多种对象，这些对象除了继承Element对象的属性和方法，还有各自独有的属性和方法。`,
        score: 2,
      },
    ],
  },
  {
    name: "js EventTarget",
    test: "js 事件介绍",
    visible: false,
    subject: [
      {
        question: `什么是EventTarget？`,
        answer: `DOM 节点的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。

该接口主要提供三个实例方法。

addEventListener()：绑定事件的监听函数
removeEventListener()：移除事件的监听函数
dispatchEvent()：触发事件

dispatch 派遣`,
        score: 4,
      },
      {
        question: `addEventListener有什么用，分别有哪些参数？`,
        answer: `EventTarget.addEventListener()用于在当前节点或对象上（即部署了 EventTarget 接口的对象），定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值。

target.addEventListener(type, listener[, useCapture]);
该方法接受三个参数。

type：事件名称，大小写敏感。
listener：监听函数。事件发生时，会调用该监听函数。
useCapture：布尔值，如果设为true，表示监听函数将在捕获阶段（capture）触发（参见后文《事件的传播》部分）。该参数可选，默认值为false（监听函数只在冒泡阶段被触发）。
下面是一个例子。

function hello() {
  console.log('Hello world');
}

var button = document.getElementById('btn');
button.addEventListener('click', hello, false);
上面代码中，button节点的addEventListener()方法绑定click事件的监听函数hello()，该函数只在冒泡阶段触发。

关于参数，有两个地方需要注意。

首先，第二个参数除了监听函数，还可以是一个具有handleEvent方法的对象，效果与监听函数一样。

buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    console.log('click');
  }
});
上面代码中，addEventListener()方法的第二个参数，就是一个具有handleEvent()方法的对象。

其次，第三个参数除了布尔值useCapture，还可以是一个监听器配置对象，定制事件监听行为。该对象有以下属性。

capture：布尔值，如果设为true，表示监听函数在捕获阶段触发，默认为false，在冒泡阶段触发。
once：布尔值，如果设为true，表示监听函数执行一次就会自动移除，后面将不再监听该事件。该属性默认值为false。
passive：布尔值，设为true时，表示禁止监听函数调用preventDefault()方法。如果调用了，浏览器将忽略这个要求，并在控制台输出一条警告。该属性默认值为false。
signal：该属性的值为一个 AbortSignal 对象，为监听器设置了一个信号通道，用来在需要时发出信号，移除监听函数。
下面是once属性的例子，让监听函数只执行一次。

element.addEventListener('click', function (event) {
  // 只执行一次的代码
}, {once: true});
addEventListener()方法可以为针对当前对象的同一个事件，添加多个不同的监听函数。这些函数按照添加顺序触发，即先添加先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用removeEventListener()方法手动去除）。

function hello() {
  console.log('Hello world');
}

document.addEventListener('click', hello, false);
document.addEventListener('click', hello, false);
执行上面代码，点击文档只会输出一行Hello world。

如果希望向监听函数传递参数，可以用匿名函数包装一下监听函数。

function print(x) {
  console.log(x);
}

var el = document.getElementById('div1');
el.addEventListener('click', function () { print('Hello'); }, false);
上面代码通过匿名函数，向监听函数print传递了一个参数。

监听函数内部的this，指向当前事件所在的那个对象。

// HTML 代码如下
// <p id="para">Hello</p>
var para = document.getElementById('para');
para.addEventListener('click', function (e) {
  console.log(this.nodeName); // "P"
}, false);
上面代码中，监听函数内部的this指向事件所在的对象para。`,
        score: 4,
      },
      {
        question: `使用removeEventListener有什么要求？`,
        answer: `removeEventListener()方法移除的监听函数，必须是addEventListener()方法添加的那个监听函数，而且必须在同一个元素节点，否则无效。

div.addEventListener('click', function (e) {}, false);
div.removeEventListener('click', function (e) {}, false);
上面代码中，removeEventListener()方法无效，因为监听函数不是同一个匿名函数。

element.addEventListener('mousedown', handleMouseDown, true);
element.removeEventListener("mousedown", handleMouseDown, false);
上面代码中，removeEventListener()方法也是无效的，因为第三个参数不一样。`,
        score: 2,
      },
      {
        question: `dispatchEvent作用？`,
        answer: `dispatchEvent() 是 JavaScript 中的一个方法，用于触发特定类型的事件，以便事件能够在指定的元素上进行处理。通过 dispatchEvent() 方法，我们可以模拟用户的交互操作或者手动触发事件，从而触发事件监听器的执行。

// 获取一个元素
var element = document.getElementById('myElement');

// 为元素添加事件监听器
element.addEventListener('myEvent', function(e) {
  console.log('自定义事件：' + e.type + ' 被触发了！');
});

// 创建一个自定义事件 当然也可以写click之类的系统事件
var myEvent = new Event('myEvent');

// 使用dispatchEvent触发自定义事件
element.dispatchEvent(myEvent);`,
        score: 5,
        img: "d3a03502d11b41068ba310738f089f7bccc.png",
      },
      {
        question: `相较于传统的方法，eventtarget方法有什么优点？`,
        answer: `第一种“HTML 的 on- 属性”，违反了 HTML 与 JavaScript 代码相分离的原则，将两者写在一起，不利于代码分工，因此不推荐使用。

第二种“元素节点的事件属性”的缺点在于，同一个事件只能定义一个监听函数，也就是说，如果定义两次onclick属性，后一次定义会覆盖前一次。因此，也不推荐使用。

第三种EventTarget.addEventListener是推荐的指定监听函数的方法。它有如下优点：

同一个事件可以添加多个监听函数。
能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。
除了 DOM 节点，其他对象（比如window、XMLHttpRequest等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口。`,
        score: 5,
      },
      {
        question: `eventtarget方法this指向哪里？`,
        answer: `监听函数内部的this指向触发事件的那个元素节点。

btn.addEventListener(
  'click',
  function (e) {
    console.log(this.id);
  },
  false
);
上面两种写法，点击按钮以后也是输出btn。`,
        score: 2,
      },
      {
        question: `eventtarget方法this指向哪里？`,
        answer: `监听函数内部的this指向触发事件的那个元素节点。

btn.addEventListener(
  'click',
  function (e) {
    console.log(this.id);
  },
  false
);
上面两种写法，点击按钮以后也是输出btn。`,
        score: 2,
      },
      {
        question: `事件发生后，是怎么执行的？`,
        answer: `一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。

第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。
这种三阶段的传播模型，使得同一个事件会在多个节点上触发。

===================================
<div>
  <p>点击</p>
</div>
上面代码中，<div>节点之中有一个<p>节点。

如果对这两个节点，都设置click事件的监听函数（每个节点的捕获阶段和冒泡阶段，各设置一个监听函数），共计设置四个监听函数。然后，对<p>点击，click事件会触发四次。

var phases = {
  1: 'capture',
  2: 'target',
  3: 'bubble'
};

var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', callback, true);
p.addEventListener('click', callback, true);
div.addEventListener('click', callback, false);
p.addEventListener('click', callback, false);

function callback(event) {
  var tag = event.currentTarget.tagName;
  var phase = phases[event.eventPhase];
  console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
}

// 点击以后的结果
// Tag: 'DIV'. EventPhase: 'capture'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'DIV'. EventPhase: 'bubble'
上面代码表示，click事件被触发了四次：<div>节点的捕获阶段和冒泡阶段各1次，<p>节点的目标阶段触发了2次。

捕获阶段：事件从<div>向<p>传播时，触发<div>的click事件；
目标阶段：事件从<div>到达<p>时，触发<p>的click事件；
冒泡阶段：事件从<p>传回<div>时，再次触发<div>的click事件。
其中，<p>节点有两个监听函数（addEventListener方法第三个参数的不同，会导致绑定两个监听函数），因此它们都会因为click事件触发一次。所以，<p>会在target阶段有两次输出。

注意，浏览器总是假定click事件的目标节点，就是点击位置嵌套最深的那个节点（本例是<div>节点里面的<p>节点）。所以，<p>节点的捕获阶段和冒泡阶段，都会显示为target阶段。

事件传播的最上层对象是window，接着依次是document，html（document.documentElement）和body（document.body）。也就是说，上例的事件传播顺序，在捕获阶段依次为window、document、html、body、div、p，在冒泡阶段依次为p、div、body、html、document、window。`,
        score: 2,
      },
      {
        question: `什么叫事件的代理？`,
        answer: `由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。
        
var ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // some code
  }
});
上面代码中，click事件的监听函数定义在<ul>节点，但是实际上，它处理的是子节点<li>的click事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而不用在每个<li>节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。`,
        score: 2,
      },
      {
        question: `如何禁止事件的捕获和冒泡？`,
        answer: `由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。
        
var ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // some code
  }
});
上面代码中，click事件的监听函数定义在<ul>节点，但是实际上，它处理的是子节点<li>的click事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而不用在每个<li>节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。

如果希望事件到某个节点为止，不再传播，可以使用事件对象的stopPropagation方法。

// 事件传播到 p 元素后，就不再向下传播了
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, true);

// 事件冒泡到 p 元素后，就不再向上冒泡了
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, false);
上面代码中，stopPropagation方法分别在捕获阶段和冒泡阶段，阻止了事件的传播。

但是，stopPropagation方法只会阻止事件的传播，不会阻止该事件触发<p>节点的其他click事件的监听函数。也就是说，不是彻底取消click事件。

p.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 会触发
  console.log(2);
});
上面代码中，p元素绑定了两个click事件的监听函数。stopPropagation方法只能阻止这个事件的传播，不能取消这个事件，因此，第二个监听函数会触发。输出结果会先是1，然后是2。

如果想要彻底取消该事件，不再触发后面所有click的监听函数，可以使用stopImmediatePropagation方法。

p.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 不会被触发
  console.log(2);
});
上面代码中，stopImmediatePropagation方法可以彻底取消这个事件，使得后面绑定的所有click监听函数都不再触发。所以，只会输出1，不会输出2。`,
        score: 2,
        img: "d3a03502d11b41068ba310738f089f7b.png",
      },
      {
        question: `Event对象有什么特点，有什么参数？`,
        answer: `Event对象本身就是一个构造函数，可以用来生成新的实例。

event = new Event(type, options);
Event构造函数接受两个参数。第一个参数type是字符串，表示事件的名称；第二个参数options是一个对象，表示事件对象的配置。该对象主要有下面两个属性。

bubbles：布尔值，可选，默认为false，表示事件对象是否冒泡。
cancelable：布尔值，可选，默认为false，表示事件是否可以被取消，即能否用Event.preventDefault()取消这个事件。一旦事件被取消，就好像从来没有发生过，不会触发浏览器对该事件的默认行为。
var ev = new Event(
  'look',
  {
    'bubbles': true,
    'cancelable': false
  }
);
document.dispatchEvent(ev);
上面代码新建一个look事件实例，然后使用dispatchEvent方法触发该事件。

注意，如果不是显式指定bubbles属性为true，生成的事件就只能在“捕获阶段”触发监听函数。

// HTML 代码为
// <div><p>Hello</p></div>
var div = document.querySelector('div');
var p = document.querySelector('p');

function callback(event) {
  var tag = event.currentTarget.tagName;
  console.log('Tag: ' + tag); // 没有任何输出
}

div.addEventListener('click', callback, false);

var click = new Event('click');
p.dispatchEvent(click);
上面代码中，p元素发出一个click事件，该事件默认不会冒泡。div.addEventListener方法指定在冒泡阶段监听，因此监听函数不会触发。如果写成div.addEventListener('click', callback, true)，那么在“捕获阶段”可以监听到这个事件。

另一方面，如果这个事件在div元素上触发。

div.dispatchEvent(click);
那么，不管div元素是在冒泡阶段监听，还是在捕获阶段监听，都会触发监听函数。因为这时div元素是事件的目标，不存在是否冒泡的问题，div元素总是会接收到事件，因此导致监听函数生效。`,
        score: 3,
      },
      {
        question: `event.preventDefault()作用？`,
        answer: `当Event.cancelable属性为true时，调用Event.preventDefault()就可以取消这个事件，阻止浏览器对该事件的默认行为。
比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了；再比如，按一下空格键，页面向下滚动一段距离，使用这个方法以后也不会滚动了。该方法生效的前提是，事件对象的cancelable属性为true，如果为false，调用该方法没有任何效果。



利用这个方法，可以为文本输入框设置校验条件。如果用户的输入不符合条件，就无法将字符输入文本框。

// HTML 代码为
// <input type="text" id="my-input" />
var input = document.getElementById('my-input');
input.addEventListener('keypress', checkName, false);

function checkName(e) {
  if (e.charCode < 97 || e.charCode > 122) {
    e.preventDefault();
  }
}`,
        score: 2,
      },
    ],
  },
  {
    name: "浏览器环境",
    test: "js 浏览器基础",
    visible: false,
    subject: [
      {
        question: `渲染引擎的主要作用是？`,
        answer: `渲染引擎的主要作用是，将网页代码渲染为用户视觉可以感知的平面文档。

不同的浏览器有不同的渲染引擎。

Firefox：Gecko 引擎
Safari：WebKit 引擎
Chrome：Blink 引擎
IE: Trident 引擎
Edge: EdgeHTML 引擎
渲染引擎处理网页，通常分成四个阶段。

解析代码：HTML 代码解析为 DOM，CSS 代码解析为 CSSOM（CSS Object Model）。
对象合成：将 DOM 和 CSSOM 合成一棵渲染树（render tree）。
布局：计算出渲染树的布局（layout）。
绘制：将渲染树绘制到屏幕。
以上四步并非严格按顺序执行，往往第一步还没完成，第二步和第三步就已经开始了。所以，会看到这种情况：网页的 HTML 代码还没下载完，但浏览器已经显示出内容了。`,
        score: 1,
      },
      {
        question: `如何理解重流和重绘？`,
        answer: `重绘（Repaint）：当元素的可见样式属性（例如颜色、背景等）发生改变，但不影响其布局时，浏览器会执行重绘操作。重绘只是重新绘制元素的外观，不涉及布局计算。

重流（Reflow）：当元素的布局属性（例如尺寸、位置等）发生改变，浏览器会执行重流操作。重流涉及重新计算元素的几何属性和布局，然后更新整个页面的布局。

重绘和重流通常是由下列场景触发的：

修改元素的样式属性（重绘）：例如改变颜色、背景、边框等。

修改元素的布局属性（重流）：例如改变尺寸、位置、显示/隐藏等。

添加、删除、更新DOM节点（重流）：例如插入、删除、移动元素等。

浏览器窗口大小改变（重流）：例如调整窗口大小时，页面布局需要重新计算。

重绘和重流的发生会带来性能开销，因此在编写CSS和操作DOM时，应尽量减少不必要的重绘和重流操作，以提高页面的性能和响应速度。

下面是一些优化技巧。

读取 DOM 或者写入 DOM，尽量写在一起，不要混杂。不要读取一个 DOM 节点，然后立刻写入，接着再读取一个 DOM 节点。
缓存 DOM 信息。
不要一项一项地改变样式，而是使用 CSS class 一次性改变样式。
使用documentFragment操作 DOM
动画使用absolute定位或fixed定位，这样可以减少对其他元素的影响。
只在必要时才显示隐藏元素。
使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重绘之前执行，而不是立即要求页面重绘。
使用虚拟 DOM（virtual DOM）库。
下面是一个window.requestAnimationFrame()对比效果的例子。

// 重流代价高
function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  element.style.height = (currentHeight * 2) + 'px';
}

all_my_elements.forEach(doubleHeight);

// 重绘代价低
function doubleHeight(element) {
  var currentHeight = element.clientHeight;

  window.requestAnimationFrame(function () {
    element.style.height = (currentHeight * 2) + 'px';
  });
}

all_my_elements.forEach(doubleHeight);
上面的第一段代码，每读一次 DOM，就写入新的值，会造成不停的重排和重流。第二段代码把所有的写操作，都累积在一起，从而 DOM 代码变动的代价就最小化了。`,
        score: 2,
      },
      {
        question: `CSS中的translate属性会触发重流吗？`,
        answer: `在大多数情况下，CSS中的translate属性不会触发重流，而只会触发重绘。translate属性用于对元素进行平移变换，不会改变元素的布局属性（尺寸、位置等）。因此，当只使用translate进行平移变换时，浏览器通常只会执行重绘操作，而不会重新计算元素的布局。
重绘操作意味着浏览器会重新绘制元素的外观，但不会重新计算元素的几何属性和布局。这使得translate属性比改变元素的布局属性（如top、left、width等）更高效，因为重绘比重流开销小。`,
        score: 1,
      },
      {
        question: `怎样理解js引擎？`,
        answer: `JavaScript 引擎的主要作用是，读取网页中的 JavaScript 代码，对其处理后运行。

JavaScript 是一种解释型语言，也就是说，它不需要编译，由解释器实时运行。这样的好处是运行和修改都比较方便，刷新页面就可以重新解释；缺点是每次运行都要调用解释器，系统开销较大，运行速度慢于编译型语言。

为了提高运行速度，目前的浏览器都将 JavaScript 进行一定程度的编译，生成类似字节码（bytecode）的中间代码，以提高运行速度。

早期，浏览器内部对 JavaScript 的处理过程如下：

读取代码，进行词法分析（Lexical analysis），将代码分解成词元（token）。
对词元进行语法分析（parsing），将代码整理成“语法树”（syntax tree）。
使用“翻译器”（translator），将代码转为字节码（bytecode）。
使用“字节码解释器”（bytecode interpreter），将字节码转为机器码。
逐行解释将字节码转为机器码，是很低效的。为了提高运行速度，现代浏览器改为采用“即时编译”（Just In Time compiler，缩写 JIT），即字节码只在运行时编译，用到哪一行就编译哪一行，并且把编译结果缓存（inline cache）。通常，一个程序被经常用到的，只是其中一小部分代码，有了缓存的编译结果，整个程序的运行速度就会显著提升。

字节码不能直接运行，而是运行在一个虚拟机（Virtual Machine）之上，一般也把虚拟机称为 JavaScript 引擎。并非所有的 JavaScript 虚拟机运行时都有字节码，有的 JavaScript 虚拟机基于源码，即只要有可能，就通过 JIT（just in time）编译器直接把源码编译成机器码运行，省略字节码步骤。这一点与其他采用虚拟机（比如 Java）的语言不尽相同。这样做的目的，是为了尽可能地优化代码、提高性能。下面是目前最常见的一些 JavaScript 虚拟机：

Chakra (Microsoft Internet Explorer)
Nitro/JavaScript Core (Safari)
Carakan (Opera)
SpiderMonkey (Firefox)
V8 (Chrome, Chromium)`,
        score: 1,
      },
      {
        question: `请描述一下 cookies，sessionStorage 和 localStorage 的区别？`,
        answer: `sessionStorage （session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此 sessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储。而 localStorage 用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
web storage 和 cookie 的区别
Web Storage 的概念和 cookie 相似，区别是它是为了更大容量存储设计的。Cookie 的大小是受限的，并且每次你请求一个新的页面的时候 Cookie 都会被发送过去，这样无形中浪费了带宽，另外 cookie 还需要指定作用域，不可以跨域调用。
除此之外，Web Storage 拥有 setItem,getItem,removeItem,clear 等方法，不像 cookie需要前端开发者自己封装 setCookie，getCookie。但是 Cookie 也是不可以或缺的：Cookie的作用是与服务器进行交互，作为 HTTP 规范的一部分而存在 ，而 Web Storage 仅仅是为了在本地“存储”数据而生。`,
        score: 5,
      },
    ],
  },
  {
    name: "windows对象",
    test: "js 浏览器基础",
    visible: false,
    subject: [
      {
        question: `怎样理解windows对象？`,
        answer: `浏览器里面，window对象（注意，w为小写）指当前的浏览器窗口。它也是当前页面的顶层对象，即最高一层的对象，所有其他对象都是它的下属。一个变量如果未声明，那么默认就是顶层对象的属性。

a = 1;
window.a // 1
上面代码中，a是一个没有声明就直接赋值的变量，它自动成为顶层对象的属性。

window有自己的实体含义，其实不适合当作最高一层的顶层对象，这是一个语言的设计失误。最早，设计这门语言的时候，原始设想是语言内置的对象越少越好，这样可以提高浏览器的性能。因此，语言设计者 Brendan Eich 就把window对象当作顶层对象，所有未声明就赋值的变量都自动变成window对象的属性。这种设计使得编译阶段无法检测出未声明变量，但到了今天已经没有办法纠正了。`,
        score: 1,
      },
      {
        question: `window.screenX，window.screenY
window.innerHeight，window.innerWidth
window.outerHeight，window.outerWidth
window.scrollX，window.scrollY
window.pageXOffset，window.pageYOffset

这几个分别代表什么？`,
        answer: `（1）window.screenX，window.screenY
window.screenX和window.screenY属性，返回浏览器窗口左上角相对于当前屏幕左上角的水平距离和垂直距离（单位像素）。这两个属性只读。

（2） window.innerHeight，window.innerWidth
window.innerHeight和window.innerWidth属性，返回网页在当前窗口中可见部分的高度和宽度，即“视口”（viewport）的大小（单位像素）。这两个属性只读。
用户放大网页的时候（比如将网页从100%的大小放大为200%），这两个属性会变小。因为这时网页的像素大小不变（比如宽度还是960像素），只是每个像素占据的屏幕空间变大了，因此可见部分（视口）就变小了。
注意，这两个属性值包括滚动条的高度和宽度。

（3）window.outerHeight，window.outerWidth
window.outerHeight和window.outerWidth属性返回浏览器窗口的高度和宽度，包括浏览器菜单和边框（单位像素）。这两个属性只读。

（4）window.scrollX，window.scrollY
window.scrollX属性返回页面的水平滚动距离，window.scrollY属性返回页面的垂直滚动距离，单位都为像素。这两个属性只读。
注意，这两个属性的返回值不是整数，而是双精度浮点数。如果页面没有滚动，它们的值就是0。

举例来说，如果用户向下拉动了垂直滚动条75像素，那么window.scrollY就是75左右。用户水平向右拉动水平滚动条200像素，window.scrollX就是200左右。
if (window.scrollY < 75) {
  window.scroll(0, 75);
}
上面代码中，如果页面向下滚动的距离小于75像素，那么页面向下滚动75像素。

（5）window.pageXOffset，window.pageYOffset
window.pageXOffset属性和window.pageYOffset属性，是window.scrollX和window.scrollY别名。`,
        score: 3,
      },
      {
        question: `window.alert()，window.prompt()，window.confirm()的使用方法？`,
        answer: `window.alert()、window.prompt()、window.confirm()都是浏览器与用户互动的全局方法。它们会弹出不同的对话框，要求用户做出回应。注意，这三个方法弹出的对话框，都是浏览器统一规定的式样，无法定制。

（1）window.alert()
window.alert()方法弹出的对话框，只有一个“确定”按钮，往往用来通知用户某些信息。
window.alert('Hello World');
用户只有点击“确定”按钮，对话框才会消失。对话框弹出期间，浏览器窗口处于冻结状态，如果不点“确定”按钮，用户什么也干不了。
window.alert()方法的参数只能是字符串，没法使用 CSS 样式，但是可以用\n指定换行。
alert('本条提示\\n分成两行');

（2）window.prompt()
window.prompt()方法弹出的对话框，提示文字的下方，还有一个输入框，要求用户输入信息，并有“确定”和“取消”两个按钮。它往往用来获取用户输入的数据。
var result = prompt('您的年龄？', 25)
上面代码会跳出一个对话框，文字提示为“您的年龄？”，要求用户在对话框中输入自己的年龄（默认显示25）。用户填入的值，会作为返回值存入变量result。
window.prompt()的返回值有两种情况，可能是字符串（有可能是空字符串），也有可能是null。具体分成三种情况。
用户输入信息，并点击“确定”，则用户输入的信息就是返回值。
用户没有输入信息，直接点击“确定”，则输入框的默认值就是返回值。
用户点击了“取消”（或者按了 ESC 按钮），则返回值是null。
window.prompt()方法的第二个参数是可选的，但是最好总是提供第二个参数，作为输入框的默认值。

（3）window.confirm()
window.confirm()方法弹出的对话框，除了提示信息之外，只有“确定”和“取消”两个按钮，往往用来征询用户是否同意。
var result = confirm('你最近好吗？');
上面代码弹出一个对话框，上面只有一行文字“你最近好吗？”，用户选择点击“确定”或“取消”。
confirm方法返回一个布尔值，如果用户点击“确定”，返回true；如果用户点击“取消”，则返回false。

var okay = confirm('Please confirm this message.');
if (okay) {
  // 用户按下“确定”
} else {
  // 用户按下“取消”
}
confirm的一个用途是，用户离开当前页面时，弹出一个对话框，问用户是否真的要离开。

window.onunload = function () {
  return window.confirm('你确定要离开当面页面吗？');
}
这三个方法都具有堵塞效应，一旦弹出对话框，整个页面就是暂停执行，等待用户做出反应。`,
        score: 3,
      },
      {
        question: `window.open(), window.close()，window.stop()作用？`,
        answer: `（1）window.open()

window.open方法用于新建另一个浏览器窗口，类似于浏览器菜单的新建窗口选项。它会返回新窗口的引用，如果无法新建窗口，则返回null。

var popup = window.open('somefile.html');
上面代码会让浏览器弹出一个新建窗口，网址是当前域名下的somefile.html。

open方法一共可以接受三个参数。

window.open(url, windowName, [windowFeatures])
url：字符串，表示新窗口的网址。如果省略，默认网址就是about:blank。
windowName：字符串，表示新窗口的名字。如果该名字的窗口已经存在，则占用该窗口，不再新建窗口。如果省略，就默认使用_blank，表示新建一个没有名字的窗口。另外还有几个预设值，_self表示当前窗口，_top表示顶层窗口，_parent表示上一层窗口。
windowFeatures：字符串，内容为逗号分隔的键值对（详见下文），表示新窗口的参数，比如有没有提示栏、工具条等等。如果省略，则默认打开一个完整 UI 的新窗口。如果新建的是一个已经存在的窗口，则该参数不起作用，浏览器沿用以前窗口的参数。
下面是一个例子。

var popup = window.open(
  'somepage.html',
  'DefinitionsWindows',
  'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
);
上面代码表示，打开的新窗口高度和宽度都为200像素，没有地址栏，但有状态栏和滚动条，允许用户调整大小。

第三个参数可以设定如下属性。

left：新窗口距离屏幕最左边的距离（单位像素）。注意，新窗口必须是可见的，不能设置在屏幕以外的位置。
top：新窗口距离屏幕最顶部的距离（单位像素）。
height：新窗口内容区域的高度（单位像素），不得小于100。
width：新窗口内容区域的宽度（单位像素），不得小于100。
outerHeight：整个浏览器窗口的高度（单位像素），不得小于100。
outerWidth：整个浏览器窗口的宽度（单位像素），不得小于100。
menubar：是否显示菜单栏。
toolbar：是否显示工具栏。
location：是否显示地址栏。
personalbar：是否显示用户自己安装的工具栏。
status：是否显示状态栏。
dependent：是否依赖父窗口。如果依赖，那么父窗口最小化，该窗口也最小化；父窗口关闭，该窗口也关闭。
minimizable：是否有最小化按钮，前提是dialog=yes。
noopener：新窗口将与父窗口切断联系，即新窗口的window.opener属性返回null，父窗口的window.open()方法也返回null。
resizable：新窗口是否可以调节大小。
scrollbars：是否允许新窗口出现滚动条。
dialog：新窗口标题栏是否出现最大化、最小化、恢复原始大小的控件。
titlebar：新窗口是否显示标题栏。
alwaysRaised：是否显示在所有窗口的顶部。
alwaysLowered：是否显示在父窗口的底下。
close：新窗口是否显示关闭按钮。
对于那些可以打开和关闭的属性，设为yes或1或不设任何值就表示打开，比如status=yes、status=1、status都会得到同样的结果。如果想设为关闭，不用写no，而是直接省略这个属性即可。也就是说，如果在第三个参数中设置了一部分属性，其他没有被设置的yes/no属性都会被设成no，只有titlebar和关闭按钮除外（它们的值默认为yes）。

上面这些属性，属性名与属性值之间用等号连接，属性与属性之间用逗号分隔。

'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
另外，open()方法的第二个参数虽然可以指定已经存在的窗口，但是不等于可以任意控制其他窗口。为了防止被不相干的窗口控制，浏览器只有在两个窗口同源，或者目标窗口被当前网页打开的情况下，才允许open方法指向该窗口。

window.open方法返回新窗口的引用。

var windowB = window.open('windowB.html', 'WindowB');
windowB.window.name // "WindowB"
注意，如果新窗口和父窗口不是同源的（即不在同一个域），它们彼此不能获取对方窗口对象的内部属性。

下面是另一个例子。

var w = window.open();
console.log('已经打开新窗口');
w.location = 'http://example.com';
上面代码先打开一个新窗口，然后在该窗口弹出一个对话框，再将网址导向example.com。

由于open这个方法很容易被滥用，许多浏览器默认都不允许脚本自动新建窗口。只允许在用户点击链接或按钮时，脚本做出反应，弹出新窗口。因此，有必要检查一下打开新窗口是否成功。

var popup = window.open();
if (popup === null) {
  // 新建窗口失败
}
（2）window.close()

window.close方法用于关闭当前窗口，一般只用来关闭window.open方法新建的窗口。

popup.close()
该方法只对顶层窗口有效，iframe框架之中的窗口使用该方法无效。

（3）window.stop()

window.stop()方法完全等同于单击浏览器的停止按钮，会停止加载图像、视频等正在或等待加载的对象。

window.stop()`,
        score: 2,
      },
      {
        question: `window.moveTo()，window.moveBy()作用？`,
        answer: `window.moveTo()方法用于移动浏览器窗口到指定位置。它接受两个参数，分别是窗口左上角距离屏幕左上角的水平距离和垂直距离，单位为像素。

window.moveTo(100, 200)
上面代码将窗口移动到屏幕(100, 200)的位置。

window.moveBy()方法将窗口移动到一个相对位置。它接受两个参数，分别是窗口左上角向右移动的水平距离和向下移动的垂直距离，单位为像素。

window.moveBy(25, 50)
上面代码将窗口向右移动25像素、向下移动50像素。

为了防止有人滥用这两个方法，随意移动用户的窗口，目前只有一种情况，浏览器允许用脚本移动窗口：该窗口是用window.open()方法新建的，并且窗口里只有它一个 Tab 页。除此以外的情况，使用上面两个方法都是无效的。`,
        score: 1,
      },
      {
        question: `window.resizeTo()，window.resizeBy()作用？`,
        answer: `window.resizeTo()方法用于缩放窗口到指定大小。

它接受两个参数，第一个是缩放后的窗口宽度（outerWidth属性，包含滚动条、标题栏等等），第二个是缩放后的窗口高度（outerHeight属性）。

window.resizeTo(
  window.screen.availWidth / 2,
  window.screen.availHeight / 2
)
上面代码将当前窗口缩放到，屏幕可用区域的一半宽度和高度。

window.resizeBy()方法用于缩放窗口。它与window.resizeTo()的区别是，它按照相对的量缩放，window.resizeTo()需要给出缩放后的绝对大小。

它接受两个参数，第一个是水平缩放的量，第二个是垂直缩放的量，单位都是像素。

window.resizeBy(-200, -200)
上面的代码将当前窗口的宽度和高度，都缩小200像素。`,
        score: 1,
      },
      {
        question: `我想滚动页面，可以用什么方法？`,
        answer: `window.scrollTo方法用于将文档滚动到指定位置。它接受两个参数，表示滚动后位于窗口左上角的页面坐标。

window.scrollTo(x-coord, y-coord)
它也可以接受一个配置对象作为参数。

window.scrollTo(options)
配置对象options有三个属性。

top：滚动后页面左上角的垂直坐标，即 y 坐标。
left：滚动后页面左上角的水平坐标，即 x 坐标。
behavior：字符串，表示滚动的方式，有三个可能值（smooth、instant、auto），默认值为auto。
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
});
window.scroll()方法是window.scrollTo()方法的别名。

window.scrollBy()方法用于将网页滚动指定距离（单位像素）。它接受两个参数：水平向右滚动的像素，垂直向下滚动的像素。

window.scrollBy(0, window.innerHeight)
上面代码用于将网页向下滚动一屏。

如果不是要滚动整个文档，而是要滚动某个元素，可以使用下面三个属性和方法。

Element.scrollTop
Element.scrollLeft
Element.scrollIntoView()`,
        score: 4,
      },
      {
        question: `window.focus()，window.blur()作用？`,
        answer: `window.focus()方法会激活窗口，使其获得焦点，出现在其他窗口的前面。

var popup = window.open('popup.html', 'Popup Window');

if ((popup !== null) && !popup.closed) {
  popup.focus();
}
上面代码先检查popup窗口是否依然存在，确认后激活该窗口。

window.blur()方法将焦点从窗口移除。

当前窗口获得焦点时，会触发focus事件；当前窗口失去焦点时，会触发blur事件。`,
        score: 1,
      },
      {
        question: `load 事件和 onload 属性 作用？`,
        answer: `load事件发生在文档在浏览器窗口加载完毕时。window.onload属性可以指定这个事件的回调函数。

window.onload = function() {
  var elements = document.getElementsByClassName('example');
  for (var i = 0; i < elements.length; i++) {
    var elt = elements[i];
    // ...
  }
};
上面代码在网页加载完毕后，获取指定元素并进行处理。`,
        score: 1,
      },
      {
        question: `error 事件和 onerror 属性 作用？`,
        answer: `浏览器脚本发生错误时，会触发window对象的error事件。我们可以通过window.onerror属性对该事件指定回调函数。

window.onerror = function (message, filename, lineno, colno, error) {
  console.log("出错了！--> %s", error.stack);
};
由于历史原因，window的error事件的回调函数不接受错误对象作为参数，而是一共可以接受五个参数，它们的含义依次如下。

出错信息
出错脚本的网址
行号
列号
错误对象

老式浏览器只支持前三个参数。

并不是所有的错误，都会触发 JavaScript 的error事件（即让 JavaScript 报错）。一般来说，只有 JavaScript 脚本的错误，才会触发这个事件，而像资源文件不存在之类的错误，都不会触发。

下面是一个例子，如果整个页面未捕获错误超过3个，就显示警告。

window.onerror = function(msg, url, line) {
  if (onerror.num++ > onerror.max) {
    alert('ERROR: ' + msg + '\\n' + url + ':' + line);
    return true;
  }
}
onerror.max = 3;
onerror.num = 0;
需要注意的是，如果脚本网址与网页网址不在同一个域（比如使用了 CDN），浏览器根本不会提供详细的出错信息，只会提示出错，错误类型是“Script error.”，行号为0，其他信息都没有。这是浏览器防止向外部脚本泄漏信息。一个解决方法是在脚本所在的服务器，设置Access-Control-Allow-Origin的 HTTP 头信息。

Access-Control-Allow-Origin: *
然后，在网页的<script>标签中设置crossorigin属性。

<script crossorigin="anonymous" src="//example.com/file.js"></script>
上面代码的crossorigin="anonymous"表示，读取文件不需要身份信息，即不需要 cookie 和 HTTP 认证信息。如果设为crossorigin="use-credentials"，就表示浏览器会上传 cookie 和 HTTP 认证信息，同时还需要服务器端打开 HTTP 头信息Access-Control-Allow-Credentials。`,
        score: 1,
      },
    ],
  },
  {
    name: "Navigator,Screen",
    test: "js 浏览器基础",
    visible: false,
    subject: [
      {
        question: `Navigator 对象有什么用？`,
        answer: `window.navigator属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。`,
        score: 1,
      },
      {
        question: `Navigator.userAgent 作用？`,
        answer: `navigator.userAgent属性返回浏览器的 User Agent 字符串，表示用户设备信息，包含了浏览器的厂商、版本、操作系统等信息。

下面是 Chrome 浏览器的userAgent。

navigator.userAgent
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"
通过userAgent属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。

不过，通过userAgent可以大致准确地识别手机浏览器，方法就是测试是否包含mobi字符串。

var ua = navigator.userAgent.toLowerCase();

if (/mobi/.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。

/mobi|android|touch|mini/.test(ua)`,
        score: 1,
      },
      {
        question: `Navigator.onLine 作用？`,
        answer: `navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。

navigator.onLine // true
有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的onLine属性会返回true，所以不能假定只要是true，用户就一定能访问互联网。不过，如果是false，可以断定用户一定离线。

用户变成在线会触发online事件，变成离线会触发offline事件，可以通过window.ononline和window.onoffline指定这两个事件的回调函数。

window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });`,
        score: 1,
      },
      {
        question: `Navigator.plugins 作用？`,
        answer: `Navigator.plugins属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。

var pluginsLength = navigator.plugins.length;

for (var i = 0; i < pluginsLength; i++) {
  console.log(navigator.plugins[i].name);
  console.log(navigator.plugins[i].filename);
  console.log(navigator.plugins[i].description);
  console.log(navigator.plugins[i].version);
}`,
        score: 1,
      },
      {
        question: `Navigator.platform 作用？`,
        answer: `Navigator.platform属性返回用户的操作系统信息，比如MacIntel、Win32、Linux x86_64等 。

navigator.platform
// "Linux x86_64"`,
        score: 1,
      },
    ],
  },
  {
    name: "XMLHttpRequest",
    test: "js 浏览器基础",
    visible: false,
    subject: [
      {
        question: `什么是ajax，包括哪些步骤？`,
        answer: `它是 Asynchronous JavaScript and XML 的缩写，指的是通过 JavaScript 的异步通信，从服务器获取 XML 文档从中提取数据（在没有JSON格式前，用的是XML格式），再更新当前网页的对应部分，而不用刷新整个网页。只要用脚本发起通信，就可以叫做 AJAX 通信。
        
具体来说，AJAX 包括以下几个步骤。

创建 XMLHttpRequest 实例
发出 HTTP 请求
接收服务器传回的数据
更新网页数据

概括起来，就是一句话，AJAX 通过原生的XMLHttpRequest对象发出 HTTP 请求，得到服务器返回的数据后，再进行处理。现在，服务器返回的都是 JSON 格式的数据，XML 格式已经过时了，但是 AJAX 这个名字已经成了一个通用名词，字面含义已经消失了。`,
        score: 5,
        img: "ajax原理.png",
      },
      {
        question: `XMLHttpRequest对象执行步骤？`,
        answer: `XMLHttpRequest本身是一个构造函数，可以使用new命令生成实例。它没有任何参数。

var xhr = new XMLHttpRequest();
一旦新建实例，就可以使用open()方法指定建立 HTTP 连接的一些细节。

xhr.open('GET', 'http://www.example.com/page.php', true);
上面代码指定使用 GET 方法，跟指定的服务器网址建立连接。第三个参数true，表示请求是异步的。

然后，指定回调函数，使用onreadystatechange方法监听通信状态（readyState属性）的变化。

最后使用send()方法，实际发出请求。

xhr.send(null);
上面代码中，send()的参数为null，表示发送请求的时候，不带有数据体。如果发送的是 POST 请求，这里就需要指定数据体。

一旦拿到服务器返回的数据，AJAX 不会刷新整个网页，而是只更新网页里面的相关部分，从而不打断用户正在做的事情。

注意，AJAX 只能向同源网址（协议、域名、端口都相同）发出 HTTP 请求，如果发出跨域请求，就会报错（详见《同源政策》和《CORS 通信》两章）。

下面是XMLHttpRequest对象简单用法的完整例子。

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

xhr.open('GET', '/endpoint', true);
xhr.send(null);`,
        score: 5,
        img: "ajax步骤.png",
      },
      {
        question: `200, 
301, 
302, 
304, 
307, 
401, 
403, 
404, 
500, 

这些状态码意义？`,
        answer: `200, OK，访问正常
301, Moved Permanently，永久移动
302, Moved temporarily，暂时移动
304, Not Modified，未修改
307, Temporary Redirect，暂时重定向
401, Unauthorized，未授权
403, Forbidden，禁止访问
404, Not Found，未发现指定网址
500, Internal Server Error，服务器发生错误`,
        score: 5,
        img: "ajax步骤.png",
      },
      {
        question: `send之后，如何得知文件上传进展？`,
        answer: `发送文件以后，通过XMLHttpRequest.upload属性可以得到一个对象，通过观察这个对象，可以得知上传的进展。主要方法就是监听这个对象的各种事件：loadstart、loadend、load、abort、error、progress、timeout。

假定网页上有一个<progress>元素。

<progress min="0" max="100" value="0">0% complete</progress>
文件上传时，对upload属性指定progress事件的监听函数，即可获得上传的进度。

function upload(blobOrFile) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/server', true);
  xhr.onload = function (e) {};

  var progressBar = document.querySelector('progress');
  xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      progressBar.value = (e.loaded / e.total) * 100;
      // 兼容不支持 <progress> 元素的老式浏览器
      progressBar.textContent = progressBar.value;
    }
  };

  xhr.send(blobOrFile);
}

upload(new Blob(['hello world'], {type: 'text/plain'}));`,
        score: 2,
      },
    ],
  },
  {
    name: "同源限制",
    test: "js 浏览器基础",
    visible: false,
    subject: [
      {
        question: `什么是同源？`,
        answer: `1995年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。

最初，它的含义是指，A 网页设置的 Cookie，B 网页不能打开，除非这两个网页“同源”。所谓“同源”指的是“三个相同”。

协议相同
域名相同
端口相同（这点可以忽略，详见下文）
举例来说，http://www.example.com/dir/page.html这个网址，协议是http://，域名是www.example.com，端口是80（默认端口可以省略），它的同源情况如下。

http://www.example.com/dir2/other.html：同源
http://example.com/dir/other.html：不同源（域名不同）
http://v2.www.example.com/dir/other.html：不同源（域名不同）
http://www.example.com:81/dir/other.html：不同源（端口不同）
https://www.example.com/dir/page.html：不同源（协议不同）
注意，标准规定端口不同的网址不是同源（比如8000端口和8001端口不是同源），但是浏览器没有遵守这条规定。实际上，同一个网域的不同端口，是可以互相读取 Cookie 的。`,
        score: 5,
      },
      {
        question: `为什么要同源？`,
        answer: `同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

设想这样一种情况：A 网站是一家银行，用户登录以后，A 网站在用户的机器上设置了一个 Cookie，包含了一些隐私信息。用户离开 A 网站以后，又去访问 B 网站，如果没有同源限制，B 网站可以读取 A 网站的 Cookie，那么隐私就泄漏了。更可怕的是，Cookie 往往用来保存用户的登录状态，如果用户没有退出登录，其他网站就可以冒充用户，为所欲为。因为浏览器同时还规定，提交表单不受同源政策的限制。

由此可见，同源政策是必需的，否则 Cookie 可以共享，互联网就毫无安全可言了。

随着互联网的发展，同源政策越来越严格。目前，如果非同源，共有三种行为受到限制。

（1） 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。

（2） 无法接触非同源网页的 DOM。

（3） 无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）。`,
        score: 5,
      },
      {
        question: `如果网站一级域名相同，次级域名不同，那么如何实现共享Cookie？`,
        answer: `Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。如果两个网页一级域名相同，只是次级域名不同，浏览器允许通过设置document.domain共享 Cookie。

举例来说，A 网页的网址是http://w1.example.com/a.html，B 网页的网址是http://w2.example.com/b.html，那么只要设置相同的document.domain，两个网页就可以共享 Cookie。因为浏览器通过document.domain属性来检查是否同源。

// 两个网页都需要设置
document.domain = 'example.com';
注意，A 和 B 两个网页都需要设置document.domain属性，才能达到同源的目的。因为设置document.domain的同时，会把端口重置为null，因此如果只设置一个网页的document.domain，会导致两个网址的端口不同，还是达不到同源的目的。

注意，这种方法只适用于 Cookie 和 iframe 窗口，LocalStorage 和 IndexedDB 无法通过这种方法。`,
        score: 1,
      },
      {
        question: `ajax实现跨源通信，除了架设服务器代理外，还可以怎么做？`,
        answer: `同源政策规定，AJAX 请求只能发给同源的网址，否则就报错。

除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。

JSONP
WebSocket
CORS


WebSocket支持跨域通信。在WebSocket协议中，浏览器会发送一个HTTP请求头字段Origin，服务器可以通过检查这个字段来确认是否允许该跨域请求。如果服务器认为该请求是合法的，就会返回一个HTTP响应头字段Access-Control-Allow-Origin来允许跨域通信。因此，WebSocket是支持跨域通信的。`,
        score: 3,
      },
      {
        question: `JSONP工作原理？`,
        answer: `JSONP是解决跨域问题的古老方案，虽然浏览器对css，js这类的请求限制较多，但对标签限制较少，一般网页都能f12看到怎么搞标签的，所以JSONP利用了这一点。
与其说是用ajax，但实际上和他无关了。

它的做法如下。

第一步，网页添加一个<script>元素，向服务器请求一个脚本，这不受同源政策限制，可以跨域请求（其他的标签，如style,img这些，服务器限制也比较少）。
<script src="http://api.foo.com?callback=bar"></script>
注意，请求的脚本网址有一个callback参数（?callback=bar），用来告诉服务器，客户端的回调函数名称（bar）。
第二步，服务器收到请求后，拼接一个字符串，将 JSON 数据放在函数名里面，作为字符串返回（bar({...})）。
第三步，客户端会将服务器返回的字符串，作为代码解析，因为浏览器认为，这是<script>标签请求的脚本内容。这时，客户端只要定义了bar()函数，就能在该函数体内，拿到服务器返回的 JSON 数据。

下面看一个实例。首先，网页动态插入<script>元素，由它向跨域网址发出请求。

function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  document.body.appendChild(script);
}
window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}
function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};

上面代码通过动态添加<script>元素，向服务器example.com发出请求。注意，该请求的查询字符串有一个callback参数，用来指定回调函数的名字，这对于 JSONP 是必需的。

服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。
foo({
  'ip': '8.8.8.8'
});

由于<script>元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了foo函数，该函数就会立即调用。作为参数的 JSON 数据被视为 JavaScript 对象，而不是字符串，因此避免了使用JSON.parse的步骤。`,
        score: 3,
        img: "jsonp.png",
      },
      {
        question: `WebSocket工作原理？`,
        answer: `WebSocket是一种协议，设计用于提供低延迟、全双工和长期运行的连接。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。
全双工是一种通信方式，通信双方可以同时接收和发送数据，不需要等对方的响应，属于实时通信。`,
        score: 3,
      },
    ],
  },
  {
    name: "CORS 通信",
    test: "js 浏览器基础",
    visible: false,
    subject: [
      {
        question: `什么是CORS？`,
        answer: `CORS 是一个 W3C 标准，全称是“跨源资源共享”（Cross-origin resource sharing），或者通俗地称为“跨域资源共享”。它允许浏览器向跨源的服务器，发出XMLHttpRequest请求，从而克服了 AJAX 只能同源使用的限制。这种方式算是最正统的解决方案。
        
CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。

整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨源通信。`,
        score: 3,
        img: "cors.png",
      },
      {
        question: `CORS与JSONP有什么区别？`,
        answer: `CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。JSONP 只支持GET请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。`,
        score: 3,
      },
      {
        question: `什么是简单请求？`,
        answer: `CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。

对于简单请求，浏览器直接发出 CORS 请求（你都不用特意改什么）。具体来说，就是在头信息之中，增加一个Origin字段。
只要同时满足以下两大条件，就属于简单请求。

（1）请求方法是以下三种方法之一。

HEAD
GET
POST

（2）HTTP 的头信息不超出以下几种字段。

Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

凡是不同时满足上面两个条件，就属于非简单请求（预检请求，服务器还需要做进一步确认）。一句话，简单请求就是简单的 HTTP 方法与简单的 HTTP 头信息的结合。

这样划分的原因是，表单在历史上一直可以跨源发出请求。简单请求就是表单请求，浏览器沿袭了传统的处理方式，不把行为复杂化，否则开发者可能转而使用表单，规避 CORS 的限制。对于非简单请求，浏览器会采用新的处理方式。`,
        score: 2,
        img: "简单请求.png",
      },
      {
        question: `CORS与JSONP有什么区别？`,
        answer: `CORS 与 JSONP 的使用目的相同，但是比 JSONP 更强大。JSONP 只支持GET请求，CORS 支持所有类型的 HTTP 请求。JSONP 的优势在于支持老式浏览器，以及可以向不支持 CORS 的网站请求数据。`,
        score: 3,
      },
      {
        question: `跨域上传图片没问题，但是提交普通表单却遇上了跨域问题，有没有可能是服务器不支持预检请求导致的？`,
        answer: `有可能。
跨域上传图片属于简单请求：POST请求，Content-Type=multipart/form-data
但提交普通表单的时候，绝大多数情况是上传json，也就是说，Content-Type=application/json，不符合简单请求的条件，所以会预检。`,
        score: 3,
      },
    ],
  },
  {
    name: "Storage, History",
    test: "js 浏览器基础",
    visible: false,
    subject: [
      {
        question: `Storage 接口包括哪些，有什么用？`,
        answer: `window.sessionStorage和window.localStorage。

sessionStorage保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空；localStorage保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。

保存的数据都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。

这个接口很像 Cookie 的强化版，能够使用大得多的存储空间。目前，每个域名的存储上限视浏览器而定，Chrome 是 2.5MB，Firefox 和 Opera 是 5MB，IE 是 10MB。其中，Firefox 的存储空间由一级域名决定，而其他浏览器没有这个限制。也就是说，Firefox 中，a.example.com和b.example.com共享 5MB 的存储空间。另外，与 Cookie 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。`,
        score: 3,
      },
      {
        question: `Storage 如何实现增删操作和清理操作？`,
        answer: `Storage.setItem()方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值。
window.sessionStorage.setItem('key', 'value');
window.localStorage.setItem('key', 'value');

写入不一定要用这个方法，直接赋值也是可以的。

// 下面三种写法等价
window.localStorage.foo = '123';
window.localStorage['foo'] = '123';
window.localStorage.setItem('foo', '123');


Storage.getItem()方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回null。
window.sessionStorage.getItem('key')
window.localStorage.getItem('key')
键名应该是一个字符串，否则会被自动转为字符串。


Storage.removeItem()方法用于清除某个键名对应的键值。它接受键名作为参数，如果键名不存在，该方法不会做任何事情。

sessionStorage.removeItem('key');
localStorage.removeItem('key');


Storage.clear()
Storage.clear()方法用于清除所有保存的数据。该方法的返回值是undefined。

window.sessionStorage.clear()
window.localStorage.clear()`,
        score: 4,
      },
      {
        question: `History.back()、History.forward()、History.go()，有什么用？`,
        answer: `这三个方法用于在历史之中移动。

History.back()：移动到上一个网址，等同于点击浏览器的后退键。对于第一个访问的网址，该方法无效果。
History.forward()：移动到下一个网址，等同于点击浏览器的前进键。对于最后一个访问的网址，该方法无效果。
History.go()：接受一个整数作为参数，以当前网址为基准，移动到参数指定的网址，比如go(1)相当于forward()，go(-1)相当于back()。如果参数超过实际存在的网址范围，该方法无效果；如果不指定参数，默认参数为0，相当于刷新当前页面。
history.back();
history.forward();
history.go(-2);
history.go(0)相当于刷新当前页面。

注意，移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页。`,
        score: 3,
      },
      {
        question: `History.pushState() 有什么用？`,
        answer: `History.pushState()方法用于在历史中添加一条记录。

window.history.pushState(state, title, url)
该方法接受三个参数，依次为：

state：一个与添加的记录相关联的状态对象，主要用于popstate事件。该事件触发时，该对象会传入回调函数。也就是说，浏览器会将这个对象序列化以后保留在本地，重新载入这个页面的时候，可以拿到这个对象。如果不需要这个对象，此处可以填null。
title：新页面的标题。但是，现在所有浏览器都忽视这个参数，所以这里可以填空字符串。
url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。
假定当前网址是example.com/1.html，使用pushState()方法在浏览记录（History 对象）中添加一个新记录。

var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
添加新记录后，浏览器地址栏立刻显示example.com/2.html，但并不会跳转到2.html，甚至也不会检查2.html是否存在，它只是成为浏览历史中的最新记录。这时，在地址栏输入一个新的地址(比如访问google.com)，然后点击了倒退按钮，页面的 URL 将显示2.html；你再点击一次倒退按钮，URL 将显示1.html。

总之，pushState()方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有反应。`,
        score: 3,
      },
      {
        question: `History.replaceState() 有什么用？`,
        answer: `History.replaceState()方法用来修改 History 对象的当前记录，其他都与pushState()方法一模一样。

假定当前网页是example.com/example.html。

history.pushState({page: 1}, 'title 1', '?page=1')
// URL 显示为 http://example.com/example.html?page=1

history.pushState({page: 2}, 'title 2', '?page=2');
// URL 显示为 http://example.com/example.html?page=2

history.replaceState({page: 3}, 'title 3', '?page=3');
// URL 显示为 http://example.com/example.html?page=3

history.back()
// URL 显示为 http://example.com/example.html?page=1

history.back()
// URL 显示为 http://example.com/example.html

history.go(2)
// URL 显示为 http://example.com/example.html?page=3`,
        score: 1,
      },
      {
        question: `popstate 事件 有什么用？`,
        answer: `每当同一个文档的浏览历史（即history对象）出现变化时，就会触发popstate事件。

注意，仅仅调用pushState()方法或replaceState()方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用History.back()、History.forward()、History.go()方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

使用的时候，可以为popstate事件指定回调函数。

window.onpopstate = function (event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
};

// 或者
window.addEventListener('popstate', function(event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
});
回调函数的参数是一个event事件对象，它的state属性指向pushState和replaceState方法为当前 URL 所提供的状态对象（即这两个方法的第一个参数）。上面代码中的event.state，就是通过pushState和replaceState方法，为当前 URL 绑定的state对象。

这个state对象也可以直接通过history对象读取。

var currentState = history.state;
注意，页面第一次加载的时候，浏览器不会触发popstate事件。`,
        score: 3,
      },
      {
        question: `// 当前网址为
// http://user:passwd@www.example.com:4097/path/a.html?x=111#part1

document.location.href
document.location.protocol
document.location.host
document.location.hostname
document.location.port
document.location.pathname
document.location.search
document.location.hash
document.location.username
document.location.password
document.location.origin`,
        answer: `Location.href：整个 URL。
Location.protocol：当前 URL 的协议，包括冒号（:）。
Location.host：主机。如果端口不是协议默认的80和433，则还会包括冒号（:）和端口。
Location.hostname：主机名，不包括端口。
Location.port：端口号。
Location.pathname：URL 的路径部分，从根路径/开始。
Location.search：查询字符串部分，从问号?开始。
Location.hash：片段字符串部分，从#开始。
Location.username：域名前面的用户名。
Location.password：域名前面的密码。
Location.origin：URL 的协议、主机名和端口。

// 当前网址为
// http://user:passwd@www.example.com:4097/path/a.html?x=111#part1
document.location.href
// "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
document.location.protocol
// "http:"
document.location.host
// "www.example.com:4097"
document.location.hostname
// "www.example.com"
document.location.port
// "4097"
document.location.pathname
// "/path/a.html"
document.location.search
// "?x=111"
document.location.hash
// "#part1"
document.location.username
// "user"
document.location.password
// "passwd"
document.location.origin
// "http://user:passwd@www.example.com:4097"`,
        score: 5,
      },
      {
        question: `编码、转码时会用上什么方法，都有什么用？`,
        answer: `网页的 URL 只能包含合法的字符。合法字符分成两类。

URL 元字符：分号（;），逗号（,），斜杠（/），问号（?），冒号（:），at（@），&，等号（=），加号（+），美元符号（$），井号（#）
语义字符：a-z，A-Z，0-9，连词号（-），下划线（_），点（.），感叹号（!），波浪线（~），星号（*），单引号（'），圆括号（()）
除了以上字符，其他字符出现在 URL 之中都必须转义，规则是根据操作系统的默认编码，将每个字节转为百分号（%）加上两个大写的十六进制字母。

encodeURI()方法用于转码整个 URL。它的参数是一个字符串，代表整个 URL。它会将元字符和语义字符之外的字符，都进行转义。

encodeURI('http://www.example.com/q=春节')
// "http://www.example.com/q=%E6%98%A5%E8%8A%82"

encodeURIComponent()方法用于转码 URL 的组成部分，会转码除了语义字符之外的所有字符，即元字符也会被转码。所以，它不能用于转码整个 URL。它接受一个参数，就是 URL 的片段。

encodeURIComponent('春节')
// "%E6%98%A5%E8%8A%82"
encodeURIComponent('http://www.example.com/q=春节')
// "http%3A%2F%2Fwww.example.com%2Fq%3D%E6%98%A5%E8%8A%82"

上面代码中，encodeURIComponent()会连 URL 元字符一起转义，所以如果转码整个 URL 就会出错。

decodeURI()方法用于整个 URL 的解码。它是encodeURI()方法的逆运算。它接受一个参数，就是转码后的 URL。

decodeURI('http://www.example.com/q=%E6%98%A5%E8%8A%82')
// "http://www.example.com/q=春节"

decodeURIComponent()用于URL 片段的解码。它是encodeURIComponent()方法的逆运算。它接受一个参数，就是转码后的 URL 片段。

decodeURIComponent('%E6%98%A5%E8%8A%82')
// "春节"`,
        score: 5,
      },
    ],
  },
];

let es6 = [
  {
    name: "常量、变量基础",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); `,
        answer: `使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。
另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。`,
        score: 1,
      },
      {
        question: `什么叫变量提升？`,
        answer: `变量提升会将变量声明提升到它所在作用域的最开始的部分。函数提升优先级大于变量提升。
var存在变量提升，let和const不存在变量提升，即在变量只能在声明之后使用，否在会报错。`,
        score: 3,
      },
      {
        question: `什么叫暂时性死区？`,
        answer: `在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”。

“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。

typeof x; // ReferenceError
let x;
上面代码中，变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。

作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。

typeof undeclared_variable // "undefined"
上面代码中，undeclared_variable是一个不存在的变量名，结果返回“undefined”。所以，在没有let之前，typeof运算符是百分之百安全的，永远不会报错。现在这一点不成立了。这样的设计是为了让大家养成良好的编程习惯，变量一定要在声明之后使用，否则就报错。`,
        score: 2,
        img: "letconst.png",
      },
      {
        question: `块级作用域和立即执行函数有什么区别？`,
        answer: `没什么区别，以前ES5没有引入let，只有全局作用域和函数作用域，没有块级作用域，只能用立即执行函数手动形成块级作用域。块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。`,
        score: 1,
      },
      {
        question: `let const属于顶层属性吗？`,
        answer: `不属于。
顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。
ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。`,
        score: 1,
      },
      {
        question: `什么叫解构？`,
        answer: `ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
如果解构不成功，变量的值就等于undefined。`,
        score: 3,
      },
      {
        question: `let [x, y] = [1, 2, 3];
x // 
y // 

let [a, [b], d] = [1, [2, 3], 4];
a // 
b // 
d // `,
        answer: `let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4`,
        score: 2,
      },
      {
        question: `let [foo = true] = [];
foo // 

let [x, y = 'b'] = ['a']; // 
let [x, y = 'b'] = ['a', undefined]; // `,
        answer: `let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'`,
        score: 2,
      },
      {
        question: `function f() {
  console.log('aaa');
}

let [x = f()] = [1];`,
        answer: `如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
但在上述表达式中，x被赋为1了，所以这个默认值不会被执行`,
        score: 1,
      },
      {
        question: `let [x = 1, y = x] = [];     // 
let [x = 1, y = x] = [2];    // 
let [x = 1, y = x] = [1, 2]; // 
let [x = y, y = 1] = [];     // `,
        answer: `let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined`,
        score: 2,
      },
      {
        question: `let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz //
foo //`,
        answer: `let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error: foo is not defined

对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。`,
        score: 2,
      },
      {
        question: `let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
x // 
y // 
p // `,
        answer: `let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p, p: [x, { y }] } = obj;
x // "Hello"
y // "World"
p // ["Hello", {y: "World"}]`,
        score: 2,
      },
      {
        question: `var {x = 3} = {x: undefined};
x // 

var {x = 3} = {x: null};
x // `,
        answer: `var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null`,
        score: 1,
      },
      {
        question: `let { prop: x } = undefined; // 
let { prop: y } = null; // `,
        answer: `解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError`,
        score: 1,
      },
      {
        question: `[[1, 2], [3, 4]].map(([a, b]) => a + b);`,
        answer: `[ 3, 7 ]`,
        score: 1,
      },
      {
        question: `function move({x = 0, y = 0} = {}) {
          return [x, y];
        }
        
move({x: 3, y: 8}); // 
move({x: 3}); // 
move({}); // 
move(); // `,
        answer: `上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
        
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]`,
        score: 1,
      },
      {
        question: `[1, undefined, 3].map((x = 'yes') => x);`,
        answer: `undefined就会触发函数参数的默认值。

[1, undefined, 3].map((x = 'yes') => x);

// [ 1, 'yes', 3 ]`,
        score: 1,
      },
      {
        question: `const school = {
  classes: {
      stu: {
        name: 'Bob',
        age: 24,
      }
  }
}
请用更加简洁清晰的方式给变量name赋值`,
        answer: `像此处的 name 这个变量，嵌套了四层，此时如果仍然尝试老方法来提取它：

const { name } = school

显然是不奏效的，因为 school 这个对象本身是没有 name 这个属性的，name 位于 school 对象的“儿子的儿子”对象里面。要想把 name 提取出来，一种比较笨的方法是逐层解构：

const { classes } = school
const { stu } = classes
const { name } = stu
name // 'Bob'

但是还有一种更标准的做法，可以用一行代码来解决这个问题：

const { classes: { stu: { name } }} = school     
console.log(name)  // 'Bob'

可以在解构出来的变量名右侧，通过冒号+{目标属性名}这种形式，进一步解构它，一直解构到拿到目标数据为止。`,
        score: 2,
      },
      {
        question: `变量的解构赋值用途有哪些？`,
        answer: `（1）交换变量的值

let x = 1;
let y = 2;

[x, y] = [y, x];
上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

（2）从函数返回多个值

函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。

// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
（3）函数参数的定义

解构赋值可以方便地将一组参数与变量名对应起来。

// 参数是一组有次序的值
function f([x, y, z]) { ... }
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) { ... }
f({z: 3, y: 2, x: 1});
（4）提取 JSON 数据

解构赋值对提取 JSON 对象中的数据，尤其有用。

let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]
上面代码可以快速提取 JSON 数据的值。

（5）函数参数的默认值

jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};
指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

（6）遍历 Map 结构

任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world
如果只想获取键名，或者只想获取键值，可以写成下面这样。

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值
for (let [,value] of map) {
  // ...
}
（7）输入模块的指定方法

加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

const { SourceMapConsumer, SourceNode } = require("source-map");`,
        score: 4,
      },
    ],
  },
  {
    name: "ES6扩展方法",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `RegExp中的u修饰符有什么用？`,
        answer: `ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\\uFFFF的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。

/^\\uD83D/u.test('\\uD83D\\uDC2A') // false
/^\\uD83D/.test('\\uD83D\\uDC2A') // true
上面代码中，\\uD83D\\uDC2A是一个四个字节的 UTF-16 编码，代表【一个】字符。但是，ES5 不支持四个字节以上的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为true。加了u修饰符以后，ES6 就会识别其为一个字符，所以第一行代码结果为false。`,
        score: 2,
      },
      {
        question: `Unicode、UTF-8、UTF-16、UTF-32有什么区别？`,
        answer: `Unicode 是编码字符集（字符集），ASCII码 只需一个字节，非ASCII码 需2~4个字节，而 UTF-8、UTF-16、UTF-32是字符集编码（编码规则），所有 Unicode字符 都是2个字节；
UTF-16 使用变长码元序列的编码方式，相较于定长码元序列的 UTF-32算法更复杂，甚至比同样是变长码元序列的 UTF-8也更为复杂，因为其引入了独特的代理对这样的代理机制；
UTF-8需要判断每个字节中的开头标志信息，所以如果某个字节在传送过程中出错了，就会导致后面的字节也会解析出错；而 UTF-16不会判断开头标志，即使错也只会错一个字符，所以容错能力教强；
如果字符内容全部英文或英文与其他文字混合，但英文占绝大部分，那么用UTF-8就比 UTF-16节省了很多空间；而如果字符内容全部是中文这样类似的字符或者混合字符中中文占绝大多数，那么 UTF-16就占优势了，可以节省很多空间；`,
        score: 2,
      },
      {
        question: `如果拷贝的一段模板字符串中有前后换行，可以怎么去除？`,
        answer: `所有模板字符串的空格和换行，都是被保留的，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。

$('#list').html(\`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
\`.trim());`,
        score: 1,
      },
      {
        question: `什么是标签模板，他有什么重要作用？`,
        answer: `模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。

alert\`hello\`
// 等同于
alert(['hello'])
标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。

“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。

let message =
  SaferHTML\`<p>\${sender} has sent you a message.</p>\`;

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}
上面代码中，sender变量往往是用户提供的，经过SaferHTML函数处理，里面的特殊字符都会被转义。

标签模板的另一个应用，就是多语言转换（国际化处理）。

i18n\`Welcome to \${siteName}, you are visitor number \${visitorNumber}!\`
// "欢迎访问xxx，您是第xxxx位访问者！"`,
        score: 2,
      },
      {
        question: `String.raw()有什么用？`,
        answer: `ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。

String.raw\`Hi\\n${2 + 3}!\`
// 实际返回 "Hi\\\\n5!"，显示的是转义后的结果 "Hi\\n5!"

String.raw\`Hi\\u000A!\`;
// 实际返回 "Hi\\\\u000A!"，显示的是转义后的结果 "Hi\\u000A!"
如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义。

String.raw\`Hi\\n\`
// 返回 "Hi\\\\\\\\\n"

String.raw\`Hi\\\\n\` === "Hi\\\\\\\\n" // true`,
        score: 1,
      },
      {
        question: `includes(), startsWith(), endsWith() 有什么用？`,
        answer: `传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

includes()：返回布尔值，表示是否找到了参数字符串。
startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
这三个方法都支持第二个参数，表示开始搜索的位置。

let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。`,
        score: 3,
      },
      {
        question: `y 修饰符 有什么用？`,
        answer: `除了u修饰符，ES6 还为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符。

        y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始（相当于是头部匹配，/^...(正则式)/）。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
        
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null

上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。`,
        score: 1,
      },
      {
        question: `数值是否是有限值，数值是否是NaN可以用Number什么方法判断？与传统方法有什么区别？`,
        answer: `Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。

Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。

Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
注意，如果参数类型不是数值，Number.isFinite一律返回false。

Number.isNaN()用来检查一个值是否为NaN。

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
如果参数类型不是NaN，Number.isNaN一律返回false。

它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false`,
        score: 2,
      },
      {
        question: `Number.parseInt(), Number.parseFloat()与全局方法有什么区别？`,
        answer: `没什么区别。ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。`,
        score: 1,
      },
      {
        question: `Math.trunc() 作用？`,
        answer: `Math.trunc方法用于去除一个数的小数部分，返回整数部分。

Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
对于非数值，Math.trunc内部使用Number方法将其先转为数值。

Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0
对于空值和无法截取整数的值，返回NaN。

Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN
对于没有部署这个方法的环境，可以用下面的代码模拟。

Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};`,
        score: 1,
      },
      {
        question: `BigInt 数据类型是什么？`,
        answer: `ES2020 引入了一种新的数据类型 BigInt（大整数），这是 ECMAScript 的第八种数据类型（另外新增的是 Symbol）。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
        
为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。

1234 // 普通整数
1234n // BigInt

// BigInt 的运算
1n + 2n // 3n`,
        score: 1,
      },
      {
        question: `BigInt 数据类型是什么？`,
        answer: `ES2020 引入了一种新的数据类型 BigInt（大整数），这是 ECMAScript 的第八种数据类型（另外新增的是 Symbol）。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。

const a = 2172141653n;
const b = 15346349309n; // 后缀n

// BigInt 可以保持精度
a * b // 33334444555566667777n

// 普通整数无法保持精度
Number(a) * Number(b) // 33334444555566670000
        
为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。

1234 // 普通整数
1234n // BigInt

// BigInt 的运算
1n + 2n // 3n`,
        score: 1,
      },
      {
        question: `BigInt 数据类型是什么？`,
        answer: `ES2020 引入了一种新的数据类型 BigInt（大整数），这是 ECMAScript 的第八种数据类型（另外新增的是 Symbol）。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。
        
为了与 Number 类型区别，BigInt 类型的数据必须添加后缀n。

1234 // 普通整数
1234n // BigInt

// BigInt 的运算
1n + 2n // 3n`,
        score: 1,
      },
      {
        question: `function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // 
foo({x: 1}) // 
foo({x: 1, y: 2}) // 
foo() // `,
        answer: `function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5
foo({x: 1}) // 1 5
foo({x: 1, y: 2}) // 1 2
foo() // TypeError: Cannot read property 'x' of undefined

上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。只有当函数foo()的参数是一个对象时，变量x和y才会通过解构赋值生成。如果函数foo()调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。

function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5`,
        score: 3,
      },
      {
        question: `// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // 
m2() // 

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // 
m2({x: 3, y: 8}) // 

// x 有值，y 无值的情况
m1({x: 3}) // 
m2({x: 3}) // 

// x 和 y 都无值的情况
m1({}) // 
m2({}) // 

m1({z: 3}) // 
m2({z: 3}) // `,
        answer: `// 写法一
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]`,
        score: 5,
      },
      {
        question: `function f(x = 1, y) {
  return [x, y];
}

f() // 
f(2) // 
f(, 1) // 
f(undefined, 1) // 

// 例二
function f(x, y = 5, z) {
  return [x, y, z];
}

f() // 
f(1) // 
f(1, ,2) // 
f(1, undefined, 2) // `,
        answer: `function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined]
f(, 1) // 报错
f(undefined, 1) // [1, 1]

// 例二
function f(x, y = 5, z) {
  return [x, y, z];
}

f() // [undefined, 5, undefined]
f(1) // [1, 5, undefined]
f(1, ,2) // 报错
f(1, undefined, 2) // [1, 5, 2]

上面代码中，有默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。

如果传入undefined，将触发该参数等于默认值，null则没有这个效果。`,
        score: 3,
      },
      {
        question: `箭头函数的作用？有什么注意事项`,
        answer: `箭头函数使得表达更加简洁。
        
注意点：（1）箭头函数没有自己的this对象。对于普通函数来说，内部的this指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的this对象（不能当作构造函数），内部的this就是定义时上层作用域中的this。也就是说，箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的。

function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo.call({ id: 42 });
// id: 42
上面代码中，setTimeout()的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以打印出来的是42。

（2）不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。
（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数（也就是自定义的参数数组）代替。
（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。`,
        score: 5,
      },
      {
        question: `function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// `,
        answer: `function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象，普通函数作用域是全局对象）。所以，3100 毫秒之后，timer.s1被更新了 3 次，而timer.s2一次都没更新。
箭头函数实际上可以让this指向固定化，绑定this使得它不再可变，这种特性很有利于封装回调函数。

这种写法，就类似于：
// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

// ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}`,
        score: 3,
        img: "箭头函数.png",
      },
      {
        question: `function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // 
var t2 = f().call({id: 3})(); // 
var t3 = f()().call({id: 4}); // `,
        answer: `function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

this的指向只有一个，就是函数foo的this，这是因为所有的内层函数都是箭头函数，都没有自己的this，它们的this其实都是最外层foo函数的this。所以不管怎么嵌套，t1、t2、t3都输出同样的结果。如果这个例子的所有内层函数都写成普通函数，那么每个函数的this都指向运行时所在的不同对象。

除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。也不能用call()、apply()、bind()这些方法去改变this的指向。`,
        score: 3,
        img: "箭头函数.png",
      },
      {
        question: `什么是尾调用，有什么用？`,
        answer: `尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。

function f(x){
  return g(x);
}
上面代码中，函数f的最后一步是调用函数g，这就叫尾调用。`,
        score: 3,
      },
      {
        question: `const [first, ...rest] = [1, 2, 3, 4, 5];
first // 
rest  // 

const [first, ...rest] = [];
first // 
rest  // 

const [first, ...rest] = ["foo"];
first  // 
rest   // 

'x\\uD83D\\uDE80y'.length // 
[...'x\\uD83D\\uDE80y'].length // `,
        answer: `const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []

'x\\uD83D\\uDE80y'.length // 4
[...'x\\uD83D\\uDE80y'].length // 3`,
        score: 3,
      },
      {
        question: `Array什么方法可以转数组？`,
        answer: `Array.from()方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。

Array.from()还可以接受一个函数作为第二个参数，作用类似于数组的map()方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]

下面是一个类似数组的对象，Array.from()将它转为真正的数组。

let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5 的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6 的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']


除此之外，Array.of()方法也可以转数组，用的人相对较少，主要是弥补过去new Array的不足

Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]`,
        score: 5,
      },
      {
        question: `copyWithin()作用？`,
        answer: `数组实例的copyWithin()方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

Array.prototype.copyWithin(target, start = 0, end = this.length)
它接受三个参数。

target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
这三个参数都应该是数值，如果不是，会自动转为数值。

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
上面代码表示将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2。`,
        score: 3,
      },
      {
        question: `[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// 

[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// 

[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// 

let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// 

[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// `,
        answer: `// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]`,
        score: 3,
      },
      {
        question: `find()，findIndex()，findLast()，findLastIndex()作用？`,
        answer: `数组实例的find()方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

[1, 4, -5, 10].find((n) => n < 0)
// -5

[1, 5, 10, 15].find(function(value, index, arr) {
  return value > 9;
}) // 10

数组实例的findIndex()方法的用法与find()方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

ES2022 新增了两个方法findLast()和findLastIndex()，从数组的最后一个成员开始，依次向前检查，其他都保持不变。`,
        score: 5,
      },
      {
        question: `fill()作用？`,
        answer: `fill方法使用给定值，填充一个数组。

['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]
上面代码表明，fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。

fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
上面代码表示，fill方法从 1 号位开始，向原数组填充 7，到 2 号位之前结束。

注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。`,
        score: 2,
      },
      {
        question: `entries()，keys() 和 values()可以使用什么方式进行遍历，除了循环外，还可以通过什么方法手动遍历？`,
        answer: `ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。

let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']`,
        score: 4,
      },
      {
        question: `includes()相较于indexOf()有什么优点？`,
        answer: `indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。

[NaN].indexOf(NaN)
// -1

includes使用的是不一样的判断算法，就没有这个问题。

let arr = [undefined, null, NaN];
  console.log(arr.includes(undefined), arr.includes(null), arr.includes(NaN));
// true true true`,
        score: 2,
      },
      {
        question: `Array.prototype.flat()有什么用？`,
        answer: `Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]`,
        score: 2,
      },
      {
        question: `如果我要对一个数组进行分组，可以使用Array中的什么方法？`,
        answer: `group()的参数是一个分组函数，原数组的每个成员都会依次执行这个函数，确定自己是哪一个组。

const array = [1, 2, 3, 4, 5];

array.group((num, index, array) => {
  return num % 2 === 0 ? 'even': 'odd';
});
// { odd: [1, 3, 5], even: [2, 4] }

group()的分组函数可以接受三个参数，依次是数组的当前成员、该成员的位置序号、原数组（上例是num、index和array）。分组函数的返回值应该是字符串（或者可以自动转为字符串），以作为分组后的组名。

group()的返回值是一个对象，该对象的键名就是每一组的组名，即分组函数返回的每一个字符串（上例是even和odd）；该对象的键值是一个数组，包括所有产生当前键名的原数组成员。

下面是另一个例子。

[6.1, 4.2, 6.3].group(Math.floor)
// { '4': [4.2], '6': [6.1, 6.3] }
上面示例中，Math.floor作为分组函数，对原数组进行分组。它的返回值原本是数值，这时会自动转为字符串，作为分组的组名。原数组的成员根据分组函数的运行结果，进入对应的组。

groupToMap()的作用和用法与group()完全一致，唯一的区别是返回值是一个 Map 结构，而不是对象。Map 结构的键名可以是各种值，所以不管分组函数返回什么值，都会直接作为组名（Map 结构的键名），不会强制转为字符串。这对于分组函数返回值是对象的情况，尤其有用。

const array = [1, 2, 3, 4, 5];

const odd  = { odd: true };
const even = { even: true };
array.groupToMap((num, index, array) => {
  return num % 2 === 0 ? even: odd;
});
//  Map { {odd: true}: [1, 3, 5], {even: true}: [2, 4] }`,
        score: 5,
      },
      {
        question: `数组循环时，哪些情况下会遍历空位，哪些情况下不会？`,
        answer: `ES5 对空位的处理，已经很不一致了，大多数情况下会忽略空位。

forEach(), filter(), reduce(), every(), for...in循环 和some()都会跳过空位。
map()会跳过空位，但会保留这个值
join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。

// map方法
[,'a'].map(x => 1) // [,1]

// join方法
[,'a',undefined,null].join('#') // "#a##"

// toString方法
[,'a',undefined,null].toString() // ",a,,"

ES6 则是明确将空位转为undefined。

Array.from()方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。

Array.from(['a',,'b'])
// [ "a", undefined, "b" ]
扩展运算符（...）也会将空位转为undefined。

[...['a',,'b']]
// [ "a", undefined, "b" ]
copyWithin()会连空位一起拷贝。

[,'a','b',,].copyWithin(2,0) // [,"a",,"a"]
fill()会将空位视为正常的数组位置。

new Array(3).fill('a') // ["a","a","a"]
for...of循环也会遍历空位。

let arr = [, ,];
for (let i of arr) {
  console.log(1);
}
// 1
// 1
上面代码中，数组arr有两个空位，for...of并没有忽略它们。如果改成map()方法遍历，空位是会跳过的。

entries()、keys()、values()、find()和findIndex()会将空位处理成undefined。

// entries()
[...[,'a'].entries()] // [[0,undefined], [1,"a"]]

// keys()
[...[,'a'].keys()] // [0,1]

// values()
[...[,'a'].values()] // [undefined,"a"]

// find()
[,'a'].find(x => true) // undefined

// findIndex()
[,'a'].findIndex(x => true) // 0
由于空位的处理规则非常不统一，所以建议避免出现空位。`,
        score: 2,
      },
      {
        question: `简写的对象函数不能用在什么地方？
f() {...}`,
        answer: `简写的对象方法不能用作构造函数，会报错。

const obj = {
  f() {
    this.foo = 'bar';
  }
};

new obj.f() // 报错
上面代码中，f是一个简写的对象方法，所以obj.f不能当作构造函数使用。

虽然如此，但简写方法可以用super关键字，对象的普通方法或箭头函数中使用反而会报错：

const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto);
obj.find() // "hello"`,
        score: 1,
      },
      {
        question: `使用属性名表示法xx[xxx]，应注意什么？`,
        answer: `属性名表达式与简洁表示法，不能同时使用，会报错。

// 报错（':' expected.）
const foo = 'bar';
const bar = 'abc';
const baz = { [foo] };

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc'};

const bar = 'abc';
const baz = { bar };

注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。

const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

myObject // Object {[object Object]: "valueB"}`,
        score: 2,
      },
      {
        question: `目前，有哪四个遍历操作会忽略enumerable为false的属性？`,
        answer: `for...in循环：只遍历对象自身的和继承的可枚举的属性。
Object.keys()：返回对象自身的所有可枚举的属性的键名。
JSON.stringify()：只串行化对象自身的可枚举的属性。
Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
这四个操作之中，前三个是 ES5 就有的，最后一个Object.assign()是 ES6 新增的。其中，只有for...in会返回继承的属性，其他三个方法都会忽略继承的属性，只处理对象自身的属性。实际上，引入“可枚举”（enumerable）这个概念的最初目的，就是让某些属性可以规避掉for...in操作，不然所有内部属性和方法都会被遍历到。比如，对象原型的toString方法，以及数组的length属性，就通过“可枚举性”，从而避免被for...in遍历到。

另外，ES6 规定，所有 Class 的原型的方法都是不可枚举的。
总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。所以，尽量不要用for...in循环，而用Object.keys()代替。`,
        score: 2,
      },
      {
        question: `ES6遍历对象属性，有哪些方法，哪些方法可以用于遍历Symbol？`,
        answer: `（1）for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

（2）Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

（3）Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

（4）Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

（5）Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

首先遍历所有数值键，按照数值升序排列。
其次遍历所有字符串键，按照加入时间升序排列。
最后遍历所有 Symbol 键，按照加入时间升序排列。

Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
// ['2', '10', 'b', 'a', Symbol()]
上面代码中，Reflect.ownKeys方法返回一个数组，包含了参数对象的所有属性。这个数组的属性次序是这样的，首先是数值属性2和10，其次是字符串属性b和a，最后是 Symbol 属性。`,
        score: 5,
      },
      {
        question: `指向当前对象的原型对象，用什么关键字？`,
        answer: `this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。

const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto);
obj.find() // "hello"

上面代码中，对象obj.find()方法之中，通过super.foo引用了原型对象proto的foo属性。

注意，super关键字表示原型对象时，只能用在【对象的方法】之中，用在其他地方都会报错。

// 报错
const obj = {
  foo: super.foo
}

// 报错
const obj = {
  foo: () => super.foo
}

// 报错
const obj = {
  foo: function () {
    return super.foo
  }
}

上面三种super的用法都会报错，因为对于 JavaScript 引擎来说，这里的super都没有用在对象的方法之中。第一种写法是super用在属性里面，第二种和第三种写法是super用在一个函数里面，然后赋值给foo属性。目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。`,
        score: 2,
      },
      {
        question: `let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 
y // 
z // 

let { ...z } = null; // 
let { ...z } = undefined; // 

let { ...x, y, z } = someObject; // 
let { x, ...y, ...z } = someObject; // 

let obj = { a: { b: 1 } };
let { ...x } = obj;
obj.a.b = 2;
x.a.b // `,
        answer: `let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }

let { ...z } = null; // 运行时错误
let { ...z } = undefined; // 运行时错误

let { ...x, y, z } = someObject; // 句法错误
let { x, ...y, ...z } = someObject; // 句法错误

let obj = { a: { b: 1 } };
let { ...x } = obj;
obj.a.b = 2;
x.a.b // 2

注意，解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。`,
        score: 4,
      },
      {
        question: `let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let { ...o3 } = o2;
o3 // 
o3.a // 

const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...newObj } = o;
let { y, z } = newObj;
x // 
y // 
z // 

let { x, ...{ y, z } } = o; //`,
        answer: `let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let { ...o3 } = o2;
o3 // { b: 2 }
o3.a // undefined

扩展运算符的解构赋值，不能复制继承自原型对象的属性。

const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...newObj } = o;
let { y, z } = newObj;
x // 1
y // undefined
z // 3

上面代码中，变量x是单纯的解构赋值，所以可以读取对象o继承的属性（类似你数组用原型length的方法）；变量y和z是扩展运算符的解构赋值，只能读取对象o自身的属性，所以变量z可以赋值成功，变量y取不到值。ES6 规定，变量声明语句之中，如果使用解构赋值，扩展运算符后面必须是一个变量名，而不能是一个解构赋值表达式，所以上面代码引入了中间变量newObj，如果写成下面这样会报错。

ES6 规定，变量声明语句之中，如果使用解构赋值，扩展运算符后面必须是一个变量名，而不能是一个解构赋值表达式，所以上面代码引入了中间变量newObj，如果写成下面这样会报错。

let { x, ...{ y, z } } = o;
// SyntaxError: ... must be followed by an identifier in declaration contexts`,
        score: 4,
      },
      {
        question: `let z = { a: 3, b: 4 };
let n = { ...z };
n // 

let foo = { ...['a', 'b', 'c'] };
foo // 

{...{}, a: 1}
// 

{...1} // 

{...undefined} // 

{...null} // `,
        answer: `let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }

let foo = { ...['a', 'b', 'c'] };
foo // {0: "a", 1: "b", 2: "c"}

{...{}, a: 1}
// { a: 1 }

// 等同于 {...Object(1)}
{...1} // {}

// 等同于 {...Object(undefined)}
{...undefined} // {}

// 等同于 {...Object(null)}
{...null} // {}`,
        score: 4,
      },
      {
        question: `Object.is与严格相等运算符有什么不同？`,
        answer: `1、+0 -0 不相等
2、NaN 自身是相等的

值得一提的是，严格相等的时候，undefined和null自身也是相等的`,
        score: 2,
      },
      {
        question: `Object.assign()用法？`,
        answer: `用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
        
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
Object.assign()方法的第一个参数是目标对象，后面的参数都是源对象。

注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
如果只有一个参数，Object.assign()会直接返回该参数。

const obj = {a: 1};
Object.assign(obj) === obj // true

属性名为 Symbol 值的属性，也会被Object.assign()拷贝。

Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
// { a: 'b', Symbol(c): 'd' }`,
        score: 2,
      },
      {
        question: `Object.assign(undefined) // 
Object.assign(null) // 
        
let obj = {a: 1};
Object.assign(obj, undefined) === obj // 
Object.assign(obj, null) === obj // 

const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }`,
        answer: `Object.assign(undefined) // 报错
Object.assign(null) // 报错
        
let obj = {a: 1};
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true

const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }`,
        score: 3,
      },
      {
        question: `Object.assign([1, 2, 3], [4, 5]) // 

const source = {
  get foo() { return 1 }
};
const target = {};

Object.assign(target, source)
// `,
        answer: `Object.assign()可以用来处理数组，但是会把数组视为对象。

Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
上面代码中，Object.assign()把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。

Object.assign()只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。

const source = {
  get foo() { return 1 }
};
const target = {};

Object.assign(target, source)
// { foo: 1 }
上面代码中，source对象的foo属性是一个取值函数，Object.assign()不会复制这个取值函数，只会拿到值以后，将这个值复制过去。`,
        score: 3,
      },
      {
        question: `如果我想知道该对象所有属性描述，可以用什么方法？`,
        answer: `Object.getOwnPropertyDescriptors()
        
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }`,
        score: 2,
      },
      {
        question: `为什么不建议使用__proto__属性？`,
        answer: `该属性没有写入 ES6 的正文，而是写入了附录，原因是__proto__前后的双下划线，说明它本质上是一个内部属性，而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6。标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。`,
        score: 2,
      },
      {
        question: `如果将一个键值对数组转换成对象，可以用什么方法？`,
        answer: `Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。

Object.fromEntries([
  ['foo', 'bar'],
  ['baz', 42]
])
// { foo: "bar", baz: 42 }

该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。

// 例一
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

Object.fromEntries(entries)
// { foo: "bar", baz: 42 }

// 例二
const map = new Map().set('foo', true).set('bar', false);
Object.fromEntries(map)
// { foo: true, bar: false }`,
        score: 2,
      },
    ],
  },
  {
    name: "Symbol",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `Symbol是什么？`,
        answer: `ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它属于 JavaScript 语言的原生数据类型之一，其他数据类型是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、大整数（BigInt）、对象（Object）。

Symbol 值通过Symbol()函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

let s = Symbol();

typeof s
// "symbol"
上面代码中，变量s就是一个独一无二的值。typeof运算符的结果，表明变量s是 Symbol 数据类型，而不是字符串之类的其他类型。

注意，Symbol()函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象，所以不能使用new命令来调用。另外，由于 Symbol 值不是对象，所以也不能添加属性。基本上，它是一种类似于字符串的数据类型。`,
        score: 3,
      },
      {
        question: `Symbol里面的参数如果是对象，会返回什么？`,
        answer: `Symbol()函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述。这主要是为了在控制台显示，或者转为字符串时，比较容易区分。

let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"

如果 Symbol 的参数是一个对象，就会调用该对象的toString()方法，将其转为字符串，然后才生成一个 Symbol 值。

const obj = {
  toString() {
    return 'abc';
  }
};
const sym = Symbol(obj);
sym // Symbol(abc)
注意，Symbol()函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。`,
        score: 2,
      },
      {
        question: `Symbol与其他类型的值运算，会怎么样？`,
        answer: `Symbol 值不能与其他类型的值进行运算，会报错。

let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
\`your symbol is \${sym}\`
// TypeError: can't convert symbol to string

另外，Symbol 值也可以转为布尔值，但是不能转为数值。

let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError`,
        score: 2,
      },
      {
        question: `Symbol与其他类型的值运算，会怎么样？`,
        answer: `Symbol 值不能与其他类型的值进行运算，会报错。

let sym = Symbol('My symbol');

"your symbol is " + sym
// TypeError: can't convert symbol to string
\`your symbol is \${sym}\`
// TypeError: can't convert symbol to string

另外，Symbol 值也可以转为布尔值，但是不能转为数值。

let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError`,
        score: 2,
      },
      {
        question: `使用symbol属性名有哪些注意事项？`,
        answer: `Symbol 值作为对象属性名时，不能用点运算符。在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

const mySymbol = Symbol();
a[mySymbol]

let s = Symbol();

let obj = {
  [s]: function (arg) { ... }
};
`,
        score: 3,
      },
      {
        question: `常量使用symbol属性有什么好处？`,
        answer: `const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}

常量使用 Symbol 值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的switch语句会按设计的方式工作。
还有一点需要注意，Symbol 值作为属性名时，该属性还是公开属性（可以被getOwnPropertySymbols查到），不是私有属性。`,
        score: 2,
      },
      {
        question: `如果想要使用同一个symbol值，可以怎么做？`,
        answer: `有时，我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');

s1 === s2 // true

上面代码中，s1和s2都是 Symbol 值，但是它们都是由同样参数的Symbol.for方法生成的，所以实际上是同一个值。

Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30 次，每次都会返回同一个 Symbol 值，但是调用Symbol("cat")30 次，会返回 30 个不同的 Symbol 值。

Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。

let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"`,
        score: 2,
      },
    ],
  },
  {
    name: "Set和Map",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `Set是什么？`,
        answer: `ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成 Set 数据结构。

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4

上面代码通过add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。`,
        score: 3,
      },
      {
        question: `如何利用Set去除数组或字符串重复元素？`,
        answer: `上面代码也展示了一种去除数组重复成员的方法。

// 去除数组的重复成员
[...new Set(array)]
上面的方法也可以用于，去除字符串里面的重复字符。

[...new Set('ababbc')].join('')
// "abc"`,
        score: 2,
      },
      {
        question: `Set加入多次NaN会怎样？`,
        answer: `只会加一次，Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。`,
        score: 2,
      },
      {
        question: `Set有哪两个属性，哪四个方法？`,
        answer: `Set 结构的实例有以下属性。

Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
Set.prototype.clear()：清除所有成员，没有返回值。`,
        score: 3,
      },
      {
        question: `Set有哪些遍历方法？`,
        answer: `Set 结构的实例有四个遍历方法，可以用于遍历成员。

Set.prototype.keys()：返回键名的遍历器
Set.prototype.values()：返回键值的遍历器
Set.prototype.entries()：返回键值对的遍历器
Set.prototype.forEach()：使用回调函数遍历每个成员

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

上面代码中，entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。`,
        score: 3,
      },
      {
        question: `let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
请用代码展示交集、并集，a有b没有的差集`,
        answer: `let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}`,
        score: 4,
      },
      {
        question: `与Set相比，WeakSet有什么区别？`,
        answer: `首先，WeakSet 的成员只能是对象和 Symbol 值，而不能是其他类型的值。
其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，如果是强引用，则会一直占用内存，除非手动清理。也就是说，如果其他对象都不再引用弱引用对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
这是因为垃圾回收机制根据对象的可达性（reachability）来判断回收，如果对象还能被访问到，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合【临时】存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。
因此 WeakSet 主要用于储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。`,
        score: 4,
      },
      {
        question: `为什么 ES6 规定 WeakSet 不可遍历？`,
        answer: `WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。`,
        score: 2,
      },
      {
        question: `WeakSet 有哪些方法？`,
        answer: `WeakSet 结构有以下三个方法。

WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员，返回 WeakSet 结构本身。
WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员，清除成功返回true，如果在 WeakSet 中找不到该成员或该成员不是对象，返回false。
WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

因为WeakSet不可遍历，所以其他属性和方法它都没有`,
        score: 2,
      },
      {
        question: `与传统对象相比，Map有什么特点？`,
        answer: `JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

hash算法：其实就是和数组里的索引差不多，hash 算法会按照先来后到的顺序给每个键值对进行排序

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false`,
        score: 2,
        img: "map.png"
      },
      {
        question: `Map有什么属性和方法？`,
        answer: `size属性，返回Map成员个数
        
方法：set、get、has、delete、clear

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

Map.prototype.clear()

clear()方法清除所有成员，没有返回值。`,
        score: 3,
      },
      {
        question: `Map遍历方法？`,
        answer: `Map 结构原生提供三个遍历器生成函数和一个遍历方法。

Map.prototype.keys()：返回键名的遍历器。
Map.prototype.values()：返回键值的遍历器。
Map.prototype.entries()：返回所有成员的遍历器。
Map.prototype.forEach()：遍历 Map 的所有成员。

需要特别注意的是，Map 的遍历顺序就是插入顺序。

const map = new Map([
  ['F', 'no'],
  ['T',  'yes'],
]);

for (let key of map.keys()) {
  console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
  console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}
// "F" "no"
// "T" "yes"`,
        score: 3,
      },
      {
        question: `Map转为JSON分什么情况？`,
        answer: `Map 转为 JSON 要区分两种情况。一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。

function strMapToJson(strMap) {
  return JSON.stringify(strMapToObj(strMap));
}

let myMap = new Map().set('yes', true).set('no', false);
strMapToJson(myMap)
// '{"yes":true,"no":false}'

另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。

function mapToArrayJson(map) {
  return JSON.stringify([...map]);
}

let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
mapToArrayJson(myMap)
// '[[true,7],[{"foo":3},["abc"]]]'`,
        score: 3,
      },
      {
        question: `Map与WeakMap区别？`,
        answer: `Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
WeakMap 结构与 Map 结构类似，也是用于生成键值对的集合。但是 WeakMap 只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。而且 WeakMap 的键名所指向的对象，不计入垃圾回收机制。`,
        score: 3,
      },
      {
        question: `WeakMap作用？`,
        answer: `WeakMap 应用的典型场合就是 DOM 节点作为键名。下面是一个例子。

let myWeakmap = new WeakMap();

myWeakmap.set(
  document.getElementById('logo'),
  {timesClicked: 0})
;

document.getElementById('logo').addEventListener('click', function() {
  let logoData = myWeakmap.get(document.getElementById('logo'));
  logoData.timesClicked++;
}, false);

上面代码中，document.getElementById('logo')是一个 DOM 节点，每当发生click事件，就更新一下状态。我们将这个状态作为键值放在 WeakMap 里，对应的键名就是这个节点对象。一旦这个 DOM 节点删除，该状态就会自动消失，不存在内存泄漏风险。

WeakMap 的另一个用处是部署私有属性。

const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  dec() {
    let counter = _counter.get(this);
    if (counter < 1) return;
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

const c = new Countdown(2, () => console.log('DONE'));

c.dec()
c.dec()
// DONE

上面代码中，Countdown类的两个内部属性_counter和_action，是实例的弱引用，所以如果删除实例，它们也就随之消失，不会造成内存泄漏。`,
        score: 3,
      },
    ],
  },
  {
    name: "Proxy",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `Proxy 是什么？`,
        answer: `Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(\`getting \${propKey}!\`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(\`setting \${propKey}!\`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

上面代码对一个空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为。这里暂时先不解释具体的语法，只看运行结果。对设置了拦截行为的对象obj，去读写它的属性，就会得到下面的结果。

obj.count = 1
//  setting count!
++obj.count
//  getting count!
//  setting count!
//  2
上面代码说明，Proxy 实际上重载（overload）了点运算符，即用自己的定义覆盖了语言的原始定义。

ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。

var proxy = new Proxy(target, handler);
Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。`,
        score: 3,
        img: "proxy对比.png",
      },
      {
        question: `Proxy 支持哪些方法？`,
        answer: `下面是 Proxy 支持的拦截操作一览，一共 13 种。

get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。receiver可选。
set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。receiver可选。
has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。如果目标对象的参数存在，拦截此方法。
deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。如果目标对象的参数被删，拦截此方法。返回false的话，目标参数不能删除。
ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys/values/entries(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。`,
        score: 4,
      },
      {
        question: `proxy为什么在某些情况下，无法做到与目标对象保持一致？`,
        answer: `虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。

const target = {
  m: function () {
    console.log(this === proxy);
  }
};
const handler = {};

const proxy = new Proxy(target, handler);

target.m() // false
proxy.m()  // true
上面代码中，一旦proxy代理target，target.m()内部的this就是指向proxy，而不是target。所以，虽然proxy没有做任何拦截，target.m()和proxy.m()返回不一样的结果。`,
        score: 3,
      },
      {
        question: `解释一下这段代码：
const service = createWebService('http://example.com/data');

service.employees().then(json => {
  const employees = JSON.parse(json);
  // ···
});

function createWebService(baseUrl) {
  return new Proxy({}, {
    get(target, propKey, receiver) {
      return () => httpGet(baseUrl + '/' + propKey);
    }
  });
}`,
        answer: `上面代码新建了一个 Web 服务的接口，这个接口返回各种数据。Proxy 可以拦截这个对象的任意属性，所以不用为每一种数据写一个适配方法，只要写一个 Proxy 拦截就可以了。`,
        score: 1,
      },
      {
        question: `vue3为什么使用proxy？`,
        answer: `1、vue1、vue2中的defineProperty只能截取对象的属性，需要遍历对象的每个属性，而proxy直接代理对象，不需要遍历操作，效率更高。
2、proxy不仅可以遍历对象，也能遍历数组，比defineProperty功能更加强大。`,
        score: 3,
      },
      {
        question: `为什么要设计Reflect？`,
        answer: `（1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。

（2） 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。

// 老写法
try {
  Object.defineProperty(target, property, attributes);
  // success
} catch (e) {
  // failure
}

// 新写法
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}

（3） 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。

// 老写法
'assign' in Object // true

// 新写法
Reflect.has(Object, 'assign') // true

（4）Reflect对象的方法与Proxy对象的方法一一对应（一共13个），只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。

Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});

上面代码中，Proxy方法拦截target对象的属性赋值行为。它采用Reflect.set方法将值赋值给对象的属性，确保完成原有的行为，然后再部署额外的功能。`,
        score: 4,
      },
      {
        question: `如何使用Proxy实现观察者模式？`,
        answer: `观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。

const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(\`\${person.name}, \${person.age}\`)
}

observe(print);
person.name = '李四';
// 输出
// 李四, 20

上面代码中，数据对象person是观察目标，函数print是观察者。一旦数据对象发生变化，print就会自动执行。

下面，使用 Proxy 写一个观察者模式的最简单实现，即实现observable和observe这两个函数。思路是observable函数返回一个原始对象的 Proxy 代理，拦截赋值操作，触发充当观察者的各个函数。

const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

上面代码中，先定义了一个Set集合，所有观察者函数都放进这个集合。然后，observable函数返回原始对象的代理，拦截赋值操作。拦截函数set之中，会自动执行所有观察者。`,
        score: 4,
      },
    ],
  },
  {
    name: "Iterator",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `Iterator 是什么？包含哪些？`,
        answer: `JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。`,
        score: 3,
      },
      {
        question: `Iterator 有什么作用？`,
        answer: `Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。`,
        score: 3,
      },
      {
        question: `Iterator 遍历过程是怎么样的？`,
        answer: `Iterator 的遍历过程是这样的。
（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

下面是一个模拟next方法返回值的例子。

var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}`,
        score: 2,
        img: "遍历器.png"
      },
      {
        question: `如何使用 for...of 遍历数组？`,
        answer: `对于普通的对象，for...of结构不能直接使用，会报错，必须部署了 Iterator 接口后才能使用。但是，这样情况下，for...in循环依然可以用来遍历键名。

let es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for (let e in es6) {
  console.log(e);
}
// edition
// committee
// standard

for (let e of es6) {
  console.log(e);
}
// TypeError: es6[Symbol.iterator] is not a function

上面代码表示，对于普通的对象，for...in循环可以遍历键名，for...of循环会报错。

一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。

for (var key of Object.keys(someObject)) {
  console.log(key + ': ' + someObject[key]);
}

另一个方法是使用 Generator 函数将对象重新包装一下。

const obj = { a: 1, b: 2, c: 3 }

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

for (let [key, value] of entries(obj)) {
  console.log(key, '->', value);
}
// a -> 1
// b -> 2
// c -> 3`,
        score: 3,
      },
      {
        question: `与原始循环相比，forEach循环有什么缺点？`,
        answer: `无法中途跳出forEach循环，break命令或return命令都不能奏效。`,
        score: 2,
      },
      {
        question: `相较于 for...of 或者 forEach 循环，使用 for...in 遍历数组，会有什么缺点？`,
        answer: `for...in循环有几个缺点。

数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
某些情况下，for...in循环会以任意顺序遍历键名。
总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。

for...of循环相比上面几种做法，有一些显著的优点。

for (let value of myArray) {
  console.log(value);
}

有着同for...in一样的简洁语法，但是没有for...in那些缺点。
不同于forEach方法，它可以与break、continue和return配合使用。
提供了遍历所有数据结构的统一操作接口。`,
        score: 3,
      },
    ]
  },
  {
    name: "Generator 函数",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `Generator 函数是什么？`,
        answer: `Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍 Generator 函数的语法和 API，它的异步编程应用请看《Generator 函数的异步应用》一章。

Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}`,
        score: 3,
      },
      {
        question: `function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

请说说函数 hw 是如何调用的`,
        answer: `上面代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world 和 return 语句（结束执行）。

然后，Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是上一章介绍的遍历器对象（Iterator Object）。

下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }

上面代码一共调用了四次next方法。

第一次调用，Generator 函数开始执行，直到遇到第一个yield表达式为止。next方法返回一个对象，它的value属性就是当前yield表达式的值hello，done属性的值false，表示遍历还没有结束。

第二次调用，Generator 函数从上次yield表达式停下的地方，一直执行到下一个yield表达式。next方法返回的对象的value属性就是当前yield表达式的值world，done属性的值false，表示遍历还没有结束。

第三次调用，Generator 函数从上次yield表达式停下的地方，一直执行到return语句（如果没有return语句，就执行到函数结束）。next方法返回的对象的value属性，就是紧跟在return语句后面的表达式的值（如果没有return语句，则value属性的值为undefined），done属性的值true，表示遍历已经结束。

第四次调用，此时 Generator 函数已经运行完毕，next方法返回对象的value属性为undefined，done属性为true。以后再调用next方法，返回的都是这个值。

总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

ES6 没有规定，function关键字与函数名之间的星号，写在哪个位置。这导致下面的写法都能通过。

function * foo(x, y) { ··· }
function *foo(x, y) { ··· }
function* foo(x, y) { ··· }
function*foo(x, y) { ··· }

由于 Generator 函数仍然是普通函数，所以一般的写法是上面的第三种，即星号紧跟在function关键字后面。本书也采用这种写法。`,
        score: 3,
      },
      {
        question: `使用 yield 表达式需要注意什么？`,
        answer: `yield表达式只能用在 Generator 函数里面，用在其他地方都会报错（包括回调函数）。

(function (){
  yield 1;
})()
// SyntaxError: Unexpected number`,
        score: 2,
      },
    ]
  },
  {
    name: "Promise",
    test: "js ES6基础",
    visible: false,
    subject: [
      {
        question: `Promise 是什么？`,
        answer: `Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。`,
        score: 3,
      },
      {
        question: `Promise 有哪两个特点？`,
        answer: `Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

注意，为了行文方便，本章后面的resolved统一只指fulfilled状态，不包含rejected状态。`,
        score: 3,
      },
      {
        question: `let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');`,
        answer: `let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved

上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。`,
        score: 2,
      },
    ]
  }
];

let ts = [
  {
    name: "ts基础",
    test: "ts+Vue3",
    visible: false,
    subject: [
      {
        question: `RegExp中的u修饰符有什么用？`,
        answer: `ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\\uFFFF的 Unicode 字符。也就是说，会正确处理四个字节的 UTF-16 编码。

/^\\uD83D/u.test('\\uD83D\\uDC2A') // false
/^\\uD83D/.test('\\uD83D\\uDC2A') // true
上面代码中，\\uD83D\\uDC2A是一个四个字节的 UTF-16 编码，代表【一个】字符。但是，ES5 不支持四个字节以上的 UTF-16 编码，会将其识别为两个字符，导致第二行代码结果为true。加了u修饰符以后，ES6 就会识别其为一个字符，所以第一行代码结果为false。`,
        score: 2,
      },
    ],
  },
];

let mianshi = [
  {
    name: "浏览器原理",
    test: "面试高频考点",
    visible: false,
    subject: [
      {
        question: `何为进程？`,
        answer: `程序运行需要有它自己专属的内存空间，可以把这块内存空间简单的理解为进程。每个应用至少有一个进程，进程之间相互独立，即使要通信，也需要双方同意。
详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。进程是运行在虚拟内存上的，虚拟内存是用来解决用户对硬件资源的无限需求和有限的硬件资源之间的矛盾的。从操作系统角度来看，虚拟内存即交换文件；从处理器角度看，虚拟内存即虚拟地址空间。`,
        score: 4,
        img: "jincheng.png"
      },
      {
        question: `何为线程？`,
        answer: `一个进程至少有一个线程，所以在进程开启后会自动创建一个线程来运行代码，该线程称之为主线程。
如果程序需要同时执行多块代码，主线程就会启动更多的线程来执行代码，所以一个进程中可以包含多个线程。`,
        score: 4,
        img: "xiancheng.png"
      },
      {
        question: `进程和线程的区别？`,
        answer: `进程可以看做独立应用，线程不能
资源：进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）；线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）。
通信方面：线程间可以通过直接共享同一进程中的资源，而进程通信需要借助 进程间通信。
调度：进程切换比线程切换的开销要大。线程是CPU调度的基本单位，线程的切换不会引起进程切换，但某个进程中的线程切换到另一个进程中的线程时，会引起进程切换。
系统开销：由于创建或撤销进程时，系统都要为之分配或回收资源，如内存、I/O 等，其开销远大于创建或撤销线程时的开销。同理，在进行进程切换时，涉及当前执行进程 CPU 环境还有各种各样状态的保存及新调度进程状态的设置，而线程切换时只需保存和设置少量寄存器内容，开销较小。`,
        score: 3,
      },
      {
        question: `最新的 Chrome 浏览器包括哪些进程？`,
        answer: `浏览器进程（1个）：字如其面，它就是最开始启动的进程。主要负责界面显示（标签页、导航栏等）、用户交互（键盘、滚动等，监听一下，大概率是影响后面的渲染进程）、子进程（它老大，底下的进程全是它的手下）管理等。浏览器进程内部会启动多个线程处理不同的任务。
GPU 进程（1个）：GPU 是图形处理器。其实， GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。
网络进程（1个）：负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务。
渲染进程（多个）：核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。
插件进程（可以没有）：主要是负责插件的运行（如 IDM 下载器），因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。`,
        score: 5,
      },
      {
        question: `浏览器渲染进程的线程有哪些？`,
        answer: `浏览器的渲染进程的线程总共有五种：
（1）GUI渲染线程
负责渲染浏览器页面，解析HTML、CSS，构建DOM树、构建CSSOM树、构建渲染树和绘制页面；当界面需要重绘或由于某种操作引发回流时，该线程就会执行。
注意：GUI渲染线程和JS引擎线程是互斥的，当JS引擎执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到JS引擎空闲时立即被执行。
（2）JS引擎线程
JS引擎线程也称为JS内核，负责处理Javascript脚本程序，解析Javascript脚本，运行代码；JS引擎线程一直等待着任务队列中任务的到来，然后加以处理，一个Tab页中无论什么时候都只有一个JS引擎线程在运行JS程序；
注意：GUI渲染线程与JS引擎线程的互斥关系，所以如果JS执行的时间过长，会造成页面的渲染不连贯，导致页面渲染加载阻塞。
（3）事件触发线程
事件触发线程属于浏览器而不是JS引擎，用来控制事件循环；当JS引擎执行代码块如setTimeOut时（也可是来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件触发线程中；当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理；
注意：由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）；
（4）定时器触发进程
定时器触发进程即setInterval与setTimeout所在线程；浏览器定时计数器并不是由JS引擎计数的，因为JS引擎是单线程的，如果处于阻塞线程状态就会影响记计时的准确性；因此使用单独线程来计时并触发定时器，计时完毕后，添加到事件队列中，等待JS引擎空闲后执行，所以定时器中的任务在设定的时间点不一定能够准时执行，定时器只是在指定时间点将任务添加到事件队列中；
注意：W3C在HTML标准中规定，定时器的定时时间不能小于4ms，如果是小于4ms，则默认为4ms。
（5）异步http请求线程
XMLHttpRequest连接后通过浏览器新开一个线程请求；
检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将回调函数放入事件队列中，等待JS引擎空闲后执行；`,
        score: 5,
        img: "渲染进程.png"
      },
      {
        question: `死锁产生的原因？ 如果解决死锁的问题？`,
        answer: `所谓死锁，是指多个进程在运行过程中因争夺资源而造成的一种僵局，当进程处于这种僵持状态时，若无外力作用，它们都将无法再向前推进。
系统中的资源可以分为两类：
可剥夺资源，是指某进程在获得这类资源后，该资源可以再被其他进程或系统剥夺，CPU和主存均属于可剥夺性资源；
不可剥夺资源，当系统把这类资源分配给某进程后，再不能强行收回，只能在进程用完后自行释放，如磁带机、打印机等。

预防死锁的方法：
资源一次性分配：一次性分配所有资源，这样就不会再有请求了（破坏请求条件）
只要有一个资源得不到分配，也不给这个进程分配其他的资源（破坏请保持条件）
可剥夺资源：即当某进程获得了部分资源，但得不到其它资源，则释放已占有的资源（破坏不可剥夺条件）
资源有序分配法：系统给每类资源赋予一个编号，每一个进程按编号递增的顺序请求资源，释放则相反（破坏环路等待条件）`,
        score: 3,
      },
      {
        question: `如何实现浏览器内多个标签页之间的通信?`,
        answer: `以前开发没用过，如果面试官问起来，就说webSocket方法：
        
使用 websocket 协议，因为 websocket 协议可以实现服务器推送，所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。`,
        score: 2,
      },
      {
        question: `为什么需要浏览器缓存？`,
        answer: `对于浏览器的缓存，主要针对的是前端的静态资源（如 图片、js、css 文件等），最好的效果就是，在发起请求之后，拉取相应的静态资源，并保存在本地。如果服务器的静态资源没有更新，那么在下次请求的时候，就直接从本地读取即可，如果服务器的静态资源已经更新，那么我们再次请求的时候，就到服务器拉取新的资源，并保存在本地。这样就大大的减少了请求的次数，提高了网站的性能。这就要用到浏览器的缓存策略了。
所谓的浏览器缓存指的是浏览器将用户请求过的静态资源，存储到电脑本地磁盘中，当浏览器再次访问时，就可以直接从本地加载，不需要再去服务端请求了。
使用浏览器缓存，有以下优点：
减少了服务器的负担，提高了网站的性能
加快了客户端网页的加载速度
减少了多余网络数据传输

我们以前的公司项目用的就是 SPA 单页面应用，页面只有第一次加载时会使用资源请求，然后把这些资源缓存到浏览器中，下一次加载时就直接使用 AJAX 异步请求连接就行。
SSR 可以在服务器端生成 HTML 代码，并发送到浏览器端，但考虑到我们公司项目繁杂，使用 SSR 会大幅增加服务器的负载压力，增加大量的开发成本，因此并未使用。只在另一个公司开发移动终端的时候才会使用 SSR。`,
        score: 4,
      },
      {
        question: `如何理解js是单线程语言?`,
        answer: `JavaScript 只在一个线程上运行，不代表 JavaScript 引擎只有一个线程。事实上，JavaScript 引擎有多个线程，单个脚本只能在一个线程上运行（称为主线程），其他线程都是在后台配合。*
*JS引擎是专门处理JS脚本的虚拟机，负责执行JS代码，而渲染引擎负责渲染网页。JavaScript引擎通过提供调用接口给渲染引擎，以便让渲染引擎使用JavaScript引擎来处理JavaScript代码并获取结果。*`,
        score: 3,
      },
      {
        question: `如何理解js的异步?`,
        answer: `JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。
而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。
如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。
所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。
在这种异步模式下，主线程就不会阻塞了，从而最大限度的保证了单线程的流畅运行。

总而言之，单线程是异步产生的原因，事件循环是异步的实现方式。`,
        score: 4,
      },
      {
        question: `JS为何会阻碍渲染？`,
        answer: `如果主线程有卡顿，而页面渲染的任务还在任务队列中，就只能等主线程执行完毕。`,
        score: 2,
      },
      {
        question: `延时队列、交互队列、微队列的执行顺序是什么？`,
        answer: `延时队列：用于存放计时器到达后的回调任务，优先级「中」
交互队列：用于存放用户操作后产生的事件处理任务，优先级「高」
微队列：用户存放需要最快执行的任务，优先级「最高」`,
        score: 2,
      },
      {
        question: `阐述一下 JS 的事件循环？`,
        answer: `事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。
在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。
过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。
根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。`,
        score: 2,
      },
      {
        question: `相比setTimeout，setInterval有什么缺点？`,
        answer: `setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。
针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。

我们公司项目执行抄表任务的时候，是一秒钟执行一次，一开始使用的是 setInterval，它不管任务执行状态如何，下一秒一定会触发任务。如果抄表任务超时了，这些抄表任务就会一直堆积在任务队列里，结果页面卡死了。
所以后来我们就使用 setTimeout 来解决这个问题。它可以等抄表任务结束以后再隔一秒钟执行抄表命令，任务队列就不会拥堵了。`,
        score: 4,
      },
      {
        question: `简单说下浏览器渲染页面流程？`,
        answer: `1、解析HTML
HTML代码会被解析成 DOM 树和 CSSOM 树
2、样式计算
DOM 和 CSSOM 生成之后，做进一步计算
3、布局、分层
将带有样式的 DOM 树进行整体布局、分层
4、绘制
布局、分层完成后，渲染主线程给其他线程下达具体的绘制命令
5、分块
因为绘制任务很庞杂，所以需要多个线程同时完成
6、光栅化
分块以后进行光栅化，将每个块都变成位图
7、画
显卡完成最终绘制

注意：这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的 html 都解析完成之后再去构建和布局 render 树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。`,
        score: 5,
        img: "浏览器页面绘制.png"
      },
      {
        question: `什么是 reflow？`,
        answer: `reflow （回流，重排）的本质就是重新计算 layout 树。

当进行了会影响布局树的操作后，需要重新计算布局树，会引发 layout。
为了避免连续的多次操作导致布局树反复计算，浏览器会合并这些操作，当 JS 代码全部完成后再进行统一计算。所以，改动属性造成的 reflow 是异步完成的。
也同样因为如此，当 JS 获取布局属性时，就可能造成无法获取到最新的布局信息。
浏览器在反复权衡下，最终决定获取属性立即 reflow。

为什么 dom.style.width 明明改了，下面的 clientWidth 还是原来的数据？因为下面执行的是异步操作，渲染是不会同步执行的，但读取 dom 的操作是同步的，所以会有差异。
dom.style.width = "xxxpx"
dom.clientWidth = ？`,
        score: 4,
        img: "reflow.png"
      },
      {
        question: `什么是 reflow？`,
        answer: `reflow （回流，重排）的本质就是重新计算 layout 树。

当进行了会影响布局树的操作后，需要重新计算布局树，会引发 layout。
为了避免连续的多次操作导致布局树反复计算，浏览器会合并这些操作，当 JS 代码全部完成后再进行统一计算。所以，改动属性造成的 reflow 是异步完成的。
也同样因为如此，当 JS 获取布局属性时，就可能造成无法获取到最新的布局信息。
浏览器在反复权衡下，最终决定获取属性立即 reflow。

为什么 dom.style.width 明明改了，下面的 clientWidth 还是原来的数据？因为下面执行的是异步操作，渲染是不会同步执行的，但读取 dom 的操作是同步的，所以会有差异。
dom.style.width = "xxxpx"
dom.clientWidth = ？`,
        score: 4,
        img: "reflow.png"
      },
      {
        question: `什么是 repaint？`,
        answer: `repaint （重绘）的本质就是重新根据分层信息计算了绘制指令。

当改动了可见样式（颜色）后，就需要重新计算，不会引发 layout，但会引发 repaint。
由于元素的布局信息也属于可见样式，所以 reflow 一定会引起 repaint。`,
        score: 4,
        img: "repaint.png"
      },
      {
        question: `为什么 transform 的效率高？`,
        answer: `因为 transform 既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个「draw」阶段。无论位移、缩放、旋转、倾斜等，也只是做了矩阵变换，然后把 quad（指引）信息交给 GPU。
由于 draw 阶段在合成线程中，所以 transform 的变化几乎不会影响渲染主线程，重绘和回流操作则会影响主线程。反之，渲染主线程无论如何忙碌，也不会影响 transform 的变化。`,
        score: 4,
        img: "TRANSFORM.png"
      },
      {
        question: `如何减少回流和重绘？`,
        answer: `操作 DOM 时，尽量在低层级的 DOM 节点进行操作
不要使用 table 布局， 一个小的改动可能会使整个 table 进行重新布局
使用CSS的表达式
修改样式时优先选择 transform
不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。
使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素
避免频繁操作DOM，可以创建一个文档片段 documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中
将元素先设置 display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
将DOM的多个读操作（或者写操作）放在一起，而不是读写操作穿插着写。这得益于浏览器的渲染队列机制。`,
        score: 4,
      },
    ],
  },
  {
    name: "计算机网络",
    test: "面试高频考点",
    visible: false,
    subject: [
      {
        question: `HTTP是什么？`,
        answer: `超文本传输协议 HyperText Transfer Protocol，是一个客户端请求和响应的标准协议。
客户端发送给服务器的格式是请求协议（Request），服务器发送给客户端的格式是响应协议（Response）。
超文本：有超链接的文本（有HTML格式的文本，超文本标记语言），现在可以传输不同类型的资源`,
        score: 2,
        img: "http.png"
      },
      {
        question: `DNS是什么？`,
        answer: `DNS 全称是域名系统 Domain Name Sistem，可以将我们输入的域名转换成对应的IP地址，查询对应的网页
具体流程：取域名，DNS查询报文，DNS服务器查询DNS池的IP，返回对应的IP地址（有可能找不到），找到IP地址后，再通过HTTP协议查询对应的网页。

域名：www.baidu.com
根域名：com
二级域名：baidu.com
子域名：pic.baidu.com`,
        score: 2,
      },
      {
        question: `网址前的 http:// 是什么意思`,
        answer: `通信规则，默认 http:// `,
        score: 2,
        img: "浏览器格式.png"
      },
      {
        question: `HTTP协议有什么特点？`,
        answer: `HTTP协议的底层是TCP/IP，HTTP通过TCP连接进行数据传输，这种基于TCP连接的通信方式也保证了HTTP通信的可靠性和稳定性。
1、支持客户端与服务端两种模式。
2、简单快速。客户向服务器发送请求的时候，只用传请求方法和路径就可以了。由于HTTP协议简单，所以HTTP服务器规模小，通信速度快。
3、灵活。HTTP允许传输任意类型的数据对象。
4、无连接（HTTP1.1版本后支持可持续连接）。每次连接只处理一个请求，服务器处理完客户的请求，并收到客户的应答后，就断开连接。采用这种方式不仅可以节省传输时间，也能节省资源空间，建立连接后就能立刻释放资源。
   举个例子，和过去的电话接线员一样，打电话的人告诉接线员具体位置信息，接线员确认信息后，就断开与客户的连接了，接下来客户只用和目标对象打电话就行，接线员就去忙别的了。
5、无状态。HTTP协议是无状态协议，对于事务处理没有记忆能力。`,
        score: 5,
      },
      {
        question: `ping命令有什么用，这种对应的是什么协议？`,
        answer: `在我们不知道自己电脑是否连通对应IP地址的时候，就能使用ping命令，如果想知道域名对应的IP地址，也可以通过ping命令来获取
ping 180.101.49.12 // ping www.baidu.com

正在 Ping www.a.shifen.com [180.101.49.12] 具有xx字节的数据
...
已发送，已接收x个，丢失x个

这种对应的是ICMP协议（网络控制消息协议）  Internal Control Message Protocol`,
        score: 4,
      },
      {
        question: `URL和URI是什么？`,
        answer: `Uniform Resource Locator 统一资源定位符，也就是网址，指定远端文档所在位置
URI 统一资源标识符，包括URL`,
        score: 2,
        img: "WWW万维网构成.png"
      },
      {
        question: `URL有哪些构成部分？`,
        answer: `协议名、服务器地址、服务器端口号、资源路径、请求参数、片段标识（锚点）`,
        score: 2,
        img: "url.png"
      },
      {
        question: `简单说说TCP的三次握手？`,
        answer: `简单来说就是以下三步：
第一次握手：客户端向服务端发送连接请求报文段（带SYN标识）。请求发送后，客户端便进入 SYN-SENT 状态。
第二次握手：服务端收到连接请求报文段后，如果同意连接，则会发送一个应答（带ACK标识），发送完成后便进入 SYN-RECEIVED 状态。
第三次握手：当客户端收到连接同意的应答后，还要向服务端发送一个确认报文（带ACK标识）。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。
TCP 三次握手的建立连接的过程就是相互确认初始序号的过程，告诉对方，什么样序号的报文段能够被正确接收。 第三次握手的作用是客户端对服务器端的初始序号的确认。如果只使用两次握手，那么服务器就没有办法知道自己的序号是否 已被确认。同时这样也是为了防止失效的请求报文段被服务器接收，而出现错误的情况。`,
        score: 6,
        img: "TCP握手.png"
      },
      {
        question: `简单说说TCP/IP的四层模型？`,
        answer: `分为链路层、网络层、传输层和应用层。
HTTP协议位于应用层，生成针对Web服务器的请求报文。
TCP位于传输层，提供可靠的字节流服务。将报文分割成报文段，并把数据传输给对方。为了准确将数据传达，TCP采用三次握手策略。
IP协议位于网络层，按照对方的ip地址，边中转边传输数据。
`,
        score: 6,
        img: "4层模型.png"
      },
      {
        question: `HTTP协议有哪些不足？`,
        answer: `1、HTTP是一个公开的协议，任何人都可以随时了解协议的细节。并且可以伪造HTTP请求获取服务端资源。
2、HTTP/1.1 协议本身并没有加密规则，所以整个报文都是明文在网上流传。
3、HTTP本身是为网络数据传输而生的，那么网络上任何一个网络节点，包括代理、网关、路由器等，都可以随时知道HTTP传输的内容。
`,
        score: 6,
        img: "http不足.png"
      },
      {
        question: `为了解决HTTP安全性问题，有什么解决方法？`,
        answer: `一般情况下，我们会用上两种加密

1、使用SSL/TLS对网络通讯进行加密
SSL （Secure Socket Layer）是安全套接层，是TLS的前身，当然现在大多数公司使用的都是TLS
TLS  (Transport Layer Security) 安全传输层协议，用于加密应用层的数据
有了 SSL/TLS 的支持，就可以实现HTTPS协议（超文本传输安全协议）
当然，SSL/TLS 通路和TCP一样，为了安全和完整性也会牺牲一些效率

2、加密报文体
HTTP协议的报文分为报文头和报文体。
报文头加不加密不影响安全问题，但报文体需要加密。密钥这种加密算法可以完全私有化，安全性相对较高。
`,
        score: 6,
      },
      {
        question: `HTTP 1.0 和 HTTP 1.1 之间有哪些区别？`,
        answer: `
HTTP 1.0和 HTTP 1.1 有以下区别：
连接方面，http1.0 默认使用非持久连接，而 http1.1 默认使用持久连接。http1.1 通过使用持久连接来使多个 http 请求复用同一个 TCP 连接，以此来避免使用非持久连接时每次需要建立连接的时延。
资源请求方面，在 http1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，http1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。
缓存方面，在 http1.0 中主要使用 header 里的 If-Modified-Since、Expires 来做为缓存判断的标准，http1.1 则引入了更多的缓存控制策略，例如 Etag、If-Unmodified-Since、If-Match、If-None-Match 等更多可供选择的缓存头来控制缓存策略。
http1.1 中新增了 host 字段，用来指定服务器的域名。http1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此，请求消息中的 URL 并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机，并且它们共享一个IP地址。因此有了 host 字段，这样就可以将请求发往到同一台服务器上的不同网站。
http1.1 相对于 http1.0 还新增了很多请求方法，如 PUT、HEAD、OPTIONS 等。
`,
        score: 4,
      },
      {
        question: `在浏览器中输入 Google.com 并且按下回车之后发生了什么？`,
        answer: `
（1）解析URL：首先会对 URL 进行解析，分析所需要使用的传输协议和请求的资源的路径。如果输入的 URL 中的协议或者主机名不合法，将会把地址栏中输入的内容传递给搜索引擎。如果没有问题，浏览器会检查 URL 中是否出现了非法字符，如果存在非法字符，则对非法字符进行转义后再进行下一过程。
（2）缓存判断：浏览器会判断所请求的资源是否在缓存里，如果请求的资源在缓存里并且没有失效，那么就直接使用，否则向服务器发起新的请求。
（3）DNS解析：下一步首先需要获取的是输入的 URL 中的域名的 IP 地址，首先会判断本地是否有该域名的 IP 地址的缓存，如果有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器也会先检查是否存在缓存，如果没有就会先向根域名服务器发起请求，获得负责的顶级域名服务器的地址后，再向顶级域名服务器请求，然后获得负责的权威域名服务器的地址后，再向权威域名服务器发起请求，最终获得域名的 IP 地址后，本地 DNS 服务器再将这个 IP 地址返回给请求的用户。用户向本地 DNS 服务器发起请求属于递归请求，本地 DNS 服务器向各级域名服务器发起请求属于迭代请求。
（4）获取MAC地址：当浏览器得到 IP 地址后，数据传输还需要知道目的主机 MAC 地址，因为应用层下发数据给传输层，TCP 协议会指定源端口号和目的端口号，然后下发给网络层。网络层会将本机地址作为源地址，获取的 IP 地址作为目的地址。然后将下发给数据链路层，数据链路层的发送需要加入通信双方的 MAC 地址，本机的 MAC 地址作为源 MAC 地址，目的 MAC 地址需要分情况处理。通过将 IP 地址与本机的子网掩码相与，可以判断是否与请求主机在同一个子网里，如果在同一个子网里，可以使用 ARP 协议获取到目的主机的 MAC 地址，如果不在一个子网里，那么请求应该转发给网关，由它代为转发，此时同样可以通过 ARP 协议来获取网关的 MAC 地址，此时目的主机的 MAC 地址应该为网关的地址。
（5）TCP三次握手：下面是 TCP 建立连接的三次握手的过程，首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号，服务端接收到请求后向服务器端发送一个 SYN ACK报文段，确认连接请求，并且也向客户端发送一个随机序号。客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个ACK 确认报文段，服务器端接收到确认后，也进入连接建立状态，此时双方的连接就建立起来了。
（6）HTTPS握手：如果使用的是 HTTPS 协议，在通信前还存在 TLS 的一个四次握手的过程。首先由客户端向服务器端发送使用的协议的版本号、一个随机数和可以使用的加密方法。服务器端收到后，确认加密的方法，也向客户端发送一个随机数和自己的数字证书。客户端收到后，首先检查数字证书是否有效，如果有效，则再生成一个随机数，并使用证书中的公钥对随机数加密，然后发送给服务器端，并且还会提供一个前面所有内容的 hash 值供服务器端检验。服务器端接收后，使用自己的私钥对数据解密，同时向客户端发送一个前面所有内容的 hash 值供客户端检验。这个时候双方都有了三个随机数，按照之前所约定的加密方法，使用这三个随机数生成一把秘钥，以后双方通信前，就使用这个秘钥对数据进行加密后再传输。
（7）返回数据：当页面请求发送到服务器端后，服务器端会返回一个 html 文件作为响应，浏览器接收到响应后，开始对 html 文件进行解析，开始页面的渲染过程。
（8）页面渲染：浏览器首先会根据 html 文件构建 DOM 树，根据解析到的 css 文件构建 CSSOM 树，如果遇到 script 标签，则判端是否含有 defer 或者 async 属性，要不然 script 的加载和执行会造成页面的渲染的阻塞。当 DOM 树和 CSSOM 树建立好后，根据它们来构建渲染树。渲染树构建好后，会根据渲染树来进行布局。布局完成后，最后使用浏览器的 UI 接口对页面进行绘制。这个时候整个页面就显示出来了。
（9）TCP四次挥手：最后一步是 TCP 断开连接的四次挥手过程。若客户端认为数据发送完成，则它需要向服务端发送连接释放请求。服务端收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明客户端到服务端的连接已经释放，不再接收客户端发的数据了。但是因为 TCP 连接是双向的，所以服务端仍旧可以发送数据给客户端。服务端如果此时还有没发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端便进入 LAST-ACK 状态。客户端收到释放请求后，向服务端发送确认应答，此时客户端进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有服务端的重发请求的话，就进入 CLOSED 状态。当服务端收到确认应答后，也便进入 CLOSED 状态。
`,
        score: 8,
      },
      {
        question: `对 WebSocket 的理解？`,
        answer: `WebSocket是HTML5提供的一种浏览器与服务器进行【全双工通讯】的网络技术，属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接， 并进行双向数据传输。
WebSocket 的出现就解决了半双工通信的弊端。它最大的特点是：服务器可以向客户端主动推动消息，客户端也可以主动向服务器推送消息。
WebSocket原理：客户端向 WebSocket 服务器通知（notify）一个带有所有接收者ID（recipients IDs）的事件（event），服务器接收后立即通知所有活跃的（active）客户端，只有ID在接收者ID序列中的客户端才会处理这个事件。
`,
        score: 5,
        img: "ws.png"
      },
      {
        question: `WebSocket 的特点？`,
        answer: `支持双向通信，实时性更强
可以发送文本，也可以发送二进制数据‘’
建立在TCP协议之上，服务端的实现比较容易
数据格式比较轻量，性能开销小，通信高效
没有同源限制，客户端可以与任意服务器通信
协议标识符是ws（如果加密，则为wss），服务器网址就是 URL
与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
`,
        score: 5,
      },
      {
        question: `短轮询、长轮询、SSE 和 WebSocket 间的区别？`,
        answer: `短轮询和长轮询的目的都是用于实现客户端和服务器端的一个即时通讯。

短轮询的基本思路：浏览器每隔一段时间向浏览器发送 http 请求，服务器端在收到请求后，不论是否有数据更新，都直接进行响应。这种方式实现的即时通信，本质上还是浏览器发送请求，服务器接受请求的一个过程，通过让客户端不断的进行请求，使得客户端能够模拟实时地收到服务器端的数据的变化。这种方式的优点是比较简单，易于理解。缺点是这种方式由于需要不断的建立 http 连接，严重浪费了服务器端和客户端的资源。当用户增加时，服务器端的压力就会变大，这是很不合理的。
长轮询的基本思路：首先由客户端向服务器发起请求，当服务器收到客户端发来的请求后，服务器端不会直接进行响应，而是先将这个请求挂起，然后判断服务器端数据是否有更新。如果有更新，则进行响应，如果一直没有数据，则到达一定的时间限制才返回。客户端 JavaScript 响应处理函数会在处理完服务器返回的信息后，再次发出请求，重新建立连接。长轮询和短轮询比起来，它的优点是明显减少了很多不必要的 http 请求次数，相比之下节约了资源。长轮询的缺点在于，连接挂起也会导致资源的浪费。
SSE 的基本思想：服务器使用流信息向服务器推送信息。严格地说，http 协议无法做到服务器主动推送信息。但是，有一种变通方法，就是服务器向客户端声明，接下来要发送的是流信息。也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流，视频播放就是这样的例子。SSE 就是利用这种机制，使用流信息向浏览器推送信息。它基于 http 协议，目前除了 IE/Edge，其他浏览器都支持。它相对于前面两种方式来说，不需要建立过多的 http 请求，相比之下节约了资源。
WebSocket 是 HTML5 定义的一个新协议议，与传统的 http 协议不同，该协议允许由服务器主动的向客户端推送信息。使用 WebSocket 协议的缺点是在服务器端的配置比较复杂。WebSocket 是一个全双工的协议，也就是通信双方是平等的，可以相互发送消息，而 SSE 的方式是单向通信的，只能由服务器端向客户端推送信息，如果客户端需要发送信息就是属于下一个 http 请求了。

上面的四个通信协议，前三个都是基于HTTP协议的。
对于这四种即使通信协议，从性能的角度来看：
WebSocket > 长连接（SEE） > 长轮询 > 短轮询
但是，我们如果考虑浏览器的兼容性问题，顺序就恰恰相反了：
短轮询 > 长轮询 > 长连接（SEE） > WebSocket
所以，还是要根据具体的使用场景来判断使用哪种方式。        
`,
        score: 5,
      },
      {
        question: `请写一个关于 WebSocket 的代码？`,
        answer: `// 在index.html中直接写WebSocket，设置服务端的端口号为 9999
let ws = new WebSocket('ws://localhost:9999');
// 在客户端与服务端建立连接后触发
ws.onopen = function() {
    console.log("Connection open."); 
    ws.send('hello');
};
// 在服务端给客户端发来消息的时候触发
ws.onmessage = function(res) {
    console.log(res);       // 打印的是MessageEvent对象
    console.log(res.data);  // 打印的是收到的消息
};
// 在客户端与服务端建立关闭后触发
ws.onclose = function(evt) {
  console.log("Connection closed.");
}; 
`,
        score: 5,
      },
      {
        question: `GET和POST的请求的区别？`,
        answer: `Post 和 Get 是 HTTP 请求的两种方法，其区别如下：
应用场景：GET 请求是一个幂等的请求，一般 Get 请求用于对服务器资源不会产生影响的场景，比如说请求一个网页的资源。而 Post 不是一个幂等的请求，一般用于对服务器资源会产生影响的情景，比如注册用户这一类的操作。
是否缓存：因为两者应用场景不同，浏览器一般会对 Get 请求缓存，但很少对 Post 请求缓存。
发送的报文格式：Get 请求的报文中实体部分为空，Post 请求的报文中实体部分一般为向服务器发送的数据。
安全性：Get 请求可以将请求的参数放入 url 中向服务器发送，这样的做法相对于 Post 请求来说是不太安全的，因为请求的 url 会被保留在历史记录中。
请求长度：浏览器由于对 url 长度的限制，所以会影响 get 请求发送数据时的长度。这个限制是浏览器规定的，并不是 RFC 规定的。
参数类型：post 的参数传递支持更多的数据类型。
`,
        score: 5,
      },
      {
        question: `POST和PUT请求的区别`,
        answer: `PUT请求是向服务器端发送数据，从而修改数据的内容，但是不会增加数据的种类等，也就是说无论进行多少次PUT操作，其结果并没有不同。（可以理解为是更新数据）
POST请求是向服务器端发送数据，该请求会改变数据的种类等资源，它会创建新的内容。（可以理解为是创建数据）
`,
        score: 4,
      },
      {
        question: `常见的HTTP请求方法有哪些？`,
        answer: `GET: 向服务器获取数据；
POST：将实体提交到指定的资源，通常用于修改服务器数据；

PUT：上传文件，更新数据（出于安全问题考虑，一般网站不开放）；
DELETE：删除服务器上的对象（出于安全问题考虑，一般网站不开放）；
HEAD：获取报文头部，与GET相比，不返回报文主体部分（服务器可能不支持）；
OPTIONS：询问支持的请求方法，用来跨域请求（查完以后，一般都会支持GET POST，其他的看情况）；
CONNECT：要求在与代理服务器通信时建立隧道，使用隧道进行TCP通信（用的最少）；
TRACE: 回显服务器收到的请求，主要⽤于测试或诊断（用的最少）。
`,
        score: 4,
      },
      {
        question: `HTTP和HTTPS协议的区别有哪些？`,
        answer: `HTTP和HTTPS协议的主要区别如下：
HTTPS协议需要CA证书，费用较高；而HTTP协议不需要；
HTTP协议是超文本传输协议，信息是明文传输的，HTTPS则是具有安全性的SSL加密传输协议；
使用不同的连接方式，端口也不同，HTTP协议端口是80，HTTPS协议端口是443；
HTTP协议连接很简单，是无状态的；HTTPS协议是有SSL和HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP更加安全。
`,
        score: 4,
      },
      {
        question: `HTTP的状态码大致分成哪五类？`,
        answer: `
1xx	Informational(信息性状态码) \t\t\t\t接受的请求正在处理（很少用）
2xx	Success(成功状态码) \t\t\t	      请求正常处理完毕（最常用）
3xx	Redirection(重定向状态码) \t\t\t	需要进行附加操作一完成请求
4xx	Client Error (客户端错误状态码) \t\t	服务器无法处理请求
5xx	Server Error(服务器错误状态码) \t\t\t	服务器处理请求出错
`,
        score: 8,
        img: "服务器请求错误类型.png"
      },
      {
        question: `什么是token，为什么要用token存储用户信息？`,
        answer: `在用户通过身份验证后，服务器会生成一个Token（令牌）并发给客户端，之后客户端会在每次请求中附带此Token以证明身份，一般存储在localStorage中。这种机制允许在不需要服务器端保持用户会话状态的情况下，实现用户身份的验证和授权，因此特别适用于状态无关的身份验证和授权场景。
Token的这种特性使得它成为一种非常适合现代Web应用和移动应用的身份验证方法。与Session相比，Token不需要服务器端维护用户的会话状态，从而减轻了服务器的负担，提高了系统的可扩展性。同时，Token的传输是加密的，增加了数据的安全性，防止了敏感信息的泄露。
`,
        score: 4,
        img: "服务器请求错误类型.png"
      },
      {
        question: `200、204、301、302、400、401、403、404、500、502、503代表什么？`,
        answer: `
200：（OK）表示客户端发来的请求被服务器端正常处理了。
204：（No Content）该状态码表示客户端发送的请求已经在服务器端正常处理了，但是没有返回的内容，响应报文中不包含实体的主体部分。一般在只需要从客户端往服务器端发送信息，而服务器端不需要往客户端发送内容时使用。
301：（Moved Permanently）永久重定向。该状态码表示请求的资源已经被分配了新的 URI，以后应使用资源指定的 URI。新的 URI 会在 HTTP 响应头中的 Location 首部字段指定。若用户已经把原来的URI保存为书签，此时会按照 Location 中新的URI重新保存该书签。同时，搜索引擎在抓取新内容的同时也将旧的网址替换为重定向之后的网址。
302：（Found）临时重定向。该状态码表示请求的资源被分配到了新的 URI，希望用户（本次）能使用新的 URI 访问资源。和 301 Moved Permanently 状态码相似，但是 302 代表的资源不是被永久重定向，只是临时性质的。也就是说已移动的资源对应的 URI 将来还有可能发生改变。
400: （Bad Request）请求错误。这个请求代表客户端发送请求的语法错误或是服务器无法响应该请求。
401：（Unauthorized）认证失败。该状态码表示发送的请求需要有通过 HTTP 认证(BASIC 认证、DIGEST 认证)的认证信息。若之前已进行过一次请求，则表示用户认证失败。
403：（Forbidden）没有权限。该状态码表明请求资源的访问被服务器拒绝了，服务器端没有必要给出详细理由，但是可以在响应报文实体的主体中进行说明。进入该状态后，不能再继续进行验证。该访问是永久禁止的，并且与应用逻辑密切相关。
404：（Not Found）找不到对象。该状态码表明服务器上无法找到请求的资源。
500：（Internal Server Error）服务器错误。该状态码表明服务器端在执行请求时发生了错误。也有可能是 Web 应用存在的 bug 或某些临时的故障。
502：（Bad Gateway）网关连接出错。该状态码表明扮演网关或代理角色的服务器，从上游服务器中接收到的响应是无效的。注意，502 错误通常不是客户端能够修复的，而是需要由途经的 Web 服务器或者代理服务器对其进行修复。
503：（Service Unavailable）服务器禁用。该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回给客户端。
`,
        score: 8,
      },
      // 304 问题，浏览器缓存策略
    ]
  }
]

export let list = [...lists, ...es6, ...ts, ...mianshi];

export function luanxu(index) {
  // console.log(123);
  lists[index].subject = lists[index].subject.sort(() => Math.random() - 0.5);
  console.log("luanxu", lists[index].subject);
  return 1;
}
