/* eslint-disable no-unused-vars */

import moment from 'moment';

function getDay(day = 0) {
	return moment().add(day, 'days').format('YYYY.MM.DD');
}
function getTime(day = 0, second = 0) {
	return moment()
		.add(day, 'days')
		.add(second, 'seconds')
		.format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (clientId, nextSeq) => {
	return {
		// 회원
		user: [
			{
				_id: await nextSeq('user'),
				email: 'admin@market.com',
				password:
					'$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
				name: '무지',
				type: 'admin',
				image: `/files/${clientId}/user-muzi.webp`,
				createdAt: getTime(-100, -60 * 60 * 3),
				updatedAt: getTime(-100, -60 * 60 * 3),
			},
			{
				_id: await nextSeq('user'),
				email: 's1@market.com',
				password:
					'$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
				name: '네오',
				type: 'seller',
				image: `/files/${clientId}/user-neo.webp`,
				createdAt: getTime(-50),
				updatedAt: getTime(-30, -60 * 60 * 3),
			},
			{
				_id: await nextSeq('user'),
				email: 'u1@market.com',
				password:
					'$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
				name: '어피치',
				type: 'user',
				createdAt: getTime(-40, -60 * 30),
				updatedAt: getTime(-30, -60 * 20),
			},
			{
				_id: await nextSeq('user'),
				email: 'test@test.com',
				password: '123!@#qwe',
				name: '여윤민',
				type: 'user',

				phone: '01012345678',
				address: '서울시 강남구 강남동',
				createdAt: getTime(),
				updatedAt: getTime(),

				extra: {
					baby: {
						name: '윤민베이비',
						month: 'step1',
						gender: "man",
						birth: '20240801',
						grow: [
							{
								weight: 12.3,
								height: 50,
								date: "20240802"
							}
						]
					},
					subscribe: "true"
				}
			},
			{
				_id: await nextSeq('user'),
				email: "test1@test.com",
				password: "123!@#qwe",
				name: "여윤윤",
				type: "user",
				phonenumber: "01012345688",
				address: "서울시 강남구 강남동",
				createdAt: getTime(),
				updatedAt: getTime(),

				extra: {
					baby: {
						name: "윤윤베이비",
						month: "step3",
						gender: 'woman',
						birth: "20240809",
						grow: [
							{
								weight: 12.3,
								height: 45.6,
								date: "20240802",
							},
							{
								weight: 15.6,
								height: 50,
								date: "20240803",
							},
							{
								weight: 18.6,
								height: 10,
								date: "20240807",
							},
							{
								weight: 19.6,
								height: 30,
								date: "20240807",
							},
							{
								weight: 35.6,
								height: 567,
								date: "20240807",
							},
						]
					},
					subscribe: "false",
				}
			}
		],
		// 상품
		// 현재 seller = seller_id : 2 로 설정
		product: [
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '기저귀',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '젖병',
				active: true,
				show: true,
				image: `/files/${clientId}/sample_product.webp`,
				quantity: 1,
				buyQuantity: 1,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '분유',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '체온계',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '아기 손수건',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '모빌',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '아기띠',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '턱받이',
				image: `/files/${clientId}/user-muzi.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '물티슈',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '쪽쪽이',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 1,
				name: '손싸개',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '이유식기',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '놀이매트',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '식기 보조기',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '치발기',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '젖병 세척 용품',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '자외선 차단제',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '물병',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '목욕타올',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '목욕용품',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 2,
				name: '애기 로션',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '장난감',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '체중계',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '기저귀',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '빨대컵',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '아기용 수건',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '소리나는 책',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '과일 쪽쪽이',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '아기용 식판',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 3,
				name: '아기용 손수건',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '보행기',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '모서리 보호대',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '서랍장 잠금장치',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '단계별 장난감',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '보드북',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '책',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '문 안전장치',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '식기 세트',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '구급상자',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 4,
				name: '모자',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '뽁뽁이 신발',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '블럭',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '퍼즐',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '미술용품',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '아기 욕조',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '아기 세면대',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '스케치북',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '소리나는 장난감',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '그림책',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 5,
				name: '대근육 발달 놀이기구',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '자동차 장난감',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '소리책',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '미끄럼틀',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '모래놀이 세트',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '아기 배낭',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '아기 비누',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '아기 샴푸',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 6,
				name: '미끄럼 방지 식탁 매트',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '자전거',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '아기 악기',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '크레파스',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '색연필',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '아기 식판',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '자전거 헬멧',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '훈련용 팬티',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '퍼즐',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '침대 가드레일',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
			{
				_id: await nextSeq('product'),
				part: 7,
				name: '알파벳 장난감',
				image: `/files/${clientId}/sample_product.webp`,
				active: true,
				show: true,
				quantity: 1,
				buyQuantity: 0,
				seller_id: 2,
			},
		],
		// 아이 단계
		// step: [
		// 	{
		// 		level: 1,
		// 		description: [
		// 			'아기는 머리를 가누는 능력이 발달하며, 근육이 점차 강화됩니다.',
		// 			'가까운 물체를 인식하고 소리에 반응하는 등 감각이 급격히 발달합니다.',
		// 			'부모의 얼굴을 인식하고 미소를 짓는 등 사회적 상호작용을 시작합니다.',
		// 			'다양한 신생아 반사를 보이며, 이는 뇌와 신경계의 발달을 반영합니다.',
		// 		]
		// 	},
		// 	{
		// 		level: 2,
		// 		description: [
		// 			'아기는 엎드리기, 앉기, 뒤집기 등의 운동 능력이 발달하며, 이동을 위한 기초적인 움직임을 시작합니다.',
		// 			'주변 환경에 대한 탐색이 활발해지며, 손과 입을 사용해 다양한 물체를 탐색하고 감각적으로 경험합니다.',
		// 			'옹알이를 시작하고, 다양한 소리를 내며, 감정 표현이 더욱 풍부해집니다. 부모와의 상호작용이 중요해집니다.',
		// 			'부모와의 정서적 유대감이 깊어지며, 낯선 사람에 대한 경계심이 생기기도 합니다.',
		// 		]
		// 	},
		// 	{
		// 		level: 3,
		// 		description: [
		// 			'아기는 기기, 일어서기, 심지어 혼자 서는 능력을 보이며, 이동 능력이 현저히 향상됩니다.',
		// 			'물체를 집거나 조작하는 능력이 발달하며, 손가락 사용이 더욱 정교해지고, 작은 물체를 집는 능력이 향상됩니다.',
		// 			'옹알이에서 단어처럼 들리는 소리를 내기 시작하고, 부모의 말에 반응하며, 기본적인 의사소통이 이루어집니다.',
		// 			'부모와의 상호작용이 깊어지고, 낯선 사람에 대한 경계가 더욱 뚜렷해지며, 애착 형성이 강화됩니다.',
		// 		]
		// 	},
		// 	{
		// 		level: 4,
		// 		description: [
		// 			'아기는 혼자 걷는 능력을 보이며, 기어다니기와 일어서기를 통해 이동 능력이 더욱 향상됩니다.',
		// 			'기본적인 단어(예: "엄마", "아빠")를 말하기 시작하고, 주변의 언어에 반응하며 의사소통 능력이 발전합니다.',
		// 			'또래 아기와의 상호작용이 증가하고, 간단한 놀이를 통해 사회성을 기릅니다.',
		// 			'주변 환경에 대한 호기심이 커지며, 다양한 물체를 탐색하고 조작하는 능력이 발달합니다.'
		// 		]
		// 	},
		// 	{
		// 		level: 5,
		// 		description: [
		// 			'아기는 걷는 능력이 더욱 안정되어지고, 기어다니기와 뛰기 등의 운동 능력이 향상됩니다.',
		// 			'어휘가 늘어나며, 두세 개의 단어로 짧은 문장을 만들기 시작하고, 의사소통 능력이 크게 발전합니다.',
		// 			'자기 주도적인 행동이 증가하고, 다른 사람과의 상호작용을 통해 사회성을 더욱 기릅니다.',
		// 			'놀이를 통해 문제 해결 능력과 창의력이 발달하며, 다양한 물체를 조작하고 탐색하는 데 흥미를 보입니다.'
		// 		]
		// 	},
		// 	{
		// 		level: 6,
		// 		description: [
		// 			'아기는 걷는 능력이 더욱 향상되어 뛰거나 방향을 바꾸는 등의 운동 능력이 발달합니다.',
		// 			'어휘가 급격히 증가하며, 간단한 문장을 사용해 의사소통을 하고 자신의 감정을 표현합니다.',
		// 			'자기 주도적인 행동이 두드러지며, 독립적으로 놀이를 하거나 다른 아기와 상호작용을 시도합니다.',
		// 			'탐색 욕구가 강해져 주변 환경에 대한 호기심을 가지고 다양한 물체를 실험하고 조작합니다.'
		// 		]

		// 	},
		// 	{
		// 		level: 7,
		// 		description: [
		// 			'아기는 걷기, 뛰기, 기어다니기 등 다양한 이동 능력이 더욱 향상되어 활동적이 됩니다.',
		// 			'어휘가 급격히 늘어나며, 두세 개의 단어로 문장을 만들고 자신의 생각이나 감정을 표현합니다.',
		// 			'자기 주도적인 놀이가 증가하고, 다른 아기들과의 상호작용을 통해 사회성을 더욱 기릅니다.',
		// 			'주변 환경에 대한 호기심이 커지며, 문제 해결 능력을 발달시키기 위해 다양한 물체를 탐색하고 실험합니다.'
		// 		]

		// 	},
		// ],
		// 주문
		order: [],
		// 후기
		reply: [],
		// 장바구니
		cart: [],
		// 즐겨찾기/북마크
		bookmark: [],
		// QnA, 공지사항, 게시판
		post: [
			{
				_id: await nextSeq('post'),
				type: 'info',
				title: '정보 게시판 사용안내.',
				views: 5,
				user: {
					_id: 1,
					name: '무지',
					image: `/files/${clientId}/user-muzi.webp`,
				},
				content: '좋은 정보 많이 공유해 주세요.',
				replies: [
					{
						_id: 1,
						user_id: 2,
						user: {
							_id: 2,
							name: '네오',
							image: `/files/${clientId}/user-neo.webp`,
						},
						content: '1등',
						like: 5,
						createdAt: getTime(-2, -60 * 60 * 20),
						updatedAt: getTime(-2, -60 * 60 * 2),
					},
					{
						_id: 2,
						user_id: 3,
						user: {
							_id: 3,
							name: '어피치',
						},
						content: '넵',
						like: 7,
						createdAt: getTime(-2, -60 * 60 * 10),
						updatedAt: getTime(-2, -60 * 60 * 1),
					},
				],
				createdAt: getTime(-3, -60 * 60 * 2),
				updatedAt: getTime(-3, -60 * 60 * 2),
			},
			{
				_id: await nextSeq('post'),
				type: 'music',
				title: '일일 DJ, GD 입니다',
				views: 5,
				user: {
					_id: 2,
					name: '네오',
					image: `/files/${clientId}/user-neo.webp`,
				},
				content: '좋은 노래 많이 신청해 주세요.',
				replies: [
					{
						_id: 1,
						user_id: 2,
						user: {
							_id: 2,
							name: '네오',
							image: `/files/${clientId}/user-neo.webp`,
						},
						like: 5,
						content: '삐딱하게 틀어주세요',
						videoId: 'RKhsHGfrFmY',
						extra: {
							artist: 'GD',
							title: 'G-DRAGON - 삐딱하게(CROOKED) M/V',
						},
						createdAt: getTime(-2, -60 * 60 * 20),
						updatedAt: getTime(-2, -60 * 60 * 2),
					},
					{
						_id: 2,
						user_id: 3,
						user: {
							_id: 3,
							name: '어피치',
						},
						content: '비가오니까 에픽하이의 우산이 듣고 싶어요.',
						like: 13,
						videoId: 'NIPtyAKxlRs',
						extra: {
							artist: '에픽하이',
							title: '에픽하이(Epik high) - 우산 (Feat. 윤하)',
						},
						createdAt: getTime(-2, -60 * 60 * 10),
						updatedAt: getTime(-2, -60 * 60 * 1),
					},
				],
				createdAt: getTime(-3, -60 * 60 * 2),
				updatedAt: getTime(-3, -60 * 60 * 2),
			},
		],
		// 코드
		code: [
			{
				_id: 'activePost',
				title: '활성 게시판',
				codes: [
					{
						sort: 2,
						code: 'AP01',
						value: '문의 게시판',
						active: false, // 활성 여부
					},
					{
						sort: 1,
						code: 'AP02',
						value: '정보 공유', // 게시판 이름
						active: true,
					},
					{
						sort: 3,
						code: 'AP03',
						value: '음악 신청',
						active: true,
					},
				],
			},
		],
		// 설정
		config: [
			{
				_id: 'shippingFees',
				title: '배송비',
				value: 3500,
			},
			{
				_id: 'freeShippingFees',
				title: '배송비 무료 금액',
				value: 50000,
			},
		],
	};
};
