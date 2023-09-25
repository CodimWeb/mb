<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <title>MARANBET - the platform for betting in cryptocurrency</title>
        <meta name="description" content="The platform provides users with the opportunity to bet on a huge number of events in various categories - from sports to exclusive, created on the basis of current realities. Moreover, each user of the platform can independently suggest a topic for betting!" />
        <meta property="og:image" content="https://maranbet.com/open-graph-image.png" />
        <meta content="1200" property="og:image:width" />
        <meta content="720" property="og:image:height" />
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(92932173, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/92932173" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
    </head>
    <body>

        <div id="app"></div>

        @vite(['resources/scss/main.scss', 'resources/js/app.js'])

    </body>
</html>
