---
title: PHP-Knowledge
description: description
sidebar:
  label: PHP in Laravel
  order: 1
tableOfContents: true
---
## Callback-Funktionen (erstmal nur Notizen)

```php title="SurveyBlockController.php"
// Lösung 1
$view = $survey->isIndividual('Individual/ShowSurvey', 'Participant/Index');
return Inertia::render($view, [
    'surveyBlocks' => $surveyBlocks,
    'survey' => $survey
]);

// Lösung 1,5
$view = $survey->isIndividualAdv(
    fn() => 'Participant/Index',
    fn() => 'Individual/ShowSurvey'
);
return Inertia::render($view, [
    'surveyBlocks' => $surveyBlocks,
    'survey' => $survey
]);

// Lösung 2
$indiSolution = function() use ($surveyBlocks, $survey) {
    return Inertia::render('Individual/ShowSurvey', [
        'surveyBlocks' => $surveyBlocks,
        'survey' => $survey
    ]);
};
$survey->isIndividualAdv(
    function() use ($surveyBlocks, $survey) {
        return Inertia::render('Participant/Index', [
            'surveyBlocks' => $surveyBlocks,
            'survey' => $survey
        ]);
    },
    $indiSolution
);
```

```php title="Survey.php"
function isIndividual($view1, $view2): string {
  if ($this->id === 0) {
      return $view1;
  }

  return $view2;
}

function isIndividualAdv($cb1, $cb2) {
  if ($this->id === 0) {
      $cb1();
  }

  $cb2();
}
```

```php
/** @var Survey $survey */
```