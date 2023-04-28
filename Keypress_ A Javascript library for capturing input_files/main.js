//setInterval()로 작성한 이전 밀리초 구하는 코드
//let millis = 0; // 밀리초 변수
//setInterval(() => { millis++; console.log(millis); }, 1); //setInterval(function, milliseconds);


//$는 jQuery 라이브러리에서 사용되는 함수로, HTML 문서에서 요소를 선택하거나 조작하는 기능을 제공합니다.
$('.keyboard .message').text("");
const selectListbox = document.querySelector("#selectListbox");
const selectFunctionBox = document.querySelector("#selectFunctionBox");

let startTime = -1;
let pauseTime;

let recentlyAddedText = ""; // select태그에 새로 추가되는 option태그의 text

// selectFunctionBox의 함수들이 담길 Map
const funcMap = new Map();



// 빈공간 클릭 시 select 선택되었던 것들 모두 리셋
document.addEventListener("click", function(event) {
	if(event.target.nodeName !== "BUTTON" && event.target.nodeName !== "SELECT" && event.target.nodeName !== "OPTION"){
		for (op of selectListbox.querySelectorAll('option')) 
			op.selected = false;
		for (op of selectFunctionBox.querySelectorAll('option'))
			op.selected = false;
	}
});



//option 요소노드 생성함수
function addNewOption(selectTag, text) {//js에서는 매개변수 인자 순번대로 인식(단, 명확한 변수명은 그 매개변수만 인식됨!!)
	let newOption = document.createElement("option");
	newOption.appendChild(  document.createTextNode(text)  );
	
	selectTag.appendChild(newOption);
}



//키입력 발생 시 selectListbox에 DN / ms / UP option 추가
document.addEventListener('keydown', function(event) {
	if(recentlyAddedText == ("DN " + event.code))
		return; //함수 강제종료



	if(startTime != -1){
		pauseTime = Date.now() - startTime;
		addNewOption(selectListbox, pauseTime + "ms");
	}



	//기존 키기능을 막는 기능
	event.preventDefault();	


	
	//키 입력시 selectBox에 option추가
	//addNewOption(selectListbox, "DN " + event.code);
	addNewOption(selectListbox, "DN " + eventCode_To_keycode(event.code));
	
	
	// 길게 누르고 있을 때 중복추가 방지 
	recentlyAddedText = "DN " + event.code;



	//DN~UP 사이의 시작시간
	startTime = Date.now();



	$( eventCode_To_viewId(event.code) ).addClass("pressed");
});
document.addEventListener('keyup', function(event) {
	if(recentlyAddedText == ("UP " + event.code))
		return; //함수 강제종료


	//기존 DN이벤트에서는 예외 처리를 해줬지만 UP이벤트에서는 안해줘서 예외 처리 해줌.
	if(startTime == -1)
		return; //함수 강제종료



	pauseTime = Date.now() - startTime;
	addNewOption(selectListbox, pauseTime + "ms");



	//기존 키기능을 막는 기능
	event.preventDefault();


	
	//키 입력시 selectBox에 option추가
	//addNewOption(selectListbox, "UP " + event.code);
	addNewOption(selectListbox, "UP " + eventCode_To_keycode(event.code));

	
	// 길게 누르고 있을 때 중복추가 방지 
	recentlyAddedText = "UP " + event.code;



	//UP~DN 사이의 시작시간
	startTime = Date.now();



	$( eventCode_To_viewId(event.code) ).removeClass("pressed");
	
});



//R,L버튼 클릭 이벤트
document.querySelector("#btnMakeFunction").addEventListener("click", function(event) {
	// css 선택자로 selected 된 option 태그들만 querySelectorAll !!
	//const check = selectListbox.querySelectorAll('option:checked'); css선택자 문법에서 선택된option 뽑을 때는 option:selected 가 아닌 :checked 해야함(문법이 이상함)
	//if( check.length == 0 )
	//	return;

	// selectListbox의 선택 여부 변수
	let isExistSelected = false;
	
	for (op of selectListbox.querySelectorAll('option')) 
		if(op.selected)
			isExistSelected = true;
		
	if(!isExistSelected)
		return;
	


	// 이름을 입력받고 map에 해당 key로 내용 삽입하기 
	{
		funcKey = prompt("함수 이름을 작성하시오."); 
		funcValue = "";
		
		addNewOption(selectFunctionBox, funcKey);
		
		for (op of selectListbox.querySelectorAll('option')) 
			if(op.selected)
				funcValue += '\t' + op.textContent + '\n';
		
		
		let lastIndex = funcValue.lastIndexOf("\n");
		funcValue = funcValue.substring(0, lastIndex);
		//문자열내 마지막 \n을 삭제 시켜주는 것을 정규식으로 표현할 경우 아래와 같이 된다. funcValue.replace(/\n\s*$/, "");
		
		
		funcMap.set(funcKey, funcValue);
		alert(funcKey + " : " + "\n" + funcValue);
	}
	
	
	
	// 선택되었던 왼쪽 옵션태그들 지우고 $key이름의 옵션 삽입
	{
		const optionElements = selectListbox.querySelectorAll('option');
		const startIndex = selectListbox.selectedIndex;
		
		const insertElement = document.createElement('option');
		insertElement.textContent = "$"+funcKey;
		selectListbox.insertBefore(insertElement, optionElements[startIndex]);
		
		for(op of optionElements){
			if(op.selected)
				op.remove();
		}
	}
	
	
	startTime = -1;
});
document.querySelector("#btnCallFunction").addEventListener("click", function(event) {
	// selectFunctionBox 선택 여부 변수
	let isExistSelected = false;
	
	for (op of selectFunctionBox.querySelectorAll('option')) 
		if(op.selected)
			isExistSelected = true;
		
	if(!isExistSelected)
		return;
	
	addNewOption(selectListbox, "$" + selectFunctionBox.querySelectorAll('option')[selectFunctionBox.selectedIndex].textContent);
	
	
	startTime = -1;
});



//txt 파일로 저장
document.querySelector("#btnSave").addEventListener("click", function(event) {

	let text = "";


	// selectFunctionBox 내용 텍스트 병합
	{
		for (op of selectFunctionBox.querySelectorAll('option')) {
			const funcKey = op.textContent;
			const funcValue = funcMap.get(funcKey);
			
			/*
				@funcKey
				{
				funcValue
				}
			*/
			
			text += `@${funcKey}\n{\n${funcValue}\n}\n`; // += '@' + funcKey + '\n' + '{' + '\n' + funcValue ...
		}
		
		text += '\n';
	}
	

	// selectListbox 내용 텍스트 병합 후 파일로 저장
	{
		for(op of selectListbox.querySelectorAll('option')){
			text += (op.textContent + '\n');
		}

		let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
		let url = URL.createObjectURL(blob);
		let a = document.createElement("a");
		a.href = url;
		a.download = "macro.txt";
		a.click();
		URL.revokeObjectURL(url);
	}
});



function eventCode_To_keycode(eventCode){
	
	let keycode = '';
	
	switch(eventCode){
		case 'KeyA':
			keycode = 'KEY_A';
		break;
		case 'KeyB':
			keycode = 'KEY_B';
		break;
		case 'KeyC':
			keycode = 'KEY_C';
		break;
		case 'KeyD':
			keycode = 'KEY_D';
		break;
		case 'KeyE':
			keycode = 'KEY_E';
		break;
		case 'KeyF':
			keycode = 'KEY_F';
		break;
		case 'KeyG':
			keycode = 'KEY_G';
		break;
		case 'KeyH':
			keycode = 'KEY_H';
		break;
		case 'KeyI':
			keycode = 'KEY_I';
		break;
		case 'KeyJ':
			keycode = 'KEY_J';
		break;
		case 'KeyK':
			keycode = 'KEY_K';
		break;
		case 'KeyL':
			keycode = 'KEY_L';
		break;
		case 'KeyM':
			keycode = 'KEY_M';
		break;
		case 'KeyN':
			keycode = 'KEY_N';
		break;
		case 'KeyO':
			keycode = 'KEY_O';
		break;
		case 'KeyP':
			keycode = 'KEY_P';
		break;
		case 'KeyQ':
			keycode = 'KEY_Q';
		break;
		case 'KeyR':
			keycode = 'KEY_R';
		break;
		case 'KeyS':
			keycode = 'KEY_S';
		break;
		case 'KeyT':
			keycode = 'KEY_T';
		break;
		case 'KeyU':
			keycode = 'KEY_U';
		break;
		case 'KeyV':
			keycode = 'KEY_V';
		break;
		case 'KeyW':
			keycode = 'KEY_W';
		break;
		case 'KeyX':
			keycode = 'KEY_X';
		break;
		case 'KeyY':
			keycode = 'KEY_Y';
		break;
		case 'KeyZ':
			keycode = 'KEY_Z';
		break;
		case 'Digit1':
			keycode = 'KEY_1';
		break;
		case 'Digit2':
			keycode = 'KEY_2';
		break;
		case 'Digit3':
			keycode = 'KEY_3';
		break;
		case 'Digit4':
			keycode = 'KEY_4';
		break;
		case 'Digit5':
			keycode = 'KEY_5';
		break;
		case 'Digit6':
			keycode = 'KEY_6';
		break;
		case 'Digit7':
			keycode = 'KEY_7';
		break;
		case 'Digit8':
			keycode = 'KEY_8';
		break;
		case 'Digit9':
			keycode = 'KEY_9';
		break;
		case 'Digit0':
			keycode = 'KEY_0';
		break;
		case 'Enter':
			keycode = 'KEY_ENTER';
		break;
		case 'Escape':
			keycode = 'KEY_ESC';
		break;
		case 'Backspace':
			keycode = 'KEY_BACKSPACE';
		break;
		case 'Tab':
			keycode = 'KEY_TAB';
		break;
		case 'Space':
			keycode = 'KEY_SPACE';
		break;
		case 'Minus':
			keycode = 'KEY_MINUS';
		break;
		case 'Equal':
			keycode = 'KEY_EQUAL';
		break;
		case 'BracketLeft':
			keycode = 'KEY_LEFT_BRACE';
		break;
		case 'BracketRight':
			keycode = 'KEY_RIGHT_BRACE';
		break;
		case 'Backslash':
			keycode = 'KEY_BACKSLASH';
		break;
		case 'Semicolon':
			keycode = 'KEY_SEMICOLON';
		break;
		case 'Quote':
			keycode = 'KEY_QUOTE';
		break;
		case 'Backquote':
			keycode = 'KEY_TILDE';
		break;
		case 'Comma':
			keycode = 'KEY_COMMA';
		break;
		case 'Period':
			keycode = 'KEY_PERIOD';
		break;
		case 'Slash':
			keycode = 'KEY_SLASH';
		break;
		case 'CapsLock':
			keycode = 'KEY_CAPS_LOCK';
		break;
		case 'F1':
			keycode = 'KEY_F1';
		break;
		case 'F2':
			keycode = 'KEY_F2';
		break;
		case 'F3':
			keycode = 'KEY_F3';
		break;
		case 'F4':
			keycode = 'KEY_F4';
		break;
		case 'F5':
			keycode = 'KEY_F5';
		break;
		case 'F6':
			keycode = 'KEY_F6';
		break;
		case 'F7':
			keycode = 'KEY_F7';
		break;
		case 'F8':
			keycode = 'KEY_F8';
		break;
		case 'F9':
			keycode = 'KEY_F9';
		break;
		case 'F10':
			keycode = 'KEY_F10';
		break;
		case 'F11':
			keycode = 'KEY_F11';
		break;
		case 'F12':
			keycode = 'KEY_F12';
		break;
		case 'PrintScreen':
			keycode = 'KEY_PRINTSCREEN';
		break;
		case 'ScrollLock':
			keycode = 'KEY_SCROLL_LOCK';
		break;
		case 'Pause':
			keycode = 'KEY_PAUSE';
		break;
		case 'Insert':
			keycode = 'KEY_INSERT';
		break;
		case 'Home':
			keycode = 'KEY_HOME';
		break;
		case 'PageUp':
			keycode = 'KEY_PAGE_UP';
		break;
		case 'Delete':
			keycode = 'KEY_DELETE';
		break;
		case 'End':
			keycode = 'KEY_END';
		break;
		case 'PageDown':
			keycode = 'KEY_PAGE_DOWN';
		break;
		case 'ArrowRight':
			keycode = 'KEY_RIGHT';
		break;
		case 'ArrowLeft':
			keycode = 'KEY_LEFT';
		break;
		case 'ArrowDown':
			keycode = 'KEY_DOWN';
		break;
		case 'ArrowUp':
			keycode = 'KEY_UP';
		break;
		case 'NumLock':
			keycode = 'KEY_NUM_LOCK';
		break;
		case 'NumpadDivide':
			keycode = 'KEYPAD_DIVIDE';
		break;
		case 'NumpadMultiply':
			keycode = 'KEYPAD_MULTIPLY';
		break;
		case 'NumpadSubtract':
			keycode = 'KEYPAD_SUBTRACT';
		break;
		case 'NumpadAdd':
			keycode = 'KEYPAD_ADD';
		break;
		case 'NumpadEnter':
			keycode = 'KEYPAD_ENTER';
		break;
		case 'Numpad1':
			keycode = 'KEYPAD_1';
		break;
		case 'Numpad2':
			keycode = 'KEYPAD_2';
		break;
		case 'Numpad3':
			keycode = 'KEYPAD_3';
		break;
		case 'Numpad4':
			keycode = 'KEYPAD_4';
		break;
		case 'Numpad5':
			keycode = 'KEYPAD_5';
		break;
		case 'Numpad6':
			keycode = 'KEYPAD_6';
		break;
		case 'Numpad7':
			keycode = 'KEYPAD_7';
		break;
		case 'Numpad8':
			keycode = 'KEYPAD_8';
		break;
		case 'Numpad9':
			keycode = 'KEYPAD_9';
		break;
		case 'Numpad0':
			keycode = 'KEYPAD_0';
		break;
		case 'NumpadDecimal':
			keycode = 'KEYPAD_PERIOD';
		break;
		case 'ControlLeft':
			keycode = 'KEY_LEFT_CTRL';
		break;
		case 'ShiftLeft':
			keycode = 'KEY_LEFT_SHIFT';
		break;
		case 'AltLeft':
			keycode = 'KEY_LEFT_ALT';
		break;
		case 'MetaLeft':
			keycode = 'KEY_LEFT_GUI';
		break;
		case 'ControlRight':
			keycode = 'KEY_RIGHT_CTRL';
		break;
		case 'ShiftRight':
			keycode = 'KEY_RIGHT_SHIFT';
		break;
		case 'AltRight':
			keycode = 'KEY_RIGHT_ALT';
		break;
		case 'MetaRight':
			keycode = 'KEY_RIGHT_GUI';
		break;
	}
	
	return keycode;
}
function eventCode_To_viewId(eventCode){

	let viewId = '';
	
	switch(eventCode){
		case 'KeyA':
			viewId = '#key_a';
		break;
		case 'KeyB':
			viewId = '#key_b';
		break;
		case 'KeyC':
			viewId = '#key_c';
		break;
		case 'KeyD':
			viewId = '#key_d';
		break;
		case 'KeyE':
			viewId = '#key_e';
		break;
		case 'KeyF':
			viewId = '#key_f';
		break;
		case 'KeyG':
			viewId = '#key_g';
		break;
		case 'KeyH':
			viewId = '#key_h';
		break;
		case 'KeyI':
			viewId = '#key_i';
		break;
		case 'KeyJ':
			viewId = '#key_j';
		break;
		case 'KeyK':
			viewId = '#key_k';
		break;
		case 'KeyL':
			viewId = '#key_l';
		break;
		case 'KeyM':
			viewId = '#key_m';
		break;
		case 'KeyN':
			viewId = '#key_n';
		break;
		case 'KeyO':
			viewId = '#key_o';
		break;
		case 'KeyP':
			viewId = '#key_p';
		break;
		case 'KeyQ':
			viewId = '#key_q';
		break;
		case 'KeyR':
			viewId = '#key_r';
		break;
		case 'KeyS':
			viewId = '#key_s';
		break;
		case 'KeyT':
			viewId = '#key_t';
		break;
		case 'KeyU':
			viewId = '#key_u';
		break;
		case 'KeyV':
			viewId = '#key_v';
		break;
		case 'KeyW':
			viewId = '#key_w';
		break;
		case 'KeyX':
			viewId = '#key_x';
		break;
		case 'KeyY':
			viewId = '#key_y';
		break;
		case 'KeyZ':
			viewId = '#key_z';
		break;
		case 'Digit1':
			viewId = '#key_one';
		break;
		case 'Digit2':
			viewId = '#key_two';
		break;
		case 'Digit3':
			viewId = '#key_three';
		break;
		case 'Digit4':
			viewId = '#key_four';
		break;
		case 'Digit5':
			viewId = '#key_five';
		break;
		case 'Digit6':
			viewId = '#key_six';
		break;
		case 'Digit7':
			viewId = '#key_seven';
		break;
		case 'Digit8':
			viewId = '#key_eight';
		break;
		case 'Digit9':
			viewId = '#key_nine';
		break;
		case 'Digit0':
			viewId = '#key_zero';
		break;
		case 'Enter':
			viewId = '#key_enter';
		break;
		case 'Escape':
			viewId = '#key_esc';
		break;
		case 'Backspace':
			viewId = '#key_backspace';
		break;
		case 'Tab':
			viewId = '#key_tab';
		break;
		case 'Space':
			viewId = '#key_space';
		break;
		case 'Minus':
			viewId = '#key_hyphen';
		break;
		case 'Equal':
			viewId = '#key_equals';
		break;
		case 'BracketLeft':
			viewId = '#key_left_bracket';
		break;
		case 'BracketRight':
			viewId = '#key_right_bracket';
		break;
		case 'Backslash':
			viewId = '#key_backslash';
		break;
		case 'Semicolon':
			viewId = '#key_semicolon';
		break;
		case 'Quote':
			viewId = '#key_apostrophe';
		break;
		case 'Backquote':
			viewId = '#key_accent';
		break;
		case 'Comma':
			viewId = '#key_comma';
		break;
		case 'Period':
			viewId = '#key_period';
		break;
		case 'Slash':
			viewId = '#key_forwardslash';
		break;
		case 'CapsLock':
			viewId = '#key_caps_lock';
		break;
		case 'F1':
			viewId = '#key_f1';
		break;
		case 'F2':
			viewId = '#key_f2';
		break;
		case 'F3':
			viewId = '#key_f3';
		break;
		case 'F4':
			viewId = '#key_f4';
		break;
		case 'F5':
			viewId = '#key_f5';
		break;
		case 'F6':
			viewId = '#key_f6';
		break;
		case 'F7':
			viewId = '#key_f7';
		break;
		case 'F8':
			viewId = '#key_f8';
		break;
		case 'F9':
			viewId = '#key_f9';
		break;
		case 'F10':
			viewId = '#key_f10';
		break;
		case 'F11':
			viewId = '#key_f11';
		break;
		case 'F12':
			viewId = '#key_f12';
		break;
		case 'PrintScreen':
			viewId = '#key_print';
		break;
		case 'ScrollLock':
			viewId = '#key_scroll_lock';
		break;
		
		/* Pause is undetected by EventListener */
		case 'Pause':
			viewId = '#key_pause_break';
		break;
		/* Pause is undetected by EventListener */
		
		case 'Insert':
			viewId = '#key_insert';
		break;
		case 'Home':
			viewId = '#key_home';
		break;
		case 'PageUp':
			viewId = '#key_page_up';
		break;
		case 'Delete':
			viewId = '#key_delete';
		break;
		case 'End':
			viewId = '#key_end';
		break;
		case 'PageDown':
			viewId = '#key_page_down';
		break;
		case 'ArrowRight':
			viewId = '#key_right';
		break;
		case 'ArrowLeft':
			viewId = '#key_left';
		break;
		case 'ArrowDown':
			viewId = '#key_down';
		break;
		case 'ArrowUp':
			viewId = '#key_up';
		break;
		case 'NumLock':
			viewId = '#key_num_lock';
		break;
		case 'NumpadDivide':
			viewId = '#key_divide';
		break;
		case 'NumpadMultiply':
			viewId = '#key_multiply';
		break;
		case 'NumpadSubtract':
			viewId = '#key_subtract';
		break;
		case 'NumpadAdd':
			viewId = '#key_add';
		break;
		case 'NumpadEnter':
			viewId = '#key_num_enter';
		break;
		case 'Numpad1':
			viewId = '#key_num_1';
		break;
		case 'Numpad2':
			viewId = '#key_num_2';
		break;
		case 'Numpad3':
			viewId = '#key_num_3';
		break;
		case 'Numpad4':
			viewId = '#key_num_4';
		break;
		case 'Numpad5':
			viewId = '#key_num_5';
		break;
		case 'Numpad6':
			viewId = '#key_num_6';
		break;
		case 'Numpad7':
			viewId = '#key_num_7';
		break;
		case 'Numpad8':
			viewId = '#key_num_8';
		break;
		case 'Numpad9':
			viewId = '#key_num_9';
		break;
		case 'Numpad0':
			viewId = '#key_num_0';
		break;
		case 'NumpadDecimal':
			viewId = '#key_num_decimal';
		break;
		case 'ControlLeft':
			viewId = '#key_left_ctrl';
		break;
		case 'ShiftLeft':
			viewId = '#key_left_shift';
		break;
		case 'AltLeft':
			viewId = '#key_left_alt';
		break;
		case 'MetaLeft':
			viewId = '#key_left_cmd';
		break;
		case 'ControlRight':
			viewId = '#key_right_ctrl';
		break;
		case 'ShiftRight':
			viewId = '#key_right_shift';
		break;
		case 'AltRight':
			viewId = '#key_right_alt';
		break;
		case 'MetaRight':
			viewId = '#key_right_cmd';
		break;
	}

	return viewId;
}
