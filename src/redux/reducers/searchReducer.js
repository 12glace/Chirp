import { TweetTypes } from '../contants/action-type';
// const initialstate = {
//     "globalObjects": {
//         "tweets": {
//             "1518205993846464514": {
//                 "created_at": "Sun Apr 24 12:31:30 +0000 2022",
//                 "id": 1518205993846464500,
//                 "id_str": "1518205993846464514",
//                 "full_text": "🐙 #GIVEAWAY 🐙\n\n📣 HIZLI ÇEKİLİŞ      \n              \n🏆 1️⃣x  75 #TRON  \n\n🎗️Takip @OctopusResults\n🎗️Son 5 gönderi ❤️ &amp; RT 🔁\n\n⏰ Süre 120 Dakika ⏳\n\n Bol şanslar 🍀\n\n#AVAX  #Solana   #ETH #SHIB #BNB  #BTC  #BUSD #USDTether  #Cekilis #BSC #doge #SHIB #Hediye #NFT #BTT  #ADA",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     271
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "GIVEAWAY",
//                             "indices": [
//                                 2,
//                                 11
//                             ]
//                         },
//                         {
//                             "text": "TRON",
//                             "indices": [
//                                 63,
//                                 68
//                             ]
//                         },
//                         {
//                             "text": "AVAX",
//                             "indices": [
//                                 164,
//                                 169
//                             ]
//                         },
//                         {
//                             "text": "Solana",
//                             "indices": [
//                                 171,
//                                 178
//                             ]
//                         },
//                         {
//                             "text": "ETH",
//                             "indices": [
//                                 181,
//                                 185
//                             ]
//                         },
//                         {
//                             "text": "SHIB",
//                             "indices": [
//                                 186,
//                                 191
//                             ]
//                         },
//                         {
//                             "text": "BNB",
//                             "indices": [
//                                 192,
//                                 196
//                             ]
//                         },
//                         {
//                             "text": "BTC",
//                             "indices": [
//                                 198,
//                                 202
//                             ]
//                         },
//                         {
//                             "text": "BUSD",
//                             "indices": [
//                                 204,
//                                 209
//                             ]
//                         },
//                         {
//                             "text": "USDTether",
//                             "indices": [
//                                 210,
//                                 220
//                             ]
//                         },
//                         {
//                             "text": "Cekilis",
//                             "indices": [
//                                 222,
//                                 230
//                             ]
//                         },
//                         {
//                             "text": "BSC",
//                             "indices": [
//                                 231,
//                                 235
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 236,
//                                 241
//                             ]
//                         },
//                         {
//                             "text": "SHIB",
//                             "indices": [
//                                 242,
//                                 247
//                             ]
//                         },
//                         {
//                             "text": "Hediye",
//                             "indices": [
//                                 248,
//                                 255
//                             ]
//                         },
//                         {
//                             "text": "NFT",
//                             "indices": [
//                                 256,
//                                 260
//                             ]
//                         },
//                         {
//                             "text": "BTT",
//                             "indices": [
//                                 261,
//                                 265
//                             ]
//                         },
//                         {
//                             "text": "ADA",
//                             "indices": [
//                                 267,
//                                 271
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [
//                         {
//                             "screen_name": "OctopusResults",
//                             "name": "𝐎𝐜𝐭𝐨𝐩𝐮𝐬🐙𝐆𝐢𝐯𝐞𝐚𝐰𝐚𝐲🎁𝐑𝐞𝐬𝐮𝐥𝐭𝐬",
//                             "id": 1505633192115585000,
//                             "id_str": "1505633192115585027",
//                             "indices": [
//                                 80,
//                                 95
//                             ]
//                         }
//                     ],
//                     "urls": []
//                 },
//                 "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1348755697262096400,
//                 "user_id_str": "1348755697262096386",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 284,
//                 "favorite_count": 304,
//                 "reply_count": 115,
//                 "quote_count": 0,
//                 "conversation_id": 1518205993846464500,
//                 "conversation_id_str": "1518205993846464514",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518052091662458887": {
//                 "created_at": "Sun Apr 24 02:19:57 +0000 2022",
//                 "id": 1518052091662459000,
//                 "id_str": "1518052091662458887",
//                 "full_text": "Yessir. Big things coming @elonmusk #starlink #doge1 #dogecoin https://t.co/7F5eFwrMKp",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     62
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "starlink",
//                             "indices": [
//                                 36,
//                                 45
//                             ]
//                         },
//                         {
//                             "text": "doge1",
//                             "indices": [
//                                 46,
//                                 52
//                             ]
//                         },
//                         {
//                             "text": "dogecoin",
//                             "indices": [
//                                 53,
//                                 62
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [
//                         {
//                             "screen_name": "elonmusk",
//                             "name": "Elon Musk",
//                             "id": 44196397,
//                             "id_str": "44196397",
//                             "indices": [
//                                 26,
//                                 35
//                             ]
//                         }
//                     ],
//                     "urls": [],
//                     "media": [
//                         {
//                             "id": 1518052077267685400,
//                             "id_str": "1518052077267685376",
//                             "indices": [
//                                 63,
//                                 86
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRE0UkAVkAA2SgC.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRE0UkAVkAA2SgC.jpg",
//                             "url": "https://t.co/7F5eFwrMKp",
//                             "display_url": "pic.twitter.com/7F5eFwrMKp",
//                             "expanded_url": "https://twitter.com/crypto_yugi/status/1518052091662458887/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 750,
//                                 "height": 935,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 326,
//                                         "h": 420,
//                                         "w": 750
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 161,
//                                         "h": 750,
//                                         "w": 750
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 80,
//                                         "h": 855,
//                                         "w": 750
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 935,
//                                         "w": 468
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 935,
//                                         "w": 750
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "medium": {
//                                     "w": 750,
//                                     "h": 935,
//                                     "resize": "fit"
//                                 },
//                                 "small": {
//                                     "w": 545,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 750,
//                                     "h": 935,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "extended_entities": {
//                     "media": [
//                         {
//                             "id": 1518052077267685400,
//                             "id_str": "1518052077267685376",
//                             "indices": [
//                                 63,
//                                 86
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRE0UkAVkAA2SgC.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRE0UkAVkAA2SgC.jpg",
//                             "url": "https://t.co/7F5eFwrMKp",
//                             "display_url": "pic.twitter.com/7F5eFwrMKp",
//                             "expanded_url": "https://twitter.com/crypto_yugi/status/1518052091662458887/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 750,
//                                 "height": 935,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 326,
//                                         "h": 420,
//                                         "w": 750
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 161,
//                                         "h": 750,
//                                         "w": 750
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 80,
//                                         "h": 855,
//                                         "w": 750
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 935,
//                                         "w": 468
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 935,
//                                         "w": 750
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "medium": {
//                                     "w": 750,
//                                     "h": 935,
//                                     "resize": "fit"
//                                 },
//                                 "small": {
//                                     "w": 545,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 750,
//                                     "h": 935,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 }
//                             },
//                             "media_key": "3_1518052077267685376",
//                             "ext_sensitive_media_warning": null,
//                             "ext_media_availability": {
//                                 "status": "available"
//                             },
//                             "ext_alt_text": null,
//                             "ext_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 17,
//                                             "green": 22,
//                                             "blue": 32
//                                         },
//                                         "percentage": 46.06
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 188,
//                                             "green": 205,
//                                             "blue": 223
//                                         },
//                                         "percentage": 19
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 124,
//                                             "green": 205,
//                                             "blue": 200
//                                         },
//                                         "percentage": 9.84
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 225,
//                                             "green": 215,
//                                             "blue": 114
//                                         },
//                                         "percentage": 4.18
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 212,
//                                             "green": 227,
//                                             "blue": 214
//                                         },
//                                         "percentage": 2.45
//                                     }
//                                 ]
//                             },
//                             "ext": {
//                                 "mediaStats": {
//                                     "r": "Missing",
//                                     "ttl": -1
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1173076639258800000,
//                 "user_id_str": "1173076639258800129",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 50,
//                 "favorite_count": 129,
//                 "reply_count": 16,
//                 "quote_count": 3,
//                 "conversation_id": 1518052091662459000,
//                 "conversation_id_str": "1518052091662458887",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "lang": "en",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1517974920982106116": {
//                 "created_at": "Sat Apr 23 21:13:18 +0000 2022",
//                 "id": 1517974920982106000,
//                 "id_str": "1517974920982106116",
//                 "full_text": "#Doge Vodka? Much Drink! Such Party! #DogePalooza #Doge #Dogecoin https://t.co/Tykf0pNdbV",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     65
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "Doge",
//                             "indices": [
//                                 0,
//                                 5
//                             ]
//                         },
//                         {
//                             "text": "DogePalooza",
//                             "indices": [
//                                 37,
//                                 49
//                             ]
//                         },
//                         {
//                             "text": "Doge",
//                             "indices": [
//                                 50,
//                                 55
//                             ]
//                         },
//                         {
//                             "text": "Dogecoin",
//                             "indices": [
//                                 56,
//                                 65
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": [],
//                     "media": [
//                         {
//                             "id": 1517974915131093000,
//                             "id_str": "1517974915131092992",
//                             "indices": [
//                                 66,
//                                 89
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRDuJIpXsAAGR3C.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRDuJIpXsAAGR3C.jpg",
//                             "url": "https://t.co/Tykf0pNdbV",
//                             "display_url": "pic.twitter.com/Tykf0pNdbV",
//                             "expanded_url": "https://twitter.com/SignatureDoge/status/1517974920982106116/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 1536,
//                                 "height": 2048,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 542,
//                                         "h": 860,
//                                         "w": 1536
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 204,
//                                         "h": 1536,
//                                         "w": 1536
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 97,
//                                         "h": 1751,
//                                         "w": 1536
//                                     },
//                                     {
//                                         "x": 256,
//                                         "y": 0,
//                                         "h": 2048,
//                                         "w": 1024
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 2048,
//                                         "w": 1536
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "small": {
//                                     "w": 510,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "medium": {
//                                     "w": 900,
//                                     "h": 1200,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 1536,
//                                     "h": 2048,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "extended_entities": {
//                     "media": [
//                         {
//                             "id": 1517974915131093000,
//                             "id_str": "1517974915131092992",
//                             "indices": [
//                                 66,
//                                 89
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRDuJIpXsAAGR3C.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRDuJIpXsAAGR3C.jpg",
//                             "url": "https://t.co/Tykf0pNdbV",
//                             "display_url": "pic.twitter.com/Tykf0pNdbV",
//                             "expanded_url": "https://twitter.com/SignatureDoge/status/1517974920982106116/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 1536,
//                                 "height": 2048,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 542,
//                                         "h": 860,
//                                         "w": 1536
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 204,
//                                         "h": 1536,
//                                         "w": 1536
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 97,
//                                         "h": 1751,
//                                         "w": 1536
//                                     },
//                                     {
//                                         "x": 256,
//                                         "y": 0,
//                                         "h": 2048,
//                                         "w": 1024
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 2048,
//                                         "w": 1536
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "small": {
//                                     "w": 510,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "medium": {
//                                     "w": 900,
//                                     "h": 1200,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 1536,
//                                     "h": 2048,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 }
//                             },
//                             "media_key": "3_1517974915131092992",
//                             "ext_sensitive_media_warning": null,
//                             "ext_media_availability": {
//                                 "status": "available"
//                             },
//                             "ext_alt_text": null,
//                             "ext_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 45,
//                                             "green": 44,
//                                             "blue": 43
//                                         },
//                                         "percentage": 40.28
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 139,
//                                             "green": 125,
//                                             "blue": 99
//                                         },
//                                         "percentage": 39.52
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 215,
//                                             "green": 215,
//                                             "blue": 219
//                                         },
//                                         "percentage": 4.86
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 205,
//                                             "green": 165,
//                                             "blue": 109
//                                         },
//                                         "percentage": 3.65
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 34,
//                                             "green": 45,
//                                             "blue": 65
//                                         },
//                                         "percentage": 1.08
//                                     }
//                                 ]
//                             },
//                             "ext": {
//                                 "mediaStats": {
//                                     "r": "Missing",
//                                     "ttl": -1
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1374772688581841000,
//                 "user_id_str": "1374772688581840897",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 179,
//                 "favorite_count": 980,
//                 "reply_count": 99,
//                 "quote_count": 10,
//                 "conversation_id": 1517974920982106000,
//                 "conversation_id_str": "1517974920982106116",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "lang": "en",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518293371944591368": {
//                 "created_at": "Sun Apr 24 18:18:43 +0000 2022",
//                 "id": 1518293371944591400,
//                 "id_str": "1518293371944591368",
//                 "full_text": "#DOGE 0.1326 emri gelmiş. İşlemde olan var mı ?",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     47
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "DOGE",
//                             "indices": [
//                                 0,
//                                 5
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1336970124696424400,
//                 "user_id_str": "1336970124696424448",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 0,
//                 "favorite_count": 14,
//                 "reply_count": 6,
//                 "quote_count": 0,
//                 "conversation_id": 1518293371944591400,
//                 "conversation_id_str": "1518293371944591368",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518533686202937345": {
//                 "created_at": "Mon Apr 25 10:13:38 +0000 2022",
//                 "id": 1518533686202937300,
//                 "id_str": "1518533686202937345",
//                 "full_text": "https://t.co/rNLAzkEAqa\nSÖZCÜ GAZETESİNDE ELON MUSK \nELO Musk ve Twitter Satış Görüşmesi masada ! \n#shiba #dogecoin #raca  tüm köpek coinler 🟢🚀 twitter satın aldığında yerinde durmayacaktır.\nSayfamı dikkatli takip edelim\n#Ethereum #Bitcoin  #kripto #Crypto #ceek #BTC #BTCUSD",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     275
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "shiba",
//                             "indices": [
//                                 99,
//                                 105
//                             ]
//                         },
//                         {
//                             "text": "dogecoin",
//                             "indices": [
//                                 106,
//                                 115
//                             ]
//                         },
//                         {
//                             "text": "raca",
//                             "indices": [
//                                 116,
//                                 121
//                             ]
//                         },
//                         {
//                             "text": "Ethereum",
//                             "indices": [
//                                 221,
//                                 230
//                             ]
//                         },
//                         {
//                             "text": "Bitcoin",
//                             "indices": [
//                                 231,
//                                 239
//                             ]
//                         },
//                         {
//                             "text": "kripto",
//                             "indices": [
//                                 241,
//                                 248
//                             ]
//                         },
//                         {
//                             "text": "Crypto",
//                             "indices": [
//                                 249,
//                                 256
//                             ]
//                         },
//                         {
//                             "text": "ceek",
//                             "indices": [
//                                 257,
//                                 262
//                             ]
//                         },
//                         {
//                             "text": "BTC",
//                             "indices": [
//                                 263,
//                                 267
//                             ]
//                         },
//                         {
//                             "text": "BTCUSD",
//                             "indices": [
//                                 268,
//                                 275
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": [
//                         {
//                             "url": "https://t.co/rNLAzkEAqa",
//                             "expanded_url": "https://www.sozcu.com.tr/2022/ekonomi/elon-musk-ve-twitter-satis-gorusmeleri-icin-masada-7095623/",
//                             "display_url": "sozcu.com.tr/2022/ekonomi/e…",
//                             "indices": [
//                                 0,
//                                 23
//                             ]
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1353761464977416200,
//                 "user_id_str": "1353761464977416194",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 0,
//                 "favorite_count": 1,
//                 "reply_count": 0,
//                 "quote_count": 0,
//                 "conversation_id": 1518533686202937300,
//                 "conversation_id_str": "1518533686202937345",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "card": {
//                     "name": "summary_large_image",
//                     "url": "https://t.co/rNLAzkEAqa",
//                     "card_type_url": "http://card-type-url-is-deprecated.invalid",
//                     "binding_values": {
//                         "vanity_url": {
//                             "type": "STRING",
//                             "string_value": "sozcu.com.tr",
//                             "scribe_key": "vanity_url"
//                         },
//                         "domain": {
//                             "type": "STRING",
//                             "string_value": "www.sozcu.com.tr"
//                         },
//                         "site": {
//                             "type": "USER",
//                             "user_value": {
//                                 "id_str": "218078497",
//                                 "path": []
//                             },
//                             "scribe_key": "publisher_id"
//                         },
//                         "title": {
//                             "type": "STRING",
//                             "string_value": "Elon Musk ve Twitter satış görüşmeleri için masada"
//                         },
//                         "description": {
//                             "type": "STRING",
//                             "string_value": "Twitter yönetimi, ünlü milyarder Elon Musk'ın satın alma teklifi için toplandı. Şirket kaynakları satın almanın bu hafta tamamlanabileceği görüşünde."
//                         },
//                         "thumbnail_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=144x144",
//                                 "width": 144,
//                                 "height": 80,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=280x150",
//                                 "width": 271,
//                                 "height": 150,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=800x320_1",
//                                 "width": 578,
//                                 "height": 320,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=png&name=2048x2048_2_exp",
//                                 "width": 670,
//                                 "height": 371,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 34.69,
//                                         "rgb": {
//                                             "red": 7,
//                                             "green": 11,
//                                             "blue": 15
//                                         }
//                                     },
//                                     {
//                                         "percentage": 25.85,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 216,
//                                             "blue": 211
//                                         }
//                                     },
//                                     {
//                                         "percentage": 11.44,
//                                         "rgb": {
//                                             "red": 34,
//                                             "green": 154,
//                                             "blue": 208
//                                         }
//                                     },
//                                     {
//                                         "percentage": 9.68,
//                                         "rgb": {
//                                             "red": 118,
//                                             "green": 65,
//                                             "blue": 109
//                                         }
//                                     },
//                                     {
//                                         "percentage": 3.15,
//                                         "rgb": {
//                                             "red": 105,
//                                             "green": 38,
//                                             "blue": 230
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "thumbnail_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=orig",
//                                 "width": 670,
//                                 "height": 371,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=800x419",
//                                 "width": 670,
//                                 "height": 351,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=png&name=2048x2048_2_exp",
//                                 "width": 670,
//                                 "height": 371,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 34.69,
//                                         "rgb": {
//                                             "red": 7,
//                                             "green": 11,
//                                             "blue": 15
//                                         }
//                                     },
//                                     {
//                                         "percentage": 25.85,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 216,
//                                             "blue": 211
//                                         }
//                                     },
//                                     {
//                                         "percentage": 11.44,
//                                         "rgb": {
//                                             "red": 34,
//                                             "green": 154,
//                                             "blue": 208
//                                         }
//                                     },
//                                     {
//                                         "percentage": 9.68,
//                                         "rgb": {
//                                             "red": 118,
//                                             "green": 65,
//                                             "blue": 109
//                                         }
//                                     },
//                                     {
//                                         "percentage": 3.15,
//                                         "rgb": {
//                                             "red": 105,
//                                             "green": 38,
//                                             "blue": 230
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "summary_photo_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=orig",
//                                 "width": 670,
//                                 "height": 371,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=800x419",
//                                 "width": 670,
//                                 "height": 351,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=png&name=2048x2048_2_exp",
//                                 "width": 670,
//                                 "height": 371,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 34.69,
//                                         "rgb": {
//                                             "red": 7,
//                                             "green": 11,
//                                             "blue": 15
//                                         }
//                                     },
//                                     {
//                                         "percentage": 25.85,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 216,
//                                             "blue": 211
//                                         }
//                                     },
//                                     {
//                                         "percentage": 11.44,
//                                         "rgb": {
//                                             "red": 34,
//                                             "green": 154,
//                                             "blue": 208
//                                         }
//                                     },
//                                     {
//                                         "percentage": 9.68,
//                                         "rgb": {
//                                             "red": 118,
//                                             "green": 65,
//                                             "blue": 109
//                                         }
//                                     },
//                                     {
//                                         "percentage": 3.15,
//                                         "rgb": {
//                                             "red": 105,
//                                             "green": 38,
//                                             "blue": 230
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "photo_image_full_size_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518503002449096706/jVWn4eD9?format=jpg&name=orig",
//                                 "width": 670,
//                                 "height": 371,
//                                 "alt": null
//                             }
//                         },
//                         "card_url": {
//                             "type": "STRING",
//                             "string_value": "https://t.co/rNLAzkEAqa",
//                             "scribe_key": "card_url"
//                         }
//                     },
//                     "users": {
//                         "218078497": {
//                             "id": 218078497,
//                             "id_str": "218078497",
//                             "name": "Sözcü",
//                             "screen_name": "gazetesozcu",
//                             "location": "İstanbul",
//                             "description": "Sözcü Gazetesi'nin resmi Twitter hesabıdır.",
//                             "url": "https://t.co/iKm6hfPSra",
//                             "entities": {
//                                 "url": {
//                                     "urls": [
//                                         {
//                                             "url": "https://t.co/iKm6hfPSra",
//                                             "expanded_url": "https://www.instagram.com/sozcucomtr/",
//                                             "display_url": "instagram.com/sozcucomtr/",
//                                             "indices": [
//                                                 0,
//                                                 23
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 "description": {
//                                     "urls": []
//                                 }
//                             },
//                             "protected": false,
//                             "followers_count": 3282207,
//                             "fast_followers_count": 0,
//                             "normal_followers_count": 3282207,
//                             "friends_count": 27,
//                             "listed_count": 3516,
//                             "created_at": "Sun Nov 21 10:42:48 +0000 2010",
//                             "favourites_count": 0,
//                             "utc_offset": null,
//                             "time_zone": null,
//                             "geo_enabled": false,
//                             "verified": true,
//                             "statuses_count": 826142,
//                             "media_count": 293467,
//                             "lang": null,
//                             "contributors_enabled": false,
//                             "is_translator": false,
//                             "is_translation_enabled": false,
//                             "profile_background_color": "C0DEED",
//                             "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//                             "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//                             "profile_background_tile": false,
//                             "profile_image_url": "http://pbs.twimg.com/profile_images/598482594401882113/USVlP7kX_normal.jpg",
//                             "profile_image_url_https": "https://pbs.twimg.com/profile_images/598482594401882113/USVlP7kX_normal.jpg",
//                             "profile_banner_url": "https://pbs.twimg.com/profile_banners/218078497/1583407953",
//                             "profile_image_extensions_sensitive_media_warning": null,
//                             "profile_image_extensions_media_availability": null,
//                             "profile_image_extensions_alt_text": null,
//                             "profile_image_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 254,
//                                             "green": 0,
//                                             "blue": 0
//                                         },
//                                         "percentage": 91.31
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 248,
//                                             "green": 250,
//                                             "blue": 249
//                                         },
//                                         "percentage": 5.87
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 245,
//                                             "green": 173,
//                                             "blue": 172
//                                         },
//                                         "percentage": 1.29
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 235,
//                                             "green": 86,
//                                             "blue": 85
//                                         },
//                                         "percentage": 1.07
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 239,
//                                             "green": 58,
//                                             "blue": 64
//                                         },
//                                         "percentage": 0.18
//                                     }
//                                 ]
//                             },
//                             "profile_image_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_banner_extensions_sensitive_media_warning": null,
//                             "profile_banner_extensions_media_availability": null,
//                             "profile_banner_extensions_alt_text": null,
//                             "profile_banner_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 255,
//                                             "green": 0,
//                                             "blue": 14
//                                         },
//                                         "percentage": 96.55
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 70,
//                                             "green": 0,
//                                             "blue": 0
//                                         },
//                                         "percentage": 0.91
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 255,
//                                             "green": 238,
//                                             "blue": 237
//                                         },
//                                         "percentage": 0.87
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 138,
//                                             "green": 1,
//                                             "blue": 1
//                                         },
//                                         "percentage": 0.78
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 253,
//                                             "green": 76,
//                                             "blue": 82
//                                         },
//                                         "percentage": 0.31
//                                     }
//                                 ]
//                             },
//                             "profile_banner_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_link_color": "1DA1F2",
//                             "profile_sidebar_border_color": "C0DEED",
//                             "profile_sidebar_fill_color": "DDEEF6",
//                             "profile_text_color": "333333",
//                             "profile_use_background_image": true,
//                             "has_extended_profile": false,
//                             "default_profile": true,
//                             "default_profile_image": false,
//                             "pinned_tweet_ids": [],
//                             "pinned_tweet_ids_str": [],
//                             "has_custom_timelines": true,
//                             "can_dm": false,
//                             "can_media_tag": true,
//                             "following": false,
//                             "follow_request_sent": false,
//                             "notifications": false,
//                             "muting": false,
//                             "blocking": false,
//                             "blocked_by": false,
//                             "want_retweets": false,
//                             "advertiser_account_type": "promotable_user",
//                             "advertiser_account_service_levels": [
//                                 "media_studio"
//                             ],
//                             "profile_interstitial_type": "",
//                             "business_profile_state": "none",
//                             "translator_type": "none",
//                             "withheld_in_countries": [],
//                             "followed_by": false,
//                             "ext_has_nft_avatar": false,
//                             "ext": {
//                                 "highlightedLabel": {
//                                     "r": {
//                                         "ok": {}
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "hasNftAvatar": {
//                                     "r": {
//                                         "ok": false
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "superFollowMetadata": {
//                                     "r": {
//                                         "ok": {
//                                             "superFollowEligible": false,
//                                             "superFollowing": false,
//                                             "superFollowedBy": false,
//                                             "exclusiveTweetFollowing": false,
//                                             "privateSuperFollowing": false
//                                         }
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "require_some_consent": false
//                         }
//                     },
//                     "card_platform": {
//                         "platform": {
//                             "device": {
//                                 "name": "Swift",
//                                 "version": "12"
//                             },
//                             "audience": {
//                                 "name": "production",
//                                 "bucket": null
//                             }
//                         }
//                     }
//                 },
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518275927117115394": {
//                 "created_at": "Sun Apr 24 17:09:23 +0000 2022",
//                 "id": 1518275927117115400,
//                 "id_str": "1518275927117115394",
//                 "full_text": "Geleneksel $USDT ÖDÜLLÜ Aktif takipçi ödüllendirme etkinliği 📢📢\n\n✅️Katılım için SON 10 GÖNDERİMİZİ BEĞENMENİZ yeterli\n\n✅️Süre 4 saat\n\n#Bitcoin #Binance #Bsc #DolarTL  #Coinbase #shiba #doge #raca #CEEK  #borsa #kriptopara",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     221
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "Bitcoin",
//                             "indices": [
//                                 134,
//                                 142
//                             ]
//                         },
//                         {
//                             "text": "Binance",
//                             "indices": [
//                                 143,
//                                 151
//                             ]
//                         },
//                         {
//                             "text": "Bsc",
//                             "indices": [
//                                 152,
//                                 156
//                             ]
//                         },
//                         {
//                             "text": "DolarTL",
//                             "indices": [
//                                 157,
//                                 165
//                             ]
//                         },
//                         {
//                             "text": "Coinbase",
//                             "indices": [
//                                 167,
//                                 176
//                             ]
//                         },
//                         {
//                             "text": "shiba",
//                             "indices": [
//                                 177,
//                                 183
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 184,
//                                 189
//                             ]
//                         },
//                         {
//                             "text": "raca",
//                             "indices": [
//                                 190,
//                                 195
//                             ]
//                         },
//                         {
//                             "text": "CEEK",
//                             "indices": [
//                                 196,
//                                 201
//                             ]
//                         },
//                         {
//                             "text": "borsa",
//                             "indices": [
//                                 203,
//                                 209
//                             ]
//                         },
//                         {
//                             "text": "kriptopara",
//                             "indices": [
//                                 210,
//                                 221
//                             ]
//                         }
//                     ],
//                     "symbols": [
//                         {
//                             "text": "USDT",
//                             "indices": [
//                                 11,
//                                 16
//                             ]
//                         }
//                     ],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1204793886192930800,
//                 "user_id_str": "1204793886192930819",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 112,
//                 "favorite_count": 742,
//                 "reply_count": 78,
//                 "quote_count": 0,
//                 "conversation_id": 1518275927117115400,
//                 "conversation_id_str": "1518275927117115394",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518508455358832640": {
//                 "created_at": "Mon Apr 25 08:33:22 +0000 2022",
//                 "id": 1518508455358832600,
//                 "id_str": "1518508455358832640",
//                 "full_text": "Bir takım seçin:\n\n Takım 🅰️      Takım 🅱️\n $SHIB             $GALA\n $DOGE           $SAND\n $ADA              $MANA\n $XRP              $RMRK",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     139
//                 ],
//                 "entities": {
//                     "hashtags": [],
//                     "symbols": [
//                         {
//                             "text": "SHIB",
//                             "indices": [
//                                 43,
//                                 48
//                             ]
//                         },
//                         {
//                             "text": "GALA",
//                             "indices": [
//                                 61,
//                                 66
//                             ]
//                         },
//                         {
//                             "text": "DOGE",
//                             "indices": [
//                                 68,
//                                 73
//                             ]
//                         },
//                         {
//                             "text": "SAND",
//                             "indices": [
//                                 84,
//                                 89
//                             ]
//                         },
//                         {
//                             "text": "ADA",
//                             "indices": [
//                                 91,
//                                 95
//                             ]
//                         },
//                         {
//                             "text": "MANA",
//                             "indices": [
//                                 109,
//                                 114
//                             ]
//                         },
//                         {
//                             "text": "XRP",
//                             "indices": [
//                                 116,
//                                 120
//                             ]
//                         },
//                         {
//                             "text": "RMRK",
//                             "indices": [
//                                 134,
//                                 139
//                             ]
//                         }
//                     ],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1080066391322124300,
//                 "user_id_str": "1080066391322124289",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 3,
//                 "favorite_count": 16,
//                 "reply_count": 6,
//                 "quote_count": 0,
//                 "conversation_id": 1518508455358832600,
//                 "conversation_id_str": "1518508455358832640",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518181363983298560": {
//                 "created_at": "Sun Apr 24 10:53:38 +0000 2022",
//                 "id": 1518181363983298600,
//                 "id_str": "1518181363983298560",
//                 "full_text": "⭕️ 1100 ₺ 🥳\n\n⭕️Beğen Geç 💜\n\n⭕️Telegramda Açıklanacak 📳 \n\n#Bilgin #Bitcoin #Ethereum #ETH #doge #shibainu #Litecoin #altcoin #BNB #LUNA #ADA #coin #XRP",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     150
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "Bilgin",
//                             "indices": [
//                                 57,
//                                 64
//                             ]
//                         },
//                         {
//                             "text": "Bitcoin",
//                             "indices": [
//                                 65,
//                                 73
//                             ]
//                         },
//                         {
//                             "text": "Ethereum",
//                             "indices": [
//                                 74,
//                                 83
//                             ]
//                         },
//                         {
//                             "text": "ETH",
//                             "indices": [
//                                 84,
//                                 88
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 89,
//                                 94
//                             ]
//                         },
//                         {
//                             "text": "shibainu",
//                             "indices": [
//                                 95,
//                                 104
//                             ]
//                         },
//                         {
//                             "text": "Litecoin",
//                             "indices": [
//                                 105,
//                                 114
//                             ]
//                         },
//                         {
//                             "text": "altcoin",
//                             "indices": [
//                                 115,
//                                 123
//                             ]
//                         },
//                         {
//                             "text": "BNB",
//                             "indices": [
//                                 124,
//                                 128
//                             ]
//                         },
//                         {
//                             "text": "LUNA",
//                             "indices": [
//                                 129,
//                                 134
//                             ]
//                         },
//                         {
//                             "text": "ADA",
//                             "indices": [
//                                 135,
//                                 139
//                             ]
//                         },
//                         {
//                             "text": "coin",
//                             "indices": [
//                                 140,
//                                 145
//                             ]
//                         },
//                         {
//                             "text": "XRP",
//                             "indices": [
//                                 146,
//                                 150
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1436704075861614600,
//                 "user_id_str": "1436704075861614596",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 133,
//                 "favorite_count": 464,
//                 "reply_count": 114,
//                 "quote_count": 1,
//                 "conversation_id": 1518181363983298600,
//                 "conversation_id_str": "1518181363983298560",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518510213518794752": {
//                 "created_at": "Mon Apr 25 08:40:22 +0000 2022",
//                 "id": 1518510213518794800,
//                 "id_str": "1518510213518794752",
//                 "full_text": "https://t.co/Z0ow0itOgX \nThe Wall Street  Journal  da Haberi önemli haber yabancı YENİ Haber geldi  #ElonMusk \nTwitter ve Elon Musk Anlaşma Sağlaması\ntanıdık insanlar, bu hafta bir anlaşmayı sonuçlandırabileceğini söyledi.\n#SHIB #dogecoin #raca 🚀🔥yükselişler bolca sıfır atar.",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     276
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "ElonMusk",
//                             "indices": [
//                                 100,
//                                 109
//                             ]
//                         },
//                         {
//                             "text": "SHIB",
//                             "indices": [
//                                 223,
//                                 228
//                             ]
//                         },
//                         {
//                             "text": "dogecoin",
//                             "indices": [
//                                 229,
//                                 238
//                             ]
//                         },
//                         {
//                             "text": "raca",
//                             "indices": [
//                                 239,
//                                 244
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": [
//                         {
//                             "url": "https://t.co/Z0ow0itOgX",
//                             "expanded_url": "https://www.wsj.com/articles/twitter-re-examines-elon-musks-bid-may-be-more-receptive-to-a-deal-11650822932?mod=e2tw",
//                             "display_url": "wsj.com/articles/twitt…",
//                             "indices": [
//                                 0,
//                                 23
//                             ]
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1353761464977416200,
//                 "user_id_str": "1353761464977416194",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 0,
//                 "favorite_count": 5,
//                 "reply_count": 1,
//                 "quote_count": 0,
//                 "conversation_id": 1518510213518794800,
//                 "conversation_id_str": "1518510213518794752",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "card": {
//                     "name": "summary_large_image",
//                     "url": "https://t.co/Z0ow0itOgX",
//                     "card_type_url": "http://card-type-url-is-deprecated.invalid",
//                     "binding_values": {
//                         "vanity_url": {
//                             "type": "STRING",
//                             "string_value": "wsj.com",
//                             "scribe_key": "vanity_url"
//                         },
//                         "domain": {
//                             "type": "STRING",
//                             "string_value": "www.wsj.com"
//                         },
//                         "site": {
//                             "type": "USER",
//                             "user_value": {
//                                 "id_str": "3108351",
//                                 "path": []
//                             },
//                             "scribe_key": "publisher_id"
//                         },
//                         "title": {
//                             "type": "STRING",
//                             "string_value": "WSJ News Exclusive | Twitter, Elon Musk Are in Talks to Strike a Deal"
//                         },
//                         "summary_photo_image_alt_text": {
//                             "type": "STRING",
//                             "string_value": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                         },
//                         "photo_image_full_size_alt_text": {
//                             "type": "STRING",
//                             "string_value": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                         },
//                         "description": {
//                             "type": "STRING",
//                             "string_value": "The social-media company is in discussions to sell itself to Elon Musk, a dramatic turn of events just 10 days after the billionaire unveiled his $43 billion bid."
//                         },
//                         "thumbnail_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=144x144",
//                                 "width": 144,
//                                 "height": 72,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "thumbnail_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=400x400",
//                                 "width": 400,
//                                 "height": 200,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "thumbnail_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=600x600",
//                                 "width": 600,
//                                 "height": 300,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "thumbnail_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=png&name=2048x2048_2_exp",
//                                 "width": 1280,
//                                 "height": 640,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "thumbnail_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 34.57,
//                                         "rgb": {
//                                             "red": 59,
//                                             "green": 58,
//                                             "blue": 63
//                                         }
//                                     },
//                                     {
//                                         "percentage": 31.26,
//                                         "rgb": {
//                                             "red": 187,
//                                             "green": 194,
//                                             "blue": 212
//                                         }
//                                     },
//                                     {
//                                         "percentage": 20.14,
//                                         "rgb": {
//                                             "red": 154,
//                                             "green": 136,
//                                             "blue": 123
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.76,
//                                         "rgb": {
//                                             "red": 85,
//                                             "green": 94,
//                                             "blue": 124
//                                         }
//                                     },
//                                     {
//                                         "percentage": 0.15,
//                                         "rgb": {
//                                             "red": 202,
//                                             "green": 198,
//                                             "blue": 195
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "thumbnail_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=orig",
//                                 "width": 1280,
//                                 "height": 640,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "summary_photo_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "summary_photo_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "summary_photo_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "summary_photo_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=png&name=2048x2048_2_exp",
//                                 "width": 1280,
//                                 "height": 640,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "summary_photo_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 34.57,
//                                         "rgb": {
//                                             "red": 59,
//                                             "green": 58,
//                                             "blue": 63
//                                         }
//                                     },
//                                     {
//                                         "percentage": 31.26,
//                                         "rgb": {
//                                             "red": 187,
//                                             "green": 194,
//                                             "blue": 212
//                                         }
//                                     },
//                                     {
//                                         "percentage": 20.14,
//                                         "rgb": {
//                                             "red": 154,
//                                             "green": 136,
//                                             "blue": 123
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.76,
//                                         "rgb": {
//                                             "red": 85,
//                                             "green": 94,
//                                             "blue": 124
//                                         }
//                                     },
//                                     {
//                                         "percentage": 0.15,
//                                         "rgb": {
//                                             "red": 202,
//                                             "green": 198,
//                                             "blue": 195
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "summary_photo_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=orig",
//                                 "width": 1280,
//                                 "height": 640,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "photo_image_full_size_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "photo_image_full_size": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "photo_image_full_size_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "photo_image_full_size_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=png&name=2048x2048_2_exp",
//                                 "width": 1280,
//                                 "height": 640,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "photo_image_full_size_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 34.57,
//                                         "rgb": {
//                                             "red": 59,
//                                             "green": 58,
//                                             "blue": 63
//                                         }
//                                     },
//                                     {
//                                         "percentage": 31.26,
//                                         "rgb": {
//                                             "red": 187,
//                                             "green": 194,
//                                             "blue": 212
//                                         }
//                                     },
//                                     {
//                                         "percentage": 20.14,
//                                         "rgb": {
//                                             "red": 154,
//                                             "green": 136,
//                                             "blue": 123
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.76,
//                                         "rgb": {
//                                             "red": 85,
//                                             "green": 94,
//                                             "blue": 124
//                                         }
//                                     },
//                                     {
//                                         "percentage": 0.15,
//                                         "rgb": {
//                                             "red": 202,
//                                             "green": 198,
//                                             "blue": 195
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "photo_image_full_size_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518287636066189321/5uuneIH2?format=jpg&name=orig",
//                                 "width": 1280,
//                                 "height": 640,
//                                 "alt": "Twitter, Elon Musk Are in Talks to Strike a Deal"
//                             }
//                         },
//                         "card_url": {
//                             "type": "STRING",
//                             "string_value": "https://t.co/Z0ow0itOgX",
//                             "scribe_key": "card_url"
//                         }
//                     },
//                     "users": {
//                         "3108351": {
//                             "id": 3108351,
//                             "id_str": "3108351",
//                             "name": "The Wall Street Journal",
//                             "screen_name": "WSJ",
//                             "location": "New York, NY",
//                             "description": "Sign up for our newsletters and email alerts: https://t.co/QevH0DLisA    \n\nFor WSJ customer support: https://t.co/DZgH9n4vAI",
//                             "url": "https://t.co/9rMrYLEXTt",
//                             "entities": {
//                                 "url": {
//                                     "urls": [
//                                         {
//                                             "url": "https://t.co/9rMrYLEXTt",
//                                             "expanded_url": "http://wsj.com",
//                                             "display_url": "wsj.com",
//                                             "indices": [
//                                                 0,
//                                                 23
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 "description": {
//                                     "urls": [
//                                         {
//                                             "url": "https://t.co/QevH0DLisA",
//                                             "expanded_url": "http://wsj.com/newsletters",
//                                             "display_url": "wsj.com/newsletters",
//                                             "indices": [
//                                                 46,
//                                                 69
//                                             ]
//                                         },
//                                         {
//                                             "url": "https://t.co/DZgH9n4vAI",
//                                             "expanded_url": "http://customercenter.wsj.com",
//                                             "display_url": "customercenter.wsj.com",
//                                             "indices": [
//                                                 101,
//                                                 124
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             },
//                             "protected": false,
//                             "followers_count": 19760548,
//                             "fast_followers_count": 0,
//                             "normal_followers_count": 19760548,
//                             "friends_count": 1066,
//                             "listed_count": 125316,
//                             "created_at": "Sun Apr 01 06:22:13 +0000 2007",
//                             "favourites_count": 1152,
//                             "utc_offset": null,
//                             "time_zone": null,
//                             "geo_enabled": true,
//                             "verified": true,
//                             "statuses_count": 370323,
//                             "media_count": 43082,
//                             "lang": null,
//                             "contributors_enabled": false,
//                             "is_translator": false,
//                             "is_translation_enabled": true,
//                             "profile_background_color": "EDF2F5",
//                             "profile_background_image_url": "http://abs.twimg.com/images/themes/theme14/bg.gif",
//                             "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme14/bg.gif",
//                             "profile_background_tile": false,
//                             "profile_image_url": "http://pbs.twimg.com/profile_images/971415515754266624/zCX0q9d5_normal.jpg",
//                             "profile_image_url_https": "https://pbs.twimg.com/profile_images/971415515754266624/zCX0q9d5_normal.jpg",
//                             "profile_banner_url": "https://pbs.twimg.com/profile_banners/3108351/1562333209",
//                             "profile_image_extensions_sensitive_media_warning": null,
//                             "profile_image_extensions_media_availability": null,
//                             "profile_image_extensions_alt_text": null,
//                             "profile_image_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 244,
//                                             "green": 244,
//                                             "blue": 244
//                                         },
//                                         "percentage": 90
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 0,
//                                             "green": 0,
//                                             "blue": 0
//                                         },
//                                         "percentage": 8.69
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 118,
//                                             "green": 118,
//                                             "blue": 118
//                                         },
//                                         "percentage": 1.78
//                                     }
//                                 ]
//                             },
//                             "profile_image_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_banner_extensions_sensitive_media_warning": null,
//                             "profile_banner_extensions_media_availability": null,
//                             "profile_banner_extensions_alt_text": null,
//                             "profile_banner_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 238,
//                                             "green": 238,
//                                             "blue": 238
//                                         },
//                                         "percentage": 91.04
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 126,
//                                             "green": 124,
//                                             "blue": 125
//                                         },
//                                         "percentage": 8.96
//                                     }
//                                 ]
//                             },
//                             "profile_banner_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_link_color": "1164B8",
//                             "profile_sidebar_border_color": "FFFFFF",
//                             "profile_sidebar_fill_color": "EFEFEF",
//                             "profile_text_color": "333333",
//                             "profile_use_background_image": false,
//                             "has_extended_profile": false,
//                             "default_profile": false,
//                             "default_profile_image": false,
//                             "pinned_tweet_ids": [],
//                             "pinned_tweet_ids_str": [],
//                             "has_custom_timelines": true,
//                             "can_dm": false,
//                             "can_media_tag": true,
//                             "following": false,
//                             "follow_request_sent": false,
//                             "notifications": false,
//                             "muting": false,
//                             "blocking": false,
//                             "blocked_by": false,
//                             "want_retweets": false,
//                             "advertiser_account_type": "promotable_user",
//                             "advertiser_account_service_levels": [
//                                 "dso",
//                                 "dso",
//                                 "dso",
//                                 "dso",
//                                 "mms",
//                                 "media_studio"
//                             ],
//                             "profile_interstitial_type": "",
//                             "business_profile_state": "none",
//                             "translator_type": "regular",
//                             "withheld_in_countries": [],
//                             "followed_by": false,
//                             "ext_has_nft_avatar": false,
//                             "ext": {
//                                 "superFollowMetadata": {
//                                     "r": {
//                                         "ok": {
//                                             "superFollowEligible": false,
//                                             "superFollowing": false,
//                                             "superFollowedBy": false,
//                                             "exclusiveTweetFollowing": false,
//                                             "privateSuperFollowing": false
//                                         }
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "hasNftAvatar": {
//                                     "r": {
//                                         "ok": false
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "highlightedLabel": {
//                                     "r": {
//                                         "ok": {}
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "require_some_consent": false
//                         }
//                     },
//                     "card_platform": {
//                         "platform": {
//                             "device": {
//                                 "name": "Swift",
//                                 "version": "12"
//                             },
//                             "audience": {
//                                 "name": "production",
//                                 "bucket": null
//                             }
//                         }
//                     }
//                 },
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518347334064738306": {
//                 "created_at": "Sun Apr 24 21:53:08 +0000 2022",
//                 "id": 1518347334064738300,
//                 "id_str": "1518347334064738306",
//                 "full_text": "Elon Musk'tan Dogecoin kurucusunun iki önerisine destek https://t.co/snV6mvWchi",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     79
//                 ],
//                 "entities": {
//                     "hashtags": [],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": [
//                         {
//                             "url": "https://t.co/snV6mvWchi",
//                             "expanded_url": "https://uzmancoin.com/elon-musktan-dogecoin-kurucusunun-iki-onerisine-destek/",
//                             "display_url": "uzmancoin.com/elon-musktan-d…",
//                             "indices": [
//                                 56,
//                                 79
//                             ]
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 700402738434281500,
//                 "user_id_str": "700402738434281472",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 7,
//                 "favorite_count": 113,
//                 "reply_count": 8,
//                 "quote_count": 0,
//                 "conversation_id": 1518347334064738300,
//                 "conversation_id_str": "1518347334064738306",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "card": {
//                     "name": "summary_large_image",
//                     "url": "https://t.co/snV6mvWchi",
//                     "card_type_url": "http://card-type-url-is-deprecated.invalid",
//                     "binding_values": {
//                         "vanity_url": {
//                             "type": "STRING",
//                             "string_value": "uzmancoin.com",
//                             "scribe_key": "vanity_url"
//                         },
//                         "domain": {
//                             "type": "STRING",
//                             "string_value": "uzmancoin.com"
//                         },
//                         "creator": {
//                             "type": "USER",
//                             "user_value": {
//                                 "id_str": "700402738434281472",
//                                 "path": []
//                             }
//                         },
//                         "site": {
//                             "type": "USER",
//                             "user_value": {
//                                 "id_str": "700402738434281472",
//                                 "path": []
//                             },
//                             "scribe_key": "publisher_id"
//                         },
//                         "title": {
//                             "type": "STRING",
//                             "string_value": "Elon Musk'tan Dogecoin kurucusunun iki önerisine destek"
//                         },
//                         "description": {
//                             "type": "STRING",
//                             "string_value": "Tesla CEO'su Elon Musk, Dogecoin kurucularından Billy Markus'un Dogecoin ile ilgili iki önerisine destek verdi."
//                         },
//                         "thumbnail_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=144x144",
//                                 "width": 144,
//                                 "height": 72,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=400x400",
//                                 "width": 400,
//                                 "height": 200,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=600x600",
//                                 "width": 600,
//                                 "height": 300,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=png&name=2048x2048_2_exp",
//                                 "width": 1120,
//                                 "height": 560,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 56.81,
//                                         "rgb": {
//                                             "red": 11,
//                                             "green": 12,
//                                             "blue": 14
//                                         }
//                                     },
//                                     {
//                                         "percentage": 10.66,
//                                         "rgb": {
//                                             "red": 206,
//                                             "green": 68,
//                                             "blue": 51
//                                         }
//                                     },
//                                     {
//                                         "percentage": 9.57,
//                                         "rgb": {
//                                             "red": 97,
//                                             "green": 118,
//                                             "blue": 128
//                                         }
//                                     },
//                                     {
//                                         "percentage": 7.71,
//                                         "rgb": {
//                                             "red": 100,
//                                             "green": 68,
//                                             "blue": 31
//                                         }
//                                     },
//                                     {
//                                         "percentage": 6.34,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 193,
//                                             "blue": 136
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "thumbnail_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=orig",
//                                 "width": 1120,
//                                 "height": 560,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=png&name=2048x2048_2_exp",
//                                 "width": 1120,
//                                 "height": 560,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 56.81,
//                                         "rgb": {
//                                             "red": 11,
//                                             "green": 12,
//                                             "blue": 14
//                                         }
//                                     },
//                                     {
//                                         "percentage": 10.66,
//                                         "rgb": {
//                                             "red": 206,
//                                             "green": 68,
//                                             "blue": 51
//                                         }
//                                     },
//                                     {
//                                         "percentage": 9.57,
//                                         "rgb": {
//                                             "red": 97,
//                                             "green": 118,
//                                             "blue": 128
//                                         }
//                                     },
//                                     {
//                                         "percentage": 7.71,
//                                         "rgb": {
//                                             "red": 100,
//                                             "green": 68,
//                                             "blue": 31
//                                         }
//                                     },
//                                     {
//                                         "percentage": 6.34,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 193,
//                                             "blue": 136
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "summary_photo_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=orig",
//                                 "width": 1120,
//                                 "height": 560,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=png&name=2048x2048_2_exp",
//                                 "width": 1120,
//                                 "height": 560,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 56.81,
//                                         "rgb": {
//                                             "red": 11,
//                                             "green": 12,
//                                             "blue": 14
//                                         }
//                                     },
//                                     {
//                                         "percentage": 10.66,
//                                         "rgb": {
//                                             "red": 206,
//                                             "green": 68,
//                                             "blue": 51
//                                         }
//                                     },
//                                     {
//                                         "percentage": 9.57,
//                                         "rgb": {
//                                             "red": 97,
//                                             "green": 118,
//                                             "blue": 128
//                                         }
//                                     },
//                                     {
//                                         "percentage": 7.71,
//                                         "rgb": {
//                                             "red": 100,
//                                             "green": 68,
//                                             "blue": 31
//                                         }
//                                     },
//                                     {
//                                         "percentage": 6.34,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 193,
//                                             "blue": 136
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "photo_image_full_size_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518347306050928644/k5yAAvFS?format=jpg&name=orig",
//                                 "width": 1120,
//                                 "height": 560,
//                                 "alt": null
//                             }
//                         },
//                         "card_url": {
//                             "type": "STRING",
//                             "string_value": "https://t.co/snV6mvWchi",
//                             "scribe_key": "card_url"
//                         }
//                     },
//                     "users": {
//                         "700402738434281472": {
//                             "id": 700402738434281500,
//                             "id_str": "700402738434281472",
//                             "name": "Uzmancoin",
//                             "screen_name": "uzmancoin",
//                             "location": "İstanbul, Türkiye",
//                             "description": "Uzmancoin, #Bitcoin, #blockchain ve kripto para birimleri hakkında haber, bilgi ve analizler sunar.",
//                             "url": "https://t.co/xgNjSzobjf",
//                             "entities": {
//                                 "url": {
//                                     "urls": [
//                                         {
//                                             "url": "https://t.co/xgNjSzobjf",
//                                             "expanded_url": "http://uzmancoin.com",
//                                             "display_url": "uzmancoin.com",
//                                             "indices": [
//                                                 0,
//                                                 23
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 "description": {
//                                     "urls": []
//                                 }
//                             },
//                             "protected": false,
//                             "followers_count": 267645,
//                             "fast_followers_count": 0,
//                             "normal_followers_count": 267645,
//                             "friends_count": 606,
//                             "listed_count": 1490,
//                             "created_at": "Thu Feb 18 19:33:20 +0000 2016",
//                             "favourites_count": 1385,
//                             "utc_offset": null,
//                             "time_zone": null,
//                             "geo_enabled": true,
//                             "verified": false,
//                             "statuses_count": 15447,
//                             "media_count": 1680,
//                             "lang": null,
//                             "contributors_enabled": false,
//                             "is_translator": false,
//                             "is_translation_enabled": false,
//                             "profile_background_color": "000000",
//                             "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//                             "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//                             "profile_background_tile": false,
//                             "profile_image_url": "http://pbs.twimg.com/profile_images/1347632965258522629/4yqNZoen_normal.jpg",
//                             "profile_image_url_https": "https://pbs.twimg.com/profile_images/1347632965258522629/4yqNZoen_normal.jpg",
//                             "profile_banner_url": "https://pbs.twimg.com/profile_banners/700402738434281472/1552309511",
//                             "profile_image_extensions_sensitive_media_warning": null,
//                             "profile_image_extensions_media_availability": null,
//                             "profile_image_extensions_alt_text": null,
//                             "profile_image_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 239,
//                                             "green": 71,
//                                             "blue": 35
//                                         },
//                                         "percentage": 53.45
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 255,
//                                             "green": 255,
//                                             "blue": 255
//                                         },
//                                         "percentage": 42.65
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 239,
//                                             "green": 162,
//                                             "blue": 143
//                                         },
//                                         "percentage": 2.11
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 233,
//                                             "green": 114,
//                                             "blue": 86
//                                         },
//                                         "percentage": 1.39
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 231,
//                                             "green": 97,
//                                             "blue": 61
//                                         },
//                                         "percentage": 0.3
//                                     }
//                                 ]
//                             },
//                             "profile_image_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_banner_extensions_sensitive_media_warning": null,
//                             "profile_banner_extensions_media_availability": null,
//                             "profile_banner_extensions_alt_text": null,
//                             "profile_banner_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 2,
//                                             "green": 36,
//                                             "blue": 81
//                                         },
//                                         "percentage": 72.31
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 36,
//                                             "green": 124,
//                                             "blue": 170
//                                         },
//                                         "percentage": 13.12
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 58,
//                                             "green": 72,
//                                             "blue": 82
//                                         },
//                                         "percentage": 2.63
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 100,
//                                             "green": 219,
//                                             "blue": 246
//                                         },
//                                         "percentage": 1.73
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 1,
//                                             "green": 37,
//                                             "blue": 87
//                                         },
//                                         "percentage": 1.67
//                                     }
//                                 ]
//                             },
//                             "profile_banner_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_link_color": "BE1E2D",
//                             "profile_sidebar_border_color": "000000",
//                             "profile_sidebar_fill_color": "000000",
//                             "profile_text_color": "000000",
//                             "profile_use_background_image": false,
//                             "has_extended_profile": false,
//                             "default_profile": false,
//                             "default_profile_image": false,
//                             "pinned_tweet_ids": [
//                                 1104783272901570600
//                             ],
//                             "pinned_tweet_ids_str": [
//                                 "1104783272901570561"
//                             ],
//                             "has_custom_timelines": true,
//                             "can_dm": false,
//                             "can_media_tag": true,
//                             "following": false,
//                             "follow_request_sent": false,
//                             "notifications": false,
//                             "muting": false,
//                             "blocking": false,
//                             "blocked_by": false,
//                             "want_retweets": false,
//                             "advertiser_account_type": "promotable_user",
//                             "advertiser_account_service_levels": [
//                                 "smb"
//                             ],
//                             "profile_interstitial_type": "",
//                             "business_profile_state": "none",
//                             "translator_type": "none",
//                             "withheld_in_countries": [],
//                             "followed_by": false,
//                             "ext_has_nft_avatar": false,
//                             "ext": {
//                                 "superFollowMetadata": {
//                                     "r": {
//                                         "ok": {
//                                             "superFollowEligible": false,
//                                             "superFollowing": false,
//                                             "superFollowedBy": false,
//                                             "exclusiveTweetFollowing": false,
//                                             "privateSuperFollowing": false
//                                         }
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "highlightedLabel": {
//                                     "r": {
//                                         "ok": {}
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "hasNftAvatar": {
//                                     "r": {
//                                         "ok": false
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "require_some_consent": false
//                         }
//                     },
//                     "card_platform": {
//                         "platform": {
//                             "device": {
//                                 "name": "Swift",
//                                 "version": "12"
//                             },
//                             "audience": {
//                                 "name": "production",
//                                 "bucket": null
//                             }
//                         }
//                     }
//                 },
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518519677902860290": {
//                 "created_at": "Mon Apr 25 09:17:58 +0000 2022",
//                 "id": 1518519677902860300,
//                 "id_str": "1518519677902860290",
//                 "full_text": "ApeCoin [APE] Pozitif Ayrışmaya Devam Edebilecek Mi?\nbaşlıklı yazının detayını aşağıda bulabilrsiniz.",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     101
//                 ],
//                 "entities": {
//                     "hashtags": [],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1511538738,
//                 "user_id_str": "1511538738",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": true,
//                 "quoted_status_id": 1518515773488124000,
//                 "quoted_status_id_str": "1518515773488123906",
//                 "quoted_status_permalink": {
//                     "url": "https://t.co/75aExNHIMH",
//                     "expanded": "https://twitter.com/finanskolik/status/1518515773488123906",
//                     "display": "twitter.com/finanskolik/st…"
//                 },
//                 "retweet_count": 3,
//                 "favorite_count": 20,
//                 "reply_count": 2,
//                 "quote_count": 0,
//                 "conversation_id": 1518519677902860300,
//                 "conversation_id_str": "1518519677902860290",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518175706341064705": {
//                 "created_at": "Sun Apr 24 10:31:09 +0000 2022",
//                 "id": 1518175706341064700,
//                 "id_str": "1518175706341064705",
//                 "full_text": "Son 24 Saatte Yarım Milyon Shiba Inu (SHIB) Yakıldı! Dogecoin'de Yükseliş Bekleniyor Mu?   https://t.co/evsZWCBRgH",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     114
//                 ],
//                 "entities": {
//                     "hashtags": [],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": [
//                         {
//                             "url": "https://t.co/evsZWCBRgH",
//                             "expanded_url": "https://zpr.io/RGUHwgzs6V89",
//                             "display_url": "zpr.io/RGUHwgzs6V89",
//                             "indices": [
//                                 91,
//                                 114
//                             ]
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://zapier.com/\" rel=\"nofollow\">Zapier.com</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 2398132105,
//                 "user_id_str": "2398132105",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 3,
//                 "favorite_count": 13,
//                 "reply_count": 2,
//                 "quote_count": 0,
//                 "conversation_id": 1518175706341064700,
//                 "conversation_id_str": "1518175706341064705",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "card": {
//                     "name": "summary_large_image",
//                     "url": "https://t.co/evsZWCBRgH",
//                     "card_type_url": "http://card-type-url-is-deprecated.invalid",
//                     "binding_values": {
//                         "vanity_url": {
//                             "type": "STRING",
//                             "string_value": "coin-turk.com",
//                             "scribe_key": "vanity_url"
//                         },
//                         "domain": {
//                             "type": "STRING",
//                             "string_value": "coin-turk.com"
//                         },
//                         "site": {
//                             "type": "USER",
//                             "user_value": {
//                                 "id_str": "2398132105",
//                                 "path": []
//                             },
//                             "scribe_key": "publisher_id"
//                         },
//                         "title": {
//                             "type": "STRING",
//                             "string_value": "Son 24 Saatte Yarım Milyon Shiba Inu (SHIB) Yakıldı! Dogecoin'de Yükseliş Bekleniyor Mu? › CoinTürk"
//                         },
//                         "description": {
//                             "type": "STRING",
//                             "string_value": "Şaka para birimlerinde son durum ne? İşte Dogecoin (DOGE) ve Shiba Inu'da (SHIBA) son gelişmeler ve güncel seviyeler."
//                         },
//                         "thumbnail_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=144x144",
//                                 "width": 144,
//                                 "height": 81,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=280x150",
//                                 "width": 267,
//                                 "height": 150,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=800x320_1",
//                                 "width": 569,
//                                 "height": 320,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=png&name=2048x2048_2_exp",
//                                 "width": 1200,
//                                 "height": 675,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 64.94,
//                                         "rgb": {
//                                             "red": 13,
//                                             "green": 19,
//                                             "blue": 25
//                                         }
//                                     },
//                                     {
//                                         "percentage": 11.38,
//                                         "rgb": {
//                                             "red": 203,
//                                             "green": 170,
//                                             "blue": 85
//                                         }
//                                     },
//                                     {
//                                         "percentage": 5.48,
//                                         "rgb": {
//                                             "red": 251,
//                                             "green": 162,
//                                             "blue": 20
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.82,
//                                         "rgb": {
//                                             "red": 254,
//                                             "green": 254,
//                                             "blue": 254
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2,
//                                         "rgb": {
//                                             "red": 243,
//                                             "green": 4,
//                                             "blue": 6
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "thumbnail_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=orig",
//                                 "width": 1200,
//                                 "height": 675,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=png&name=2048x2048_2_exp",
//                                 "width": 1200,
//                                 "height": 675,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 64.94,
//                                         "rgb": {
//                                             "red": 13,
//                                             "green": 19,
//                                             "blue": 25
//                                         }
//                                     },
//                                     {
//                                         "percentage": 11.38,
//                                         "rgb": {
//                                             "red": 203,
//                                             "green": 170,
//                                             "blue": 85
//                                         }
//                                     },
//                                     {
//                                         "percentage": 5.48,
//                                         "rgb": {
//                                             "red": 251,
//                                             "green": 162,
//                                             "blue": 20
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.82,
//                                         "rgb": {
//                                             "red": 254,
//                                             "green": 254,
//                                             "blue": 254
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2,
//                                         "rgb": {
//                                             "red": 243,
//                                             "green": 4,
//                                             "blue": 6
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "summary_photo_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=orig",
//                                 "width": 1200,
//                                 "height": 675,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=png&name=2048x2048_2_exp",
//                                 "width": 1200,
//                                 "height": 675,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 64.94,
//                                         "rgb": {
//                                             "red": 13,
//                                             "green": 19,
//                                             "blue": 25
//                                         }
//                                     },
//                                     {
//                                         "percentage": 11.38,
//                                         "rgb": {
//                                             "red": 203,
//                                             "green": 170,
//                                             "blue": 85
//                                         }
//                                     },
//                                     {
//                                         "percentage": 5.48,
//                                         "rgb": {
//                                             "red": 251,
//                                             "green": 162,
//                                             "blue": 20
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.82,
//                                         "rgb": {
//                                             "red": 254,
//                                             "green": 254,
//                                             "blue": 254
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2,
//                                         "rgb": {
//                                             "red": 243,
//                                             "green": 4,
//                                             "blue": 6
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "photo_image_full_size_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1518175710548013056/07swaSXU?format=jpg&name=orig",
//                                 "width": 1200,
//                                 "height": 675,
//                                 "alt": null
//                             }
//                         },
//                         "card_url": {
//                             "type": "STRING",
//                             "string_value": "https://t.co/evsZWCBRgH",
//                             "scribe_key": "card_url"
//                         }
//                     },
//                     "users": {
//                         "2398132105": {
//                             "id": 2398132105,
//                             "id_str": "2398132105",
//                             "name": "CoinTürk",
//                             "screen_name": "cointr",
//                             "location": "Türkiye",
//                             "description": "8 Yıldır Bitcoin ve Kripto Paranın Türkçesi -  Bitcoin & Crypto World News & Research Portal Since 2014",
//                             "url": "https://t.co/96DIwgSmdn",
//                             "entities": {
//                                 "url": {
//                                     "urls": [
//                                         {
//                                             "url": "https://t.co/96DIwgSmdn",
//                                             "expanded_url": "https://coin-turk.com/",
//                                             "display_url": "coin-turk.com",
//                                             "indices": [
//                                                 0,
//                                                 23
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 "description": {
//                                     "urls": []
//                                 }
//                             },
//                             "protected": false,
//                             "followers_count": 98009,
//                             "fast_followers_count": 0,
//                             "normal_followers_count": 98009,
//                             "friends_count": 140,
//                             "listed_count": 745,
//                             "created_at": "Wed Mar 19 16:25:46 +0000 2014",
//                             "favourites_count": 866,
//                             "utc_offset": null,
//                             "time_zone": null,
//                             "geo_enabled": true,
//                             "verified": false,
//                             "statuses_count": 25789,
//                             "media_count": 6556,
//                             "lang": null,
//                             "contributors_enabled": false,
//                             "is_translator": false,
//                             "is_translation_enabled": false,
//                             "profile_background_color": "C0DEED",
//                             "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//                             "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//                             "profile_background_tile": true,
//                             "profile_image_url": "http://pbs.twimg.com/profile_images/1494265261498712069/8I0ZPOac_normal.jpg",
//                             "profile_image_url_https": "https://pbs.twimg.com/profile_images/1494265261498712069/8I0ZPOac_normal.jpg",
//                             "profile_banner_url": "https://pbs.twimg.com/profile_banners/2398132105/1645094581",
//                             "profile_image_extensions_sensitive_media_warning": null,
//                             "profile_image_extensions_media_availability": null,
//                             "profile_image_extensions_alt_text": null,
//                             "profile_image_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 52,
//                                             "green": 52,
//                                             "blue": 52
//                                         },
//                                         "percentage": 49.43
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 247,
//                                             "green": 149,
//                                             "blue": 52
//                                         },
//                                         "percentage": 47.8
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 122,
//                                             "green": 85,
//                                             "blue": 48
//                                         },
//                                         "percentage": 2.75
//                                     }
//                                 ]
//                             },
//                             "profile_image_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_banner_extensions_sensitive_media_warning": null,
//                             "profile_banner_extensions_media_availability": null,
//                             "profile_banner_extensions_alt_text": null,
//                             "profile_banner_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 52,
//                                             "green": 52,
//                                             "blue": 52
//                                         },
//                                         "percentage": 94.4
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 219,
//                                             "green": 219,
//                                             "blue": 219
//                                         },
//                                         "percentage": 3.27
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 228,
//                                             "green": 99,
//                                             "blue": 83
//                                         },
//                                         "percentage": 0.64
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 129,
//                                             "green": 89,
//                                             "blue": 51
//                                         },
//                                         "percentage": 0.33
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 222,
//                                             "green": 135,
//                                             "blue": 51
//                                         },
//                                         "percentage": 0.33
//                                     }
//                                 ]
//                             },
//                             "profile_banner_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_link_color": "FA743E",
//                             "profile_sidebar_border_color": "FFFFFF",
//                             "profile_sidebar_fill_color": "DDEEF6",
//                             "profile_text_color": "333333",
//                             "profile_use_background_image": true,
//                             "has_extended_profile": false,
//                             "default_profile": false,
//                             "default_profile_image": false,
//                             "pinned_tweet_ids": [],
//                             "pinned_tweet_ids_str": [],
//                             "has_custom_timelines": true,
//                             "can_dm": false,
//                             "can_media_tag": true,
//                             "following": false,
//                             "follow_request_sent": false,
//                             "notifications": false,
//                             "muting": false,
//                             "blocking": false,
//                             "blocked_by": false,
//                             "want_retweets": false,
//                             "advertiser_account_type": "promotable_user",
//                             "advertiser_account_service_levels": [
//                                 "smb"
//                             ],
//                             "profile_interstitial_type": "",
//                             "business_profile_state": "none",
//                             "translator_type": "none",
//                             "withheld_in_countries": [],
//                             "followed_by": false,
//                             "ext_has_nft_avatar": false,
//                             "ext": {
//                                 "hasNftAvatar": {
//                                     "r": {
//                                         "ok": false
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "superFollowMetadata": {
//                                     "r": {
//                                         "ok": {
//                                             "superFollowEligible": false,
//                                             "superFollowing": false,
//                                             "superFollowedBy": false,
//                                             "exclusiveTweetFollowing": false,
//                                             "privateSuperFollowing": false
//                                         }
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "highlightedLabel": {
//                                     "r": {
//                                         "ok": {}
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "require_some_consent": false
//                         }
//                     },
//                     "card_platform": {
//                         "platform": {
//                             "device": {
//                                 "name": "Swift",
//                                 "version": "12"
//                             },
//                             "audience": {
//                                 "name": "production",
//                                 "bucket": null
//                             }
//                         }
//                     }
//                 },
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1516506062664638464": {
//                 "created_at": "Tue Apr 19 19:56:35 +0000 2022",
//                 "id": 1516506062664638500,
//                 "id_str": "1516506062664638464",
//                 "full_text": "🔥 MINT NOW 🔥\n\nJoin the Good Vibe Family! \n\nSurround yourself with open-minded  #NFT lovers. 🙊🙈🙉\n\nJoin our family!\n\n#NFTCommunity",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     128
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "NFT",
//                             "indices": [
//                                 79,
//                                 83
//                             ]
//                         },
//                         {
//                             "text": "NFTCommunity",
//                             "indices": [
//                                 115,
//                                 128
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"https://twitter.com\" rel=\"nofollow\">Twitter for Advertisers</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1442769719644328000,
//                 "user_id_str": "1442769719644327936",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": [
//                     81576528
//                 ],
//                 "is_quote_status": false,
//                 "retweet_count": 453,
//                 "favorite_count": 1727,
//                 "reply_count": 237,
//                 "quote_count": 33,
//                 "conversation_id": 1516506062664638500,
//                 "conversation_id_str": "1516506062664638464",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "scopes": {
//                     "followers": false
//                 },
//                 "card": {
//                     "name": "unified_card",
//                     "url": "card://1516506060907216898",
//                     "card_type_url": "http://card-type-url-is-deprecated.invalid",
//                     "binding_values": {
//                         "unified_card": {
//                             "type": "STRING",
//                             "string_value": "{\"type\":\"image_website\",\"component_objects\":{\"details_1\":{\"type\":\"details\",\"data\":{\"title\":{\"content\":\"Mint Live Now | SeeNoEvilMonkeyArt NFT\",\"is_rtl\":false},\"subtitle\":{\"content\":\"seenoevilmonkeyart.com\",\"is_rtl\":false},\"destination\":\"browser_1\"}},\"media_1\":{\"type\":\"media\",\"data\":{\"id\":\"3_1516504533178159104\",\"destination\":\"browser_1\"}}},\"destination_objects\":{\"browser_1\":{\"type\":\"browser\",\"data\":{\"url_data\":{\"url\":\"https://mint.seenoevilmonkeyart.com\",\"vanity\":\"seenoevilmonkeyart.com\"}}}},\"components\":[\"media_1\",\"details_1\"],\"media_entities\":{\"3_1516504533178159104\":{\"id\":1516504533178159104,\"id_str\":\"1516504533178159104\",\"indices\":[0,0],\"media_url\":\"\",\"media_url_https\":\"https://pbs.twimg.com/media/FQu01pBakAAUeQ8.jpg\",\"url\":\"\",\"display_url\":\"\",\"expanded_url\":\"\",\"type\":\"photo\",\"original_info\":{\"width\":800,\"height\":800,\"focus_rects\":[{\"x\":0,\"y\":0,\"h\":448,\"w\":800},{\"x\":0,\"y\":0,\"h\":800,\"w\":800},{\"x\":29,\"y\":0,\"h\":800,\"w\":702},{\"x\":180,\"y\":0,\"h\":800,\"w\":400},{\"x\":0,\"y\":0,\"h\":800,\"w\":800}]},\"sizes\":{\"medium\":{\"w\":800,\"h\":800,\"resize\":\"fit\"},\"thumb\":{\"w\":150,\"h\":150,\"resize\":\"crop\"},\"large\":{\"w\":800,\"h\":800,\"resize\":\"fit\"},\"small\":{\"w\":680,\"h\":680,\"resize\":\"fit\"}},\"source_user_id\":1442769719644327936,\"source_user_id_str\":\"1442769719644327936\",\"media_key\":\"3_1516504533178159104\",\"ext\":{\"mediaColor\":{\"r\":{\"ok\":{\"palette\":[{\"rgb\":{\"red\":255,\"green\":132,\"blue\":137},\"percentage\":52.18},{\"rgb\":{\"red\":86,\"green\":71,\"blue\":71},\"percentage\":8.02},{\"rgb\":{\"red\":158,\"green\":204,\"blue\":239},\"percentage\":7.46},{\"rgb\":{\"red\":254,\"green\":48,\"blue\":42},\"percentage\":5.82},{\"rgb\":{\"red\":52,\"green\":49,\"blue\":104},\"percentage\":3.44}]}},\"ttl\":-1}}}}}"
//                         },
//                         "card_url": {
//                             "type": "STRING",
//                             "string_value": "https://twitter.com",
//                             "scribe_key": "card_url"
//                         }
//                     },
//                     "card_platform": {
//                         "platform": {
//                             "device": {
//                                 "name": "Swift",
//                                 "version": "12"
//                             },
//                             "audience": {
//                                 "name": "production",
//                                 "bucket": null
//                             }
//                         }
//                     }
//                 },
//                 "lang": "en",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518353746597658626": {
//                 "created_at": "Sun Apr 24 22:18:37 +0000 2022",
//                 "id": 1518353746597658600,
//                 "id_str": "1518353746597658626",
//                 "full_text": "✅Dün 4 kişiyi mutlu ettik. Kişi başı 650 TL gönderdik. Şimdi sayıyı 5 yapalım🙏🏻\n\n🔥Tek yapman gereken beğenip RT yapmak.\n\n⏰Sahurda mesaj atılacak.\n\n#cekilis #çekiliş #Giveaway #btc  #eth #avax  #sol #mana #doge #shiba #hot #xrp",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     226
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "cekilis",
//                             "indices": [
//                                 147,
//                                 155
//                             ]
//                         },
//                         {
//                             "text": "çekiliş",
//                             "indices": [
//                                 156,
//                                 164
//                             ]
//                         },
//                         {
//                             "text": "Giveaway",
//                             "indices": [
//                                 165,
//                                 174
//                             ]
//                         },
//                         {
//                             "text": "btc",
//                             "indices": [
//                                 175,
//                                 179
//                             ]
//                         },
//                         {
//                             "text": "eth",
//                             "indices": [
//                                 181,
//                                 185
//                             ]
//                         },
//                         {
//                             "text": "avax",
//                             "indices": [
//                                 186,
//                                 191
//                             ]
//                         },
//                         {
//                             "text": "sol",
//                             "indices": [
//                                 193,
//                                 197
//                             ]
//                         },
//                         {
//                             "text": "mana",
//                             "indices": [
//                                 198,
//                                 203
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 204,
//                                 209
//                             ]
//                         },
//                         {
//                             "text": "shiba",
//                             "indices": [
//                                 210,
//                                 216
//                             ]
//                         },
//                         {
//                             "text": "hot",
//                             "indices": [
//                                 217,
//                                 221
//                             ]
//                         },
//                         {
//                             "text": "xrp",
//                             "indices": [
//                                 222,
//                                 226
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1461829458868985900,
//                 "user_id_str": "1461829458868985862",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 652,
//                 "favorite_count": 698,
//                 "reply_count": 162,
//                 "quote_count": 1,
//                 "conversation_id": 1518353746597658600,
//                 "conversation_id_str": "1518353746597658626",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518337392679206915": {
//                 "created_at": "Sun Apr 24 21:13:38 +0000 2022",
//                 "id": 1518337392679207000,
//                 "id_str": "1518337392679206915",
//                 "full_text": "Hey #Bitcoin\nNasıl bir cendereye düştük yaa,\nAyılar ve boğalar birbirlerine mal satıyor.\nStop patlatan, patlatan 💯\nSatan , satana \nVeren , verene 🤣\nÇıkmamız lazım bu tiyatrodan 😅\n#Crypto #Binance #altcoin #piyasa #bist #Gateio #KuCoin #HuobiMeme #ElonMusk #btc #ETH #doge",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     271
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "Bitcoin",
//                             "indices": [
//                                 4,
//                                 12
//                             ]
//                         },
//                         {
//                             "text": "Crypto",
//                             "indices": [
//                                 179,
//                                 186
//                             ]
//                         },
//                         {
//                             "text": "Binance",
//                             "indices": [
//                                 187,
//                                 195
//                             ]
//                         },
//                         {
//                             "text": "altcoin",
//                             "indices": [
//                                 196,
//                                 204
//                             ]
//                         },
//                         {
//                             "text": "piyasa",
//                             "indices": [
//                                 205,
//                                 212
//                             ]
//                         },
//                         {
//                             "text": "bist",
//                             "indices": [
//                                 213,
//                                 218
//                             ]
//                         },
//                         {
//                             "text": "Gateio",
//                             "indices": [
//                                 219,
//                                 226
//                             ]
//                         },
//                         {
//                             "text": "KuCoin",
//                             "indices": [
//                                 227,
//                                 234
//                             ]
//                         },
//                         {
//                             "text": "HuobiMeme",
//                             "indices": [
//                                 235,
//                                 245
//                             ]
//                         },
//                         {
//                             "text": "ElonMusk",
//                             "indices": [
//                                 246,
//                                 255
//                             ]
//                         },
//                         {
//                             "text": "btc",
//                             "indices": [
//                                 256,
//                                 260
//                             ]
//                         },
//                         {
//                             "text": "ETH",
//                             "indices": [
//                                 261,
//                                 265
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 266,
//                                 271
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": []
//                 },
//                 "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1243159200315977700,
//                 "user_id_str": "1243159200315977730",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 0,
//                 "favorite_count": 14,
//                 "reply_count": 1,
//                 "quote_count": 0,
//                 "conversation_id": 1518337392679207000,
//                 "conversation_id_str": "1518337392679206915",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518313118199341057": {
//                 "created_at": "Sun Apr 24 19:37:10 +0000 2022",
//                 "id": 1518313118199341000,
//                 "id_str": "1518313118199341057",
//                 "full_text": "🔍HIZLI ETKİNLİK\n\nAlıntı postun içerisine; \n1⃣RT+Like ve yoruma \"#veincoin\" yazan 2 kişiye 50 #TRX \n\nSÜRE 120 DK\n\n#AVAX #Avalanche #doge #shiba #hamster #Bitcoin #btc #eth #bnb #btt #hot #xtz #mana #NFT #NFTs #cekilis #Giveaway https://t.co/w1MECtBIc8",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     226
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "veincoin",
//                             "indices": [
//                                 64,
//                                 73
//                             ]
//                         },
//                         {
//                             "text": "TRX",
//                             "indices": [
//                                 93,
//                                 97
//                             ]
//                         },
//                         {
//                             "text": "AVAX",
//                             "indices": [
//                                 113,
//                                 118
//                             ]
//                         },
//                         {
//                             "text": "Avalanche",
//                             "indices": [
//                                 119,
//                                 129
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 130,
//                                 135
//                             ]
//                         },
//                         {
//                             "text": "shiba",
//                             "indices": [
//                                 136,
//                                 142
//                             ]
//                         },
//                         {
//                             "text": "hamster",
//                             "indices": [
//                                 143,
//                                 151
//                             ]
//                         },
//                         {
//                             "text": "Bitcoin",
//                             "indices": [
//                                 152,
//                                 160
//                             ]
//                         },
//                         {
//                             "text": "btc",
//                             "indices": [
//                                 161,
//                                 165
//                             ]
//                         },
//                         {
//                             "text": "eth",
//                             "indices": [
//                                 166,
//                                 170
//                             ]
//                         },
//                         {
//                             "text": "bnb",
//                             "indices": [
//                                 171,
//                                 175
//                             ]
//                         },
//                         {
//                             "text": "btt",
//                             "indices": [
//                                 176,
//                                 180
//                             ]
//                         },
//                         {
//                             "text": "hot",
//                             "indices": [
//                                 181,
//                                 185
//                             ]
//                         },
//                         {
//                             "text": "xtz",
//                             "indices": [
//                                 186,
//                                 190
//                             ]
//                         },
//                         {
//                             "text": "mana",
//                             "indices": [
//                                 191,
//                                 196
//                             ]
//                         },
//                         {
//                             "text": "NFT",
//                             "indices": [
//                                 197,
//                                 201
//                             ]
//                         },
//                         {
//                             "text": "NFTs",
//                             "indices": [
//                                 202,
//                                 207
//                             ]
//                         },
//                         {
//                             "text": "cekilis",
//                             "indices": [
//                                 208,
//                                 216
//                             ]
//                         },
//                         {
//                             "text": "Giveaway",
//                             "indices": [
//                                 217,
//                                 226
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": [],
//                     "media": [
//                         {
//                             "id": 1518313104257470500,
//                             "id_str": "1518313104257470473",
//                             "indices": [
//                                 227,
//                                 250
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRIhuVUWUAkpc2d.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRIhuVUWUAkpc2d.jpg",
//                             "url": "https://t.co/w1MECtBIc8",
//                             "display_url": "pic.twitter.com/w1MECtBIc8",
//                             "expanded_url": "https://twitter.com/YalcinnOzan/status/1518313118199341057/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 2000,
//                                 "height": 2000,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 590,
//                                         "h": 1120,
//                                         "w": 2000
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 2000
//                                     },
//                                     {
//                                         "x": 73,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 1754
//                                     },
//                                     {
//                                         "x": 450,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 1000
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 2000
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "large": {
//                                     "w": 2000,
//                                     "h": 2000,
//                                     "resize": "fit"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 1200,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "large": {
//                                     "faces": [
//                                         {
//                                             "x": 873,
//                                             "y": 753,
//                                             "h": 238,
//                                             "w": 238
//                                         }
//                                     ]
//                                 },
//                                 "orig": {
//                                     "faces": [
//                                         {
//                                             "x": 873,
//                                             "y": 753,
//                                             "h": 238,
//                                             "w": 238
//                                         }
//                                     ]
//                                 },
//                                 "small": {
//                                     "faces": [
//                                         {
//                                             "x": 296,
//                                             "y": 256,
//                                             "h": 80,
//                                             "w": 80
//                                         }
//                                     ]
//                                 },
//                                 "medium": {
//                                     "faces": [
//                                         {
//                                             "x": 523,
//                                             "y": 451,
//                                             "h": 142,
//                                             "w": 142
//                                         }
//                                     ]
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "extended_entities": {
//                     "media": [
//                         {
//                             "id": 1518313104257470500,
//                             "id_str": "1518313104257470473",
//                             "indices": [
//                                 227,
//                                 250
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRIhuVUWUAkpc2d.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRIhuVUWUAkpc2d.jpg",
//                             "url": "https://t.co/w1MECtBIc8",
//                             "display_url": "pic.twitter.com/w1MECtBIc8",
//                             "expanded_url": "https://twitter.com/YalcinnOzan/status/1518313118199341057/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 2000,
//                                 "height": 2000,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 590,
//                                         "h": 1120,
//                                         "w": 2000
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 2000
//                                     },
//                                     {
//                                         "x": 73,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 1754
//                                     },
//                                     {
//                                         "x": 450,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 1000
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 2000,
//                                         "w": 2000
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "large": {
//                                     "w": 2000,
//                                     "h": 2000,
//                                     "resize": "fit"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 1200,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "large": {
//                                     "faces": [
//                                         {
//                                             "x": 873,
//                                             "y": 753,
//                                             "h": 238,
//                                             "w": 238
//                                         }
//                                     ]
//                                 },
//                                 "orig": {
//                                     "faces": [
//                                         {
//                                             "x": 873,
//                                             "y": 753,
//                                             "h": 238,
//                                             "w": 238
//                                         }
//                                     ]
//                                 },
//                                 "small": {
//                                     "faces": [
//                                         {
//                                             "x": 296,
//                                             "y": 256,
//                                             "h": 80,
//                                             "w": 80
//                                         }
//                                     ]
//                                 },
//                                 "medium": {
//                                     "faces": [
//                                         {
//                                             "x": 523,
//                                             "y": 451,
//                                             "h": 142,
//                                             "w": 142
//                                         }
//                                     ]
//                                 }
//                             },
//                             "media_key": "3_1518313104257470473",
//                             "ext_sensitive_media_warning": null,
//                             "ext_media_availability": {
//                                 "status": "available"
//                             },
//                             "ext_alt_text": null,
//                             "ext_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 160,
//                                             "green": 48,
//                                             "blue": 94
//                                         },
//                                         "percentage": 65.9
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 255,
//                                             "green": 255,
//                                             "blue": 255
//                                         },
//                                         "percentage": 10.35
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 195,
//                                             "green": 146,
//                                             "blue": 116
//                                         },
//                                         "percentage": 9.89
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 45,
//                                             "green": 37,
//                                             "blue": 35
//                                         },
//                                         "percentage": 8.13
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 246,
//                                             "green": 15,
//                                             "blue": 12
//                                         },
//                                         "percentage": 0.92
//                                     }
//                                 ]
//                             },
//                             "ext": {
//                                 "mediaStats": {
//                                     "r": "Missing",
//                                     "ttl": -1
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1510540738081210400,
//                 "user_id_str": "1510540738081210371",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 17,
//                 "favorite_count": 21,
//                 "reply_count": 13,
//                 "quote_count": 0,
//                 "conversation_id": 1518313118199341000,
//                 "conversation_id_str": "1518313118199341057",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518515773488123906": {
//                 "created_at": "Mon Apr 25 09:02:27 +0000 2022",
//                 "id": 1518515773488124000,
//                 "id_str": "1518515773488123906",
//                 "full_text": "🔴 ApeCoin [APE] Pozitif Ayrışmaya Devam Edebilecek Mi?\n\n🎯 Santiment Verileri Neyi İfade Ediyor?\n\n📌 Yazarımız, @RaindropCrypto 'nun Kripto Dünyasını ve ApeCoin'i incelediği yazısı yayında.\n\nYazının detayları ➡️ https://t.co/cx2LB0GEtr\n\n#pazartesi #APECOIN #Bitcoin #xrp #doge https://t.co/WeSxDYlTjH",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     274
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "pazartesi",
//                             "indices": [
//                                 235,
//                                 245
//                             ]
//                         },
//                         {
//                             "text": "APECOIN",
//                             "indices": [
//                                 246,
//                                 254
//                             ]
//                         },
//                         {
//                             "text": "Bitcoin",
//                             "indices": [
//                                 255,
//                                 263
//                             ]
//                         },
//                         {
//                             "text": "xrp",
//                             "indices": [
//                                 264,
//                                 268
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 269,
//                                 274
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [
//                         {
//                             "screen_name": "RaindropCrypto",
//                             "name": "Rain Drop Crypto",
//                             "id": 1511538738,
//                             "id_str": "1511538738",
//                             "indices": [
//                                 110,
//                                 125
//                             ]
//                         }
//                     ],
//                     "urls": [
//                         {
//                             "url": "https://t.co/cx2LB0GEtr",
//                             "expanded_url": "https://finanskolik.com/apecoin-ape-pozitif-ayrismaya-devam-edebilecek-mi-santiment-verileri-neyi-ifade-ediyor/",
//                             "display_url": "finanskolik.com/apecoin-ape-po…",
//                             "indices": [
//                                 210,
//                                 233
//                             ]
//                         }
//                     ],
//                     "media": [
//                         {
//                             "id": 1518515037647822800,
//                             "id_str": "1518515037647822848",
//                             "indices": [
//                                 275,
//                                 298
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRLZYZ0WYAAotgL.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRLZYZ0WYAAotgL.jpg",
//                             "url": "https://t.co/WeSxDYlTjH",
//                             "display_url": "pic.twitter.com/WeSxDYlTjH",
//                             "expanded_url": "https://twitter.com/finanskolik/status/1518515773488123906/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 1200,
//                                 "height": 675,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 3,
//                                         "h": 672,
//                                         "w": 1200
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 675
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 592
//                                     },
//                                     {
//                                         "x": 41,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 338
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 1200
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "large": {
//                                     "w": 1200,
//                                     "h": 675,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 675,
//                                     "resize": "fit"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 383,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "orig": {
//                                     "faces": [
//                                         {
//                                             "x": 880,
//                                             "y": 106,
//                                             "h": 250,
//                                             "w": 250
//                                         }
//                                     ]
//                                 },
//                                 "large": {
//                                     "faces": [
//                                         {
//                                             "x": 880,
//                                             "y": 106,
//                                             "h": 250,
//                                             "w": 250
//                                         }
//                                     ]
//                                 },
//                                 "medium": {
//                                     "faces": [
//                                         {
//                                             "x": 880,
//                                             "y": 106,
//                                             "h": 250,
//                                             "w": 250
//                                         }
//                                     ]
//                                 },
//                                 "small": {
//                                     "faces": [
//                                         {
//                                             "x": 498,
//                                             "y": 60,
//                                             "h": 141,
//                                             "w": 141
//                                         }
//                                     ]
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "extended_entities": {
//                     "media": [
//                         {
//                             "id": 1518515037647822800,
//                             "id_str": "1518515037647822848",
//                             "indices": [
//                                 275,
//                                 298
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRLZYZ0WYAAotgL.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRLZYZ0WYAAotgL.jpg",
//                             "url": "https://t.co/WeSxDYlTjH",
//                             "display_url": "pic.twitter.com/WeSxDYlTjH",
//                             "expanded_url": "https://twitter.com/finanskolik/status/1518515773488123906/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 1200,
//                                 "height": 675,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 3,
//                                         "h": 672,
//                                         "w": 1200
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 675
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 592
//                                     },
//                                     {
//                                         "x": 41,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 338
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 675,
//                                         "w": 1200
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "large": {
//                                     "w": 1200,
//                                     "h": 675,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 675,
//                                     "resize": "fit"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 383,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "orig": {
//                                     "faces": [
//                                         {
//                                             "x": 880,
//                                             "y": 106,
//                                             "h": 250,
//                                             "w": 250
//                                         }
//                                     ]
//                                 },
//                                 "large": {
//                                     "faces": [
//                                         {
//                                             "x": 880,
//                                             "y": 106,
//                                             "h": 250,
//                                             "w": 250
//                                         }
//                                     ]
//                                 },
//                                 "medium": {
//                                     "faces": [
//                                         {
//                                             "x": 880,
//                                             "y": 106,
//                                             "h": 250,
//                                             "w": 250
//                                         }
//                                     ]
//                                 },
//                                 "small": {
//                                     "faces": [
//                                         {
//                                             "x": 498,
//                                             "y": 60,
//                                             "h": 141,
//                                             "w": 141
//                                         }
//                                     ]
//                                 }
//                             },
//                             "media_key": "3_1518515037647822848",
//                             "ext_sensitive_media_warning": null,
//                             "ext_media_availability": {
//                                 "status": "available"
//                             },
//                             "ext_alt_text": null,
//                             "ext_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 16,
//                                             "green": 16,
//                                             "blue": 17
//                                         },
//                                         "percentage": 48.37
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 8,
//                                             "green": 20,
//                                             "blue": 65
//                                         },
//                                         "percentage": 25.43
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 83,
//                                             "green": 68,
//                                             "blue": 49
//                                         },
//                                         "percentage": 9
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 207,
//                                             "green": 139,
//                                             "blue": 114
//                                         },
//                                         "percentage": 4.65
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 3,
//                                             "green": 18,
//                                             "blue": 70
//                                         },
//                                         "percentage": 2.07
//                                     }
//                                 ]
//                             },
//                             "ext": {
//                                 "mediaStats": {
//                                     "r": "Missing",
//                                     "ttl": -1
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1336825729061937200,
//                 "user_id_str": "1336825729061937158",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 2,
//                 "favorite_count": 7,
//                 "reply_count": 1,
//                 "quote_count": 1,
//                 "conversation_id": 1518515773488124000,
//                 "conversation_id_str": "1518515773488123906",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1517986442261184515": {
//                 "created_at": "Sat Apr 23 21:59:05 +0000 2022",
//                 "id": 1517986442261184500,
//                 "id_str": "1517986442261184515",
//                 "full_text": "#Dogecoin developers sent the first $Doge transaction without internet via radio transmission with help from Elon Musk’s Starlink.\n\nhttps://t.co/lb7vfsNN7k",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     155
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "Dogecoin",
//                             "indices": [
//                                 0,
//                                 9
//                             ]
//                         }
//                     ],
//                     "symbols": [
//                         {
//                             "text": "Doge",
//                             "indices": [
//                                 36,
//                                 41
//                             ]
//                         }
//                     ],
//                     "user_mentions": [],
//                     "urls": [
//                         {
//                             "url": "https://t.co/lb7vfsNN7k",
//                             "expanded_url": "https://watcher.guru/news/this-dogecoin-transaction-happened-without-access-to-internet",
//                             "display_url": "watcher.guru/news/this-doge…",
//                             "indices": [
//                                 132,
//                                 155
//                             ]
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1387497871751196700,
//                 "user_id_str": "1387497871751196672",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 464,
//                 "favorite_count": 2019,
//                 "reply_count": 232,
//                 "quote_count": 23,
//                 "conversation_id": 1517986442261184500,
//                 "conversation_id_str": "1517986442261184515",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "card": {
//                     "name": "summary_large_image",
//                     "url": "https://t.co/lb7vfsNN7k",
//                     "card_type_url": "http://card-type-url-is-deprecated.invalid",
//                     "binding_values": {
//                         "vanity_url": {
//                             "type": "STRING",
//                             "string_value": "watcher.guru",
//                             "scribe_key": "vanity_url"
//                         },
//                         "domain": {
//                             "type": "STRING",
//                             "string_value": "watcher.guru"
//                         },
//                         "creator": {
//                             "type": "USER",
//                             "user_value": {
//                                 "id_str": "1387497871751196672",
//                                 "path": []
//                             }
//                         },
//                         "site": {
//                             "type": "USER",
//                             "user_value": {
//                                 "id_str": "1387497871751196672",
//                                 "path": []
//                             },
//                             "scribe_key": "publisher_id"
//                         },
//                         "title": {
//                             "type": "STRING",
//                             "string_value": "This Dogecoin transaction happened without access to internet"
//                         },
//                         "description": {
//                             "type": "STRING",
//                             "string_value": "Developers of Dogecoin just carried out a transaction using a radio connection instead of internet access."
//                         },
//                         "thumbnail_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=100x100",
//                                 "width": 100,
//                                 "height": 67,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=280x150",
//                                 "width": 225,
//                                 "height": 150,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=800x320_1",
//                                 "width": 480,
//                                 "height": 320,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=png&name=2048x2048_2_exp",
//                                 "width": 1000,
//                                 "height": 667,
//                                 "alt": null
//                             }
//                         },
//                         "thumbnail_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 48.55,
//                                         "rgb": {
//                                             "red": 27,
//                                             "green": 28,
//                                             "blue": 37
//                                         }
//                                     },
//                                     {
//                                         "percentage": 28.29,
//                                         "rgb": {
//                                             "red": 205,
//                                             "green": 195,
//                                             "blue": 172
//                                         }
//                                     },
//                                     {
//                                         "percentage": 6.09,
//                                         "rgb": {
//                                             "red": 214,
//                                             "green": 173,
//                                             "blue": 113
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.87,
//                                         "rgb": {
//                                             "red": 111,
//                                             "green": 92,
//                                             "blue": 52
//                                         }
//                                     },
//                                     {
//                                         "percentage": 1.49,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 170,
//                                             "blue": 56
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "thumbnail_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=orig",
//                                 "width": 1000,
//                                 "height": 667,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=png&name=2048x2048_2_exp",
//                                 "width": 1000,
//                                 "height": 667,
//                                 "alt": null
//                             }
//                         },
//                         "summary_photo_image_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 48.55,
//                                         "rgb": {
//                                             "red": 27,
//                                             "green": 28,
//                                             "blue": 37
//                                         }
//                                     },
//                                     {
//                                         "percentage": 28.29,
//                                         "rgb": {
//                                             "red": 205,
//                                             "green": 195,
//                                             "blue": 172
//                                         }
//                                     },
//                                     {
//                                         "percentage": 6.09,
//                                         "rgb": {
//                                             "red": 214,
//                                             "green": 173,
//                                             "blue": 113
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.87,
//                                         "rgb": {
//                                             "red": 111,
//                                             "green": 92,
//                                             "blue": 52
//                                         }
//                                     },
//                                     {
//                                         "percentage": 1.49,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 170,
//                                             "blue": 56
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "summary_photo_image_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=orig",
//                                 "width": 1000,
//                                 "height": 667,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_small": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=386x202",
//                                 "width": 386,
//                                 "height": 202,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=600x314",
//                                 "width": 600,
//                                 "height": 314,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=800x419",
//                                 "width": 800,
//                                 "height": 419,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_x_large": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=png&name=2048x2048_2_exp",
//                                 "width": 1000,
//                                 "height": 667,
//                                 "alt": null
//                             }
//                         },
//                         "photo_image_full_size_color": {
//                             "type": "IMAGE_COLOR",
//                             "image_color_value": {
//                                 "palette": [
//                                     {
//                                         "percentage": 48.55,
//                                         "rgb": {
//                                             "red": 27,
//                                             "green": 28,
//                                             "blue": 37
//                                         }
//                                     },
//                                     {
//                                         "percentage": 28.29,
//                                         "rgb": {
//                                             "red": 205,
//                                             "green": 195,
//                                             "blue": 172
//                                         }
//                                     },
//                                     {
//                                         "percentage": 6.09,
//                                         "rgb": {
//                                             "red": 214,
//                                             "green": 173,
//                                             "blue": 113
//                                         }
//                                     },
//                                     {
//                                         "percentage": 2.87,
//                                         "rgb": {
//                                             "red": 111,
//                                             "green": 92,
//                                             "blue": 52
//                                         }
//                                     },
//                                     {
//                                         "percentage": 1.49,
//                                         "rgb": {
//                                             "red": 213,
//                                             "green": 170,
//                                             "blue": 56
//                                         }
//                                     }
//                                 ]
//                             }
//                         },
//                         "photo_image_full_size_original": {
//                             "type": "IMAGE",
//                             "image_value": {
//                                 "url": "https://pbs.twimg.com/card_img/1517985805024735232/uLHTVpSf?format=jpg&name=orig",
//                                 "width": 1000,
//                                 "height": 667,
//                                 "alt": null
//                             }
//                         },
//                         "card_url": {
//                             "type": "STRING",
//                             "string_value": "https://t.co/lb7vfsNN7k",
//                             "scribe_key": "card_url"
//                         }
//                     },
//                     "users": {
//                         "1387497871751196672": {
//                             "id": 1387497871751196700,
//                             "id_str": "1387497871751196672",
//                             "name": "Watcher.Guru",
//                             "screen_name": "WatcherGuru",
//                             "location": "Texas, USA",
//                             "description": "Watcher Guru gives you unparalleled coverage of Crypto & NFTs in real-time | https://t.co/3ukJRR243H | Tweets Are Not Financial Advice | @BBTC | #Bitcoin",
//                             "url": "https://t.co/7LqF3L9syi",
//                             "entities": {
//                                 "url": {
//                                     "urls": [
//                                         {
//                                             "url": "https://t.co/7LqF3L9syi",
//                                             "expanded_url": "https://watcher.guru/news/",
//                                             "display_url": "watcher.guru/news/",
//                                             "indices": [
//                                                 0,
//                                                 23
//                                             ]
//                                         }
//                                     ]
//                                 },
//                                 "description": {
//                                     "urls": [
//                                         {
//                                             "url": "https://t.co/3ukJRR243H",
//                                             "expanded_url": "http://t.me/WatcherGuru",
//                                             "display_url": "t.me/WatcherGuru",
//                                             "indices": [
//                                                 77,
//                                                 100
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             },
//                             "protected": false,
//                             "followers_count": 808641,
//                             "fast_followers_count": 0,
//                             "normal_followers_count": 808641,
//                             "friends_count": 20,
//                             "listed_count": 1871,
//                             "created_at": "Wed Apr 28 20:04:12 +0000 2021",
//                             "favourites_count": 42913,
//                             "utc_offset": null,
//                             "time_zone": null,
//                             "geo_enabled": true,
//                             "verified": true,
//                             "statuses_count": 6428,
//                             "media_count": 737,
//                             "lang": null,
//                             "contributors_enabled": false,
//                             "is_translator": false,
//                             "is_translation_enabled": false,
//                             "profile_background_color": "F5F8FA",
//                             "profile_background_image_url": null,
//                             "profile_background_image_url_https": null,
//                             "profile_background_tile": false,
//                             "profile_image_url": "http://pbs.twimg.com/profile_images/1475973046133481477/AorQUcvD_normal.jpg",
//                             "profile_image_url_https": "https://pbs.twimg.com/profile_images/1475973046133481477/AorQUcvD_normal.jpg",
//                             "profile_banner_url": "https://pbs.twimg.com/profile_banners/1387497871751196672/1638581124",
//                             "profile_image_extensions_sensitive_media_warning": null,
//                             "profile_image_extensions_media_availability": null,
//                             "profile_image_extensions_alt_text": null,
//                             "profile_image_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 27,
//                                             "green": 196,
//                                             "blue": 105
//                                         },
//                                         "percentage": 75.96
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 36,
//                                             "green": 32,
//                                             "blue": 33
//                                         },
//                                         "percentage": 15.81
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 241,
//                                             "green": 242,
//                                             "blue": 239
//                                         },
//                                         "percentage": 6.63
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 157,
//                                             "green": 224,
//                                             "blue": 187
//                                         },
//                                         "percentage": 0.82
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 106,
//                                             "green": 210,
//                                             "blue": 154
//                                         },
//                                         "percentage": 0.2
//                                     }
//                                 ]
//                             },
//                             "profile_image_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_banner_extensions_sensitive_media_warning": null,
//                             "profile_banner_extensions_media_availability": null,
//                             "profile_banner_extensions_alt_text": null,
//                             "profile_banner_extensions_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 22,
//                                             "green": 32,
//                                             "blue": 33
//                                         },
//                                         "percentage": 49.18
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 1,
//                                             "green": 228,
//                                             "blue": 110
//                                         },
//                                         "percentage": 30.36
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 219,
//                                             "green": 223,
//                                             "blue": 223
//                                         },
//                                         "percentage": 6.21
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 10,
//                                             "green": 132,
//                                             "blue": 75
//                                         },
//                                         "percentage": 5.41
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 10,
//                                             "green": 64,
//                                             "blue": 44
//                                         },
//                                         "percentage": 4.16
//                                     }
//                                 ]
//                             },
//                             "profile_banner_extensions": {
//                                 "mediaStats": {
//                                     "r": {
//                                         "missing": null
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "profile_link_color": "1DA1F2",
//                             "profile_sidebar_border_color": "C0DEED",
//                             "profile_sidebar_fill_color": "DDEEF6",
//                             "profile_text_color": "333333",
//                             "profile_use_background_image": true,
//                             "has_extended_profile": true,
//                             "default_profile": true,
//                             "default_profile_image": false,
//                             "pinned_tweet_ids": [
//                                 1518431001147580400
//                             ],
//                             "pinned_tweet_ids_str": [
//                                 "1518431001147580417"
//                             ],
//                             "has_custom_timelines": true,
//                             "can_dm": true,
//                             "can_media_tag": true,
//                             "following": false,
//                             "follow_request_sent": false,
//                             "notifications": false,
//                             "muting": false,
//                             "blocking": false,
//                             "blocked_by": false,
//                             "want_retweets": false,
//                             "advertiser_account_type": "promotable_user",
//                             "advertiser_account_service_levels": [
//                                 "smb",
//                                 "media_studio"
//                             ],
//                             "profile_interstitial_type": "",
//                             "business_profile_state": "none",
//                             "translator_type": "none",
//                             "withheld_in_countries": [],
//                             "followed_by": false,
//                             "ext_has_nft_avatar": false,
//                             "ext": {
//                                 "superFollowMetadata": {
//                                     "r": {
//                                         "ok": {
//                                             "superFollowEligible": false,
//                                             "superFollowing": false,
//                                             "superFollowedBy": false,
//                                             "exclusiveTweetFollowing": false,
//                                             "privateSuperFollowing": false
//                                         }
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "hasNftAvatar": {
//                                     "r": {
//                                         "ok": false
//                                     },
//                                     "ttl": -1
//                                 },
//                                 "highlightedLabel": {
//                                     "r": {
//                                         "ok": {}
//                                     },
//                                     "ttl": -1
//                                 }
//                             },
//                             "require_some_consent": false
//                         }
//                     },
//                     "card_platform": {
//                         "platform": {
//                             "device": {
//                                 "name": "Swift",
//                                 "version": "12"
//                             },
//                             "audience": {
//                                 "name": "production",
//                                 "bucket": null
//                             }
//                         }
//                     }
//                 },
//                 "lang": "en",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518337981068816387": {
//                 "created_at": "Sun Apr 24 21:15:58 +0000 2022",
//                 "id": 1518337981068816400,
//                 "id_str": "1518337981068816387",
//                 "full_text": "$BTC\n\nBTC'de beklediğim 38.900$   geldi 💍\n\nŞimdi ise 45k$ bekliyorum.   Harmonik Gartley Pattern mevcut. \n\nSOL giriş yaptım. 98.70$ 'dan \n\n#binance #altcoin #defi #nft #btc #eth #doge #kripto https://t.co/jE1QaYLYOr",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     191
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "binance",
//                             "indices": [
//                                 139,
//                                 147
//                             ]
//                         },
//                         {
//                             "text": "altcoin",
//                             "indices": [
//                                 148,
//                                 156
//                             ]
//                         },
//                         {
//                             "text": "defi",
//                             "indices": [
//                                 157,
//                                 162
//                             ]
//                         },
//                         {
//                             "text": "nft",
//                             "indices": [
//                                 163,
//                                 167
//                             ]
//                         },
//                         {
//                             "text": "btc",
//                             "indices": [
//                                 168,
//                                 172
//                             ]
//                         },
//                         {
//                             "text": "eth",
//                             "indices": [
//                                 173,
//                                 177
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 178,
//                                 183
//                             ]
//                         },
//                         {
//                             "text": "kripto",
//                             "indices": [
//                                 184,
//                                 191
//                             ]
//                         }
//                     ],
//                     "symbols": [
//                         {
//                             "text": "BTC",
//                             "indices": [
//                                 0,
//                                 4
//                             ]
//                         }
//                     ],
//                     "user_mentions": [],
//                     "urls": [],
//                     "media": [
//                         {
//                             "id": 1518337832967979000,
//                             "id_str": "1518337832967979014",
//                             "indices": [
//                                 192,
//                                 215
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRI4Nu8XwAYU2ie.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRI4Nu8XwAYU2ie.jpg",
//                             "url": "https://t.co/jE1QaYLYOr",
//                             "display_url": "pic.twitter.com/jE1QaYLYOr",
//                             "expanded_url": "https://twitter.com/Burtay/status/1518337981068816387/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 1834,
//                                 "height": 810,
//                                 "focus_rects": [
//                                     {
//                                         "x": 56,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 1446
//                                     },
//                                     {
//                                         "x": 374,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 810
//                                     },
//                                     {
//                                         "x": 424,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 711
//                                     },
//                                     {
//                                         "x": 577,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 405
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 1834
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 300,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 530,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 1834,
//                                     "h": 810,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "orig": {
//                                     "faces": []
//                                 },
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "extended_entities": {
//                     "media": [
//                         {
//                             "id": 1518337832967979000,
//                             "id_str": "1518337832967979014",
//                             "indices": [
//                                 192,
//                                 215
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRI4Nu8XwAYU2ie.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRI4Nu8XwAYU2ie.jpg",
//                             "url": "https://t.co/jE1QaYLYOr",
//                             "display_url": "pic.twitter.com/jE1QaYLYOr",
//                             "expanded_url": "https://twitter.com/Burtay/status/1518337981068816387/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 1834,
//                                 "height": 810,
//                                 "focus_rects": [
//                                     {
//                                         "x": 56,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 1446
//                                     },
//                                     {
//                                         "x": 374,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 810
//                                     },
//                                     {
//                                         "x": 424,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 711
//                                     },
//                                     {
//                                         "x": 577,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 405
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 810,
//                                         "w": 1834
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 300,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 530,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 1834,
//                                     "h": 810,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "orig": {
//                                     "faces": []
//                                 },
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 }
//                             },
//                             "media_key": "3_1518337832967979014",
//                             "ext_sensitive_media_warning": null,
//                             "ext_media_availability": {
//                                 "status": "available"
//                             },
//                             "ext_alt_text": null,
//                             "ext_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 24,
//                                             "green": 28,
//                                             "blue": 39
//                                         },
//                                         "percentage": 96.93
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 45,
//                                             "green": 56,
//                                             "blue": 61
//                                         },
//                                         "percentage": 2.01
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 77,
//                                             "green": 52,
//                                             "blue": 49
//                                         },
//                                         "percentage": 0.38
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 163,
//                                             "green": 86,
//                                             "blue": 88
//                                         },
//                                         "percentage": 0.15
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 154,
//                                             "green": 145,
//                                             "blue": 50
//                                         },
//                                         "percentage": 0.15
//                                     }
//                                 ]
//                             },
//                             "ext": {
//                                 "mediaStats": {
//                                     "r": "Missing",
//                                     "ttl": -1
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 117493266,
//                 "user_id_str": "117493266",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 3,
//                 "favorite_count": 20,
//                 "reply_count": 2,
//                 "quote_count": 1,
//                 "conversation_id": 1518337981068816400,
//                 "conversation_id_str": "1518337981068816387",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518268758464344072": {
//                 "created_at": "Sun Apr 24 16:40:54 +0000 2022",
//                 "id": 1518268758464344000,
//                 "id_str": "1518268758464344072",
//                 "full_text": "🚨Çekiliş🚨\n\n5 kişiye 5 NFT (40$) \n\n5 kişiye 5 WL\n\n⬇️Şartlar⬇️\n\n➡️ Takip @AlfaNFTpromoter  @DummyVectors \n\n➡️ RT+❤️\n\n➡️ 1 arkadaşını etiketle \n\n⏰24 HRS\n\n#AVAX #BTC #ETH #shiba #doge #LUNA #RACA #BNB #XRP #SOL #ADA https://t.co/7EBZ0R5SEV",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     211
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "AVAX",
//                             "indices": [
//                                 151,
//                                 156
//                             ]
//                         },
//                         {
//                             "text": "BTC",
//                             "indices": [
//                                 157,
//                                 161
//                             ]
//                         },
//                         {
//                             "text": "ETH",
//                             "indices": [
//                                 162,
//                                 166
//                             ]
//                         },
//                         {
//                             "text": "shiba",
//                             "indices": [
//                                 167,
//                                 173
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 174,
//                                 179
//                             ]
//                         },
//                         {
//                             "text": "LUNA",
//                             "indices": [
//                                 180,
//                                 185
//                             ]
//                         },
//                         {
//                             "text": "RACA",
//                             "indices": [
//                                 186,
//                                 191
//                             ]
//                         },
//                         {
//                             "text": "BNB",
//                             "indices": [
//                                 192,
//                                 196
//                             ]
//                         },
//                         {
//                             "text": "XRP",
//                             "indices": [
//                                 197,
//                                 201
//                             ]
//                         },
//                         {
//                             "text": "SOL",
//                             "indices": [
//                                 202,
//                                 206
//                             ]
//                         },
//                         {
//                             "text": "ADA",
//                             "indices": [
//                                 207,
//                                 211
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [
//                         {
//                             "screen_name": "AlfaNFTpromoter",
//                             "name": "Alfa | NFT Promoter 📩",
//                             "id": 1515668159868588000,
//                             "id_str": "1515668159868588055",
//                             "indices": [
//                                 71,
//                                 87
//                             ]
//                         },
//                         {
//                             "screen_name": "DummyVectors",
//                             "name": "Vectors Dummy",
//                             "id": 1503464553560129500,
//                             "id_str": "1503464553560129543",
//                             "indices": [
//                                 89,
//                                 102
//                             ]
//                         }
//                     ],
//                     "urls": [],
//                     "media": [
//                         {
//                             "id": 1518268712050172000,
//                             "id_str": "1518268712050171905",
//                             "indices": [
//                                 212,
//                                 235
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRH5WXdXIAEPQs3.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRH5WXdXIAEPQs3.jpg",
//                             "url": "https://t.co/7EBZ0R5SEV",
//                             "display_url": "pic.twitter.com/7EBZ0R5SEV",
//                             "expanded_url": "https://twitter.com/AlfaNFTpromoter/status/1518268758464344072/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 680,
//                                 "height": 680,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 65,
//                                         "h": 381,
//                                         "w": 680
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 680
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 596
//                                     },
//                                     {
//                                         "x": 119,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 340
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 680
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "extended_entities": {
//                     "media": [
//                         {
//                             "id": 1518268712050172000,
//                             "id_str": "1518268712050171905",
//                             "indices": [
//                                 212,
//                                 235
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRH5WXdXIAEPQs3.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRH5WXdXIAEPQs3.jpg",
//                             "url": "https://t.co/7EBZ0R5SEV",
//                             "display_url": "pic.twitter.com/7EBZ0R5SEV",
//                             "expanded_url": "https://twitter.com/AlfaNFTpromoter/status/1518268758464344072/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 680,
//                                 "height": 680,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 65,
//                                         "h": 381,
//                                         "w": 680
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 680
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 596
//                                     },
//                                     {
//                                         "x": 119,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 340
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 680,
//                                         "w": 680
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "small": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 },
//                                 "medium": {
//                                     "w": 680,
//                                     "h": 680,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 }
//                             },
//                             "media_key": "3_1518268712050171905",
//                             "ext_sensitive_media_warning": null,
//                             "ext_media_availability": {
//                                 "status": "available"
//                             },
//                             "ext_alt_text": null,
//                             "ext_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 152,
//                                             "green": 226,
//                                             "blue": 255
//                                         },
//                                         "percentage": 61.53
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 44,
//                                             "green": 44,
//                                             "blue": 44
//                                         },
//                                         "percentage": 14.23
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 254,
//                                             "green": 176,
//                                             "blue": 2
//                                         },
//                                         "percentage": 8.28
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 104,
//                                             "green": 164,
//                                             "blue": 226
//                                         },
//                                         "percentage": 4.15
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 42,
//                                             "green": 157,
//                                             "blue": 75
//                                         },
//                                         "percentage": 1.13
//                                     }
//                                 ]
//                             },
//                             "ext": {
//                                 "mediaStats": {
//                                     "r": "Missing",
//                                     "ttl": -1
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1515668159868588000,
//                 "user_id_str": "1515668159868588055",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 67,
//                 "favorite_count": 74,
//                 "reply_count": 72,
//                 "quote_count": 0,
//                 "conversation_id": 1518268758464344000,
//                 "conversation_id_str": "1518268758464344072",
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518295928872001539": {
//                 "created_at": "Sun Apr 24 18:28:52 +0000 2022",
//                 "id": 1518295928872001500,
//                 "id_str": "1518295928872001539",
//                 "full_text": "#Binance #futures sinyaller. Buyurun\n\nLike &amp; RT \n\n#btc  #bitcoin  #Ethereum #doge #shib #shiba #avax  #bnb  #Solana #ada #xrp #hot #dego #binance  #ftx #kucoin #usdt #ape #zil #audio #mana #gmt https://t.co/ehCZvYJDwl",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     197
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "Binance",
//                             "indices": [
//                                 0,
//                                 8
//                             ]
//                         },
//                         {
//                             "text": "futures",
//                             "indices": [
//                                 9,
//                                 17
//                             ]
//                         },
//                         {
//                             "text": "btc",
//                             "indices": [
//                                 54,
//                                 58
//                             ]
//                         },
//                         {
//                             "text": "bitcoin",
//                             "indices": [
//                                 60,
//                                 68
//                             ]
//                         },
//                         {
//                             "text": "Ethereum",
//                             "indices": [
//                                 70,
//                                 79
//                             ]
//                         },
//                         {
//                             "text": "doge",
//                             "indices": [
//                                 80,
//                                 85
//                             ]
//                         },
//                         {
//                             "text": "shib",
//                             "indices": [
//                                 86,
//                                 91
//                             ]
//                         },
//                         {
//                             "text": "shiba",
//                             "indices": [
//                                 92,
//                                 98
//                             ]
//                         },
//                         {
//                             "text": "avax",
//                             "indices": [
//                                 99,
//                                 104
//                             ]
//                         },
//                         {
//                             "text": "bnb",
//                             "indices": [
//                                 106,
//                                 110
//                             ]
//                         },
//                         {
//                             "text": "Solana",
//                             "indices": [
//                                 112,
//                                 119
//                             ]
//                         },
//                         {
//                             "text": "ada",
//                             "indices": [
//                                 120,
//                                 124
//                             ]
//                         },
//                         {
//                             "text": "xrp",
//                             "indices": [
//                                 125,
//                                 129
//                             ]
//                         },
//                         {
//                             "text": "hot",
//                             "indices": [
//                                 130,
//                                 134
//                             ]
//                         },
//                         {
//                             "text": "dego",
//                             "indices": [
//                                 135,
//                                 140
//                             ]
//                         },
//                         {
//                             "text": "binance",
//                             "indices": [
//                                 141,
//                                 149
//                             ]
//                         },
//                         {
//                             "text": "ftx",
//                             "indices": [
//                                 151,
//                                 155
//                             ]
//                         },
//                         {
//                             "text": "kucoin",
//                             "indices": [
//                                 156,
//                                 163
//                             ]
//                         },
//                         {
//                             "text": "usdt",
//                             "indices": [
//                                 164,
//                                 169
//                             ]
//                         },
//                         {
//                             "text": "ape",
//                             "indices": [
//                                 170,
//                                 174
//                             ]
//                         },
//                         {
//                             "text": "zil",
//                             "indices": [
//                                 175,
//                                 179
//                             ]
//                         },
//                         {
//                             "text": "audio",
//                             "indices": [
//                                 180,
//                                 186
//                             ]
//                         },
//                         {
//                             "text": "mana",
//                             "indices": [
//                                 187,
//                                 192
//                             ]
//                         },
//                         {
//                             "text": "gmt",
//                             "indices": [
//                                 193,
//                                 197
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [],
//                     "urls": [],
//                     "media": [
//                         {
//                             "id": 1518295884127256600,
//                             "id_str": "1518295884127256581",
//                             "indices": [
//                                 198,
//                                 221
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRISD_VXwAUB2lv.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRISD_VXwAUB2lv.jpg",
//                             "url": "https://t.co/ehCZvYJDwl",
//                             "display_url": "pic.twitter.com/ehCZvYJDwl",
//                             "expanded_url": "https://twitter.com/WhaleHunterSS/status/1518295928872001539/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 2240,
//                                 "height": 1904,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 650,
//                                         "h": 1254,
//                                         "w": 2240
//                                     },
//                                     {
//                                         "x": 336,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 1904
//                                     },
//                                     {
//                                         "x": 570,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 1670
//                                     },
//                                     {
//                                         "x": 1288,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 952
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 2240
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "small": {
//                                     "w": 680,
//                                     "h": 578,
//                                     "resize": "fit"
//                                 },
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 1020,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 2048,
//                                     "h": 1741,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "extended_entities": {
//                     "media": [
//                         {
//                             "id": 1518295884127256600,
//                             "id_str": "1518295884127256581",
//                             "indices": [
//                                 198,
//                                 221
//                             ],
//                             "media_url": "http://pbs.twimg.com/media/FRISD_VXwAUB2lv.jpg",
//                             "media_url_https": "https://pbs.twimg.com/media/FRISD_VXwAUB2lv.jpg",
//                             "url": "https://t.co/ehCZvYJDwl",
//                             "display_url": "pic.twitter.com/ehCZvYJDwl",
//                             "expanded_url": "https://twitter.com/WhaleHunterSS/status/1518295928872001539/photo/1",
//                             "type": "photo",
//                             "original_info": {
//                                 "width": 2240,
//                                 "height": 1904,
//                                 "focus_rects": [
//                                     {
//                                         "x": 0,
//                                         "y": 650,
//                                         "h": 1254,
//                                         "w": 2240
//                                     },
//                                     {
//                                         "x": 336,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 1904
//                                     },
//                                     {
//                                         "x": 570,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 1670
//                                     },
//                                     {
//                                         "x": 1288,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 952
//                                     },
//                                     {
//                                         "x": 0,
//                                         "y": 0,
//                                         "h": 1904,
//                                         "w": 2240
//                                     }
//                                 ]
//                             },
//                             "sizes": {
//                                 "small": {
//                                     "w": 680,
//                                     "h": 578,
//                                     "resize": "fit"
//                                 },
//                                 "thumb": {
//                                     "w": 150,
//                                     "h": 150,
//                                     "resize": "crop"
//                                 },
//                                 "medium": {
//                                     "w": 1200,
//                                     "h": 1020,
//                                     "resize": "fit"
//                                 },
//                                 "large": {
//                                     "w": 2048,
//                                     "h": 1741,
//                                     "resize": "fit"
//                                 }
//                             },
//                             "features": {
//                                 "small": {
//                                     "faces": []
//                                 },
//                                 "medium": {
//                                     "faces": []
//                                 },
//                                 "large": {
//                                     "faces": []
//                                 },
//                                 "orig": {
//                                     "faces": []
//                                 }
//                             },
//                             "media_key": "3_1518295884127256581",
//                             "ext_sensitive_media_warning": null,
//                             "ext_media_availability": {
//                                 "status": "available"
//                             },
//                             "ext_alt_text": null,
//                             "ext_media_color": {
//                                 "palette": [
//                                     {
//                                         "rgb": {
//                                             "red": 49,
//                                             "green": 49,
//                                             "blue": 49
//                                         },
//                                         "percentage": 97.93
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 59,
//                                             "green": 76,
//                                             "blue": 53
//                                         },
//                                         "percentage": 1.01
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 114,
//                                             "green": 117,
//                                             "blue": 124
//                                         },
//                                         "percentage": 0.67
//                                     },
//                                     {
//                                         "rgb": {
//                                             "red": 84,
//                                             "green": 51,
//                                             "blue": 48
//                                         },
//                                         "percentage": 0.35
//                                     }
//                                 ]
//                             },
//                             "ext": {
//                                 "mediaStats": {
//                                     "r": "Missing",
//                                     "ttl": -1
//                                 }
//                             }
//                         }
//                     ]
//                 },
//                 "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1402748818857287700,
//                 "user_id_str": "1402748818857287690",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 21,
//                 "favorite_count": 178,
//                 "reply_count": 0,
//                 "quote_count": 0,
//                 "conversation_id": 1518295928872001500,
//                 "conversation_id_str": "1518295928872001539",
//                 "conversation_control": {
//                     "policy": "community",
//                     "conversation_owner": {
//                         "screen_name": "WhaleHunterSS"
//                     }
//                 },
//                 "favorited": false,
//                 "retweeted": false,
//                 "possibly_sensitive": false,
//                 "possibly_sensitive_editable": true,
//                 "limited_actions": "limited_replies",
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             },
//             "1518521969733472258": {
//                 "created_at": "Mon Apr 25 09:27:05 +0000 2022",
//                 "id": 1518521969733472300,
//                 "id_str": "1518521969733472258",
//                 "full_text": "Wall Street journal: @elonmusk tweeter'ı alabilir taraflar satış konusunda önceye göre daha istekli haberini paylaştı.\n#dogecoin",
//                 "truncated": false,
//                 "display_text_range": [
//                     0,
//                     128
//                 ],
//                 "entities": {
//                     "hashtags": [
//                         {
//                             "text": "dogecoin",
//                             "indices": [
//                                 119,
//                                 128
//                             ]
//                         }
//                     ],
//                     "symbols": [],
//                     "user_mentions": [
//                         {
//                             "screen_name": "elonmusk",
//                             "name": "Elon Musk",
//                             "id": 44196397,
//                             "id_str": "44196397",
//                             "indices": [
//                                 21,
//                                 30
//                             ]
//                         }
//                     ],
//                     "urls": []
//                 },
//                 "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
//                 "in_reply_to_status_id": null,
//                 "in_reply_to_status_id_str": null,
//                 "in_reply_to_user_id": null,
//                 "in_reply_to_user_id_str": null,
//                 "in_reply_to_screen_name": null,
//                 "user_id": 1401986196750934000,
//                 "user_id_str": "1401986196750934021",
//                 "geo": null,
//                 "coordinates": null,
//                 "place": null,
//                 "contributors": null,
//                 "is_quote_status": false,
//                 "retweet_count": 5,
//                 "favorite_count": 56,
//                 "reply_count": 1,
//                 "quote_count": 1,
//                 "conversation_id": 1518521969733472300,
//                 "conversation_id_str": "1518521969733472258",
//                 "favorited": false,
//                 "retweeted": false,
//                 "lang": "tr",
//                 "supplemental_language": null,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 }
//             }
//         },
//         "users": {
//             "117493266": {
//                 "id": 117493266,
//                 "id_str": "117493266",
//                 "name": "Burtay",
//                 "screen_name": "Burtay",
//                 "location": "Ankara",
//                 "description": "İçeriklerim yatırım tavsiyesi içermemektedir.\n\nBurtay Buffet diyeceksiniz. \n\nHodler #CHZ 🌶️",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 1613,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 1613,
//                 "friends_count": 51,
//                 "listed_count": 6,
//                 "created_at": "Thu Feb 25 18:48:46 +0000 2010",
//                 "favourites_count": 3060,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": true,
//                 "verified": false,
//                 "statuses_count": 8666,
//                 "media_count": 1118,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "313091",
//                 "profile_background_image_url": "http://abs.twimg.com/images/themes/theme19/bg.gif",
//                 "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme19/bg.gif",
//                 "profile_background_tile": true,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1511732784368390145/m4QnZyW1_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1511732784368390145/m4QnZyW1_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/117493266/1649259646",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 0,
//                                 "green": 0,
//                                 "blue": 0
//                             },
//                             "percentage": 58.89
//                         },
//                         {
//                             "rgb": {
//                                 "red": 87,
//                                 "green": 17,
//                                 "blue": 189
//                             },
//                             "percentage": 21.19
//                         },
//                         {
//                             "rgb": {
//                                 "red": 47,
//                                 "green": 15,
//                                 "blue": 114
//                             },
//                             "percentage": 16.52
//                         },
//                         {
//                             "rgb": {
//                                 "red": 29,
//                                 "green": 5,
//                                 "blue": 60
//                             },
//                             "percentage": 1.43
//                         },
//                         {
//                             "rgb": {
//                                 "red": 86,
//                                 "green": 8,
//                                 "blue": 156
//                             },
//                             "percentage": 1.12
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 205,
//                                 "green": 206,
//                                 "blue": 208
//                             },
//                             "percentage": 61.08
//                         },
//                         {
//                             "rgb": {
//                                 "red": 19,
//                                 "green": 13,
//                                 "blue": 13
//                             },
//                             "percentage": 31.72
//                         },
//                         {
//                             "rgb": {
//                                 "red": 112,
//                                 "green": 117,
//                                 "blue": 137
//                             },
//                             "percentage": 5.78
//                         },
//                         {
//                             "rgb": {
//                                 "red": 208,
//                                 "green": 140,
//                                 "blue": 154
//                             },
//                             "percentage": 0.98
//                         },
//                         {
//                             "rgb": {
//                                 "red": 117,
//                                 "green": 59,
//                                 "blue": 68
//                             },
//                             "percentage": 0.71
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "054496",
//                 "profile_sidebar_border_color": "000000",
//                 "profile_sidebar_fill_color": "F6FFD1",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": false,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     847198529495994400
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "847198529495994369"
//                 ],
//                 "has_custom_timelines": true,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "smb"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1511538738": {
//                 "id": 1511538738,
//                 "id_str": "1511538738",
//                 "name": "Rain Drop Crypto",
//                 "screen_name": "RaindropCrypto",
//                 "location": "İstanbul",
//                 "description": "ITU Mining Engineer |\nFinance Specialist |\n@BeInCryptoTR Technical Analyst | https://t.co/on7BmQ4oXs | @finanskolik |\n@CryptoQuant_TR | Author\nhttps://t.co/YgZuJyzqsU |",
//                 "url": "https://t.co/VOV16Ok0NC",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/VOV16Ok0NC",
//                                 "expanded_url": "https://www.youtube.com/channel/UCKU5TP9-qeFaXjRZOlHwB6g",
//                                 "display_url": "youtube.com/channel/UCKU5T…",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/on7BmQ4oXs",
//                                 "expanded_url": "http://bitcoinsistemi.com",
//                                 "display_url": "bitcoinsistemi.com",
//                                 "indices": [
//                                     77,
//                                     100
//                                 ]
//                             },
//                             {
//                                 "url": "https://t.co/YgZuJyzqsU",
//                                 "expanded_url": "http://t.me/raindropcryptoo",
//                                 "display_url": "t.me/raindropcryptoo",
//                                 "indices": [
//                                     143,
//                                     166
//                                 ]
//                             }
//                         ]
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 48084,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 48084,
//                 "friends_count": 454,
//                 "listed_count": 273,
//                 "created_at": "Wed Jun 12 20:33:28 +0000 2013",
//                 "favourites_count": 33824,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": true,
//                 "verified": false,
//                 "statuses_count": 20205,
//                 "media_count": 2531,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "C0DEED",
//                 "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_tile": true,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1511128239053451270/afMG_p_x_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1511128239053451270/afMG_p_x_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1511538738/1641042366",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 221,
//                                 "green": 225,
//                                 "blue": 234
//                             },
//                             "percentage": 45.89
//                         },
//                         {
//                             "rgb": {
//                                 "red": 39,
//                                 "green": 50,
//                                 "blue": 73
//                             },
//                             "percentage": 26.37
//                         },
//                         {
//                             "rgb": {
//                                 "red": 100,
//                                 "green": 126,
//                                 "blue": 143
//                             },
//                             "percentage": 16.55
//                         },
//                         {
//                             "rgb": {
//                                 "red": 204,
//                                 "green": 131,
//                                 "blue": 127
//                             },
//                             "percentage": 4.54
//                         },
//                         {
//                             "rgb": {
//                                 "red": 67,
//                                 "green": 44,
//                                 "blue": 59
//                             },
//                             "percentage": 2.04
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 1,
//                                 "green": 1,
//                                 "blue": 13
//                             },
//                             "percentage": 76.56
//                         },
//                         {
//                             "rgb": {
//                                 "red": 153,
//                                 "green": 179,
//                                 "blue": 202
//                             },
//                             "percentage": 6.63
//                         },
//                         {
//                             "rgb": {
//                                 "red": 100,
//                                 "green": 83,
//                                 "blue": 166
//                             },
//                             "percentage": 4.07
//                         },
//                         {
//                             "rgb": {
//                                 "red": 220,
//                                 "green": 94,
//                                 "blue": 138
//                             },
//                             "percentage": 3.36
//                         },
//                         {
//                             "rgb": {
//                                 "red": 84,
//                                 "green": 3,
//                                 "blue": 50
//                             },
//                             "percentage": 2.73
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "0084B4",
//                 "profile_sidebar_border_color": "FFFFFF",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": false,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1329528386637734000
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1329528386637733889"
//                 ],
//                 "has_custom_timelines": true,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "2235729541": {
//                 "id": 2235729541,
//                 "id_str": "2235729541",
//                 "name": "Dogecoin",
//                 "screen_name": "dogecoin",
//                 "location": "the moon",
//                 "description": "Dogecoin is an open source peer-to-peer cryptocurrency, favored by shibas worldwide. Elon Musk thinks we're pretty cool. [RTs are not endorsements]",
//                 "url": "https://t.co/ZdsEvysjQh",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/ZdsEvysjQh",
//                                 "expanded_url": "http://dogecoin.com",
//                                 "display_url": "dogecoin.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 3193905,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 3193905,
//                 "friends_count": 12,
//                 "listed_count": 6079,
//                 "created_at": "Sun Dec 08 08:16:34 +0000 2013",
//                 "favourites_count": 59,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": true,
//                 "statuses_count": 905,
//                 "media_count": 114,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "C0DEED",
//                 "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/378800000857919980/lHqPIZza_normal.png",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000857919980/lHqPIZza_normal.png",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/2235729541/1570134480",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 186,
//                                 "green": 159,
//                                 "blue": 51
//                             },
//                             "percentage": 46.98
//                         },
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 255,
//                                 "blue": 255
//                             },
//                             "percentage": 46.5
//                         },
//                         {
//                             "rgb": {
//                                 "red": 233,
//                                 "green": 222,
//                                 "blue": 163
//                             },
//                             "percentage": 3
//                         },
//                         {
//                             "rgb": {
//                                 "red": 71,
//                                 "green": 63,
//                                 "blue": 37
//                             },
//                             "percentage": 1.71
//                         },
//                         {
//                             "rgb": {
//                                 "red": 236,
//                                 "green": 213,
//                                 "blue": 146
//                             },
//                             "percentage": 1.02
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 222,
//                                 "green": 182,
//                                 "blue": 124
//                             },
//                             "percentage": 47.97
//                         },
//                         {
//                             "rgb": {
//                                 "red": 186,
//                                 "green": 214,
//                                 "blue": 209
//                             },
//                             "percentage": 15.61
//                         },
//                         {
//                             "rgb": {
//                                 "red": 232,
//                                 "green": 147,
//                                 "blue": 145
//                             },
//                             "percentage": 10.05
//                         },
//                         {
//                             "rgb": {
//                                 "red": 2,
//                                 "green": 28,
//                                 "blue": 59
//                             },
//                             "percentage": 8.07
//                         },
//                         {
//                             "rgb": {
//                                 "red": 237,
//                                 "green": 160,
//                                 "blue": 78
//                             },
//                             "percentage": 5.65
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [],
//                 "pinned_tweet_ids_str": [],
//                 "has_custom_timelines": false,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "2398132105": {
//                 "id": 2398132105,
//                 "id_str": "2398132105",
//                 "name": "CoinTürk",
//                 "screen_name": "cointr",
//                 "location": "Türkiye",
//                 "description": "8 Yıldır Bitcoin ve Kripto Paranın Türkçesi -  Bitcoin & Crypto World News & Research Portal Since 2014",
//                 "url": "https://t.co/96DIwgSmdn",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/96DIwgSmdn",
//                                 "expanded_url": "https://coin-turk.com/",
//                                 "display_url": "coin-turk.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 98009,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 98009,
//                 "friends_count": 140,
//                 "listed_count": 745,
//                 "created_at": "Wed Mar 19 16:25:46 +0000 2014",
//                 "favourites_count": 866,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": true,
//                 "verified": false,
//                 "statuses_count": 25789,
//                 "media_count": 6556,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "C0DEED",
//                 "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_tile": true,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1494265261498712069/8I0ZPOac_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1494265261498712069/8I0ZPOac_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/2398132105/1645094581",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 52,
//                                 "green": 52,
//                                 "blue": 52
//                             },
//                             "percentage": 49.43
//                         },
//                         {
//                             "rgb": {
//                                 "red": 247,
//                                 "green": 149,
//                                 "blue": 52
//                             },
//                             "percentage": 47.8
//                         },
//                         {
//                             "rgb": {
//                                 "red": 122,
//                                 "green": 85,
//                                 "blue": 48
//                             },
//                             "percentage": 2.75
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 52,
//                                 "green": 52,
//                                 "blue": 52
//                             },
//                             "percentage": 94.4
//                         },
//                         {
//                             "rgb": {
//                                 "red": 219,
//                                 "green": 219,
//                                 "blue": 219
//                             },
//                             "percentage": 3.27
//                         },
//                         {
//                             "rgb": {
//                                 "red": 228,
//                                 "green": 99,
//                                 "blue": 83
//                             },
//                             "percentage": 0.64
//                         },
//                         {
//                             "rgb": {
//                                 "red": 129,
//                                 "green": 89,
//                                 "blue": 51
//                             },
//                             "percentage": 0.33
//                         },
//                         {
//                             "rgb": {
//                                 "red": 222,
//                                 "green": 135,
//                                 "blue": 51
//                             },
//                             "percentage": 0.33
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "FA743E",
//                 "profile_sidebar_border_color": "FFFFFF",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": false,
//                 "default_profile": false,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [],
//                 "pinned_tweet_ids_str": [],
//                 "has_custom_timelines": true,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "smb"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1336825729061937158": {
//                 "id": 1336825729061937200,
//                 "id_str": "1336825729061937158",
//                 "name": "Finanskolik",
//                 "screen_name": "finanskolik",
//                 "location": "İstanbul, Türkiye",
//                 "description": "#Ekonomi, #Finans, #Kripto ve #Spor hakkında en güncel gelişmeler.",
//                 "url": "https://t.co/51QfQCqVPc",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/51QfQCqVPc",
//                                 "expanded_url": "http://www.finanskolik.com/",
//                                 "display_url": "finanskolik.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 47888,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 47888,
//                 "friends_count": 254,
//                 "listed_count": 69,
//                 "created_at": "Thu Dec 10 00:11:22 +0000 2020",
//                 "favourites_count": 191,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 5993,
//                 "media_count": 102,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1511650656645484552/W_q6Qns0_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1511650656645484552/W_q6Qns0_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1336825729061937158/1649232354",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 137,
//                                 "green": 39,
//                                 "blue": 40
//                             },
//                             "percentage": 43.16
//                         },
//                         {
//                             "rgb": {
//                                 "red": 233,
//                                 "green": 228,
//                                 "blue": 229
//                             },
//                             "percentage": 16.57
//                         },
//                         {
//                             "rgb": {
//                                 "red": 64,
//                                 "green": 14,
//                                 "blue": 15
//                             },
//                             "percentage": 12.8
//                         },
//                         {
//                             "rgb": {
//                                 "red": 186,
//                                 "green": 55,
//                                 "blue": 59
//                             },
//                             "percentage": 11.46
//                         },
//                         {
//                             "rgb": {
//                                 "red": 150,
//                                 "green": 26,
//                                 "blue": 26
//                             },
//                             "percentage": 1.98
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 63,
//                                 "green": 12,
//                                 "blue": 13
//                             },
//                             "percentage": 40.99
//                         },
//                         {
//                             "rgb": {
//                                 "red": 135,
//                                 "green": 26,
//                                 "blue": 27
//                             },
//                             "percentage": 35.17
//                         },
//                         {
//                             "rgb": {
//                                 "red": 33,
//                                 "green": 8,
//                                 "blue": 9
//                             },
//                             "percentage": 9.9
//                         },
//                         {
//                             "rgb": {
//                                 "red": 205,
//                                 "green": 26,
//                                 "blue": 37
//                             },
//                             "percentage": 6.3
//                         },
//                         {
//                             "rgb": {
//                                 "red": 231,
//                                 "green": 123,
//                                 "blue": 123
//                             },
//                             "percentage": 4.05
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": false,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1501526193845252000
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1501526193845252096"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "smb"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1510540738081210371": {
//                 "id": 1510540738081210400,
//                 "id_str": "1510540738081210371",
//                 "name": "Ozan Yalçın",
//                 "screen_name": "YalcinnOzan",
//                 "location": "",
//                 "description": "Veindemcoin Founder",
//                 "url": "https://t.co/qxTNpn7X83",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/qxTNpn7X83",
//                                 "expanded_url": "http://veindem.net",
//                                 "display_url": "veindem.net",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 864,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 864,
//                 "friends_count": 46,
//                 "listed_count": 0,
//                 "created_at": "Sun Apr 03 08:52:49 +0000 2022",
//                 "favourites_count": 284,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 633,
//                 "media_count": 273,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1510540994047000581/z33KaqZS_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1510540994047000581/z33KaqZS_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1510540738081210371/1649764446",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 63,
//                                 "green": 63,
//                                 "blue": 97
//                             },
//                             "percentage": 64.86
//                         },
//                         {
//                             "rgb": {
//                                 "red": 86,
//                                 "green": 152,
//                                 "blue": 73
//                             },
//                             "percentage": 8.67
//                         },
//                         {
//                             "rgb": {
//                                 "red": 197,
//                                 "green": 146,
//                                 "blue": 116
//                             },
//                             "percentage": 8.16
//                         },
//                         {
//                             "rgb": {
//                                 "red": 45,
//                                 "green": 37,
//                                 "blue": 33
//                             },
//                             "percentage": 3.47
//                         },
//                         {
//                             "rgb": {
//                                 "red": 41,
//                                 "green": 22,
//                                 "blue": 128
//                             },
//                             "percentage": 1.9
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 0,
//                                 "green": 0,
//                                 "blue": 0
//                             },
//                             "percentage": 95.97
//                         },
//                         {
//                             "rgb": {
//                                 "red": 224,
//                                 "green": 224,
//                                 "blue": 224
//                             },
//                             "percentage": 2.51
//                         },
//                         {
//                             "rgb": {
//                                 "red": 117,
//                                 "green": 117,
//                                 "blue": 117
//                             },
//                             "percentage": 2.02
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1515786362804478000
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1515786362804477962"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1387497871751196672": {
//                 "id": 1387497871751196700,
//                 "id_str": "1387497871751196672",
//                 "name": "Watcher.Guru",
//                 "screen_name": "WatcherGuru",
//                 "location": "Texas, USA",
//                 "description": "Watcher Guru gives you unparalleled coverage of Crypto & NFTs in real-time | https://t.co/3ukJRR243H | Tweets Are Not Financial Advice | @BBTC | #Bitcoin",
//                 "url": "https://t.co/7LqF3L9syi",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/7LqF3L9syi",
//                                 "expanded_url": "https://watcher.guru/news/",
//                                 "display_url": "watcher.guru/news/",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/3ukJRR243H",
//                                 "expanded_url": "http://t.me/WatcherGuru",
//                                 "display_url": "t.me/WatcherGuru",
//                                 "indices": [
//                                     77,
//                                     100
//                                 ]
//                             }
//                         ]
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 808641,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 808641,
//                 "friends_count": 20,
//                 "listed_count": 1871,
//                 "created_at": "Wed Apr 28 20:04:12 +0000 2021",
//                 "favourites_count": 42913,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": true,
//                 "verified": true,
//                 "statuses_count": 6428,
//                 "media_count": 737,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1475973046133481477/AorQUcvD_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1475973046133481477/AorQUcvD_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1387497871751196672/1638581124",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 27,
//                                 "green": 196,
//                                 "blue": 105
//                             },
//                             "percentage": 75.96
//                         },
//                         {
//                             "rgb": {
//                                 "red": 36,
//                                 "green": 32,
//                                 "blue": 33
//                             },
//                             "percentage": 15.81
//                         },
//                         {
//                             "rgb": {
//                                 "red": 241,
//                                 "green": 242,
//                                 "blue": 239
//                             },
//                             "percentage": 6.63
//                         },
//                         {
//                             "rgb": {
//                                 "red": 157,
//                                 "green": 224,
//                                 "blue": 187
//                             },
//                             "percentage": 0.82
//                         },
//                         {
//                             "rgb": {
//                                 "red": 106,
//                                 "green": 210,
//                                 "blue": 154
//                             },
//                             "percentage": 0.2
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 22,
//                                 "green": 32,
//                                 "blue": 33
//                             },
//                             "percentage": 49.18
//                         },
//                         {
//                             "rgb": {
//                                 "red": 1,
//                                 "green": 228,
//                                 "blue": 110
//                             },
//                             "percentage": 30.36
//                         },
//                         {
//                             "rgb": {
//                                 "red": 219,
//                                 "green": 223,
//                                 "blue": 223
//                             },
//                             "percentage": 6.21
//                         },
//                         {
//                             "rgb": {
//                                 "red": 10,
//                                 "green": 132,
//                                 "blue": 75
//                             },
//                             "percentage": 5.41
//                         },
//                         {
//                             "rgb": {
//                                 "red": 10,
//                                 "green": 64,
//                                 "blue": 44
//                             },
//                             "percentage": 4.16
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1518431001147580400
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1518431001147580417"
//                 ],
//                 "has_custom_timelines": true,
//                 "can_dm": true,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "smb",
//                     "media_studio"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1436704075861614596": {
//                 "id": 1436704075861614600,
//                 "id_str": "1436704075861614596",
//                 "name": "AYI(BOĞA)N",
//                 "screen_name": "ayibogan_kripto",
//                 "location": "",
//                 "description": "Bilkent Mezunu 🎓 🧡 ÇEKİLİŞLER TELEGRAMDA AÇIKLANMAKTADIR 👉 https://t.co/Hfg0LqOO0L ❗️",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/Hfg0LqOO0L",
//                                 "expanded_url": "https://t.me/ayibogan_kripto",
//                                 "display_url": "t.me/ayibogan_kripto",
//                                 "indices": [
//                                     59,
//                                     82
//                                 ]
//                             }
//                         ]
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 2860,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 2860,
//                 "friends_count": 248,
//                 "listed_count": 6,
//                 "created_at": "Sat Sep 11 14:52:12 +0000 2021",
//                 "favourites_count": 154,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 46,
//                 "media_count": 5,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1505269050674499587/2whL4plG_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1505269050674499587/2whL4plG_normal.jpg",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 0,
//                                 "green": 0,
//                                 "blue": 0
//                             },
//                             "percentage": 71.28
//                         },
//                         {
//                             "rgb": {
//                                 "red": 170,
//                                 "green": 21,
//                                 "blue": 39
//                             },
//                             "percentage": 7.43
//                         },
//                         {
//                             "rgb": {
//                                 "red": 30,
//                                 "green": 199,
//                                 "blue": 95
//                             },
//                             "percentage": 5.29
//                         },
//                         {
//                             "rgb": {
//                                 "red": 94,
//                                 "green": 18,
//                                 "blue": 25
//                             },
//                             "percentage": 4.97
//                         },
//                         {
//                             "rgb": {
//                                 "red": 26,
//                                 "green": 109,
//                                 "blue": 58
//                             },
//                             "percentage": 4.72
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1516494939408019500
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1516494939408019462"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1080066391322124289": {
//                 "id": 1080066391322124300,
//                 "id_str": "1080066391322124289",
//                 "name": "Engn",
//                 "screen_name": "kripto_engin",
//                 "location": "",
//                 "description": "#Trader #Bitcoin \n\nSürekli Kendinizi Yeniden Keşfetmeli ve Geleceğe Yatırım Yapmalısınız.\n#Metaverse= Finansal Özgürlük",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 16121,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 16121,
//                 "friends_count": 21,
//                 "listed_count": 6,
//                 "created_at": "Tue Jan 01 11:41:09 +0000 2019",
//                 "favourites_count": 146435,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": true,
//                 "verified": false,
//                 "statuses_count": 1398,
//                 "media_count": 160,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1509084143178633220/JHEtv3Qq_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1509084143178633220/JHEtv3Qq_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1080066391322124289/1648627311",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 41,
//                                 "green": 53,
//                                 "blue": 61
//                             },
//                             "percentage": 35.14
//                         },
//                         {
//                             "rgb": {
//                                 "red": 124,
//                                 "green": 127,
//                                 "blue": 123
//                             },
//                             "percentage": 28.05
//                         },
//                         {
//                             "rgb": {
//                                 "red": 207,
//                                 "green": 153,
//                                 "blue": 117
//                             },
//                             "percentage": 8.03
//                         },
//                         {
//                             "rgb": {
//                                 "red": 72,
//                                 "green": 60,
//                                 "blue": 50
//                             },
//                             "percentage": 4.91
//                         },
//                         {
//                             "rgb": {
//                                 "red": 4,
//                                 "green": 184,
//                                 "blue": 37
//                             },
//                             "percentage": 2.06
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 108,
//                                 "green": 134,
//                                 "blue": 207
//                             },
//                             "percentage": 22.89
//                         },
//                         {
//                             "rgb": {
//                                 "red": 23,
//                                 "green": 40,
//                                 "blue": 86
//                             },
//                             "percentage": 22.66
//                         },
//                         {
//                             "rgb": {
//                                 "red": 223,
//                                 "green": 226,
//                                 "blue": 243
//                             },
//                             "percentage": 18.44
//                         },
//                         {
//                             "rgb": {
//                                 "red": 8,
//                                 "green": 9,
//                                 "blue": 22
//                             },
//                             "percentage": 11.97
//                         },
//                         {
//                             "rgb": {
//                                 "red": 76,
//                                 "green": 234,
//                                 "blue": 240
//                             },
//                             "percentage": 4.14
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [],
//                 "pinned_tweet_ids_str": [],
//                 "has_custom_timelines": true,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1374772688581840897": {
//                 "id": 1374772688581841000,
//                 "id_str": "1374772688581840897",
//                 "name": "SignatureDoge.1.14.5.doge",
//                 "screen_name": "SignatureDoge",
//                 "location": "#DOGEARMY + #AMCAPES  = ❤️",
//                 "description": "| #DogePalooza Community Ambassador & Core Team Member | Love and Positivity | Always keeping it 💯 |Email: Siggy@dogepalooza.com | #DogeArmy #Dogecoin | 🐕❤️🚀",
//                 "url": "https://t.co/NTwQnU6Jqv",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/NTwQnU6Jqv",
//                                 "expanded_url": "https://dogepalooza.com/",
//                                 "display_url": "dogepalooza.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 4510,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 4510,
//                 "friends_count": 583,
//                 "listed_count": 11,
//                 "created_at": "Wed Mar 24 17:18:51 +0000 2021",
//                 "favourites_count": 15328,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 7773,
//                 "media_count": 938,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1505901865237590018/xhpyJG1T_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1505901865237590018/xhpyJG1T_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1374772688581840897/1627073059",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 21,
//                                 "green": 21,
//                                 "blue": 23
//                             },
//                             "percentage": 58.15
//                         },
//                         {
//                             "rgb": {
//                                 "red": 194,
//                                 "green": 187,
//                                 "blue": 191
//                             },
//                             "percentage": 19.67
//                         },
//                         {
//                             "rgb": {
//                                 "red": 125,
//                                 "green": 57,
//                                 "blue": 62
//                             },
//                             "percentage": 9
//                         },
//                         {
//                             "rgb": {
//                                 "red": 200,
//                                 "green": 141,
//                                 "blue": 142
//                             },
//                             "percentage": 4.73
//                         },
//                         {
//                             "rgb": {
//                                 "red": 159,
//                                 "green": 46,
//                                 "blue": 61
//                             },
//                             "percentage": 1.1
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 0,
//                                 "green": 0,
//                                 "blue": 0
//                             },
//                             "percentage": 64.93
//                         },
//                         {
//                             "rgb": {
//                                 "red": 79,
//                                 "green": 48,
//                                 "blue": 20
//                             },
//                             "percentage": 7.41
//                         },
//                         {
//                             "rgb": {
//                                 "red": 209,
//                                 "green": 172,
//                                 "blue": 51
//                             },
//                             "percentage": 5.87
//                         },
//                         {
//                             "rgb": {
//                                 "red": 227,
//                                 "green": 191,
//                                 "blue": 110
//                             },
//                             "percentage": 3.11
//                         },
//                         {
//                             "rgb": {
//                                 "red": 185,
//                                 "green": 175,
//                                 "blue": 167
//                             },
//                             "percentage": 2.02
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1475932757989548000
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1475932757989548034"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1461829458868985862": {
//                 "id": 1461829458868985900,
//                 "id_str": "1461829458868985862",
//                 "name": "🔥COIN-BUY-ALERT",
//                 "screen_name": "CoinBuyAlert",
//                 "location": "",
//                 "description": "Ücretli olan botumuzun, BUY-SELL sinyallerini ücretsiz paylaşıyorum.📮Reklam ve Ücretli VIP grup için DM",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 50575,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 50575,
//                 "friends_count": 0,
//                 "listed_count": 2,
//                 "created_at": "Fri Nov 19 22:51:28 +0000 2021",
//                 "favourites_count": 260,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 327,
//                 "media_count": 91,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1517749294748549120/HHHavx9-_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1517749294748549120/HHHavx9-_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1461829458868985862/1648832178",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 219,
//                                 "green": 189,
//                                 "blue": 103
//                             },
//                             "percentage": 70.09
//                         },
//                         {
//                             "rgb": {
//                                 "red": 242,
//                                 "green": 166,
//                                 "blue": 29
//                             },
//                             "percentage": 13.43
//                         },
//                         {
//                             "rgb": {
//                                 "red": 239,
//                                 "green": 225,
//                                 "blue": 158
//                             },
//                             "percentage": 6.05
//                         },
//                         {
//                             "rgb": {
//                                 "red": 73,
//                                 "green": 63,
//                                 "blue": 34
//                             },
//                             "percentage": 5.77
//                         },
//                         {
//                             "rgb": {
//                                 "red": 143,
//                                 "green": 112,
//                                 "blue": 51
//                             },
//                             "percentage": 3.59
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 209,
//                                 "green": 70,
//                                 "blue": 77
//                             },
//                             "percentage": 38.97
//                         },
//                         {
//                             "rgb": {
//                                 "red": 48,
//                                 "green": 49,
//                                 "blue": 63
//                             },
//                             "percentage": 32.74
//                         },
//                         {
//                             "rgb": {
//                                 "red": 215,
//                                 "green": 203,
//                                 "blue": 195
//                             },
//                             "percentage": 13.35
//                         },
//                         {
//                             "rgb": {
//                                 "red": 158,
//                                 "green": 65,
//                                 "blue": 71
//                             },
//                             "percentage": 8.59
//                         },
//                         {
//                             "rgb": {
//                                 "red": 244,
//                                 "green": 90,
//                                 "blue": 63
//                             },
//                             "percentage": 1.04
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [],
//                 "pinned_tweet_ids_str": [],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1353637182184050689": {
//                 "id": 1353637182184050700,
//                 "id_str": "1353637182184050689",
//                 "name": "DogeCoin Ride📈",
//                 "screen_name": "DogecoinRide",
//                 "location": "To The Moon 🌕",
//                 "description": "Let’s Get #dogecoin to 1$ in 2022 📈 #dogecoinarmy (NOT Affiliated WITH @DOGECOIN)",
//                 "url": "https://t.co/W1adUPL6xO",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/W1adUPL6xO",
//                                 "expanded_url": "https://dogecoin.com",
//                                 "display_url": "dogecoin.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 488217,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 488217,
//                 "friends_count": 84,
//                 "listed_count": 385,
//                 "created_at": "Mon Jan 25 09:33:58 +0000 2021",
//                 "favourites_count": 3018,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": true,
//                 "verified": false,
//                 "statuses_count": 4365,
//                 "media_count": 508,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1493203482551230467/SQJtHAgE_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1493203482551230467/SQJtHAgE_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1353637182184050689/1638339471",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 0,
//                                 "green": 0,
//                                 "blue": 254
//                             },
//                             "percentage": 64.59
//                         },
//                         {
//                             "rgb": {
//                                 "red": 215,
//                                 "green": 187,
//                                 "blue": 114
//                             },
//                             "percentage": 16.8
//                         },
//                         {
//                             "rgb": {
//                                 "red": 234,
//                                 "green": 224,
//                                 "blue": 190
//                             },
//                             "percentage": 5.13
//                         },
//                         {
//                             "rgb": {
//                                 "red": 73,
//                                 "green": 70,
//                                 "blue": 58
//                             },
//                             "percentage": 2.31
//                         },
//                         {
//                             "rgb": {
//                                 "red": 202,
//                                 "green": 209,
//                                 "blue": 225
//                             },
//                             "percentage": 1.95
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 14,
//                                 "green": 10,
//                                 "blue": 33
//                             },
//                             "percentage": 72.98
//                         },
//                         {
//                             "rgb": {
//                                 "red": 194,
//                                 "green": 242,
//                                 "blue": 65
//                             },
//                             "percentage": 14.19
//                         },
//                         {
//                             "rgb": {
//                                 "red": 108,
//                                 "green": 130,
//                                 "blue": 59
//                             },
//                             "percentage": 6.32
//                         },
//                         {
//                             "rgb": {
//                                 "red": 57,
//                                 "green": 69,
//                                 "blue": 38
//                             },
//                             "percentage": 4.27
//                         },
//                         {
//                             "rgb": {
//                                 "red": 164,
//                                 "green": 196,
//                                 "blue": 79
//                             },
//                             "percentage": 1.51
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1503804592693432300
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1503804592693432325"
//                 ],
//                 "has_custom_timelines": true,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1173076639258800129": {
//                 "id": 1173076639258800000,
//                 "id_str": "1173076639258800129",
//                 "name": "Crypto_Yugi",
//                 "screen_name": "crypto_yugi",
//                 "location": "",
//                 "description": "do you like money? do you like sleep? why not invest in cryptocurrency & make money while you sleep 💁🏽 #Dogecoinrise #doonlygoodeveryday 🐕🚀",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 412,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 412,
//                 "friends_count": 500,
//                 "listed_count": 46,
//                 "created_at": "Sun Sep 15 03:30:56 +0000 2019",
//                 "favourites_count": 39617,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 13803,
//                 "media_count": 642,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1456141867393847297/56L-ic8R_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1456141867393847297/56L-ic8R_normal.jpg",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 205,
//                                 "green": 187,
//                                 "blue": 143
//                             },
//                             "percentage": 29.71
//                         },
//                         {
//                             "rgb": {
//                                 "red": 16,
//                                 "green": 9,
//                                 "blue": 12
//                             },
//                             "percentage": 16.98
//                         },
//                         {
//                             "rgb": {
//                                 "red": 206,
//                                 "green": 182,
//                                 "blue": 200
//                             },
//                             "percentage": 12.33
//                         },
//                         {
//                             "rgb": {
//                                 "red": 104,
//                                 "green": 77,
//                                 "blue": 151
//                             },
//                             "percentage": 6.09
//                         },
//                         {
//                             "rgb": {
//                                 "red": 96,
//                                 "green": 40,
//                                 "blue": 35
//                             },
//                             "percentage": 3.93
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1385002363094651000
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1385002363094650880"
//                 ],
//                 "has_custom_timelines": true,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1402748818857287690": {
//                 "id": 1402748818857287700,
//                 "id_str": "1402748818857287690",
//                 "name": "Balina Avcısı",
//                 "screen_name": "WhaleHunterSS",
//                 "location": "",
//                 "description": "Analiz yapmıyorum #balina #Sinyali paylaşıyorum.\n\nPaylaşımlarım Yatırım Tavsiyesi Değildir!\n\nCanlı yayınlar için: https://t.co/DIPT7CBvwK",
//                 "url": "https://t.co/mt2t1U5GL4",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/mt2t1U5GL4",
//                                 "expanded_url": "https://whalehuntapp.com/",
//                                 "display_url": "whalehuntapp.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/DIPT7CBvwK",
//                                 "expanded_url": "http://twitch.tv/whalehunterss",
//                                 "display_url": "twitch.tv/whalehunterss",
//                                 "indices": [
//                                     114,
//                                     137
//                                 ]
//                             }
//                         ]
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 41959,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 41959,
//                 "friends_count": 15,
//                 "listed_count": 137,
//                 "created_at": "Wed Jun 09 22:06:06 +0000 2021",
//                 "favourites_count": 13448,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 4427,
//                 "media_count": 822,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1402749050391257091/J0QiBbT3_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1402749050391257091/J0QiBbT3_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1402748818857287690/1623922688",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 29,
//                                 "green": 26,
//                                 "blue": 46
//                             },
//                             "percentage": 65.92
//                         },
//                         {
//                             "rgb": {
//                                 "red": 36,
//                                 "green": 163,
//                                 "blue": 223
//                             },
//                             "percentage": 22.41
//                         },
//                         {
//                             "rgb": {
//                                 "red": 142,
//                                 "green": 180,
//                                 "blue": 201
//                             },
//                             "percentage": 6.63
//                         },
//                         {
//                             "rgb": {
//                                 "red": 149,
//                                 "green": 112,
//                                 "blue": 112
//                             },
//                             "percentage": 1.47
//                         },
//                         {
//                             "rgb": {
//                                 "red": 209,
//                                 "green": 119,
//                                 "blue": 90
//                             },
//                             "percentage": 1.35
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 102,
//                                 "green": 154,
//                                 "blue": 177
//                             },
//                             "percentage": 74.75
//                         },
//                         {
//                             "rgb": {
//                                 "red": 36,
//                                 "green": 49,
//                                 "blue": 68
//                             },
//                             "percentage": 11.86
//                         },
//                         {
//                             "rgb": {
//                                 "red": 245,
//                                 "green": 244,
//                                 "blue": 237
//                             },
//                             "percentage": 10.83
//                         },
//                         {
//                             "rgb": {
//                                 "red": 128,
//                                 "green": 128,
//                                 "blue": 136
//                             },
//                             "percentage": 1.93
//                         },
//                         {
//                             "rgb": {
//                                 "red": 131,
//                                 "green": 119,
//                                 "blue": 143
//                             },
//                             "percentage": 0.56
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1419274930856894500
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1419274930856894469"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1204793886192930819": {
//                 "id": 1204793886192930800,
//                 "id_str": "1204793886192930819",
//                 "name": "New Listing",
//                 "screen_name": "newliisting",
//                 "location": "Türkiye",
//                 "description": "🍁Listelemeleri toplayıp en kısa sürede paylaşan hesap\n🍁Yeni çıkmış sağlam projelere kısa sürede ulaşım\n🍁For promotion DM",
//                 "url": "https://t.co/rX3ZesIZSz",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/rX3ZesIZSz",
//                                 "expanded_url": "https://t.me/newlistinggg",
//                                 "display_url": "t.me/newlistinggg",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 95914,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 95914,
//                 "friends_count": 189,
//                 "listed_count": 273,
//                 "created_at": "Wed Dec 11 16:03:52 +0000 2019",
//                 "favourites_count": 2805,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 4912,
//                 "media_count": 526,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1428481559942860803/IT07JKel_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1428481559942860803/IT07JKel_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1204793886192930819/1629411421",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 182,
//                                 "green": 194,
//                                 "blue": 246
//                             },
//                             "percentage": 80.68
//                         },
//                         {
//                             "rgb": {
//                                 "red": 71,
//                                 "green": 92,
//                                 "blue": 168
//                             },
//                             "percentage": 8.22
//                         },
//                         {
//                             "rgb": {
//                                 "red": 252,
//                                 "green": 252,
//                                 "blue": 251
//                             },
//                             "percentage": 4.6
//                         },
//                         {
//                             "rgb": {
//                                 "red": 229,
//                                 "green": 65,
//                                 "blue": 63
//                             },
//                             "percentage": 3.15
//                         },
//                         {
//                             "rgb": {
//                                 "red": 193,
//                                 "green": 69,
//                                 "blue": 85
//                             },
//                             "percentage": 0.64
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 182,
//                                 "green": 194,
//                                 "blue": 246
//                             },
//                             "percentage": 87.46
//                         },
//                         {
//                             "rgb": {
//                                 "red": 102,
//                                 "green": 124,
//                                 "blue": 225
//                             },
//                             "percentage": 12.54
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1513556657212698600
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1513556657212698624"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "700402738434281472": {
//                 "id": 700402738434281500,
//                 "id_str": "700402738434281472",
//                 "name": "Uzmancoin",
//                 "screen_name": "uzmancoin",
//                 "location": "İstanbul, Türkiye",
//                 "description": "Uzmancoin, #Bitcoin, #blockchain ve kripto para birimleri hakkında haber, bilgi ve analizler sunar.",
//                 "url": "https://t.co/xgNjSzobjf",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/xgNjSzobjf",
//                                 "expanded_url": "http://uzmancoin.com",
//                                 "display_url": "uzmancoin.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 267645,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 267645,
//                 "friends_count": 606,
//                 "listed_count": 1490,
//                 "created_at": "Thu Feb 18 19:33:20 +0000 2016",
//                 "favourites_count": 1385,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": true,
//                 "verified": false,
//                 "statuses_count": 15447,
//                 "media_count": 1680,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "000000",
//                 "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1347632965258522629/4yqNZoen_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1347632965258522629/4yqNZoen_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/700402738434281472/1552309511",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 239,
//                                 "green": 71,
//                                 "blue": 35
//                             },
//                             "percentage": 53.45
//                         },
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 255,
//                                 "blue": 255
//                             },
//                             "percentage": 42.65
//                         },
//                         {
//                             "rgb": {
//                                 "red": 239,
//                                 "green": 162,
//                                 "blue": 143
//                             },
//                             "percentage": 2.11
//                         },
//                         {
//                             "rgb": {
//                                 "red": 233,
//                                 "green": 114,
//                                 "blue": 86
//                             },
//                             "percentage": 1.39
//                         },
//                         {
//                             "rgb": {
//                                 "red": 231,
//                                 "green": 97,
//                                 "blue": 61
//                             },
//                             "percentage": 0.3
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 2,
//                                 "green": 36,
//                                 "blue": 81
//                             },
//                             "percentage": 72.31
//                         },
//                         {
//                             "rgb": {
//                                 "red": 36,
//                                 "green": 124,
//                                 "blue": 170
//                             },
//                             "percentage": 13.12
//                         },
//                         {
//                             "rgb": {
//                                 "red": 58,
//                                 "green": 72,
//                                 "blue": 82
//                             },
//                             "percentage": 2.63
//                         },
//                         {
//                             "rgb": {
//                                 "red": 100,
//                                 "green": 219,
//                                 "blue": 246
//                             },
//                             "percentage": 1.73
//                         },
//                         {
//                             "rgb": {
//                                 "red": 1,
//                                 "green": 37,
//                                 "blue": 87
//                             },
//                             "percentage": 1.67
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "BE1E2D",
//                 "profile_sidebar_border_color": "000000",
//                 "profile_sidebar_fill_color": "000000",
//                 "profile_text_color": "000000",
//                 "profile_use_background_image": false,
//                 "has_extended_profile": false,
//                 "default_profile": false,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1104783272901570600
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1104783272901570561"
//                 ],
//                 "has_custom_timelines": true,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "smb"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1348755697262096386": {
//                 "id": 1348755697262096400,
//                 "id_str": "1348755697262096386",
//                 "name": "𝐎𝐜𝐭𝐨𝐩𝐮𝐬 🐙",
//                 "screen_name": "0xctopusNFT",
//                 "location": "",
//                 "description": "*️⃣ ᴡᴇ ᴀʀᴇ ʜᴇʀᴇ ғᴏʀ ʏᴏᴜ 🐙\n*️⃣ ɴғᴛ ᴘʀᴏᴊᴇᴄᴛ ᴘʀᴏᴍᴏᴛᴇʀ 💜\n*️⃣ ᴅᴀɪʟʏ ɢɪᴠᴇᴀᴡᴀʏs 🎁\n*️⃣ ᴅᴍ ғᴏʀ ᴄᴏʟʟᴀʙᴏʀᴀᴛɪᴏɴ 📩\n\n#️⃣ #NFT #Giveaway #Promos",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 16955,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 16955,
//                 "friends_count": 38,
//                 "listed_count": 8,
//                 "created_at": "Mon Jan 11 22:16:45 +0000 2021",
//                 "favourites_count": 8962,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 335,
//                 "media_count": 56,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1508170816843882504/FjTRAryl_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1508170816843882504/FjTRAryl_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1348755697262096386/1648410917",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 3,
//                                 "green": 34,
//                                 "blue": 81
//                             },
//                             "percentage": 40.7
//                         },
//                         {
//                             "rgb": {
//                                 "red": 13,
//                                 "green": 38,
//                                 "blue": 133
//                             },
//                             "percentage": 18.27
//                         },
//                         {
//                             "rgb": {
//                                 "red": 12,
//                                 "green": 68,
//                                 "blue": 100
//                             },
//                             "percentage": 10.36
//                         },
//                         {
//                             "rgb": {
//                                 "red": 8,
//                                 "green": 46,
//                                 "blue": 224
//                             },
//                             "percentage": 6.82
//                         },
//                         {
//                             "rgb": {
//                                 "red": 6,
//                                 "green": 11,
//                                 "blue": 85
//                             },
//                             "percentage": 3.63
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 14,
//                                 "green": 33,
//                                 "blue": 74
//                             },
//                             "percentage": 42.66
//                         },
//                         {
//                             "rgb": {
//                                 "red": 60,
//                                 "green": 42,
//                                 "blue": 105
//                             },
//                             "percentage": 15.61
//                         },
//                         {
//                             "rgb": {
//                                 "red": 133,
//                                 "green": 75,
//                                 "blue": 122
//                             },
//                             "percentage": 6.14
//                         },
//                         {
//                             "rgb": {
//                                 "red": 80,
//                                 "green": 37,
//                                 "blue": 221
//                             },
//                             "percentage": 5.16
//                         },
//                         {
//                             "rgb": {
//                                 "red": 72,
//                                 "green": 41,
//                                 "blue": 178
//                             },
//                             "percentage": 3.8
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1517935675064131600
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1517935675064131584"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1401986196750934021": {
//                 "id": 1401986196750934000,
//                 "id_str": "1401986196750934021",
//                 "name": "Sedat Yılmaz",
//                 "screen_name": "SedatYl36675397",
//                 "location": "",
//                 "description": "Araştırmacı Analist Youtuber Ekonomi Finans Altın Gümüş kripto paralar bitcoin,xrp,dogecoin @ElonMusk ,shiba,eth...",
//                 "url": "https://t.co/HQPboIumPX",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/HQPboIumPX",
//                                 "expanded_url": "https://youtube.com/channel/UCJ5gxkyh3GghkKPpluUCxIA",
//                                 "display_url": "youtube.com/channel/UCJ5gx…",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 7913,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 7913,
//                 "friends_count": 117,
//                 "listed_count": 11,
//                 "created_at": "Mon Jun 07 19:35:50 +0000 2021",
//                 "favourites_count": 243,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 1190,
//                 "media_count": 233,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1483240828344668166/mJTE8E54_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1483240828344668166/mJTE8E54_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1401986196750934021/1633726469",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 172,
//                                 "green": 178,
//                                 "blue": 198
//                             },
//                             "percentage": 28.61
//                         },
//                         {
//                             "rgb": {
//                                 "red": 176,
//                                 "green": 131,
//                                 "blue": 93
//                             },
//                             "percentage": 26.59
//                         },
//                         {
//                             "rgb": {
//                                 "red": 38,
//                                 "green": 25,
//                                 "blue": 18
//                             },
//                             "percentage": 10.15
//                         },
//                         {
//                             "rgb": {
//                                 "red": 243,
//                                 "green": 220,
//                                 "blue": 175
//                             },
//                             "percentage": 5.61
//                         },
//                         {
//                             "rgb": {
//                                 "red": 211,
//                                 "green": 130,
//                                 "blue": 60
//                             },
//                             "percentage": 5.49
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 11,
//                                 "green": 16,
//                                 "blue": 13
//                             },
//                             "percentage": 59.36
//                         },
//                         {
//                             "rgb": {
//                                 "red": 8,
//                                 "green": 52,
//                                 "blue": 24
//                             },
//                             "percentage": 8.98
//                         },
//                         {
//                             "rgb": {
//                                 "red": 171,
//                                 "green": 176,
//                                 "blue": 194
//                             },
//                             "percentage": 8.5
//                         },
//                         {
//                             "rgb": {
//                                 "red": 184,
//                                 "green": 135,
//                                 "blue": 97
//                             },
//                             "percentage": 8.34
//                         },
//                         {
//                             "rgb": {
//                                 "red": 120,
//                                 "green": 74,
//                                 "blue": 51
//                             },
//                             "percentage": 3.62
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [],
//                 "pinned_tweet_ids_str": [],
//                 "has_custom_timelines": false,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1336970124696424448": {
//                 "id": 1336970124696424400,
//                 "id_str": "1336970124696424448",
//                 "name": "Profesör Coin",
//                 "screen_name": "CoinProfesor",
//                 "location": "Moneymore, Northern Ireland",
//                 "description": "Win Win!!! Gate üyelik: https://t.co/Gz4C7eOdaW",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/Gz4C7eOdaW",
//                                 "expanded_url": "https://www.gate.io/signup/3258861",
//                                 "display_url": "gate.io/signup/3258861",
//                                 "indices": [
//                                     24,
//                                     47
//                                 ]
//                             }
//                         ]
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 8693,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 8693,
//                 "friends_count": 2,
//                 "listed_count": 45,
//                 "created_at": "Thu Dec 10 09:45:03 +0000 2020",
//                 "favourites_count": 2287,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 8834,
//                 "media_count": 614,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1336972326546661378/OG0qDDrr_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1336972326546661378/OG0qDDrr_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1336970124696424448/1648714986",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 2,
//                                 "green": 2,
//                                 "blue": 2
//                             },
//                             "percentage": 66.56
//                         },
//                         {
//                             "rgb": {
//                                 "red": 182,
//                                 "green": 160,
//                                 "blue": 132
//                             },
//                             "percentage": 16.78
//                         },
//                         {
//                             "rgb": {
//                                 "red": 169,
//                                 "green": 32,
//                                 "blue": 34
//                             },
//                             "percentage": 13.18
//                         },
//                         {
//                             "rgb": {
//                                 "red": 74,
//                                 "green": 12,
//                                 "blue": 12
//                             },
//                             "percentage": 2.56
//                         },
//                         {
//                             "rgb": {
//                                 "red": 36,
//                                 "green": 37,
//                                 "blue": 32
//                             },
//                             "percentage": 0.11
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 32,
//                                 "green": 82,
//                                 "blue": 39
//                             },
//                             "percentage": 54.41
//                         },
//                         {
//                             "rgb": {
//                                 "red": 16,
//                                 "green": 29,
//                                 "blue": 17
//                             },
//                             "percentage": 20.77
//                         },
//                         {
//                             "rgb": {
//                                 "red": 57,
//                                 "green": 149,
//                                 "blue": 75
//                             },
//                             "percentage": 13.97
//                         },
//                         {
//                             "rgb": {
//                                 "red": 127,
//                                 "green": 197,
//                                 "blue": 14
//                             },
//                             "percentage": 2.07
//                         },
//                         {
//                             "rgb": {
//                                 "red": 80,
//                                 "green": 123,
//                                 "blue": 20
//                             },
//                             "percentage": 1.04
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1337055960330866700
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1337055960330866698"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1515668159868588055": {
//                 "id": 1515668159868588000,
//                 "id_str": "1515668159868588055",
//                 "name": "Alfa | NFT Promoter 📩",
//                 "screen_name": "AlfaNFTpromoter",
//                 "location": "MΞTAVERSE",
//                 "description": "🐺 | Promoter | Marketer | Researcher | Writer\n\nDM For Promos and Campaigns 📥",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 6202,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 6202,
//                 "friends_count": 12,
//                 "listed_count": 1,
//                 "created_at": "Sun Apr 17 12:27:34 +0000 2022",
//                 "favourites_count": 42,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 97,
//                 "media_count": 13,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1515669490524172294/eHZr2LrO_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1515669490524172294/eHZr2LrO_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1515668159868588055/1650199113",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 17,
//                                 "green": 17,
//                                 "blue": 17
//                             },
//                             "percentage": 55.36
//                         },
//                         {
//                             "rgb": {
//                                 "red": 137,
//                                 "green": 142,
//                                 "blue": 153
//                             },
//                             "percentage": 29.33
//                         },
//                         {
//                             "rgb": {
//                                 "red": 100,
//                                 "green": 102,
//                                 "blue": 114
//                             },
//                             "percentage": 1.3
//                         },
//                         {
//                             "rgb": {
//                                 "red": 70,
//                                 "green": 8,
//                                 "blue": 10
//                             },
//                             "percentage": 0.15
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 12,
//                                 "green": 44,
//                                 "blue": 69
//                             },
//                             "percentage": 59.56
//                         },
//                         {
//                             "rgb": {
//                                 "red": 28,
//                                 "green": 102,
//                                 "blue": 165
//                             },
//                             "percentage": 32.3
//                         },
//                         {
//                             "rgb": {
//                                 "red": 5,
//                                 "green": 15,
//                                 "blue": 24
//                             },
//                             "percentage": 3.38
//                         },
//                         {
//                             "rgb": {
//                                 "red": 62,
//                                 "green": 107,
//                                 "blue": 149
//                             },
//                             "percentage": 2.62
//                         },
//                         {
//                             "rgb": {
//                                 "red": 12,
//                                 "green": 57,
//                                 "blue": 105
//                             },
//                             "percentage": 1.04
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": false,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1518332016168689700
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1518332016168689667"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1243159200315977730": {
//                 "id": 1243159200315977700,
//                 "id_str": "1243159200315977730",
//                 "name": "Kripto Mikrofon 🎤 💯",
//                 "screen_name": "KriptoMikrofon",
//                 "location": "",
//                 "description": "Çekiliş ve YouTube Kanalı Sponsor Olmak için DM'den Bize Ulaşın 🔥\nYatırım Ve Finansal Tavsiyesi Değildir 💯\nYouTube Linkimiz Buyrun ⤵️⤵️⤵️⤵️⤵️⤵️⤵️⤵️⤵️⤵️⤵️",
//                 "url": "https://t.co/q62ExL0ayC",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/q62ExL0ayC",
//                                 "expanded_url": "https://youtube.com/c/KriptoMikrofonTr",
//                                 "display_url": "youtube.com/c/KriptoMikrof…",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 1014,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 1014,
//                 "friends_count": 897,
//                 "listed_count": 95,
//                 "created_at": "Thu Mar 26 12:53:53 +0000 2020",
//                 "favourites_count": 2927,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 704,
//                 "media_count": 259,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1449349328116588544/55XyILKs_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1449349328116588544/55XyILKs_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1243159200315977730/1640725176",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 31,
//                                 "green": 31,
//                                 "blue": 31
//                             },
//                             "percentage": 50.51
//                         },
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 222,
//                                 "blue": 89
//                             },
//                             "percentage": 32.53
//                         },
//                         {
//                             "rgb": {
//                                 "red": 180,
//                                 "green": 149,
//                                 "blue": 208
//                             },
//                             "percentage": 4.27
//                         },
//                         {
//                             "rgb": {
//                                 "red": 252,
//                                 "green": 245,
//                                 "blue": 224
//                             },
//                             "percentage": 3.31
//                         },
//                         {
//                             "rgb": {
//                                 "red": 246,
//                                 "green": 226,
//                                 "blue": 131
//                             },
//                             "percentage": 2.18
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 216,
//                                 "blue": 59
//                             },
//                             "percentage": 83.47
//                         },
//                         {
//                             "rgb": {
//                                 "red": 220,
//                                 "green": 175,
//                                 "blue": 95
//                             },
//                             "percentage": 3.18
//                         },
//                         {
//                             "rgb": {
//                                 "red": 33,
//                                 "green": 33,
//                                 "blue": 33
//                             },
//                             "percentage": 2.87
//                         },
//                         {
//                             "rgb": {
//                                 "red": 109,
//                                 "green": 42,
//                                 "blue": 216
//                             },
//                             "percentage": 1.76
//                         },
//                         {
//                             "rgb": {
//                                 "red": 132,
//                                 "green": 69,
//                                 "blue": 192
//                             },
//                             "percentage": 1.11
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [],
//                 "pinned_tweet_ids_str": [],
//                 "has_custom_timelines": true,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1442769719644327936": {
//                 "id": 1442769719644328000,
//                 "id_str": "1442769719644327936",
//                 "name": "NoEvilMonkeys MINT IS LIVE",
//                 "screen_name": "NoEvilMonkeys_",
//                 "location": "Urban Jungle",
//                 "description": "We are the Good Vibe Family! Surround yourself with open minded #NFT lovers - Join and become part of our family, let’s have fun! 🙊🙈🙉 https://t.co/KLmTmKJama",
//                 "url": "https://t.co/lz2casVKxd",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/lz2casVKxd",
//                                 "expanded_url": "https://seenoevilmonkeyart.com",
//                                 "display_url": "seenoevilmonkeyart.com",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/KLmTmKJama",
//                                 "expanded_url": "http://discord.gg/noevilmonkey",
//                                 "display_url": "discord.gg/noevilmonkey",
//                                 "indices": [
//                                     134,
//                                     157
//                                 ]
//                             }
//                         ]
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 7762,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 7762,
//                 "friends_count": 338,
//                 "listed_count": 12,
//                 "created_at": "Tue Sep 28 08:34:59 +0000 2021",
//                 "favourites_count": 328,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 8,
//                 "media_count": 4,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1514625909030100997/DwG6ebDi_normal.png",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1514625909030100997/DwG6ebDi_normal.png",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1442769719644327936/1649949933",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 131,
//                                 "blue": 136
//                             },
//                             "percentage": 49.74
//                         },
//                         {
//                             "rgb": {
//                                 "red": 248,
//                                 "green": 244,
//                                 "blue": 230
//                             },
//                             "percentage": 19.63
//                         },
//                         {
//                             "rgb": {
//                                 "red": 156,
//                                 "green": 203,
//                                 "blue": 239
//                             },
//                             "percentage": 13.82
//                         },
//                         {
//                             "rgb": {
//                                 "red": 66,
//                                 "green": 65,
//                                 "blue": 66
//                             },
//                             "percentage": 8.36
//                         },
//                         {
//                             "rgb": {
//                                 "red": 205,
//                                 "green": 234,
//                                 "blue": 145
//                             },
//                             "percentage": 3.35
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 252,
//                                 "blue": 135
//                             },
//                             "percentage": 46.89
//                         },
//                         {
//                             "rgb": {
//                                 "red": 150,
//                                 "green": 193,
//                                 "blue": 226
//                             },
//                             "percentage": 14.19
//                         },
//                         {
//                             "rgb": {
//                                 "red": 227,
//                                 "green": 227,
//                                 "blue": 225
//                             },
//                             "percentage": 13.55
//                         },
//                         {
//                             "rgb": {
//                                 "red": 101,
//                                 "green": 101,
//                                 "blue": 102
//                             },
//                             "percentage": 7.89
//                         },
//                         {
//                             "rgb": {
//                                 "red": 147,
//                                 "green": 149,
//                                 "blue": 104
//                             },
//                             "percentage": 5.2
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": false,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1516343457958215700
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1516343457958215682"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "reseller"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1353761464977416194": {
//                 "id": 1353761464977416200,
//                 "id_str": "1353761464977416194",
//                 "name": "Bitkolink Grafik 🇹🇷 ☄",
//                 "screen_name": "bitkolink",
//                 "location": "",
//                 "description": "🇹🇷 Burada yazılan , grafikler  haberler yorumlar Yatırım tavsiyesi değildir\n \nSadece twitter ve Youtube hesabım var ...\n''  #bitcoin  #ETH  ''   👇 #Bat #shıb",
//                 "url": "https://t.co/8lDRy1hUAJ",
//                 "entities": {
//                     "url": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/8lDRy1hUAJ",
//                                 "expanded_url": "https://www.youtube.com/channel/UCF9CQ6--c5k-imtM0NUfBng",
//                                 "display_url": "youtube.com/channel/UCF9CQ…",
//                                 "indices": [
//                                     0,
//                                     23
//                                 ]
//                             }
//                         ]
//                     },
//                     "description": {
//                         "urls": []
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 4151,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 4151,
//                 "friends_count": 249,
//                 "listed_count": 12,
//                 "created_at": "Mon Jan 25 17:47:51 +0000 2021",
//                 "favourites_count": 9184,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 5457,
//                 "media_count": 1770,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1512803661977694208/X5HZgFPu_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1512803661977694208/X5HZgFPu_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1353761464977416194/1650360911",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 255,
//                                 "blue": 255
//                             },
//                             "percentage": 72.72
//                         },
//                         {
//                             "rgb": {
//                                 "red": 253,
//                                 "green": 215,
//                                 "blue": 3
//                             },
//                             "percentage": 15.02
//                         },
//                         {
//                             "rgb": {
//                                 "red": 6,
//                                 "green": 4,
//                                 "blue": 3
//                             },
//                             "percentage": 9.14
//                         },
//                         {
//                             "rgb": {
//                                 "red": 211,
//                                 "green": 184,
//                                 "blue": 62
//                             },
//                             "percentage": 1.53
//                         },
//                         {
//                             "rgb": {
//                                 "red": 82,
//                                 "green": 62,
//                                 "blue": 15
//                             },
//                             "percentage": 0.67
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 255,
//                                 "green": 255,
//                                 "blue": 255
//                             },
//                             "percentage": 80.34
//                         },
//                         {
//                             "rgb": {
//                                 "red": 176,
//                                 "green": 255,
//                                 "blue": 110
//                             },
//                             "percentage": 6.8
//                         },
//                         {
//                             "rgb": {
//                                 "red": 123,
//                                 "green": 143,
//                                 "blue": 197
//                             },
//                             "percentage": 5.05
//                         },
//                         {
//                             "rgb": {
//                                 "red": 55,
//                                 "green": 86,
//                                 "blue": 169
//                             },
//                             "percentage": 2.63
//                         },
//                         {
//                             "rgb": {
//                                 "red": 173,
//                                 "green": 205,
//                                 "blue": 150
//                             },
//                             "percentage": 2.25
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1515801254106222600
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1515801254106222593"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": true,
//                 "can_media_tag": false,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "promotable_user",
//                 "advertiser_account_service_levels": [
//                     "analytics"
//                 ],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             },
//             "1505863193247297537": {
//                 "id": 1505863193247297500,
//                 "id_str": "1505863193247297537",
//                 "name": "Airdrop",
//                 "screen_name": "airdropzeo",
//                 "location": "",
//                 "description": "Hergün telegram kanalımda \n20'den fazla Airdrop paylaşıyorum ücretsiz şekilde Airdrop lara katılarak çok iyi ödüller kazana bilirsiniz.\n https://t.co/HGhuvEdGPh",
//                 "url": null,
//                 "entities": {
//                     "description": {
//                         "urls": [
//                             {
//                                 "url": "https://t.co/HGhuvEdGPh",
//                                 "expanded_url": "https://t.me/Airdroppww",
//                                 "display_url": "t.me/Airdroppww",
//                                 "indices": [
//                                     137,
//                                     160
//                                 ]
//                             }
//                         ]
//                     }
//                 },
//                 "protected": false,
//                 "followers_count": 62,
//                 "fast_followers_count": 0,
//                 "normal_followers_count": 62,
//                 "friends_count": 698,
//                 "listed_count": 0,
//                 "created_at": "Mon Mar 21 11:05:50 +0000 2022",
//                 "favourites_count": 955,
//                 "utc_offset": null,
//                 "time_zone": null,
//                 "geo_enabled": false,
//                 "verified": false,
//                 "statuses_count": 2130,
//                 "media_count": 458,
//                 "lang": null,
//                 "contributors_enabled": false,
//                 "is_translator": false,
//                 "is_translation_enabled": false,
//                 "profile_background_color": "F5F8FA",
//                 "profile_background_image_url": null,
//                 "profile_background_image_url_https": null,
//                 "profile_background_tile": false,
//                 "profile_image_url": "http://pbs.twimg.com/profile_images/1517922905425952769/EpC43FWK_normal.jpg",
//                 "profile_image_url_https": "https://pbs.twimg.com/profile_images/1517922905425952769/EpC43FWK_normal.jpg",
//                 "profile_banner_url": "https://pbs.twimg.com/profile_banners/1505863193247297537/1650736239",
//                 "profile_image_extensions_sensitive_media_warning": null,
//                 "profile_image_extensions_media_availability": null,
//                 "profile_image_extensions_alt_text": null,
//                 "profile_image_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 8,
//                                 "green": 19,
//                                 "blue": 70
//                             },
//                             "percentage": 69.93
//                         },
//                         {
//                             "rgb": {
//                                 "red": 8,
//                                 "green": 3,
//                                 "blue": 44
//                             },
//                             "percentage": 9.93
//                         },
//                         {
//                             "rgb": {
//                                 "red": 207,
//                                 "green": 219,
//                                 "blue": 231
//                             },
//                             "percentage": 4.39
//                         },
//                         {
//                             "rgb": {
//                                 "red": 189,
//                                 "green": 149,
//                                 "blue": 76
//                             },
//                             "percentage": 3.96
//                         },
//                         {
//                             "rgb": {
//                                 "red": 85,
//                                 "green": 99,
//                                 "blue": 140
//                             },
//                             "percentage": 3.3
//                         }
//                     ]
//                 },
//                 "profile_image_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_banner_extensions_sensitive_media_warning": null,
//                 "profile_banner_extensions_media_availability": null,
//                 "profile_banner_extensions_alt_text": null,
//                 "profile_banner_extensions_media_color": {
//                     "palette": [
//                         {
//                             "rgb": {
//                                 "red": 222,
//                                 "green": 215,
//                                 "blue": 10
//                             },
//                             "percentage": 28.09
//                         },
//                         {
//                             "rgb": {
//                                 "red": 203,
//                                 "green": 155,
//                                 "blue": 24
//                             },
//                             "percentage": 19.44
//                         },
//                         {
//                             "rgb": {
//                                 "red": 173,
//                                 "green": 238,
//                                 "blue": 252
//                             },
//                             "percentage": 7.21
//                         },
//                         {
//                             "rgb": {
//                                 "red": 38,
//                                 "green": 32,
//                                 "blue": 22
//                             },
//                             "percentage": 6.83
//                         },
//                         {
//                             "rgb": {
//                                 "red": 160,
//                                 "green": 157,
//                                 "blue": 29
//                             },
//                             "percentage": 4.87
//                         }
//                     ]
//                 },
//                 "profile_banner_extensions": {
//                     "mediaStats": {
//                         "r": {
//                             "missing": null
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "profile_link_color": "1DA1F2",
//                 "profile_sidebar_border_color": "C0DEED",
//                 "profile_sidebar_fill_color": "DDEEF6",
//                 "profile_text_color": "333333",
//                 "profile_use_background_image": true,
//                 "has_extended_profile": true,
//                 "default_profile": true,
//                 "default_profile_image": false,
//                 "pinned_tweet_ids": [
//                     1517926572409471000
//                 ],
//                 "pinned_tweet_ids_str": [
//                     "1517926572409470977"
//                 ],
//                 "has_custom_timelines": false,
//                 "can_dm": false,
//                 "can_media_tag": true,
//                 "following": false,
//                 "follow_request_sent": false,
//                 "notifications": false,
//                 "muting": false,
//                 "blocking": false,
//                 "blocked_by": false,
//                 "want_retweets": false,
//                 "advertiser_account_type": "none",
//                 "advertiser_account_service_levels": [],
//                 "profile_interstitial_type": "",
//                 "business_profile_state": "none",
//                 "translator_type": "none",
//                 "withheld_in_countries": [],
//                 "followed_by": false,
//                 "ext_has_nft_avatar": false,
//                 "ext": {
//                     "superFollowMetadata": {
//                         "r": {
//                             "ok": {
//                                 "superFollowEligible": false,
//                                 "superFollowing": false,
//                                 "superFollowedBy": false,
//                                 "exclusiveTweetFollowing": false,
//                                 "privateSuperFollowing": false
//                             }
//                         },
//                         "ttl": -1
//                     },
//                     "highlightedLabel": {
//                         "r": {
//                             "ok": {}
//                         },
//                         "ttl": -1
//                     },
//                     "hasNftAvatar": {
//                         "r": {
//                             "ok": false
//                         },
//                         "ttl": -1
//                     }
//                 },
//                 "require_some_consent": false
//             }
//         },
//         "moments": {},
//         "cards": {},
//         "places": {},
//         "media": {},
//         "broadcasts": {},
//         "topics": {
//             "1139229372198469633": {
//                 "id": "1139229372198469633",
//                 "name": "Dogecoin",
//                 "following": false,
//                 "description": "Kripto para",
//                 "not_interested": false,
//                 "icon_url": "https://ton.twimg.com/topics/topic_icon/default_v3_12.png"
//             }
//         },
//         "lists": {}
//     },
//     "timeline": {
//         "id": "search-6924299406485548394",
//         "instructions": [
//             {
//                 "addEntries": {
//                     "entries": [
//                         {
//                             "entryId": "sq-FE--1072333909",
//                             "sortIndex": "999990",
//                             "content": {
//                                 "timelineModule": {
//                                     "items": [
//                                         {
//                                             "entryId": "sq-MI-fe-1139229372198469633",
//                                             "item": {
//                                                 "content": {
//                                                     "topic": {
//                                                         "topicId": "1139229372198469633",
//                                                         "topicFunctionalityType": "Basic",
//                                                         "topicDisplayType": "NoIcon"
//                                                     }
//                                                 },
//                                                 "clientEventInfo": {
//                                                     "component": "topic_module",
//                                                     "element": "topic",
//                                                     "details": {
//                                                         "timelinesDetails": {
//                                                             "controllerData": "DAACDAAFDAABDAABDAADCgABD89bE/+UwAECAAIACAADAAAACQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA=",
//                                                             "sourceData": "1139229372198469633"
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     ],
//                                     "displayType": "Vertical",
//                                     "header": {
//                                         "text": "İlgili Konu",
//                                         "socialContext": {
//                                             "generalContext": {
//                                                 "contextType": "Topic",
//                                                 "text": "Bunun hakkındaki popüler Tweetleri gör"
//                                             }
//                                         },
//                                         "icon": "TOPIC_FILLED",
//                                         "displayType": "Classic"
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "topic_module"
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518353746597658626",
//                             "sortIndex": "999980",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518353746597658626",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518519677902860290",
//                             "sortIndex": "999970",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518519677902860290",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAUKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1516506062664638464",
//                             "sortIndex": "999960",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1516506062664638464",
//                                             "displayType": "Tweet",
//                                             "promotedMetadata": {
//                                                 "advertiserId": "1442769719644327936",
//                                                 "impressionId": "301b1e4ab0d2b647",
//                                                 "disclosureType": "NoDisclosure",
//                                                 "experimentValues": {},
//                                                 "promotedTrendId": "0",
//                                                 "clickTrackingInfo": {
//                                                     "urlParams": {
//                                                         "twclid": "2-3xqpuo1szxl6cmgqmdbam5phz"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAAKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518533686202937345",
//                             "sortIndex": "999950",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518533686202937345",
//                                             "displayType": "Tweet",
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 107,
//                                                         "endIndex": 115
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAAKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518205993846464514",
//                             "sortIndex": "999940",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518205993846464514",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-M-1-4944c3e5",
//                             "sortIndex": "999930",
//                             "content": {
//                                 "timelineModule": {
//                                     "items": [
//                                         {
//                                             "entryId": "sq-MI-u-2235729541",
//                                             "item": {
//                                                 "content": {
//                                                     "user": {
//                                                         "id": "2235729541",
//                                                         "displayType": "UserDetailed"
//                                                     }
//                                                 },
//                                                 "clientEventInfo": {
//                                                     "component": "user_module",
//                                                     "element": "user",
//                                                     "details": {
//                                                         "timelinesDetails": {
//                                                             "controllerData": "DAACDAAFDAABDAABDAACCgABAAAAAAAAAAAAAAwAAgoAAQAAAAAAAAChCgACyLG7lWCZegkLAAMAAAAIRG9nZWNvaW4KAAUi3803KMjEDgAAAAAA"
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         },
//                                         {
//                                             "entryId": "sq-MI-u-1353637182184050689",
//                                             "item": {
//                                                 "content": {
//                                                     "user": {
//                                                         "id": "1353637182184050689",
//                                                         "displayType": "UserDetailed"
//                                                     }
//                                                 },
//                                                 "clientEventInfo": {
//                                                     "component": "user_module",
//                                                     "element": "user",
//                                                     "details": {
//                                                         "timelinesDetails": {
//                                                             "controllerData": "DAACDAAFDAABDAABDAACCgABAAAAAAAAAAAAAAwAAgoAAQAAAAAAAAChCgACyLG7lWCZegkLAAMAAAAIRG9nZWNvaW4KAAUi3803KMjEDgAAAAAA"
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         },
//                                         {
//                                             "entryId": "sq-MI-u-1505863193247297537",
//                                             "item": {
//                                                 "content": {
//                                                     "user": {
//                                                         "id": "1505863193247297537",
//                                                         "displayType": "UserDetailed"
//                                                     }
//                                                 },
//                                                 "clientEventInfo": {
//                                                     "component": "user_module",
//                                                     "element": "user",
//                                                     "details": {
//                                                         "timelinesDetails": {
//                                                             "controllerData": "DAACDAAFDAABDAABDAACCgABAAAAAAAAAAAAAAwAAgoAAQAAAAAAAAChCgACyLG7lWCZegkLAAMAAAAIRG9nZWNvaW4KAAUi3803KMjEDgAAAAAA"
//                                                         }
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     ],
//                                     "displayType": "Vertical",
//                                     "header": {
//                                         "text": "Kişiler",
//                                         "sticky": true,
//                                         "displayType": "Classic"
//                                     },
//                                     "footer": {
//                                         "text": "Tümünü görüntüle",
//                                         "url": "twitter://search?query=Dogecoin&src=typed_query&type=users",
//                                         "displayType": "Classic"
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "user_module",
//                                         "element": "module"
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518508455358832640",
//                             "sortIndex": "999920",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518508455358832640",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1517986442261184515",
//                             "sortIndex": "999910",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1517986442261184515",
//                                             "displayType": "Tweet",
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 1,
//                                                         "endIndex": 9
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAgAAKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518268758464344072",
//                             "sortIndex": "999900",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518268758464344072",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAEQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518521969733472258",
//                             "sortIndex": "999890",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518521969733472258",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             },
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 120,
//                                                         "endIndex": 128
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518313118199341057",
//                             "sortIndex": "999880",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518313118199341057",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAEQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518295928872001539",
//                             "sortIndex": "999870",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518295928872001539",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAEQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518337981068816387",
//                             "sortIndex": "999860",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518337981068816387",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAEQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518052091662458887",
//                             "sortIndex": "999850",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518052091662458887",
//                                             "displayType": "Tweet",
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 54,
//                                                         "endIndex": 62
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAgEAKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518347334064738306",
//                             "sortIndex": "999840",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518347334064738306",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             },
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 14,
//                                                         "endIndex": 22
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518175706341064705",
//                             "sortIndex": "999830",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518175706341064705",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             },
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 53,
//                                                         "endIndex": 61
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518181363983298560",
//                             "sortIndex": "999820",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518181363983298560",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1517974920982106116",
//                             "sortIndex": "999810",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1517974920982106116",
//                                             "displayType": "Tweet",
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 57,
//                                                         "endIndex": 65
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAgEAKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518293371944591368",
//                             "sortIndex": "999800",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518293371944591368",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518337392679206915",
//                             "sortIndex": "999790",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518337392679206915",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518275927117115394",
//                             "sortIndex": "999780",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518275927117115394",
//                                             "displayType": "Tweet",
//                                             "socialContext": {
//                                                 "generalContext": {
//                                                     "contextType": "Topic",
//                                                     "text": "Dogecoin",
//                                                     "landingUrl": {
//                                                         "urlType": "DeepLink",
//                                                         "url": "twitter://topics_timeline?id=1139229372198469633"
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAQKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-I-t-1518510213518794752",
//                             "sortIndex": "999770",
//                             "content": {
//                                 "item": {
//                                     "content": {
//                                         "tweet": {
//                                             "id": "1518510213518794752",
//                                             "displayType": "Tweet",
//                                             "highlights": {
//                                                 "textHighlights": [
//                                                     {
//                                                         "startIndex": 230,
//                                                         "endIndex": 238
//                                                     }
//                                                 ]
//                                             }
//                                         }
//                                     },
//                                     "clientEventInfo": {
//                                         "component": "result",
//                                         "element": "tweet",
//                                         "details": {
//                                             "timelinesDetails": {
//                                                 "controllerData": "DAACDAAFDAABDAABDAABCgABAAAAAAAAAAAKAAIPz1sT/5TAAQAADAACCgABAAAAAAAAAKEKAALIsbuVYJl6CQsAAwAAAAhEb2dlY29pbgoABSLfzTcoyMQOAAAAAAA="
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-cursor-top",
//                             "sortIndex": "999999999",
//                             "content": {
//                                 "operation": {
//                                     "cursor": {
//                                         "value": "refresh:thGAVUV0VFVBYBFoDg87X2xuCQKhIYvAESY8LrAAAB9D-AYk3S8an8AAAAFRUSRrAdVkACFRDuJecXEAQVEf_pWtewAhUSD8cLlmAIFRH5ZEXXMAgVEt-vnZcQAhUS6leRlzABFRE0VZoUYAcVEkDbFJcQAhUS02UOFyAAFRHATr8WYAIVEPigaNZAAxUS1P5olyAAFRI4WWqXMAMVEjfQa9ZAAxUSIbyUFmABFRISGmBWYAMVEanoKNewABULtjqs2iAAFRGkwuMWQAEVEt2aAdcwAmEVtIV6FYCJehgGVE9QSUNTNSoVABUAAA==",
//                                         "cursorType": "Top"
//                                     }
//                                 }
//                             }
//                         },
//                         {
//                             "entryId": "sq-cursor-bottom",
//                             "sortIndex": "0",
//                             "content": {
//                                 "operation": {
//                                     "cursor": {
//                                         "value": "scroll:thGAVUV0VFVBYBFoDg87X2xuCQKhIYvAESY8LrAAAB9D-AYk3S8an8AAAAFRUSRrAdVkACFRDuJecXEAQVEf_pWtewAhUSD8cLlmAIFRH5ZEXXMAgVEt-vnZcQAhUS6leRlzABFRE0VZoUYAcVEkDbFJcQAhUS02UOFyAAFRHATr8WYAIVEPigaNZAAxUS1P5olyAAFRI4WWqXMAMVEjfQa9ZAAxUSIbyUFmABFRISGmBWYAMVEanoKNewABULtjqs2iAAFRGkwuMWQAEVEt2aAdcwAmEVtIV6FYCJehgGVE9QSUNTNSoVABUAAA==",
//                                         "cursorType": "Bottom"
//                                     }
//                                 }
//                             }
//                         }
//                     ]
//                 }
//             }
//         ]
//     }
// }

const initialstate = {
    search:[],
}
export const searchReducer = (state = initialstate, {type, payload}) => {
    switch(type){
        case TweetTypes.SEARCH_TWEET:
            return {...state, search:payload}
        default:
            return state;
    }
}
