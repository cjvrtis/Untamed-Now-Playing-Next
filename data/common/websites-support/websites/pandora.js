const PandoraTrackListener = function() {};
PandoraTrackListener.prototype = new window.UNPCommon.WebsiteTrackListener();

PandoraTrackListener.prototype.isPlaying = function() {
    return $('.pauseButton').is(':visible');
};

PandoraTrackListener.prototype.findSelector = function() {
    this.selector = undefined;
};

PandoraTrackListener.prototype.scrapPlayData = function() {
    this.artistName = $('[data-qa="playing_artist_name"]').text();
    this.trackName = $('[data-qa="playing_track_title"]').children('div').children('div').text();
    return true;
};

PandoraTrackListener.prototype.scrapAlbumName = function() {
    return $('[data-qa="playing_album_name"]').text();
};

PandoraTrackListener.prototype.scrapAlbumArt = function() {
    return $('[data-qa="album_active_image"]').css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
};

PandoraTrackListener.prototype.scrapUrl = function() {
    return $('[data-qa="playing_track_title"]').attr('href');
};

PandoraTrackListener.prototype.scrapDuration = function() {
    return $('[data-qa="remaining_time"]').text();
};

window.UNPCommon.runTrackListenerInterval(new PandoraTrackListener());
