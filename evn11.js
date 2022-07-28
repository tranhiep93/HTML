
function drawPrintEVN(trans) {
        let providerMap = JSON.parse('{"CNBENTRE":{"logo":"https:\/\/static.paysmart.com.vn\/billing\/15.%20Bien_nhan_Cap_Nuoc_Ben_Tre.jpg","name":"Nước Bến Tre","type":"WACO","phone":"","district_id":"","iconUrl":"https:\/\/static.paysmart.com.vn\/billing\/icon-water\/Water_Ben_Tre@3x.png","default":"true","province_id":"83","active":"true","service_code":"water","provider_code":"CNBENTRE"},"CNTHOTNOT":{"logo":"https:\/\/dev-stc.paysmart.com.vn\/billing\/12.%20Bien_nhan_Cap_Nuoc_Can_Tho_2.jpg","name":"Nước Thốt Nốt","type":"WACO","phone":"","district_id":"","iconUrl":"https:\/\/dev-stc.paysmart.com.vn\/billing\/icon-water\/Water_ThotNot_CT@3x.png","default":"false","province_id":"92","active":"true","service_code":"water","provider_code":"CNTHOTNOT"},"CNCT":{"logo":"https:\/\/static.paysmart.com.vn\/billing\/11.%20Bien_Nhan_Cap_Nuoc_Can_Tho.png","name":"Nước Cần Thơ","type":"WACO","phone":"","district_id":"","iconUrl":"https:\/\/static.paysmart.com.vn\/billing\/icon-water\/Water_Can_Tho@3x.png","default":"true","province_id":"92","active":"true","service_code":"water","provider_code":"CNCT"},"CNCAIRANG":{"logo":"https:\/\/dev-stc.paysmart.com.vn\/billing\/12.%20Bien_nhan_Cap_Nuoc_Can_Tho_2.jpg","name":"Nước Cái Răng","type":"WACO","phone":"","district_id":"","iconUrl":"https:\/\/dev-stc.paysmart.com.vn\/billing\/icon-water\/Water_Cai_Rang_CT@3x.png","default":"false","province_id":"92","active":"true","service_code":"water","provider_code":"CNCAIRANG"},"CNTRANOC":{"logo":"https:\/\/dev-stc.paysmart.com.vn\/billing\/21.%20Bien_nhan_Cap_Nuoc_Tra_Noc_O_Mon.jpg","name":"Nước Trà Nóc - Ô Môn","type":"WACO","phone":"","district_id":"","iconUrl":"https:\/\/dev-stc.paysmart.com.vn\/billing\/icon-water\/Water_Tra_Noc%403x.png","default":"false","province_id":"92","active":"true","service_code":"water","provider_code":"CNTRANOC"},"EVNS":{"logo":"https:\/\/static.paysmart.com.vn\/icon\/EVNSPC.png","name":"EVN Miền Nam","type":"EVN","phone":"","default":"true","district_id":"","province_id":"60","service_code":"electric","provider_code":"EVNS"},"EVNHN":{"logo":"https:\/\/dev-stc.paysmart.com.vn\/billing\/dien-evnhn.jpg","name":"EVN Hà Nội","type":"EVN","phone":"","district_id":"","iconUrl":"https:\/\/dev-stc.paysmart.com.vn\/icon\/EVNHN.png","default":"true","province_id":"01","active":"true","service_code":"electric","provider_code":"EVNHN"},"CNCANTHO2":{"logo":"https:\/\/static.paysmart.com.vn\/billing\/12.%20Bien_nhan_Cap_Nuoc_Can_Tho_2.jpg","name":"Nước Cần Thơ 2","type":"WACO","phone":"","district_id":"","iconUrl":"https:\/\/static.paysmart.com.vn\/billing\/icon-water\/Water_Can_Tho2@3x.png","default":"false","province_id":"92","active":"true","service_code":"water","provider_code":"CNCANTHO2"}}');

        let _container = $("<div />");
        let _bills = trans.bills;
        for (let k in _bills) {
            let _bill = _bills[k];
            let _billDetail = _bill.billDetail || {};
            let _data = {
                start_date: formatDataEmpty(_billDetail.startDate),
                end_date: formatDataEmpty(_billDetail.endDate),
                provider_logo: providerMap[trans.provider_code].iconUrl,
                customer_name: formatDataEmpty(trans.customer_name),
                customer_address: formatDataEmpty(trans.customer_address),
                customer_code: formatDataEmpty(trans.customer_code),
                capacity_no: formatDataEmpty(_billDetail.kwhNo),
                home_no: formatDataEmpty(_billDetail.homeNo),
                serial_number: formatDataEmpty(_billDetail.serialNumber),
                bill_id: formatDataEmpty(_bill.billId),
                payment_method: formatDataEmpty(_billDetail.paymentMethod),
                period: formatDataEmpty(_bill.period),
                content_start_date: formatDataEmpty(_billDetail.startDate),
                content_end_date: formatDataEmpty(_billDetail.endDate),
                start_stage_no: formatDataEmpty(_billDetail.startStageNo),
                end_stage_no: formatDataEmpty(_billDetail.endStageNo),
                price_DNTT: _billDetail.priceDNTT ? _billDetail.priceDNTT.replace(/;/g, "\n") : "\n",
                price_detail: formatNumberArray(_billDetail.priceDetail),
                amount_detail: formatNumberArray(_billDetail.amountDetail),
                total_capacity_no: formatDataEmpty(_billDetail.capacityNo),
                debt_amount: formatNumber(_billDetail.debtAmount),
                debt_fee: formatNumber(_billDetail.debtFee),
                amount: formatNumber(_bill.amount),
                amount_text: DOCSO().doc(_bill.amount) + " đồng chẵn"
            };

            let _base = $("<div />").append($("#bill-template-evn-1").html());

            Object.keys(_data).forEach((k, i) => {
                if (_base.find("#" + k).prop("tagName").toLowerCase() === 'img') {
                    _base.find("#" + k).prop("src", _data[k]);
                } else if (_base.find("#" + k).hasClass("price_DNTT") || _base.find("#" + k).hasClass("price_detail") || _base.find("#" + k).hasClass("amount_detail")) {
                    _base.find("#" + k).empty().html(_data[k]);
                } else {
                    _base.find("#" + k).empty().text(_data[k]);
                }
            });

            if (k > 0) {
                _container.append($("<div style='page-break-before: always;'></div>"));
            }
            _container.append(_base.clone());
        }

        _container.print({
            globalStyles: false,
            stylesheet: "https://app.buudienxatulap.ga/printv2.css"
        });
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

const khoiTao = async () => {
    await sleep(1000);
    const txtTien = $('<input type="text" id="txt_tien_value" name="txt_tien_value" required="" data-parsley-trigger="change" data-parsley-length="[1,100]">')
    //const btnSave = $('<button class="btn btn-info" type="button" onclick="saveWallet()" id="btn-save" disabled = true><i class="fa fa-save"></i> Lưu HĐ</button>');
    const btnShow = $('<button class="btn btn-primary" type="button" onclick="showWallet()" id="btn-eye"><i class="fa fa-eye"></i> Xem</button>');
    const btnLock = $('<button class="btn btn-success" type="button" onclick="unLock()" id="btn-lock"><i class="fa fa-lock"></i> Xóa</button>');
    const btnTraLai = $('<button class="btn btn-secondary" type="button" onclick="traLai()" id="btn-minus">Cộng</button>');
    const btnSaoChep = $('<button class="btn btn-primary" type="button" onclick="doCopy()" id="btn-copy"><i class="fa fa-copy"></i> Copy</button>');
    const lblTongCong = $('<span id="lbl_tien" style="font-size: 28px; font-weight: 900;">0</span>');


    //$("#wallet-current-balance").parent().append(btnSave);
    $("#wallet-current-balance").parent().append(btnShow);
    $("#wallet-current-balance").parent().append(btnLock);
    $("#wallet-current-balance").parent().append(txtTien);
    $("#wallet-current-balance").parent().append(btnTraLai);
    $("#wallet-current-balance").parent().append(lblTongCong);

    $("#btn-reset").parent().before(btnSaoChep);
    

    await sleep(1000);
    
    $('#bill-template-evn-1').html(`
    <div class="bill-container" style="font-size: 13px;">
    <section class="top row">
        <div class="col-2">
            <div class="logo" style="margin: 5px;">
                <img src="/resources/assets/images/logo_vietnam_post.png" width="70px" height="70px">
            </div>
        </div>
        <div class="col-8" style="padding-top: 5px;font-size: 17px;">
            <div style="text-align: center">
                <b>TRAN XUAN HIEP: THU TIỀN ĐIỆN TRỰC TIẾP BĐ XÃ TỰ LẬP</b>
            </div>
            <div style="text-align: center;padding-top: 2px;font-size: 10px;">
                (từ <span id="start_date">20/04/2019</span> đến <span id="end_date">20/04/2019</span>)<br>
            </div>
			<div style="text-align: center;padding-top: 5px;font-size: 15px;">
                💥Chị <strong>Hồ Thị Thắm</strong> làm ở Bưu điện xã Tự Lập <em>(thay anh Lập đã nghỉ)</em>.
            </div>
        </div>
        <div class="col-2">
            <div class="logo" style="margin: 5px;float: right;">
                <img id="provider_logo" src="/resources/assets/images/logo_vietnam_post.png" width="70px" height="70px">
            </div>
        </div>
    </section>

    <section class="customer-info row">
        <div class="left col-6">
            <div style="margin: 5px;">
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        Tên KH:
                    </div>
                    <div style="font-weight: bold;" id="customer_name">BUI ANH TRUNG</div>
                </div>
                <div class="item" style="display: flex;align-items: flex-start">
                    <div style="min-width: -moz-max-content;min-width: max-content;">
                        Địa chỉ:
                    </div>
                    <div style="font-weight: bold;" id="customer_address">
                        379 PHUNG SON A TAN LONG PH PG
                    </div>
                </div>
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        Mã KH:
                    </div>
                    <div style="font-weight: bold;" id="customer_code">BUI ANH TRUNG</div>
                </div>
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        Số công tơ:
                    </div>
                    <div style="font-weight: bold;" id="capacity_no">BUI ANH TRUNG</div>
                </div>
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        Số hộ:
                    </div>
                    <div style="font-weight: bold;" id="home_no">BUI ANH TRUNG</div>
                </div>
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        Seri HĐĐT:
                    </div>
                    <div style="font-weight: bold;" id="serial_number">BUI ANH TRUNG</div>
                </div>
            </div>
        </div>
        <div class="left col-6">
            <div style="margin: 5px;">
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        ID hóa đơn:
                    </div>
                    <div style="font-weight: bold;" id="bill_id">BUI ANH TRUNG</div>
                </div>
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        Hình thức thanh toán:
                    </div>
                    <div style="font-weight: bold;" id="payment_method">379 PHUNG SON A TAN LONG PH PG</div>
                </div>
                <div class="item" style="display: flex;align-items: start">
                    <div style="min-width: -moz-max-content;min-width: max-content;">
                        Nội dung:
                    </div>
                    <div style="font-weight: bold;word-wrap: break-word;">Thanh toán hóa đơn tiền điện kỳ <span id="period">20/04/2019</span> từ ngày <span id="content_start_date">20/04/2019</span> đến ngày <span id="content_end_date">20/04/2019</span></div>
                </div>
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        CSĐK:
                    </div>
                    <div style="font-weight: bold;" id="start_stage_no">BUI ANH TRUNG</div>
                </div>
                <div class="item" style="display: flex;align-items: center">
                    <div>
                        CSCK:
                    </div>
                    <div style="font-weight: bold;" id="end_stage_no">BUI ANH TRUNG</div>
                </div>
            </div>
        </div>
    </section>

    <section class="signature-evn row">
        <div class="col-12">
            <table style="width: 100%;">
                <colgroup>
                    <col width="30%">
                    <col width="30%">
                    <col width="40%">
                </colgroup>
                <tr>
                    <th>ĐNTT</th>
                    <th>Đơn giá (VND)</th>
                    <th>Thành tiền (VND)</th>
                </tr>
                <tr>
                    <td style="text-align: right; padding-right: 5px;"><div id="price_DNTT" style="white-space: pre-line;"></div></td>
                    <td style="text-align: right; padding-right: 5px;"><div id="price_detail" style="white-space: pre-line;"></div></td>
                    <td style="text-align: right; padding-right: 5px;"><div id="amount_detail" style="white-space: pre-line;"></div></td>
                </tr>
                <tr>
                    <td id="total_capacity_no" style="text-align: right; padding-right: 5px;"></td>
                    <td></td>
                    <td id="debt_amount" style="text-align: right; padding-right: 5px;"></td>
                </tr>
                <tr>
                    <th colspan="2" style="text-align: left; padding-left: 5px;">
                        Thuế GTGT
                    </th>
                    <td id="debt_fee" style="text-align: right; padding-right: 5px;"></td>
                </tr>
                <tr>
                    <th colspan="2" style="text-align: left; padding-left: 5px;">
                        Số tiền thanh toán
                    </th>
                    <td id="amount" style="text-align: right; padding-right: 5px;"></td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: left; padding-left: 5px;">
                        <span style="font-weight: bold;">Số tiền bằng chữ: </span><span id="amount_text"></span>
                    </td>

                </tr>
                <tr>
                    <td colspan="3" style="text-align: left; padding-left: 5px; font-size: 18px;">
                        <span style="">⚠️Thông báo: </span>Từ ngày 1/7, <strong>cấp, đổi thẻ BHYT tự đóng ở xã Tự Lập</strong> hết hạn được thu trực tiếp tại Bưu điện xã Tự Lập gặp chị <strong>Hồ Thị Thắm sđt:0978 333 963</strong>. Thẻ được nối tiếp ngay đảm bảo <strong>quyền lợi khám chữa bệnh BHYT</strong>.</span>
                    </td>

                </tr>
            </table>
        </div>
    </section>

</div>
    `)

	try {
		document.getElementById("txt_tien_value").addEventListener("keydown",
    function(event) {
        if (event.keyCode == 13){
            traLai();
        }
    }, true);
	} catch (error) {
		
	}
}

khoiTao();
