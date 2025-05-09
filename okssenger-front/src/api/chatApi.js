// 채팅 내역 불러오기
export async function fetchChats(friendName) {
  const token = localStorage.getItem("jwt");
  const res = await fetch(`/api/chats/${encodeURIComponent(friendName)}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error("채팅 내역 불러오기 실패");
  }
  return res.json();
}

// 새 메시지 전송하기
export async function postChat(friendName, message) {
  const token = localStorage.getItem("jwt");
  const res = await fetch(`/api/chats/${encodeURIComponent(friendName)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  });
  if (!res.ok) {
    throw new Error("메시지 전송 실패");
  }
  return res.json();
}

// // 1) 채팅 내역 불러오기
// export async function fetchChats(friendName) {
//   // (1) 클라이언트에 저장된 JWT 토큰 꺼내기
//   const token = localStorage.getItem('jwt');

//   // (2) /api/chats/:friendName 엔드포인트 호출
//   const res = await fetch(
//     `/api/chats/${encodeURIComponent(friendName)}`,  // URL에 이름이 들어감
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,             // 인증 헤더
//       },
//     }
//   );

//   // (3) 오류 처리
//   if (!res.ok) {
//     throw new Error('채팅 내역 불러오기에 실패했습니다.');
//   }

//   // (4) JSON 파싱 및 반환
//   return res.json();  // 서버에서 [{chat_id, sender_id, …, sender_name}, …] 형태로 응답
// }

// // 2) 새 메시지 전송하기
// export async function postChat(friendName, message) {
//   const token = localStorage.getItem('jwt');

//   const res = await fetch(
//     `/api/chats/${encodeURIComponent(friendName)}`,
//     {
//       method:  'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization:  `Bearer ${token}`,
//       },
//       body:    JSON.stringify({ message }),  // { message: '안녕하세요' }
//     }
//   );

//   if (!res.ok) {
//     throw new Error('메시지 전송에 실패했습니다.');
//   }

//   return res.json();  // { chat_id, sender_id, …, created_at } 형태의 새 채팅 정보
// }
