!function(e,t,a,r,i,n,s,l,o,_){a(t).ready(function(){var d=a("body"),u=a('[class^="tribe-events-nav-"] a'),p=n.get_url_param("tribe-bar-date"),b=a(t.getElementById("tribe-events")),c=a(t.getElementById("tribe-bar-date")),v=!1;if(!(1>b.length||d.hasClass("single-tribe_events"))){var m="/";void 0!==o.events_base?m=a(t.getElementById("tribe-events-header")).data("baseurl"):u.length&&(m=u.first().attr("href").slice(0,-8)),r.default_permalinks&&(m=m.split("?")[0]),a(".tribe-events-calendar").length&&a(t.getElementById("tribe-events-bar")).length&&p&&p.length>7&&(a(t.getElementById("tribe-bar-date-day")).val(p.slice(-3)),c.val(p.substring(0,7)));var g="yyyy-mm";if("0"!==s.datepicker_format){var f=parseInt(s.datepicker_format),h="m"+s.datepicker_format.toString();g=r.datepicker_formats.month[f],p&&(p.length<=7&&(p+="-01"),c.val(tribeDateFormat(p,h)))}if(r.datepicker_opts={format:g,minViewMode:"months",autoclose:!0},tribe_ev.fn.ensure_datepicker_i18n(),c.bootstrapDatepicker(r.datepicker_opts).on("changeDate",function(e){s.mdate=e.date;var i=e.date.getFullYear(),o=("0"+(e.date.getMonth()+1)).slice(-2);if(v=!0,s.date=i+"-"+o,l.no_bar()||l.live_ajax()&&l.pushstate){if(s.ajax_running||s.updating_picker)return;s.filter_cats?r.cur_url=a(t.getElementById("tribe-events-header")).data("baseurl")+s.date+"/":r.default_permalinks?r.cur_url=m:r.cur_url=m+s.date+"/",s.popping=!1,n.pre_ajax(function(){w()})}}),k(!0),a(i).on("tribe_ev_resizeComplete",function(){k(!0)}),l.pushstate&&!l.map_view()){var y="action=tribe_calendar&eventDate="+a("#tribe-events-header").data("date");r.params.length&&(y=y+"&"+r.params),s.category&&(y=y+"&tribe_event_category="+s.category),n.is_featured()&&(y+="&featured=1"),history.replaceState({tribe_params:y},s.page_title,location.href),a(e).on("popstate",function(e){var t=e.originalEvent.state;t&&(s.do_string=!1,s.pushstate=!1,s.popping=!0,s.params=t.tribe_params,n.pre_ajax(function(){w()}),n.set_form(s.params))})}a(t.getElementById("tribe-events")).on("click",".tribe-events-nav-previous, .tribe-events-nav-next",function(e){if(e.preventDefault(),!s.ajax_running){var t,i=a(this).find("a");s.date=i.data("month"),s.mdate=s.date+"-01","0"!==s.datepicker_format?n.update_picker(tribeDateFormat(s.mdate,h)):n.update_picker(s.date),t=s.filter_cats?a("#tribe-events-header").data("baseurl"):i.attr("href"),r.default_permalinks&&(t=r.cur_url.split("?")[0]),b.is(".tribe-events-shortcode")&&r.default_permalinks&&(t=n.get_base_url()),n.update_base_url(t),s.popping=!1,n.pre_ajax(function(){w()})}}).on("click","td.tribe-events-thismonth a",function(e){e.stopPropagation()}).on("click",'[id*="tribe-events-daynum-"] a',function(e){d.is(".tribe-mobile")&&(e.preventDefault(),x(a(this).closest(".mobile-trigger")))}).on("click",".mobile-trigger",function(e){d.is(".tribe-mobile")&&(e.preventDefault(),e.stopPropagation(),x(a(this)))}),n.snap("#tribe-bar-form","body","#tribe-events-footer .tribe-events-nav-previous, #tribe-events-footer .tribe-events-nav-next"),a("form#tribe-bar-form").on("submit",function(e){!function(e){if("change_view"!=tribe_events_bar_action){if(e.preventDefault(),s.ajax_running)return;void 0!==c.val()&&c.val().length?"0"!==s.datepicker_format?s.date=tribeDateFormat(c.bootstrapDatepicker("getDate"),"tribeMonthQuery"):s.date=c.val():v||(s.date=r.cur_date.slice(0,-3)),s.filter_cats?r.cur_url=a("#tribe-events-header").data("baseurl")+s.date+"/":r.default_permalinks?r.cur_url=m:r.cur_url=m+s.date+"/",s.popping=!1,n.pre_ajax(function(){w()})}}(e)}),a(i).on("tribe_ev_runAjax",function(){w()}),a(i).on("tribe_ev_updatingRecurrence",function(){s.date=a("#tribe-events-header").data("date"),s.filter_cats?r.cur_url=a("#tribe-events-header").data("baseurl")+s.date+"/":r.default_permalinks?r.cur_url=m:r.cur_url=m+s.date+"/",s.popping=!1}),_&&tec_debug.info("TEC Debug: tribe-events-ajax-calendar.js successfully loaded, Tribe Events Init finished"),_&&tec_debug.timeEnd("Tribe JS Init Timer")}function x(e){var r=e.data("tribejson");if(void 0!==e.attr("data-day")){r.date=e.attr("data-day");var i,n,s,l,o,_=e.parents(".tribe-events-calendar"),d=_.next(t.getElementById("tribe-mobile-container")),u=d.find(".tribe-mobile-day"),p=_.find(".mobile-trigger"),b='[data-day="'+r.date+'"]',c=u.filter(b);r.has_events=e.hasClass("tribe-events-has-events"),p.removeClass("mobile-active").filter(b).addClass("mobile-active"),u.hide(),c.length?c.show():(d.append(tribe_tmpl("tribe_tmpl_month_mobile_day_header",r)),i=r.date,n=a('.tribe-mobile-day[data-day="'+i+'"]'),s=a('.tribe-events-calendar td[data-day="'+i+'"]'),l=s.find(".tribe-events-viewmore"),(o=s.find(".type-tribe_events")).length&&(o.each(function(){var e=a(this);if(e.tribe_has_attr("data-tribejson")){var t=e.data("tribejson");if("string"==typeof t)try{t=JSON.parse(t)}catch(e){t={}}t&&"eventId"in t&&n.append(tribe_tmpl("tribe_tmpl_month_mobile",t))}}),l.length&&n.append(l.clone())))}}function j(){b.find(".tribe-events-calendar th").each(function(){var e=a(this),t=e.attr("data-day-abbr"),r=e.attr("title");d.is(".tribe-mobile")?e.text(t):e.text(r)})}function k(e){d.is(".tribe-mobile")?(j(),function(){var e=b.find(".mobile-active"),r=b.find(".mobile-trigger"),i=b.find(t.getElementById("tribe-events-content")).find(".tribe-events-calendar");e.length||(e=b.find(".tribe-events-present"));a(t.getElementById("tribe-mobile-container")).length||a('<div id="tribe-mobile-container" />').insertAfter(i),e.length&&e.is(".tribe-events-thismonth")?x(e):x(r.filter(".tribe-events-thismonth").first())}()):e&&j()}function w(){n.invalid_date(s.date)||(a(".tribe-events-calendar").tribe_spin(),s.pushcount=0,s.ajax_running=!0,s.popping||(s.params={action:"tribe_calendar",eventDate:s.date,featured:n.is_featured()},s.url_params={},s.category&&(s.params.tribe_event_category=s.category,s.url_params.tribe_events_cat=s.category),r.default_permalinks&&(b.is(".tribe-events-shortcode")||(s.url_params.hasOwnProperty("post_type")||(s.url_params.post_type=o.events_post_type),s.url_params.hasOwnProperty("eventDisplay")||(s.url_params.eventDisplay=s.view))),a(i).trigger("tribe_ev_serializeBar"),s.params=a.param(s.params),s.url_params=a.param(s.url_params),a(i).trigger("tribe_ev_collectParams"),s.pushcount>0||s.filters||r.default_permalinks||s.category?(s.do_string=!0,s.pushstate=!1):(s.do_string=!1,s.pushstate=!0)),l.pushstate&&!s.filter_cats?(_&&tec_debug.time("Month View Ajax Timer"),a(i).trigger("tribe_ev_ajaxStart").trigger("tribe_ev_monthView_AjaxStart"),a.post(TribeCalendar.ajaxurl,s.params,function(e){if(s.initial_load=!1,n.enable_inputs("#tribe_events_filters_form","input, select"),e.success){s.ajax_running=!1,r.ajax_response={total_count:"",view:e.view,max_pages:"",tribe_paged:"",timestamp:(new Date).getTime()},_&&0===e.html&&tec_debug.warn("Month view ajax had an error in the query and returned 0.");var l="";l=a.isFunction(a.fn.parseHTML)?a.parseHTML(e.html):e.html,r.cur_url=n.get_base_url(),a("#tribe-events-content").replaceWith(l),k(!0),s.page_title=a("#tribe-events-header").data("title"),s.view_title=a("#tribe-events-header").data("viewtitle"),t.title=s.page_title,a(".tribe-events-page-title").html(s.view_title),(a("#tribe-events.tribe-events-shortcode").length||s.do_string)&&(r.default_permalinks?r.cur_url=r.cur_url+"&"+s.url_params:(-1!==r.cur_url.indexOf("?")&&(r.cur_url=r.cur_url.split("?")[0]),r.cur_url=r.cur_url+"?"+s.url_params)),s.do_string&&history.pushState({tribe_date:s.date,tribe_params:s.params},s.page_title,r.cur_url),s.pushstate&&history.pushState({tribe_date:s.date,tribe_params:s.params},s.page_title,r.cur_url),a(i).trigger("tribe_ev_ajaxSuccess").trigger("tribe_ev_monthView_ajaxSuccess"),a(i).trigger("ajax-success.tribe").trigger("tribe_ev_monthView_ajaxSuccess"),_&&tec_debug.timeEnd("Month View Ajax Timer")}})):s.url_params.length?e.location=r.cur_url+"?"+s.url_params:e.location=r.cur_url)}})}(window,document,jQuery,tribe_ev.data,tribe_ev.events,tribe_ev.fn,tribe_ev.state,tribe_ev.tests,tribe_js_config,tribe_debug);