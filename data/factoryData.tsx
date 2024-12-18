import * as FormatData from "./interfaceFormat"


export const iconCodeList = [
    { code: 1000, day: "sunny", night: "clear" },
    { code: 1003, day: "partly-cloudy", night: "partly-cloudy" },
    { code: 1006, day: "cloudy", night: "cloudy" },
    { code: 1009, day: "overcast", night: "overcast" },
    { code: 1030, day: "mist", night: "mist" },
    { code: 1063, day: "patchy-rain-nearby", night: "patchy-rain-nearby" },
    { code: 1066, day: "patchy-snow-nearby", night: "patchy-snow-nearby" },
    { code: 1069, day: "patchy-sleet-nearby", night: "patchy-sleet-nearby" },
    { code: 1072, day: "patchy-freezing-drizzle-nearby", night: "patchy-freezing-drizzle-nearby" },
    { code: 1087, day: "thundery-outbreaks-in-nearby", night: "thundery-outbreaks-in-nearby" },
    { code: 1114, day: "blowing-snow", night: "blowing-snow" },
    { code: 1117, day: "blizzard", night: "blizzard" },
    { code: 1135, day: "fog", night: "fog" },
    { code: 1147, day: "freezing-fog", night: "freezing-fog" },
    { code: 1150, day: "patchy-light-drizzle", night: "patchy-light-drizzle" },
    { code: 1153, day: "light-drizzle", night: "light-drizzle" },
    { code: 1168, day: "freezing-drizzle", night: "freezing-drizzle" },
    { code: 1171, day: "heavy-freezing-drizzle", night: "heavy-freezing-drizzle" },
    { code: 1180, day: "patchy-light-rain", night: "patchy-light-rain" },
    { code: 1183, day: "light-rain", night: "light-rain" },
    { code: 1186, day: "moderate-rain-at-times", night: "moderate-rain-at-times" },
    { code: 1189, day: "moderate-rain", night: "moderate-rain" },
    { code: 1192, day: "heavy-rain-at-times", night: "heavy-rain-at-times" },
    { code: 1195, day: "heavy-rain", night: "heavy-rain" },
    { code: 1198, day: "light-freezing-rain", night: "light-freezing-rain" },
    { code: 1201, day: "moderate-or-heavy-freezing-rain", night: "moderate-or-heavy-freezing-rain" },
    { code: 1204, day: "light-sleet", night: "light-sleet" },
    { code: 1207, day: "moderate-or-heavy-sleet", night: "moderate-or-heavy-sleet" },
    { code: 1210, day: "patchy-light-snow", night: "patchy-light-snow" },
    { code: 1213, day: "light-snow", night: "light-snow" },
    { code: 1216, day: "patchy-moderate-snow", night: "patchy-moderate-snow" },
    { code: 1219, day: "moderate-snow", night: "moderate-snow" },
    { code: 1222, day: "patchy-heavy-snow", night: "patchy-heavy-snow" },
    { code: 1225, day: "heavy-snow", night: "heavy-snow" },
    { code: 1237, day: "ice-pellets", night: "ice-pellets" },
    { code: 1240, day: "light-rain-shower", night: "light-rain-shower" },
    { code: 1243, day: "moderate-or-heavy-rain-shower", night: "moderate-or-heavy-rain-shower" },
    { code: 1246, day: "torrential-rain-shower", night: "torrential-rain-shower" },
    { code: 1249, day: "light-sleet-showers", night: "light-sleet-showers" },
    { code: 1252, day: "moderate-or-heavy-sleet-showers", night: "moderate-or-heavy-sleet-showers" },
    { code: 1255, day: "light-snow-showers", night: "light-snow-showers" },
    { code: 1258, day: "moderate-or-heavy-snow-showers", night: "moderate-or-heavy-snow-showers" },
    { code: 1261, day: "light-showers-of-ice-pellets", night: "light-showers-of-ice-pellets" },
    { code: 1264, day: "moderate-or-heavy-showers-of-ice-pellets", night: "moderate-or-heavy-showers-of-ice-pellets" },
    { code: 1273, day: "patchy-light-rain-in-area-with-thunder", night: "patchy-light-rain-in-area-with-thunder" },
    { code: 1276, day: "moderate-or-heavy-rain-in-area-with-thunder", night: "moderate-or-heavy-rain-in-area-with-thunder" },
    { code: 1279, day: "patchy-light-snow-in-area-with-thunder", night: "patchy-light-snow-in-area-with-thunder" },
    { code: 1282, day: "moderate-or-heavy-snow-in-area-with-thunder", night: "moderate-or-heavy-snow-in-area-with-thunder" },
]

export const iconRequireList = {
    "d1000": require('../assets/photos/weather/Day/sunny.png'),
    "n1000": require('../assets/photos/weather/Night/clear.png'),
    "d1003": require('../assets/photos/weather/Day/partly_cloudy.png'),
    "n1003": require('../assets/photos/weather/Night/partly_cloudy.png'),
    "d1006": require('../assets/photos/weather/Day/cloudy.png'),
    "n1006": require('../assets/photos/weather/Night/cloudy.png'),
    "d1009": require('../assets/photos/weather/Day/overcast.png'),
    "n1009": require('../assets/photos/weather/Night/overcast.png'),
    "d1030": require('../assets/photos/weather/Day/mist.png'),
    "n1030": require('../assets/photos/weather/Night/mist.png'),
    "d1063": require('../assets/photos/weather/Day/patchy_rain_nearby.png'),
    "n1063": require('../assets/photos/weather/Night/patchy_rain_nearby.png'),
    "d1066": require('../assets/photos/weather/Day/patchy_snow_nearby.png'),
    "n1066": require('../assets/photos/weather/Night/patchy_snow_nearby.png'),
    "d1069": require('../assets/photos/weather/Day/patchy_sleet_nearby.png'),
    "n1069": require('../assets/photos/weather/Night/patchy_sleet_nearby.png'),
    "d1072": require('../assets/photos/weather/Day/patchy_freezing_drizzle_nearby.png'),
    "n1072": require('../assets/photos/weather/Night/patchy_freezing_drizzle_nearby.png'),
    "d1087": require('../assets/photos/weather/Day/thundery_outbreaks_in_nearby.png'),
    "n1087": require('../assets/photos/weather/Night/thundery_outbreaks_in_nearby.png'),
    "d1114": require('../assets/photos/weather/Day/blowing_snow.png'),
    "n1114": require('../assets/photos/weather/Night/blowing_snow.png'),
    "d1117": require('../assets/photos/weather/Day/blizzard.png'),
    "n1117": require('../assets/photos/weather/Night/blizzard.png'),
    "d1135": require('../assets/photos/weather/Day/fog.png'),
    "n1135": require('../assets/photos/weather/Night/fog.png'),
    "d1147": require('../assets/photos/weather/Day/freezing_fog.png'),
    "n1147": require('../assets/photos/weather/Night/freezing_fog.png'),
    "d1150": require('../assets/photos/weather/Day/patchy_light_drizzle.png'),
    "n1150": require('../assets/photos/weather/Night/patchy_light_drizzle.png'),
    "d1153": require('../assets/photos/weather/Day/light_drizzle.png'),
    "n1153": require('../assets/photos/weather/Night/light_drizzle.png'),
    "d1168": require('../assets/photos/weather/Day/freezing_drizzle.png'),
    "n1168": require('../assets/photos/weather/Night/freezing_drizzle.png'),
    "d1171": require('../assets/photos/weather/Day/heavy_freezing_drizzle.png'),
    "n1171": require('../assets/photos/weather/Night/heavy_freezing_drizzle.png'),
    "d1180": require('../assets/photos/weather/Day/patchy_light_rain.png'),
    "n1180": require('../assets/photos/weather/Night/patchy_light_rain.png'),
    "d1183": require('../assets/photos/weather/Day/light_rain.png'),
    "n1183": require('../assets/photos/weather/Night/light_rain.png'),
    "d1186": require('../assets/photos/weather/Day/moderate_rain_at_times.png'),
    "n1186": require('../assets/photos/weather/Night/moderate_rain_at_times.png'),
    "d1189": require('../assets/photos/weather/Day/moderate_rain.png'),
    "n1189": require('../assets/photos/weather/Night/moderate_rain.png'),
    "d1192": require('../assets/photos/weather/Day/heavy_rain_at_times.png'),
    "n1192": require('../assets/photos/weather/Night/heavy_rain_at_times.png'),
    "d1195": require('../assets/photos/weather/Day/heavy_rain.png'),
    "n1195": require('../assets/photos/weather/Night/heavy_rain.png'),
    "d1198": require('../assets/photos/weather/Day/light_freezing_rain.png'),
    "n1198": require('../assets/photos/weather/Night/light_freezing_rain.png'),
    "d1201": require('../assets/photos/weather/Day/moderate_or_heavy_freezing_rain.png'),
    "n1201": require('../assets/photos/weather/Night/moderate_or_heavy_freezing_rain.png'),
    "d1204": require('../assets/photos/weather/Day/light_sleet.png'),
    "n1204": require('../assets/photos/weather/Night/light_sleet.png'),
    "d1207": require('../assets/photos/weather/Day/moderate_or_heavy_sleet.png'),
    "n1207": require('../assets/photos/weather/Night/moderate_or_heavy_sleet.png'),
    "d1210": require('../assets/photos/weather/Day/patchy_light_snow.png'),
    "n1210": require('../assets/photos/weather/Night/patchy_light_snow.png'),
    "d1213": require('../assets/photos/weather/Day/light_snow.png'),
    "n1213": require('../assets/photos/weather/Night/light_snow.png'),
    "d1216": require('../assets/photos/weather/Day/patchy_moderate_snow.png'),
    "n1216": require('../assets/photos/weather/Night/patchy_moderate_snow.png'),
    "d1219": require('../assets/photos/weather/Day/moderate_snow.png'),
    "n1219": require('../assets/photos/weather/Night/moderate_snow.png'),
    "d1222": require('../assets/photos/weather/Day/patchy_heavy_snow.png'),
    "n1222": require('../assets/photos/weather/Night/patchy_heavy_snow.png'),
    "d1225": require('../assets/photos/weather/Day/heavy_snow.png'),
    "n1225": require('../assets/photos/weather/Night/heavy_snow.png'),
    "d1237": require('../assets/photos/weather/Day/ice_pellets.png'),
    "n1237": require('../assets/photos/weather/Night/ice_pellets.png'),
    "d1240": require('../assets/photos/weather/Day/light_rain_shower.png'),
    "n1240": require('../assets/photos/weather/Night/light_rain_shower.png'),
    "d1243": require('../assets/photos/weather/Day/moderate_or_heavy_rain_shower.png'),
    "n1243": require('../assets/photos/weather/Night/moderate_or_heavy_rain_shower.png'),
    "d1246": require('../assets/photos/weather/Day/torrential_rain_shower.png'),
    "n1246": require('../assets/photos/weather/Night/torrential_rain_shower.png'),
    "d1249": require('../assets/photos/weather/Day/light_sleet_showers.png'),
    "n1249": require('../assets/photos/weather/Night/light_sleet_showers.png'),
    "d1252": require('../assets/photos/weather/Day/moderate_or_heavy_sleet_showers.png'),
    "n1252": require('../assets/photos/weather/Night/moderate_or_heavy_sleet_showers.png'),
    "d1255": require('../assets/photos/weather/Day/light_snow_showers.png'),
    "n1255": require('../assets/photos/weather/Night/light_snow_showers.png'),
    "d1258": require('../assets/photos/weather/Day/moderate_or_heavy_snow_showers.png'),
    "n1258": require('../assets/photos/weather/Night/moderate_or_heavy_snow_showers.png'),
    "d1261": require('../assets/photos/weather/Day/light_showers_of_ice_pellets.png'),
    "n1261": require('../assets/photos/weather/Night/light_showers_of_ice_pellets.png'),
    "d1264": require('../assets/photos/weather/Day/moderate_or_heavy_showers_of_ice_pellets.png'),
    "n1264": require('../assets/photos/weather/Night/moderate_or_heavy_showers_of_ice_pellets.png'),
    "d1273": require('../assets/photos/weather/Day/patchy_light_rain_in_area_with_thunder.png'),
    "n1273": require('../assets/photos/weather/Night/patchy_light_rain_in_area_with_thunder.png'),
    "d1276": require('../assets/photos/weather/Day/moderate_or_heavy_rain_in_area_with_thunder.png'),
    "n1276": require('../assets/photos/weather/Night/moderate_or_heavy_rain_in_area_with_thunder.png'),
    "d1279": require('../assets/photos/weather/Day/patchy_light_snow_in_area_with_thunder.png'),
    "n1279": require('../assets/photos/weather/Night/patchy_light_snow_in_area_with_thunder.png'),
    "d1282": require('../assets/photos/weather/Day/moderate_or_heavy_snow_in_area_with_thunder.png'),
    "n1282": require('../assets/photos/weather/Night/moderate_or_heavy_snow_in_area_with_thunder.png'),
}

export const careActivityName = [
    'Tưới cây',
    'Bón phân',
    'Thay đất',
    'Xới đất',
    'Tỉa lá',
]

export const ProUserList: FormatData.ProUserFormat[] = [
    {
        name: 'Lê Anh Tuấn',
        role: 'Ths nông nghiệp',
        sex: 'male',
        pro: 'tree1',
    },
    {
        name: 'Phạm Bá Quang',
        role: 'Ths nông nghiệp',
        sex: 'male',
        pro: 'tree2'
    },
    {
        name: 'Vũ Khánh Linh',
        role: 'TS nông nghiệp',
        sex: 'female',
        pro: 'tree2',
    },
    {
        name: 'Nguyễn Văn Thành',
        role: 'TS nông nghiệp',
        sex: 'male',
        pro: 'tree3',
    }

]

export const careRepeatMode = [[1, 'Hằng ngày'], [2, 'Hằng tuần'], [3, 'Hằng tháng'], [4, 'Thứ hai'], [5, 'Thứ ba'], [6, 'Thứ tư'], [7, 'Thứ năm'], [8, 'Thứ sáu'], [9, 'Thứ bảy'], [10, 'Chủ nhật'],]

export const treeData: FormatData.TreeDataFormat[] = [
    {
        img: require('../assets/photos/tree/tree1.png'),
        name: `Xương rồng`,
        careRate: `Trung bình`,
        grownTime: `3-4 tháng`,
        careFreq: `5 - 10 ngày`,
        description: [
            `Mô tả về cây`,
            `Cấu Trúc: Cây có thân dạng xương rồng với các cành phát triển theo hình dáng một đám mây xanh.Thân và các cành thường chứa gai hoặc lông.`,
            `Đặc Điểm Sinh Học: Xương rồng thích ứng với môi trường khô hanh và có khả năng tích tụ nước trong thân.`,
            `Thời gian ra hoa và ra quả`,
            `Mùa Hoa: Ra hoa thường vào mùa xuân hoặc mùa hè.`,
            `Mùa Quả: Xương rồng có thể ra quả sau khi hoa rụng vào mùa hè.`,
            `Đặc điểm sinh học`,
            `Vùng Sinh Sống: Phổ biến ở các khu vực khô cằn như vùng sa mạc hoặc khu vực có đất khô ráo.`,
            `Sức khoẻ và bệnh gây hại`,
            `Bệnh Hại Thường Gặp: Có thể bị nhiễm một số loại nấm hoặc sâu bệnh khi thân xương rồng ẩm ướt hoặc trong điều kiện ẩm.`,
            `Cách Xử Lý Các Vấn Đề Sức Khỏe: Cắt bỏ các phần bị nhiễm bệnh và diệt sâu bệnh nếu cần.`,
        ],
        careDetail: [
            `Yêu cầu về đất đai và độ ẩm`,
            `Cây xương rồng thích đất thoát nước tốt, không cần nhiều nước và có thể sống trong đất cạn.`,
            `Cách chăm sóc`,
            `Tưới Nước: Cần tưới nước một cách thận trọng, tránh tưới quá nhiều vì có thể gây thối rễ.`,
            `Ánh Sáng và Nhiệt Độ: Cần ánh sáng mặt trời nhiều và chịu được nhiệt độ cao.`,
            `Phương pháp tưới nước`,
            `Sử dụng phương pháp tưới nhỏ giọt hoặc tưới nước từ phía dưới để tránh làm ẩm quá nhiều phần trên của cây và đặc biệt là không làm ẩm lá.`,
            `Đảm bảo đất thoát nước tốt để tránh việc nước ướt đọng quá lâu gây thối rễ cho cây.`,
        ],
        schedule: [
            `Lịch tưới nước`,
            `Tưới nước cây xương rồng cần tuân thủ nguyên tắc ít nhưng đều để tránh làm ẩm quá mức đất và gây hại cho cây.`,
            `Trong mùa xuân và mùa hè(khi cây đang ở trạng thái sinh trưởng hoặc ra hoa), có thể tưới nước một lần mỗi 10 - 14 ngày.`,
            `Trong mùa đông hoặc khi nhiệt độ thấp hơn, giảm tần suất tưới nước, chỉ tưới nước một lần mỗi 4 - 6 tuần.`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree2.png'),
        name: `Cây xương rồng mặt trăng`,
        careRate: `Trung bình`,
        grownTime: `3 - 4 tháng`,
        careFreq: `5 - 10 ngày`,
        description: [
            `Mô tả về cây`,
            [
                `Xương rồng Ruby Ball ​​hay còn gọi là xương rồng mặt trăng là một mẫu cây được ghép. `,
                `Cây có phần trên cùng màu đỏ, cam hoặc vàng sặc sỡ, phần ký chủ của cây xương rồng xanh thấp hơn có thể là bất kỳ loài nào nhưng thường là xương rồng Hylocereus. `,
                `Những cây này hiếm khi tồn tại lâu hơn một vài năm, vì phần cành ghép trên và phần gốc ghép phía dưới phát triển với tốc độ khác nhau.Điều này cuối cùng có thể phá hủy sự liên kết ghép giữa hai phần.Tuy nhiên, không khó để tách cành ghép và ghép vào cây xương rồng gốc ghép mới.`,
            ],
            `Thời gian ra hoa và ra quả`,
            `Mùa Hoa: Ra hoa thường vào mùa xuân hoặc mùa hè.`,
            `Đặc điểm sinh học`,
            `Vùng Sinh Sống: Vì là cây được ghép nên cây không có nguồn gốc nhất định từ tự nhiên`,
            `Sức khoẻ và bệnh gây hại`,
            `Bệnh Hại Thường Gặp: Rệp Sáp, Thối gốc, đốm than, ...`,
            `Cách Xử Lý Các Vấn Đề Sức Khỏe:`,
            [
                `Dùng bàn chải đánh rệp ra khỏi cây và sử dụng thuốc diệt côn trùng`,
                `Cắt bỏ những phần cây bị thối rữa`,
                `Tưới nước một cách điều độ`,
            ],
        ],
        careDetail: [
            `Yêu cầu về đất đại và độ ẩm:`,
            [
                `đất: Sử dụng hỗn hợp đất thoát nước tốt.Tránh đất ẩm ướt sau khi tưới.`,
                `Độ ẩm: Giống như các loài xương rồng khác, cây xưởng rồng mặt trăng cũng thích môi trường khô cằn, nên duy trì độ ẩm khoảng 40 % cho cây`,
            ],

            `Chăm sóc`,
            [
                `Nước: Tưới thường xuyên trong giai đoạn phát triển, nhưng để cho đất khô gần hết trước khi tưới lại.Không cần tưới thường xuyên vào mùa đông.`,
                `Ánh sáng: Cây xương rồng Ruby Ball thích ánh sáng mặt trời.Trong mùa hè, hãy che chắn cây khỏi nắng nóng để tránh mất hoa.`,
                `Nhiệt độ: Nhiệt độ phù hợp trồng xương rồng là khoảng từ 10 – 50 độ C.Trong đó, nhiệt độ thích hợp nhất để cây phát triển khỏe mạnh, tươi tốt là từ 15 – 28 độ C.`,
                `Bón phân: Sử dụng phân bón chuyên dụng cho cây xương rồng, thường là loại phân bón dạng lỏng hoặc phân hạt tan chậm.Bón phân vào mùa xuân và mùa hè khi cây đang ở trong giai đoạn phát triển mạnh.Giảm hoặc ngừng bón phân vào mùa thu và mùa đông.`,
            ],
        ],
        schedule: [
            `lịch tưới: 1 tuần / lần`,
            `lịch bón: 2 - 3 lần / năm vào các mùa xuân và hè`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree3.png'),
        name: `Cây cá vàng`,
        careRate: `Trung bình`,
        grownTime: ``,
        careFreq: `2-3 ngày`,
        description: [
            `Mô tả về cây`,
            [
                `Cây cá vàng có chiều cao trung bình từ 20 - 30 cm và tán lá rộng khoảng 30 - 40 cm.`,
                `Lá cây cá vàng có màu xanh thẫm, bóng nhẵn, mặt dưới lá pha chút mảng đỏ. `,
                `Lá mọc đối xứng từng đôi với nhau, tạo nét sang trọng và tươi mới cho không gian nào trong nhà.`,
                `Hoa của cây cá vàng mọc ở trên nách lá.Hoa có màu cam đỏ, vàng cam rực rỡ, giống như những con cá vàng đang bơi trong ao.Cuống hoa dài vươn ra khỏi nhánh, tạo thêm nét duyên dáng cho cây.`,
                `Quả của cây cá vàng có kích thước bằng đầu ngón tay út người lớn, hình tròn và màu vàng cam khá đẹp mắt.`,
            ],
            `Thời gian ra hoa và quả`,
            [
                `Hoa của cây cá vàng nở quanh năm`,
                `Cây cá vàng thường đậu quả vào mùa hè`,
            ],
            `Vùng sinh sống: Cây cá vàng hay thường được gọi là cây may mắn là một loại cây thân thảo có tên khoa học là Nematanthus wettsteinii, thuộc họ Gesneriaceae.Loại cây này có nguồn gốc bắt nguồn từ Tây Ấn, Mexico, Trung và Nam Mỹ.Hiện nay, cây cá vàng khá phổ biến ở các nước nhiệt đới, trong đó có Việt Nam.`,
            `Sức khoẻ và bệnh gây hại`,
            `Bệnh Hại Thường Gặp: Bệnh đốm trắng, các loại sâu bệnh, Bệnh nấm trắng, ...`,
            `Cách Xử Lý Các Vấn Đề Sức Khỏe:`,
            [
                `Sử dụng thuốc trừ sâu`,
                `Cắt bỏ những lá có bệnh`,
            ],
        ],
        careDetail: [
            `Yêu cầu về đất đai và độ ẩm`,
            `Đất: Nó giống như một ruộng lúa đầy sức chứa mà chứa nước nhưng vẫn chảy nhanh.`,
            `Độ ẩm: duy trì độ ẩm khoảng từ 70 - 80 %`,
            `Cách chăm sóc`,
            `Ánh sáng: Đặt cây cá vàng trong ánh sáng, nhưng bảo vệ nó khỏi ánh sáng mặt trời trực tiếp.Đặt cây trồng cách cửa sổ sáng vài bước, hoặc đặt nó bên cạnh một cửa sổ phủ một bức màn tuyệt đẹp.`,
            `Nước: Cung cấp nước cho cây  thường xuyên, và tránh để cho đất khô. `,
            `Nhiệt độ: Giữ cho cây trong phòng ấm và không để nhiệt độ giảm xuống dưới 15ºC.Không đặt cây gần các lỗ thông hơi sưởi ấm hoặc điều hòa không khí, và bảo vệ cây khỏi các bản nháp lạnh.`,
            `Phân bón: Hãy bón phân cho cây cá vàng mỗi hai tuần vào mùa xuân và mùa hè khi nó đang phát triển tích cực với thực phẩm cơ bản ở mức 1 / 2 sức đề nghị.Cho ăn hàng tháng vào mùa thu và mùa đông.`,
        ],
        schedule: [
            `Lịch tưới: 2 - 3 ngày / tuần`,
            `Lịch bón: 1 tháng / lần`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree4.png'),
        name: `Cây dành dành`,
        careRate: `Trung bình`,
        grownTime: ``,
        careFreq: `1 - 2 ngày`,
        description: [
            `Mô tả về cây:`,
            `Thân: Thuộc loại cây thân gỗ sống lâu năm, dạng cây bụi nhỏ, có thể cao 1 – 2m.`,
            `Lá: Có màu xanh sẫm, nhẵn bóng, mọc đối từ 3 – 4 lá.Lá to có chiều rộng khoảng 3 – 5cm, dài 5 – 10cm.Lá dành dành mọc dày đặc bao quanh thân, có thể thu hoạch quanh năm.`,
            `Hoa: Hoa to có màu trắng hoặc vàng nhạt, có 2 loại là hoa đơn và hoa kép mọc đơn lẻ ở đầu cành cũng như có hương thơm nồng nàn.`,
            `Quả: Quả hình trứng, cạnh lồi, có 5 – 8 đường gờ chạy dọc theo quả làm cho quả có góc cạnh dài.Vỏ có màu cam tới đỏ nâu, bóng, thịt màu vàng và chứa nhiều hạt.Quả có vị hơi chua, đắng và mùi nhẹ, thường được sấy hoặc phơi khô để làm thuốc.`,
            `Thời gian ra hoa và quả: Dành dành ra quả và nở hoa đều vào độ khoảng tháng 6 đến tháng 10. `,
            `Vùng sinh sống: Cây dành dành là một loại cây bụi thuộc họ cà phê, có nguồn gốc từ các nước khu vực cận nhiệt đới như Châu Phi, Châu Á và Đông Nam Á `,
            `Sức khỏe và bệnh gây hại: Bệnh thường xuyên gặp: Bệnh héo rũ, đốm vi khuẩn`,
            `Cách xử lý:`,
            [
                `Cái thiện thoát nước cho đất.`,
                `Chọn cây có khả năng kháng bệnh`,
                `vệ sinh tốt`,
                `tránh tưới nước từ trên cao`,
            ],
        ],
        careDetail: [
            `Yêu cầu về đất đai và độ ẩm:`,
            [
                `Đất: cây thích đất a - xít, vì vậy độ pH từ 5 hoặc 6 là lựa chọn tốt.Đất nên có độ thịt, nhiều mùn, và giàu dinh dưỡng để cây phát triển tốt nhất`,
                `Độ ẩm: duy trì độ ẩm trên 60 % để đàm bảo cây phát triển tốt nhất`,
            ],
            `Cách chăm sóc:`,
            [
                `Tưới nước: Cây dành dành ưa nước ở mức trung bình nhưng không chịu được ngập úng.Nếu thời tiết nắng nóng nên tưới đủ lượng nước để đất có độ ẩm, không nên tưới đẫm nước vì như vậy có thể làm chết cây.`,
                `Ánh sáng: Dành dành ưa ánh sáng mặt trời nhưng không chịu được cái nắng gay gắt, nên trồng dành dành ở những nơi râm mát mà vẫn có chút ánh sáng mặt trời. `,
                `Nhiệt độ: 15 - 25 độ C`,
                `Bón phân: Bón phân định kỳ cho cây với phân hữu cơ để đảm bảo chất dinh dưỡng cho cây sinh trưởng.Khi đến mùa hoa nở bạn có thể tăng thêm lượng phân bón urê để giúp cây có thể nở hoa đẹp hơn. `,
                `Cắt tỉa: Cắt tỉa bớt cành lá nhằm giúp cây sinh ra nhiều chồi non trên cành để tạo điều kiện giúp cho hoa nở to và đẹp hơn.`,
            ],
        ],
        schedule: [
            `lịch tưới: phun sương cho cây hàng ngày, vào mùa mưa không cần tưới cây`,
            `Lịch bón: bón phân cho cây định kì 1 tháng / lần`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree5.png'),
        name: `Cây Cô Tòng `,
        careRate: `Trung bình`,
        grownTime: ``,
        careFreq: `1-2 ngày`,
        description: [
            `Mô tả về cây `,
            `Đặc điểm:`,
            [
                `Là cây bụi hoặc cây gỗ nhỏ, thân cây có nhựa mủ đục, phân nhánh và nhiều nhánh thấp. `,
                `Cây thường cao từ 30 đến 40 cm. `,
                `Lá cứng, hình bầu dục, đầu nhọn, có nhiều màu: xanh, trắng, vàng hoặc đỏ tạo thành dải xen kẽ. `,
                `Màu vàng và xanh lá cây là hai màu chủ đạo. `,
                `Những bông hoa nhỏ, dài, mọc thành cụm hình con sóc mang nhiều bông màu trắng sữa.`,
            ],
            `Thời gian ra hoa`,
            [
                `Mùa Hoa: Cây cô tông ra hoa quanh năm, khi đã đáp ứng đầy đủ các điều kiện về tuổi cây, nhiệt độ hay ánh sáng`,
                `Vùng Sinh Sống: Cây cô tòng có nguồn gốc từ khu vực nhiệt đới và cận nhiệt đới của Châu Á, bao gồm các quốc gia như Việt Nam, Campuchia, Lào và Myanmar.`,
            ],
            `Sức khoẻ và bệnh gây hại: Bệnh Hại Thường Gặp: Cây thường mắc các bệnh như sâu đục thân, sâu cuốn lá, thối rễ,.. `,
            `Cách Xử Lý Các Vấn Đề Sức Khỏe:`,
            [
                `Dùng thuốc trừ sâu`,
                `Nếu cây bị thối rễ thì cần nhổ bỏ ngay lập tức`,
                `Theo dõi thường xuyên tình trạng của cây`,
            ],
        ],
        careDetail: [
            `Yêu cầu về đất đai và độ ẩm:`,
            [
                `Đất: Cây có thể trồng trên nhiều loại đất khác nhau; Tuy nhiên, cây phát triển xanh tốt nhất là đất  tơi xốp, nhiều mùn, màu mỡ.`,
                `Độ ẩm: Duy trì độ ẩm khoảng 60-90 %`,
            ],
            `Cách chăm sóc:`,
            [
                `Nước: Cây ưa ẩm nên bạn nên tưới đẫm nước  cho cây, tránh tưới quá nhiều gây úng cây.Cấp nước hợp lý tùy theo điều kiện thời tiết`,
                `Ánh sáng: Cây thích ánh sáng mạnh và có thể chịu được ánh sáng bóng 1 phần.Tuy nhiên, cần hạn chế ánh nắng trực tiếp vào mùa hè để bảo vệ cây khỏi tác động của nhiệt độ cao và tia UV gắt gao. `,
                `Nhiệt độ : Cây thích nghi với nhiệt độ từ 18°C đến 24°C.Tránh đặt cây dưới ánh nắng trực tiếp vào buổi trưa, khi nhiệt độ và ánh sáng mạnh nhất`,
                `Phân bón: phân hữu cơ và phân vi sinh là hai loại phân phổ biến để chăm sóc cây`,
            ],
        ],
        schedule: [
            `lịch tưới:`,
            [
                `Mùa hè có thể tưới 1 - 2 lần / ngày`,
                `Mùa mưa hay mùa lạnh chỉ cần tưới 2 - 3 ngày / lần`,
            ],
            `Lịch bón: Định kỳ 2 - 3 tháng bón thúc một lần, tưới nước cho cây sau mỗi lần bón phân.`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree6.png'),
        name: `Cây bưởi`,
        careRate: `Trung bình`,
        grownTime: `5 năm`,
        careFreq: `4 - 5 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY`,
            `Đặc điểm:`,
            `Cây bưởi là loại cây lưu niên có thân gỗ, thường cao trung bình từ 3 - 4 mét. `,
            `Thân cây khi còn non có gai và màu xanh, sau đó chuyển dần sang màu xám. `,
            `Lá hình trứng, mang màu xanh sẫm, chiều dài khoảng từ 11 - 12 cm. `,
            `Hoa mọc thành từng cụm chùm, có màu trắng đặc trưng và mùi thơm dễ chịu. `,
            `Quả của cây bưởi có hình cầu, mọng nước, khi còn non có màu xanh, khi chín thường có màu vàng hoặc xanh.`,
            `Thời gian ra hoa và quả:`,
            `Ra hoa: Thường vào tháng 2 - 3.`,
            `Cho quả: Thường vào tháng 7 - 8`,
            `Vùng sinh sống: Cây bưởi phù hợp với khí hậu nhiệt đới và có nguồn gốc từ các vùng thuộc Đông Nam Á, trong đó có Việt Nam.`,
            `Sức khỏe và bệnh gây hại:`,
            `Các bệnh gây hại thường gặp: Bệnh vàng lá gân xanh, Bệnh chảy mủ, ...`,
            `Cách xử lý:`,
            [
                `Cách ly cây bị gây nhiễm và sử dụng thuốc bảo vệ thực vật.`,
                `trồng đất hợp lý và kiểm tra thường xuyên.`,
            ],
        ],
        careDetail: [
            `YÊU CẦU VỀ ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Đất: Đất trồng cần thoát nước tốt, có hàm lượng hữu cơ cao, không nhiễm mặn.`,
                `Cây bưởi cần nhiều nước trong giai đoạn bật mầm, phân hoá mầm hoa, ra hoa và phát triển quả.Tuy nhiên, cây không chịu được ngập úng.Độ ẩm đất thích hợp là khoảng 70 - 80 %.`,
            ],
            `Cách chăm sóc:`,
            [
                `Ánh sáng: Cây bưởi cần ánh sáng đủ để thúc đẩy quá trình phát triển và quang hợp.Trong miền Nam, trồng cây bưởi cần che bóng hướng Đông - Tây.`,
                `Nước: Cây bưởi cần nhiều nước trong thời kỳ ra hoa kết trái và thời kỳ cây con.Tránh ngập úng và không tưới nước mặn.`,
                `Nhiệt độ: Nhiệt độ phù hợp để trồng cây bưởi là từ 23 đến 29°C.`,
                `Bón phân: Tùy theo loại đất và điều kiện sinh trưởng, cung cấp phân bón thích hợp.`,
            ],
        ],
        schedule: [
            `Lịch tưới`,
            [
                `Cây con: Trong tuần đầu sau khi trồng, tưới ít nhất 3 - 4 lần, mỗi lần khoảng 1 tiếng.`,
                `Cây trưởng thành: Tưới khoảng 2 tuần / lần.`,
            ],
            `Lịch bón`,
            [
                `Cây từ 1 - 3 tuổi:`,
                `Pha phân vào nước và tưới định kỳ 1 - 2 lần / tháng.`,
                `Sử dụng phân hữu cơ hoặc phân chuồng để cung cấp dinh dưỡng cho cây.`,
            ],
            `Cây từ năm thứ 3 trở đi:`,
            [
                `Bón 4 lần / năm theo tán cây:`,
                `Lần 1: Sau khi thu hoạch, bón 10 kg phân chuồng kèm 1 / 3 lượng phân NPK.`,
                `Lần 2: Trước khi ra hoa 1 tháng, bón 1 / 3 lượng phân NPK.`,
            ],
        ],
    },
    {
        img: require('../assets/photos/tree/tree7.png'),
        name: `Cây mận	`,
        careRate: `Trung bình	`,
        grownTime: `3-6 năm	`,
        careFreq: `5-10 ngày	`,
        description: [
            `MÔ TẢ VỀ CÂY`,

            `Cây mận là giống cây ăn trái có thân gỗ, cho trái dạng quả hạch. `,

            `Độ lớn của quả mận thay đổi tùy theo từng giống, và màu sắc cũng đa dạng: có loại màu đỏ đậm, vàng, và xanh.`,

            `Khi chín, bên ngoài quả được phủ một lớp phấn trắng bảo vệ.Rễ cây mận không quá dài và thường mọc tập trung ở độ sâu từ 0 – 50cm.`,

            `Cây mận phân cành sớm, lá hình trứng, và hoa mọc xen kẽ với nhiều màu sắc khác nhau.`,

            `Thời gian ra hoa và quả:`,

            [
                `- Cây mận thường bắt đầu ra hoa vào cuối mùa đông đến đầu mùa xuân, tùy thuộc vào giống và điều kiện khí hậu của khu vực.Thời điểm đẹp nhất để ngắm hoa mận là đầu tháng 1.`,
                `- Mùa mận chính thường diễn ra từ tháng 5 đến tháng 6. Quả mận hậu có vỏ màu xanh, thịt chắc, hạt nhỏ và vị ngọt.`,
            ],



            `Vùng sinh sống: Cây mận thường trồng ở vùng núi cao có khí hậu mát mẻ.Ở Việt Nam, Các tỉnh như Lào Cai, Sơn La, Lai Châu, Hà Giang, Cao Bằng là nơi phổ biến trồng mận. `,

            `Sức khỏe và bệnh gây hại:`,

            `Các bệnh thường gặp: trên cây mận thường xuất hiện các loài sâu bệnh gây hại như sâu ăn lá, sâu lông, Rầy và Rệp, Ruồi vàng đục trái, Sâu đục than và đục cành.`,

            `Cách xử lý:`,
            [
                `Tỉa lá già, phun phòng và trị sâu bằng thuốc trừ sâu.`,
                `Sử dụng túi bọc trái hoặc bẫy ruồi vàng để phòng trừ.`,
                `Tỉa cành, kiểm tra và xử lý sâu kịp thời.	`,
            ],


        ],
        careDetail: [
            `YÊU CẦU VỀ ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Đất: chọn đất thịt cát có độ tơi xốp và thông thoáng.Đất nên có khả năng giữ ẩm tốt và dễ thoát nước.`,
                `Độ ẩm: duy trì độ ẩm khoảng độ ẩm từ 60 đến 80 % để cây phát triển một cách tối ưu`,
            ],


            `Chăm sóc:`,

            [
                `Nước: Cây mận cần được cung cấp đủ nước để tăng khả năng đậu quả và chất lượng quả.Tuy nhiên, không nên tưới quá nhiều nước để tránh ngập úng và ảnh hưởng đến sự phát triển của rễ.Khi tưới nước đảm bảo nước được phân phối đều xung quanh gốc cây.Tránh tưới nước trực tiếp lên bông hoa để tránh làm hỏng hoa.`,
                `Nhiệt độ: Cây mận thích hợp với nhiệt độ từ 25 đến 30°C.Nếu nhiệt độ quá cao hoặc quá thấp, cây mận có thể gặp khó khăn trong việc ra hoa hoặc không chín đủ quả.`,
                `Ánh sáng: nên trồng cây mận ở những nơi có ánh sáng tốt, tránh những nơi bị che khuất bởi các vật thể khác.`,
                `Bón phân: có thể dùng những loại phân như Phân hữu cơ vi sinh Sông Gianh, Phân hữu cơ vi sinh KOMIX USM, Phân hữu cơ An Điền, ...	`,
            ],






        ],
        schedule: [
            `Lịch tưới: 1 - 2 lần / tuần`,
            `Lịch bón: 2 lần một năm, một lần vào đầu tháng 3 và một lần vào đầu tháng 8`
        ],
    },
    {
        img: require('../assets/photos/tree/tree8.png'),
        name: `Cây cỏ gương`,
        careRate: `Dễ`,
        grownTime: `~4 Tháng`,
        careFreq: `7 ngày`,
        description: [
            `Mô tả về cây `,

            `Đặc điểm:`,
            `Cỏ Gương thuộc loại thân thảo nhỏ, sóc sức sống tốt, có thể sống lâu năm. `,
            `Chiều cao trung bình của cây lừ từ 20 - 30cm, đối với một số cây được nuôi trồng và chăm sóc trong điều kiện tốt sẽ có thể đạt tới chiều cao là 1m. `,
            `Cây có thân màu nâu đen mọc thẳng đứng, có rễ phụ và không phân nhánh. `,

            `Lá cây có hình tròn trông giống như đồng tiền xu, cuống nằm ở giữa lá và nối liền với thân. `,
            `Cuống cây vươn dài, có màu xanh lục bóng có đường kính từ 3 - 5cm. `,
            `Cây có hoa, hoa của cây giống hoa của cây rau má nhật, có chùm nhỏ màu trắng hồng và hạt nhỏ màu đen. `,



            `Thời gian ra hoa `,
            `Mùa Hoa: Ra hoa thường vào mùa xuân hoặc mùa hè.`,


            `Đặc điểm sinh học`,
            `Vùng Sinh Sống: Phổ biến ở các khu vực có lượng mưa lớn và nhiệt độ cao(Nam Trung Quốc và thường có thể được tìm thấy mọc tự nhiên dọc theo chân dãy núi Himalaya)`,

            `Sức khoẻ và bệnh gây hại`,
            `Bệnh Hại Thường Gặp: Các bệnh thường gặp là thối rễ hoặc thân, bệnh đốm lá, bệnh phấn trắng và viêm nấm thực vật(mốc xám)`,
            `Cách Xử Lý Các Vấn Đề Sức Khỏe: đàm bảo nhiệt độ môi trường phù hợp và diệt sâu bệnh nếu cần.	`,
        ],
        careDetail: [
            `2 cách trồng chính: trồng trong nước dưới dạng thủy sinh và trồng trong chậu đất. `,

            `Trồng cây Cỏ Gương trong chậu đất:`,

            `Khi trông cây Cỏ Gương trong chậu đất thì chỉ cần chọn một loại chậu nhỏ vừa đủ chứa đất là được.Sau đó cho cây vào sau đó rải đất xung quanh và bề mặt và nén chặt đất để cho cây có thể đứng vững.`,

            `Tưới thêm 1 chút nước để dưỡng ẩm cho cây, để tăng thêm tính thẩm mỹ thì bạn có thể thêm vào trên mặt đắt trồng cây một số loại sỏi nhỏ.Cho thêm sỏi không chỉ có tác dụng trang trí mà còn giúp cho việc trồng cây sạch sẽ hơn. `,

            `Trồng cây Cỏ Gương thủy sinh`,
            `Bạn nên chọn loại chậu nhựa trong suốt hoặc chậu thủy tinh không có lỗ thoát nước.Đầu tiên là làm sạch đất trên rễ, cho một phần thân rễ vào chậu.Lưu ý để phần cuống lá và thân ngọn vươn ra khỏi mặt chậu.Sau đó cho nước vào đủ để ngập bộ rễ của cây. `,

            `Cách chăm sóc:`,
            `Ánh sáng: cây không cần phải sống trong điều kiện tập trung quá nhiều ánh sáng.Tuy nhiên vẫn phải đảm bảo được lượng ánh sáng cung cấp là đầy đủ cho sự phát triển của cây.Cây không được cung cấp đầy đủ ánh sáng sẽ bị cong và cuộn tròn lại.`,

            `Nước: cỏ gương không phải là một là loại cây ưa nước nên bạn không nên tưới quá nhiều người cho cây khi chăm sóc.`,

            `Đất: sử dụng loại đất hữu cơ hoặc đất phù sa, đất cát pha tơi xốp để trồng cây `,

            `Bón phân: khi chăm sóc cỏ gương bạn không nên sử dụng quá nhiều phân bón để cung cấp chất dinh dưỡng.`,
        ],
        schedule: [
            `Lịch tưới nước: Cây không yêu cầu quá nhiều nước để sinh tồn và phát triển, nên tưới 1 lần mỗi tuần`,
            `Lịch bón phân: Không cần quá nhiều, nên bón 1 lần mỗi 6 tháng`
        ],
    },
    {
        img: require('../assets/photos/tree/tree9.png'),
        name: `CÂY BÀNG SING`,
        careRate: `Dễ`,
        grownTime: `5 - 7 năm`,
        careFreq: `7 - 10 ngày`,
        description: [
            `Mô tả về cây `,

            `Đặc điểm:`,

            `Cây bàng Singapore là cây thân gỗ, sống lâu năm, dáng cây thẳng, nếu trồng trong nhà cây chỉ cao khoảng 40cm đến 4m.`,
            `Cây bàng Singapore không phân nhánh nên lá sẽ mọc sát vào phần thân cây. `,
            `Lá đơn to rộng, màu xanh đậm, mọc cách nhau từ dưới gốc lên đến đỉnh ngọn.`,
            `Cây bàng Singapore phát triển khá chậm, với tán lá xanh quanh năm ít rụng lá.`,

            `Thời gian ra hoa và quả`,
            `Mùa Hoa: Ra hoa thường vào mùa hè.`,
            `Mùa quả: quanh năm`,

            `Đặc điểm sinh học`,
            `Vùng Sinh Sống: Phổ biến ở các khu vực có khí hậu nhiệt đới gió mùa`,

            `Sức khoẻ và bệnh gây hại`,
            `Bệnh Hại Thường Gặp: xoăn lá, vàng lá và bị sâu, rệp tấn công`,

            `Cách Xử Lý Các Vấn Đề Sức Khỏe:`,
            `Thường xuyên lau sạch bụi bẩn trên lá cây, cắt tỉa lá hư và già để tạo độ ẩm cho lá và giúp cây quang hợp tốt hơn`,
            `Bón phân cho cây mỗi tháng một lần.Pha phân vi sinh hoặc phân hữu cơ với nước loãng trước khi tưới lên cây để cây phát triển mạnh.`,
            `Sử dụng thuốc trừ sâu khi cần thiết`,
        ],
        careDetail: [
            `Yêu cầu về đất đai và độ ẩm`,
            `Cây bàng Singapore sinh trưởng tốt ở nhiệt độ phòng, khoảng nhiệt độ từ 16 - 28 độ C, và độ ẩm thích hợp khoảng 60 - 80 %. `,
            `Đất trồng cây bàng Singapore bạn nên chọn đất có độ tơi xốp, khả năng thoát nước tốt, giúp cây phát triển tốt mà không lo bị úng rễ dù bạn đặt cây trong phòng hay ngoài trời.`,


            `Cách chăm sóc:`,
            `Loại đất: Nên chọn loại đất tơi xốp và có khả năng thoát nước tốt để đảm bảo cây hấp thụ chất dinh dưỡng mà không bị ngập úng. `,

            `Tưới nước: Gia chủ nên tưới nước cho cây từ 3 đến 4 lần mỗi tuần.Khi tưới nên sử dụng nước mưa, nước giếng hoặc nước sạch để tránh tác động của clo có trong nước máy gây ảnh hưởng đến sự phát triển của cây.`,

            `Ánh sáng: Nên đặt cây ở những vị trí có khả năng hấp thụ ánh sáng tốt có nhiệt độ từ 16 - 27 độ C.`,

            `Cắt tỉa: Cần thường xuyên cắt tỉa cành và lá bị hư hại để kích thích sự phát triển của cây. 	`,
        ],
        schedule: [
            `Tưới nước:`,
            `Cây không cần quá nhiều nước, với cây bàng Singapore trồng chậu, bạn có thể tưới 3 - 4 lần / tuần`,

            `Với những chậu cây trồng ở ngoài trời thì nên tưới 1 lần mỗi ngày`,

            `Bón phân: 6 - 8 tuần / 1 lần, tăng tần suất vào mùa xuân và hè`,

            `Cắt tỉa: 2 lần mỗi năm, nên chọn những dịp cắt tỉa vào mùa xuân hoặc mùa hè vì đây là thời điểm mà cây dễ hồi phục và phát triển`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree10.png'),
        name: ` CÂY NHA ĐAM`,
        careRate: `Dễ`,
        grownTime: `1 năm`,
        careFreq: `3 - 5 ngày`,
        description: [
            `ĐẶC ĐIỂM:`,
            [
                `Lá: Lá hình mũi mác, xếp thành hoa thị.Chúng có màu xám đến xanh lục, đôi khi có đốm trắng và có gai nhọn màu hồng dọc theo mép.Khi bẻ ra, lá lộ ra chất gel màu xanh lục.`,
                `Hoa: Hoa nhọn có thể có màu vàng, đỏ hoặc cam.`,
                `Kích thước: Nha đam thường phát triển đến độ cao từ 1–3 feet.`,
                `Công dụng: Gel của nó được sử dụng rộng rãi trong các sản phẩm mỹ phẩm và dược phẩm vì đặc tính làm dịu, đặc biệt là chữa cháy nắng và kích ứng da.`,
            ],
            `Thời gian ra hoa và sản xuất gel:`,
            [
                `Thời gian ra hoa: Hè và Xuân`,
                `Thời gian sinh ra gel: Gel lô hội luôn có trong lá nhưng có nhiều nhất trong mùa sinh trưởng, thường kéo dài từ mùa xuân đến mùa hè.`,
            ],
            `Đặc điểm sinh học: Cây Nha đam chịu được nắng hạn nhưng lại phát triển tốt khi có độ ẩm trong đất vừa phải => Nha Đam rất thích hợp trồng ở vùng có khí hậu nóng và không ngập nước`,
            `Sức khoẻ và bệnh gây hại:`,
            `Dù là một loài cây có sức đề kháng tốt, cây nha đam vẫn có thể gặp phài một số vấn đề như:`,
            [
                `Thối rễ: Thường do tưới nước không đúng cách, dẫn đến đất sũng nước.Đảm bảo thoát nước tốt để ngăn chặn vấn đề này.`,
                `Bệnh đốm lá: Ảnh hưởng đến lá nha đam, gây ra đốm.Loại bỏ lá bị nhiễm bệnh kịp thời.`,
                `Thối mềm: Làm mềm mô thực vật do nhiễm vi khuẩn hoặc nấm.`,
                `Bệnh thán thư: Tấn công nhiều bộ phận khác nhau của cây, bao gồm cả lá và thân.`,
                `Nấm mốc: Làm cây suy yếu và gây hoại tử lá.`,
            ],
            `Cách xử lí:`,
            [
                `Đặt cây tại nơi có ánh sáng phù hợp, tránh nơi mà cây bị chiếu sáng trực tiếp`,
                `Tưới nước vừa phải cho cây`,
                `Chọn loại đất trồng phù hợp`,
                `Cắt bỏ những lá mang bệnh, tránh lây bệnh cho những lá khác`,
            ],
        ],
        careDetail: [
            `YÊU CẦU VỀ ĐẤT ĐAI:`,
            [
                `Chọn đất: Nha đam là cây chịu được khô hạn, nhưng không chịu được ngập úng, do đó phải chọn vùng đất cao ráo, thoáng xốp, tốt nhất là đất pha cát dễ thoát nước.`,
                `Làm đất: đất trồng phải được cày bừa kỹ, mục đích làm nhỏ đất và sang phảng ruộng trồng.Sau đó lên luống, đánh rãnh trồng.Thông thường luống được đánh cao khoảng 20 cm để dễ thoát nước.Ðánh Rãnh trồng theo mật độ hàng cách hàng 80 cm, cây cách cây 40 cm.`,
                `Bón lót: Sử dụng phân chuồng hoai để bón lót.Mỗi cây bón lót khoảng 500 – 700 g phân chuồng`,
            ],
            `ĐIỀU KIỆN CHĂM SÓC:`,
            [
                `Tưới nước: Nha đam không cần quá nhiều nước để tồn tại và phát triển nhưng vẫn cần một lượng nước vừa phải`,
                `Ánh sáng mặt trời: Đặt lô hội gần cửa sổ đầy nắng.Nó phát triển mạnh trong ánh sáng gián tiếp, tươi sáng.Tránh ánh nắng trực tiếp, đặc biệt là vào những buổi chiều nắng nóng.`,
                `Nhiệt độ: Giữ nó trong phòng có nhiệt độ từ 55°F đến 80°F(13°C đến 27°C).`,
            ],
        ],
        schedule: [
            `Tưới nước: Để đất khô hoàn toàn giữa các lần tưới.Tưới nước khoảng 2 - 3 tuần một lần trong mùa sinh trưởng(mùa xuân và mùa hè).Vào mùa đông, giảm tưới nước xuống mỗi tháng một lần.`,
            `Bón phân: Bón phân lỏng pha loãng trong thời kỳ sinh trưởng tích cực(mùa xuân và mùa hè).Cứ 2 - 3 tháng một lần là đủ.`,
            `Thay chậu: Thay chậu 2 - 3 năm một lần hoặc khi cây lớn hơn thùng chứa.`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree11.png'),
        name: `CÂY LAN CHI`,
        careRate: `Dễ`,
        grownTime: `	`,
        careFreq: `5 - 7 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY`,
            [
                `Cây lan chi được gọi với nhiều tên khác nhau như cỏ lan chi, cây dây nhện, cây lan móc, ...thuộc họ Asphodelaceae với tên khoa học là Chlorophytum Bichetii.Loài cây này có nguồn gốc ở Châu Phi sau đó được nhân giống ở nhiều nơi có khí hậu nhiệt đới như Việt Nam, Thái Lan, ...`,
                `Đây là loại cây thân thảo, có đặc điểm là mọc thành bụi nhỏ với chiều cao từ 40 - 50cm. `,
                `Cây lan chi chỉ có 1 thân rễ ngắn phát triển thành củ thịt phình to có thể tách ra khỏi thân.`,
                `Cây lan chi có tốc độ sinh trưởng và phát triển nhanh chóng. `,
                `Đây là loại cây ưa bóng mát.Nếu ở nơi có nhiều ánh sáng, nhiệt độ quá cao thì lá sẽ bị héo, khô và mất màu xanh tươi mà thường chuyển sang vàng.`,
            ],
            `Thời gian ra hoa:`,
            [
                `Hoa lan chi mọc thành cụm và thường nhỏ. `,
                `Hoa lan chi có màu tím nhạt, 6 cánh, có loại có hoa màu trắng. `,
                `Hoa lan chi thường ra hoa vào mùa hè, từ tháng 5 đến tháng 7`,
            ],
            `Vùng sinh sống: Cây Lan Chi thích những môi trường ấm ẩm và không ưa lạnh, nên khi trồng trong nhà thì nên để cây lan chi tránh gió lạnh và ống điều hòa`,
            `Sức khoẻ và bệnh gây hại:`,
            `bệnh gây hại: Cây lan chi thường hay gặp tình trạng thối rễ, vàng lá`,
            `Giải pháp:`,
            [
                `Theo dõi cây thường xuyên và loại bỏ lá héo, lá vàng để bảo vệ cây khỏi sâu bệnh.`,
                `Đề phòng ngừa bệnh này thì bạn phải điều chỉnh lượng phân bón, lượng nước và để nơi thông gió, như vậy cây sẽ tránh được tình trạng vàng lá, sâu bệnh.	`,
            ],
        ],
        careDetail: [
            `Yêu cầu về đất đai:`,
            [
                `Đất trồng cây Lan Chi phải là đất xốp, có nhiều chất dinh dưỡng, có khả năng thoát nước tốt.`,
                `Đất mùn có độ pH từ 6 - 7.5 là loại đất phổ biến được khuyên dùng.`,
                `Có thể trộn thêm phân chuồng, xơ dừa hay tro trấu để tăng độ dinh dưỡng cho đất cũng như hỗ trợ thoát nước`,
            ],
            `Chăm sóc:`,
            [
                `Ánh sáng: Cây lan chi là loại cây ưa mát, ánh sáng 1 phần cho nên bạn đặt cây ở nơi có ánh sáng nhẹ, vừa đủ để cây không bị héo, khô.`,
                `Đất trồng: Cây không kén đất nhưng đất trồng phải là đất mùn, có nhiều chất dinh dưỡng và phải thoát nước tốt, có độ pH từ 6 - 7.5.`,
                `Nước: Đất phải được giữ ẩm để cây lan chi có thể sinh trưởng và phát triển bình thường.Không nên sử dụng nước bị nhiễm phèn để tưới cây, bạn nên thay bằng nước mưa hoặc nước trong lu, khạp của nhà.`,
                `Nhiệt độ: Cây lan chi phát triển tốt ở nhiệt độ từ 18 - 24 độ C, phù hợp với những nước có khí hậu nhiệt đới.`,
                `Phòng sâu bệnh: Cây lan chi thường hay gặp tình trạng thối rễ.Đề phòng ngừa bệnh này thì bạn phải điều chỉnh lượng phân bón, lượng nước và để nơi thông gió, như vậy cây sẽ tránh được tình trạng vàng lá, sâu bệnh.`,
            ],
        ],
        schedule: [
            `Lịch tưới nước: Đối với cây trồng ở văn phòng và trong nhà thì cần tưới nước cho cây 2 lần / tuần và thay nước 1 tuần / lần.`,
            `Lịch bón phân: Cây sẽ bị vàng lá, héo nếu không có đầy đủ chất dinh dưỡng.Bạn nên bón phân 2 tuần 1 lần trong mùa sinh trưởngCây lan chi là thực vật có hoa vì vậy bạn bón 1 ít phân đạm.Khi nhiệt độ xuống quá thấp khoảng dưới 4 độ C thì phải ngưng tưới và bón phân.`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree12.png'),
        name: `CÂY LƯỠI HỔ`,
        careRate: `Dễ`,
        grownTime: `~4 Tháng`,
        careFreq: `7 - 10 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY`,
            [
                `Cây lưỡi hổ là loại cây cảnh, thường được trồng trong vườn, trong nhà để làm đẹp không gian. `,
                `Tên khoa học là Sansevieria trifasciata, chiều cao khoảng 50 - 60cm.`,
                `Cây lưỡi hổ có thân dạng dẹt, mọng nước, nhìn có vẻ sắc nhọn nguy hiểm nhưng thân rất mềm, không làm đứt tay khi chạm vào.Trên thân có 2 màu xanh và màu vàng dọc từ gốc đến ngọn. `,
                `Cây lưỡi hổ khi ra hoa nở thành từng cụm, mọc từ phần gốc lên và có quả hình tròn`,
            ],
            `Thời gian ra hoa:`,
            [
                `Hoa lưỡi hổ thường có màu trắng, trắng xanh hoặc trắng vàng.Cuống hoa dài, bên dưới là những cụm hoa nhỏ mọc theo cành.`,
                `Cánh hoa dài khoảng 3, 5cm, bao gồm 6 cánh thuôn dài.`,
                `Hoa thường nở vào khoảng cuối mùa đông và đầu mùa xuân, và vào lúc giữa đến cuối chiều trong ngày, chu kỳ sống khoảng 5 - 7 ngày`,
            ],
            `Vùng sinh sống: Lưỡi hổ là loại cây có nguồn gốc từ vùng nhiệt đới, nhưng cũng có thể mọc ở vùng ôn đới.Tại Việt Nam, cây thường mọc ở vùng núi và đồng bằng.`,
            `Sức khoẻ và bệnh gây hại: Vấn đề sức khỏe: Các bệnh thường xuyên gặp: vàng lá, rũ lá, thối rễ, bệnh do nấm khuẩn, côn trùng tấn công`,
            `Xử lý:`,
            [
                `Sử dụng thuốc trừ sâu nếu cần`,
                `Đảm bảo đất tốt`,
                `Tưới nước đều đặn`,
                `Bón phân cẩn thận`,
            ],
        ],
        careDetail: [
            `YÊU CẦU VỀ ĐẤT ĐAI: Lưỡi hổ không kén đất và có thể trồng ở nhiều loại đất, từ đất tốt đến đất khô cằn, đất pha cát và đất sỏi. Tuy nhiên, đất trồng lưỡi hổ nên có độ kiềm cao và khả năng thoát nước tốt.Để đảm bảo điều này, bạn có thể trộn vào đất thông thường một ít đất phù sa hoặc mùn cưa để giúp cây phát triển tốt`,
            `Chăm Sóc:`,
            [
                `Tưới nước: Đặc điểm của cây lưỡi hổ là có xuất thân từ vùng đất khô hạn.Do đó, cây có khả năng chịu hạn rất tốt, thường không ưa nước.`,
                `Ánh sáng: Đây vốn là loại cây ưa bóng râm, thích nơi có ánh sáng yếu thay vì thời tiết nắng gắt.Bạn nên chọn những khu vực ít nắng để trồng cây là được`,
                `Nhiệt độ: Nhiệt độ lý tưởng cho cây phát triển là khoảng 20 - 30 độ.`,
                `Bón phân: Trong những ngày mùa đông, bạn nên bổ sung thêm dinh dưỡng bằng cách bón phân để cây khỏe mạnh, phát triển`,
            ],
        ],
        schedule: [
            `Tưới nước: 1 - 2 tuần / lần, nên tưới ấm cho cây`,
            `Ánh sáng: Nên cho cây phơi nắng thường xuyên, khoảng 10 ngày / lần lúc 7h - 9h sáng`,
            `Bón phân: cây nên được bón khoảng 3 đến 4 tháng một lần, bón thúc với vị trí cách gốc khoảng 10cm.`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree13.png'),
        name: `CÂY ĐUÔI CÔNG`,
        careRate: `Dễ`,
        grownTime: `1 - 2 năm`,
        careFreq: `3 - 7 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY:`,
            [
                `Chúng nổi tiếng với những chiếc lá rộng, xanh tốt, nhiều màu sắc.Tán lá rộng có thể dễ dàng hấp thụ ánh sáng hơn nên Calathea đặc biệt thích nghi với những khu vực có ánh sáng yếu. `,
                `Sở dĩ loại cây này có tên là “đuôi công” vì lá của cây có hình bầu dục tròn, hơi nhọn ở hai đầu và có vân rất giống đuôi của chim công.Lá của cây mọc trên cuống ngắn, cứng khỏe.Mặt dưới của lá có màu đỏ tía trong khi mặt trên lại có màu xanh lục rất độc đáo.`,
                `Dựa vào màu sắc và đặc điểm của cây mà người ta chia cây đuôi công ra thành nhiều loại như: Cây đuôi công lá dài, Cây đuôi công đỏ, Cây đuôi công táo xanh`,
            ],

            `HOA VÀ QUẢ`,
            [
                `Hoa: Hoa của cây đuôi công có màu trắng mịn, hoa nhỏ và kết thành chùm.Không chỉ có phần lá cây độc đáo mà hoa của chúng khi nở cũng vô cùng đẹp, nở suốt 4 mùa quanh năm`,
                `Quả: Quả của cây đuôi công thuộc loại quả nang, nhỏ bé và không có nhiều giá trị.`,
            ],
            `VÙNG SINH SỐNG: Cây có nguồn gốc từ vùng nhiệt đới Nam Mỹ.Trong tự nhiên, chúng được tìm thấy dưới gốc cây và tầng thấp ở rừng rậm.`,
            `Sức khoẻ và bệnh gây hại: Các bệnh thường xuyên gặp: vàng lá, Mép lá chuyển sang màu nâu và giòn, ...`,

            `Giải pháp:`,
            [
                `Chủ động cắt tỉa những cành có bệnh`,
                `tưới nước, bón phân một cách cân đối`,
                `theo dõi thường xuyên để phát hiện bệnh sớm`,
            ],
        ],
        careDetail: [
            `ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Cây đuôi công ưa đất mùn hoặc đất giàu chất hữu cơ nhưng vẫn có khả năng thoát nước tốt.Độ pH của đất hơi chua hoặc trung tính là lí tưởng nhất. `,
                `Cây đuôi công thích độ ẩm từ 50 % trở lên, độ ẩm thấp hơn mức này sẽ khiến các tán lá của chúng có thể bị quăn lại và ngả nâu. `,
            ],
            `Chăm sóc:`,
            [
                `Ánh sáng: Là một cây cảnh nội thất nên cây đuôi công không ưa ánh sáng mạnh, nếu trồng cây ở những nơi có ánh sáng trực tiếp thì lâu ngày cây sẽ bị cháy lá, thối rễ và chết.Bạn chỉ nên đem cây ra phơi nắng vào buổi sáng sau đó đem vào ở những nơi thoáng mát.`,
                `Nhiệt độ: Là loài cây ưa mát nên nhiệt độ thích hợp của cây đuôi công là từ 21 - 29 độ C.`,
                `Tưới nước: Nên tưới nước thường xuyên nhưng vừa đủ tránh để cây bị úng.Không nên tưới cây trực tiếp dưới vòi nước`,
                `Bón phân: Bón phân đạm và phân vi lượng cho cây 3 tháng 1 lần.Hoà phân vào nước và tưới cho cây sẽ giúp cây hấp thụ tốt hơn.	`,
            ],
        ],
        schedule: [
            `Tưới nước: 1 - 3 / tuần`,
            `Bón phân đạm: 1 - 2 lần / tháng`,
            `bổ sung vi lượng: 1 lần / 3 tháng`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree14.png'),
        name: `CÂY TRẦU BÀ XẺ LÁ`,
        careRate: `Trung bình`,
        grownTime: `~3 năm`,
        careFreq: `2 - 3 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY:`,
            [
                `Loài cây này là thuộc thân thảo, mọc thành bụi nhỏ, tỏa đều xung quanh, có chiều cao trung bình từ 0, 8 – 1, 2m. `,
                `Cây trầu bà lá xẻ có hình dạng độc đáo bởi phiến lá chia thùy hình lông chim, lá màu xanh lục với cuống dài.`,
                `Cây trầu bà lá xẻ có phần lá xẻ tròn hơn, đường xẻ ít hơn, chỉ có 4 - 5 đường còn cây thanh xuân có phần lá xẻ thuôn dài, đường xẻ nhiều hơn tận 6 đến 8 đường.`,
            ],
            `Hoa:`,
            [
                `Cây trầu bà lá xẻ có hoa, quả và hạt mọc thành cụm, có dạng mo và rễ khí sinh.`,
                `Hoa của cây trầu bà xẻ lá không có mùa nở cụ thể.Thay vào đó, nó ra hoa khi cây trưởng thành.Khi được trồng trọt, hoa có thể xuất hiện bất cứ lúc nào giữa mùa xuân và mùa thu, tùy vào khí hậu địa phương`,
            ],
            `VÙNG SINH SỐNG: Cây trầu bà lá xẻ phát triển tốt nhất trong môi trường ẩm ướt và ấm áp.Cụ thể, cây thường được bắt gặp từ các khu rừng nhiệt đới ở miền nam Mexico, kéo dài về phía nam tới Panama trong tự nhiên`,
            `Sức khoẻ và bệnh gây hại: Các bệnh thường gặp: Bệnh đốm lá, Thối rễ, Nấm mốc, Bệnh thán thư, Bệnh bạc lá do vi khuẩn, ...`,
            `Cách xử lí`,
            [`Bệnh đốm lá:`,
                `Phòng ngừa: Đảm bảo lưu thông không khí thích hợp và tránh tưới nước trên cao.Loại bỏ các lá bị ảnh hưởng kịp thời.`,
                `Cách xử lý: Cắt bỏ những lá bị nhiễm bệnh và bôi thuốc diệt nấm gốc đồng.`,
            ],
            [`Thối gốc:`,
                `Phòng trừ: Sử dụng đất thoát nước tốt, tránh tưới quá nhiều nước.`,
                `Cách xử lý: Thay chậu vào đất mới, cắt bỏ rễ bị ảnh hưởng và để cây khô.`,
            ],
            [`Nấm mốc:`,
                `Phòng ngừa: Duy trì luồng không khí tốt và tránh tình trạng quá đông đúc.`,
                `Cách xử lý: Dùng khăn ẩm lau lá và phun thuốc diệt nấm.`,
            ],
            [`bệnh thán thư:`,
                `Phòng ngừa: Tránh tưới nước trên cao và duy trì khoảng cách thích hợp.`,
                `Điều trị: Loại bỏ lá bị ảnh hưởng và áp dụng thuốc diệt nấm gốc đồng.`,
            ],
            [`Bệnh bạc lá do vi khuẩn:`,
                `Phòng ngừa: Tránh bắn nước lên lá.`,
                `Điều trị: Cắt bỏ những phần bị nhiễm bệnh và bôi thuốc diệt khuẩn gốc đồng	`,
            ],
        ],
        careDetail: [
            `ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Cây phát triển tốt nhất trong điều kiện đất trồng tơi xốp, thoáng nước tốt, không cần nhiều dinh dưỡng`,
                `Độ ẩm tối ưu cho cây trầu bà xẻ lá là ở độ ẩm từ 60 % đến 80 %`,
            ],
            `Chăm sóc:`,
            [
                `Ánh sáng: cây phát triển mạnh dưới ánh sáng mặt trời gián tiếp, tươi sáng.Hãy thận trọng với ánh nắng trực tiếp, đặc biệt là trong giờ cao điểm vì nó có thể khiến lá bị cháy và hư hỏng. `,
                `Bón phân: khi rễ cây đã ổn định thì bạn dùng phân hữu cơ cho cây, một số loại phân hữu cơ thông dụng như phân trùn quế viên, phân gà, phân hữu cơ Bounce Back`,
                `Nhiệt độ: Nhiệt độ lý tưởng để cây phát triển là từ 18 - 25 độ C`,
            ],
        ],
        schedule: [
            `Lịch tưới: Tưới cây đều đặn mỗi 2 - 3 ngày một lần.`,
            `Lịch bón: Bón phân cho cây cách 2 - 3 tháng một lần để đảm bảo dinh dưỡng.Có thể hòa phân NPK vào nước tưới gốc.`,
            `Ánh sáng: để cây tiếp xúc với ánh sáng không trục tiếp 6 - 8 tiếng / ngày`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree15.png'),
        name: `Cây hoa Trà`,
        careRate: `Khó`,
        grownTime: `2 - 3 năm`,
        careFreq: `mỗi ngày`,
        description: [
            `MÔ TẢ VỀ CÂY`,
            [
                `Cây hoa trà(Camellia japonica) là một loại cây thân gỗ, mọc thành bụi với chiều cao khoảng 1 – 3 mét.Lá cây xếp so le, thoạt nhìn trông giống lá cây chè. `,
                `Cây hoa trà có màu sắc tinh tế và thanh lịch, với kích thước hoa từ 7 - 10 centimet.`,
                `Mùi hương thoang thoảng từ hoa trà mang lại cảm giác thư giãn, và màu sắc trắng tinh khôi làm nổi bật vẻ đẹp tinh tế của loài cây này`,
            ],
            `HOA:`,
            [
                `Hoa trà nở đều trên cây, mỗi bông hoa mở ra với nhiều cành khác nhau. `,
                `Thời gian nở hoa thường kéo dài liên tục trong khoảng 2 – 3 tháng và thường bắt đầu vào khoảng giữa đầu năm mới. `,
            ],
            `VÙNG SINH SỐNG:`,
            [
                `Cây hoa trà có nguồn gốc từ các khu vực Đông Á như Nhật Bản, Trung Quốc và Việt Nam`,
                `Trong tự nhiên, Cây hoa trà thường mọc ở vùng ven biển hoặc đồi núi ẩm thấp.`,
            ],
            `Sức khoẻ và bệnh gây hại: Các bệnh thường gặp: Bệnh đốm than, Bệnh phấn trắng, Cháy lá`,

            `Cách xử lý:`,
            [
                `Cải thiện điều kiện chiếu sáng, thoát nước, và đặt cây ở nơi thoáng gió.`,
                `Rắc bột lưu huỳnh`,
                `Hạn chế tình trạng lá úa bằng cách bố trí lưới phân tán`,
                `Bón phân thường xuyên`,
            ],
        ],
        careDetail: [
            `ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Độ ẩm: Cây Hoa trà phát triển mạnh ở nhiệt độ tương đối ấm áp và độ ẩm vừa phải, khoảng từ 50 - 60 %`,
                `Đất đai: Cây hoa trà phát triển mạnh ở đất màu mỡ, thoát nước tốt, có tính axit.Để tăng trưởng thành công, đảm bảo độ pH của đất nằm trong khoảng từ 5, 0 đến 6, 5.`,
            ],
            `CHĂM SÓC:`,
            [
                `Ánh sáng: Cây hoa trà không chịu được ánh sáng mặt trời cường độ cao.Đặt cây ở vùng có độ ẩm cao và bóng mát để tạo điều kiện lý tưởng cho sự phát triển của hoa.`,
                `Nhiệt độ: 15 - 30 độ C`,
                `Tưới nước: Hoa cần được tưới nước thường xuyên`,
                `Đất trồng: Đất cho cây hoa trà cần đáp ứng yêu cầu nghiêm khắc.Sử dụng đất lá mục, đất vườn rau, thêm ít phân chuồng, phân ngựa, và không nên dùng phân người và phân gà.`,
                `Thay chậu: Cây hoa trà ít rễ, sinh trưởng phát triển chậm.Thay chậu 1 lần sau 2 - 3 năm.`,
            ],
        ],
        schedule: [
            `Lịch tưới 1 - 2 ngày / lần`,
            `Lịch bón: 10 - 20 ngày / lần`,
            `Thay chậu: 2 - 3 năm / lần`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree16.png'),
        name: `Cây lan quân tử`,
        careRate: `Khó`,
        grownTime: `6 năm`,
        careFreq: `4 - 5 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY`,
            [
                `Cây Lan Quân Tử(Clivia nobilis) là một loại cây thân thảo có chiều cao trung bình từ 30cm đến 1m.`,
                `Cây này có sức sống mạnh mẽ nhờ bộ rễ ăn sâu vào lòng đất, cho phép nó sinh sống trong các môi trường khắc nghiệt. `,
                `Lá của cây màu xanh đậm, xếp thành nhiều lớp đan xen nhau, tạo ra hình dáng quạt cầm tay đẹp mắt.`,
            ],
            `HOA: Hoa của Lan Quân Tử thường có màu cam, vàng hoặc đỏ, và chúng nở vào mùa xuân và mùa hạ`,

            `Vùng sinh sống: Cây Lan Quân Tử có nguồn gốc từ Nam Phi và thường mọc ở vùng ven biển hoặc đồi núi ẩm thấp.`,

            `Sức khoẻ và bệnh gây hại: Các bệnh thường gặp: Bệnh Đốm Than, Bệnh Mốc Trắng, Bệnh Héo Rũ Gốc`,

            `Cách xử lí`,
            [
                `Kiểm tra cây thường xuyên để phát hiện và loại bỏ lá bị nhiễm bệnh.`,
                `Đảm bảo cây được trồng trong đất tốt, có thoát nước tốt.`,
                `Cắt tỉa và loại bỏ các phần gốc bị héo rũ.`,
                `Đảm bảo cây được trồng ở nơi thoáng gió và không quá ẩm ướt.`,
                `Sử dụng phân vi sinh để cải thiện sức kháng của cây.	`,
            ],
        ],
        careDetail: [
            `ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Độ ẩm: duy trì độ ẩm trong khoảng 40 - 60 %`,
                `Đất đai: Đất trồng thích hợp nhất để trồng cây lan quân tử là đất chua, thoáng khí, giàu dinh dưỡng`,
            ],
            `Chăm sóc:`,
            [
                `Tưới Nước: Cây ưa ẩm ướt, nhưng không chịu được úng nước.`,
                `Ánh Sáng: Cây Lan Quân Tử thích bóng râm bán phần, không chịu ánh nắng trực tiếp, nên hãy đặt cây ở nơi có ánh sáng mềm mại, tránh nắng gắt.`,
                `Thay Chậu: Thay chậu vào mùa xuân và mùa thu khi nhiệt độ khoảng 20°C; đảm bảo chậu mới có đủ không gian cho cây phát triển.`,
                `Nhiệt độ: Lan Quân Tử thích hợp sống trong điều kiện khắc nghiệt, có thể chịu đựng nhiệt độ từ 15°C đến 25°C.	`,
            ],
        ],
        schedule: [
            `lịch tưới: Tưới từ 2 - 3 lần mỗi tuần và xịt phun sương lên lá để cung cấp độ ẩm.`,
            `Lịch bón: 1 - 2 lần / năm`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree17.png'),
        name: `Cây cảnh Kim Ngân`,
        careRate: `Khó`,
        grownTime: `4 - 5 năm`,
        careFreq: `7 - 14 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY:`,
            [
                `Trong tự nhiên, Cây kim ngân có thể cao tới 18 mét, nhưng khi là cây cảnh trong nhà, chúng thường cao từ 0, 3m - 1, 8m.`,
                `Cây có lá to, màu xanh bóng, hình mũi mác. `,
                `Mỗi thân mọc ra 5 hoặc 6 lá hình lòng bàn tay, đôi khi có thể tìm thấy một thân có 7 lá.`,
                `Thân cây kim tiền dày, có thể để mọc tự nhiên hoặc bện lại để tạo vẻ thanh thoát.`,
            ],
            `HOA:`,
            [
                `Những bông hoa thường có màu vàng lục hoặc màu kem.Chúng là loài lưỡng tính, có cuống ngắn và dày.Các cánh hoa giống như bàn chải cạo râu và nhị hoa dài tạo cho chúng một kết cấu thú vị.`,
                `Những bông hoa của cây kim ngân này xuất hiện theo mùa, thường là vào mùa xuân. `,
                `Mỗi bông hoa chỉ tồn tại một ngày trước khi tàn.`,
            ],
            `VÙNG SINH SỐNG:`,
            [
                `Cây có nguồn gốc tại Trung và Nam Mỹ`,
                `Cây kim ngân thích ứng với môi trường bóng râm và thường mọc trong đầm lầy`,
            ],
            `Sức khoẻ và bệnh gây hại: Bệnh thường xuyên gặp: Anthracnose, Mục rễ mục, Powdery Mildew, ...`,
            `Cách xử lý`,
            [
                `Sử dụng thuốc trừ nấm, trừ sâu`,
                `Tưới nước điều độ`,
                `Dùng dầu neem phun lên lá`,
            ],
        ],
        careDetail: [
            `ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Độ ẩm: duy trì độ ẩm trong khoảng từ 50 % - 60 %`,
                `Đất: Sử dụng hỗn hợp bầu đất thoát nước tốt.Thêm xơ dừa hoặc than bùn để giữ độ ẩm.`,
            ],
            `CHĂM SÓC:`,
            [
                `Ánh sáng: Đặt cây tiền của bạn ở nơi có ánh sáng gián tiếp.Tránh ánh nắng trực tiếp có thể làm cháy lá cây.`,
                `Tưới nước: Để lớp đất trên cùng khô hẳn trước khi tưới nước.Tưới nước thật kỹ, đảm bảo thoát nước tốt. `,
                `Nhiệt độ: Duy trì nhiệt độ trong khoảng từ 53°F đến 77°F(12°C – 25°C).`,
                `Bón phân: Cho cây tiền của bạn ăn phân bón lỏng cân đối hai lần một năm(mùa xuân và mùa thu).	`,
            ],
        ],
        schedule: [
            `Lịch tưới:`,
            [`1 tuần / lần quanh năm trừ mùa đông`,
                `2 tuần / lần vào mùa đông`,],
            `lịch bón:`,
            [`2 tháng / lần vào mùa đông`,
                `1 tháng / lần quanh năm`,],
        ],
    },
    {
        img: require('../assets/photos/tree/tree18.png'),
        name: `Hoa hồng`,
        careRate: `Khó`,
        grownTime: `3 tháng`,
        careFreq: `3 - 4 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY:`,
            [
                `Hoa hồng thuộc nhóm cây bụi thấp, có thân gỗ. `,
                `Thân và cành thường có nhiều gai cong trên bề mặt.`,
                `Lá: Lá hoa hồng có hình lông chim, mọc xen kẽ.Tùy vào từng loại, lá có màu xanh đậm hoặc nhạt, và có răng cưa nhỏ xung quanh.`,
                `Hoa: Cụm hoa hồng mọc đơn độc ở kẽ lá hoặc thành ngù ở đầu cành.Hoa hồng có nhiều màu sắc khác nhau như trắng, hồng, vàng, đỏ, cam… tùy theo giống.`,
                `Gai: Một đặc điểm đặc biệt của hoa hồng là những chiếc gai trên cành và thân.Những chiếc gai này có thể gây châm chích và thể hiện tính tự bảo vệ của loài hoa`,
                `Vài loại hoa hồng nổi tiếng: Hoa hồng Winchester Cathedral, Hoa hồng Michelangelo, Hoa hồng Albrecht Durer, Hoa hồng đỏ Eden, Hoa hồng Rhapsody, ...`,
            ],
            `Thời gian nở của hoa: Hoa hồng thường nở vào mùa xuân và mùa thu.Đây là hai mùa mà hoa hồng nở đẹp nhất.Nó cũng là thời gian thích hợp để bạn trồng hoa hồng.`,
            `Vùng sinh sống:`,
            [
                `Hoa hồng có nguồn gốc từ Trung Quốc và đã tồn tại khoảng 35 triệu năm.Hiện nay, hoa hồng có hơn 200 loài khác nhau, trải khắp Bắc bán cầu từ Alaska đến Mexico và Bắc Phi.`,
                `Hoa hồng yêu thích khí hậu ôn hòa và thường phát triển tốt nhất khi được đặt trong điều kiện môi trường này.`,
            ],
            `Sức khoẻ và bệnh gây hại:`,
            [
                `Các bệnh thường gặp: Đốm đen, nấm mốc, sâu bệnh hại, ...`,
                `Cách phòng chống: tưới nước ở gốc cây thay vì lên trên để giữ cho lá khô ráo, loại bỏ lá bị nhiễm bệnh và xịt thuốc diệt nấm, duy trì vệ sinh sân vườn, chọn giống cây kháng bệnh, chăm sóc đều đặn, và kiểm tra cây thường xuyên để phát hiện sớm và xử lý`,
            ],
        ],
        careDetail: [
            `ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `Đất: Hoa hồng thích hợp với đất feralit vàng đỏ, đất thịt hoặc đất thịt pha cát có cấu tượng chặt, pH 5, 6 – 6, 5, đất có độ thông thoáng, thoát nước tốt, độ dày tầng đất trên 50cm, độ sâu mực nước ngầm trên 40cm.`,
                `Độ ẩm: Hoa hồng yêu cầu độ ẩm đất 60 - 70 % và độ ẩm không khí 80 - 85 % là thích hợp nhất cho sinh trưởng của cây hoa hồng.`,
            ],
            `CHĂM SÓC:`,
            [
                `Ánh sáng: Hoa hồng phát triển mạnh khi gặp ánh sáng mặt trời trực tiếp.Để có kết quả tốt nhất, tối thiểu là bốn giờ đón ánh sáng mặt trời trực tiếp`,
                `Tưới nước: Hoa hồng cần được tưới nước đúng cách để đảm bảo độ ẩm cần thiết cho cây.Tuy nhiên, cần tránh tưới nước quá nhiều hoặc quá ít.Vì điều này có thể gây ra những vấn đề cho sức khỏe của hoa hồng.`,
                `Nhiệt độ: Nhiệt độ thích hợp cho hoa hồng từ 20 - 30C.Nhiệt độ ban đêm quan trọng hơn nhiệt độ ban ngày, đa số các giống thích hợp với nhiệt độ ban đêm từ 16–25C.`,
                `Bón phân: Phân bón là yếu tố quan trọng để giúp hoa hồng phát triển khỏe mạnh và có nhiều bông hoa.Tuy nhiên, không nên sử dụng quá nhiều phân bón.Vì điều này có thể gây ra những vấn đề cho sức khỏe của cây.Nên sử dụng phân bón đúng loại và đúng lượng, tùy theo loại đất và điều kiện thời tiết.Thông thường, nên sử dụng phân bón hữu cơ như phân dê, phân dơi… để cung cấp dinh dưỡng cho cây hoa hồng.	`,
            ],
        ],
        schedule: [
            `Lịch tưới: 2 - 3 lần / tuần`,
            `Lịch bón: 1 lần / 3 - 4 tuần`,
            `Ánh sáng: ít nhất 6 giờ ánh sáng mỗi ngày`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree19.png'),
        name: `Cây Thu Hải Đường`,
        careRate: `Khó`,
        grownTime: `6 tháng - 2 năm`,
        careFreq: `5 - 6 ngày`,
        description: [
            `MÔ TẢ VỀ CÂY:`,
            [
                `Thu hải đường là một loài thân thảo nhỏ, có chiều cao từ 25 - 35 cm. `,
                `Thân cây mọng nước, lá dày và mang hình thù độc đáo. `,
                `Mặt sau lá thẫm màu huyết dụ, mặt trước xanh lục, có răng cưa quanh viền. `,
                `Dựa vào đặc điểm sinh học, Thu hải đường có hơn 1.000 loài và phần lớn đều sống ở tầng thấp trong các khu rừng với độ ẩm cao`,
            ],
            `Hoa:`,
            [
                `Hoa thu hải đường là một loài hoa thân thảo, thân mọng nước, cao từ 20 đến 50 cm.`,
                `Hoa thu hải đường có nhiều màu sắc đa dạng, như trắng, hồng, vàng, cam, đỏ`,
                `Hoa thường nở vào tháng 2 - 3, trong dịp tết.`,
            ],
            `Vùng sinh sống:`,
            [
                `Hoa thu hải đường có nguồn gốc từ khu vực Đông Nam Á, đặc biệt là ở các quốc gia như Việt Nam, Thái Lan, Malaysia và Indonesia`,
                `Loài hoa này thường mọc hoang dã trong rừng núi và khu vực có độ ẩm cao.`,
            ],
            `Sức khoẻ và bệnh gây hại: Sâu và bệnh thường xuyên gặp: rệp sáp, bọ ve, bọ trĩ, và rệp phồng lá`,

            `Cách xử lý`,
            [
                `Sử dụng thuốc trừ nấm, trừ sâu`,
                `Tưới nước điều độ`,
            ],
        ],
        careDetail: [
            `ĐẤT ĐAI VÀ ĐỘ ẨM:`,
            [
                `đất: Trồng hoa thu hải đường trên đất tơi xốp, thoát nước tốt, và có độ pH từ 5, 5 - 6, 5.`,
                `Độ ẩm: Thu hải đường cần môi trường có độ ẩm cao để phát triển, duy trì độ ẩm trong khoảng từ 60 % - 80 %`,
            ],
            `Chăm sóc:`,
            [
                `Ánh sáng: Hoa thu hải đường thích hợp trồng ở nơi có ánh sáng vừa phải, khuếch tán khoảng 50 - 60 %, lưu ý tránh ánh nắng mặt trời trực tiếp.`,
                `Tưới nước: Nên tưới nước cho hoa có nhiệt độ bằng với nhiệt độ môi trường.Không nên sử dụng nước máy sinh hoạt vì trong nước có chứa một số chất diệt khuẩn không tốt cho cây, tốt nhất là dùng nước cất hoặc nước mưa`,
                `Nhiệt độ: 20 - 25 độ C`,
                `phân bón: Để trộn đất trồng thu hải đường, bạn trộn đất trồng cây, phân trùn quế, mụn dừa và trấu hun theo tỷ lệ 3: 3: 2: 2, thêm một ít nấm đối kháng Trichderma.	`,
            ],
        ],
        schedule: [
            `Lịch tưới: 1 tuần / lần`,
            `Lịch bón: 3 tháng / lần`,
        ],
    },
    {
        img: require('../assets/photos/tree/tree20.png'),
        name: `Cây Gasteria (Sen đá lưỡi bò)`,
        careRate: `Dễ`,
        grownTime: `3 - 4 tháng`,
        careFreq: `5 - 10 ngày`,
        description: [
            `Mô tả về cây`,
            [
                `Gasteria có thể nhận biết nhờ những chiếc lá hình lưỡi dày, cứng và mọng nước. `,
                `Gasteria có hai cấp độ đối lập nhau(cách xa nhau) hoặc được sắp xếp theo hình xoắn ốc đặc biệt khác nhau.`,
                `Cụm hoa của gasteria cũng rất độc đáo, với những bông hoa cong, hình bụng, treo trên các chùm hoa nghiêng.`,
                `Những bông hoa mọc ra từ giữa hoa hồng trên những cuống cao, mảnh và có các màu đỏ, cam hoặc vàng. `,
            ],
            `Thời gian ra hoa: Cây Gasteria thường nở hoa vào cuối mùa đông hoặc đầu mùa xuân. `,
            `Vùng sinh sống: nam Phi và góc tây nam xa xôi của Namibia - nóng khô, mưa rải rác và thất thường`,

            `Sức khoẻ và bệnh gây hại:`,
            [
                `Gasteria chủ yếu chỉ thường gặp bệnh phấn trắng, làm lá xuất hiện các đốm trắng gây mất thẩm mĩ.`,
                `Cách phòng tránh: Cải thiện điều kiện chiếu sáng và thoát nước`,
            ],
        ],
        careDetail: [
            `Yêu cầu về đất đai và độ ẩm:`,
            [
                `Cây gasteria phát triển mạnh ở đất thoát nước tốt, hơi chua.`,
                `Trồng vườn: Chọn loại đất hơi cát có độ pH khoảng 6 đến 7 để đảm bảo thoát nước thích hợp. `,
                `Chúng chịu được không khí khô trong nhà rất tốt.`,
            ],
            `Chăm sóc:`,
            [
                `Tưới nước: Để đất khô hoàn toàn giữa các lần tưới.Tưới nước tiết kiệm, đặc biệt là trong những tháng mùa đông không hoạt động.Tưới nước quá nhiều có thể dẫn đến thối rễ.`,
                `Ánh sáng: Gasteria ưa ánh sáng gián tiếp.Tránh ánh nắng trực tiếp, đặc biệt là vào những buổi chiều nắng nóng.Lá màu vàng hoặc trắng có thể cho thấy cây tiếp xúc quá nhiều với ánh sáng.`,
                `Đất: Sử dụng xương rồng thoát nước tốt hoặc hỗn hợp đất mọng nước cho chậu cây dạ dày.Trên các luống vườn, đảm bảo đất cát có độ pH khoảng 6 đến 7.`,
                `Nhiệt độ: Gasteria phát triển mạnh vào mùa hè ấm áp và mùa đông mát hơn một chút(khoảng 50 - 60°F hoặc 10 - 16°C). `,
                `Bón phân: Bón phân cho cây xương rồng pha loãng hoặc phân bón mọng nước một lần vào mùa xuân.Chất hữu cơ trong đất có lợi cho dạ dày, vì vậy hãy cân nhắc trộn thêm khoảng 10 % phân hữu cơ trong quá trình trồng.`,
            ],
        ],
        schedule: [
            `lịch tưới nước:`,
            `Cây gasteria không cần phải tưới quá nhiều vì là loài cây mọng nước.`,
            `Duy trí tưới nước 1 lần / tuần vào mùa xuân hoặc hè, và 1 lần / 2 tuần vào mùa đông`,
        ],
    },
]

export const products: FormatData.ProductInfo[] = [
    {
        img: [
            require('../assets/photos/product/pro1_1.jpg'),
        ],
        name: `1KG Phân bón NPK Đầu Trâu 20 - 20 - 15 + TE cho tất cả loại cây trồng	`,
        buyCount: 1223,
        rate: 4.6,
        price: 155000,
        info: [
            `Vài nét về phân npk đầu trâu`,
            `Thương hiệu phân đầu trâu thuộc công ty CP Phân bón Bình Điền chính thức ra mắt vào năm 1976. Tuy nhiên, lúc bấy giờ các thành phần trong phân còn khá nghèo, về sau người sản xuất nghiên cứu kỹ cây cần gì, khả năng cung cấp của đất bao nhiêu và điều chỉnh chất lượng phân tốt hơn.`,
            `Bên cạnh đó, công ty Bình Điền còn liên tiếp cho ra đời các thế hệ phân mới dùng cho lúa, ngô, mía, chè, cà phê, cây ăn quả, cao su, điều, rau màu,…Hầu hết các loại hình nông nghiệp phân đầu trâu đều có thể đáp ứng được và đảm bảo hiệu quả, an toàn tuyệt đối.`,
            `Đặc biệt, các loại phân đầu trâu giúp tạo năng suất cao, hiệu quả nhờ giảm được 20 – 30 % đạm và lân.Điều này người nông dân sẽ không phải lo lắng sản phẩm nông nghiệp kém an toàn.Bình Điền luôn không ngừng tích cực nghiên cứu tạo nên các chế phẩm mới nhằm tăng giá trị cho phân bón, giảm lượng phân dùng mà vẫn đảm bảo năng suất cao.Điều này rất có lợi cho người nông dân, đem lại hiệu quả kinh tế cao, thúc đẩy tài chính cho họ.`,
            `Top 4 tác dụng của phân npk đầu trâu 20 - 20 - 15`,
            `Trong số những loại phân thuộc công ty CP Phân bón Bình Điền thì phân npk đầu trâu 20 - 20 - 15 là một loại được nhiều người tiêu dùng tin tưởng lựa chọn.Bởi nó có nhiều thành phần và công dụng nổi trội như sau:`,
            `Thành phần dinh dưỡng:`,
            `Chất đạm(N): 20 %`,
            `Lân hữu hiệu(P2O5hh): 20 %`,
            `Kali(K2O): 15 %`,
            `Canxi(CaO): 0.25 %`,
            `Magie(MgO): 0.35 %`,
            `Lưu huỳnh(S): 0.5 %`,
            `Fe: 10ppm, Cu: 5ppm, Zn: 5ppm, B: 10ppm`,
            `Tác dụng`,
            `1. Phân npk đầu trâu 20 - 20 - 15 có ưu điểm hơn một số loại phân thông thường khác là giúp giảm thất thoát phân bón.Nó giúp giảm lượng bón đáng kể có lợi cho nông dân, giúp họ tăng hiệu quả kinh tế nhưng vẫn đảm bảo chất lượng và năng suất.`,
            `2. Khi sử dụng phân npk đầu trâu 20 - 20 - 15 có tác dụng giúp cây trồng sinh trưởng phát triển mạnh.Tăng đề kháng cho cây giúp ngăn ngừa và chống lại sự tàn phá của sâu bệnh khá hiệu quả.Thực tế, đã có rất nhiều người sử dụng phân này và hầu hết đều có phản hồi tích cực.`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro2_1.png'),
            require('../assets/photos/product/pro2_2.png'),
            require('../assets/photos/product/pro2_3.png'),
        ],
        name: `Bình Tưới Cây Greenhome, Dudaco, 2 Lít, Phun Xa 2 Chế Độ, Bơm Nhẹ Tay, Bình Tưới Cây Phun Sương, Bền	`,
        buyCount: 2730,
        rate: 4.9,
        price: 58000,
        info: [


            `ĐẶC ĐIỂM NỔI BẬT:`,
            `-Màu sắc thân thiện, tạo cảm giác gần gũi.`,
            `- Bơm siêu nhẹ tay`,
            `- 2 chế độ tưới cây tiện lợi`,
            `- Tay cầm có lượn sóng theo lòng bàn tay, tạo sự thoải mái`,
            `- Vỏ bình bền chắc sử dụng được trong nhiều năm`,
            `- Ron phốt cao su không bị ảnh hưởng bởi hoá chất`,
            `- Lò xo bằng thép cứng độ dàn hồi cao`,
            `- Béc đồng sản xuất tự động bằng công nghệ CNC, có thể điều chỉnh`,
            `- Loại bình cầm tay nhỏ gọn, dùng để chăm sóc hoa kiểng hoa lan hoặc phun hoá chất các loại với lượng nhỏ`,
            `MÔ TẢ SẢN PHẨM:`,
            `-Bình tưới cây phun sương Dudaco 2 lít có đế đứng tiện lợi`,
            `- Béc đồng, dùng được với các loại hóa chất,`,
            `- Bình tưới cây phun sương vỏ làm bằng chất liệu nhựa cao cấp, chịu lực tốt, không dễ nứt vỡ khi có va chạm trong quá trình sử dụng.Chất liệu này không chứa các hóa chất gây hại, an toàn cho sức khỏe người dùng.`,
            `- Bình xịt phun sương tưới cây có ron phốt cao su không bị ảnh hưởng bởi hoá chất và lò xo bằng thép cứng gia nhiệt, độ đàn hồi cao.`,
            `- Đặc biệt, nhờ được làm bằng chất liệu nhựa nền có tính năng chống bám bẩn cao, giúp bạn dễ dàng chùi rửa và vệ sinh bình tưới nước sau mỗi lần sử dụng, bạn cũng có thể dùng với cần phun nối dài.`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro3_1.png'),
            require('../assets/photos/product/pro3_2.png'),
            require('../assets/photos/product/pro3_3.png'),
        ],
        name: `Xẻng Xúc Đất D30x7, 5cm, Chia Vạch, Hợp Kim Nhôm Chống Gỉ, Tay Cầm Cao Su Chống Trượt	`,
        buyCount: 75,
        rate: 5.0,
        price: 172000,
        info: [
            `ĐẶC ĐIỂM NỔI BẬT dụng cụ làm vườn Hợp kim Nhôm chống gỉ, Tay cầm cao su chống trượt:`,
            `- Bộ dụng cụ làm vườn giúp cho công việc làm vườn trở nên đơn giản hơn.`,
            `- Thiết kế nhỏ gọn, vừa với lòng bàn tay và dễ dàng cất giữ.`,
            `- Sản phẩm làm từ chất liệu hợp kim nhôm cao cấp, bền khi sử dụng.`,
            `- Tay cầm tiện dụng mang lại cảm giác cầm nắm tuyệt vời và thoải mái để giảm mỏi tay.`,
            `– Dễ dàng sử dụng ngay cả đối với phụ nữ và trẻ em.`,
            `- Được thiết kế đặc biệt cho sân vườn và bãi cỏ, để đào, cấy, xới đất, trồng, làm cỏ, v.v.`,
            `- Chiều dài khoảng 30cm, khác biệt với các dụng cụ làm vườn khác ngoài thị trường đang rất nhỏ và kết cấu không chắc chắc`,
            `Với bộ dụng cụ này bạn có thể dùng để xới đất, cào rễ cây, bứng cây, trộn giá thể, trộn phân, vun gốc,...nhỏ nhẹ tinh tế.`,
            `Tác dụng:`,
            `- Dụng cụ trồng cây được thiết kế đặc biệt cho sân vườn và bãi cỏ, để đào, cấy, xới đất, trồng, làm cỏ, v.v.`,
            `- Với bộ dụng cụ này bạn có thể dùng để xới đất, cào rễ cây, bứng cây, trộn giá thể, trộn phân, vun gốc,...`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro4_1.png'),
            require('../assets/photos/product/pro4_2.png'),
            require('../assets/photos/product/pro4_3.png'),
        ],
        name: `BÌNH XỊT CÔN TRÙNG RAID HƯƠNG CAM CHANH / KHÔNG MÙI / LAVENDER 700ML	`,
        buyCount: 401,
        rate: 4.8,
        price: 70000,
        info: [
            `Thông tin Bình xịt muỗi chai 600ml`,
            `Thương hiệuJohnson & Son`,
            `Chứa thành phần diệt muỗi D - allethrin`,
            `Giúp diệt muỗi hiệu quả`,
            `Hương cam chanh thơm mát tự nhiên`,
            `Bảo vệ khỏi bệnh sốt xuất huyết`,
            `Thiết kế chai xịt tiện dụng`,
            `Sản xuất tại: Việt Nam`,
            `Raid là thương hiệu của Mỹ`,
            `Dung tích: 600ml`,
            `Có 3 loại:`,
            `- HƯƠNG DẦU KHUYNH DIỆP`,
            `- HƯƠNG CAM CHANH`,
            `- KHÔNG MÙI`,

            `Thành phần và công dụng:`,

            `Bình xịt muỗi Raid có các thành phần chính là Tetramethrin, D - allethrin, D - phenothrin, khí hóa lỏng, kerosense, hương cam chanh, ...giúp tiêu diệt muỗi một cách hiệu quả.`,
            `Sản phẩm với công thức diệt muỗi tối ưu giúp diệt hết muỗi và bảo vệ gia đình bạn khỏi bệnh sốt xuất huyết.`,
            `Hương thơm mát tự nhiên giúp mang đến cho gia đình bạn một không gian thông thoáng, đuổi sạch muỗi gây hại cho sức khỏe.`,
            `Thiết kế chai xịt rất tiện dụng, bạn có thể xịt vào mọi góc khuất trong nhà như sàn giường, góc tủ, ...điều này giúp tiêu diệt muỗi một cách triệt để nhất...`,

            `Hướng dẫn sử dụng:`,

            `Lắc đều chai.`,
            `Mang găng tay và khẩu trang khi sử dụng, xịt ở khoảng cách 1m so với tường.`,
            `Bảo quản:`,

            `Không để gần nơi có nhiệt độ cao.`,
            `Tránh xa tầm tay trẻ em.`,
            `Để nơi khô thoáng, tránh ánh nắng trực tiếp.`,
            `HSD: 2 năm kể từ ngày sản xuất`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro5_1.png'),
            require('../assets/photos/product/pro5_2.png'),
            require('../assets/photos/product/pro5_3.png'),
        ],
        name: `Thuốc diệt gián sinh học AMB, Viện Hàn lâm khoa học Việt Nam, diệt tận gốc tất cả các loại gián, hiệu quả, diệt gián	`,
        buyCount: 4256,
        rate: 4.8,
        price: 23000,
        info: [
            `Gián loài một loài côn trùng gây nhiều phiền toái cũng như bệnh truyền nhiễm cho con người nặng nhất.Chúng xuất hiện ở khắp ngóc ngách từ khe, kẽ, gầm tủ bếp, case máy tính, nẹp sàn gỗ, tủ đựng đồ, thùng rác, cho tới phòng ăn, nhà vệ sinh …gián không những cắn phá đồ đạc thức ăn mà còn là vật trung gian truyền nhiễm bệnh nguy hiểm như kiết lị, tả, tiêu chảy, chúng làm hoen ổ vật dụng và chạy linh tinh quanh nhà, ngay cả ban ngày  trông rất mất  vệ sinh.`,
            `- Đặc điểm của sản phẩm thuốc diệt gián AMB:`,
            `- Hiệu quả nhanh chóng nhờ hợp chất Dinotefuran sẽ cho tác dụng diệt ngay lập tức với những con gián ăn phải.`,
            `- Diệt gián tận gốc ngay cả với những loại gián đã kháng thuốc thông thường.`,
            `- Thiết kế hộp đựng thông minh vừa dễ dàng đặt vào mọi ngóc ngách, vừa bảo vệ được thuốc gián tránh xa tầm với của trẻ nhỏ.`,
            `- Thời gian sử dụng lâu dài, duy trì hiệu quả diệt gián đến 6 tháng.`,
            `- Thiết Kế An Toàn cho vật nuôi như Chó, Mèo..v.v..`,
            `- Hạn sử dụng: 36 tháng kể từ ngày SX`,
            `Công dụng viên diệt gián AMB:`,
            `1. Đuổi gián siêu tốc bằng chất Dinotefuran ngay từ khi đặt viên đuổi gián`,
            `2. Có tác dụng với cả trứng gián lẫn gián to.Đuổi diệt được tất cả các loại gián.`,
            `3. Đuổi diệt được cả gián ăn trực tiếp hạt, gián ăn phải phân gián hay gián đã chết có ăn thuốc. `,
            `4. Diệt hết tất cả các loại gián đã kháng thuốc thông thường`,
            `Hộp đuổi gián thu hút gián tới ăn, Gián sẽ tha về tổ khiến cho cả đàn bị tiêu diệt.Gián sẽ biến mất hoàn toàn khỏi nhà bạn chỉ sau 2 – 5 ngày sử dụng.`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro6_1.png'),
            require('../assets/photos/product/pro6_2.png'),
            require('../assets/photos/product/pro6_3.png'),
        ],
        name: `Viên nén viên xơ dừa combo 10 viên, đất sạch hữu cơ vi sinh, đất trồng cây TOTT’s fertilizer	`,
        buyCount: 3842,
        rate: 4.8,
        price: 99000,
        info: [
            `COMBO 10 VIÊN NÉN XƠ DỪA`,
            `Số lượng: 10 viên`,
            `Thông tin sp:`,
            `- 80 % là mụn dừa được nghiền nhuyễn và xử lý mầm bệnh`,
            `- 20 % Men vi sinh cao cấp + Chất hữu cơ phụ gia`,
            `- pH = 5.5 - 6.5`,
            `- Đơn giản - Gọn nhẹ - Sạch sẽ - Dễ dàng - Thân thiện - Tiện lợi – An Toàn`,
            `Công dụng:`,
            `- Sử dụng làm giá thể trồng lan rất tốt, giá thể thủy canh, ươm cây, có thể trộn chung với đá trân châu để tăng hiệu quả của sản phẩm.`,
            `- Sử dụng cho việc trộn đất trồng cây trong nhà, ngoài trời để ngăn ngừa sự xói mòn và rửa trôi dinh dưỡng trong đất, tạo độ ẩm, độ tơi cho đất.`,
            `- Dùng làm trang trí trên bề mặt gốc cây, chậu hoa, chống côn trùng, mùi hôi.`,
            `- Tạo lớp phủ mặt đất, trang trí bề mặt sân vườn một cách kinh tế.`,
            `Hữu cơ và bền vững:`,
            `100 % hữu cơ, độ bền cao và phân hủy sinh học.`,
            `Hướng dẫn sử dụng:`,
            `-Bước 1: Chuẩn bị số lượng khối nén mụn dừa cần dùng tương đương với thể tích dụng cụ ngâm khối xơ dừa`,
            `- Bước 2: Đổ 3 - 4 lít nước / khối và ngâm trong khoảng 10 phút, dùng tay bóp để vỡ vụn ra tốt hơn`,
            `- Bước 3: Bạn có khoảng 2 - 4 kg mụn dừa sạch`,
            `- Bước 4: Tiến hành trồng rau sạch, rau mầm, bón vào cải tạo đất,..trồng lan, cây kiểng..`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro7_1.png'),
            require('../assets/photos/product/pro7_2.png'),
            require('../assets/photos/product/pro7_3.png'),
        ],
        name: `Bộ 3 Món Dụng Cụ Làm Vườn To(Xẻng Làm Vườn - Xới Đất - Cào Đất) 	`,
        buyCount: 582,
        rate: 4.8,
        price: 34000,
        info: [
            `Bộ Dụng Cụ Làm Vườn Mini 3 Món `,
            `Bộ dụng cụ làm vườn mini với 3 dụng cụ gồm: 1 xẻng xúc đất, 1 cấy xới đất và 1 bàn cào đất. `,
            `- Bộ dụng cụ gọn nhẹ, thuận tiện cho việc chăm sóc các tiểu cảnh mà không làm bẩn tay. `,
            `- Dễ dàng sử dụng, kể cả với trẻ em. `,
            `- Chất liệu: gỗ và sắt sơn tĩnh điện đen rất bền và chắc. `,
            `- Kích thước: dài 18 - 22cm `,

            `Bộ Dụng Cụ Làm Vườn Mini 3 Món Tính năng sản phẩm:`,
            `- Bộ dụng cụ gồm 3 món, giúp cho công việc làm vườn trở nên đơn giản hơn.`,
            `- Thiết kế nhỏ gọn, vừa với lòng bàn tay và dễ dàng cất giữ`,
            `- Dễ dàng sử dụng, với bộ dụng cụ làm vườn, vườn hoa, vườn rau của bạn sẽ luôn tươi xanh. `,
            `- Được làm từ chất liệu cán gỗ nhẹ nhàng dễ dàng sử dung`,
            `- Với bộ làm vườn 3 món cho bạn thêm yêu vườn hoa của mình hơn.`,
            `- Công dụng: cào xới đất làm đất tơi xốp, thoát nước tốt. `,
            `Bộ Dụng Cụ Làm Vườn Mini 3 Món được thiết kế nhỏ gọn, giúp bạn dễ dàng chăm sóc cho khu vườn của mình.Với bộ dụng cụ 3 món công việc làm vườn sẽ trở nên dễ dàng hơn bao giờ hết và cho bạn thêm yêu những cây xanh hoa lá trong vườn.Chúng được làm bằng sắt sơn tĩnh điện rất cứng bạn tha hồ đào, xới, trộn không bị gẫy.Đồng thời tay cầm được bao bọc bằng gỗ điều này giúp bạn không bị trơn tuột trong quá trình làm vườn.`,
            `- Thông thường các bà con nông dân làm việc đồng áng sẽ dùng những cái cuốc, xẻng, cào to, phải dụng 2 tay.Tuy nhiên chúng ta thường trồng rau củ, hoa trong chậu, thùng xốp diện tích hẹp nên việc sử dụng dụng cụ mini sẽ hợp lý và dễ dàng hơn, ít làm vương vãi đất ra ngoài. `,
            `- Với kích thước mini hoàn toàn phù hợp trẻ nhỏ, không gây nguy hiểm cho bé.Tạo điều kiện cho bé tìm hiểu thêm về thiên nhiên và thỏa sức khám phá mọi thứ xung quanh.`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro8_1.png'),
            require('../assets/photos/product/pro8_2.png'),
            require('../assets/photos/product/pro8_3.png'),
        ],
        name: `Que cắm tưới lắp chai nhựa Đầu cắm tưới nhỏ giọt điều chỉnh lắp chai Đầu tưới cây tự động	`,
        buyCount: 536,
        rate: 4.9,
        price: 11500,
        info: [
            `Đầu tưới nhỏ giọt gắn vừa các chai nước ngọt phổ thông giúp bạn làm hệ thống tưới nhỏ giọt hiệu quả tại nhà đơn giản`,
            `* Có thể kiểm soát tốc độ dòng chảy.Thiết bị tưới cây có van điều khiển có thể kiểm soát tốc độ nhỏ giọt 0 - 60 giây / 1 lần giọt và có thể duy trì khả năng tưới nước nhỏ giọt trong khoảng 1 - 21 ngày tùy vào thiết lập tốc độ nhỏ giọt và dung tích của chai nước.Chai phù hợp: Chai Sprite 500ml, chai Coca - Cola, pepsi.c2, trà xanh 300ml .500ml.1500ml hoặc 2, 3 lít `,
            `Chất liệu: PP`,
            `* Đơn giản và tiện lợi, không cần cài đặt rườm rà, chỉ cần khoan một số lỗ ở đáy chai hoặc cắt phần đuôi chai`,
            `* Lượng nước chính xác, điều chỉnh lượng nước khác nhau cho các loại cây và hoa khác nhau, không làm chết cây trồng do tưới nước quá ít hoặc quá nhiều.Ở một số loại thực vật, lá già chỉ chuyển sang màu vàng và rụng.Những lá mới phát triển chuyển sang màu vàng có thể là một dấu hiệu của việc tưới nước quá mức.`,
            `* Hãy tận hưởng kỳ nghỉ của bạn với gia đình, để lại những cây trồng của bạn với sản phẩm tưới nước nhỏ giọt này.Thích hợp cho rau, vườn trong nhà và ngoài trời, chậu cây hàng ngày, cây trong nhà, thảo mộc, cây trong vườn, cây trồng trong giỏ treo`,
            `- Tiết kiệm nước tối đa, nhỏ gọn và tinh tế, dễ dàng sử dụng.`,
            `- Có van điều chỉnh tốc độ nhỏ giọt.`,
            `- Được làm bằng nhựa an toàn, thân thiện môi trường.`,
            `- Thời gian tiếp nước có thể từ 3 - 7 ngày tuỳ vào thể tích bình.`,
            `- Kích thước: 3x3x13.5 cm`,
            `- Màu sắc: Xanh lá và xanh dương.`,
            `- Lưu ý sử dụng cho các loại chai có nắp dài như aqua(lavie không dùng được), và phải đục 1 lỗ nhỏ trên đáy bình để thông khí.`,
            `- Sản phẩm bán không bao gồm chai nhựa kèm theo.`,
            `- Màu sắc có thể khác nhau do từng lô hàng, hoặc do cài đặt màn hình khác nhau, vui lòng nhắn tin cho shop để biết màu sắc chính xác của từng lô hàng.`,
            `Hướng dẫn: Đổ đầy chai PET và chèn vào đất, sau đó nước sẽ chảy ra khỏi lỗ do áp suất thủy tĩnh.Đất hấp thụ nước trong chai, áp suất trong chai giảm dần, và sau đó nước không chảy ra. `,
            `Nhiều ứng dụng: Thích hợp cho cây trồng trong nhà và ngoài trời  `,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro9_1.png'),
            require('../assets/photos/product/pro9_2.png'),
            require('../assets/photos/product/pro9_3.png'),
        ],
        name: `Găng tay làm vườn thiết kế thông minh hỗ trợ móng vuốt dùng cào xới đất	`,
        buyCount: 504,
        rate: 4.8,
        price: 34000,
        info: [
            `Tên sản phẩm: Bộ găng tay làm vườn`,
            `Size: free size`,
            `Màu: xanh lam phối đen, tím phối đen.màu nâu phối đen.`,
            `Chất liệu: nhựa móng tay là từ nhựa`,
            `Tính năng: Bộ găng tay làm vườn thiết kế thông minh  hỗ trợ móng vuốt dùng cào xới không làm tổn thương tay được làm từ nhựa ABS.Bao tay nhẹ nhàng mang êm vừa cho tay nam và nữ`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro10_1.png'),
            require('../assets/photos/product/pro10_2.png'),
            require('../assets/photos/product/pro10_3.png'),
        ],
        name: `CHẬU TRỒNG RAU, TRỒNG HOA CÂY CẢNH CÓ VỈ THOÁT NƯỚC THÔNG MINH	`,
        buyCount: 20798,
        rate: 4.8,
        price: 15000,
        info: [
            `Kích thước: 48x20x16cm`,

            `ỨNG DỤNG CHẬU TRỒNG RAU THÔNG MINH TRỒNG RAU TẠI NHÀ`,
            `Loại chậu trồng rau chuyên dụng này, do có lớp lưới nhựa ngăn cách giữa 2 tầng nên có ưu điểm thoát nước tốt hơn, giữ được độ ẩm cần thiết lâu dài hơn và khả năng chống xói mòn cho đất cũng đặc biệt tốt.`,
            `Do vậy loại chậu này trồng rau rất tốt, thậm chí bạn cũng không cần sử dụng lượng đất nhiều như cách trồng rau truyền thống vẫn đủ dinh dưỡng và nước cho cây trồng phát triển.`,

            `Trên các khay trồng rau thông thường, chúng ta thường phải đục các lỗ bên hông, dưới đáy chậu để tránh ngập úng cho cây trồng.Tuy nhiên khả năng thoát nước của chúng thường không tốt do các lỗ bị đất đá bịt kín, dẫn đến rau của bạn bị ngập úng, vàng lá và không phát triển tốt.`,
            `Với chậu trồng rau thông minh, lượng nước dư thừa được lọc qua một tấm lưới với thiết diện rộng và nhiều lỗ Nhờ vậy nước dễ dàng chảy xuống phần dưới đáy chậu và chảy ra ngoài với chỉ 1 hoặc 2 lỗ nhỏ`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro11_1.png'),
            require('../assets/photos/product/pro11_2.png'),
            require('../assets/photos/product/pro11_3.png'),
        ],
        name: `Đất Sạch Trồng Rau, Hoa Kiểng Lavamix 6.5dm Tiện Lợi, Dễ Sử Dụng	`,
        buyCount: 17600,
        rate: 4.9,
        price: 23000,
        info: [
            `Đất Sạch Trồng Rau Lavamix 6.5dm Tiện Lợi, Dễ Sử Dụng`,
            `Khối lượng trên dưới 3kg(Tùy độ ẩm)`,

            `Đặc tính:`,
            `Lavamix potting soil là hỗn hợp đất trồng sản xuất từ nguồn hữu cơ tự nhiên giàu dinh dưỡng.Sản phẩm được bổ sung đầy đủ và cân đối các thành phần dinh dưỡng, khoáng chất, vi sinh vật có ích.`,
            `Sản phẩm đã xử lý tuyến trùng gây hại cho cây trồng và môi trường, giúp cây trồng sinh trưởng và phát triển tốt.`,
            `Lavamix potting soil không sử dụng nguyên liệu mùn xử lý từ rác thải, không tồn dư kim loại nặng, đảm bảo đặc tính thân thiện với môi trường, phù hợp cho quy trình trồng rau hữu cơ, rau sạch.`,

            `Thành phần`,
            `Đất mùn phù sa và các chất hữu cơ tự nhiên giàu dinh dưỡng; khoáng chất đa, trung, vi lượng; vi sinh vật có ích và nguồn hữu cơ sinh học Minro.`,

            `Hướng dẫn sử dụng`,
            `.Dùng Lavamix để gieo, trồng mới: rau màu, hoa kiểng và các loại cây khác với lượng dùng không hạn chế.Trải lớp đất với độ dày 5 - 7cm khi gieo rau mầm, ươm cây con.`,
            `.Thay thế đất cũ trong chậu: xới bỏ bề mặt 20 % -40 % lượng đất cũ, bổ sung đất trồng Lavamix vừa đủ, tránh làm vỡ bầu cây khi thay đất`,
            `.Lavamix có thể dùng bón lót cho mọi cây trồng trong mọi giai đoạn; dùng rải bón lót thảm cỏ sân golf`,
            `=> Ngay sau khi trồng: ém nhẹ quanh gốc và tưới nước sạch đủ ẩm.`,

            `Cảnh báo, bảo quản: Nơi khô ráo, thoáng mát.Tránh tầm tay trẻ em.`,

            `Ngày SX: xem trên bao`,
            `Hạn sử dụng: 3 năm kể từ ngày sản xuất`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro12_1.png'),
            require('../assets/photos/product/pro12_2.png'),
            require('../assets/photos/product/pro12_3.png'),
        ],
        name: ` Dừa cắt miếng ONEFARMS đã tán, dừa cục, xơ dừa cục size 1, 2, 3cm, đã xử lý trát	`,
        buyCount: 2476,
        rate: 4.9,
        price: 14000,
        info: [
            `GHI CHÚ: ĐÂY LÀ XƠ DỪA CỤC ĐÃ TÁN, ĐỘ ẨM 15 - 20 %, ĐÃ XỬ LÝ TRÁT, VỀ DÙNG ĐƯỢC LUÔN.`,
            `Xơ dừa cục / xơ dừa viên rất hữu hiệu giúp cây trồng chậu tránh ứ đọng nước gây úng`,
            `Xơ dừa cục giúp rễ bám chặt, thoáng đất, hấp thu phân bón dễ dàng`,
            `Size 1 - 2, 3cm thích hợp cho cây và chậu nhỏ, tiện cho cá nhân sử dụng`,
            `Xơ dừa già, không có chất chát, không gây nấm bệnh, an toàn và tốt cho cây`,
            `ĐẶC BIỆT: `,
            `* ĐÃ ĐƯỢC XỬ LÝ bằng quá trình ngâm xả cho đến khi đạt EC tiêu chuẩn 0.5 và có độ pH cân bằng, an toàn cho tất cả các loại cây trồng: kiểng lá cao cấp, lan đột biến, bonsai, cây cảnh, ...`,
            `* Sau khi ngâm xả, sp được qua quá trình sấy giảm ẩm để tiện cho quá trình vận chuyển và bảo quản lâu dài`,
            `HƯỚNG DẪN SỬ DỤNG:`,
            `• Ngâm vào nước 1 - 2 phút để dừa hút nước sau đó trộn sử dụng được ngay`,
            `• Lót đáy chậu nếu muốn tăng khả năng thoát nước`,
            `• Trộn với giá thể khác(perlite, pumice, peatmoss,..) để trồng cây hoặc sử dụng 100 % dừa để trồng`,
            `• Rải mặt chậu giữ ẩm`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro13_1.png'),
            require('../assets/photos/product/pro13_2.png'),
            require('../assets/photos/product/pro13_3.png'),
        ],
        name: `1kg Đất sạch vi sinh siêu dinh dưỡng - Đất đa dụng sạch giàu dinh dưỡng dung để trồng hoa cây cảnh	`,
        buyCount: 2223,
        rate: 4.9,
        price: 5000,
        info: [
            `Đất sạch vi sinh siêu dinh dưỡng`,
            `Khối lượng: 1Kg `,

            `Đất hữu cơ vi sinh hỗn hợp là loại đất được chế biến từ nguyên liệu chính là xơ dừa đã được xử lý sạch và loại bỏ tạp chất, kết hợp với đất thịt, trấu đốt và phân bò.Sau đó, hỗn hợp được trộn đều và ủ với vôi và phân vi sinh cao cấp nhằm tăng ưu thế những vi sinh vật có lợi cho phát triển cây trồng.Nhờ vậy, đất hữu cơ hỗn hợp giúp cây trồng mọc và tăng trưởng nhanh.`,

            `Cách dùng:`,
            `– Dùng hỗn hợp đất hữu cơ hỗn hợp để thay thế các loại đất trồng thông thường khác, khi trồng cây chỉ cần ém nhẹ đất quanh gốc và tưới nước đủ ẩm`,
            `– Ở ngoài vườn chỉ cần xới lớp đất mặt rồi phủ lên lớp với độ dày từ 1 - 3 cm để làm đất nền cho việc gieo, trồng tất cả các loại rau sạch, hoa, cây con,…`,
            `– Thay thế đất cũ đã nghèo chất dinh dưỡng.Sử dụng với số lượng không hạn chế.`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro14_1.png'),
            require('../assets/photos/product/pro14_2.png'),
            require('../assets/photos/product/pro14_3.png'),
        ],
        name: `Đá Perlite trồng cây trồng hoa hồng trồng sen cân nặng khoảng 0.5kg	`,
        buyCount: 2854,
        rate: 4.9,
        price: 19000,
        info: [
            `Đá Perlite hay còn gọi là đá trân châu.`,
            `Là một loại đá trơ chứa thành phần Silic cao, được hình thành ở nhiệt độ cao tự nhiên trong dòng dung nham núi lửa hoặc sản xuất nhân tạo qua các phản ứng nhiệt sẽ tạo ra đá perlite.`,
            `Đá perlite có dạng thể hang(dạng xốp) nên perlite có thể tích lớn nhưng cực kỳ nhẹ.`,
            `do đặc tính đó nên từ lâu con người đã ứng dụng các tính năng của đá perlite để tạo các loại đồ gốm chất lượng cao với trọng lượng rất nhẹ.và sau này con người đã lợi dụng ưu điểm đó để làm các loại bê tông siêu nhẹ có khả năng cách nhiệt cách âm cực kỳ tốt.`,
            `Đặc tính cách nhiệt của đá Perlite: do nhiệt độ nóng chảy ở 1260 độ C và ở thể hang nên đá perlite được ứng dụng trong các vật liệu chống cháy ở Két sắt, cửa chống cháy, lót ống khói...`,
            `Đá Perlite có khả năng giảm lan truyền âm thanh giữa các bức tường nên thường được sử dụng trong các phòng thu âm, phòng họp, phòng karaoke...`,
            `Và quan trọng nhất đó là khả năng ứng dụng trong nông nghiệp cực kỳ hiệu quả,`,
            `Hầu hết các nhà vườn trồng cây giống ở Mỹ đều sử dụng đá perlite trộn với tỷ lệ 30 % - 50 % (tùy loại cây trồng) với đất dinh dưỡng để trồng các loại cây thông thường, hoặc trộn với các loại giá thể trơ ngậm nước khác như rockwool hay dớn trắng mềm.Còn ở Việt Nam thường trộn với cám dừa đã qua xử lý tanin.`,
            `Do đá perlite có cấu trúc thể hang nên nó có thể ngậm nước, chất dinh dưỡng, điều hoa nhiệt độ độ ẩm cho chất trồng giúp cho đất tơi xốp thoáng khí giúp cho bộ rễ phát triển rất mạnh.Từ đó cây sẽ cho quả với năng suất cao, nhiều hoa và đẹp hơn.`,
            `Đặc biệt là các công trình trồng cây, hoa trên mái nhà hoặc nhà cao tầng đá perlite sẽ giúp giảm nhẹ trọng lượng cho chất trồng từ 30 - 50 %.`,
            `Với cây bắt mồi, cây ăn thịt thì perlite là một loại chất trộn không thể thiếu.và hỗn hợp chất trồng tốt nhất trồng cây ăn thịt, cây bắt mồi với tỷ lệ 1: 1 giữa đá perlite và dớn trắng mềm. `,
            `Dớn trắng có khả năng ngậm nước, kháng khuẩn tự nhiên và vận chuyển oxy, chất dinh dưỡng cực tốt cộng với khả năng tạo thông thoáng và điều hòa nhiệt độ, độ ẩm của đá perlite sẽ trở thành một hỗn hợp tạo điều kiện cho các loại cây bắt mồi, cây ăn thịt phát triển tốt nhất đẹp nhất, cây nắp ấm sẽ cho ra những cái ấm cứng, to hơn màu đẹp hơn, và cây bẫy kẹp venus flytrap cũng sẽ cho ra những cái kẹp to hơn và màu sắc bên trong kẹp cũng sặc sở, quyến rũ hơn...để mời gọi nạn nhân côn trùng xấu số.`,
        ]
    },
    {
        img: [
            require('../assets/photos/product/pro15_1.png'),
            require('../assets/photos/product/pro15_2.png'),
        ],
        name: `Đất sạch dinh dưỡng tribat bao to 20dm3, đất trồng dùng không thay thế trồng rau mầm, hoa, tulip GiongRauSach	`,
        buyCount: 183,
        rate: 5.0,
        price: 49000,
        info: [
            `Màu sắc	Xám đen`,
            `Khối lượng	10 kg`,
            `Kích thước(Dài x rộng x cao)	40 x 30 x 15 cm`,
            `Quy cách	Đóng bao dứa`,
            `Dung tích	20 dm3`,
            `Độ bền > 5 năm`,
            `Hạn sử dụng	Vĩnh viễn`,
            `Nhiệt độ bảo quản	Nhiệt độ phòng tránh nước, để nắng đất càng mục, trước khi dùng, trồng nên tưới nước trước 1h`,
            `SX: Việt Nam`,
            `Bảo hành	1 đổi 1 trong vòng 1 tháng`,

            `Đất sạch trồng rau Tribat dinh dưỡng thành phần chính là mụn xơ dừa(vỏ dừa xay nhỏ) trộn chung với đất nuôi trùn đỏ.Đất sạch Tribat là loại đất hữu cơ chuyên dụng  để trồng rau sạch giúp cây sinh trưởng và phát triển toàn diện nuôi dưỡng cây trồng trong một thời gian dài mà không cần bón thêm loại phân hóa học nào.`,
            `Đất Tribat sạch dinh dưỡng trồng rau ăn lá, hoa, cây cảnh 20dm3 tương đương 10kg đã đầy đủ thành phần dinh dưỡng khi trồng rau bằng đất Tribat, hay trồng hoa ươm cây giống không cần bón thêm phân hóa học nào khác`,
            `Giàu dinh dưỡng hữu cơ, có sự tồn tại nhiều chủng vi sinh vật hữu ích như Lactobacillus, nấm men, Actinomycetes…Qua quá trình lên men Bokashi tạo ra sản phẩm cao cấp, độc đáo có thể dùng như:`,
            `+ Giá thể trồng cây`,
            `+ Hỗn hợp hữu cơ cải tạo đất`,
            `+ Phân bón hữu cơ`,
            `+ Giúp cho cây sinh trưởng và phát triển toàn diện`,
            `Tác dụng:`,
            `Thành phần chính là mụn xơ dừa(vỏ dừa xay nhỏ) trộn chung với đất nuôi trùn đỏ.Đất nuôi trùn đỏ là hỗn hợp gồm một phần đất thịt, nhiều phần mụn xơ dừa và bổ sung thức ăn cho trùn, con trùn đỏ được nuôi trong hỗn hợp này, nó tổng hợp chất hữu cơ có trong hỗn hợp và biến đổi mụn xơ dừa thành ""cái gì đó giống giống đất"".Người ta thu hoạch trùn đỏ để xuất khẩu cho các nước có ngành câu cá giải trí phát triển(Nga, Bắc Âu...) rồi xúc đất đã nuôi trùn trộn với mụn xơ dừa để trở thành đất sạch(loại đóng bao bì kín, có in tên nhà sx hẳn hoi), loại trừ nấm và vi khuẩn vi trùng.Như vậy thành phần chính của đất sạch là mụn xơ dừa đã qua xử lý sinh học có bổ sung một số nguyên tố vi lượng.`,
            `+ Nuôi dưỡng cây trồng trong một thời gian dài mà không cần bón thêm bất kỳ một loại phân bón nào`,
            `+ Kết cấu hợp lý tạo điều kiện cho hệ rễ phát triển tăng cường khả năng hấp thụ của cây`,
            `+ Dinh dưỡng đầy đủ và cân đối`,
            `+ Môi trường hoàn toàn sạch sâu bệnh`,
            `+ Không độc hại cho người và môi trường xung quanh`,

            `Thành phần:`,
            `+ Chất hữu cơ: 24.91 %`,
            `+ Hàm lượng mùn: 14.45 %`,
            `+ N tổng số: 0.90 %`,
            `+ K20 tổng số: 0.73 %`,
            `+ P2O5 tổng số: 0.30 %`,
            `+ CEC: 44.69meq / 100g`,
            `+ Các trung, vi lượng gồm Mg, Mn, Zn, B, Cu, Mo, Sắt dạng Chelate. `,
            `+ Tỷ lệ còn lại là các hạt cấp hạt khác nhau.`,

            `Hướng dẫn sử dụng:`,
            `+ Dùng hỗn hợp đất sạch giàu dinh dưỡng trồng cây trong hộc, trong chậu, hố, bồn hay trồng cây sân vườn… với số lượng không hạn chế.Khi trồng cây chỉ cần ém nhẹ đất quanh gốc và tưới nước đủ ẩm. `,
            `+ Thay thế đất cũ bạc màu trong những chậu đã trồng cây lâu năm bằng với lượng vừa đủ. `,
            `+ Sử dụng với độ dày từ 3 – 5cm làm đất nền cho việc gieo cấy tất cả các loại rau sạch hoặc phục vụ cho việc gieo ươm cây con.`,
            `Khi đất giảm dinh dưỡng nên sử dụng dung dịch thủy canh để tưới bổ sung cho cây, sử dụng đất này phù hợp với trồng rau mầm các loại`,
        ]
    },

]