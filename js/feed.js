const url = 'https://www.instagram.com/monynaldonifotografia/?__a=1'

let showInstagramPics = function (feed) {
    feedElement = document.getElementById('feed');

    feed.forEach(item => {
        divArea = document.createElement('div')
        divArea.className = 'col-sm-12 col-md ftco-animate fadeInUp ftco-animated'

        linkElement = document.createElement('a')
        linkElement.className = 'insta-img image-popup'
        linkElement.setAttribute('href', item.imgUrl)
        // linkElement.setAttribute('href', 'images/image_1.jpg')
        linkElement.setAttribute('style', 'background-image: url("' + item.imgUrl + '");')
        // linkElement.setAttribute('style', 'background-image: url(images/image_1.jpg);')
        
        divIcons = document.createElement('div')
        divIcons.className = 'icon d-flex justify-content-center'

        instaIcon = document.createElement('span')
        instaIcon.className = 'icon-instagram align-self-center'

        divIcons.appendChild(instaIcon)
        linkElement.appendChild(divIcons)
        divArea.appendChild(linkElement)
        feedElement.appendChild(divArea)

    });
} 

fetch(url)
    .then(data => {
        return data.json()
    })
    .then(res => {
        return res.graphql.user.edge_owner_to_timeline_media.edges
    })
    .then(edges => {
        maxPhotos = 6
        id = 0
        feed = []

        edges.forEach(item => {
            if (id >= maxPhotos) {
                return
            }

            thumbnail = item.node.thumbnail_resources[3].src // 320x320
            imgUrl = item.node.display_url
            likes = item.node.edge_liked_by.count
            comments = item.node.edge_media_to_comment.count

            feed.push({id, thumbnail, imgUrl, likes, comments})

            id += 1;
        });

        return showInstagramPics(feed)
    }).catch(error => {
        console.log('Could not fetch Mony Naldoni Fotografia Instagram feed: ' + error.message)
    })