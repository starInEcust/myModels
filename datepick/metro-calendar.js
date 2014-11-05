// Calendar
(function($){
	$.Metro = function(params){
		params = $.extend({
		}, params);
	};
	$.Metro.getDeviceSize = function(){
		var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		var device_height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
		return {
			width: device_width,
			height: device_height
		}
	}
})(jQuery);
$(function(){
	$('html').on('click', function(e){
		$('.dropdown-menu').each(function(i, el){
			if (!$(el).hasClass('keep-open') && $(el).css('display')=='block') {
				$(el).hide();
			}
		});
	});
});
(function($){
	$.Metro.currentLocale = 'zhCN';

	//console.log(METRO_LOCALE, $.Metro.currentLocale);

	$.Metro.Locale = {
		'en': {
			months: [
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			],
			days: [
				"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
				"Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"
			],
			buttons: [
				"Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"
			]
		},
		'fr': {
			months: [
				"Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
				"Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
			],
			days: [
				"Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
				"Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"
			],
			buttons: [
				"Aujourd'hui", "Effacer", "Annuler", "Aide", "Précedent", "Suivant", "Fin"
			]
		},
		'nl': {
			months: [
				"Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December",
				"Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
			],
			days: [
				"Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
				"Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"
			],
			buttons: [
				"Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"
			]
		},
		'ua': {
			months: [
				"Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",
				"Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"
			],
			days: [
				"Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота",
				"Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
			],
			buttons: [
				"Сьогодні", "Очистити", "Скасувати", "Допомога", "Назад", "Вперед", "Готово"
			]
		},
		'ru': {
			months: [
				"Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
				"Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
			],
			days: [
				"Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",
				"Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
			],
			buttons: [
				"Сегодня", "Очистить", "Отменить", "Помощь", "Назад", "Вперед", "Готово"
			]
		},
		/** By NoGrief (nogrief@gmail.com) */
		'zhCN': {
			months: [
				"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月",
				"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
			],
			days: [
				"星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",
				"日", "一", "二", "三", "四", "五", "六"
			],
			buttons: [
				"今日", "清除", "Cancel", "Help", "Prior", "Next", "Finish"
			]
		},
		'it': {
			months: [
				'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
				'Gen',' Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
			],
			days: [
				'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica',
				'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'
			],
			buttons: [
				"Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"
			]
		},
		'de': {
			months: [
				"Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",
				"Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
			],
			days: [
				"Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",
				"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
			],
			buttons: [
				"Heute", "Zurücksetzen", "Abbrechen", "Hilfe", "Früher", "Später", "Fertig"
			]
		},
		/** By Javier Rodríguez (javier.rodriguez at fjrodriguez.com) */
		'es': {
			months: [
				"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
				"Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
			],
			days: [
				"Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
				"Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"
			],
			buttons: [
				"Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
			]
		}
	};

	$.Metro.setLocale = function(locale, data){
		$.Metro.Locale[locale] = data;
	};
})(jQuery);
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
// this is a temporary solution

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		//console.log(arguments);

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		//if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		//console.log(locale);

		locale = $.Metro.currentLocale;

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  $.Metro.Locale[locale].days[D],
				dddd: $.Metro.Locale[locale].days[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm: $.Metro.Locale[locale].months[m],
				mmmm: $.Metro.Locale[locale].months[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

/*
 * End date format
 */


(function( $ ) {
    $.widget("metro.calendar", {

        version: "1.0.0",

        options: {
            format: "yyyy-mm-dd",
            multiSelect: false,
            startMode: 'day', //year, month, day
            weekStart: 0, // 0 - Sunday, 1 - Monday
            otherDays: false,
            date: new Date(),
            buttons: true,
            locale: $.Metro.currentLocale,
            getDates: function(d){},
            click: function(d, d0){},
            _storage: []
        },

        _year: 0,
        _month: 0,
        _day: 0,
        _today: new Date(),
        _event: '',

        _mode: 'day', // day, month, year
        _distance: 0,

        _events: [],

        _create: function(){
            var element = this.element;

            if (element.data('multiSelect') != undefined) this.options.multiSelect = element.data("multiSelect");
            if (element.data('format') != undefined) this.options.format = element.data("format");
            if (element.data('date') != undefined) this.options.date = new Date(element.data("date"));
            if (element.data('locale') != undefined) this.options.locale = element.data("locale");
            if (element.data('startMode') != undefined) this.options.startMode = element.data('startMode');
            if (element.data('weekStart') != undefined) this.options.weekStart = element.data('weekStart');
            if (element.data('otherDays') != undefined) this.options.otherDays = element.data('otherDays');

            this._year = this.options.date.getFullYear();
            this._distance = parseInt(this.options.date.getFullYear())-4;
            this._month = this.options.date.getMonth();
            this._day = this.options.date.getDate();
            this._mode = this.options.startMode;

            element.data("_storage", []);

            this._renderCalendar();
        },

        _renderMonth: function(){
            var year = this._year,
                month = this._month,
                day = this._day,
                event = this._event,
                feb = 28;

            if (month == 1) {
                if ((year%100!=0) && (year%4==0) || (year%400==0)) {
                    feb = 29;
                }
            }

            var totalDays = ["31", ""+feb+"","31","30","31","30","31","31","30","31","30","31"];
            var daysInMonth = totalDays[month];
            var first_week_day = new Date(year, month, 1).getDay();

            var table, tr, td, i;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-previous'></i></a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-previous-month' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(tr);

            $("<td/>").attr("colspan", 3).addClass("text-center").html("<a class='btn-select-month' href='#'>"+ $.Metro.Locale[this.options.locale].months[month]+' '+year+"</a>").appendTo(tr);

            $("<td/>").addClass("text-center").html("<a class='btn-next-month' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-next'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            // Add day names
            var j;
            tr = $("<tr/>");
            for(i = 0; i < 7; i++) {
                if (!this.options.weekStart)
                    td = $("<td/>").addClass("text-center day-of-week").html($.Metro.Locale[this.options.locale].days[i+7]).appendTo(tr);
                else {
                    j = i + 1;
                    if (j == 7) j = 0;
                    td = $("<td/>").addClass("text-center day-of-week").html($.Metro.Locale[this.options.locale].days[j+7]).appendTo(tr);

                }
            }
            tr.addClass("calendar-subheader").appendTo(table);

            // Add empty days for previos month
            var prevMonth = this._month - 1; if (prevMonth < 0) prevMonth = 11; var daysInPrevMonth = totalDays[prevMonth];
            var _first_week_day = ((this.options.weekStart) ? first_week_day + 6 : first_week_day)%7;
            var htmlPrevDay = "";
            tr = $("<tr/>");
            for(i = 0; i < _first_week_day; i++) {
                if (this.options.otherDays) htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1);
                td = $("<td/>").addClass("empty").html("<small class='other-day'>"+htmlPrevDay+"</small>").appendTo(tr);
            }

            var week_day = ((this.options.weekStart) ? first_week_day + 6 : first_week_day)%7;
            //console.log(week_day, week_day%7);

            for (i = 1; i <= daysInMonth; i++) {
                //console.log(week_day, week_day%7);

                week_day %= 7;

                if (week_day == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }

                td = $("<td/>").addClass("text-center day").html("<a href='#'>"+i+"</a>");
                if (year == this._today.getFullYear() && month == this._today.getMonth() && this._today.getDate() == i) {
                    td.addClass("today");
                }

                var d = (new Date(this._year, this._month, i)).format('yyyy-mm-dd');
                if (this.element.data('_storage').indexOf(d)>=0) {
                    td.find("a").addClass("selected");
                }

                td.appendTo(tr);
                week_day++;
            }

            // next month other days
            var htmlOtherDays = "";
            for (i = week_day+1; i<=7; i++){
                if (this.options.otherDays) htmlOtherDays = i - week_day;
                td = $("<td/>").addClass("empty").html("<small class='other-day'>"+htmlOtherDays+"</small>").appendTo(tr);
            }

            tr.appendTo(table);

            if (this.options.buttons) {
                tr = $("<tr/>").addClass("calendar-actions");
                td = $("<td/>").attr('colspan', 7).addClass("text-left").html("" +
                    "<button class='button calendar-btn-today small success'>"+$.Metro.Locale[this.options.locale].buttons[0]+
                    "</button>&nbsp;<button class='button calendar-btn-clear small warning'>"+$.Metro.Locale[this.options.locale].buttons[1]+"</button>");
                td.appendTo(tr);
                tr.appendTo(table);
            }

            table.appendTo(this.element);

            this.options.getDates(this.element.data('_storage'));
        },

        _renderMonths: function(){
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(tr);
            $("<td/>").attr("colspan", 2).addClass("text-center").html("<a class='btn-select-year' href='#'>"+this._year+"</a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<tr/>");
            j = 0;
            for (i=0;i<12;i++) {

                //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
                td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+$.Metro.Locale[this.options.locale].months[i+12]+"</a>");

                if (this._month == i && (new Date()).getFullYear() == this._year) {
                    td.addClass("today");
                }

                td.appendTo(tr);
                if ((j+1) % 4 == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }
                j+=1;
            }

            table.appendTo(this.element);
        },

        _renderYears: function(){
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(tr);
            $("<td/>").attr("colspan", 2).addClass("text-center").html( (this._distance)+"-"+(this._distance+11) ).appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<tr/>");

            j = 0;
            for (i=this._distance;i<this._distance+12;i++) {
                td = $("<td/>").addClass("text-center year").html("<a href='#' data-year='"+i+"'>"+i+"</a>");
                if ((new Date()).getFullYear() == i) {
                    td.addClass("today");
                }
                td.appendTo(tr);
                if ((j+1) % 4 == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }
                j+=1;
            }

            table.appendTo(this.element);
        },

        _renderCalendar: function(){
            switch (this._mode) {
                case 'year': this._renderYears(); break;
                case 'month': this._renderMonths(); break;
                default: this._renderMonth();
            }
            this._initButtons();
        },

        _initButtons: function(){
            // Add actions
            var that = this, table = this.element.find('table');

            if (this._mode == 'day') {
                table.find('.btn-select-month').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-month').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month -= 1;
                    if (that._month < 0) {
                        that._year -= 1;
                        that._month = 11;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-next-month').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month += 1;
                    if (that._month == 12) {
                        that._year += 1;
                        that._month = 0;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.calendar-btn-today').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that.options.date = new Date();
                    that._year = that.options.date.getFullYear();
                    that._month = that.options.date.getMonth();
                    that._day = that.options.date.getDate();
                    that._renderCalendar();
                });
                table.find('.calendar-btn-clear').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    that.options.date = new Date();
                    that._year = that.options.date.getFullYear();
                    that._month = that.options.date.getMonth();
                    that._day = that.options.date.getDate();
                    that.element.data('_storage', []);
                    that._renderCalendar();
                });
                table.find('.day a').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    var d = (new Date(that._year, that._month, parseInt($(this).html()))).format(that.options.format,null);
                    var d0 = (new Date(that._year, that._month, parseInt($(this).html())));

                    if (that.options.multiSelect) {
                        $(this).toggleClass("selected");

                        if ($(this).hasClass("selected")) {
                            that._addDate(d);
                        } else {
                            that._removeDate(d);
                        }
                    } else {
                        table.find('.day a').removeClass('selected');
                        $(this).addClass("selected");
                        that.element.data('_storage', []);
                        that._addDate(d);
                    }
                    that.options.getDates(that.element.data('_storage'));
                    that.options.click(d, d0);
                });
            } else if (this._mode == 'month') {
                table.find('.month a').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month = parseInt($(this).data('month'));
                    that._mode = 'day';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.btn-select-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'year';
                    that._renderCalendar();
                });
            } else {
                table.find('.year a').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year = parseInt($(this).data('year'));
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance -= 10;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance += 10;
                    that._renderCalendar();
                });
            }
        },

        _addDate: function(d){
            var index = this.element.data('_storage').indexOf(d);
            if (index < 0) this.element.data('_storage').push(d);
        },

        _removeDate: function(d){
            var index = this.element.data('_storage').indexOf(d);
            this.element.data('_storage').splice(index, 1);
        },

        setDate: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"/"+ (d.getMonth()+1)+"/"+ d.getDate())).format('yyyy-mm-dd');
            this._addDate(r);
            this._renderCalendar();
        },

        getDate: function(index){
            return new Date(index != undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
        },

        getDates: function(){
            return this.element.data('_storage');
        },

        unsetDate: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+ d.getDate())).format('yyyy-mm-dd');
            this._removeDate(r);
            this._renderCalendar();
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );
// DatePicker

(function( $ ) {
	$.widget("metro.datepicker", {

		version: "1.0.0",

		options: {
			format: "dd.mm.yyyy",
			date: undefined,
			effect: 'none',
			position: 'bottom',
			locale: $.Metro.currentLocale,
			weekStart: 0, // 0 - Sunday, 1 - Monday
			otherDays: false,
			selected: function(d, d0){},
			_calendar: undefined
		},


		_create: function(){
			var that = this,
				element = this.element,
				input = element.children("input"),
				button = element.children("button.btn-date");

			if (element.data('date') != undefined) this.options.date = element.data('date');
			if (element.data('format') != undefined) this.options.format = element.data('format');
			if (element.data('effect') != undefined) this.options.effect = element.data('effect');
			if (element.data('position') != undefined) this.options.position = element.data('position');
			if (element.data('locale') != undefined) this.options.locale = element.data('locale');
			if (element.data('weekStart') != undefined) this.options.weekStart = element.data('weekStart');
			if (element.data('otherDays') != undefined) this.options.otherDays = element.data('otherDays');

			this._createCalendar(element, this.options.date);

			input.attr('readonly', true);

			button.on('click', function(e){
				e.stopPropagation();
				if (that.options._calendar.css('display') == 'none') {
					that._show();
				} else {
					that._hide();
				}
			});

			element.on('click', function(e){
				e.stopPropagation();
				if (that.options._calendar.css('display') == 'none') {
					that._show();
				} else {
					that._hide();
				}
			});

			$('html').on('click', function(e){
				$(".calendar-dropdown").hide();
			})
		},

		_createCalendar: function(to, curDate){
			var _calendar, that = this;

			_calendar = $("<div/>").css({
				position: 'absolute'
				, display: 'none'
				, 'max-width': 260
				, 'z-index': 1000

			}).addClass('calendar calendar-dropdown').appendTo(to);

			if (that.options.date != undefined) {
				_calendar.data('date', that.options.date);
			}

			_calendar.calendar({
				multiSelect: false,
				format: that.options.format,
				buttons: false,
				locale: that.options.locale,
				otherDays: that.options.otherDays,
				weekStart: that.options.weekStart,
				click: function(d, d0){
					//console.log(d, d0);
					_calendar.calendar('setDate', d0);
					to.children("input[type=text]").val(d);
					that.options.selected(d, d0);
					that._hide();
				}
			});

			if (curDate != undefined) {
				_calendar.calendar('setDate', curDate);
				to.children("input[type=text]").val(_calendar.calendar('getDate'));
			}

			// Set position
			switch (this.options.position) {
				case 'top': _calendar.css({top: (0-_calendar.height()), left: 0}); break;
				default: _calendar.css({top: '100%', left: 0});
			}

			this.options._calendar = _calendar;
		},

		_show: function(){
			if (this.options.effect == 'slide') {
				$(".calendar-dropdown").slideUp('fast');
				this.options._calendar.slideDown('fast');
			} else if (this.options.effect == 'fade') {
				$(".calendar-dropdown").fadeOut('fast');
				this.options._calendar.fadeIn('fast');
			} else {
				$(".calendar-dropdown").hide();
				this.options._calendar.show();
			}
		},
		_hide: function(){
			if (this.options.effect == 'slide') {
				this.options._calendar.slideUp('fast');
			} else if (this.options.effect == 'fade') {
				this.options._calendar.fadeOut('fast');
			} else {
				this.options._calendar.hide();
			}
		},

		_destroy: function(){
		},

		_setOption: function(key, value){
			this._super('_setOption', key, value);
		}
	})
})( jQuery );






