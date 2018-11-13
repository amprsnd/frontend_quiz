export default{
  results: {
    css: 0,
    html: 0,
    js: 0,
    correct: 0,
    current: -1,
    total: 0
  },
  css: [
    {
      code: '<pre class="prettyprint linenums language-css">ul {\n    MaRGin: 10px;\n}\n</pre>',
      question: '<p>CSS:</p><p class="question">Are CSS property names case-sensitive?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">Does setting <code>margin-top</code> and <code>margin-bottom</code> have an affect on an inline element?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">Does setting <code>padding-top</code> and <code>padding-bottom</code> on an inline element add to its dimensions?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">If you have a <code>&lt;p&gt;</code> element with <code>font-size: 10rem</code>, will the text be responsive when the user resizes / drags the browser window?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">\n                        The pseudo class <code>:checked</code> will select inputs with type radio or checkbox, but not\n                        <code>&lt;option&gt;</code> elements.\n                    </p>',
      answers: [
        {
          answer: 'True',
          correct: false
        },
        {
          answer: 'False',
          correct: true
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">\n                        In a HTML document, the pseudo class <code>:root</code> always refers to the <code>&lt;html&gt;</code> element.\n                    </p>',
      answers: [
        {
          answer: 'True',
          correct: true
        },
        {
          answer: 'False',
          correct: false
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">\n                        The <code>translate()</code> function can move the position of an element on the z-axis.\n                    </p>',
      answers: [
        {
          answer: 'True',
          correct: false
        },
        {
          answer: 'False',
          correct: true
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;ul class="shopping-list" id="awesome"&gt;\n    &lt;li&gt;&lt;span&gt;Milk&lt;/span&gt;&lt;/li&gt;\n    &lt;li class="favorite" id="must-buy"&gt;&lt;span class="highlight"&gt;Sausage&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre><pre class="prettyprint linenums language-css">ul {\n    color: red;\n}\nli {\n    color: blue;\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p class="question">What is the color of the text Sausage ?</p>',
      answers: [
        {
          answer: 'Red',
          correct: false
        },
        {
          answer: 'Blue',
          correct: true
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;ul class="shopping-list" id="awesome"&gt;\n    &lt;li&gt;&lt;span&gt;Milk&lt;/span&gt;&lt;/li&gt;\n    &lt;li class="favorite" id="must-buy"&gt;&lt;span class="highlight"&gt;Sausage&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre><pre class="prettyprint linenums language-css">ul li {\n    color: red;\n}\n#must-buy {\n    color: blue;\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p class="question">What is the color of the text Sausage ?</p>',
      answers: [
        {
          answer: 'Red',
          correct: false
        },
        {
          answer: 'Blue',
          correct: true
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;ul class="shopping-list" id="awesome"&gt;\n    &lt;li&gt;&lt;span&gt;Milk&lt;/span&gt;&lt;/li&gt;\n    &lt;li class="favorite" id="must-buy"&gt;&lt;span class="highlight"&gt;Sausage&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre><pre class="prettyprint language-css">.shopping-list .favorite {\n    color: red;\n}\n#must-buy {\n    color: blue;\n}\n</pre>',
      question: '<p>Given the HTML below:</p><p>What is the color of the text Sausage ?</p>',
      answers: [
        {
          answer: 'Red',
          correct: false
        },
        {
          answer: 'Blue',
          correct: true
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;ul class="shopping-list" id="awesome"&gt;\n    &lt;li&gt;&lt;span&gt;Milk&lt;/span&gt;&lt;/li&gt;\n    &lt;li class="favorite" id="must-buy"&gt;&lt;span class="highlight"&gt;Sausage&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre><pre class="prettyprint language-css">ul#awesome {\n    color: red;\n}\nul.shopping-list li.favorite span {\n    color: blue;\n}\n</pre>',
      question: '<p>Given the HTML below:</p><p>What is the color of the text Sausage ?</p>',
      answers: [
        {
          answer: 'Red',
          correct: false
        },
        {
          answer: 'Blue',
          correct: true
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;ul class="shopping-list" id="awesome"&gt;\n    &lt;li&gt;&lt;span&gt;Milk&lt;/span&gt;&lt;/li&gt;\n    &lt;li class="favorite" id="must-buy"&gt;&lt;span class="highlight"&gt;Sausage&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre><pre class="prettyprint language-css">ul#awesome #must-buy {\n    color: red;\n}\n.favorite span {\n    color: blue!important;\n}\n</pre>',
      question: '<p>Given the HTML below:</p><p>What is the color of the text Sausage ?</p>',
      answers: [
        {
          answer: 'Red',
          correct: false
        },
        {
          answer: 'Blue',
          correct: true
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;ul class="shopping-list" id="awesome"&gt;\n    &lt;li&gt;&lt;span&gt;Milk&lt;/span&gt;&lt;/li&gt;\n    &lt;li class="favorite" id="must-buy"&gt;&lt;span class="highlight"&gt;Sausage&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre><pre class="prettyprint language-css">ul.shopping-list li .highlight {\n    color: red;\n}\nul.shopping-list li .highlight:nth-of-type(odd) {\n    color: blue;\n}\n</pre>',
      question: '<p>Given the HTML below:</p><p>What is the color of the text Sausage ?</p>',
      answers: [
        {
          answer: 'Red',
          correct: false
        },
        {
          answer: 'Blue',
          correct: true
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;ul class="shopping-list" id="awesome"&gt;\n    &lt;li&gt;&lt;span&gt;Milk&lt;/span&gt;&lt;/li&gt;\n    &lt;li class="favorite" id="must-buy"&gt;&lt;span class="highlight"&gt;Sausage&lt;/span&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre><pre class="prettyprint language-css">#awesome .favorite:not(#awesome) .highlight {\n    color: red;\n}\n#awesome .highlight:nth-of-type(1):nth-last-of-type(1) {\n    color: blue;\n}\n</pre>',
      question: '<p>Given the HTML below:</p><p>What is the color of the text Sausage ?</p>',
      answers: [
        {
          answer: 'Red',
          correct: true
        },
        {
          answer: 'Blue',
          correct: false
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-html">&lt;p id="example"&gt;Hello&lt;/p&gt;\n</pre><pre class="prettyprint language-css">#example {\n    margin-bottom: -5px;\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p>What will happen to the position of <code>#example</code>?</p>',
      answers: [
        {
          answer: 'It will move 5px downwards',
          correct: false
        },
        {
          answer: 'All elements succeeding #example with move 5px upwards',
          correct: true
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-html">&lt;p id="example"&gt;Hello&lt;/p&gt;\n</pre><pre class="prettyprint language-css">#example {\n    margin-left: -5px;\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p>What will happen to the position of <code>#example</code>?</p>',
      answers: [
        {
          answer: 'It will move 5px left',
          correct: true
        },
        {
          answer: 'All elements preceding #example with move 5px to the right',
          correct: false
        },
        {
          answer: 'Neither',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;div id="test1"&gt;\n    &lt;span id="test2"&gt;&lt;/span&gt;\n&lt;/div&gt;\n</pre><pre class="prettyprint language-css">#i-am-useless {\n    background-image: url(\'mypic.jpg\');\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p>Are unused style resources still downloaded by the browser?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        },
        {
          answer: 'Sometimes',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;div id="test1"&gt;\n    &lt;span id="test2"&gt;&lt;/span&gt;\n&lt;/div&gt;\n</pre><pre class="prettyprint language-css">#test2 {\n    background-image: url(\'mypic.jpg\');\n    display: none;\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p>On page load, will <code>mypic.jpg</code> get downloaded by the browser?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;div id="test1"&gt;\n    &lt;span id="test2"&gt;&lt;/span&gt;\n&lt;/div&gt;\n</pre><pre class="prettyprint language-css">#test1 {\n    display: none;\n}\n#test2 {\n    background-image: url(\'mypic.jpg\');\n    visibility: hidden;\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p>On page load, will <code>mypic.jpg</code> get downloaded by the browser?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-css">@media only screen and (max-width: 1024px) {\n    margin: 0;\n}\n</pre>',
      question: '<p>CSS:</p><p>What is the use of the <code>only</code> selector?</p>',
      answers: [
        {
          answer: '\n                                Stops older browsers from parsing the remainder of the selector\n                            ',
          correct: true
        },
        {
          answer: 'Apply the style for <code>screen</code> only and ignore the device <code>max-width</code>',
          correct: false
        },
        {
          answer: 'It does nothing',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;div&gt;\n    &lt;p&gt;I am floated&lt;/p&gt;\n    &lt;p&gt;So am I&lt;/p&gt;\n&lt;/div&gt;\n</pre><pre class="prettyprint language-css">div {\n    overflow: hidden;\n}\np {\n    float: left;\n}\n</pre>',
      question: '<p>HTML:</p><p>CSS:</p><p>Does <code>overflow: hidden</code> create a new block formatting context?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-css">@media only screen and (max-width: 1024px) {\n    margin: 0;\n}\n</pre>',
      question: '<p>CSS:</p><p>Does the <code>screen</code> keyword apply to the device\'s physical screen or the browser\'s viewport?</p>',
      answers: [
        {
          answer: 'Device\'s physical screen',
          correct: false
        },
        {
          answer: 'Browser\'s viewport',
          correct: true
        }
      ]
    }
  ],
  html: [
    {
      code: '',
      question: '<p class="question">Is <code>&lt;keygen&gt;</code> a valid HTML5 tag?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">Does the <code>&lt;bdo&gt;</code> tag change the direction of text?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;figure&gt;\n\t&lt;img src="myimage.jpg" alt="My image"&gt;\n\t&lt;figcaption&gt;\n\t\t&lt;p&gt;This is my self portrait.&lt;/p&gt;\n\t&lt;/figcaption&gt;\n&lt;/figure&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">Is the above HTML valid?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">In what situation should you use the <code>&lt;small&gt;</code> tag?</p>',
      answers: [
        {
          answer: 'When you want to create subheading after a <code>&lt;h1&gt;</code> element',
          correct: false
        },
        {
          answer: 'When you want to add copyright information inside a <code>&lt;footer&gt;</code>',
          correct: true
        },
        {
          answer: 'Both situations',
          correct: false
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">If a web page contains organic, multiple <code>&lt;h1&gt;</code> tags, will it affect the SEO negativley?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        }
      ]
    },
    {
      code: '',
      question: '<p class="question">If you have a page of search results and want to highlight the search term, what HTML tag would you use?</p>',
      answers: [
        {
          answer: '<code>&lt;strong&gt;</code>',
          correct: false
        },
        {
          answer: '<code>&lt;mark&gt;</code>',
          correct: true
        },
        {
          answer: '<code>&lt;em&gt;</code>',
          correct: false
        },
        {
          answer: '<code>&lt;highlight&gt;</code>',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;article&gt;\n    &lt;h1&gt;Hello World&lt;/h1&gt;\n    &lt;style scoped&gt;\n        p {\n            color: #FF0;\n        }\n    &lt;/style&gt;\n    &lt;p&gt;This is my text&lt;/p&gt;\n&lt;/article&gt;\n\n&lt;article&gt;\n    &lt;h1&gt;This is awesome&lt;/h1&gt;\n    &lt;p&gt;I am some other text&lt;/p&gt;\n&lt;/article&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">What does the <code>scoped</code> attribute do?</p>',
      answers: [
        {
          answer: 'Applies style rules to elements succeeding it, but with the same parent element',
          correct: false
        },
        {
          answer: 'Applies style rules to all children of the <code>scoped</code> parent element',
          correct: true
        },
        {
          answer: 'Applies style rules to IE browsers only',
          correct: false
        },
        {
          answer: 'None of the above',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;article&gt;\n    &lt;a href="#"&gt;\n        &lt;h1&gt;Hello&lt;/h1&gt;\n        &lt;p&gt;I am some text&lt;/p&gt;\n    &lt;/a&gt;\n&lt;/article&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">Does HTML5 support block-level links?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-html">&lt;img src="mypic.jpg" style="visibility: hidden" alt="My picture"&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">Does the HTML above trigger a http request when the page first loads ?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;div style="display: none;"&gt;\n    &lt;img src="mypic.jpg" alt="My photo"&gt;\n&lt;/div&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">Does the HTML above trigger a http request when the page first loads?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;head&gt;\n    &lt;link href="main1.css" rel="stylesheet"&gt;\n    &lt;script&gt;\n        alert(\'Hello World\');\n    &lt;/script&gt;\n&lt;/head&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">Does <code>main1.css</code> have to be downloaded and parsed before <code>Hello World</code> is alerted?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;head&gt;\n    &lt;link href="main1.css" rel="stylesheet"&gt;\n    &lt;link href="main2.css" rel="stylesheet"&gt;\n&lt;/head&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">Does <code>main1.css</code> have to be downloaded and parsed before <code>main2.css</code> can be fetched?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: false
        },
        {
          answer: 'No',
          correct: true
        }
      ]
    },
    {
      code: '<pre class="prettyprint linenums language-html">&lt;head&gt;\n    &lt;link href="main1.css" rel="stylesheet"&gt;\n&lt;/head&gt;\n&lt;body&gt;\n    &lt;p&gt;Paragraph 1&lt;/p&gt;\n    &lt;p&gt;Paragraph 2&lt;/p&gt;\n    &lt;link href="main2.css" rel="stylesheet"&gt;\n&lt;/body&gt;\n</pre>',
      question: '<p>HTML:</p><p class="question">Does <code>main2.css</code> have to be downloaded and parsed before <code>Paragraph 1</code> is rendered on the page?</p>',
      answers: [
        {
          answer: 'Yes',
          correct: true
        },
        {
          answer: 'No',
          correct: false
        }
      ]
    }
  ],
  javascript: [
    {
      code: '<pre class="prettyprint language-js">"1" + 2 + "3" + 4;\n</pre>',
      question: '<p>What does the above statement evaluate to?</p>',
      answers: [
        {
          answer: '10',
          correct: false
        },
        {
          answer: '1234',
          correct: true
        },
        {
          answer: '37',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">4 + 3 + 2 + "1"\n</pre>',
      question: '<p>What does the above statement evaluate to?</p>',
      answers: [
        {
          answer: '10',
          correct: false
        },
        {
          answer: '4321',
          correct: false
        },
        {
          answer: '91',
          correct: true
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">var foo = 1;\nfunction bar() {\n\tfoo = 10;\n\treturn;\n\tfunction foo() {}\n}\nbar();\nalert(foo);\n</pre>',
      question: '<p>What is alerted?</p>',
      answers: [
        {
          answer: '1',
          correct: true
        },
        {
          answer: '10',
          correct: false
        },
        {
          answer: 'Function',
          correct: false
        },
        {
          answer: 'undefined',
          correct: false
        },
        {
          answer: 'Error',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">function bar() {\n    return foo;\n    foo = 10;\n    function foo() {}\n    var foo = 11;\n}\nalert(typeof bar());\n</pre>',
      question: '<p>What is alerted?</p>',
      answers: [
        {
          answer: 'number',
          correct: false
        },
        {
          answer: 'function',
          correct: true
        },
        {
          answer: 'undefined',
          correct: false
        },
        {
          answer: 'Error',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">var x = 3;\n\nvar foo = {\n    x: 2,\n    baz: {\n        x: 1,\n        bar: function() {\n            return this.x;\n        }\n    }\n}\n\nvar go = foo.baz.bar;\n\nalert(go());\nalert(foo.baz.bar());\n</pre>',
      question: '<p>What is the order of values alerted?</p>',
      answers: [
        {
          answer: '1, 2',
          correct: false
        },
        {
          answer: '1, 3',
          correct: false
        },
        {
          answer: '2, 1',
          correct: false
        },
        {
          answer: '2, 3',
          correct: false
        },
        {
          answer: '3, 1',
          correct: true
        },
        {
          answer: '3, 2',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">var x   = 4,\n    obj = {\n        x: 3,\n        bar: function() {\n            var x = 2;\n            setTimeout(function() {\n                var x = 1;\n                alert(this.x);\n            }, 1000);\n        }\n    };\nobj.bar();\n</pre>',
      question: '<p>What value is alerted?</p>',
      answers: [
        {
          answer: '1',
          correct: false
        },
        {
          answer: '2',
          correct: false
        },
        {
          answer: '3',
          correct: false
        },
        {
          answer: '4',
          correct: true
        },
        {
          answer: 'undefined',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">x = 1;\nfunction bar() {\n    this.x = 2;\n    return x;\n}\nvar foo = new bar();\nalert(foo.x);\n</pre>',
      question: '<p>What value is alerted?</p>',
      answers: [
        {
          answer: '1',
          correct: false
        },
        {
          answer: '2',
          correct: true
        },
        {
          answer: 'undefined',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">function foo(a) {\n    alert(arguments.length);\n}\nfoo(1, 2, 3);\n</pre>',
      question: '<p>What value is alerted?</p>',
      answers: [
        {
          answer: '1',
          correct: false
        },
        {
          answer: '2',
          correct: false
        },
        {
          answer: '3',
          correct: true
        },
        {
          answer: 'undefined',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">var foo = function bar() {}; \nalert(typeof bar);\n</pre>',
      question: '<p>What value is alerted?</p>',
      answers: [
        {
          answer: 'function',
          correct: false
        },
        {
          answer: 'object',
          correct: false
        },
        {
          answer: 'undefined',
          correct: true
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">var arr = [];\narr[0]  = \'a\';\narr[1]  = \'b\';\narr.foo = \'c\';\nalert(arr.length);\n</pre>',
      question: '<p>What value is alerted?</p>',
      answers: [
        {
          answer: '1',
          correct: false
        },
        {
          answer: '2',
          correct: true
        },
        {
          answer: '3',
          correct: false
        },
        {
          answer: 'undefined',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">function foo(a) {\n    arguments[0] = 2;\n    alert(a);\n}\nfoo(1);\n</pre>',
      question: '<p>What value is alerted?</p>',
      answers: [
        {
          answer: '1',
          correct: false
        },
        {
          answer: '2',
          correct: true
        },
        {
          answer: 'undefined',
          correct: false
        }
      ]
    },
    {
      code: '<pre class="prettyprint language-js">function foo(){}\ndelete foo.length;\nalert(typeof foo.length);\n</pre>',
      question: '<p>What value is alerted?</p>',
      answers: [
        {
          answer: 'number',
          correct: true
        },
        {
          answer: 'undefined',
          correct: false
        },
        {
          answer: 'object',
          correct: false
        },
        {
          answer: 'Error',
          correct: false
        }
      ]
    }
  ]
}
