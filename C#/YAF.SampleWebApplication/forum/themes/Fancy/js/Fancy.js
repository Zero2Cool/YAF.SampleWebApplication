function pageLoad(){jQuery(".yafnet").hide(),jQuery(".content, .yafPageLink").addClass("contentShadow roundShadow"),jQuery("#DivIconLegend, #DivPageAccess").addClass("content contentShadow roundShadow"),jQuery(".menuContainer").addClass("contentShadow raisedShadow"),jQuery(".menuMyList .myProfile a").text("."),jQuery(".menuMyList .myPm a").text("%"),jQuery(".menuMyList .myBuddies a").text(","),jQuery(".menuMyList .myAlbums a").text("p"),jQuery(".menuMyList .myTopics a").text("9"),jQuery(".menuMyList .menuAccount a").text("E"),jQuery(".loggedInUser").insertBefore(".menuMyList"),jQuery("img, input, a").tipTip(),jQuery(function(){jQuery("img.avatarimage").onImagesLoaded(function(n){jQuery(n).wrap(function(){return'<span class="AvatarWrap" style="position:relative; display:inline-block; background:url('+jQuery(n).attr("src")+') no-repeat center center; width: auto; height: auto;" />'}),jQuery(n).css("opacity","0")})}),jQuery("input:checkbox").not(".MultiQuoteButton input")&&jQuery("input:checkbox").not(".MultiQuoteButton input").uniform(),jQuery("input:radio, input:file").not(".MultiQuoteButton input").uniform(),jQuery(".QuickSearchButton").text("A"),jQuery("select").not('[id*="ProfileEditor_Country"]').each(function(){jQuery(this).msDropDown()}),jQuery(".dd").each(function(){var n=jQuery(this).width();jQuery(this).find(".ddChild").eq(0).css({width:n-12}),jQuery(this).find(".ddTitleText").eq(0).css({width:n-30}),jQuery(this).find(".arrow").eq(0).text("l")}),jQuery(".yafnet").show()}jQuery.fn.onImagesLoaded=function(n){return this.each(function(){var t=this.tagName.toLowerCase()==="img"?$(this):$("img",this),r=this,u=0,i=function(){typeof n=="function"&&n(r)};t.length?t.each(function(){var n=this,r=function(r){n.complete||n.readyState=="complete"&&r.type=="readystatechange"?++u===t.length&&i():n.readyState===undefined&&$(n).attr("src",$(n).attr("src"))};$(n).bind("load readystatechange",function(n){r(n)}),r({type:"readystatechange"})}):i()})};