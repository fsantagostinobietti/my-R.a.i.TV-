# My R.a.i.TV+

### Get index.html with tv user-agent
$ curl -k -A "HbbTV/1.4.1 (+DRM+MEDIA360;Samsung;SmartTV2017;T-KTMDEUC-0902.31;;)+SmartHubLink Chrome" "https://www.replaytvmhp.rai.it/hbbtv/launcher/RemoteControl/index.html?delivery=2"

...
<script >bazadebezolkohpepadr="xxxxxxx"</script>
<script type="text/javascript" src="https://www.replaytvmhp.rai.it/akam/13/yyyyy"
...


'bazadebezolkohpepadr' is used by akamai to indicate client is not headless.