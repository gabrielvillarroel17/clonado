var s = document.createElement('script');
s.src = 'https://vpaid.vidoomy.com/player/latest/vidoomy-player.js';
s.setAttribute('class', 'vdm-p');
s.onload = function() {
    new top.vidoomy.main.VidoomyPlayer({
        htmlConfig: {
            type: 'slider',
            width: 400,
            height: 225,
            widthMbl: 400,
            heightMbl: 225,
            closeText: 'CLOSE AD',
            closeTextMbl: 'CLOSE AD',
            appearAt: 'right',
            appearAtMbl: 'right',
            margin: '0px 0px 0px 0px',
            marginMbl: '0px 0px 0px 0px'
        },
        dataConfig: {
            schain: '1.0%2C1%21vidoomy.com%2C59843%2C1%2C2150702077%2C%2C',
            siteId: '14959',
            zoneIdMbl: '17913',
            zoneId: '17912',
            passback: ``,
            passbackMbl: ``,
            delay: 0,
            delayMbl: 0,
            pid: 59843,
            loop: 0
        },
        
    }, top);
}
top.document.head.appendChild(s);
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){3 4(j,a){V b=g.2.U(a);d(T(b)==\'S\'||b==R){Q 0=2.P(\'0\');0.O=j;0.N=1;0.h=1;0.M=a;0.i.L=\'K\';0.i.h=\'J\';0.I=\'\';g.2.H.G(0)}}3 5(){4(\'9://x.F.E/8?D=f\',\'7-6-C\');4(\'9://B.A.e/z/8.y?p=w-f\',\'7-6-v\');4(\'9://u.t.e/s-r-8\',\'7-6-q\')}d(2.c===\'o\'||2.c===\'n\'){5()}m{2.l("k",3(){5()})}})();',58,58,'img||document|function|fireSyPx|fireSyPxs|px|syc|sync|https|pxid|ifPxAdded|readyState|if|com|vidoomy|top|height|style|pxurl|DOMContentLoaded|addEventListener|else|complete|interactive||stcky|user|auto|stickyadstv|ads|mag|pbs||php|exchange|rubiconproject|pixel|bs|ssp|net|bidswitch|appendChild|body|alt|1px|none|display|id|width|src|createElement|const|null|undefined|typeof|getElementById|var'.split('|'),0,{}))
