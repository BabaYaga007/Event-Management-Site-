void 0===tribe.tickets&&(tribe.tickets={}),tribe.tickets.table={},function(e,t,i){i.make_sortable=function(i){if(!(2>i.find("tr:not(.Tribe__Tickets__RSVP)").length)){i.sortable({axis:"y",containment:"#tribe_panel_base",opacity:.7,tolerance:"intersect",cursor:"move",items:"tr:not(.Tribe__Tickets__RSVP)",forcePlaceholderSize:!0,handle:".tribe-handle",helper:function(e,i){return i.children().each(function(){t(this).width(t(this).outerWidth(!0))}),i},update:function(i,r){tribe.tickets.editor&&t(e).off("beforeunload.tribe"),t(this).children("tr").each(function(e,i){t(i).find(".tribe-ticket-field-order").val(e)}),tribe.tickets.editor&&t(e).on("beforeunload.tribe",tribe.tickets.editor.beforeUnload)}}),i.disableSelection(),i.find(".table-header").disableSelection(),i.sortable("option","disabled",!1)}},i.toggle_sortable=function(){var r=t(document.getElementById("tribe_ticket_list_table")).find(".tribe-tickets-editor-table-tickets-body");t(document.getElementById("tribetickets"));e.matchMedia("( min-width: 786px )").matches?r.hasClass("ui-sortable")?r.sortable("enable"):i.make_sortable(r):r.hasClass("ui-sortable")&&r.sortable("disable")},t(document).ready(function(){i.toggle_sortable();var r=_.debounce(i.toggle_sortable,300);t(e).resize(r)})}(window,jQuery,tribe.tickets.table);