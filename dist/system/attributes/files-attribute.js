System.register(['aurelia-framework', '../handlers/file-handler'], function (_export) {
  'use strict';

  var inject, customAttribute, bindable, FileHandler, FilesAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
    }, function (_handlersFileHandler) {
      FileHandler = _handlersFileHandler.FileHandler;
    }],
    execute: function () {
      FilesAttribute = (function () {
        var _instanceInitializers = {};

        function FilesAttribute(element) {
          _classCallCheck(this, _FilesAttribute);

          _defineDecoratedPropertyDescriptor(this, 'onLoaded', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'onProgress', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'onError', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'fileFilter', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'maxFileSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'readAs', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'allowDrop', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'hoverClass', _instanceInitializers);

          this.element = element;
        }

        var _FilesAttribute = FilesAttribute;

        _createDecoratedClass(_FilesAttribute, [{
          key: 'bind',
          value: function bind() {
            if (!this.onLoaded) {
              throw new Error('You must specify an onLoaded callback at minimum');
            }

            var fileHandler = new FileHandler(this.onLoaded, this.onProgress, this.onError, this.fileFilter, this.maxFileSize, this.readAs, this.hoverClass);

            this.element.addEventListener('change', fileHandler.handleFileSelected, false);

            if (this.allowDrop) {
              this.element.addEventListener('dragover', fileHandler.handleFileDrag, false);
              this.element.addEventListener('dragleave', fileHandler.handleFileDrag, false);
              this.element.addEventListener('drop', fileHandler.handleDrop, false);
            }
          }
        }, {
          key: 'onLoaded',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'onProgress',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'onError',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'fileFilter',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'maxFileSize',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'readAs',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'allowDrop',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'hoverClass',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        FilesAttribute = inject(Element)(FilesAttribute) || FilesAttribute;
        FilesAttribute = customAttribute('files')(FilesAttribute) || FilesAttribute;
        return FilesAttribute;
      })();

      _export('FilesAttribute', FilesAttribute);
    }
  };
});