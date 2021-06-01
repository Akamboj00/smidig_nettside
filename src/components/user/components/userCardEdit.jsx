import React, {useEffect, useState} from "react";
import {deleteUser, editUser, postUser} from "../../lib/fb";
import {useHistory} from "react-router";
import {useSubmit} from "../../../client/lib/useSubmit";
import {LoadingView} from "../../loadingView";

export function UserCardEdit({user, onDelete, _key}) {
    const [_firstName, setFirstName] = useState(user.firstName);
    const [_lastName, setLastName] = useState(user.lastName);
    const [_language, setLanguage] = useState(user.language);
    const [_image, setImage] = useState(user.image);

    const history = useHistory();

    const _deleteUser = async () => {
        if (confirm(`Confirm deleting user: ${user.firstName}`))
        {
            await deleteUser(user.userId).then(() => {
                if (user.userId === sessionStorage.getItem("user"))
                {
                    sessionStorage.removeItem("user");
                }
                onDelete();
            });
        }
    }

    const {handleSubmit: handleEditUser, submitting, error,} = useSubmit(async () => {
            if (_firstName && _lastName && _language && _image !== "")
            {
                await editUser(_firstName, _lastName, _language, _image, user.userId, user.progress);
                onDelete();
            }
            else
            {
                alert("Please fill out the form");
            }
        },
        () => {
            console.log("successful edit");
        }
    );

    return (

        <div
            key={_key}
            className={"user_card user_card_edit"}
        >
            <form onSubmit={handleEditUser} className={"form_edit_user"}>
                <div className={"user_card_inner_container"}>

                    <div className={"user_active_indicator"}/>
                    <div className={"user_card_image_container"}>
                        <div className={"center user_card_image"} style={(_image === user.image) ? ({backgroundImage: `url(${user.image})`}) : ({backgroundImage: `url(${_image})`})}/>
                        <select className={"user_input_edit_img"}
                                type={"text"}
                                value={_image}
                                onChange={(e) => setImage(e.target.value)}
                        >
                            <option value={"https://lh3.googleusercontent.com/_q69VaxQQxL7u4kupZQlzTt9hwgxJfLktpwL_DcDIYtoRCa3YYYIiYYxzzj2YkCCEMCwhIndSzKD7Hvo6h87tTmTbyQx3091S2mRdcNp0xOZtiTGmq0ij5wMIGoygYzQQJyEtHVZ3MFMtyToRACFGha95IGoYLPHq5Yz_SYJfeKG__WHiZxYWGRRmlQPWTJtvod61k-RTfkZqWFkpTw13hZ-X7gNjX2zBaQ0Fi9Nxy6OteNtSGzk4cCjLnjnAS1zZPxROh5dhxBTXejgUYo638PLx6iz2eyMMSpCeyeG0R-u2yxKafdSLEpWA1mkLi2M4hoESDzBAwqhyrq-xL67qvMfMONp81qsXdnOXrfSipi_1UAUlPfYTm0dNfq04Pp2HtEzLIHK9KkoeQKk0DLJllDOXwgxXa-PMQ2EJgAmRBwcSKAdUndBBrzzXjTCsVxvWuRUVfrLPWF5u-uFFPF5ohFgnd5CkFi6WtzuGMQDH-jdfG7HCUSnBdn2kImwej7UCYTl_YxGhviAXOYPh8cj13quIbDUddB5yf7ogFP5p683BKniyxw6XdnWXJqpMzplU2bht50CZjjuy9NFNEVU5FxBm4aNuYxue2WtlSTlvZvPCaoAXLfZK9cXl9htqyO7wwhhTGLuD1zq86p9ZiWPWyNKSNhVEnyKfacFyIQlve0MneLhHmeuwM4bnX2T96khLt65a3jNhchh9wAS3549vB4=s947-no?authuser=0"}>Blue</option>
                            <option value={"https://lh3.googleusercontent.com/CLtwXBxgGhqon8QxdYT2t1jTXp-cddHfRipnHkNVC0JmBvBDXU1-4se3zj_XUqqQsmyZWv8M5LiSN1-BTDqvAxUTii_n-GtXDTru9-waJcJFVtpznakfx5OS8rlUNu26dGBmchzDtqNnVxFI1nuprKs39HXpjDsVQHDWXTjzFR_akARSM9MoEecGZpXEF9RAalZhKqaz-slsNtzxE04CeRkv0a-wCv0Ptyq3qqMFO9yq6af5flCtLfrI2JJp6eZgHYvzo1afcz1h9ezvgR73LJKNskzyFfFjruCkKWOL9KwAaPcTF7MB_aZ1t_bdGhF4rH34vKa4LBFDYeQCgDQFH54pSCMoQp-eHYhsGFgx1xwpzHnMpb4tsXAtDJ061zY4OUhcLfeC2acYwA_cHmw7NSRuvvZGmqLpE0Uxls0fHX1teobsTE2J8EjCDf2Aot9dksR0qOCA7qVkCxOhHF7xv1cs6bUCrHqGkJ3GDz2PzJk89YF_y79-NqOmlt8KfE_9WkjGMzNjeCwSTn8_5bh6Jg4jZrorkrp-iR9PuZBuEJmiNKxCtddT7r5tb1R7DDMHkk20KR5FHPkL6aAYvjyi2cyMDQVyoz2BtycTgHSD-QT-rJ6fRACtru0qMm2n6lcBo0KihLuTy_Ya5x6yOv4kmW1IXq79xU0WI8s4XSzZHQqfnp2oXtuUgLLk9XCg_--WzUDg6MeYw-HAMwc8usY_o68=s947-no?authuser=0"}>Purple</option>
                            <option value={"https://lh3.googleusercontent.com/ebvwUfuyxpRUl5ejxmbK3KWIv-q5Hl9DqaLevGWvIp29QpqqnEn1s14TlT112Siampf2Q6F7JQyIgrHOkg_ci-4Ty9L0wWa41qZfCSljH-_MmI7j9_hClVnBJlKPftSR9bcukAzSsFSSv3SL-gP0laVNUWYdqzx3SN8eU3nn7lGgORTE9TZxxAviKfv2-lPwy-Kg-Ufbipd8rP3xuyQsHkGv7GiQomBuoYc8BpOAZuDRJ5bS26tliaexT6JehslxM2hkDDD2tk6EZd2qxNf7fKhH0LC0l4Cq3UdGeiu-5T9Gf37AbY_fyBuom75ln20khQRX_JeVWxyBLE9Q1Xa1jhygBnpK5BtRER9eBZxMhzT2aX53JGJGdIe9Qs2H0sSiX6Bzt0-Nx1YmeY_-wUcL9Ufg_RXK_UKmBD1R8PaJS5HusmuLJMiC3OMHwJcSlXARA7NWkYyzzP_V29EKTO4B3iVlLHIFirXNCoJr6lxwOmeWe_bmIoLTHCBRSaQmv6PZQEDHcSj-JdyMG4A67ZWY1i3PBT79O1XUh8GEZazEnRG6yZYgaAlCz13avWqeSNsURT1UEzEl6NEyGm0168pgQjgQidAkxoui90HZBwBMI_6ByUYEMjzmSlBKRxIvEtwJZU5BK9Pd5kFUSOgQww3TJu2ua8OP9y8upRI-uzCs85ixSiNPaVWZHcH29vVR17QitjlfSnoPvcqNwGjNvwvclr0=w948-h947-no?authuser=0"}>Pink</option>
                            <option value={"https://lh3.googleusercontent.com/UCcS9NHzjhhtRz5u2_8-crA3W4KGpx4utK5TbKwQmVq0r_kaWONfe66Pe9MBIuqD75fIXVTItxjoDDNUH5rnlJ8BmE5oJ4LBuHyUMYlDPA5fzwGGPKNxRxVkknnfgAjkTDGDREQuf3kJ04g9Zuu4K-s-lMslXntqt1cPAM78Kg9hd5-jD53-Lve7QjeTTurkLYT4hCw6d_hqG1ZNHt91aSuQOAwvhowctdD9gA6fPAJXmIeQ2ZAAUVj_9xlTab9vl_2YusocaFx3v77P1_OEUQjXn7HYzkVHS1qPzFfqEQ20JywIfrkemMCO8MNYjf_KG7R9Vl_SMeoboYGEmJgNKierFHVPTQBxBoawjXqEe2CN7nvnaJpxd-gKhH37aj2Gf0vwWsSrncRRZpdCMNaWOLoLA5tJHks29n-0bsHt5-b-qzp707cYjSJhRVO41YcY9oBCdM_-fA2tG2hmuE_IHmIH0iNa1K2n-sSp1wMQp-a25tePsZg-FBHVQGJsrh6UWfGfOk10bw1pC-BhMm4K4tPoLD3ZgiPdjQL1d9zRx6nMCNn4baideKIJ-vLwt1H32BVNB9num0uMf22hpQWmw6oRtycn3VOz4xWu7R5xFxwqU2J-lAX4Gxt_j_n1yznB724dqQbVR4vFrhNCUYZGrNV6LFzeYJ_yz2KZBnTmpG8edxOg9xB2f0geI1ZfCUAP24K08r-4pBgxbHvkug6tZBQ=s947-no?authuser=0"}>Green</option>
                            <option value={"https://lh3.googleusercontent.com/1YdNNRmdc565rPpP6M5N5NzUooXSdAGMbovQYPW-jeE03Ij_A_u5rJiqIMBGjzur1aphOkZf5z-X0cby6KDRrSL6PkVKwCc7CWfcuyrFDMevl67EZdUHpd0Lj2cB8wrpBTqWaf75wFRhIKXAwOsyRovrr_5UqLN4nUwISniCxJBu-G4QPYvuYWj2bllLWy11RskZWKSYNddOJLOzbEFvMXYnp12H3oarQ8Ap4Poe0m9cpxgHoR0CAUogWzp_GtTFyKnzNy6xox_XfFeovx7k3DydOnbD0Eopxd9xLNEqmOJILKgJw25DSQbKVaKyNvJT4UPdNZG4VY97H7ppY78VlIjtgqdRA46mv-KOtUv5Xy90LsVpI4tIeuDvyH8IKYWCtysADC4Xh1ET3cGz49qHjY33-yHFQM5ifMAx9tPYbgM51dod8Myfn9BS9CN00SsDqt4f4TQ-s_yiyfDqP4cL9ktkIQk95px7IiiAm3PyN9MD29guOJ_ru442RoydA87knJyL4IJFxlTlxiof1TfLbVqzYvlZkCkDnpcAP_NdNPxqy_rlVnCEOetz7yZvDY2vQLSHtnsMaHk4gyISbsXPW0XzC4Re-0NoJK5VnhSGtsNeiFByeBPPE8JUgR5JeLbQlbiwfn5tyWUODJYm7t655t0uXdXFC6_ZF_iEjCAZrsm1oxOIem_YtC6uRrqlNgkpFBMFNXEkcvJ3uTgHwlX6I0E=s947-no?authuser=0"}>Yellow</option>
                            <option value={"https://lh3.googleusercontent.com/15cVjFQNAGjFpIsLH59khcRIrAbPnnKpNbo91Xe_db14g5z9Z43Z9rDbs9K6HfxhOU6TLvJazZBV0gcLXHikFOIQSryMXC8pS8xBTn4mev2C7wGOT8Jyo_JFeXr5xkfVXrNdBYOcv03BCucbH18LE3a0WYrfvQR9Oofd4TIaRn0hJJHpll6koz4H6k5trna5maQzoVDQwLdh88NbisiSptVsNcNNb4ObB4CauE9sQb4Z2xv_qdY7g4clIZzs7dTFRD-6cyzarSfV-MN_tHa41adArzUi3Us4Wxe6BcnM2EWaJ4lVCMOA2Vfe2apIFl9hnXutPR4Dzm95FxU7r4a21ySohOrEk2D1v-7H1_x6I7HN3o4TsDz6SmKKcWDMQjeRdntEKfhZZALWNECf6VnE_i8Pg9WpC5lTsOA93et6RYZsMw2ioLeNfzxOUyBN1_eDv1GEZgD7ZPXZvVfCphVqOhPzVb655lpb-SAF6eFs9QhvuTbax1dB-hJ0oVAfaleAhIy1ZhOUJSxXf6-qnygJ1q49Jy4DHIh21kfz9S8y_WtV3NbxZmMwlXKWYp8m4C842Aj156jHH-rsMDtfxK0NTTs1sG4IEJRbyoWrlZMFg72meyczKtHnkTP7zujACiSMgizscT876a0rtYnQHjrIwYQtsYeBrH_9qkYQF86ixTYTpCkMmBeNo3aJ5cFxSVt--oiKutqRJqCYk1m9wrgnZtE=w948-h947-no?authuser=0"}>Orange</option>
                        </select>
                    </div>
                    <div className={"user_card_info_container"}>
                        <div className={"center user_card_info"}>
                            <div className={"user_card_name_container"}>
                                <div className={"user_card_container_edit_inner"}>

                                    <div className={"user_card_name_edit_container_firstName"}>
                                        <h6>FIRST NAME:</h6>
                                        <input
                                            className={"user_card_name_input"}
                                            placeholder={user.firstName}
                                            value={_firstName}
                                            onChange={(e) => {
                                                setFirstName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className={"user_card_name_edit_container_lastName"}>
                                        <h6>LAST NAME:</h6>
                                        <input
                                            className={"user_card_name_input"}
                                            placeholder={user.lastName}
                                            value={_lastName}
                                            onChange={(e) => {
                                                setLastName(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={"user_card_language_container"}>
                                <h6>LANGUAGE:</h6>
                                <select
                                    className={"user_card_language_input"}
                                    type={"text"}
                                    placeholder={user.language}
                                    value={_language}
                                    onChange={(e) => {
                                        setLanguage(e.target.value);
                                    }}
                                >
                                    <option value={"no"}>Norwegian</option>
                                    <option value={"sv"}>Swedish</option>
                                    <option value={"en"}>English</option>
                                    <option value={"da"}>Danish</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/*
                <div className={"user_card_right_top_container"}>
                    <p className={"center"}>USER ID: {user.userId}</p>
                </div>
                <div className={"user_card_right_bottom_container"}>
                    <p className={"user_card_admin_id_text"}>ADMIN ID: {user.id}</p>
                </div>
                */}
                </div>
                <div className={"user_card_function_bar"}>
                    <button className={"user_card_extra_info user_card_extra_button"} disabled={submitting}>
                        <h6 className={"center"}>CONFIRM CHANGES</h6>
                    </button>
                    <div className={"user_card_select_user"} onClick={_deleteUser}>
                        <h6 className={"center"}>DELETE USER</h6>
                    </div>
                </div>
            </form>
        </div>
    )
}