$(document).ready(function () {
    jQuery("#nanoGallery").nanoGallery({
        kind: 'flickr',
        userID: '140446684@N03',
        
        // uncomment this line to display one specific album:
        photoset:'72157677489196035',
        
        // uncomment this line to display full photostream (v5.0.0):
        // photoset:'none',
        
        thumbnailWidth: 125,
        thumbnailHeight: 125,
        thumbnailLabel: {
            position: 'overImageOnMiddle',
            display: true,
            displayDescription: true,
            titleMaxLength: 20,
            hideIcons: true,
            align: 'center',
            itemsCount: 'description'            
        },
        thumbnailHoverEffect:'borderLighter'
    });
});




