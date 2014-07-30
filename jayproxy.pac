
function FindProxyForURL(u,h){US="PROXY m.jayproxy.org:7778"
JP="PROXY jp.jayproxy.net:6002"
UK="PROXY uk.jayproxy.net:6001"
if(dnsDomainIs(h,"plumbr.eu"))return US;if(dnsDomainIs(h,"eclipse.org"))return US;if(dnsDomainIs(h,"goconspire.com"))return US;if(dnsDomainIs(h,"android.com"))return US;if(dnsDomainIs(h,"html5rocks.com"))return US;if(dnsDomainIs(h,"justyo.co"))return US;if(dnsDomainIs(h,"katespade.com"))return US;if(dnsDomainIs(h,"scholar.google.com"))return JP;if(dnsDomainIs(h,"bbc.co.uk"))return UK;if(h.indexOf(".blogspot.")!==-1)return US;if(h.indexOf(".gov.sg")!==-1)return US;if(h.indexOf(".google.")!==-1)return US;if(h.indexOf(".tw")!==-1)return US;if(h.indexOf(".jp")!==-1)return JP;a=["ap-sin-00001.s3.amazonaws.com","tudou.com","weibo.com","xunlei.com","sohu.com","taobao.com","qq.com","163.com","sina.cn","alipay.com","youku.com"];for(i=0;i<a.length;i++){if(dnsDomainIs(h,a[i])){return"DIRECT"}}
a=["plumbr.eu","zeroturnaround.com","ebay.com","fwmrm.net","katespade.com","abbyy.com","huihuizi.com","imaginex.com","omnigroup.com","st-js.org","clubmonaco.com","nordstromimage.com","sephora.com","psi.gov.sg","tritonmedia.com","vevo.com","fjne-filmy.info","nordstrom.com","civilianus.org","minguofan.net","kastatic.org","khanacademy.org","helponclick.com","binaryage.com","asahi.com","mfa.gov.sg","sstatic.net","digitalocean.com","googleapis.com","golang.org","ft.com","biostars.org","btcguild.com","trellocdn.com","coach.com","oreilly.com","thrashermagazine.com","trello.com","migration.sa.gov.au","pinterest.com","shopify.com","haibei.com.au","dullgull.com","last.fm","vagrantup.com","hioz.us","syd.to","domainsite.com","name.com","phonegap.com","udacity.com","linuxmint.com","soundcloud.com","nexon.net","godaddy.com","paywithpoli.com","sydneytoday.com","anz.com","polipayments.com","ideaingshop.com","kaggle.com","abercrombie.com","feedbin.me","chinapress.com.my","zaobao.com","asiaone.com","zaobao.com.sg","meetme.com","jayproxy.com","iask.ca","yourmemoir.com","appturbo.it","stackoverflow.com","vemmaapr.com","imrworldwide.com","scorecardresearch.com","conviva.com","lphbs.com","cbsstatic.com","2mdn.net","cbsi.com","livefyre.com","cbs.com","cloudflare.com","liveleak.com","vervesample.com","vbuildernow.com","vemmabuilder.com","vdlbuilder.com","fb.me","bloomberg.com","5168.us","589go.net","serverfault.com","amazon.com","digg.com","freelan.org","imgur.com","topshop.com","harvard.edu","hotfrog.com","twitch.tv","deezer.com","psu.edu","galaxyproject.org","nx.com","nexon.com","lav-shop.no","arestel.pt","apsalar.com","direct2dll.com","1x.com","yahoo.com","nlog.cc","engadget.com","w3schools.com","500px.net","500px.com","pinimg.com","minus.com","elkjop.no","gamer.com.tw","netflix.com","homestaynetwork.org","git-scm.com","macquarieuv.com.au","mq.edu.au","clv.com.au","delicious.com","granteq.com","udn.com","udn.com.tw","dota2.com","steampowered.com","4shared.com","pchome.com.tw","gimpshop.com","gufeng521.spaces.live.com","speedpluss.org","mingpaovan.com","stoweboyd.com","tw.myblog.yahoo.com","joachims.org","maiio.net","m.slandr.net","idv.tw","mail-archive.com","tweete.net","cn.dayabook.com","alexlur.org","greatfirewallofchina.org","nrk.no","zoozle.net","omnitalk.","cmule.com","gappp.org","givemesomethingtoread.com","robtex.com","thelifeyoucansave.com","amoiist.com","placemix.com","twitstat.com","zh.pokerstrategy.com","zhongmeng.org","tinypaste.com","wo.tc","youtu.be","prozz.net","cc9007.spaces.live.com","penchinese.net","mesotw.com","privacybox.de","liaowangxizang.net","firstfivefollowers.com","rfamobile.org","dalailama.com","bigsound.org","gtricks.com","bbg.gov","feedly.com","myforum.com.hk","news.chinatimes.com","imlive.com","webshots.com","ptt.cc","lsforum.net","naveensrinivasan.com","makemymood.com","foxdie.us","juliereyc.com","5i01.com","beijingspring.com","drewolanoff.com","twiffo.com","blinkx.com","michaelmarketl.com","views.fm","acgkj.com","soupofmedia.com","pioneer-worker.forums-free.com","autoproxy-gfwlist.googlecode.com","po2b.com","yidio.com","socialwhale.com","twitonmsn.com","www.klip.me","5maodang.com","idouga.com","whyx.org","peacehall.com","tangben.com","mac.com","feeds2.feedburner.com","sthoo.com","cl.ufree.org","rfa.org","sokamonline.com","tweetedtimes.com","wrangl.com","hulu.com","twiyia.com","portis21.spaces.live.com","sethwklein.net","dupola.com","dupola.net","blog.summify.com","coolaler.com","ngensis.com","zh.netlog.com","mp","novelasia.com","v70.us","fgmtv.org","rssmeme.com","futuremessage.org","openleaks.org","benjaminste.in","blog.youthwant.com.tw","blog.fizzik.com","sweux.com","chrispederick.com","amzs.me","cn.calameo.com","wefong.com","fan-qiang.com","intellectuapp.com","forum.idsam.com","shangfang.org","longhair.hk","hkzone.org","samsoff.es","kcsoftwares.com","twip.me","free.fr","zannel.com","gaopi.net","robustnessiskey.com","internetfreedom.org","fc2.com","taolun.info","bestforchina.org","bnrmetal.com","x.xcity.jp","www.wet123.com","cna.com.tw","wikipedia.org","sorting-algorithms.com","kusocity.com","twttr.com","backchina.com","thespeeder.com","tuidang.net","sinopitt.info","betfair.com","viewmorepics.myspace.com","middle-way.net","dajiyuan.com","video.google.com","youmaker.com","anonymizer.com","cnavista.com.tw","hkg.westkit.net","wretch.cc","xizang-zhiye.org","falsefire.com","fuckgfw.com","topnews.in","wpoforum.com","dadazim.com","www.dwheeler.com","yousendit.com","api.supertweet.net","thechangelog.com","lupm.org","tweetdeck.com","t35.com","shell.cjb.net","tpi.org.tw","networkedblogs.com","hahlo.com","coolder.com","civilhrfront.org","blog.iphone-dev.org","3b8.cc","holz.byethost8.com","e-gold.com","jitouch.com","youtubecn.com","livingonline.us","your-freedom.net","fringenetwork.com","udn.com","kagyuoffice.org.tw","bbs.mychat.to","womensrightsofchina.org","tw.voa.mobi","6-4.net","quadedge.com","blog.yam.com","zhonggtuotese.net","packages.debian.org","rangzen.org","flowerofhappiness.spaces.live.com","page2rss.com","freedomhouse.org","footwiball.com","shixiao.org","desc.se","sod.co.jp","twistar.cc","rocmp.org","gardennetworks.org","njuice.com","newstin.com","appleactionews.com","whitebear.freebearblog.org","puffstore.com","advanscene.com","onlylady.cn","miroguide.com","centurys.net","planetsuzy.org","cdpwu.org","myav.com.tw","dw-world.com","noobbox.com","brandonhutchinson.com","limesn0w.com","bbs.nsysu.edu.tw","rapidsharedata.com","diigo.com","xml-training-guide.com","freeoz.org","blogimg.jp","twitterkr.com","fulue.com","turningtorso.com","sytes.net","mymedia.yam.com","mk5000.com","americangreencard.com","cao.im","nintendium.com","xiezhua.com","thedw.us","weekmag.info","markmail.org","forum.sina.com.hk","rileyguide.com","twitgoo.com","echofon.com","pdetails.com","wangyi64.spaces.live.com","fourthinternational.org","www.linksalpha.com","slinkset.com","bloodshed.net","chinaxchina.com","www.bulbous.freeserve.co.uk","chinasocialdemocraticparty.com","marines.mil","chinese-hermit.net","nextmedia.com","tweetboner.biz","writer.zoho.com","furl.net","wordsandturds.com","cnn.com","dvorak.org","buy.yahoo.com.tw","nytimes.com","geohot.com","wiki.keso.cn","xinmiao.com.hk","skype.com","retweetist.com","uniteddaily.com.my","bill2-software.com","gstatic.com","brizzly.com","wallpapercasa.com","213.251.145.96","mypopescu.com","ezpc.tk","encrypted.google.com","vmixcore.com","cl.ly","cpj.org","sogclub.com","openid.com","tw.jiepang.com","weeewooo.net","qtweeter.com","chinamule.com","|https:","92ccav.com","soundofhope.org","news.sina.com.hk","eriversoft.com","emule-ed2k.com","one.xthost.info","petardas.com","blog.dribbble.com","goldwave.com","ied2k.net","chinesen.de","hugoroy.eu","browserscope.org","izaobao.us","zuihulu.net","anonym.to","alwaysdata.net","xvideos.com","blog.path.com","xinsheng.net","googlepages.com","newspp.org","xa.yimg.com","matainja.com","democrats.org","cuihua.org","chinainterimgov.org","ibros.org","fangeming.com","gov.tw","icl-fi.org","a-normal-day.com","a5.com.ru","bill.zhong.pp.ru","lookatgame.com","philly.com","usinfo.state.gov","basetimesheightdividedby2.com","laogai.org","mingpaonews.com","gopetition.com","longtermly.net","gongwt.com","fooooo.com","bbs.ecstart.com","gamebase.com.tw","life.fly4ever.me","api.path.com","vidoemo.com","morningsun.org","tibetalk.com","blogtd.org","htmldog.com","api.proxlet.com","mimivip.com","tap11.com","yilubbs.com","pengyulong.com","etools.ncol.com","dy24k.info","chinainperspective.com","london.neighborhoodr.com","lookpic.com","webs-tv.net","hakkatv.org.tw","williamlong.spaces.live.com","mobileways.de","c-est-simple.com","myfreshnet.com","plays.com.tw","journalofdemocracy.org","chaos.e-spacy.com","cookingtothegoodlife.com","blog.sogoo.org","legaltech.law.com","taiwandaily.net","thevivekspot.com","mingpaomonthly.com","plus28.com","21code.com","www.urbanoutfitters.com","twt.fm","ladbrokes.com","dayaarmongol.ning.com","wikimapia.org","dw.de","blog.topify.com","www.somee.com","blog.foolsmountain.com","app.hkatvnews.com","catholic.org.hk","news.msn.com.tw","chuizi.net","ka-wai.com","wujie.net","hkepc.com","bjzc.org","nexton-net.jp","entermap.com","brightkite.com","ustream.tv","lyricsquote.com","psblog.name","video.tiscali.it","mad-ar.ch","gdzf.org","bbs.kimy.com.tw","whereiswerner.com","cdpweb.org","sugarsync.com","helloqueer.com","cuiweiping.net","dotplane.com","ccdtr.org","bot.nu","danke4china.net","gather.com","wforum.com","blog.syx86.com","tvunetworks.com","futurechinaforum.org","akiba-online.com","forum.setty.com.tw","osfoora.com","guomin.us","mizzmona.com","billywr.com","twittertim.es","felixcat.net","cdn.staticstuff.net","blog.mongodb.org","rubyinstaller.org","akamaihd.net","stoptibetcrisis.net","generesis.com","vlog.xuite.net","minimalmac.com","www.6v6dota.com","newcenturymc.com","newcenturynews.com","shaunthesheep.com","newsminer.com","jwmusic.org","www.ned.org","m.oulove.org","devio.us","gmbd.cn","hkgreenradio.org","mtw.tl","bbc.co.uk","nicovideo.tw","siteks.uk.to","tumblr.com","internationalrivers.org","blackra1n.com","akamai.net","tv.com","coolloud.org.tw","wikimedia.org","aculo.us","breakingtweets.com","web.pts.org.tw","secretchina.com","meme.yahoo.com","bebo.com","mobatek.net","spencertipping.com","support","hrichina.org","tibetwrites.org","mingpaony.com","chinatweeps.com","songjianjun.com","transgressionism.org","technorati.com","davidslog.com","blog.openinkpot.org","stuffimreading.com","video.aol.ca","yzzk.com","uyghurcongress.org","bullog.org","megurineluka.com","friendfeed.com","liudejun.com","tiandixing.org","oizoblog.com","exploader.net","roodo.com","tbpic.info","putlocker.com","toodoc.com","opera.com","qanote.com","if-not-true-then-false.com","upload4u.info","prosiben.de","blog.taragana.com","myforum.com.uk","referer.us","zengjinyan.spaces.live.com","readingtimes.com.tw","1pondo.tv","xfm.pp.ru","post.anyu.org","tui.orzdream.com","adult168.com","kt.kcome.org","w.idaiwan.com","picasaweb.google.com","cbs.ntu.edu.tw","urlparser.com","peopo.org","ipicture.ru","ch.shvoong.com","aircrack-ng.org","mathiew-badimon.com","blog.ifttt.com","keepandshare.com","avoision.com","coveringweb.com","forum.chinatimes.com","wanderinghorse.net","vot.org","chinacomments.org","wikileaks.ch","ronjoneswriter.com","bbsfeed.com","bolin.netfirms.com","sha7.info","dontmovetochina.com","hidemyass.com","myparagliding.com","pandora.com","getcloudapp.com","blog.expofutures.com","imagevenue.com","status.twhirl.org","lists.w3.org","chinafreepress.org","wenku.com","myeclipseide.com","xh4n.cn","dropbox.com","hellouk.org","taiwanyes.ning.com","www.aolnews.com","picturesocial.com","bullogger.com","888.com","seezone.net","nooidea.com","theblemish.com","anthonycalzadilla.com","rsf.org","rthk.hk","boardreader.com","blog.pentalogic.net","geocities.com","wiredbytes.com","nobelprize.org","wuerkaixi.com","budaedu.org","heiyo.info","tnaflix.com","blog.tiney.com","paperb.us","sites.google.com","zh.uncyclopedia.wikia.com","kaiyuan.de","www.stackfile.com","vimeocdn.com","ameblo.jp","sublexical.spaces.live.com","ccthere.com","zyzg.us","markmilian.com","webcache.googleusercontent.com","sinoants.com","feedbooks.mobi","tumblweed.org","feedzshare.com","www.getyouram.com","feedproxy.google.com","blogcatalog.com","xcritic.com","mysinablog.com","www.ajsands.com","hwinfo.com","hk.jiepang.com","pcworld.com","tsemtulku.com","spb.com","parislemon.com","vimeo.com","grandtrial.org","yuming.flnet.org","cydia.ifuckgfw.com","zaobao.com","nobodycanstop.us","starp2p.com","dalailamaworld.com","ziddu.com","pbxes.com","getfreedur.com","1free.ws","bobulate.com","sevenload.com","lockdown.com","metacafe.com","spankwire.com","zaozon.com","hk.news.yahoo.com","news.pts.org.tw","peeasian.com","mixero.com","thepiratebay.org","toutfr.com","barnabu.co.uk","twreg.info","twitzap.com","bignews.org","tora.to","fileserve.com","scribd.com","wengewang.org","wisevid.com","bbs.allhabit.com","wenhui.ch","archlinux.fr","tttan.com","webfee.tk","sharecool.org","vanemu.cn","times.hinet.net","verizon.net","sacom.hk","imdb.com","wikiwiki.jp","wufi.org.tw","bt95.com","hackthatphone.net","neverforget8964.org","hotfile.com","disp.cc","riku.me","cloudfront.net","alwaysdata.com","ernestmandel.org","blog.youxu.info","zh.wikipedia.org","gardennetworks.com","tjholowaychuk.com","tube.com","zh.m.wikipedia.org","huanghuagang.org","vanilla-jp.com","kinghost.com","subacme.rerouted.org","forum.my903.com","newscn.org","simpleproductivityblog.com","freexinwen.com","xuzhuoer.com","karayou.com","forum.cyberctm.com","saiq.me","heungkongdiscuss.com","ggssl.com","china101.com","orn.jp","gartlive.com","waikeung.org","allinfa.com","twittergadget.com","cecc.gov","bitsnoop.com","paint.net","vcfbuilder.org","itunes.apple.com","pidown.com","mobypicture.com","cdnews.com.tw","lovequicksilver.com","soc.mil","woeser.com","oopsforum.com","doubleaf.com","hanunyi.com","9bis.com","qkshare.com","time.com","newspeak.cc","cn2.streetvoice.com","dl.box.net","tripod.com","chevronwp7.com","wordpress.com","hen.bao.li","c-spanvideo.org","daxa.cn","zonaeuropa.com","c1521.biz.tm","mingpaosf.com","twurl.nl","hihiforum.com","bbs.skykiwi.com","slheng.com","shifeike.blog125.fc2blog.net","t.jteet.com","8000.com","twitiq.com","sneakme.net","blog.pchome.com.tw","fbcdn.net","vaayoo.com","bloglines.com","vids.myspace.com","whydidyoubuymethat.com","pixnet.net","photofocus.com","laomiu.com","files2me.com","blogs.tampabay.com","cn.news.cnyes.com","igfw.tk","tchrd.org","destiny.xfiles.to","feministteacher.com","calameo.com","wattpad.com","twitvid.com","twitter.jp","kzeng.info","youxu.info","lianyue.net","blog.bitly.com","tw.streetvoice.com","megaupload.com","hk.rd.yahoo.com","youtube.com","zhreader.com","netme.cc","ncn.org","12bet.com","zhao.jinhai.de","tweeplike.me","analyze-v.com","edubridge.com","aboutus.org","premeforwindows7.com","ezpeer.com","2000fun.com","m-team.cc","nf.id.au","sowers.org.hk","dalianmeng.org","freewebs.com","nowtorrents.com","atlaspost.com","chinaway.org","jyzj.waqn.com","stickam.com","dotheyfolloweachother.com","asianews.it","9001700.com","thepiratebay.se","thetrotskymovie.com","kendincos.net","kurtmunger.com","maruta.be","qusi8.net","hk-pub.com","getiton.com","touch99.com","dimitrik.free.fr","spapps.co","hsjp.net","bbs.51.ca","linux-engineer.net","1984blog.com","eyny.com","lvhai.org","chinainperspective.net","ozchinese.com","fuckgfw.org","www.forum4hk.com","goodreaders.com","tw.news.yahoo.com","asiaharvest.org","lidecheng.com","t.co","twstar.net","new-akiba.com","xmusic.fm","hk.video.news.yahoo.com","nic.cz.cc","domainhelp.search.com","tvboxnow.com","geek-art.net","gseeker.com","bet365.com","power.com","t.sunxun.info","ogaoga.org","default.secureserver.net","news.singtao.ca","geocities.jp","tibetonline.tv","hkreporter.com","modfetish.com","jobso.tv","ait.org.tw","ow.ly","ignitedetroit.net","topshare.us","unholyknight.com","cctongbao.com","twitthat.com","ranyunfei.com","sharpdaily.com.hk","minzhuhua.net","tweepmag.com","video.fdbox.com","graphis.ne.jp","bitshare.com","iconpaper.org","ilove80.be","zh.wikisource.org","zdnet.com.tw","www.powerpointninja.com","tynsoe.org","khmusic.com.tw","blog.birdhouseapp.com","hiitch.com","zuo.la","tycool.com","blog.kangye.org","kui.name","cubicle17.com","yyii.org","proxy.org","thomasbernhard.org","vine.co","itweet.net","futureme.org","muzi.net","blogs.icerocket.com","amnesty.org","skimtube.com","duckmylife.com","twitter.com","nordstrom.com","nordstromimage.com","lenwhite.com","tokyo-hot.com","blog.dayoneapp.com","asdfg.jp","blog.nownews.com","cnd.org","imageshack.us","getjetso.com","freewallpaper4.me","seesmic.com","videomo.com","en.wikipedia.org","fillthesquare.org","retweeteffect.com","sproutcore.com","getsmartlinks.com","heix.pp.ru","ueuo.com","program-think.spaces.live.com","aboluowang.com","jayparkinsonmd.com","wangafu.net","bralio.com","sourceforge.net","hk.knowledge.yahoo.com","twit2d.com","blog.51.ca","freegao.com","twibs.com","wanglixiong.com","oursogo.com","zhanbin.net","kompozer.net","plusbb.com","tweetymail.com","huajiadi.spaces.live.com","privatepaste.com","lalulalu.com","nuexpo.com","isgreat.org","666kb.com","hrw.org","ajaxplorer.info","caobian.info","incredibox.fr","twibbon.com","tvider.com","helpeachpeople.com","hutianyi.net","xys.org","namsisi.com","teamseesmic.com","tibet.org.tw","md-t.org","secure.wikimedia.org","msguancha.com","heartyit.com","wengewang.com","blog.klip.me","zhufeng.me","forum.slime.com.tw","0rz.tw","jkforum.net","whatblocked.com","cotweet.com","citizenlab.org","api.linksalpha.com","vapurl.com","qoos.com","erights.net","anobii.com","www.radioaustralia.net.au","pign.net","mog.com","fsurf.com","fredwilson.vc","hechaji.com","tkforum.tk","yong.hu","trendsmap.com","dl-laby.jp","thesartorialist.com","soup.io","dailidaili.com","mx981.com","powercx.com","9bis.net","beta.usejump.com","141hongkong.com","bonjourlesgeeks.com","interestinglaugh.com","4.gp","ippotv.com","peerpong.com","7capture.com","98.to","marco.org","psiphon.civisec.org","fengzhenghu.com","www.debugmode.com","video.foxbusiness.com","j.mp","voachinese.com","space-scape.com","laoyang.info","dailymotion.com","new-3lunch.net","bcc.com.tw","voachineseblog.com","eamonnbrennan.com","topstyle4.com","x1949x.com","forum.iset.com.tw","palacemoon.com","apidocs.linksalpha.com","mhradio.org","webworkerdaily.com","thehousenews.com","yvesgeleyn.com","dontfilter.us","obmem.com","pullfolio.com","civicparty.hk","zarias.com","greatfirewall.biz","pastie.org","web2project.net","curvefish.com","s3.amazonaws.com","marxists.org","liuhanyu.com","boxun.tv","xuzhiyong.net","newsforums.bbc.co.uk","qtrac.eu","ginx.com","iu45.com","tv-intros.com","appledaily.com.tw","mingpaotor.com","nekoslovakia.net","wellplacedpixels.com","freessh.us","cuhkacs.org","slavasoft.com","gtkforums.com","panluan.net","cafepress.com","chinese.wsj.com","dtiserv2.com","t.16class.cn","upcoming.yahoo.com","nicovideo.jp","zeutch.com","newchen.com","lrfz.com","goodreads.com","blog.jackjia.com","foxsub.com","justin.tv","secretgarden.no","tw.yahoo.com","mixx.com","twibase.com","uploaded.to","ialmostlaugh.com","tzangms.com","thechinabeat.org","freeciv.org","jingpin.org","facebook.com","picturedip.com","dabr.co.uk","dadi360.com","tomsc.com","myaudiocast.com","friendfeed-media.com","rxhj.net","blog.gowalla.com","nemesis2.qx.net","uwants.net","identi.ca","list.ly","news.atebits.com","duckload.com","kineox.free.fr","zkaip.com","bkite.com","latimesblogs.latimes.com","nps.gov","wordboner.com","wqyd.org","togetter.com","t.kun.im","torproject.org","blog.pikchur.com","gclooney.com","hkej.com","koolsolutions.com","mmmca.com","great-firewall.com","chrlcg-hk.org","movabletype.com","ifan.cz.cc","dw-world.de","anchorfree.com","antidrm.hpg.ig.com.br","hasaowall.com","tweetwally.com","xing.com","roosong.cn","podictionary.com","stickeraction.com","derekhsu.homeip.net","wzyboy.im","news.yam.com","buzzurl.jp","techlifeweb.com","taa-usa.org","appledaily.com","nysingtao.com","tuxtraining.com","xbookcn.com","witopia.net","wenyunchao.com","travelinlocal.com","thetibetpost.com","blog.boxcar.io","www.supertweet.net","szbbs.net","canadameet.com","backpackers.com.tw","home.so-net.net.tw","uncyclopedia.info","greatfirewallofchina.net","17e.org","tibetanyouthcongress.org","williamlong.jaiku.com","alabout.com","pbxes.org","verybs.com","avidemux.org","alkasir.com","shinychan.com","shenshou.org","baidu.jp","typepad.com","galenwu.com","areca-backup.org","bao.li","multiupload.com","greenvpn.net","blog.usa.gov","cn.streetvoice.com","thedieline.com","berlintwitterwall.com","hungerstrikeforaids.org","my.keso.cn","mzstatic.com","ggpht.com","hujiachina.spaces.live.com","bcchinese.net","bbs.newsgroup.la","sesawe.net","funp.com","wukangrui.net","jeanyim.com","chinaworker.info","pixelqi.com","sjum.cn","chengmingmag.com","soumo.info","licdn.com","xpud.org","latelinenews.com","s1heng.com","www.loiclemeur.com","e-info.org.tw","c1522.mooo.com","old.nabble.com","video.aol.com","mitbbs.com","ruyiseek.com","qxbbs.org","president.gov.tw","boltbrowser.com","popyard.org","yunchao.net","dolc.de","9999cn.com","ironpython.net","demo.opera-mini.net","alasbarricadas.org","easy-share.com","plurktop.mmdays.com","tweetmeme.com","chinese.engadget.com","rapidscan.me","aiweiweiblog.com","hk.yahoo.com","badoo.com","forum.mymaji.com","appspot.com","mixedmedialabs.com","frommel.net","mininova.org","yegle.net","blog.sufeng.org","blog.sina.com.tw","bbsland.com","blogtd.net","ventureswell.com","popularpages.net","photos.dailyme.com","hk.search.yahoo.com","tcno.net","squarespace.com","hkgolden.com","speckleapp.com","newtalk.tw","shkspr.mobi","ac.jiruan.net","www.zaurus.org.uk","cdp1998.org","twisternow.com","881903.com","blog.lester850.info","uighurbiz.net","news.google.com.hk","nch.com.tw","dojin.com","ibiblio.org","fakku.net","wuala.com","mypaper.pchome.com.tw","blog.qooza.hk","iphonix.fr","blogs.yahoo.co.jp","news.sina.com.tw","fanfou.la","gutteruncensored.com","hdtvb.net","shapeservices.com","psiphon.ca","rthk.org.hk","washeng.net","bbs.ozchinese.com","purepdf.com","beta.iset.com.tw","twbbs.net.tw","pcdiscuss.com","sitemaps.org","flickrhivemind.net","linuxtoy.org","thedailywh.at","addictedtocoffee.de","geekerhome.com","greatroc.org","alternate-tools.com","marxist.com","global.hkepc.com","kanzhongguo.com","help.linksalpha.com","dlsite.com","crossthewall.net","twbbs.org","xinshijue.com","woopie.jp","hqcdp.org","hkjp.org","stoneip.info","googleusercontent.com","old-cat.net","twitese.spaces.live.com","all-that-is-interesting.com","wiki.phonegap.com","camera.chinatimes.com","instagram.com","yx51.net","whippedass.com","gb.chinatimes.com","unknownspace.org","tweetrans.com","jyxf.net","uushare.com","abc.pp.ru","sis001.com","memedia.cn","gpass1.com","megarotic.com","zengjinyan.org","pandora.tv","amiblockedornot.com","zhinengluyou.com","chinesenewsnet.com","twitterfeed.com","hkjp.easyweb.hk","ea.com.cn","ifcss.org","pwned.com","thumbzilla.com","hecaitou.net","www.wangruowang.org","koornk.com","bbs.sina.com","leecheukyan.org","theqii.info","blip.tv","tweetbackup.com","share.youthwant.com.tw","gzone-anime.info","1984bbs.org","penthouse.com","china-green-party.spaces.live.com","bbs.tuitui.info","uploadstation.com","alliance.org.hk","wearn.com","askynz.net","tt1069.net","teck.in","thisiswhyyouarefat.com","qixianglu.cn","bettween.com","gun-world.net","kenengba.com","crackle.com","twftp.org","zlib.net","bbs.qmzdd.com","lipuman.com","tunein.com","uwants.com","gotw.ca","photo.utom.us","dizhidizhi.com","pbwiki.com","docstoc.com","navigeaters.com","eltondisney.com","flecheinthepeche.fr","1bao.org","yeelou.com","corumcollege.com","google.cn","hkheadline.com","wikileaks.org","chinesepen.org","itaboo.info","rfachina.com","theinternetwishlist.com","twitgether.com","chromium.org","collateralmurder.com","lesscss.org","realraptalk.com","2shared.com","emscripten.org","chinagreenparty.org","fireofliberty.org","isohunt.com","meirixiaochao.com","rutube.ru","mike.cz.cc","www.freetibet.org","ironicsoftware.com","htxt.it","mayimayi.com","businesstimes.com.cn","aladding.com","beijing1989.com","ping.fm","mondex.org","hudatoriq.web.id","farxian.com","duihua.org","bowenpress.com","fotop.net","blog.syx86.cn","thegatesnotes.com","faststone.org","ulike.net","365singles.com.ar","calebelston.com","turbobit.net","p-cdn.com","liujianshu.com","daylife.com","allinfo.com","lsd.org.hk","freegateget.googlepages.com","parade.com","mobile01.com","cynscribe.com","humanities.uchicago.edu","atchinese.com","info.51.ca","gazotube.com","nownews.com","v-state.org","cocoa.zonble.net","popyard.com","forum.baby-kingdom.com","99bbs.com","tor.updatestar.com","ytht.net","willw.net","eyespirit.info","wangjinbo.org","dowei.org","tianhuayuan.com","fangbinxing.com","t.fishnote.net","gongminliliang.com","cdjp.org","code1984.com","gzm.tv","taiwannation.50webs.com","tuite.im","sharebee.com","dailynews.sina.com","chinadigitaltimes.net","tagwalk.com","chinagfw.org","aolchannels.aol.com","wenxuecity.com","dongyangjing.com","lizhizhuangbi.com","cdp.sinica.edu.tw","meetup.com","hk.myblog.yahoo.com","logbot.net","zhongxing9hao.net.cn","junefourth-20.net","seapuff.com","allonlinux.free.fr","blogspot.hk","rayfme.com","kun.im","t.huhaitai.com","fflick.com","slutload.com","globaldelight.com","postadult.com","yi.org","myboooks.googlepages.com","epochtimes.ie","opnir.com","2-hand.info","dit-inc.us","2008xianzhang.info","pbworks.com","emacsblog.org","rapidshare1.com","englishfromengland.co.uk","akiraclub.com","presentationzen.com","img.ly","tuanzt.com","bit.ly","bodhilinux.com","makzhou.warehouse333.com","share.ovi.com","mihua.org","ck101.com","wallornot.org","twapperkeeper.com","rushbee.com","sendspace.com","proxomitron.info","google.com","badassjs.com","liansi.org","fanqiangyakexi.net","googlevideo.com","qvodzy.org","hacken.cc","ismprofessional.net","huping.net","wiki.jqueryui.com","multiply.com","myshare.url.com.tw","fuckcnnic.net","app.heywire.com","gc.apple.com","atnext.com","lists.debian.org","nccwatch.org.tw","globalmuseumoncommunism.org","streamingthe.net","findbook.tw","thehungrydudes.com","www.voy.com","nexttv.com.tw","discuss.com.hk","usmc.mil","awardwinningfjords.com","zuola.com","wetpussygames.com","zshare.net","blog.instapaper.com","89-64.org","linglingfa.com","twifan.com","67.220.91.23","cn.voa.mobi","ngs2.info","fanfou.de","vatn.org","megavideo.com","tibetfund.org","dajusha.baywords.com","wiki.oauth.net","tistory.com","chinese.soifind.com","fzh999.net","creaders.net","m.plixi.com","hkbf.org","wqlhw.com","forum.nownews.com","overlapr.com","us.to","ourdearamy.com","tianzhu.org","wapedia.mobi","allaboutalpha.com","forum.tvb.com","moviefap.com","twtkr.com","shwchurch3.com","sysadmin1138.net","newgrounds.com","rsf-chinese.org","lookingglasstheatre.org","de-sci.org","xmovies.com","duoweitimes.com","rapidshare8.com","chingcheong.com","danwei.org","greenparty.org.tw","blog.aiweiwei.com","van698.com","k2.xrea.com","mlcool.com","omgili.com","clientsfromhell.net","jiehua.cz","livevideo.com","n.yam.com","wiredpen.com","chinasoul.org","internetpopculture.com","sogrady.me","teashark.com","etizer.org","westca.com","rapidshare.com","oikos.com.tw","315lz.com","letscorp.net","powerapple.com","hk32168.com","salvation.org.hk","joeedelman.com","rfi.fr","nurgo-software.com","i2runner.com","hidecloud.com","www.mycould.com","marxist.net","tumblr.awflasher.com","tweetphoto.com","tokyo-247.com","gabocorp.com","googlecode.com","change.org","turbotwitter.com","thisav.com","free-ssh.com","blog.instagram.com","gfw.org.ua","viki.com","weijingsheng.org","puttycm.free.fr","favorious.com","srcf.ucam.org","softwarebychuck.com","illusionfactory.com","efksoft.com","foursquare.com","twitter.fishnote.net","asiademo.org","islam.org.hk","tiananmenmother.org","mirrorbooks.com","www.tiffanyarment.com","twimg.com","wlx.sowiki.net","4bluestones.biz","tweepguide.com","twitlonger.com","rconversation.blogs.com","revleft.com","october-review.org","codeboxapp.com","blog.chinatimes.com","thediplomat.com","ressim.net","snaptu.com","fc2china.com","no-ip.com","sendoid.com","blog.palm.com","eventful.com","yeeyi.com","s.xiaod.in","chn.chosun.com","amnestyusa.org","appledaily.com.hk","thelius.org","imkev.com","websitepulse.com","panoramio.com","open.com.hk","youversion.com","cyberghost.natado.com","rlwlw.com","twitcause.com","flickr.com","yanghengjun.spaces.live.com","en.favotter.net","waiwaier.com","site90.net","hootsuite.com","dongtaiwang.net","telecomspace.com","delcamp.net","wg1966.com","dev102.com","301works.org","67.220.91.18","chinaeweekly.com","youpai.org","mpettis.com","log.riku.me","my.opera.com","nokola.com","tsctv.net","uocn.org","tldp.org","cherrysave.com","gdbt.net","chenyehao.spaces.live.com","news.pchome.com.tw","dwnews.com","hjclub.info","h1n1china.org","goofind.com","hotspotshield.com","sopcast.com","blog.davidziegler.net","veoh.com","i2p2.de","kingstone.com.tw","twilog.org","twittermail.com","reflectivecode.com","fail.hk","6park.com","piring.com","tuite.googlecode.com","aiyori.org","blog.joeyrobert.org","melon-peach.com","cenci.tk","google.com.hk","gamer.com.tw","recordhistory.org","exblog.jp","tsquare.tv","purplera1n.com","honeonet.spaces.live.com","brucewang.net","blog.rockmelt.com","flagfox.net","sesawe.org","vincnd.com","edoors.com","ieemdai.spaces.live.com","etaiwannews.com","plurk.com","malaysiakini.com","wexiaobo.org","goo.gl","bd.zhe.la","favstar.fm","googleapis.com","cl.d0z.net","blog.pathtosharepoint.com","revver.com","twitturly.com","getsocialscope.com","webbang.net","twistory.net","chinaaffairs.org","www.moztw.org","paper.li","nighost.org","sejie.com","meteorshowersonline.com","faydao.com","trialofccp.org","tweetmylast.fm","anti.anti.cnn.googlepages.com","muouju.com","libertytimes.com.tw","china21.org","bbcchinese.com","pin6.com","t.orzdream.com","feer.com","blog.kl.am","bloomfortune.com","sfileydy.com","nanyangpost.com","sandnoble.com","read100.com","classicalguitarblog.net","igfw.net","antiwave.net","farwestchina.com","daolan.net","gfwinterceptor.googlecode.com","blog.pilotmoon.com","connect.facebook.net","blog.kickstarter.com","yuanming.net","geekmanuals.com","amusingplanet.com","guancha.org","chinayuanmin.org","fring.com","archive.org","tamiaode.tk","retweetrank.com","jiaoyou8.com","twibble.de","gaymap.cc","xinhuanet.org","blog.istef.info","blogspot.com","knol.google.com","rti.org.tw","magazines.sina.com.tw","fscked.org","m.tweete.net","cellulo.info","truth101.co.tv","tibet.net","code.google.com","uncyclomedia.org","ohloh.net","freakshare.com","news.ghostery.com","youtube-nocookie.com","winwhispers.info","savetibet.org","siyi123123123.spaces.live.com","gongmeng.info","netcolony.com","kechara.com","break.com","cenews.eu","xxxx.com.au","h-china.org","voanews.com","blog.s135.com","uni.cc","tuite.in","proxyroad.com","dpp.org.tw","pk.com","hnjhj.com","thkphoto.com","slideshare.net","im.tv","bbs2.newsgroup.la","twimbow.com","cclife.org","hkday.net","1984bbs.com","iphonehacks.com","changp.com","solozorro.tk","justtristan.com","pmates.com","waigaobu.com","naol.ca","adultfriendfinder.com","collateralmurder.org","twitbrowser.net","docs.google.com","mediafire.com","theatrum-belli.com","geocities.co.jp","yahoo.com.hk","www.wan-press.org","t.neolee.cn","stonegames.net","dzze.com","python.com.tw","throughnightsfire.com","liuxiaotong.com","heroku.com","mashable.com","72.52.81.22","axureformac.com","64tianwang.com","domain.club.tw","imageflea.com","wangruoshui.net","dougscripts.com","yogichen.org","shenyunperformingarts.org","wjd.name","blogs.myspace.com","sankaizok.com","pekingduck.org","blogearth.org","video.aol.co.uk","heqinglian.net","kwongwah.com.my","atj.org.tw","aenhancers.com","ytimg.com","windowsphoneme.com","xiaochuncnjp.com","feeds.feedburner.com","asana.com","xysblogs.org","samair.ru","taiwankiss.com","hotpot.hk","books.com.tw","hk.geocities.com","1024.inc.gs","dphk.org","filesonic.com","filefactory.com","ifanr.com","urlborg.com","minzhuzhongguo.org","twindexx.com","twitreferral.com","linuxconfig.org","sanmin.com.tw","logmike.com","ultraxs.com","highrockmedia.com","theappleblog.com","css.pixnet.in","twa.sh","tacem.org","apigee.com","dongde.com","forum.pchome.com.tw","embr.in","asianwomensfilm.de","feedblitz.com","bugclub.org","xvedios.com","mpinews.com","x365x.com","arctosia.com","tiantibooks.org","abitno.linpie.com","bbs.1tor.com","worstthingieverate.com","kodingen.com","twyac.org","shizhao.org","buugaa.com","zhllg.spaces.live.com","rcinet.ca","threatchaos.com","paper-replika.com","youjizz.com","geekmade.co.uk","xxbbx.com","taiwantt.org.tw","yy.iyatou.com","airodump.net","twblogger.com","penchinese.com","everyday-carry.com","www.greenpois0n.com","sitetag.us","twaud.io","chinainperspective.org","delicious.com","toonel.net","yezimary.spaces.live.com","city9x.com","ithelp.ithome.com.tw","veempiire.com","thebcomplex.com","noypf.com","radiovaticana.org","fanfou.im","chandoo.org","tomayko.com","tonyyan.net","hkjc.com","forum.newsgroup.la","xiaoma.org","so-ga.net","sapikachu.net","pacificpoker.com","blog.sparrowmailapp.com","sitebro.tw","blockcn.com","prayforchina.net","gmhz.org","www.tv.com","spotify.com","blog.exblog.co.jp","www.vegorpedersen.com","liu.lu","twtr2src.ogaoga.org","forum.yorkbbs.ca","36rain.com","peacefire.org","nzchinese.net.nz","cytode.us","hongmeimei.com","waffle1999.com","globalvoicesonline.org","vft.com.tw","livestation.com","tidyread.com","twitpic.com","wezone.net","cochina.org","astonmartinnews.com","twitoaster.com","fofg.org","proxypy.net","tweepml.org","izles.net","blogger.com","pbs.org","share.skype.com","mychinamyhome.com","hellotxt.com","chrispederick.net","andfaraway.net","youthnetradio.org","ftchinese.com","xys.dxiong.com","tapbots.com","junauza.com","mihk.hk","student.tw","wiki.cnitter.com","pinoy-n.com","flipboard.com","notes.alexdong.com","usacn.com","dynawebinc.com","blog.romanandreg.com","advertfan.com","apps.hloli.net","www.eulam.com","xiaohexie.com","chinesetalks.net","fleshbot.com","higfw.com","vinniev.com","get-digital-help.com","linuxreviews.org","jieshibaobao.com","bfsh.hk","bfnn.org","gtap.googlecode.com","picidae.net","freelotto.com","bbs.morbell.com","tweetree.com","pastebin.ca","pastebin.com","truthcn.com","caochangqing.com","liberal.org.hk","mrtweet.com","conoyo.com","gamez.com.tw","steel-storm.com","couchdbwiki.com","oiktv.com","swift-tools.net","mmaaxx.com","emory.edu","youthbao.com","eic-av.com","topsy.com","pose.com","blog.lightbox.com","yeeyan.org","designerol.com","knowledgerush.com","ebookee.com","so-news.com","mthruf.com","value-domain.com","doxygen.org","say2.info","deutsche-welle.de","dabr.mobi","digitalnomadsproject.org","github.com","minghui.org","gmail.com","hougaige.com","aboutgfw.com","comefromchina.com","nakido.com","worldjournal.com","olumpo.com","finler.net","the-sun.on.cc","elementaryos.org","vcf-online.org","wikimedia.org.mo","uploaded.net","stuffimreading.net","state168.com","fzh999.com","ipobar.com","topshareware.com","pokerstars.com","blog.redren.com","qstatus.com","contests.twilio.com","muzi.com","martau.com","www.owind.com","techparaiso.com","posterous.com","interfaceaddiction.com","developers.box.net","chinaaid.net","blog.hotpotato.com","storagenewsletter.com","video.yahoo.com","christusrex.org","syncback.com","tweetboard.com","limera1n.com","navicat.com","199.59.148.20","twittercounter.com","git-scm.com","www.playboy.com","renminbao.com","inmediahk.net","pulse.yahoo.com","taweet.com","0to255.com","duping.net","tkcs-collins.com","trustedbi.com","dtiblog.com","hellonewyork.us","wezhiyong.org","csuchen.de","wahas.com","wenyunchao.spaces.live.com","furinkan.com","observechina.net","chinachannel.hk","sysresccd.org","littlebigdetails.com","renyurenquan.org","canyu.org","jgoodies.com","china-week.com","pureconcepts.net","br.st","yfrog.com","mingpao.com","crd-net.org","ydy.com","tibet.com","tor.blingblingsquad.net","naitik.net","wofa.us","geometrictools.com","gs-discuss.com","diaoyuislands.org","wozy.in","hkdailynews.com.hk","glennhilton.com","christianstudy.com","gaoming.net","madmenunbuttoned.com","laptoplockdown.com","qienkuen.org","e-traderland.net","askstudent.com","forum.palmislife.com","yipub.com","truveo.com","tabtter.jp","franklc.com","weigegebyc.dreamhosters.com","iblogserv-f.net","page.bid.yahoo.com","bb.ttv.com.tw","blog.xuite.net","famunion.com","173ng.com","www.orchidbbs.com","singularitys.spaces.live.com","isaacmao.com","freeman2.com","sinonet.ca","jpopforum.net","bugbeep.com","sobees.com","fourface.nodesnoop.com","sharkdolphin.com","foxtang.com","jimoparty.com","topic.youthwant.com.tw","twiggit.org","ccc.de","openwebster.com","earthquake.usgs.gov","gmozomg.izihost.org","wtfpeople.com","1-apple.com.tw"];for(i=0;i<a.length;i++){if(dnsDomainIs(h,a[i])){return US}}
return"DIRECT"}
