import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Architectour Planner': 'Architectour Planner',
      'Selected Works': 'Selected Works',
      'No work selected': 'No work selected',
      'Travel Plan': 'Travel Plan',
      'Language': 'Language',
      'Generate Route': 'Generate Route',
      'Select Origin': 'Select Origin',
      'Origin': 'Origin',
      'None': 'None',
      'Total Distance': 'Total Distance',
      'Total Time': 'Total Time',
      'Total Cost': 'Total Cost',
      'Export PDF': 'Export PDF',
      'Copy Share URL': 'Copy Share URL',
      'Share URL copied': 'Share URL copied',
      'Distance': 'Distance',
      'Time': 'Time',
      'Cost': 'Cost',
      'Mode': 'Mode',
      'Transport Mode': 'Transport Mode',
      'Flight': 'Flight',
      'Train': 'Train',
      'Bus': 'Bus',
      'Car': 'Car',
    },
  },
  ja: {
    translation: {
      'Architectour Planner': '建築巨匠作品巡りプランナー',
      'Selected Works': '選択した作品',
      'No work selected': '選択された作品がありません',
      'Travel Plan': '旅行プラン',
      'Language': '言語',
      'Generate Route': 'ルート生成',
      'Select Origin': '出発地を選択',
      'Origin': '出発地',
      'None': '未選択',
      'Total Distance': '総距離',
      'Total Time': '総時間',
      'Total Cost': '総費用',
      'Export PDF': 'PDF エクスポート',
      'Copy Share URL': '共有 URL コピー',
      'Share URL copied': 'URL をコピーしました',
      'Distance': '距離',
      'Time': '時間',
      'Cost': '費用',
      'Mode': '手段',
      'Transport Mode': '移動手段',
      'Flight': '飛行機',
      'Train': '列車',
      'Bus': 'バス',
      'Car': '車',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ja',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
