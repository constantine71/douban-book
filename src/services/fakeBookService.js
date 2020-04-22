/**
 * fake book service  with data and get function
 */

//getbook function if we use real api can use aynsc calls then return data
export function getBooks() {
  return fakeBooks.items;
}

//fake book data 30 books about Harry Potter
const fakeBooks = {
  kind: "books#volumes",
  totalItems: 399,
  items: [
    {
      kind: "books#volume",
      id: "DKcWE3WXoj8C",
      etag: "GOT7iBkLffo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/DKcWE3WXoj8C",
      volumeInfo: {
        title: "Harry Potter and International Relations",
        authors: ["Daniel H. Nexon", "Iver B. Neumann"],
        publisher: "Rowman & Littlefield",
        publishedDate: "2006",
        description:
          "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry's world contain aspects of our own. It also includes chapters on the political economy of the franchise, and on the problems of studying popular culture.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0742539598",
          },
          {
            type: "ISBN_13",
            identifier: "9780742539594",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 245,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 3.5,
        ratingsCount: 7,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=DKcWE3WXoj8C&printsec=frontcover&dq=harry+potter&hl=&cd=1&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=DKcWE3WXoj8C&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_International_Relations.html?hl=&id=DKcWE3WXoj8C",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Harry_Potter_and_International_Relations-sample-pdf.acsm?id=DKcWE3WXoj8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=DKcWE3WXoj8C&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Drawing on a range of historical and sociological sources, this work shows how aspects of Harry&#39;s world contain aspects of our own.",
      },
    },
    {
      kind: "books#volume",
      id: "o-QCOFDHmPEC",
      etag: "xNKYCHwhvyA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/o-QCOFDHmPEC",
      volumeInfo: {
        title: "Heroism in the Harry Potter Series",
        authors: ["Dr Katrin Berndt", "Dr Lena Steveker"],
        publisher: "Ashgate Publishing, Ltd.",
        publishedDate: "2013-05-28",
        description:
          "Taking up the various conceptions of heroism that are conjured in the Harry Potter series, this collection examines the ways fictional heroism in the twenty-first century challenges the idealized forms of a somewhat simplistic masculinity associated with genres like the epic, romance and classic adventure story. The collection's three sections address broad issues related to genre, Harry Potter's development as the central heroic character and the question of who qualifies as a hero in the Harry Potter series. Among the topics are Harry Potter as both epic and postmodern hero, the series as a modern-day example of psychomachia, the series' indebtedness to the Gothic tradition, Harry's development in the first six film adaptations, Harry Potter and the idea of the English gentleman, Hermione Granger's explicitly female version of heroism, adult role models in Harry Potter, and the complex depictions of heroism exhibited by the series' minor characters. Together, the essays suggest that the Harry Potter novels rely on established generic, moral and popular codes to develop new and genuine ways of expressing what a globalized world has applauded as ethically exemplary models of heroism based on responsibility, courage, humility and kindness.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781409478416",
          },
          {
            type: "ISBN_10",
            identifier: "1409478416",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 248,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.4.3.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=o-QCOFDHmPEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=o-QCOFDHmPEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=o-QCOFDHmPEC&printsec=frontcover&dq=harry+potter&hl=&cd=2&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=o-QCOFDHmPEC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Heroism_in_the_Harry_Potter_Series.html?hl=&id=o-QCOFDHmPEC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Heroism_in_the_Harry_Potter_Series-sample-epub.acsm?id=o-QCOFDHmPEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Heroism_in_the_Harry_Potter_Series-sample-pdf.acsm?id=o-QCOFDHmPEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=o-QCOFDHmPEC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Taking up the various conceptions of heroism that are conjured in the Harry Potter series, this collection examines the ways fictional heroism in the twenty-first century challenges the idealized forms of a somewhat simplistic masculinity ...",
      },
    },
    {
      kind: "books#volume",
      id: "ODOODwAAQBAJ",
      etag: "BcGGRE8jkMY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ODOODwAAQBAJ",
      volumeInfo: {
        title: "The Harry Potter Generation",
        subtitle: "Essays on Growing Up with the Series",
        authors: ["Emily Lauer", "Balaka Basu"],
        publisher: "McFarland",
        publishedDate: "2019-03-20",
        description:
          "The generation of readers most heavily impacted by J.K. Rowling’s Harry Potter series—those who grew up alongside “the boy who lived”—have come of age. They are poised to become teachers, parents, critics and writers, and many of their views and choices will be influenced by the literary revolution in which they were immersed. This collection of new essays explores the many different ways in which Harry Potter has shaped this generation’s views on everything from politics to identity to pedagogical spaces online. It seeks to determine how the books have affected fans’ understanding of their place in the world and their capacity to create it anew.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781476635521",
          },
          {
            type: "ISBN_10",
            identifier: "1476635528",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 218,
        printType: "BOOK",
        averageRating: 1,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ODOODwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ODOODwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=ODOODwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=3&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ODOODwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ODOODwAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 155.02,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 105.41,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ODOODwAAQBAJ&rdid=book-ODOODwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 155020000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 105410000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/The_Harry_Potter_Generation-sample-epub.acsm?id=ODOODwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/The_Harry_Potter_Generation-sample-pdf.acsm?id=ODOODwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ODOODwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This collection of new essays explores the many different ways in which Harry Potter has shaped this generation&#39;s views on everything from politics to identity to pedagogical spaces online.",
      },
    },
    {
      kind: "books#volume",
      id: "3PGBUrScs-YC",
      etag: "n1RScN+F/E4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/3PGBUrScs-YC",
      volumeInfo: {
        title: "Harry Potter and the Bible",
        subtitle: "The Menace Behind the Magick",
        authors: ["Richard Abanes"],
        publisher: "Wingspread Pub",
        publishedDate: "2001-01-01",
        description:
          "Is the Harry Potter phenomena harmless fantasy or dangerous fascination? This book catalogs various forms of occultism included in the first four Harry Potter books and warns against spiritual dangers.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0889652015",
          },
          {
            type: "ISBN_13",
            identifier: "9780889652019",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 275,
        printType: "BOOK",
        categories: ["Religion"],
        averageRating: 4,
        ratingsCount: 5,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.0.0.0.preview.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=3PGBUrScs-YC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=3PGBUrScs-YC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=3PGBUrScs-YC&q=harry+potter&dq=harry+potter&hl=&cd=4&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=3PGBUrScs-YC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Bible.html?hl=&id=3PGBUrScs-YC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=3PGBUrScs-YC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Examines J.K. Rowling&#39;s &quot;Harry Potter&quot; books, discussing their use of occult imagery and their potential dangers to Christians, and compares them to the &quot;safer&quot; works of C.S. Lewis and J.R.R. Tolkien.",
      },
    },
    {
      kind: "books#volume",
      id: "BoX-6R21MgQC",
      etag: "LkJ7XDMrJCA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/BoX-6R21MgQC",
      volumeInfo: {
        title: "The Psychology of Harry Potter",
        subtitle: "An Unauthorized Examination Of The Boy Who Lived",
        authors: ["Neil Mulholland"],
        publisher: "BenBella Books, Inc.",
        publishedDate: "2009-06-22",
        description:
          "Harry Potter has provided a portal to the wizarding world for millions of readers, but an examination of Harry, his friends and his enemies will take us on yet another journey: through the psyche of the Muggle (and wizard!) mind. The twists and turns of the series, as well as the psychological depth and complexity of J. K. Rowling’s characters, have kept fans enthralled with and puzzling over the many mysteries that permeate Hogwarts and beyond: Do the Harry Potter books encourage disobedience? Why is everyone so fascinated by Professor Lupin? What exactly will Harry and his friends do when they finally pass those N.E.W.T.s? Do even wizards live by the ticking of the clock? Is Harry destined to end up alone? And why did it take Ron and Hermione so long to get together? Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy series of all time. Grab a spot on the nearest couch, and settle in for some fresh revelations about our favorite young wizard!",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781935251378",
          },
          {
            type: "ISBN_10",
            identifier: "1935251376",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 326,
        printType: "BOOK",
        categories: ["Psychology"],
        averageRating: 3.5,
        ratingsCount: 10,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=BoX-6R21MgQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=BoX-6R21MgQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=BoX-6R21MgQC&printsec=frontcover&dq=harry+potter&hl=&cd=5&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=BoX-6R21MgQC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Psychology_of_Harry_Potter.html?hl=&id=BoX-6R21MgQC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/The_Psychology_of_Harry_Potter-sample-epub.acsm?id=BoX-6R21MgQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/The_Psychology_of_Harry_Potter-sample-pdf.acsm?id=BoX-6R21MgQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=BoX-6R21MgQC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy ...",
      },
    },
    {
      kind: "books#volume",
      id: "c_KYSDoCYQ4C",
      etag: "FieujJZ1rRo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/c_KYSDoCYQ4C",
      volumeInfo: {
        title: "The Magic of Harry Potter",
        authors: ["Daniel Mitchell"],
        publisher: "Lulu.com",
        publishedDate: "2007-12-01",
        description:
          "The Harry Potter books by J. K. Rowling have been phenomenal bestsellers winning fans world wide. These essays look at the magic, literary devices and moral themes in the Harry Potter series. In addition, the controversy between Christians over the moral themes is discussed.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780615172828",
          },
          {
            type: "ISBN_10",
            identifier: "0615172822",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 108,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.2.0.preview.3",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=c_KYSDoCYQ4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=c_KYSDoCYQ4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=c_KYSDoCYQ4C&printsec=frontcover&dq=harry+potter&hl=&cd=6&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=c_KYSDoCYQ4C&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Magic_of_Harry_Potter.html?hl=&id=c_KYSDoCYQ4C",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/The_Magic_of_Harry_Potter-sample-epub.acsm?id=c_KYSDoCYQ4C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=c_KYSDoCYQ4C&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The Harry Potter books by J. K. Rowling have been phenomenal bestsellers winning fans world wide. These essays look at the magic, literary devices and moral themes in the Harry Potter series.",
      },
    },
    {
      kind: "books#volume",
      id: "ThAaBwAAQBAJ",
      etag: "OY9I7ZTkJ70",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ThAaBwAAQBAJ",
      volumeInfo: {
        title: "Harry Potter’s World Wide Influence",
        authors: ["Diana Patterson"],
        publisher: "Cambridge Scholars Publishing",
        publishedDate: "2009-10-02",
        description:
          "The Harry Potter series forms a single epic story that has been published in nearly 70 languages, and has been examined in a large number of disciplines. This collection of essays contributes to the scholarly discourse that forms Potter Studies. These essays take on the consideration of Rowling's work as being worthy of study as a phenomenon and influence, as well as a work of literary value. They add genuine statistical information about the reasons for the books' popularity, consider their effects on child readers, and examine some deep-rooted reasons for their having been manipulated in American publishing, in film adaptations, in musical complements, and in their thingification in popular culture around the world. Some of these essays take on the critics of the books' religion and considerations of psychological, as well as philosophical good and evil, and well as some stylistic anomalies. The fact that scholars from China, Germany, Poland, Romania, and Israel, in addition to English-speaking nations, have felt compelled to examine these books in detail testifies in part to Harry Potter's world-wide influence.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781443816281",
          },
          {
            type: "ISBN_10",
            identifier: "1443816280",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 337,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 1,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ThAaBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ThAaBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=ThAaBwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=7&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ThAaBwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ThAaBwAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 515.89,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 361.12,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ThAaBwAAQBAJ&rdid=book-ThAaBwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 515890000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 361120000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Harry_Potter_s_World_Wide_Influence-sample-pdf.acsm?id=ThAaBwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ThAaBwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This collection of essays contributes to the scholarly discourse that forms Potter Studies.",
      },
    },
    {
      kind: "books#volume",
      id: "Aaug_RnI-xQC",
      etag: "8pKnLbMfvX0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Aaug_RnI-xQC",
      volumeInfo: {
        title: "The Irresistible Rise of Harry Potter",
        authors: ["Andrew Blake"],
        publisher: "Verso",
        publishedDate: "2002",
        description:
          "Blake's examination of the Potter phenomenon raises serious questions about the condition of the publishing industry, filmmaking, and the ways in which the Potter consumer campaign has changed ideas about literature and reading.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1859846661",
          },
          {
            type: "ISBN_13",
            identifier: "9781859846667",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 118,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 4.5,
        ratingsCount: 5,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.2.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=Aaug_RnI-xQC&printsec=frontcover&dq=harry+potter&hl=&cd=8&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=Aaug_RnI-xQC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Irresistible_Rise_of_Harry_Potter.html?hl=&id=Aaug_RnI-xQC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Aaug_RnI-xQC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Blake&#39;s examination of the Potter phenomenon raises serious questions about the condition of the publishing industry, filmmaking, and the ways in which the Potter consumer campaign has changed ideas about literature and reading.",
      },
    },
    {
      kind: "books#volume",
      id: "7HgwCgAAQBAJ",
      etag: "fq5+bApgXsc",
      selfLink: "https://www.googleapis.com/books/v1/volumes/7HgwCgAAQBAJ",
      volumeInfo: {
        title: "Harry Potter and the Classical World",
        subtitle: "Greek and Roman Allusions in J.K. Rowling’s Modern Epic",
        authors: ["Richard A. Spencer"],
        publisher: "McFarland",
        publishedDate: "2015-07-11",
        description:
          "J.K. Rowling has drawn deeply from classical sources to inform and color her Harry Potter novels, with allusions ranging from the obvious to the obscure. “Fluffy,” the vicious three-headed dog in Harry Potter and the Sorcerer’s Stone, is clearly a repackaging of Cerberus, the hellhound of Greek and Roman mythology. But the significance of Rowling’s quotation from Aeschylus at the front of Harry Potter and the Deathly Hallows is a matter of speculation. Her use of classical material is often presented with irony and humor. This extensive analysis of the Harry Potter series examines Rowling’s wide range of allusion to classical characters and themes and her varied use of classical languages. Chapters discuss Harry and Narcissus, Dumbledore’s many classical predecessors, Lord Voldemort’s likeness to mythical figures, and magic in Harry Potter and classical antiquity—among many topics.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781476621418",
          },
          {
            type: "ISBN_10",
            identifier: "1476621411",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 324,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 2.5,
        ratingsCount: 8,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=7HgwCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7HgwCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=7HgwCgAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=9&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=7HgwCgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=7HgwCgAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 124,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 84.32,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=7HgwCgAAQBAJ&rdid=book-7HgwCgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 124000000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 84320000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Harry_Potter_and_the_Classical_World-sample-epub.acsm?id=7HgwCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Harry_Potter_and_the_Classical_World-sample-pdf.acsm?id=7HgwCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=7HgwCgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This extensive analysis of the Harry Potter series examines Rowling&#39;s wide range of allusion to classical characters and themes and her varied use of classical languages.",
      },
    },
    {
      kind: "books#volume",
      id: "zb3wCQAAQBAJ",
      etag: "cE8dVL3nW0A",
      selfLink: "https://www.googleapis.com/books/v1/volumes/zb3wCQAAQBAJ",
      volumeInfo: {
        title: "Playing Harry Potter",
        subtitle: "Essays and Interviews on Fandom and Performance",
        authors: ["Lisa S. Brenner"],
        publisher: "McFarland",
        publishedDate: "2015-06-14",
        description:
          "Through classroom activities, wizard rock concerts, and organizations like the Harry Potter Alliance, Harry Potter fans are using creativity to positively impact the world. This collection of essays and interviews examines how playful fandom—from fanfiction to Muggle quidditch, cosplay, role-playing games, and even Harry Potter burlesque—not only reimagines the canon but also challenges consumerism, questions notions of identity, and fosters participatory culture. The contributors explore issues applicable to fan studies and performance studies at large, such as the role of performance, the nature of community, and questions of representation and ownership in the digital age. Presented in three parts, the essays discuss discrepancies between sanctioned versions of Harry Potter and fan creations, the reenactment and reinterpretation of the original narrative in fan performance, and collaborative and participatory performances that break down the boundaries between actors and audiences.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781476621364",
          },
          {
            type: "ISBN_10",
            identifier: "1476621365",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 248,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=zb3wCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=zb3wCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=zb3wCQAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=10&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=zb3wCQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=zb3wCQAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 124,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 84.32,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=zb3wCQAAQBAJ&rdid=book-zb3wCQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 124000000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 84320000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Playing_Harry_Potter-sample-epub.acsm?id=zb3wCQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Playing_Harry_Potter-sample-pdf.acsm?id=zb3wCQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=zb3wCQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This collection of essays and interviews examines how playful fandom--from fanfiction to Muggle quidditch, cosplay, role-playing games, and even Harry Potter burlesque--not only reimagines the canon but also challenges consumerism, ...",
      },
    },
    {
      kind: "books#volume",
      id: "cHjF5K2uVdsC",
      etag: "aND2Q5++f3M",
      selfLink: "https://www.googleapis.com/books/v1/volumes/cHjF5K2uVdsC",
      volumeInfo: {
        title: "Guide to the Harry Potter Novels",
        authors: ["Julia Eccleshare"],
        publisher: "A&C Black",
        publishedDate: "2002-04-22",
        description:
          "Provides information on the plots and characters in the Harry Potter novels by J. K. Rowling.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0826453171",
          },
          {
            type: "ISBN_13",
            identifier: "9780826453174",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 114,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.4.2.0.preview.3",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=cHjF5K2uVdsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=cHjF5K2uVdsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=cHjF5K2uVdsC&printsec=frontcover&dq=harry+potter&hl=&cd=11&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=cHjF5K2uVdsC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Guide_to_the_Harry_Potter_Novels.html?hl=&id=cHjF5K2uVdsC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Guide_to_the_Harry_Potter_Novels-sample-epub.acsm?id=cHjF5K2uVdsC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Guide_to_the_Harry_Potter_Novels-sample-pdf.acsm?id=cHjF5K2uVdsC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=cHjF5K2uVdsC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Provides information on the plots and characters in the Harry Potter novels by J. K. Rowling.",
      },
    },
    {
      kind: "books#volume",
      id: "-__ICQemqaEC",
      etag: "Qx6RZLRIr1Q",
      selfLink: "https://www.googleapis.com/books/v1/volumes/-__ICQemqaEC",
      volumeInfo: {
        title: "Reading Harry Potter",
        subtitle: "Critical Essays",
        authors: ["Giselle Liza Anatol"],
        publisher: "Greenwood Publishing Group",
        publishedDate: "2003",
        description:
          "The tropes and themes of J. K. Rowling's massively popular series are interpreted within the context of its audience.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0313320675",
          },
          {
            type: "ISBN_13",
            identifier: "9780313320675",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 217,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 5,
        ratingsCount: 8,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=-__ICQemqaEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=-__ICQemqaEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=-__ICQemqaEC&printsec=frontcover&dq=harry+potter&hl=&cd=12&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=-__ICQemqaEC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Reading_Harry_Potter.html?hl=&id=-__ICQemqaEC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Reading_Harry_Potter-sample-epub.acsm?id=-__ICQemqaEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Reading_Harry_Potter-sample-pdf.acsm?id=-__ICQemqaEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=-__ICQemqaEC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The tropes and themes of J. K. Rowling&#39;s massively popular series are interpreted within the context of its audience.",
      },
    },
    {
      kind: "books#volume",
      id: "KXyNjwEACAAJ",
      etag: "2jKuxlkGzIY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/KXyNjwEACAAJ",
      volumeInfo: {
        title: "Harry Potter",
        subtitle: "The Deathly Hallows",
        authors: ["British"],
        publisher: "Createspace Independent Publishing Platform",
        publishedDate: "2016-01-18",
        description:
          "Harry Potter and the Deathly Hallows is the seventh and final novel of the Harry Potter series, written by British author J. K. Rowling. The book was released on 21 July 2007 by Bloomsbury Publishing in the United Kingdom, in the United States by Scholastic, and in Canada by Raincoast Books, ending the series that began in 1997 with the publication of Harry Potter and the Philosopher's Stone. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005), and the final confrontation between the wizards Harry Potter and Lord Voldemort. Rowling finished writing Harry Potter and the Deathly Hallows in January 2007. Before its release, Bloomsbury reportedly spent 10 million to keep the book's contents safe before its release date. American publisher Arthur Levine refused any copies of the novel to be released in advance for press review, although two reviews were submitted early. Shortly before release, photos of all 759 pages of the U.S. edition were leaked and transcribed, leading Scholastic to look for the source that had leaked it. Released globally in 93 countries, Deathly Hallows broke sales records as the fastest-selling book ever, a record it still held in 2012.[3] It sold 15 million copies in the first 24 hours following its release, including more than 11 million in the U.S. and UK alone. The previous record, 9 million in its first day, had been held by Harry Potter and the Half-Blood Prince. The novel has also been translated into over 120 languages.\"",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1523480890",
          },
          {
            type: "ISBN_13",
            identifier: "9781523480890",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 260,
        printType: "BOOK",
        averageRating: 4.5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=KXyNjwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=KXyNjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=KXyNjwEACAAJ&dq=harry+potter&hl=&cd=13&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=KXyNjwEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter.html?hl=&id=KXyNjwEACAAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=KXyNjwEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Harry Potter and the Deathly Hallows is the seventh and final novel of the Harry Potter series, written by British author J. K. Rowling.",
      },
    },
    {
      kind: "books#volume",
      id: "gf8nDwAAQBAJ",
      etag: "TCLSkBrjGUI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/gf8nDwAAQBAJ",
      volumeInfo: {
        title: "Literary Allusion in Harry Potter",
        authors: ["Beatrice Groves"],
        publisher: "Routledge",
        publishedDate: "2017-06-14",
        description:
          "Literary Allusion in Harry Potter builds on the world-wide enthusiasm for J. K. Rowling’s series in order to introduce its readers to some of the great works of literature on which Rowling draws. Harry Potter’s narrative techniques are rooted in the western literary tradition and its allusiveness provides insight into Rowling’s fictional world. Each chapter of Literary Allusion in Harry Potter consists of an in-depth discussion of the intersection between Harry Potter and a canonical literary work, such as the plays of Shakespeare, the poetry of Homer, Ovid, the Gawain-poet, Chaucer, Milton and Tennyson, and the novels of Austen, Hardy and Dickens. This approach aims to transform the reader’s understanding of Rowling’s literary achievement as well as to encourage the discovery of works with which they may be less familiar. The aim of this book is to delight Potter fans with a new perspective on their favourite books while harnessing that enthusiasm to increase their wider appreciation of literature.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781351978729",
          },
          {
            type: "ISBN_10",
            identifier: "1351978721",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 174,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=gf8nDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=gf8nDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=gf8nDwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=14&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=gf8nDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=gf8nDwAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 182.47,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 127.73,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=gf8nDwAAQBAJ&rdid=book-gf8nDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 182470000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 127730000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Literary_Allusion_in_Harry_Potter-sample-epub.acsm?id=gf8nDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Literary_Allusion_in_Harry_Potter-sample-pdf.acsm?id=gf8nDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=gf8nDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The aim of this book is to delight Potter fans with a new perspective on their favourite books while harnessing that enthusiasm to increase their wider appreciation of literature.",
      },
    },
    {
      kind: "books#volume",
      id: "r0q9GTKO0qUC",
      etag: "uIk8JryRO+E",
      selfLink: "https://www.googleapis.com/books/v1/volumes/r0q9GTKO0qUC",
      volumeInfo: {
        title: "Mixing it Up With-- Harry Potter",
        subtitle: "12 Sessions about Faith for 9-13s",
        authors: ["Owen Smith"],
        publisher: "Church House Publishing",
        publishedDate: "2007",
        description:
          "Fact 1... The seven Harry Potter books have sold more than 350 million copies in 200 countries and the films are one of the highest grossing film series of all time. It is a cultural phenomenon in which our young people are greatly immersed. Fact 2... Young people aged 9-13 are a massively under-resourced age group in churches. Spanning the ‘tweenager’ and ‘tweenie’ age zones young people of this age are increasingly fashion-aware, media-savvy and worldly-wise. They don’t regard themselves as children but are not yet adults. This new book addresses both the need and the cultural interest.In 12 sessions, Mixing it up with Harry Potter draws parallels between events in the Harry Potter world, and the world in which our young people live. These parallels allow you to explore Christian concepts with your young people and engage with the Christian faith through the themes demonstrated – from complex subjects such as Sacrifice and Mercy, to everyday issues such as Fitting in and Boasting – with an introduction to the book covering all you need to consider in terms of health and safety, child protection, and how to handle the aspects of Harry Potter that are not always very godly.Mixing it up with Harry Potter will help young people to delight in their faith and encourage them to see that a relationship with God is even more enchanting than a visit to Hogwarts!Each session is divided into five parts and includes photocopiable material: · Beforehand (to help leaders prepare the session)· Opening Activity (introducing the session to the young people in an interactive and fun format)· Film Clip (a short clip from one of the Harry Potter films)· Taking It Further (developing the theme and exploring it in greater depth)· Bible Focus (a Bible verse that deals with the Christian perspective of the theme)· Prayer Response (prayer activity drawing on the theme and giving space for response)",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0715141066",
          },
          {
            type: "ISBN_13",
            identifier: "9780715141069",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 35,
        printType: "BOOK",
        categories: ["Church work with youth"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.1.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=r0q9GTKO0qUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=r0q9GTKO0qUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=r0q9GTKO0qUC&printsec=frontcover&dq=harry+potter&hl=&cd=15&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=r0q9GTKO0qUC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Mixing_it_Up_With_Harry_Potter.html?hl=&id=r0q9GTKO0qUC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=r0q9GTKO0qUC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This new book addresses both the need and the cultural interest.In 12 sessions, Mixing it up with Harry Potter draws parallels between events in the Harry Potter world, and the world in which our young people live.",
      },
    },
    {
      kind: "books#volume",
      id: "iO5pApw2JycC",
      etag: "sd2qz76vIF8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/iO5pApw2JycC",
      volumeInfo: {
        title: "The Ivory Tower and Harry Potter",
        subtitle: "Perspectives on a Literary Phenomenon",
        authors: ["Lana A. Whited"],
        publisher: "University of Missouri Press",
        publishedDate: "2004",
        description:
          "Now available in paper, The Ivory Tower and Harry Potter is the first book-length analysis of J. K. Rowling's work from a broad range of perspectives within literature, folklore, psychology, sociology, and popular culture. A significant portion of the book explores the Harry Potter series' literary ancestors, including magic and fantasy works by Ursula K. LeGuin, Monica Furlong, Jill Murphy, and others, as well as previous works about the British boarding school experience. Other chapters explore the moral and ethical dimensions of Harry's world, including objections to the series raised within some religious circles. In her new epilogue, Lana A. Whited brings this volume up to date by covering Rowling's latest book, Harry Potter and the Order of the Phoenix.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0826215491",
          },
          {
            type: "ISBN_13",
            identifier: "9780826215499",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 418,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 4.5,
        ratingsCount: 13,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.0.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=iO5pApw2JycC&printsec=frontcover&dq=harry+potter&hl=&cd=16&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=iO5pApw2JycC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Ivory_Tower_and_Harry_Potter.html?hl=&id=iO5pApw2JycC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/The_Ivory_Tower_and_Harry_Potter-sample-epub.acsm?id=iO5pApw2JycC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=iO5pApw2JycC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In her new epilogue, Lana A. Whited brings this volume up to date by covering Rowling&#39;s latest book, Harry Potter and the Order of the Phoenix.",
      },
    },
    {
      kind: "books#volume",
      id: "JGQBcu5O_ZcC",
      etag: "j5buJ1s9MF0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/JGQBcu5O_ZcC",
      volumeInfo: {
        title: "Friends and Foes of Harry Potter",
        subtitle: "Names Decoded",
        authors: ["Nikita Agarwal", "Chitra Agarwal", "Benjamin Vincent"],
        publisher: "Texas World Publishing",
        publishedDate: "2005",
        description:
          "Examines the meanings behind the names of people and places in the Harry Potter books.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781598002218",
          },
          {
            type: "ISBN_10",
            identifier: "159800221X",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 159,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        averageRating: 5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.0.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=JGQBcu5O_ZcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=JGQBcu5O_ZcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=JGQBcu5O_ZcC&printsec=frontcover&dq=harry+potter&hl=&cd=17&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=JGQBcu5O_ZcC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Friends_and_Foes_of_Harry_Potter.html?hl=&id=JGQBcu5O_ZcC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=JGQBcu5O_ZcC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Examines the meanings behind the names of people and places in the Harry Potter books.",
      },
    },
    {
      kind: "books#volume",
      id: "szF_pLGmJTQC",
      etag: "9GnFeLH2ueU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/szF_pLGmJTQC",
      volumeInfo: {
        title: "Baptizing Harry Potter",
        subtitle: "A Christian Reading of J.K. Rowling",
        authors: ["Luke Bell"],
        publisher: "Paulist Press",
        publishedDate: "2010",
        description:
          "The scope and tragedy of the thing : the structure of the series -- More things in heaven and earth : going beyond the normal -- As if a man were author of himself : good against evil -- Be absolute for death : life and death -- Power is made perfect in weakness : power and weakness -- To lay down one's life for one's friends : love and sacrifice -- It is essential that you understand this : freedom and determination -- A pretty boring life : the hidden and the ostentatious -- Telling it like it is : the struggle for truth -- They will see God : purity of heart and purity of blood.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781616431150",
          },
          {
            type: "ISBN_10",
            identifier: "1616431156",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 224,
        printType: "BOOK",
        categories: ["Children"],
        averageRating: 3,
        ratingsCount: 3,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.1.0.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=szF_pLGmJTQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=szF_pLGmJTQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=szF_pLGmJTQC&printsec=frontcover&dq=harry+potter&hl=&cd=18&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=szF_pLGmJTQC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=szF_pLGmJTQC",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 100.43,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 68.29,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=szF_pLGmJTQC&rdid=book-szF_pLGmJTQC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 100430000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 68290000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Baptizing_Harry_Potter-sample-pdf.acsm?id=szF_pLGmJTQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=szF_pLGmJTQC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The scope and tragedy of the thing : the structure of the series -- More things in heaven and earth : going beyond the normal -- As if a man were author of himself : good against evil -- Be absolute for death : life and death -- Power is ...",
      },
    },
    {
      kind: "books#volume",
      id: "lJB5DwAAQBAJ",
      etag: "JTLVh7PbgCs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/lJB5DwAAQBAJ",
      volumeInfo: {
        title: "The Ultimate Harry Potter and Philosophy",
        subtitle: "Hogwarts for Muggles",
        authors: ["William Irwin", "Gregory Bassham"],
        publisher: "John Wiley & Sons",
        publishedDate: "2010-09-14",
        description:
          "A philosophical exploration of the entire seven-book Harry Potter series Harry Potter has been heralded as one of the most popular book series of all time and the philosophical nature of Harry, Hermione, and Ron's quest to rid the world of its ultimate evil is one of the many things that make this series special. The Ultimate Harry Potter and Philosophy covers all seven titles in J.K. Rowling's groundbreaking series and takes fans back to Godric's Hollow to discuss life after death, to consider what moral reasoning drove Harry to choose death, and to debate whether Sirius Black is a man or a dog. With publication timed to coincide with the release of the movie Harry Potter and the Deathly Hallows (Part 1), this book will be the definitive guide for all fans looking to appreciate the series on a deeper level. Covers a range of intriguing topics such as the redemption of Severus Snape, the power of love, and destiny in the wizarding world Gives you a new perspective on Harry Potter characters, plot lines, and themes Makes a perfect companion to the Harry Potter books and movies Packed with interesting ideas and insights, The Ultimate Harry Potter and Philosophy is an ideal companion for anyone interested in unraveling the subtext and exploring the greater issues at work in the story.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780470398258",
          },
          {
            type: "ISBN_10",
            identifier: "0470398256",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 304,
        printType: "BOOK",
        categories: ["Philosophy"],
        averageRating: 4.5,
        ratingsCount: 5,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=lJB5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=lJB5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=lJB5DwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=19&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=lJB5DwAAQBAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Ultimate_Harry_Potter_and_Philosophy.html?hl=&id=lJB5DwAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=lJB5DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A philosophical exploration of the entire seven-book Harry Potter series Harry Potter has been heralded as one of the most popular book series of all time and the philosophical nature of Harry, Hermione, and Ron&#39;s quest to rid the world of ...",
      },
    },
    {
      kind: "books#volume",
      id: "p0mLvgEACAAJ",
      etag: "dEV44LOAW6c",
      selfLink: "https://www.googleapis.com/books/v1/volumes/p0mLvgEACAAJ",
      volumeInfo: {
        title: "Harry Potter",
        subtitle:
          "Harry Potter and the Sorcerer's Stone; Harry Potter and the Chamber of Secrets; Harry Potter and the Prisoner of Azkaban; Harry Potter and the Goblet of Fire; Harry Potter and the Order of the Phoenix; Harry Potter and the Half-Blood Prince; Harry Potter and the Deathly Hallows",
        authors: ["J. K. Rowling"],
        publisher: "Bloomsbury Harry Potter",
        publishedDate: "2007-10",
        description:
          "A fabulous opportunity to own all seven Harry Potter titles - Harry Potter and the Philosopher's Stone, Harry Potter and the Chamber of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet of Fire, Harry Potter and the Order of the Phoenix, Harry Potter and the Half-Blood Prince and Harry Potter and the Deathly Hallows- in a fantastic boxed set",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0747594562",
          },
          {
            type: "ISBN_13",
            identifier: "9780747594567",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 607,
        printType: "BOOK",
        categories: ["Fantasy fiction, English"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=p0mLvgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=p0mLvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=p0mLvgEACAAJ&dq=harry+potter&hl=&cd=20&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=p0mLvgEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter.html?hl=&id=p0mLvgEACAAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=p0mLvgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A fabulous opportunity to own all seven Harry Potter titles - Harry Potter and the Philosopher&#39;s Stone, Harry Potter and the Chamber of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet of Fire, Harry Potter and ...",
      },
    },
    {
      kind: "books#volume",
      id: "wrOQLV6xB-wC",
      etag: "tjTtAFT1m4U",
      selfLink: "https://www.googleapis.com/books/v1/volumes/wrOQLV6xB-wC",
      volumeInfo: {
        title: "Harry Potter and the Sorcerer's Stone",
        authors: ["J.K. Rowling"],
        publisher: "Pottermore Publishing",
        publishedDate: "2015-12-08",
        description:
          "\"Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781781100486",
          },
          {
            type: "ISBN_10",
            identifier: "1781100489",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 309,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 4.5,
        ratingsCount: 327,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.26.23.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=wrOQLV6xB-wC&dq=harry+potter&hl=&cd=21&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=wrOQLV6xB-wC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?hl=&id=wrOQLV6xB-wC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=wrOQLV6xB-wC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter &#39;H&#39;. Harry Potter has never even heard of Hogwarts when the letters start ...",
      },
    },
    {
      kind: "books#volume",
      id: "H9UJmPTY0LIC",
      etag: "8PTTwrgHBDI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/H9UJmPTY0LIC",
      volumeInfo: {
        title: "Harry Potter and Philosophy",
        subtitle: "If Aristotle Ran Hogwarts",
        authors: [
          "Associate Professor of Philosophy David Baggett",
          "William Irwin",
        ],
        publisher: "ReadHowYouWant.com",
        publishedDate: "2010-10-01",
        description:
          "You don't need a diploma in arithmancy, the friendship of a hippogriff, or even a Hogwarts Library card to discover amazing and arcane secrets in the labyrinthine world of Harry Potter. In the book you now hold in your hands (or for more advanced students, the book you have levitated into a suitable position while you feed snacks to your owl), seventeen philosophical scholars unlock some of Hogwarts secret panels, displaying fresh insights enlightening both for sorcerers and for the more discerning Muggles. Among the occult lore here revealed, behold the best recipe for true courage, proof that self-deception does not yield happiness, how ethics can be applied to the branch of technology known as magic, why the Mirror of Erised isn't adequate for real life, whether prophecy rules out free choice, and what dementors and boggarts can teach us about joy, fear, and the soul. All the pages of this book are acid-free and have been individually bewitched with an anti-befuddlement incantation. Dont forget to keep your wand primed and read between the lines. Failure to observe these precautions may invite the malign influence of Vol sorry, He Who Must Not Be Named. ''Harry Potter and Philosophy is the most enjoyable HP spin-off Ive read and Ive read most of them. Some chapters are so full of good reflections, clear thinking, and reliable scholarship, I couldnt resist reading entire passages aloud. Our family plans to read these thought-provoking essays at the dinner table, sparking intelligent conversation with our teen- and college-aged children Harry Potter fans all.''",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781459601055",
          },
          {
            type: "ISBN_10",
            identifier: "145960105X",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 404,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=H9UJmPTY0LIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=H9UJmPTY0LIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=H9UJmPTY0LIC&printsec=frontcover&dq=harry+potter&hl=&cd=22&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=H9UJmPTY0LIC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_Philosophy.html?hl=&id=H9UJmPTY0LIC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=H9UJmPTY0LIC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "All the pages of this book are acid-free and have been individually bewitched with an anti-befuddlement incantation. Dont forget to keep your wand primed and read between the lines.",
      },
    },
    {
      kind: "books#volume",
      id: "PUSwBAAAQBAJ",
      etag: "/9oHTw5Y+vw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/PUSwBAAAQBAJ",
      volumeInfo: {
        title: "J. K. Rowling: The Wizard Behind Harry Potter",
        authors: ["Marc Shapiro"],
        publisher: "St. Martin's Griffin",
        publishedDate: "2014-11-25",
        description:
          "The heartwarming story behind J.K. Rowling's rise to fame—and the answers to Harry Potter fans' most burning questions! Harry Potter is loved throughout the world, and so is his creator. Joanne Kathleen (J.K.) Rowling is a true wizard, a woman who has the ability to recall vividly her days as a child and capture those wild, wonderful, difficult times—an ability that helps make her creation, Harry Potter, seem so real. In this revealing book, fans of the Harry Potter series will get to see their favorite author as they never have before. From a child with a wonderful imagination who didn't quite fit in, to a single mother with almost overwhelming responsibilities, J.K. Rowling and her story provide a wonderful chance for adults and children to enjoy a heartwarming, magical story. . . together. Inside are the answers to some of the most frequently asked questions: * Where did the idea for the Harry Potter series come from? * How the birth of her third child impacted her life * What's the latest on the top secret writing projects that will follow HARRY POTTER AND THE DEATHLY HALLOWS? * What are Joanne's feelings about the Harry Potter saga finally ending? *Which of the characters does J.K most identify with? *What is J.K. Rowling's simple rule about writing? *And much more!",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781466885998",
          },
          {
            type: "ISBN_10",
            identifier: "1466885998",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 288,
        printType: "BOOK",
        categories: ["Biography & Autobiography"],
        averageRating: 2.5,
        ratingsCount: 6,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.4.3.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=PUSwBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=PUSwBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=PUSwBAAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=23&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=PUSwBAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=PUSwBAAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 52.66,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 39.5,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=PUSwBAAAQBAJ&rdid=book-PUSwBAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 52660000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 39500000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/J_K_Rowling_The_Wizard_Behind_Harry_Pott-sample-epub.acsm?id=PUSwBAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=PUSwBAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "In this revealing book, fans of the Harry Potter series will get to see their favorite author as they never have before.",
      },
    },
    {
      kind: "books#volume",
      id: "209bSZOwMYoC",
      etag: "NTaD8q8hu1I",
      selfLink: "https://www.googleapis.com/books/v1/volumes/209bSZOwMYoC",
      volumeInfo: {
        title: "Muggles, Monsters and Magicians",
        subtitle: "A Literary Analysis of the Harry Potter Series",
        authors: ["Claudia Fenske"],
        publisher: "Peter Lang",
        publishedDate: "2008",
        description:
          "\"Harry Potter's\" global triumph is without precedent. Economically it is the most successful children's book ever published and at the same time it has become the most widely discussed text for young adults. Why is this so? What does the text offer to its readers? \"Muggles, Monsters and Magicians\" deals with these issues and answers these questions. On the basis of a carefully conducted text-based analysis of the whole series it argues that, from a purely literary point of view, Pottermania is not entirely comprehensible. It identifies Rowling's narrative techniques, explains the world view underlying this series and links it to the literary genres of children's and fantastic literature.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "3631566611",
          },
          {
            type: "ISBN_13",
            identifier: "9783631566619",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 471,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.0.1.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=209bSZOwMYoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=209bSZOwMYoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=209bSZOwMYoC&printsec=frontcover&dq=harry+potter&hl=&cd=24&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=209bSZOwMYoC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Muggles_Monsters_and_Magicians.html?hl=&id=209bSZOwMYoC",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=209bSZOwMYoC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Originally published as the author&#39;s dissertation (doctoral)--Philipps-Universiteat Marburg, 2006.",
      },
    },
    {
      kind: "books#volume",
      id: "qQYfoV62d30C",
      etag: "0orZsUdPhQQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/qQYfoV62d30C",
      volumeInfo: {
        title: "JK Rowling's Harry Potter Novels",
        subtitle: "A Reader's Guide",
        authors: ["Philip Nel"],
        publisher: "A&C Black",
        publishedDate: "2001-09-26",
        description:
          "Explores the themes found in the novels, provides information about reviews of the novels, and includes information about the life of J.K. Rowling.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0826452329",
          },
          {
            type: "ISBN_13",
            identifier: "9780826452320",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 96,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 5,
        ratingsCount: 4,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.2.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=qQYfoV62d30C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=qQYfoV62d30C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=qQYfoV62d30C&printsec=frontcover&dq=harry+potter&hl=&cd=25&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=qQYfoV62d30C&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/JK_Rowling_s_Harry_Potter_Novels.html?hl=&id=qQYfoV62d30C",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=qQYfoV62d30C&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Explores the themes found in the novels, provides information about reviews of the novels, and includes information about the life of J.K. Rowling.",
      },
    },
    {
      kind: "books#volume",
      id: "70WIZwEACAAJ",
      etag: "3WVzhCptpYo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/70WIZwEACAAJ",
      volumeInfo: {
        title: "Harry Potter",
        subtitle: "Page to Screen",
        authors: ["Bob McCabe"],
        publisher: "Titan Publishing Company",
        publishedDate: "2011",
        description:
          "Bob McCabe offers an in-depth look at the craftsmanship, artistry, technology, and more than ten-year journey that took the world's bestselling fiction from page to screen. From elaborate sets and luxurious costumes to advanced special effects and film making techniques, this title chronicles all eight Harry Potter films.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0857687751",
          },
          {
            type: "ISBN_13",
            identifier: "9780857687753",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 528,
        printType: "BOOK",
        categories: ["Harry Potter films"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=70WIZwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=70WIZwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=70WIZwEACAAJ&dq=harry+potter&hl=&cd=26&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=70WIZwEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter.html?hl=&id=70WIZwEACAAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=70WIZwEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "&quot;From the moment the book was optioned to the last film, this book reveals all the filming secrets, never-before-seen images, and the most memorable moments - real and fictional - of the Harry Potter saga.",
      },
    },
    {
      kind: "books#volume",
      id: "K1NLDwAAQBAJ",
      etag: "by6l0bD5Mik",
      selfLink: "https://www.googleapis.com/books/v1/volumes/K1NLDwAAQBAJ",
      volumeInfo: {
        title: "Harry Potter and Convergence Culture",
        subtitle: "Essays on Fandom and the Expanding Potterverse",
        authors: ["Amanda Firestone", "Leisa A. Clark"],
        publisher: "McFarland",
        publishedDate: "2018-02-09",
        description:
          "Since the 1997 publication of the first Harry Potter novel, the “Potterverse” has seen the addition of eight feature films (with a ninth in production), the creation of the interactive Pottermore© website, the release of myriad video games, the construction of the Wizarding World of Harry Potter at Universal Studios, several companion books (such as Fantastic Beasts and Where to Find Them), critical essays and analyses, and the 2016 debut of the original stage play Harry Potter and the Cursed Child. This collection of new essays interprets the Wizarding World beyond the books and films through the lens of convergence culture. Contributors explore how online communities tackle Sorting and games like the Quidditch Cup and the Triwizard Tournament, and analyze how Fantastic Beasts and Harry Potter and the Cursed Child are changing fandom and the canon alike.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781476632537",
          },
          {
            type: "ISBN_10",
            identifier: "1476632537",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 223,
        printType: "BOOK",
        categories: ["Social Science"],
        averageRating: 4.5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=K1NLDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=K1NLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=K1NLDwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=27&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=K1NLDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=K1NLDwAAQBAJ",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 155.02,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 105.41,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=K1NLDwAAQBAJ&rdid=book-K1NLDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 155020000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 105410000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Harry_Potter_and_Convergence_Culture-sample-epub.acsm?id=K1NLDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Harry_Potter_and_Convergence_Culture-sample-pdf.acsm?id=K1NLDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=K1NLDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This collection of new essays interprets the Wizarding World beyond the books and films through the lens of convergence culture.",
      },
    },
    {
      kind: "books#volume",
      id: "2I_5zwnAEZ8C",
      etag: "XF90qoK7P/s",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2I_5zwnAEZ8C",
      volumeInfo: {
        title: "Harry Potter's Bookshelf",
        subtitle: "The Great Books behind the Hogwarts Adventures",
        authors: ["John Granger"],
        publisher: "Penguin",
        publishedDate: "2009-07-07",
        description:
          "Harry Potter. The name conjures up J.K. Rowling's wondrous world of magic that has captured the imaginations of millions on both the printed page and the silver screen with bestselling novels and blockbuster films. The true magic found in this children's fantasy series lies not only in its appeal to people of all ages but in its connection to the greater world of classic literature. Harry Potter's Bookshelf: The Great Books Behind the Hogwarts Adventures explores the literary landscape of themes and genres J.K. Rowling artfully wove throughout her novels-and the influential authors and stories that inspired her. From Jane Austen's Emma and Charles Dickens's class struggles, through the gothic romances of Dracula and Frankenstein and the detective mysteries of Dorothy L. Sayers, to the dramatic alchemy of C.S. Lewis, J.R.R. Tolkien, and William Shakespeare, Rowling cast a powerful spell with the great books of English literature that transformed the story of a young wizard into a worldwide pop culture phenomenon.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781101133132",
          },
          {
            type: "ISBN_10",
            identifier: "1101133139",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 336,
        printType: "BOOK",
        categories: ["Social Science"],
        averageRating: 4,
        ratingsCount: 7,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.1.3.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2I_5zwnAEZ8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2I_5zwnAEZ8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=2I_5zwnAEZ8C&printsec=frontcover&dq=harry+potter&hl=&cd=28&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2I_5zwnAEZ8C&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2I_5zwnAEZ8C",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 54.19,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 40.64,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2I_5zwnAEZ8C&rdid=book-2I_5zwnAEZ8C&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 54190000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 40640000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Harry_Potter_s_Bookshelf-sample-epub.acsm?id=2I_5zwnAEZ8C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2I_5zwnAEZ8C&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Harry Potter&#39;s Bookshelf: The Great Books Behind the Hogwarts Adventures explores the literary landscape of themes and genres J.K. Rowling artfully wove throughout her novels-and the influential authors and stories that inspired her.",
      },
    },
    {
      kind: "books#volume",
      id: "WV8pZj_oNBwC",
      etag: "6KCL7BRrubM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/WV8pZj_oNBwC",
      volumeInfo: {
        title: "Harry Potter Power",
        authors: ["Julie-Anne Sykley"],
        publisher: "Interactive Publications",
        publishedDate: "2010",
        description:
          "Uses motifs and situations from the popular 'Harry Potter' series and links them to theories and strategies designed to help young people overcome anxiety, anger, depression and grief.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781921479311",
          },
          {
            type: "ISBN_10",
            identifier: "1921479310",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 268,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        averageRating: 1,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.0.0.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=WV8pZj_oNBwC&printsec=frontcover&dq=harry+potter&hl=&cd=29&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=WV8pZj_oNBwC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=WV8pZj_oNBwC",
      },
      saleInfo: {
        country: "HK",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 120.72,
          currencyCode: "HKD",
        },
        retailPrice: {
          amount: 82.09,
          currencyCode: "HKD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=WV8pZj_oNBwC&rdid=book-WV8pZj_oNBwC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 120720000,
              currencyCode: "HKD",
            },
            retailPrice: {
              amountInMicros: 82090000,
              currencyCode: "HKD",
            },
          },
        ],
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=WV8pZj_oNBwC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "&quot;[The author] shows how the universal themes in the Harry Potter series can make your life more positive and healthy and your lifestyle more sustainable.&quot;--Back cover.",
      },
    },
    {
      kind: "books#volume",
      id: "LiWrXUHgnL8C",
      etag: "TYpwEeJ7ahw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/LiWrXUHgnL8C",
      volumeInfo: {
        title: "Females and Harry Potter",
        subtitle: "Not All that Empowering",
        authors: ["Ruthann Mayes-Elma"],
        publisher: "Rowman & Littlefield",
        publishedDate: "2006",
        description:
          "Uses critical discourse analysis, feminist theory, and critical theory to examine the female characters in J.K. Rowling's Harry Potter series, focusing on such themes as validating/enabling, intelligence, and mothering.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "074253779X",
          },
          {
            type: "ISBN_13",
            identifier: "9780742537798",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 155,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 2.5,
        ratingsCount: 10,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.0.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LiWrXUHgnL8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=LiWrXUHgnL8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com.hk/books?id=LiWrXUHgnL8C&printsec=frontcover&dq=harry+potter&hl=&cd=30&source=gbs_api",
        infoLink:
          "http://books.google.com.hk/books?id=LiWrXUHgnL8C&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Females_and_Harry_Potter.html?hl=&id=LiWrXUHgnL8C",
      },
      saleInfo: {
        country: "HK",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "HK",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Females_and_Harry_Potter-sample-epub.acsm?id=LiWrXUHgnL8C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com.hk/books/download/Females_and_Harry_Potter-sample-pdf.acsm?id=LiWrXUHgnL8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=LiWrXUHgnL8C&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Uses critical discourse analysis, feminist theory, and critical theory to examine the female characters in J.K. Rowling&#39;s Harry Potter series, focusing on such themes as validating/enabling, intelligence, and mothering.",
      },
    },
  ],
};
