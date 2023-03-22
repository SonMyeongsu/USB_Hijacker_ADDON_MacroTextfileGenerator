const keyboard_msg_node = $('.keyboard .message');
const selectListbox = document.querySelector("#selectListbox");

let recentlyAdded = "";


document.addEventListener('keydown', function(event) {

	if(recentlyAdded == ("DN " + event.code))
		return; //함수 강제종료


	
	//기존 키기능을 막는 기능
	event.preventDefault();	



	keyboard_msg_node.text("DN " + event.code);
	
	//키 입력시 selectBox추가
	let newOption = document.createElement("option");
	newOption.appendChild(  document.createTextNode("DN " + event.code)  );
	selectListbox.appendChild(newOption);

	recentlyAdded = "DN " + event.code;



	$( eventCode_To_viewId(event.code) ).addClass("pressed");
});
document.addEventListener('keyup', function(event) {

	if(recentlyAdded == ("UP " + event.code))
		return; //함수 강제종료



	//기존 키기능을 막는 기능
	event.preventDefault();



	keyboard_msg_node.text("UP " + event.code);
	
	//키 입력후  selectBox추가
	let newOption = document.createElement("option");
	newOption.appendChild(  document.createTextNode("UP " + event.code)  );
	selectListbox.appendChild(newOption);

	recentlyAdded = "UP " + event.code;



	$( eventCode_To_viewId(event.code) ).removeClass("pressed");
	
});

document.querySelector("#btnSave").addEventListener("click", function(event) {

	let text = "";

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

});



function eventCode_To_viewId(eventCode){

	let viewId = '';
	
	switch(event.code){
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


/*
// Generated by CoffeeScript 1.7.1
(function() {
  var activate_demo, activate_next_demo, activate_prev_demo, bind_demos, bind_keyboard, combo, demo_2, demo_3, demo_4, demos, get_active_demo, konami_egg, listener, unwire_demo, wire_demo, _i, _len, _ref;

  listener = new window.keypress.Listener();

  listener.should_force_event_defaults = true;

  demo_2 = {};

  demo_2.move_piece = function(dir) {
    var grid_height, grid_width, left, pos, top, x_amt, y_amt;
    grid_width = 12;
    grid_height = 6;
    x_amt = 0;
    y_amt = 0;
    switch (dir) {
      case "NE":
        x_amt++;
        y_amt--;
        break;
      case "N":
        y_amt--;
        break;
      case "SW":
        x_amt--;
        y_amt++;
        break;
      case "S":
        y_amt++;
        break;
      case "SE":
        y_amt++;
        x_amt++;
        break;
      case "E":
        x_amt++;
        break;
      case "NW":
        y_amt--;
        x_amt--;
        break;
      case "W":
        x_amt--;
        break;
    }
    pos = demo_2.piece.position();
    left = parseInt(pos.left, 10) / demo_2.unit_size;
    top = parseInt(pos.top, 10) / demo_2.unit_size;
    left += x_amt;
    top += y_amt;
    if ((0 <= left && left < grid_width) && (0 <= top && top < grid_height)) {
      return demo_2.piece.css({
        left: left * demo_2.unit_size + "px",
        top: top * demo_2.unit_size + "px"
      });
    }
  };

  demo_2.combos = [
    {
      keys: "w",
      on_keyup: function() {
        return demo_2.move_piece("N");
      }
    }, {
      keys: "a",
      on_keyup: function() {
        return demo_2.move_piece("W");
      }
    }, {
      keys: "s",
      on_keyup: function() {
        return demo_2.move_piece("S");
      }
    }, {
      keys: "d",
      on_keyup: function() {
        return demo_2.move_piece("E");
      }
    }, {
      keys: "w a",
      on_keyup: function() {
        return demo_2.move_piece("NW");
      }
    }, {
      keys: "w d",
      on_keyup: function() {
        return demo_2.move_piece("NE");
      }
    }, {
      keys: "s a",
      on_keyup: function() {
        return demo_2.move_piece("SW");
      }
    }, {
      keys: "s d",
      on_keyup: function() {
        return demo_2.move_piece("SE");
      }
    }
  ];


  bind_keyboard = function() {
    var combos, key_nodes, keys, on_down, on_shift_down, on_shift_up, on_up;

    keys = $('.keyboard .key');
    key_nodes = {};
    $.each(keys, function(_, node) {
      var id, name;
      node = $(node);
      id = node.attr("id");
      name = id.substr(4);
      return key_nodes[name] = node;
    });
    on_down = function(node) {
      return node.addClass("pressed");
    };
    on_up = function(node) {
      return node.removeClass("pressed");
    };
    on_shift_down = function(node) {
      return node.addClass("shift_pressed");
    };
    on_shift_up = function(node) {
      return node.removeClass("shift_pressed");
    };
    combos = [
      {
        keys: "`",
        on_keydown: function() {
          return on_down(key_nodes.accent);
        },
        on_keyup: function() {
          return on_up(key_nodes.accent);
        }
      }, {
        keys: "~",
        on_keydown: function() {
          return on_shift_down(key_nodes.accent);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.accent);
        }
      }, {
        keys: "1",
        on_keydown: function() {
          return on_down(key_nodes.one);
        },
        on_keyup: function() {
          return on_up(key_nodes.one);
        }
      }, {
        keys: "!",
        on_keydown: function() {
          return on_shift_down(key_nodes.one);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.one);
        }
      }, {
        keys: "2",
        on_keydown: function() {
          return on_down(key_nodes.two);
        },
        on_keyup: function() {
          return on_up(key_nodes.two);
        }
      }, {
        keys: "@",
        on_keydown: function() {
          return on_shift_down(key_nodes.two);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.two);
        }
      }, {
        keys: "3",
        on_keydown: function() {
          return on_down(key_nodes.three);
        },
        on_keyup: function() {
          return on_up(key_nodes.three);
        }
      }, {
        keys: "#",
        on_keydown: function() {
          return on_shift_down(key_nodes.three);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.three);
        }
      }, {
        keys: "4",
        on_keydown: function() {
          return on_down(key_nodes.four);
        },
        on_keyup: function() {
          return on_up(key_nodes.four);
        }
      }, {
        keys: "$",
        on_keydown: function() {
          return on_shift_down(key_nodes.four);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.four);
        }
      }, {
        keys: "5",
        on_keydown: function() {
          return on_down(key_nodes.five);
        },
        on_keyup: function() {
          return on_up(key_nodes.five);
        }
      }, {
        keys: "%",
        on_keydown: function() {
          return on_shift_down(key_nodes.five);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.five);
        }
      }, {
        keys: "6",
        on_keydown: function() {
          return on_down(key_nodes.six);
        },
        on_keyup: function() {
          return on_up(key_nodes.six);
        }
      }, {
        keys: "^",
        on_keydown: function() {
          return on_shift_down(key_nodes.six);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.six);
        }
      }, {
        keys: "7",
        on_keydown: function() {
          return on_down(key_nodes.seven);
        },
        on_keyup: function() {
          return on_up(key_nodes.seven);
        }
      }, {
        keys: "&",
        on_keydown: function() {
          return on_shift_down(key_nodes.seven);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.seven);
        }
      }, {
        keys: "8",
        on_keydown: function() {
          return on_down(key_nodes.eight);
        },
        on_keyup: function() {
          return on_up(key_nodes.eight);
        }
      }, {
        keys: "*",
        on_keydown: function() {
          return on_shift_down(key_nodes.eight);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.eight);
        }
      }, {
        keys: "9",
        on_keydown: function() {
          return on_down(key_nodes.nine);
        },
        on_keyup: function() {
          return on_up(key_nodes.nine);
        }
      }, {
        keys: "(",
        on_keydown: function() {
          return on_shift_down(key_nodes.nine);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.nine);
        }
      }, {
        keys: "0",
        on_keydown: function() {
          return on_down(key_nodes.zero);
        },
        on_keyup: function() {
          return on_up(key_nodes.zero);
        }
      }, {
        keys: ")",
        on_keydown: function() {
          return on_shift_down(key_nodes.zero);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.zero);
        }
      }, {
        keys: "-",
        on_keydown: function() {
          return on_down(key_nodes.hyphen);
        },
        on_keyup: function() {
          return on_up(key_nodes.hyphen);
        }
      }, {
        keys: "_",
        on_keydown: function() {
          return on_shift_down(key_nodes.hyphen);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.hyphen);
        }
      }, {
        keys: "=",
        on_keydown: function() {
          return on_down(key_nodes.equals);
        },
        on_keyup: function() {
          return on_up(key_nodes.equals);
        }
      }, {
        keys: "+",
        on_keydown: function() {
          return on_shift_down(key_nodes.equals);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.equals);
        }
      }, {
        keys: "backspace",
        on_keydown: function() {
          return on_down(key_nodes.backspace);
        },
        on_keyup: function() {
          return on_up(key_nodes.backspace);
        }
      }, {
        keys: "tab",
        on_keydown: function() {
          return on_down(key_nodes.tab);
        },
        on_keyup: function() {
          return on_up(key_nodes.tab);
        }
      }, {
        keys: "q",
        on_keydown: function() {
          return on_down(key_nodes.q);
        },
        on_keyup: function() {
          return on_up(key_nodes.q);
        }
      }, {
        keys: "w",
        on_keydown: function() {
          return on_down(key_nodes.w);
        },
        on_keyup: function() {
          return on_up(key_nodes.w);
        }
      }, {
        keys: "e",
        on_keydown: function() {
          return on_down(key_nodes.e);
        },
        on_keyup: function() {
          return on_up(key_nodes.e);
        }
      }, {
        keys: "r",
        on_keydown: function() {
          return on_down(key_nodes.r);
        },
        on_keyup: function() {
          return on_up(key_nodes.r);
        }
      }, {
        keys: "t",
        on_keydown: function() {
          return on_down(key_nodes.t);
        },
        on_keyup: function() {
          return on_up(key_nodes.t);
        }
      }, {
        keys: "y",
        on_keydown: function() {
          return on_down(key_nodes.y);
        },
        on_keyup: function() {
          return on_up(key_nodes.y);
        }
      }, {
        keys: "u",
        on_keydown: function() {
          return on_down(key_nodes.u);
        },
        on_keyup: function() {
          return on_up(key_nodes.u);
        }
      }, {
        keys: "i",
        on_keydown: function() {
          return on_down(key_nodes.i);
        },
        on_keyup: function() {
          return on_up(key_nodes.i);
        }
      }, {
        keys: "o",
        on_keydown: function() {
          return on_down(key_nodes.o);
        },
        on_keyup: function() {
          return on_up(key_nodes.o);
        }
      }, {
        keys: "p",
        on_keydown: function() {
          return on_down(key_nodes.p);
        },
        on_keyup: function() {
          return on_up(key_nodes.p);
        }
      }, {
        keys: "[",
        on_keydown: function() {
          return on_down(key_nodes.left_bracket);
        },
        on_keyup: function() {
          return on_up(key_nodes.left_bracket);
        }
      }, {
        keys: "{",
        on_keydown: function() {
          return on_shift_down(key_nodes.left_bracket);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.left_bracket);
        }
      }, {
        keys: "]",
        on_keydown: function() {
          return on_down(key_nodes.right_bracket);
        },
        on_keyup: function() {
          return on_up(key_nodes.right_bracket);
        }
      }, {
        keys: "}",
        on_keydown: function() {
          return on_shift_down(key_nodes.right_bracket);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.right_bracket);
        }
      }, {
        keys: "\\",
        on_keydown: function() {
          return on_down(key_nodes.backslash);
        },
        on_keyup: function() {
          return on_up(key_nodes.backslash);
        }
      }, {
        keys: "|",
        on_keydown: function() {
          return on_shift_down(key_nodes.backslash);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.backslash);
        }
      }, {
        keys: "caps_lock",
        on_keydown: function() {
          return on_down(key_nodes.caps_lock);
        },
        on_keyup: function() {
          return on_up(key_nodes.caps_lock);
        }
      }, {
        keys: "a",
        on_keydown: function() {
          return on_down(key_nodes.a);
        },
        on_keyup: function() {
          return on_up(key_nodes.a);
        }
      }, {
        keys: "s",
        on_keydown: function() {
          return on_down(key_nodes.s);
        },
        on_keyup: function() {
          return on_up(key_nodes.s);
        }
      }, {
        keys: "d",
        on_keydown: function() {
          return on_down(key_nodes.d);
        },
        on_keyup: function() {
          return on_up(key_nodes.d);
        }
      }, {
        keys: "f",
        on_keydown: function() {
          return on_down(key_nodes.f);
        },
        on_keyup: function() {
          return on_up(key_nodes.f);
        }
      }, {
        keys: "g",
        on_keydown: function() {
          return on_down(key_nodes.g);
        },
        on_keyup: function() {
          return on_up(key_nodes.g);
        }
      }, {
        keys: "h",
        on_keydown: function() {
          return on_down(key_nodes.h);
        },
        on_keyup: function() {
          return on_up(key_nodes.h);
        }
      }, {
        keys: "j",
        on_keydown: function() {
          return on_down(key_nodes.j);
        },
        on_keyup: function() {
          return on_up(key_nodes.j);
        }
      }, {
        keys: "k",
        on_keydown: function() {
          return on_down(key_nodes.k);
        },
        on_keyup: function() {
          return on_up(key_nodes.k);
        }
      }, {
        keys: "l",
        on_keydown: function() {
          return on_down(key_nodes.l);
        },
        on_keyup: function() {
          return on_up(key_nodes.l);
        }
      }, {
        keys: ";",
        on_keydown: function() {
          return on_down(key_nodes.semicolon);
        },
        on_keyup: function() {
          return on_up(key_nodes.semicolon);
        }
      }, {
        keys: ":",
        on_keydown: function() {
          return on_shift_down(key_nodes.semicolon);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.semicolon);
        }
      }, {
        keys: "\'",
        on_keydown: function() {
          return on_down(key_nodes.apostrophe);
        },
        on_keyup: function() {
          return on_up(key_nodes.apostrophe);
        }
      }, {
        keys: "\"",
        on_keydown: function() {
          return on_shift_down(key_nodes.apostrophe);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.apostrophe);
        }
      }, {
        keys: "enter",
        on_keydown: function() {
          return on_down(key_nodes.enter);
        },
        on_keyup: function() {
          return on_up(key_nodes.enter);
        }
      }, {
        keys: "shift",
        on_keydown: function() {
          on_down(key_nodes.left_shift);
          return on_down(key_nodes.right_shift);
        },
        on_keyup: function() {
          on_up(key_nodes.left_shift);
          return on_up(key_nodes.right_shift);
        }
      }, {
        keys: "z",
        on_keydown: function() {
          return on_down(key_nodes.z);
        },
        on_keyup: function() {
          return on_up(key_nodes.z);
        }
      }, {
        keys: "x",
        on_keydown: function() {
          return on_down(key_nodes.x);
        },
        on_keyup: function() {
          return on_up(key_nodes.x);
        }
      }, {
        keys: "c",
        on_keydown: function() {
          return on_down(key_nodes.c);
        },
        on_keyup: function() {
          return on_up(key_nodes.c);
        }
      }, {
        keys: "v",
        on_keydown: function() {
          return on_down(key_nodes.v);
        },
        on_keyup: function() {
          return on_up(key_nodes.v);
        }
      }, {
        keys: "b",
        on_keydown: function() {
          return on_down(key_nodes.b);
        },
        on_keyup: function() {
          return on_up(key_nodes.b);
        }
      }, {
        keys: "n",
        on_keydown: function() {
          return on_down(key_nodes.n);
        },
        on_keyup: function() {
          return on_up(key_nodes.n);
        }
      }, {
        keys: "m",
        on_keydown: function() {
          return on_down(key_nodes.m);
        },
        on_keyup: function() {
          return on_up(key_nodes.m);
        }
      }, {
        keys: ",",
        on_keydown: function() {
          return on_down(key_nodes.comma);
        },
        on_keyup: function() {
          return on_up(key_nodes.comma);
        }
      }, {
        keys: "<",
        on_keydown: function() {
          return on_shift_down(key_nodes.comma);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.comma);
        }
      }, {
        keys: ".",
        on_keydown: function() {
          return on_down(key_nodes.period);
        },
        on_keyup: function() {
          return on_up(key_nodes.period);
        }
      }, {
        keys: ">",
        on_keydown: function() {
          return on_shift_down(key_nodes.period);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.period);
        }
      }, {
        keys: "/",
        on_keydown: function() {
          return on_down(key_nodes.forwardslash);
        },
        on_keyup: function() {
          return on_up(key_nodes.forwardslash);
        }
      }, {
        keys: "?",
        on_keydown: function() {
          return on_shift_down(key_nodes.forwardslash);
        },
        on_keyup: function() {
          return on_shift_up(key_nodes.forwardslash);
        }
      }, {
        keys: "ctrl",
        on_keydown: function() {
          on_down(key_nodes.left_ctrl);
          return on_down(key_nodes.right_ctrl);
        },
        on_keyup: function() {
          on_up(key_nodes.left_ctrl);
          return on_up(key_nodes.right_ctrl);
        }
      }, {
        keys: "alt",
        on_keydown: function() {
          on_down(key_nodes.left_alt);
          return on_down(key_nodes.right_alt);
        },
        on_keyup: function() {
          on_up(key_nodes.left_alt);
          return on_up(key_nodes.right_alt);
        }
      }, {
        keys: "cmd",
        on_keydown: function() {
          on_down(key_nodes.left_cmd);
          return on_down(key_nodes.right_cmd);
        },
        on_keyup: function() {
          on_up(key_nodes.left_cmd);
          return on_up(key_nodes.right_cmd);
        }
      }, {
        keys: "space",
        on_keydown: function() {
          return on_down(key_nodes.space);
        },
        on_keyup: function() {
          return on_up(key_nodes.space);
        }
      }, {
        keys: "up",
        on_keydown: function() {
          return on_down(key_nodes.up);
        },
        on_keyup: function() {
          return on_up(key_nodes.up);
        }
      }, {
        keys: "down",
        on_keydown: function() {
          return on_down(key_nodes.down);
        },
        on_keyup: function() {
          return on_up(key_nodes.down);
        }
      }, {
        keys: "left",
        on_keydown: function() {
          return on_down(key_nodes.left);
        },
        on_keyup: function() {
          return on_up(key_nodes.left);
        }
      }, {
        keys: "right",
        on_keydown: function() {
          return on_down(key_nodes.right);
        },
        on_keyup: function() {
          return on_up(key_nodes.right);
        }
      }, {
        keys: "print",
        on_keydown: function(e) {
          return on_down(key_nodes.print);
        },
        on_keyup: function() {
          return on_up(key_nodes.print);
        }
      }, {
        keys: "scroll",
        on_keydown: function() {
          return on_down(key_nodes.scroll_lock);
        },
        on_keyup: function() {
          return on_up(key_nodes.scroll_lock);
        }
      }, {
        keys: "pause",
        on_keydown: function() {
          return on_down(key_nodes.pause_break);
        },
        on_keyup: function() {
          return on_up(key_nodes.pause_break);
        }
      }, {
        keys: "insert",
        on_keydown: function() {
          return on_down(key_nodes.insert);
        },
        on_keyup: function() {
          return on_up(key_nodes.insert);
        }
      }, {
        keys: "home",
        on_keydown: function() {
          return on_down(key_nodes.home);
        },
        on_keyup: function() {
          return on_up(key_nodes.home);
        }
      }, {
        keys: "pageup",
        on_keydown: function() {
          return on_down(key_nodes.page_up);
        },
        on_keyup: function() {
          return on_up(key_nodes.page_up);
        }
      }, {
        keys: "delete",
        on_keydown: function() {
          return on_down(key_nodes["delete"]);
        },
        on_keyup: function() {
          return on_up(key_nodes["delete"]);
        }
      }, {
        keys: "end",
        on_keydown: function() {
          return on_down(key_nodes.end);
        },
        on_keyup: function() {
          return on_up(key_nodes.end);
        }
      }, {
        keys: "pagedown",
        on_keydown: function() {
          return on_down(key_nodes.page_down);
        },
        on_keyup: function() {
          return on_up(key_nodes.page_down);
        }
      }, {
        keys: "num",
        on_keydown: function() {
          return on_down(key_nodes.num_lock);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_lock);
        }
      }, {
        keys: "num_divide",
        on_keydown: function() {
          return on_down(key_nodes.divide);
        },
        on_keyup: function() {
          return on_up(key_nodes.divide);
        }
      }, {
        keys: "num_multiply",
        on_keydown: function() {
          return on_down(key_nodes.multiply);
        },
        on_keyup: function() {
          return on_up(key_nodes.multiply);
        }
      }, {
        keys: "num_subtract",
        on_keydown: function() {
          return on_down(key_nodes.subtract);
        },
        on_keyup: function() {
          return on_up(key_nodes.subtract);
        }
      }, {
        keys: "num_add",
        on_keydown: function() {
          return on_down(key_nodes.add);
        },
        on_keyup: function() {
          return on_up(key_nodes.add);
        }
      }, {
        keys: "num_enter",
        on_keydown: function() {
          return on_down(key_nodes.num_enter);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_enter);
        }
      }, {
        keys: "num_decimal",
        on_keydown: function() {
          return on_down(key_nodes.num_decimal);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_decimal);
        }
      }, {
        keys: "num_0",
        on_keydown: function() {
          return on_down(key_nodes.num_0);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_0);
        }
      }, {
        keys: "num_1",
        on_keydown: function() {
          return on_down(key_nodes.num_1);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_1);
        }
      }, {
        keys: "num_2",
        on_keydown: function() {
          return on_down(key_nodes.num_2);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_2);
        }
      }, {
        keys: "num_3",
        on_keydown: function() {
          return on_down(key_nodes.num_3);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_3);
        }
      }, {
        keys: "num_4",
        on_keydown: function() {
          return on_down(key_nodes.num_4);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_4);
        }
      }, {
        keys: "num_5",
        on_keydown: function() {
          return on_down(key_nodes.num_5);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_5);
        }
      }, {
        keys: "num_6",
        on_keydown: function() {
          return on_down(key_nodes.num_6);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_6);
        }
      }, {
        keys: "num_7",
        on_keydown: function() {
          return on_down(key_nodes.num_7);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_7);
        }
      }, {
        keys: "num_8",
        on_keydown: function() {
          return on_down(key_nodes.num_8);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_8);
        }
      }, {
        keys: "num_9",
        on_keydown: function() {
          return on_down(key_nodes.num_9);
        },
        on_keyup: function() {
          return on_up(key_nodes.num_9);
        }
      }
    ];
    return listener.register_many(combos);
  };

  demos = {
    demo_1: {
      wire: function() {},
      unwire: function() {}
    },
    demo_2: {
      wire: function() {
        var dom_string, i, total_spots, _j;
        demo_2.registered_combos = listener.register_many(demo_2.combos);
        total_spots = 12 * 6;
        total_spots += 1;
        dom_string = "";
        for (i = _j = 0; 0 <= total_spots ? _j < total_spots : _j > total_spots; i = 0 <= total_spots ? ++_j : --_j) {
          dom_string += "<div></div>";
        }
        $('#movement_grid').empty().append(dom_string);
        demo_2.piece = $('#movement_grid div:first-of-type');
        return demo_2.unit_size = parseInt(demo_2.piece.outerWidth(), 10);
      },
      unwire: function() {
        return listener.unregister_many(demo_2.registered_combos);
      }
    },
    demo_3: {
      wire: function() {
        var list;
        demo_3.registered_combos = listener.register_many(demo_3.combos);
        list = $('#counting_list li');
        return list.bind("click", function() {
          list.removeClass("active");
          return $(this).addClass("active");
        });
      },
      unwire: function() {
        listener.unregister_many(demo_3.registered_combos);
        return $('#counting_list li').unbind("click");
      }
    },
    demo_4: {
      wire: function() {
        return demo_4.registered_combos = listener.register_many(demo_4.combos);
      },
      unwire: function() {
        return listener.unregister_many(demo_4.registered_combos);
      }
    }
  };

  unwire_demo = function(demo_node) {
    return wire_demo(demo_node, false);
  };

  wire_demo = function(demo_node, wiring) {
    var demo, demo_obj;
    if (wiring == null) {
      wiring = true;
    }
    demo = demo_node.data("demo");
    demo_obj = demos[demo];
    if (!demo_obj) {
      return false;
    }
    if (wiring) {
      return demo_obj.wire();
    }
    return demo_obj.unwire();
  };

  get_active_demo = function() {
    var return_node;
    return_node = false;
    $('.examples .demo').each(function(_, node) {
      node = $(node);
      if (node.css("display") === "block") {
        return return_node = node;
      }
    });
    return return_node;
  };

  activate_demo = function(demo_name) {
    var active_demo, demo, nav_node;
    demo = $(".examples .demo[data-demo=" + demo_name + "]");
    if (!demo.length) {
      return false;
    }
    active_demo = get_active_demo();
    if (demo === active_demo) {
      return false;
    }
    if (active_demo) {
      unwire_demo(active_demo);
      active_demo.css("display", "none");
    }
    demo.css("display", "block");
    nav_node = $(".overview li a[data-demo=" + demo_name + "]");
    $('.overview li a').removeClass("active");
    nav_node.addClass("active");
    return wire_demo(demo);
  };

  activate_next_demo = function() {
    var active_demo, next_demo, next_name;
    active_demo = get_active_demo();
    next_demo = active_demo.next();
    if (next_demo.length) {
      next_name = next_demo.data("demo");
    } else {
      next_name = "demo_1";
    }
    return activate_demo(next_name);
  };

  activate_prev_demo = function() {
    var active_demo, next_demo, next_name;
    active_demo = get_active_demo();
    next_demo = active_demo.prev();
    if (next_demo.length) {
      next_name = next_demo.data("demo");
    } else {
      next_name = "demo_5";
    }
    return activate_demo(next_name);
  };

  bind_demos = function() {
    $('body').delegate('a.demo_link', 'click', function() {
      var demo;
      demo = $(this).data("demo");
      return activate_demo(demo);
    });
    listener.register_combo({
      keys: "`",
      is_exclusive: true,
      prevent_default: true,
      on_keydown: activate_next_demo
    });
    listener.simple_combo("1", function() {
      return activate_demo("demo_1");
    }, true);
    listener.simple_combo("2", function() {
      return activate_demo("demo_2");
    }, true);
    listener.simple_combo("3", function() {
      return activate_demo("demo_3");
    }, true);
    listener.simple_combo("4", function() {
      return activate_demo("demo_4");
    }, true);
    return listener.simple_combo("5", function() {
      return activate_demo("demo_5");
    }, true);
  };

  konami_egg = function() {
    return listener.sequence_combo("up up down down left right left right b a enter", function() {
      return alert("You might know that as the 'Contra code', but the Konami code was first used in Gradius for the NES in 1986.");
    });
  };

  bind_keyboard();

  bind_demos();

  activate_demo("demo_1");

  konami_egg();

  if (navigator.userAgent.indexOf("Mac OS X") !== -1) {
    $('#key_scroll_lock, #key_pause_break, #key_insert').css("opacity", 0.5);
  }

}).call(this);

*/
