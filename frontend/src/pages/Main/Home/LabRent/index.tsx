import * as C from "@src/allFiles";
import * as S from "./style";

import React, { useState, useEffect } from 'react';
import { customAxios } from "@src/api/axios";
import GBSW from '@media/GBSW.webp';
import trash from '@assets/trash.svg';
import { FaArrowRight } from "react-icons/fa";

interface Lab {
    userId: number;
    rentalDate: string;
    rentalStartTime: string;
    rentalUser: string;
    rentalUsers: string;
    rentalPurpose: string;
    deletionRental: boolean;
    labName: string;
}

const LabRent: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const [rentalRequests, setRentalRequests] = useState<Lab[]>([]);
    const [userId, setUserId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchAvailableLabs();
    }, []);

    const fetchAvailableLabs = async () => {
        setIsLoading(true);
        try {
            const response = await customAxios.get<Lab[]>("/lab/available");
            setRentalRequests(response.data);
        } catch (error) {
            console.error('실습실 조회 실패', error);
        } finally {
            setIsLoading(false);
        }
    };

    const openModal = (requestId: number) => {
        setUserId(requestId);
        setOpen(true);
    };

    const closeModal = () => setOpen(false);

    return (
        <>
            <C.StudentSide />
            <S.TopCont>
                <S.Parent>
                    <S.Header>
                        <S.RentCont>
                            <img src={GBSW} alt='경소고 로고' className='gbsw' />
                            <S.RentSubCont>
                                <S.LinkRent to={'/labenroll'}>실습실 대여하기</S.LinkRent>
                                <FaArrowRight className='arrow' />
                            </S.RentSubCont>
                        </S.RentCont>
                        <S.NoticeCont>
                            <S.NoticeSubCont>
                                <div>
                                    <p className='important_text'>매일 점심 시간 (13시 40분) 신청 마감</p>
                                    <S.NoticeRuleCont>
                                        <p className='notice_text'>야자 시간 전 미리 문 열어놓기 !</p>
                                        <p className='explanation'>
                                            미리 안 열어놓고 야자시간에 열쇠달라고 해도 안 열어줌, 손으로 따다 적발 시 벌점 20점
                                        </p>
                                    </S.NoticeRuleCont>
                                    <S.NoticeRuleCont>
                                        <p className='notice_text'>실습실 사용 후 정리는 매너이자 필수 !</p>
                                        <p className='explanation'>
                                            전원, 냉난방, 조명, 책상 의자 배치 등 정리 / 지켜지지 않을 시 2주간 실습실 이용 제한
                                        </p>
                                    </S.NoticeRuleCont>
                                </div>
                            </S.NoticeSubCont>
                        </S.NoticeCont>
                    </S.Header>

                    <S.Body>
                        <S.BodyWrap>
                            <S.RentalCont>
                                <p className="list_detail">대여 실습실</p>
                                <p className="list_detail">대표자</p>
                                <p className="list_detail">사용 인원</p>
                                <p className="list_detail">사용 목적</p>
                                <p className="list_detail">대여날짜</p>
                                <p className="list_detail">대여시간</p>
                                <p className="list_detail" />
                            </S.RentalCont>

                            {isLoading ? (
                                <C.Loading />
                            ) : rentalRequests.length > 0 ? (
                                <S.RentalUserCont>
                                    {rentalRequests.map((request) => (
                                        <S.RentalUserWrap key={request.userId}>
                                            <S.Tooltip className="user_detail">
                                                <span>
                                                    {request.labName.length > 11 ?
                                                        request.labName.slice(0, 11) + '...'
                                                        : request.labName}
                                                </span>
                                                {request.labName.length > 11 && (
                                                    <span className="tooltiptext">{request.labName}</span>
                                                )}
                                            </S.Tooltip>
                                            <p className="user_detail">{request.rentalUser}</p>
                                            <S.Tooltip className="user_detail">
                                                <span>
                                                    {request.rentalUsers.length > 16
                                                        ? request.rentalUsers.slice(0, 16) + '..'
                                                        : request.rentalUsers}
                                                </span>
                                                {request.rentalUsers.length > 16 && (
                                                    <span className="tooltiptext">{request.rentalUsers}</span>
                                                )}
                                            </S.Tooltip>
                                            <S.Tooltip className="user_detail">
                                                <span>
                                                    {request.rentalPurpose.length > 16
                                                        ? request.rentalPurpose.slice(0, 16) + '...'
                                                        : request.rentalPurpose}
                                                </span>
                                                {request.rentalPurpose.length > 16 && (
                                                    <span className="tooltiptext">{request.rentalPurpose}</span>
                                                )}
                                            </S.Tooltip>
                                            <p className="user_detail">{request.rentalDate}</p>
                                            <p className="user_detail">{request.rentalStartTime}</p>
                                            {request.deletionRental ? (
                                                <div style={{ flex: 1, textAlign: "center" }}>대기중</div>
                                            ) : (
                                                <div className="user_detail" onClick={() => openModal(request.userId)}>
                                                    <img
                                                        src={trash}
                                                        alt="delete_img"
                                                        className="delete_btn"
                                                    />
                                                </div>
                                            )}
                                        </S.RentalUserWrap>
                                    ))}
                                </S.RentalUserCont>
                            ) : (
                                <S.NotRentTextWrap>
                                    <p style={{ fontSize: 17 }}>아직 아무도 랩실 신청을 안했습니다.</p>
                                </S.NotRentTextWrap>
                            )}
                        </S.BodyWrap>
                    </S.Body>
                </S.Parent>

                <C.LabModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    userId={userId}
                    fetchAvailableLabs={fetchAvailableLabs}
                />
            </S.TopCont>
        </>
    );
};

export default LabRent;