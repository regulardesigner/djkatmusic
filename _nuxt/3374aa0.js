(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{277:function(t,e,o){var content=o(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(111).default)("e0142f40",content,!0,{sourceMap:!1})},280:function(t,e,o){var content=o(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(111).default)("6678c95c",content,!0,{sourceMap:!1})},281:function(t,e,o){"use strict";o(277)},282:function(t,e,o){var r=o(110),n=o(276),l=o(283),d=o(284),c=r(!1),m=n(l),f=n(d);c.push([t.i,".music{padding-top:2rem;max-width:50rem;margin:0 auto}.html-player{display:none;margin-top:1rem;width:100%}.music-player{display:flex;align-items:center;border:1px solid #000;margin-bottom:1rem;border-radius:3rem;padding:.4rem .9rem .4rem .4rem}.play-icon{border:1px solid #000;border-radius:5rem;background-image:url("+m+");background-size:50%;background-repeat:no-repeat;background-position:55%;text-indent:-9999px;width:4.4rem;height:4.4rem;padding:1rem;margin-right:.5rem}.playing{background-color:#ffe5e3;background-image:url("+f+");background-position:50%}.controls{width:100%;height:.5rem;border:1px solid #000;border-radius:.5rem}.controls-time{transition:all .45s ease;width:calc(var(--time) - .2rem);height:.3rem;border:.1rem solid #fff;border-radius:.3rem;background-color:#d3d3d3}",""]),t.exports=c},283:function(t,e,o){t.exports=o.p+"img/play-button.d67631b.png"},284:function(t,e,o){t.exports=o.p+"img/pause-button.12897fc.png"},285:function(t,e,o){"use strict";o.r(e);var r=o(297),n=o.n(r),l={props:{song:{type:Object,required:!0}},data:function(){return{isPlaying:!1,song_current_time:0,song_duration:0}},computed:{audioPlayer:function(){return this.$refs.audioPlayer},progress:function(){var time=this.song_current_time/this.song_duration*100||0;return{"--time":"".concat(time,"%")}}},mounted:function(){var t=this;if(this.audioPlayer.ontimeupdate=function(e){t.song_current_time=t.audioPlayer.currentTime,t.song_duration=t.audioPlayer.duration},n.a.isSupported()?console.log("👋 hello hls.js!"):console.log("🤷🏻‍♂️ Sorry no hls.js"),n.a.isSupported()){var video=this.$refs.audioPlayer,e=new n.a;e.attachMedia(video),e.on(n.a.Events.MEDIA_ATTACHED,(function(){console.log("video and hls.js are now bound together !"),e.loadSource("http://127.0.0.1:3000/ada/ada-ya.m3u8"),e.on(n.a.Events.MANIFEST_PARSED,(function(t,data){console.log("manifest loaded, found "+data.levels.length+" quality level")}))}))}},methods:{handlePlayButton:function(){this.isPlaying?(this.isPlaying=!1,this.audioPlayer.pause()):(this.isPlaying=!0,this.audioPlayer.play())}}},d=(o(281),o(46)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"music-player",style:t.progress},[o("button",{staticClass:"play-icon",class:{playing:t.isPlaying},on:{click:function(e){return t.handlePlayButton()}}},[t._v("play")]),t._v(" "),t._m(0),t._v(" "),o("video",{ref:"audioPlayer",staticClass:"html-player",attrs:{controls:"",controlsList:"nodownload"}},[o("p",[t._v("Your browser does not support HTML5 audio, but you can still.")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"controls"},[e("div",{staticClass:"controls-time"})])}],!1,null,null,null);e.default=component.exports},295:function(t,e,o){"use strict";o(280)},296:function(t,e,o){var r=o(110)(!1);r.push([t.i,".players-list{margin:0 1rem}",""]),t.exports=r},301:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{audioList:[{id:0,title:"ada-ya",isPlaying:!1}]}}},n=(o(295),o(46)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"players-list"},t._l(t.audioList,(function(audio){return o("div",{key:audio.id,staticClass:"audio-player-skin"},[o("audio-player",{attrs:{song:audio}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AudioPlayer:o(285).default})}}]);