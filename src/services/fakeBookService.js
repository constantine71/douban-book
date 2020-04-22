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
  totalItems: 2036,
  items: [
    {
      kind: "books#volume",
      id: "5MQFrgEACAAJ",
      etag: "8D7j18dsDV0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5MQFrgEACAAJ",
      volumeInfo: {
        title: "Harry Potter and the Sorcerer's Stone",
        authors: ["J. K. Rowling"],
        publishedDate: "2014-12",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1627157727",
          },
          {
            type: "ISBN_13",
            identifier: "9781627157728",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: "BOOK",
        averageRating: 4.5,
        ratingsCount: 1559,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=5MQFrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=5MQFrgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=5MQFrgEACAAJ&dq=harry+potter&hl=&cd=1&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=5MQFrgEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?hl=&id=5MQFrgEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=5MQFrgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Witchcraft and Wizardry.",
      },
    },
    {
      kind: "books#volume",
      id: "v0jYDAEACAAJ",
      etag: "19E9/8+EuFA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/v0jYDAEACAAJ",
      volumeInfo: {
        title: "Fantastic Beasts &amp; where to Find Them",
        readingModes: {
          text: false,
          image: false,
        },
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "full-1.0.0",
        language: "en",
        previewLink:
          "http://books.google.com/books?id=v0jYDAEACAAJ&dq=harry+potter&hl=&cd=2&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=v0jYDAEACAAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=v0jYDAEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "FREE",
        isEbook: true,
        buyLink:
          "https://play.google.com/store/books/details?id=v0jYDAEACAAJ&rdid=book-v0jYDAEACAAJ&rdot=1&source=gbs_api",
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=v0jYDAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: "Written by J.K. Rowling as a fictitious author.",
      },
    },
    {
      kind: "books#volume",
      id: "f280CwAAQBAJ",
      etag: "2LlJ7FSVuk8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/f280CwAAQBAJ",
      volumeInfo: {
        title: "Harry Potter: The Complete Collection (1-7)",
        authors: ["J.K. Rowling"],
        publisher: "Pottermore Publishing",
        publishedDate: "2015-12-14",
        description:
          "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781781106464",
          },
          {
            type: "ISBN_10",
            identifier: "1781106460",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 4236,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 4.5,
        ratingsCount: 21,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.14.13.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=f280CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=f280CwAAQBAJ&dq=harry+potter&hl=&cd=3&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=f280CwAAQBAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_The_Complete_Collection_1_7.html?hl=&id=f280CwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=f280CwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "All seven eBooks in the multi-award winning, internationally bestselling Harry Potter series, available as one download with stunning cover art by Olly Moss. Enjoy the stories that have captured the imagination of millions worldwide.",
      },
    },
    {
      kind: "books#volume",
      id: "oPIMmQEACAAJ",
      etag: "gyMsYNCpPnM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/oPIMmQEACAAJ",
      volumeInfo: {
        title: "Harry Potter and the Goblet of Fire",
        authors: ["J. K. Rowling", "Mary GrandPré"],
        publisher: "Scholastic Paperbacks",
        publishedDate: "2013-08-27",
        description:
          "Young wizard-in-training Harry Potter prepares for a competition between Hogwarts School of Magic and two rival schools, develops a crush on Cho Chang, and wishes above all to be a normal fourteen-year-old.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0545582954",
          },
          {
            type: "ISBN_13",
            identifier: "9780545582957",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 734,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 4.5,
        ratingsCount: 122,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=oPIMmQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=oPIMmQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=oPIMmQEACAAJ&dq=harry+potter&hl=&cd=4&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=oPIMmQEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Goblet_of_Fire.html?hl=&id=oPIMmQEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=oPIMmQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Young wizard-in-training Harry Potter prepares for a competition between Hogwarts School of Magic and two rival schools, develops a crush on Cho Chang, and wishes above all to be a normal fourteen-year-old.",
      },
    },
    {
      kind: "books#volume",
      id: "Oe3aH0YVI1IC",
      etag: "IuxytEwntso",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Oe3aH0YVI1IC",
      volumeInfo: {
        title: "The Magical Worlds of Harry Potter",
        subtitle: "A Treasury of Myths, Legends, and Fascinating Facts",
        authors: ["David Colbert"],
        publisher: "Penguin",
        publishedDate: "2008",
        description:
          "Explores the sources and meanings of aspects of the literary world of Harry Potter within myths, legends, and history.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0425223183",
          },
          {
            type: "ISBN_13",
            identifier: "9780425223185",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 335,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 4,
        ratingsCount: 10,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.0.1.0.preview.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Oe3aH0YVI1IC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Oe3aH0YVI1IC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=Oe3aH0YVI1IC&printsec=frontcover&dq=harry+potter&hl=&cd=5&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=Oe3aH0YVI1IC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Magical_Worlds_of_Harry_Potter.html?hl=&id=Oe3aH0YVI1IC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=Oe3aH0YVI1IC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Explores the sources and meanings of aspects of the literary world of Harry Potter within myths, legends, and history.",
      },
    },
    {
      kind: "books#volume",
      id: "7rtOzQEACAAJ",
      etag: "l/GDjaZiFyo",
      selfLink: "https://www.googleapis.com/books/v1/volumes/7rtOzQEACAAJ",
      volumeInfo: {
        title: "Harry Potter and the Philosopher's Stone",
        authors: ["J K Rowling"],
        publishedDate: "2014-05-01",
        description:
          "An adult edition of the hugely popular book. Find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most fabled secret of all time.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "8183224210",
          },
          {
            type: "ISBN_13",
            identifier: "9788183224215",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 314,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        language: "en",
        previewLink:
          "http://books.google.com/books?id=7rtOzQEACAAJ&dq=harry+potter&hl=&cd=6&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=7rtOzQEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Philosopher_s_Stone.html?hl=&id=7rtOzQEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=7rtOzQEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "DKcWE3WXoj8C",
      etag: "P08LcjyZcek",
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
          "http://books.google.com/books?id=DKcWE3WXoj8C&printsec=frontcover&dq=harry+potter&hl=&cd=7&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=DKcWE3WXoj8C&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_International_Relations.html?hl=&id=DKcWE3WXoj8C",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
            "http://books.google.com/books/download/Harry_Potter_and_International_Relations-sample-pdf.acsm?id=DKcWE3WXoj8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
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
      id: "tcSMCwAAQBAJ",
      etag: "NviHrHC87dY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/tcSMCwAAQBAJ",
      volumeInfo: {
        title:
          "Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)",
        authors: ["J.K. Rowling", "John Tiffany", "Jack Thorne"],
        publisher: "Pottermore Publishing",
        publishedDate: "2016-07-31",
        description:
          "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play received its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781781107041",
          },
          {
            type: "ISBN_10",
            identifier: "1781107041",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 320,
        printType: "BOOK",
        categories: ["Drama"],
        averageRating: 3.5,
        ratingsCount: 229,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.2.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=tcSMCwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=8&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=tcSMCwAAQBAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Cursed_Child_Parts.html?hl=&id=tcSMCwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_and_the_Cursed_Child_Parts-sample-epub.acsm?id=tcSMCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_and_the_Cursed_Child_Parts-sample-pdf.acsm?id=tcSMCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=tcSMCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be ...",
      },
    },
    {
      kind: "books#volume",
      id: "JGQBcu5O_ZcC",
      etag: "Kzag+LlLC4E",
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
          "http://books.google.com/books?id=JGQBcu5O_ZcC&printsec=frontcover&dq=harry+potter&hl=&cd=9&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=JGQBcu5O_ZcC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Friends_and_Foes_of_Harry_Potter.html?hl=&id=JGQBcu5O_ZcC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "BoX-6R21MgQC",
      etag: "q+o3EW2SD9k",
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
          "http://books.google.com/books?id=BoX-6R21MgQC&pg=PA233&dq=harry+potter&hl=&cd=10&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=BoX-6R21MgQC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=BoX-6R21MgQC",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 17.95,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 9.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=BoX-6R21MgQC&rdid=book-BoX-6R21MgQC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 17950000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 9990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/The_Psychology_of_Harry_Potter-sample-epub.acsm?id=BoX-6R21MgQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/The_Psychology_of_Harry_Potter-sample-pdf.acsm?id=BoX-6R21MgQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=BoX-6R21MgQC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Lyubansky examines the question of racial prejudice in the world of <b>Harry Potter</b>. <br>\nRowling portrays a race-blind society at Hogwarts but pursues the issue of race <br>\nthrough proxy: the hatred of the pure- bloods for the “Mudbloods” and the slavery<br>\n&nbsp;...",
      },
    },
    {
      kind: "books#volume",
      id: "DAAAAAAACAAJ",
      etag: "sznG6+mPERY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/DAAAAAAACAAJ",
      volumeInfo: {
        title: "Harry Potter",
        subtitle: "5 Years of Magic, Adventure, and Mystery at Hogwarts",
        authors: ["J. K. Rowling"],
        publisher: "Scholastic",
        publishedDate: "2004-09-01",
        description:
          "The first five years of Harry Potter magic are captured in a boxed set which includes The Sorcerer's Stone, The Chamber of Secrets, The Prisoner of Azkaban, The Goblet of Fire, and The Order of the Phoenix. Simultaneous.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0439682584",
          },
          {
            type: "ISBN_13",
            identifier: "9780439682589",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 4.5,
        ratingsCount: 11,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=DAAAAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=DAAAAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=DAAAAAAACAAJ&dq=harry+potter&hl=&cd=11&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=DAAAAAAACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter.html?hl=&id=DAAAAAAACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=DAAAAAAACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The first five years of Harry Potter magic are captured in a boxed set which includes The Sorcerer&#39;s Stone, The Chamber of Secrets, The Prisoner of Azkaban, The Goblet of Fire, and The Order of the Phoenix. Simultaneous.",
      },
    },
    {
      kind: "books#volume",
      id: "ODOODwAAQBAJ",
      etag: "Hy1pYvRpgTQ",
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
          "http://books.google.com/books?id=ODOODwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=12&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ODOODwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ODOODwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 19.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 9.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ODOODwAAQBAJ&rdid=book-ODOODwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 19990000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 9990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/The_Harry_Potter_Generation-sample-epub.acsm?id=ODOODwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/The_Harry_Potter_Generation-sample-pdf.acsm?id=ODOODwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
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
      id: "7yyUswEACAAJ",
      etag: "8vmbEV9rhPI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/7yyUswEACAAJ",
      volumeInfo: {
        title: "Harry Potter - The Illustrated Collection",
        authors: ["J. K. Rowling"],
        publisher: "Bloomsbury Publishing",
        publishedDate: "2017-11-16",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1408897318",
          },
          {
            type: "ISBN_13",
            identifier: "9781408897317",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: "BOOK",
        averageRating: 5,
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
            "http://books.google.com/books/content?id=7yyUswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=7yyUswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=7yyUswEACAAJ&dq=harry+potter&hl=&cd=13&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=7yyUswEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_The_Illustrated_Collection.html?hl=&id=7yyUswEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=7yyUswEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "lJB5DwAAQBAJ",
      etag: "bgEOmSwbvpo",
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
          "http://books.google.com/books?id=lJB5DwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=14&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=lJB5DwAAQBAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Ultimate_Harry_Potter_and_Philosophy.html?hl=&id=lJB5DwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "3PGBUrScs-YC",
      etag: "XSZqBDP7+wI",
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
          "http://books.google.com/books?id=3PGBUrScs-YC&q=harry+potter&dq=harry+potter&hl=&cd=15&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=3PGBUrScs-YC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Bible.html?hl=&id=3PGBUrScs-YC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "wBjQoAEACAAJ",
      etag: "ipqEMk7DOBs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/wBjQoAEACAAJ",
      volumeInfo: {
        title: "Harry Potter",
        subtitle: "The Complete Collection",
        authors: ["J.K. Rowling"],
        publishedDate: "2013",
        description:
          "FANTASY. J.K. Rowling's Harry Potter novels are now available in these spectacular new editions, with beautifully designed jackets by renowned woodcut artist Andrew Davidson. This stylish boxed set includes all seven novels and is perfect for Harry Potter novices and collectors alike. Contains (in reading order): Harry Potter and the Philosopher's Stone, Harry Potter and the Chamber of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet of Fire, Harry Potter and the Order of the Phoenix, Harry Potter and the Half-Blood Prince, and Harry Potter and the Deathly Hallows. Ages 9+",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1408850753",
          },
          {
            type: "ISBN_13",
            identifier: "9781408850756",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 3422,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=wBjQoAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=wBjQoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=wBjQoAEACAAJ&dq=harry+potter&hl=&cd=16&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=wBjQoAEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter.html?hl=&id=wBjQoAEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=wBjQoAEACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "J.K. Rowling&#39;s Harry Potter novels are now available in these spectacular new editions, with beautifully designed jackets by renowned woodcut artist Andrew Davidson.",
      },
    },
    {
      kind: "books#volume",
      id: "5iTebBW-w7QC",
      etag: "PHJCh4qEdNs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5iTebBW-w7QC",
      volumeInfo: {
        title: "Harry Potter and the Chamber of Secrets",
        authors: ["J.K. Rowling"],
        publisher: "Pottermore Publishing",
        publishedDate: "2015-12-08",
        description:
          "'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781781100509",
          },
          {
            type: "ISBN_10",
            identifier: "1781100500",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 341,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 4.5,
        ratingsCount: 2386,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.18.15.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=5iTebBW-w7QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=5iTebBW-w7QC&printsec=frontcover&dq=harry+potter&hl=&cd=17&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=5iTebBW-w7QC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=5iTebBW-w7QC",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 8.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 8.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=5iTebBW-w7QC&rdid=book-5iTebBW-w7QC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 8990000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 8990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_and_the_Chamber_of_Secrets-sample-epub.acsm?id=5iTebBW-w7QC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_and_the_Chamber_of_Secrets-sample-pdf.acsm?id=5iTebBW-w7QC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=5iTebBW-w7QC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: "&#39;There is a plot, Harry Potter.",
      },
    },
    {
      kind: "books#volume",
      id: "1WgGDAAAQBAJ",
      etag: "ShjmUUnsgCU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/1WgGDAAAQBAJ",
      volumeInfo: {
        title: "Heroism in the Harry Potter Series",
        authors: ["Katrin Berndt", "Lena Steveker"],
        publisher: "Routledge",
        publishedDate: "2016-04-22",
        description:
          "Taking up the various conceptions of heroism that are conjured in the Harry Potter series, this collection examines the ways fictional heroism in the twenty-first century challenges the idealized forms of a somewhat simplistic masculinity associated with genres like the epic, romance and classic adventure story. The collection's three sections address broad issues related to genre, Harry Potter's development as the central heroic character and the question of who qualifies as a hero in the Harry Potter series. Among the topics are Harry Potter as both epic and postmodern hero, the series as a modern-day example of psychomachia, the series' indebtedness to the Gothic tradition, Harry's development in the first six film adaptations, Harry Potter and the idea of the English gentleman, Hermione Granger's explicitly female version of heroism, adult role models in Harry Potter, and the complex depictions of heroism exhibited by the series' minor characters. Together, the essays suggest that the Harry Potter novels rely on established generic, moral and popular codes to develop new and genuine ways of expressing what a globalized world has applauded as ethically exemplary models of heroism based on responsibility, courage, humility and kindness.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781317122111",
          },
          {
            type: "ISBN_10",
            identifier: "1317122119",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 248,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "1.1.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=1WgGDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=1WgGDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=1WgGDAAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=18&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=1WgGDAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=1WgGDAAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 62.95,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 50.36,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=1WgGDAAAQBAJ&rdid=book-1WgGDAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 62950000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 50360000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
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
            "http://books.google.com/books/download/Heroism_in_the_Harry_Potter_Series-sample-pdf.acsm?id=1WgGDAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=1WgGDAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
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
      id: "Aaug_RnI-xQC",
      etag: "WshKbrtGFlU",
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
          "http://books.google.com/books?id=Aaug_RnI-xQC&printsec=frontcover&dq=harry+potter&hl=&cd=19&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=Aaug_RnI-xQC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Irresistible_Rise_of_Harry_Potter.html?hl=&id=Aaug_RnI-xQC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "ilc0DwAAQBAJ",
      etag: "q9Bui+7SPx0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ilc0DwAAQBAJ",
      volumeInfo: {
        title: "Harry Potter - A Journey Through A History of Magic",
        authors: ["British Library"],
        publisher: "Pottermore Publishing",
        publishedDate: "2017-10-20",
        description:
          "The official companion book to the British Library exhibition and the ultimate gift for Harry Potter fans! As the British Library unveils a very special new exhibition in the UK, Harry Potter: A History of Magic, readers everywhere are invited on an enchanting journey through the Hogwarts curriculum, from Care of Magical Creatures and Herbology to Defense Against the Dark Arts, Astronomy, and more in this eBook uncovering thousands of years of magical history. Prepare to be amazed by artifacts released from the archives of the British Library, unseen sketches and manuscript pages from J.K. Rowling, and incredible illustrations from artist Jim Kay. Discover the truth behind the origins of the Philosopher’s Stone, monstrous dragons, and troublesome trolls; examine real-life wands and find out what actually makes a mandrake scream; pore over remarkable pages from da Vinci’s notebook; and discover the oldest atlas of the night sky. Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781781109502",
          },
          {
            type: "ISBN_10",
            identifier: "1781109508",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 144,
        printType: "BOOK",
        categories: ["Juvenile Nonfiction"],
        averageRating: 4,
        ratingsCount: 5,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.9.6.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ilc0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=ilc0DwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=20&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ilc0DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ilc0DwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 8.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 8.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ilc0DwAAQBAJ&rdid=book-ilc0DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 8990000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 8990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_A_Journey_Through_A_History-sample-epub.acsm?id=ilc0DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_A_Journey_Through_A_History-sample-pdf.acsm?id=ilc0DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ilc0DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Carefully curated by the British Library and full of extraordinary treasures from all over the world, this is an unforgettable journey exploring the history of the magic at the heart of the Harry Potter stories.",
      },
    },
    {
      kind: "books#volume",
      id: "eD8MGwAACAAJ",
      etag: "7ylm55ABlLI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/eD8MGwAACAAJ",
      volumeInfo: {
        title: "Harry Potter Deluxe Journal",
        authors: [
          "Scholastic, Inc",
          "Warner Bros",
          "Warner Bros. Entertainment Staff",
        ],
        publisher: "Cartwheel Books",
        publishedDate: "2001-07-01",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0439286360",
          },
          {
            type: "ISBN_13",
            identifier: "9780439286367",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 192,
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=eD8MGwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=eD8MGwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=eD8MGwAACAAJ&dq=harry+potter&hl=&cd=21&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=eD8MGwAACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_Deluxe_Journal.html?hl=&id=eD8MGwAACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=eD8MGwAACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "209bSZOwMYoC",
      etag: "rDRXVGh3guA",
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
          "http://books.google.com/books?id=209bSZOwMYoC&printsec=frontcover&dq=harry+potter&hl=&cd=22&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=209bSZOwMYoC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Muggles_Monsters_and_Magicians.html?hl=&id=209bSZOwMYoC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "Sm3TAQAACAAJ",
      etag: "elzb4L73Kq0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Sm3TAQAACAAJ",
      volumeInfo: {
        title: "Harry Potter: Magical Film Projections: Patronus Charm",
        authors: ["Insight Editions"],
        publisher: "J.K. Rowling's Wizarding World",
        publishedDate: "2017-07-04",
        description:
          "Using black line illustrations on framed acetate pages, this enchanting book allows fans to project their favorite scenes from the Harry Potter films at home with a flashlight. Expecto Patronum! Discover the powerful Patronus Charm that Harry Potter and other wizards and witches use to produce a magical guardian. In a dark room, shine a light through the window on each page of this unique book to project incredible scenes on the wall or ceiling. Read along and experience magical moments from the Harry potter films like never before.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0763695866",
          },
          {
            type: "ISBN_13",
            identifier: "9780763695866",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 16,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Sm3TAQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Sm3TAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=Sm3TAQAACAAJ&dq=harry+potter&hl=&cd=23&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=Sm3TAQAACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_Magical_Film_Projections_Pa.html?hl=&id=Sm3TAQAACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=Sm3TAQAACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Using black line illustrations on framed acetate pages, this enchanting book allows fans to project their favorite scenes from the Harry Potter films at home with a flashlight.",
      },
    },
    {
      kind: "books#volume",
      id: "iO5pApw2JycC",
      etag: "kyKlcGGf72A",
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
          "http://books.google.com/books?id=iO5pApw2JycC&printsec=frontcover&dq=harry+potter&hl=&cd=24&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=iO5pApw2JycC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Ivory_Tower_and_Harry_Potter.html?hl=&id=iO5pApw2JycC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/The_Ivory_Tower_and_Harry_Potter-sample-epub.acsm?id=iO5pApw2JycC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
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
      id: "r0q9GTKO0qUC",
      etag: "/6OH/RBCmAs",
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
          "http://books.google.com/books?id=r0q9GTKO0qUC&printsec=frontcover&dq=harry+potter&hl=&cd=25&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=r0q9GTKO0qUC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Mixing_it_Up_With_Harry_Potter.html?hl=&id=r0q9GTKO0qUC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "sxFHPgAACAAJ",
      etag: "1UyzODL+0ls",
      selfLink: "https://www.googleapis.com/books/v1/volumes/sxFHPgAACAAJ",
      volumeInfo: {
        title: "Harry Potter and the Sorcerer's Stone",
        authors: ["Joanne K. Rowling"],
        publisher: "Scholastic Paperbacks",
        publishedDate: "1997",
        description:
          "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "043936213X",
          },
          {
            type: "ISBN_13",
            identifier: "9780439362139",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 384,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 4.5,
        ratingsCount: 1537,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=sxFHPgAACAAJ&dq=harry+potter&hl=&cd=26&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=sxFHPgAACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_the_Sorcerer_s_Stone.html?hl=&id=sxFHPgAACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=sxFHPgAACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches.",
      },
    },
    {
      kind: "books#volume",
      id: "Sm5AKLXKxHgC",
      etag: "wF6NZ1b4qGI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Sm5AKLXKxHgC",
      volumeInfo: {
        title: "Harry Potter and the Prisoner of Azkaban",
        authors: ["J.K. Rowling"],
        publisher: "Pottermore Publishing",
        publishedDate: "2015-12-08",
        description:
          "'Welcome to the Knight Bus, emergency transport for the stranded witch or wizard. Just stick out your wand hand, step on board and we can take you anywhere you want to go.' When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781781100516",
          },
          {
            type: "ISBN_10",
            identifier: "1781100519",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 448,
        printType: "BOOK",
        categories: ["Juvenile Fiction"],
        averageRating: 4.5,
        ratingsCount: 2495,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.17.16.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Sm5AKLXKxHgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=Sm5AKLXKxHgC&printsec=frontcover&dq=harry+potter&hl=&cd=27&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=Sm5AKLXKxHgC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=Sm5AKLXKxHgC",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 8.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 8.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=Sm5AKLXKxHgC&rdid=book-Sm5AKLXKxHgC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 8990000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 8990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_and_the_Prisoner_of_Azkaban-sample-epub.acsm?id=Sm5AKLXKxHgC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Harry_Potter_and_the_Prisoner_of_Azkaban-sample-pdf.acsm?id=Sm5AKLXKxHgC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Sm5AKLXKxHgC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "&#39;Welcome to the Knight Bus, emergency transport for the stranded witch or wizard.",
      },
    },
    {
      kind: "books#volume",
      id: "WV8pZj_oNBwC",
      etag: "jFdc6xMwC68",
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
          "http://books.google.com/books?id=WV8pZj_oNBwC&printsec=frontcover&dq=harry+potter&hl=&cd=28&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=WV8pZj_oNBwC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=WV8pZj_oNBwC",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 15.57,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 9.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=WV8pZj_oNBwC&rdid=book-WV8pZj_oNBwC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 15570000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 9990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
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
      id: "UvgrPwAACAAJ",
      etag: "4KRJeHsHoDQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/UvgrPwAACAAJ",
      volumeInfo: {
        title: "The Harry Potter Collection",
        subtitle: "The First Five Breathtaking Adventures at Hogwarts",
        authors: ["J. K. Rowling"],
        publisher: "Arthur a Levine",
        publishedDate: "2004-10-01",
        description:
          "The first five years of Harry Potter magic are captured in a boxed set which includes The Sorcerer's Stone, The Chamber of Secrets, The Prisoner of Azkaban, The Goblet of Fire, and The Order of the Phoenix. Simultaneous.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0439705525",
          },
          {
            type: "ISBN_13",
            identifier: "9780439705523",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: "BOOK",
        averageRating: 4.5,
        ratingsCount: 16,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=UvgrPwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=UvgrPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=UvgrPwAACAAJ&dq=harry+potter&hl=&cd=29&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=UvgrPwAACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_Harry_Potter_Collection.html?hl=&id=UvgrPwAACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=UvgrPwAACAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The first five years of Harry Potter magic are captured in a boxed set which includes The Sorcerer&#39;s Stone, The Chamber of Secrets, The Prisoner of Azkaban, The Goblet of Fire, and The Order of the Phoenix. Simultaneous.",
      },
    },
    {
      kind: "books#volume",
      id: "KXyNjwEACAAJ",
      etag: "FJF4kLM5tOA",
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
          "http://books.google.com/books?id=KXyNjwEACAAJ&dq=harry+potter&hl=&cd=30&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=KXyNjwEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter.html?hl=&id=KXyNjwEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "szF_pLGmJTQC",
      etag: "kvYcEA352UU",
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
          "http://books.google.com/books?id=szF_pLGmJTQC&printsec=frontcover&dq=harry+potter&hl=&cd=31&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=szF_pLGmJTQC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=szF_pLGmJTQC",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 12.95,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 9.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=szF_pLGmJTQC&rdid=book-szF_pLGmJTQC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 12950000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 9990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
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
            "http://books.google.com/books/download/Baptizing_Harry_Potter-sample-pdf.acsm?id=szF_pLGmJTQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
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
      id: "-__ICQemqaEC",
      etag: "CgTTDQoaVqE",
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
          "http://books.google.com/books?id=-__ICQemqaEC&printsec=frontcover&dq=harry+potter&hl=&cd=32&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=-__ICQemqaEC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=-__ICQemqaEC",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 49.95,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 39.46,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=-__ICQemqaEC&rdid=book--__ICQemqaEC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 49950000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 39460000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Reading_Harry_Potter-sample-epub.acsm?id=-__ICQemqaEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Reading_Harry_Potter-sample-pdf.acsm?id=-__ICQemqaEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
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
      id: "70WIZwEACAAJ",
      etag: "4dbXlMTfeXY",
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
          "http://books.google.com/books?id=70WIZwEACAAJ&dq=harry+potter&hl=&cd=33&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=70WIZwEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter.html?hl=&id=70WIZwEACAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "H9UJmPTY0LIC",
      etag: "yw4DXCrKZsE",
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
          "http://books.google.com/books?id=H9UJmPTY0LIC&printsec=frontcover&dq=harry+potter&hl=&cd=34&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=H9UJmPTY0LIC&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Harry_Potter_and_Philosophy.html?hl=&id=H9UJmPTY0LIC",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
      id: "LiWrXUHgnL8C",
      etag: "iGxzZXeZ0Ww",
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
          "http://books.google.com/books?id=LiWrXUHgnL8C&printsec=frontcover&dq=harry+potter&hl=&cd=35&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=LiWrXUHgnL8C&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Females_and_Harry_Potter.html?hl=&id=LiWrXUHgnL8C",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Females_and_Harry_Potter-sample-epub.acsm?id=LiWrXUHgnL8C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Females_and_Harry_Potter-sample-pdf.acsm?id=LiWrXUHgnL8C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
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
    {
      kind: "books#volume",
      id: "m_u_DwAAQBAJ",
      etag: "vObLdGEGzA4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/m_u_DwAAQBAJ",
      volumeInfo: {
        title: "101 Amazing Facts about J.K. Rowling",
        subtitle: "…and Harry Potter",
        authors: ["Holger Weßling", "Archie Thomas"],
        publisher: "Andrews UK Limited",
        publishedDate: "2019-11-18",
        description:
          "We’ve all read - and loved - the adventures of Harry Potter and his friends in the Wizarding World. But what of the genius behind it all, J.K. Rowling? Was getting the first book published easy for her, or was it a long struggle? How did she come up with so many amazing ideas for the books? How did her own life influence the characters in the series, both good and bad? And what about her life away from magic and mystery? This fascinating book reveals over one hundred amazing facts about the author, numbered and organised into easy-to-read categories. Whether you simply enjoy a good biography, or are the world’s most dedicated Harry Potter fan, this is the perfect book for you!",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781789821826",
          },
          {
            type: "ISBN_10",
            identifier: "1789821827",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 26,
        printType: "BOOK",
        categories: ["Biography & Autobiography"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=m_u_DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=m_u_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=m_u_DwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=36&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=m_u_DwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=m_u_DwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 2.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 2.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=m_u_DwAAQBAJ&rdid=book-m_u_DwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2990000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 2990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/101_Amazing_Facts_about_J_K_Rowling-sample-epub.acsm?id=m_u_DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/101_Amazing_Facts_about_J_K_Rowling-sample-pdf.acsm?id=m_u_DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=m_u_DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Was getting the first book published easy for her, or was it a long struggle? How did she come up with so many amazing ideas for the books? How did her own life influence the characters in the series, both good and bad?",
      },
    },
    {
      kind: "books#volume",
      id: "bAxsAwAAQBAJ",
      etag: "XpisWFihBrk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/bAxsAwAAQBAJ",
      volumeInfo: {
        title: "Mapping the World of Harry Potter",
        subtitle:
          "Science Fiction and Fantasy Writers Explore the Best Selling Fantasy Series of All Time",
        authors: ["Mercedes Lackey", "Leah Wilson"],
        publisher: "BenBella Books",
        publishedDate: "2006",
        description:
          "Presents a collection of critiques of the works of J. K. Rowling, covering the topics and characters found in the Harry Potter books.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781932100594",
          },
          {
            type: "ISBN_10",
            identifier: "1932100598",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 195,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        averageRating: 3.5,
        ratingsCount: 4,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.1.0.preview.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=bAxsAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=bAxsAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=bAxsAwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=37&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=bAxsAwAAQBAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Mapping_the_World_of_Harry_Potter.html?hl=&id=bAxsAwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=bAxsAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Presents a collection of critiques of the works of J. K. Rowling, covering the topics and characters found in the Harry Potter books.",
      },
    },
    {
      kind: "books#volume",
      id: "k_p1DwAAQBAJ",
      etag: "stNKcHj5aGA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/k_p1DwAAQBAJ",
      volumeInfo: {
        title: "Inside the World of Harry Potter",
        authors: ["Christopher E. Bell"],
        publisher: "McFarland",
        publishedDate: "2018-08",
        description:
          "\"Many scholars recognize the importance of Harry Potter as a vehicle for discussions about society. This interdisciplinary collection of new essays from one of the world's leading Harry Potter scholars brings to the forefront a critique of modern Western society, using Harry's world as a mirror to our own\"--Provided by publisher.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781476673554",
          },
          {
            type: "ISBN_10",
            identifier: "1476673551",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 191,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=k_p1DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=k_p1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=k_p1DwAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=38&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=k_p1DwAAQBAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Inside_the_World_of_Harry_Potter.html?hl=&id=k_p1DwAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=k_p1DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Covering issues surrounding parenting and family relations, social class, life and death, the link between identity and morality and even the risks of time travel, this collection provides many jumping-off points for scholars and ...",
      },
    },
    {
      kind: "books#volume",
      id: "FDZaAAAAMAAJ",
      etag: "Ju51WXqWtEw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/FDZaAAAAMAAJ",
      volumeInfo: {
        title: "From Alice to Harry Potter",
        subtitle: "Children's Fantasy in England",
        authors: ["Colin Nicholas Manlove"],
        publisher: "Cybereditions Corporation",
        publishedDate: "2003",
        description:
          "'The longer I live, the more I am convinced of the importance of children's books.' When Robert Bloomfield wrote this in 1817 he could have had no idea of the range of children's books to come, nor of how in England fantasy would be their outstanding form. In this survey of 400 English children's fantasies from 1850 to 2000, taking in authors from the well-known Charles Kingsley, C. S. Lewis and J. K. Rowling to the less-known Annie Keary, Edith Elias and Pete Johnson, Colin Manlove shows just how good their books often are as literature. He combines new interpretations of individual works with explanations of how and why their character changes over time, reflecting their different cultural settings. This book is intended both as a critical companion for children's literature courses, and as a stimulus for the general reader and students at all levels.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1877275557",
          },
          {
            type: "ISBN_13",
            identifier: "9781877275555",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 250,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=FDZaAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=FDZaAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=FDZaAAAAMAAJ&q=harry+potter&dq=harry+potter&hl=&cd=39&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=FDZaAAAAMAAJ&dq=harry+potter&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/From_Alice_to_Harry_Potter.html?hl=&id=FDZaAAAAMAAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "US",
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
          "http://play.google.com/books/reader?id=FDZaAAAAMAAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "This book is intended both as a critical companion for children&#39;s literature courses, and as a stimulus for the general reader and students at all levels.",
      },
    },
    {
      kind: "books#volume",
      id: "zb3wCQAAQBAJ",
      etag: "VVYyZlPc6v4",
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
          "http://books.google.com/books?id=zb3wCQAAQBAJ&printsec=frontcover&dq=harry+potter&hl=&cd=40&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=zb3wCQAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=zb3wCQAAQBAJ",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 15.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 9.99,
          currencyCode: "USD",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=zb3wCQAAQBAJ&rdid=book-zb3wCQAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 15990000,
              currencyCode: "USD",
            },
            retailPrice: {
              amountInMicros: 9990000,
              currencyCode: "USD",
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Playing_Harry_Potter-sample-epub.acsm?id=zb3wCQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.com/books/download/Playing_Harry_Potter-sample-pdf.acsm?id=zb3wCQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
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
  ],
};
