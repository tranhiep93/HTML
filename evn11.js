
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
