// Domo Keywords Performance Report Script
// Single AdWords Account

	Logger.log("Initiating remote script");

var REPORT_TYPE = 'FINAL_URL_REPORT';
	Logger.log("Report type set");

var FILTER = 'Impressions > 0';

var DATE_RANGE = 'THIS_MONTH';
	Logger.log("Report date set");

var COLUMN_NAMES = [
	'Date',
	'CampaignName',
	'EffectiveFinalUrl',
	'Clicks',
	'Impressions',
	'Cost',
	'AveragePosition',
	'Conversions',

];

var COLUMNS = COLUMN_NAMES.join(',');
	Logger.log("Columns set");


	Logger.log("Report built");

REPORT.exportToSheet(adwordsSheet);
	Logger.log((adwordsSheet.getLastRow() - 1) + " rows added to sheet");
